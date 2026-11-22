---
## title: 在 Linux 上配置和使用 DNS over HTTPS (DoH)
---

# 在 Linux 上配置和使用 DNS over HTTPS (DoH)

DNS over HTTPS (DoH) 提供了一种通过 HTTPS 协议解析 DNS 请求的方法，提升了隐私和安全性。

## 安装和使用

### 安装 Cloudflared

首先，添加 Cloudflare 的 GPG 密钥和软件源，并安装 Cloudflared：

```bash
# 添加 Cloudflare GPG 密钥
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg > /dev/null

# 添加 Cloudflare 软件源
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list

# 更新软件包列表并安装 Cloudflared
sudo apt-get update && sudo apt-get install -y cloudflared
```

### 配置 Cloudflared

这里使用 `proxy-dns` 模式，将本机的普通 DNS 请求转发到 HTTPS 上游。只监听
`127.0.0.1`，避免把 DNS 代理暴露给局域网。

### 设置 Cloudflared 服务

创建 systemd 服务文件，并使其在系统启动时自动运行：


```bash
sudo tee /etc/systemd/system/cloudflared-proxy-dns.service >/dev/null <<EOF
[Unit]
Description=DNS over HTTPS (DoH) proxy client
Wants=network-online.target nss-lookup.target
After=network-online.target
Before=nss-lookup.target

[Service]
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
DynamicUser=yes
ExecStart=/usr/local/bin/cloudflared proxy-dns \
  --address 127.0.0.1 \
  --port 53 \
  --upstream https://223.5.5.5/dns-query \
  --upstream https://1.12.12.12/dns-query \
  --upstream https://101.101.101.101/dns-query
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
EOF

# 启用并启动 Cloudflared 服务
sudo systemctl daemon-reload
sudo systemctl enable --now cloudflared-proxy-dns.service
```

### 更新系统 DNS 设置

Ubuntu 通常由 NetworkManager 和 systemd-resolved 管理 DNS。不要直接编辑
`/etc/resolv.conf`，否则网络重连或重启后设置会被覆盖。将 NetworkManager
设置为使用 systemd-resolved，并让 resolved 只把请求转发给本地 Cloudflared：

```bash
sudo mkdir -p /etc/systemd/resolved.conf.d /etc/NetworkManager/conf.d

sudo tee /etc/systemd/resolved.conf.d/99-cloudflared-doh.conf >/dev/null <<'EOF'
[Resolve]
# 清空主配置中的 DHCP/旧 DNS，只保留本地 DoH 代理
DNS=
DNS=127.0.0.1
FallbackDNS=
Domains=~.
EOF

sudo tee /etc/NetworkManager/conf.d/10-dns-systemd-resolved.conf >/dev/null <<'EOF'
[main]
dns=systemd-resolved
EOF

# 将当前连接的 DHCP DNS 替换为本地代理，并关闭 IPv6 的自动 DNS
nmcli connection modify "<连接名>" \
  ipv4.ignore-auto-dns yes ipv4.dns 127.0.0.1 \
  ipv6.ignore-auto-dns yes ipv6.dns ""

sudo systemctl restart systemd-resolved
sudo ln -sfn /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
nmcli connection up "<连接名>"
```

将 `<连接名>` 替换为 `nmcli connection show --active` 中的实际连接名。
`/etc/resolv.conf` 应指向 `127.0.0.53`，这是 systemd-resolved 的本地 stub；
它再把请求转给 `127.0.0.1:53` 的 Cloudflared。

### 验证 DoH 配置

使用 `dig` 命令验证 DoH 是否配置成功：

```bash
dig @127.0.0.1 example.com A
resolvectl status
resolvectl query example.com
```

如果 `resolvectl status` 中当前 DNS 服务器显示为 `127.0.0.1`，并且
`dig @127.0.0.1` 和普通的 `resolvectl query` 都能正常解析，说明全系统
DNS 已经通过 Cloudflared 使用 DoH。服务状态可用以下命令检查：

```bash
systemctl is-enabled cloudflared-proxy-dns.service
systemctl status cloudflared-proxy-dns.service
journalctl -u cloudflared-proxy-dns.service -b
```

`resolvectl query` 显示 IP 地址或 `NXDOMAIN` 都说明查询得到了 DNS 响应；
`NXDOMAIN` 只表示所查域名不存在。若查询超时或返回 `SERVFAIL`，查看 journal
中的上游错误，并替换或删减不可用的 `--upstream` 地址。


## 参考资料

- [Cloudflare 使用 DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/dns-over-https-client/)
- [Cloudflare 安装](https://pkg.cloudflare.com/index.html)
