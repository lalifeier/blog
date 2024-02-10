# password-store 密码管理器

## 安装

### Ubuntu / Debian

```bash
sudo apt-get install pass
```

### MacOS

```bash
brew install pass
```

## 初始化

```bash
# 生成gpg密钥
gpg --full-generate-key

# 查看gpg密钥
gpg --list-key

# 删除密钥
gpg --delete-secret-keys <gpg-id>
gpg --delete-keys <gpg-id>

# 导出公钥
gpg -k
gpg -a -o gpg-public.key --export <gpg-id>

# 导出私钥
gpg -K
gpg -a -o gpg-private.key --export-secret-keys  <gpg-id>

pass init <gpg-id> 或 pass init <email-id>
```

## 使用 Git

```bash
# 初始化
pass git init
pass git remote add origin git@git.example.com:password-store.git\
# pass git branch --set-upstream-to=origin/main main
pass git push --set-upstream origin main
```

## 使用

```bash
# 查看全部密码
pass

# 显示密码
pass <pass-name>
pass show <pass-name>

# 复制密码到剪贴板
pass -c <pass-name>

# 生成密码
pass generate <pass-name> <password length>

# 添加密码
pass insert -m <pass-name>

# 删除密码
pass rm <pass-name>

# 修改密码
pass edit <pass-name>

# 提交密码到git
pass git push

# 同步git密码
pass git pull
```

## 扩展

- 浏览器插件 [Browserpass](https://chrome.google.com/webstore/detail/browserpass-ce/naepdomgkenhinolocfifgehidddafch)

- ios软件 [Pass for iOS](https://apps.apple.com/us/app/pass-password-store/id1205820573)

- 导入密码 [pass-import](https://github.com/roddhjav/pass-import#readme)

- 跨平台客户端 [qtpass](http://qtpass.org)

## Browserpass


- 手动安装 `browserpass-native`

```
wget https://github.com/browserpass/browserpass-native/releases/download/3.1.0/browserpass-linux64-3.1.0.tar.gz
tar -xvf browserpass-linux64-3.1.0.tar.gz
cd browserpass-linux64-3.1.0
make BIN=browserpass-linux64 configure
sudo make BIN=browserpass-linux64 install
cd /usr/lib/browserpass
make hosts-chromium-user
```

- 安装 [browserpass-extension](https://chrome.google.com/webstore/detail/browserpass-ce/naepdomgkenhinolocfifgehidddafch)
