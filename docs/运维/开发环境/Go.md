# Go

```bash
# gvm
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)

cat >> ~/.zshrc <<EOF
[[ -s "$HOME/.gvm/scripts/gvm" ]] && source "$HOME/.gvm/scripts/gvm"
export GO111MODULE="on"
export GOPROXY=https://goproxy.cn,direct
export GOPRIVATE=
# 关闭校验Go依赖包的哈希值
export GOSUMDB=off
EOF

gvm listall

gvm install go1.4 -B
gvm use go1.4
export GOROOT_BOOTSTRAP=$GOROOT
gvm install go1.18.5
# go env -w GOPROXY=https://goproxy.cn,direct

gvm use go1.18.5 --default
```
