# Node

```bash
# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

cat >> ~/.zshrc <<EOF
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF

nvm install --lts
# nvm alias default node
```
