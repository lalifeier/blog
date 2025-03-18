# 玩转 AI


## Cherry Studio

```bash
# 下载 Cherry Studio 的 .AppImage 文件
wget https://github.com/CherryHQ/cherry-studio/releases/download/v1.0.6/Cherry-Studio-1.0.6-x86_64.AppImage -O Cherry-Studio-1.0.6-x86_64.AppImage
# 在 /opt 路径下创建一个用于 Cherry Studio 的文件夹
sudo mkdir /opt/cherry-studio
# 将下载的 .AppImage 文件移动到 /opt/cherry-studio 文件夹中
sudo mv Cherry-Studio-1.0.6-x86_64.AppImage /opt/cherry-studio/
# 授予 .AppImage 文件可执行权限（如果之前没有执行）
sudo chmod +x /opt/cherry-studio/Cherry-Studio-1.0.6-x86_64.AppImage
# 下载 Cherry Studio 的图标文件
sudo wget https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/build/icon.png -O /opt/cherry-studio/icon.png
# 创建一个 .desktop 文件，将 Cherry Studio 添加到应用程序启动器中
sudo tee /usr/share/applications/cherry-studio.desktop > /dev/null << EOF
[Desktop Entry]
Name=Cherry Studio
Exec=/opt/cherry-studio/Cherry-Studio-1.0.6-x86_64.AppImage
Icon=/opt/cherry-studio/icon.png
Type=Application
Categories=Development;
EOF
```

## Cursor

```bash
# 下载 Cursor 的 .AppImage 文件
wget https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-$(curl -s https://downloads.cursor.com/production/client/linux/x64/appimage/latest | cut -d '"' -f 2) -O cursor.AppImage
# 提取 AppImage
./cursor.AppImage --appimage-extract
# 移动到 /opt
sudo mv squashfs-root /opt/Cursor
# 创建桌面文件
sudo tee /usr/share/applications/cursor.desktop > /dev/null << EOF
[Desktop Entry]
Name=Cursor
Exec=/opt/Cursor/AppRun
Icon=/opt/Cursor/code.png
Type=Application
Categories=Utility;
EOF

```

```bash
# 下载 Cursor 的 64 位 .deb 安装包并将其重命名为 "cursor_x64.deb"
wget https://downloader.cursor.sh/linux/deb/x64 -O cursor_x64.deb
# 使用 dpkg 命令安装刚刚下载的 .deb 包
sudo dpkg -i cursor_x64.deb
# 如果安装期间有依赖问题，使用以下命令自动修复并安装缺失的依赖包
sudo apt-get install -f
```

### cursor-auto-free

```bash
# 根据官方文档（参考地址：https://cursor-auto-free-doc.vercel.app/quick-start.html）开始安装 Cursor Auto Free

# 下载 Cursor Auto Free 程序包
wget https://github.com/chengazhen/cursor-auto-free/releases/download/v0.5.0/CursorPro-Linux.zip
# 创建 /opt 目录下的目标文件夹
sudo mkdir -p /opt/CursorPro
# 解压下载的压缩包到 /opt/CursorPro 目录
sudo unzip CursorPro-Linux.zip -d /opt/CursorPro
# 进入解压后的目录
cd /opt/CursorPro
sudo chmod +x /opt/CursorPro
# 创建或编辑配置文件 .env
sudo tee  /opt/CursorPro/.env > /dev/null << EOF
# 邮件服务地址（可以使用临时邮箱服务 https://tempmail.plus）
TEMP_MAIL=ykawybe@mailto.plus
# 设置的 PIN 码（根据需求修改）
# TEMP_MAIL_EPIN=xxxxxx
# 使用的后缀（与邮箱的域名一致）
TEMP_MAIL_EXT=@mailto.plus
# 浏览器的 User-Agent 字符串
BROWSER_USER_AGENT=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.92 Safari/537.36
# 可选：设置代理地址（如有需要）
# BROWSER_PROXY='http://127.0.0.1:2080'
# 无头模式配置（默认启用）
BROWSER_HEADLESS=True
EOF
# 创建CursorPronames-dataset.txt
wget https://raw.githubusercontent.com/chengazhen/cursor-auto-free/main/names-dataset.txt -O /opt/CursorPronames-dataset.txt
# 启动 CursorPro 程序
./opt/CursorPro
```
