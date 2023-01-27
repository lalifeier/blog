# clash

## Systemd

### 安装 clash

```bash
curl -L -O https://github.com/Dreamacro/clash/releases/download/v1.12.0/clash-linux-amd64-v1.12.0.gz
sudo mv clash-linux-amd64-v1.12.0 /usr/local/bin/clash
chmod +x /usr/local/bin/clash
```

### 初始化配置文件

```bash
mkdir /etc/clash
cd /etc/clash

# Country.mmdb
sudo wget https://github.com/Dreamacro/maxmind-geoip/releases/download/20230112/Country.mmdb
# sudo wget https://cdn.jsdelivr.net/gh/baixf-xyz/baixf-xyz@latest/Country.mmdb
# sudo wget https://www.sub-speeder.com/client-download/Country.mmdb

# config.yaml
sudo wget -O /etc/clash/config.yaml [你的订阅链接]

# ui
# clash-dashboard
# sudo git clone -b gh-pages --depth 1 https://github.com/Dreamacro/clash-dashboard ui
# yacd-dashboard
sudo git clone -b gh-pages --depth 1 https://github.com/haishanh/yacd ui
```

### 修改配置文件

```yaml
# /etc/clash/config.yaml
port: 7890
socks-port: 7891
external-controller: :9090
external-ui: /etc/clash/ui
```

### 访问管理界面

- http://localhost:9090/ui
- http://clash.razord.top
- http://yacd.haishan.me

### 开机启动

```bash
# /etc/systemd/system/clash.service
[Unit]
Description=clash daemon

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/clash -d /etc/clash/
Restart=on-failure

[Install]
WantedBy=multi-user.target

# 重载 systemctl daemon
systemctl daemon-reload
```

### 设置系统代理

```bash
# 设置系统代理
#/etc/profile.d/proxy.sh

export http_proxy="127.0.0.1:7890"
export https_proxy="127.0.0.1:7890"
export all_proxy="http://127.0.0.1:7890"
export no_proxy="localhost, 127.0.0.1"

# 重载 /etc/profile 配置
source /etc/profile
```

### 配置定时更新订阅

#### 每周自动更新订阅配置文件

/etc/cron.weekly/clash.sh

```bash
#!/usr/bin/env bash
set -e

# 订阅链接地址
SUBSCRIBE=""
# web-ui存放目录，留空则保持默认不修改
WEB_UI=""
# API 端口，留空则保持默认不修改
CONTROLLER_API_PROT=""
# API 口令，留空则保持默认不修改
SECRET=""

CLASH_CONFIG="/etc/clash/config.yaml"


if [ -z "${SUBSCRIBE}" ]; then
    echo "Subscription address cannot be empty"
    exit 1
fi

systemctl stop clash

wget --no-proxy -O ${CLASH_CONFIG} ${SUBSCRIBE}

if [ -n "${WEB_UI}" ]; then
sed -i "s?^#\{0,1\} \{0,1\}external-ui.*?external-ui: ${WEB_UI}?" ${CLASH_CONFIG}
fi

if [ -n "${CONTROLLER_API_PROT}" ]; then
sed -i "s?^external-controller.*?external-controller: '0.0.0.0:${CONTROLLER_API_PROT}'?" ${CLASH_CONFIG}
fi

if [ -n "${SECRET}" ]; then
sed -i "s?^secret.*?secret: '${SECRET}'?" ${CLASH_CONFIG}
fi

systemctl start clash
```

```bash
chmod 0755 /etc/cron.weekly/clash.sh
```

## Docker

### docker-compose.yml

```yml
version: "3.7"

networks:
  app_net:
    external: true

# localhost:9090/ui
services:
  clash:
    image: dreamacro/clash:latest
    container_name: clash
    ports:
      - 7890:7890
      - 7891:7891
      - 9090:9090 # external controller (Restful API)
    networks:
      - app_net
    restart: always
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./Country.mmdb:/root/.config/clash/Country.mmdb
      - ./config.yaml:/root/.config/clash/config.yaml
      - ./ui:/ui # dashboard volume
    # # TUN
    # cap_add:
    #   - NET_ADMIN
    # devices:
    #   - /dev/net/tun
```

### 初始化配置文件

```bash
#!/bin/sh

# Country.mmdb
wget https://github.com/Dreamacro/maxmind-geoip/releases/download/20230112/Country.mmdb

# config.yaml
sudo wget -O /etc/clash/config.yaml [你的订阅链接]

# ui
# clash-dashboard
# git clone -b gh-pages --depth 1 https://github.com/Dreamacro/clash-dashboard ui
# yacd-dashboard
git clone -b gh-pages --depth 1 https://github.com/haishanh/yacd ui
```

### 修改配置文件

```yaml
# config.yaml
port: 7890
socks-port: 7891
external-controller: :9090
external-ui: /ui
```

### 访问管理界面

- http://localhost:9090/ui
- http://clash.razord.top
- http://yacd.haishan.me
