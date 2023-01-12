# PHP

```bash
curl -L -O https://github.com/phpbrew/phpbrew/releases/latest/download/phpbrew.phar
chmod +x phpbrew.phar

# Move the file to some directory within your $PATH
sudo mv phpbrew.phar /usr/local/bin/phpbrew

cat >> ~/.zshrc <<EOF
[[ -e $HOME/.phpbrew/bashrc ]] && source $HOME/.phpbrew/bashrc
EOF

phpbrew install 5.6 +default +fpm +mysql +gd
phpbrew list
phpbrew switch 5.6
```
