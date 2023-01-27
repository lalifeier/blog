---
# slug: /
title: Ubuntu 20.04 升级到 Ubuntu 22.04
---

## 升级

### 手动方式

```bash
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade

sudo apt autoremove

sudo apt install update-manager-core

sudo do-release-upgrade
```

### GUI

```bash
sudo do-release-upgrade -f DistUpgradeViewGtk3
```

## 输入法切换到 fcitx5

```bash
# 安装fcitx5
sudo apt install fcitx5 fcitx5-chinese-addons
# sudo add-apt-repository ppa:hosxy/fcitx5
# sudo apt update

# 安装维基百科中文拼音词库 fcitx5-pinyin-zhwiki
# https://github.com/felixonmars/fcitx5-pinyin-zhwiki
# 下载词库文件
wget https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases/download/0.2.4/zhwiki-20220529.dict
# 创建存储目录
mkdir ~/.local/share/fcitx5/pinyin/dictionaries/
# 移动词库文件至该目录
mv zhwiki-20220529.dict ~/.local/share/fcitx5/pinyin/dictionaries/

# fcitx5 主题
# https://github.com/hosxy/Fcitx5-Material-Color
sudo apt install fcitx5-material-color
# fcitx配置 -> 附加组件 -> 经典用户界面 -> 主题
```

## 窗口系统切换到 wayland

```bash
sudo vim /etc/gdm3/custom.conf

# Enable Wayland
WaylandEnable=true
# Disable Wayland
WaylandEnable=false

sudo systemctl restart gdm3
```
