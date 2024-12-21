---
## title: 公共DNS 服务
---

# 公共DNS 服务

## 简介
域名系统（DNS）是互联网的重要组成部分，它将域名转换为IP地址。使用快速、可靠的公共DNS服务可以提高网络性能，增强隐私和安全性。以下是一些流行的公共DNS服务。

## 公共DNS 服务列表

### 国内

| 名称 | IPv4 地址 | IPv6 地址 | DoH 地址 | DoT 地址 | 备注 |
| ----------------------------------- | ------------------- | ---------------------- | --------------------------- | ------------------------------ | ------------------------- |
| [114DNS](http://www.114dns.com/) | 114.114.114.114<br />114.114.115.115 | - | ❎ | ❎ | - |
| [阿里云DNS](https://www.alidns.com/) | 223.5.5.5<br />223.6.6.6 | 2400:3200::1<br />2400:3200:baba::1 | `https://223.5.5.5/dns-query`<br />`https://223.6.6.6/dns-query`<br />`https://dns.alidns.com/dns-query`<br />`https://2400:3200::1/dns-query`<br />`https://2400:3200:baba::1/dns-query` | `dns.alidns.com` | - |
| [DNSPod](https://www.dnspod.cn/Products/Public.DNS) | 119.29.29.29<br />182.254.116.116<br />119.28.28.28<br />182.254.118.118 | 2402:4e00:: | `https://doh.pub/dns-query`<br />`https://1.12.12.12/dns-query`<br />`https://120.53.53.53/dns-query` | `dot.pub`<br />`1.12.12.12`<br />`120.53.53.53` | 腾讯旗下公共DNS |
| [百度 DNS](https://dudns.baidu.com/) | 180.76.76.76 | 2400:da00::6666 | ❎ | ❎ | - |
| 字节跳动火山引擎 DNS | 180.184.1.1<br />180.184.2.2 | - | ❎ | ❎ | - |

### 海外

| 名称 | IPv4 地址 | IPv6 地址 | DoH 地址 | DoT 地址 | 备注 |
| ----------------------------------- | ------------------- | ---------------------- | --------------------------- | ------------------------------ | ------------------------- |
| [Google Public DNS](https://developers.google.com/speed/public-dns) | 8.8.8.8<br />8.8.4.4 | 2001:4860:4860::8888<br />2001:4860:4860::8844 | `https://dns.google/dns-query`<br />`https://[2001:4860:4860::64]/dns-query`<br />`https://[2001:4860:4860::6464]/dns-query` | `dns.google` | 高速、可靠的DNS服务 |
| [Cloudflare DNS](https://1.1.1.1/) | 1.1.1.1<br />1.0.0.1 | 2606:4700:4700::1111<br />2606:4700:4700::1001 | `https://1.1.1.1/dns-query`<br />`https://1.0.0.1/dns-query`<br />`https://cloudflare-dns.com/dns-query`<br />` https://[2606:4700:4700::1111]/dns-query	`<br />`https://[2606:4700:4700::1001]/dns-query`<br />`https://[2606:4700:4700::64]/dns-query`<br />`https://[2606:4700:4700::6464]/dns-query` | `one.one.one.one`<br />`1dot1dot1dot1.cloudflare-dns.com` | 强调隐私和安全 |
| [OpenDNS](https://www.opendns.com/) | 208.67.222.222<br />208.67.220.220 | 2620:119:35::35<br />2620:119:53::53 | `https://doh.opendns.com/dns-query` | `doh.opendns.com` | 具有内容过滤功能 |
| [Quad9](https://www.quad9.net/) | 9.9.9.9<br />149.112.112.112 | 2620:fe::fe<br />2620:fe::fe:9 | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | 集成安全过滤功能 |

### 去广告
| 名称 | IPv4 地址 | IPv6 地址 | DoH 地址 | DoT 地址 | 备注 |
| ----------------------------------- | ------------------- | ---------------------- | --------------------------- | ------------------------------ | ------------------------- |
| [18bit DNS](https://18bit.cn/) | - | - | `https://doh.18bit.cn/dns-query` | `dns.18bit.cn` | 提供广告过滤功能 |
| [AdGuard DNS](https://adguard.com/en/adguard-dns/overview.html) | 94.140.14.14<br />94.140.15.15 | 2a0d:2a00:1::<br />2a0d:2a00:2:: | `https://dns.adguard.com/dns-query` | `dns.adguard.com` | 提供广告过滤和隐私保护功能 |
| [NextDNS](https://nextdns.io/) | - | - | `https://dns.nextdns.io/{id}` | `dot.nextdns.io` | 自定义过滤规则，支持广告拦截 |
| [OpenDNS FamilyShield](https://www.opendns.com/setupguide/#familyshield) | 208.67.222.123<br />208.67.220.123 | - | ❎ | ❎ | 提供广告和恶意软件过滤功能 |
| [CleanBrowsing](https://cleanbrowsing.org/) | 185.228.168.9<br />185.228.169.9 | - | `https://dns.cleanbrowsing.org/dns-query` | `dns.cleanbrowsing.org` | 提供广告和恶意软件过滤功能 |

## 参考资料

- [已知的 DNS 提供商](https://adguard-dns.io/kb/zh-CN/general/dns-providers/)
