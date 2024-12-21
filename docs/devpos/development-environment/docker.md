# Docker

```bash
#!/bin/sh

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun

# Docker mirror
cat <<EOF | sudo tee /etc/docker/daemon.json
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://docker.jianmuhub.com",
        "https://huecker.io",
        "https://dockerhub.timeweb.cloud",
        "https://dockerhub1.beget.com",
        "https://noohub.ru",
        "https://dockerhub.icu"
    ],
    "host": ["tcp://0.0.0.0:2375"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

# Install Docker Compose
sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# sudo groupadd docker

# Allow current user to run Docker commands
sudo usermod -aG docker $USER
```
