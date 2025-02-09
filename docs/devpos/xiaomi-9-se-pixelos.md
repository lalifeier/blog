---
title: 小米9 SE 刷机 PixelOS
---

## 配置 adb 和 fastboot

```bash
brew install android-platform-tools
```
## 开启 USB 调试

- 打开「设置」应用，进入「关于本机」或类似的界面
- 连续点击「版本号」，直到提示开发者选项已开启
- 进入「开发者选项」
- 打开「USB 调试」选项

## 解锁 bootloader

```bash
adb devices
adb reboot bootloader # 重启手机到 Bootloader 界面
fastboot devices
fastboot flashing unlock # 进行解锁，部分厂商需要在此附上解锁码
```

## 安装 Pixel OS

下载ROM

```bash
# https://pixelos.net/download/grus
wget https://cyfuture.dl.sourceforge.net/project/pixelos-releases/fourteen/grus/PixelOS_grus-14.0-20241019-1515.zip?viasf=1
wget https://cyfuture.dl.sourceforge.net/project/pixelos-releases/fourteen/grus/recovery/recovery-grus-20241019.img?viasf=1
```

```bash
adb reboot bootloader # 重启手机到 Bootloahttps://sspai.com/post/6793der 界面
fastboot flash recovery recovery-grus-20241019.img
```

按音量键和开机键切换到 Recovery mode

选择 Factory reset -> Format data/factory reset -> Format data，返回，选择 Reboot system now。

选择 Apply update -> Apply from ADB

```bash
adb sideload PixelOS_grus-14.0-20241019-1515.zip
```


## Magisk

### 安装 Magisk App

```bash
# https://github.com/topjohnwu/Magisk/releases
wget https://github.com/topjohnwu/Magisk/releases/download/v28.1/Magisk-v28.1.apk
adb install app-release.apk
```

### 获取 boot.img

`boot.img` 镜像一般来说都可以从当前使用的 ROM 的压缩包中找到。


### 使用 App 修改镜像

在手机打开 Magisk，点击「Magisk 安装->选择并修复一个文件」，选择 `boot.img`，点击「开始」。在文件管理将修补好的文件重命名为 `magisk_patched.img`。


#### fastboot 模式下刷入镜像

```bash
adb reboot bootloader
fastboot flash boot magisk_patched.img
fastboot reboot
```

#### Magisk 模块

- [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releasess/latest)

- [PlayIntegrityFix](https://github.com/chiteroman/PlayIntegrityFix/releases/latest)

- [去广告](https://lingeringsound.github.io/10007/)

## Lsposed

https://github.com/LSPosed/LSPosed

https://github.com/JingMatrix/LSPosed

https://modules.lsposed.org/

- [Adclode](https://github.com/zjyzip/AdClose)
- [核心破解](https://github.com/LSPosed/CorePatch)
- [微X模块](https://github.com/Xposed-Modules-Repo/com.fkzhang.wechatxposed)
- [Fuck for VIP](https://github.com/Xposed-Modules-Repo/com.bug.hookvip)
- [屏蔽摇一摇](https://github.com/pwh-pwh/fuck_shake)
- [JustTrustMe](https://github.com/SekiBetu/JustTrustMe/)
- YC调度管理

## 爱玩机工具箱

https://www.coolapk.com/apk/com.byyoung.setting

## 省电

- [Uperf](https://github.com/yc9559/uperf)

- YC调度管理

## Termux

### 下载

安装 Termux App

https://f-droid.org/packages/com.termux/
https://f-droid.org/packages/com.termux.boot/



```bash
termux-change-repo # 换源

# https://mirrors.tuna.tsinghua.edu.cn/help/termux/
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list

pkg update
pkg install vim curl wget git tree htop screenfetch -y


# 安装tsu
pkg install tsu
tsu
# 选择永久同意获得root权限
```


### ssh

安装

```bash
pkg install openssh
passwd # 设置密码
sshd # 开启sshd服务
# whoami
```

连接

```bash
# ssh -p 8022 <ip>
```


```bash
# 开机启动
mkdir ~/.termux/boot

cat >> ~/.termux/boot/start-sshd <<EOF
#!/data/data/com.termux/files/usr/bin/sh
termux-wake-lock
sshd
EOF

# 设置环境时区
/data/data/com.termux/files/usr/etc/profile
export TZ=Asia/Shanghai
```


## 参考资料
- [PixelOS](https://pixelos.net/download/grus2)
- [一加 Ace 3 刷机前的准备与安装 PixelOS 的过程](https://cyrusyip.org/zh-cn/posts/2024/12/05/oneplus-ace-3-install-pixelos/)
- [Android 玩家必备神器入门：从零开始安装 Magisk](https://sspai.com/post/67932)
- [Termux 高级终端安装使用配置教程](https://www.sqlsec.com/2018/05/termux.html)
