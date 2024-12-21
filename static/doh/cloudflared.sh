#!/bin/bash

echo "欢迎使用 Cloudflared 安装和配置脚本"
echo "--------------------------------------"

# 检查是否具有 sudo 权限
if [[ $EUID -ne 0 ]]; then
   echo "请使用 sudo 或 root 用户运行此脚本"
   exit 1
fi

# 创建目录并设置权限
echo "正在创建目录并设置权限..."
mkdir -p --mode=0755 /usr/share/keyrings

# 下载并添加 Cloudflare 的包签名密钥
echo "正在下载并添加 Cloudflare 的包签名密钥..."
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

# 添加 Cloudflare 的 apt 存储库
echo "正在添加 Cloudflare 的 apt 存储库..."
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/cloudflared.list

# 更新 apt 软件包列表并安装 Cloudflared
echo "正在更新软件包列表并安装 Cloudflared..."
apt-get update && apt-get install -y cloudflared

# 验证安装
echo "验证 Cloudflared 安装..."
cloudflared --version

# 创建 systemd 服务文件
echo "正在创建 systemd 服务文件..."
tee /etc/systemd/system/cloudflared-proxy-dns.service >/dev/null <<EOF
[Unit]
Description=DNS over HTTPS (DoH) proxy client
Wants=network-online.target nss-lookup.target
Before=nss-lookup.target

[Service]
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
DynamicUser=yes
ExecStart=/usr/local/bin/cloudflared proxy-dns

[Install]
WantedBy=multi-user.target
EOF

# 启用并启动 Cloudflared 服务
echo "正在启用并启动 Cloudflared 服务..."
systemctl enable --now cloudflared-proxy-dns

# 配置 DNS
echo "配置本地 DNS 解析为 127.0.0.1..."
sed -i '/^nameserver /d' /etc/resolv.conf
echo "nameserver 127.0.0.1" | tee -a /etc/resolv.conf

echo "Cloudflared 安装和配置完成！"
