#  Cloudflare Workers

## [gh-proxy](https://github.com/hunshcn/gh-proxy)

## OpenAI API

- 新建一个 Cloudflare Worker
- 将 [cloudflare-worker-proxy.js](https://gist.github.com/noobnooc/d0407b5fb81cff9d36f981170b99d4e6) 里的代码粘贴到 Worker 中并部署
- 给 Worker 绑定一个域名
- 使用自己的域名代替 `api.openai.com`

#### 参考: 
- [OpenAI API](https://github.com/noobnooc/noobnooc/discussions/9)


## Cloudflare WARP

- 新建一个 Cloudflare Worker
- 将 [worker-vless.js](https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js) 里的代码粘贴到 Worker 中并部署
- 给 Worker 绑定一个域名
- 生成一个[UUID](https://www.uuidgenerator.net/version4) 替换 `userID`
- 修改 `proxyIP`为Cloudflare优选IP或优选域名 

```js
let userID = '1ac6dda0-04f3-49d9-ba06-f3449133eaef';

let proxyIP = 'cdn.chigua.tk';
```

- 访问 `https://vless.username.workers.dev/uuid`，来查看是否部署成功以及节点信息

### [优选IP](https://stock.hostmonit.com/CloudFlareYes)

### 优选域名 

```
cdn.chigua.tk (CNAME 域名)
cdn.anycast.eu.org (部分地区有污染)
cdn-all.xn--b6gac.eu.org (韩国)
cdn.xn--b6gac.eu.org(新加坡)
cdn-b100.xn--b6gac.eu.org(新加坡)
edgetunnel.anycast.eu.org(日本)
```

#### 参考: 
- [Cloudflare WARP](https://pfchina.org/?p=11178)
- [EDtunnel](https://github.com/3Kmfi6HP/EDtunnel)
- [edgetunnel](https://github.com/zizifn/edgetunnel)
- [WARP-CLASH-CONFIG](https://neko-warp.nloli.xyz/)

