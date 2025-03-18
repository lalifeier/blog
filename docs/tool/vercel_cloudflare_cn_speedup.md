# 优化 Vercel 和 Cloudflare 国内访问速度

通过配置自定义域名和使用优化节点，加速部署在 Vercel 或 Cloudflare 上的网站在国内的访问速度。

## Vercel

1. **添加自定义域名**：在 Vercel 项目中添加你的域名（例如 `www.example.com`）。
2. **设置 CNAME 解析**：将域名的 CNAME 记录指向推荐的 Vercel 节点。
3. **关闭 Cloudflare 代理**：如域名集成 Cloudflare，确保 Proxy Status 为关闭（灰色云图标）。

### 推荐节点：

* `vercel.cdn.cyfan.top`
* `vercel.cdn.yt-blog.top`
* `vercel-cname.xingpingcn.top`


## Cloudflare

1. **添加域名到 Cloudflare**：登录 Cloudflare，将你的域名添加到管理面板。
2. **创建 CNAME 记录**：指向推荐的 Cloudflare 节点。
3. **关闭代理状态**：确保 Proxy Status 为关闭（显示灰色云图标）。

### 推荐节点：

* `cloudflare.182682.xyz`
* `cf-cname.xingpingcn.top`

## 注意事项

1. **节点选择**：测试多个节点，选择速度最快且稳定的线路。
2. **代理状态**：若开启 Cloudflare 代理（橙色云图标），可能会破坏优化效果。
3. **DNS生效时间**：修改记录后需等待几分钟到数小时生效。

## 参考资料

* [CfSpeedDns 优选 IP](https://ip.164746.xyz/)
* [推一下 Vercel 加速节点](https://www.yt-blog.top/9952/)
* [提升部署在 Cloudflare、Vercel 或 Netlify 的网页在中国的访问速度和稳定性](https://github.com/xingpingcn/enhanced-FaaS-in-China)
