---
## title: 在 Linux 上配置和使用 DNS over HTTPS (DoH)
---

# 在 Linux 上配置和使用 DNS over HTTPS (DoH)

DNS over HTTPS (DoH) 提供了一种通过 HTTPS 协议解析 DNS 请求的方法，提升了隐私和安全性。

## 1. 安装 Cloudflared

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

## 2. 配置 Cloudflared

### 修改默认配置

修改 `/etc/default/cloudflared` 文件，以使用自定义的上游 DNS 服务器：

```bash
sudo tee /etc/default/cloudflared >/dev/null <<EOF
CLOUDFLARED_OPTS="--upstream https://223.5.5.5/dns-query --upstream https://1.12.12.12/dns-query --upstream https://2400:3200::1/dns-query"
EOF
```

### 创建配置文件

或者，创建一个配置文件来设置 Cloudflared 以启用 DoH：

```bash
# sudo cloudflared tunnel create pihole

sudo mkdir -p /usr/local/etc/cloudflared

sudo tee /usr/local/etc/cloudflared/config.yml >/dev/null <<EOF
tunnel: 1d1261e0-xxxx-x1d1261e0xxx-xxxx-xxxxxxxxxxxxx
credentials-file: /etc/cloudflared/1d1261e0-xxxx-xxxx-xxxx-xxxxxxxxxxxxx.json
logfile: /var/log/cloudflared.log
proxy-dns: true
proxy-dns-address: 0.0.0.0
proxy-dns-port: 53
proxy-dns-upstream:
 - https://1.1.1.1/dns-query
 - https://1.0.0.1/dns-query
 - https://[2606:4700:4700::1111]/dns-query
 - https://[2606:4700:4700::1001]/dns-query
EOF
```

## 3. 设置 Cloudflared 服务

创建 systemd 服务文件，并使其在系统启动时自动运行：


```bash
sudo tee /etc/systemd/system/cloudflared-proxy-dns.service >/dev/null <<EOF
[Unit]
Description=DNS over HTTPS (DoH) proxy client
Wants=network-online.target nss-lookup.target
Before=nss-lookup.target

[Service]
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
DynamicUser=yes
EnvironmentFile=/etc/default/cloudflared
ExecStart=/usr/local/bin/cloudflared proxy-dns \$CLOUDFLARED_OPTS

[Install]
WantedBy=multi-user.target
EOF

# 启用并启动 Cloudflared 服务
sudo systemctl enable --now cloudflared-proxy-dns
```

## 4. 更新系统 DNS 设置

将系统的 DNS 设置指向 Cloudflared 代理：

```bash
sudo sed -i '1inameserver 127.0.0.1' /etc/resolv.conf
```

## 5. 验证 DoH 配置

使用 `dig` 命令验证 DoH 是否配置成功：

```bash
dig @127.0.0.1 example.com
```

如果输出显示正常解析了域名，说明 DoH 配置成功。


## 参考资料

- [Cloudflare 使用 DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/dns-over-https-client/)
- [Cloudflare 安装](https://pkg.cloudflare.com/index.html)
