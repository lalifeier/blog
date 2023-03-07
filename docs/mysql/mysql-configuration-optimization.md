---
title: MySQL参数优化
---

## 最大连接数

- max_connections 是 MySQL 最大并发连接数，默认值 151
- MySQL 允许的最大连接数上限是 16384
- 实际连接数是最大连接数的 85%较为合适

```bash
SHOW VARIABLES LIKE 'max_connections'
SHOW STATUS LIKE 'max_used_connections'
vim /etc/my.cnf
```

```ini
#消耗约800M内存
max_connections=300
```

## 请求堆栈的大小

- back_log 是存放执行请求的堆栈大小，默认值是 50
- 一般堆栈大小设置成最大连接数的 1/3

```ini
back_log=90
```

## 修改并发线程数

- innodb_thread_concurrency 代表并发线程数，默认是 0
- 并发线程数应该设置为 CPU 核心数的两倍

```ini
innodb_thread_concurrency=2
```

## 修改连接超时时间

- wait-timeout 是超时时间，单位是秒
- 连接默认超时为 8 小时，连接长期不用又不销毁，浪费资源

```ini
#10分钟超时
wait-timeout=600
```

## 数据缓存

- innodb_buffer_pool_size 是 InnoDB 的缓存容量，默认是 128M
- InnoDB 缓存的大小可以设置为主机内存的 70%~80%

```ini
innodb_buffer_pool_size = 400M
```
