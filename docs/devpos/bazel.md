# Bazel

## 安装

### 使用 Bazelisk 安装

```bash
# https://github.com/bazelbuild/bazelisk
wget https://github.com/bazelbuild/bazelisk/releases/download/v1.16.0/bazelisk-linux-amd64
chmod +x bazelisk-linux-amd64
sudo mv bazelisk-linux-amd64 /usr/local/bin/bazel

# 或
npm install -g @bazel/bazelisk
```

### Ubuntu

#### 使用 Bazel 的 apt 代码库

```bash
# https://bazel.build/install/ubuntu?hl=zh-cn
sudo apt install apt-transport-https curl gnupg -y
curl -fsSL https://bazel.build/bazel-release.pub.gpg | gpg --dearmor >bazel-archive-keyring.gpg
sudo mv bazel-archive-keyring.gpg /usr/share/keyrings
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/bazel-archive-keyring.gpg] https://storage.googleapis.com/bazel-apt stable jdk1.8" | sudo tee /etc/apt/sources.list.d/bazel.list

# 安装和更新 Bazel
sudo apt update && sudo apt install bazel

# 升级到较新版本
sudo apt update && sudo apt full-upgrade
```

#### 使用二进制安装程序

```bash
# 下载二进制安装程序
wget https://github.com/bazelbuild/bazel/releases/download/6.0.0/bazel-6.0.0-installer-linux-x86_64.sh

# 安装所需的软件包
sudo apt install g++ unzip zip

# 运行安装程序
chmod +x bazel-6.0.0-installer-linux-x86_64.sh
./bazel-6.0.0-installer-linux-x86_64.sh --user

# 设置环境
# 添加到 ~/.bashrc 或 ~/.zshrc 文件中
export PATH="$PATH:$HOME/bin"
```

# Gazelle

```bash
go install github.com/bazelbuild/bazel-gazelle/cmd/gazelle@latest
```
