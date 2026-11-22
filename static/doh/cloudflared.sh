#!/bin/bash
set -euo pipefail

echo "欢迎使用 Cloudflared 安装和配置脚本"

if [[ ${EUID} -ne 0 ]]; then
  echo "请使用 sudo 或 root 用户运行此脚本" >&2
  exit 1
fi

for command_name in curl lsb_release nmcli systemctl; do
  if ! command -v "${command_name}" >/dev/null 2>&1; then
    echo "缺少命令: ${command_name}" >&2
    exit 1
  fi
done

if ! systemctl is-active --quiet NetworkManager || ! systemctl is-active --quiet systemd-resolved; then
  echo "NetworkManager 和 systemd-resolved 必须处于运行状态。" >&2
  exit 1
fi

active_connection_uuid="$(nmcli -t -f UUID,TYPE connection show --active \
  | awk -F: '$2 == "802-11-wireless" || $2 == "802-3-ethernet" { print $1; exit }')"
if [[ -z "${active_connection_uuid}" ]]; then
  echo "未找到活动的 Wi-Fi 或以太网连接。请先连接网络后重试。" >&2
  exit 1
fi

echo "正在安装 Cloudflared..."
install -d -m 0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg \
  -o /usr/share/keyrings/cloudflare-main.gpg
chmod 0644 /usr/share/keyrings/cloudflare-main.gpg
printf 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared %s main\n' \
  "$(lsb_release -cs)" > /etc/apt/sources.list.d/cloudflared.list
apt-get update
apt-get install -y cloudflared

cloudflared_bin="$(command -v cloudflared)"

echo "正在配置 Cloudflared systemd 服务..."
cat > /etc/systemd/system/cloudflared-proxy-dns.service <<EOF
[Unit]
Description=DNS over HTTPS (DoH) proxy client
Wants=network-online.target nss-lookup.target
After=network-online.target
Before=nss-lookup.target

[Service]
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
DynamicUser=yes
ExecStart=${cloudflared_bin} proxy-dns \\
  --address 127.0.0.1 \\
  --port 53 \\
  --upstream https://223.5.5.5/dns-query \\
  --upstream https://1.12.12.12/dns-query \\
  --upstream https://101.101.101.101/dns-query
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
EOF

echo "正在配置 systemd-resolved 和 NetworkManager..."
install -d -m 0755 /etc/systemd/resolved.conf.d /etc/NetworkManager/conf.d
cat > /etc/systemd/resolved.conf.d/99-cloudflared-doh.conf <<'EOF'
[Resolve]
DNS=
DNS=127.0.0.1
FallbackDNS=
Domains=~.
EOF

cat > /etc/NetworkManager/conf.d/10-dns-systemd-resolved.conf <<'EOF'
[main]
dns=systemd-resolved
EOF

while IFS=: read -r connection_uuid connection_type; do
  if [[ "${connection_type}" == "802-11-wireless" || "${connection_type}" == "802-3-ethernet" ]]; then
    nmcli connection modify "${connection_uuid}" \
      ipv4.ignore-auto-dns yes ipv4.dns 127.0.0.1 \
      ipv6.ignore-auto-dns yes ipv6.dns ""
  fi
done < <(nmcli -t -f UUID,TYPE connection show)

ln -sfn /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
systemctl restart NetworkManager
systemctl restart systemd-resolved
systemctl daemon-reload
systemctl enable cloudflared-proxy-dns.service
systemctl restart cloudflared-proxy-dns.service
nmcli connection up "${active_connection_uuid}"

echo "Cloudflared 安装和配置完成！"
echo "检查 DNS 配置: resolvectl status"
echo "测试解析: dig @127.0.0.1 example.com A && resolvectl query example.com"
