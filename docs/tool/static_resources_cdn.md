---
## title: 静态资源 CDN 公共库
---

# 静态资源 CDN 公共库

## 简介
内容分发网络（CDN）是一种通过分布在多个地理位置的服务器网络，快速提供互联网内容的服务。使用CDN托管静态资源可以显著提高网站的加载速度，减少服务器负载，并提升用户体验。

## CDN 公共库列表

| 名称 | 国内CDN | 海外CDN | 使用帮助 | 格式 | 例子 | 备注 |
| ----------------------------------- | ----------- | ----------- | ---------- | ------ | ------- | ------ |
| [cdnjs](https://cdnjs.com/) | ❎ | ✅ | - | - | https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js | - |
| [UNPKG](https://unpkg.com/) | ❎ | ✅ | - | https://unpkg.com/{package}@{version}/{file} | https://unpkg.com/jquery@3.7.1/dist/jquery.min.js | - |
| [jsDelivr](https://www.jsdelivr.com/) | ✅ | ✅ | - | https://cdn.jsdelivr.net/npm/{package}@{version}/{file} | https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js | - |
| [npmmirror](https://npmmirror.com/) | ✅ | ✅ | [使用帮助](https://zhuanlan.zhihu.com/p/633904268) | https://registry.npmmirror.com/{pkg}/{version}/files/{file} | https://registry.npmmirror.com/jquery/3.7.1/files/dist/jquery.min.js | - |
| [字节跳动](http://cdn.bytedance.com/) | ✅ | ✅ | - | - | https://lf3-cdn-tos.bytecdntp.com/cdn//expire-1-M/jquery/3.6.0/jquery.min.js | 同步 cdnjs.com |
| [75CDN](https://cdn.baomitu.com/) | ✅ | ✅ | - | - | https://lib.baomitu.com/jquery/3.5.0/jquery.min.js | - |
| 百度 | ✅ | ❎ | [使用帮助](https://www.v2ex.com/t/521411) | https://code.bdstatic.com/npm/{package}@{version}/{file} | https://code.bdstatic.com/npm/jquery@3.5.0/dist/jquery.min.js | 同步 unpkg.com NPM |
| 南方科技大学 | ✅ | ✅ | [使用帮助](https://mirrors.sustech.edu.cn/help/cdnjs.html) | - | https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/jquery/3.7.1/jquery.min.js | 同步 cdnjs.com, 海外重定向到 cdnjs.cloudflare.com |
| [BootCDN](https://www.bootcdn.cn/) | ✅ | ❎ | - | - | https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js | 同步 cdnjs.com |
| loli.net | ✅ | ✅ | - | - | https://cdnjs.loli.net/ajax/libs/jquery/3.7.1/jquery.min.js | 同步 cdnjs.com |
| [jshub](https://jshub.com/) | ✅ | ✅ | - | - | https://libs.jshub.com/jquery/3.7.1/jquery.min.js | - |
| 知乎 | ✅ | ❎ | - | - | https://unpkg.zhimg.com/jquery@3.7.1/dist/jquery.min.js | 未公开 同步 unpkg.com  |
