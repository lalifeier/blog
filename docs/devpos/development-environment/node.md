# Node

## 版本管理器

### [nvm](https://github.com/nvm-sh/nvm)

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# 将 nvm 添加到 bash 配置文件
cat >> ~/.zshrc <<EOF
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF

# 安装最新 LTS 版本的 Node
nvm install node

# 列出所有已安装的 Node 版本
nvm list

# 安装指定版本的 Node
nvm install <version>

# 卸载指定版本的 Node
nvm uninstall <version>

# 使用指定版本的 Node
nvm use <version>

# 设置默认版本的 Node
nvm alias default <version>

# 为指定版本的 Node 设置别名
nvm alias <alias> <version>
```

### [Volta](https://volta.sh)

```bash
# 安装 Volta
curl https://get.volta.sh | bash

# 安装最新版本的 Node
volta install node

# 为您的项目固定 Node 和 Yarn 的特定版本
volta pin node@12.20
volta pin yarn@1.19

# 查看当前使用工具的版本
volta list

# 更新项目package.json文件以使用选定版本的工具
volta pin <tool[@version]>

# 卸载指定版本的 Node
volta uninstall <tool[@version]>
```

### [asdf](https://asdf-vm.com)

```bash
# 安装 asdf
brew install asdf

# 安装语言插件
asdf plugin add nodejs

# 查看所有可安装的nodejs版本
asdf list all nodejs

# 安装最新版本的 Node
asdf install nodejs latest

# 设置默认 Node 版本
asdf global nodejs latest

# 查看全部软件包
asdf plugin list all

# 列出所有已安装的软件包
asdf plugin-list

# 安装软件包
asdf plugin add <name>

# 查看所有可安装的软件包版本
asdf list all <name>

# 安装指定软件包的指定版本
asdf install <name> <version>

# 卸载指定软件包的指定版本
asdf uninstall <name> <version>

# 在当前 shell 中设置软件包版本
asdf shell <name> <version>

# 设置软件包的本地版本
asdf local <name> <version>

# 设置软件包的全局版本
asdf global <name> <version>
```


### [fnm](https://github.com/Schniz/fnm)

```bash
# 安装 fnm
curl -fsSL https://fnm.vercel.app/install | bash

# 安装最新 LTS 版本的 Node
fnm install --lts

# 列出所有已安装的 Node 版本
fnm list

# 安装指定版本的 Node
fnm install <version>

# 卸载指定版本的 Node
fnm uninstall <version>

# 使用指定版本的 Node
fnm use <version>

# 使用指定版本的 Node（全局）
fnm default <version>
```
