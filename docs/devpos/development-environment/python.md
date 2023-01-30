# Python

```bash
# pyenv
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash

cat >> ~/.zshrc <<EOF
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
EOF

# poerty
# sudo apt install python3-pip

sudo apt-get install -yq make build-essential libssl-dev zlib1g-dev \
          libbz2-dev libreadline-dev libsqlite3-dev curl \
          libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

curl -sSL https://install.python-poetry.org | python3 -

cat >> ~/.zshrc <<EOF
export PATH="$HOME/.local/bin:$PATH"
EOF
```
