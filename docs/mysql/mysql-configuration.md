---
title: MySQL常用配置
---

## binlog

```bash
show variables like '%log_bin%';
```

```ini
log_bin=ON
log_bin_basename=/var/lib/mysql/mysql-bin
log_bin_index=/var/lib/mysql/mysql-bin.index
```

## Genelog

```bash
#设置general_log_file路径
set global general_log_file="/tmp/general.log";
#开启general_log
set global general_log=on;
```

## 慢查询日志

慢查询日志会把查询耗时超过规定时间的 SQL 语句记录下来，利用慢查询日志，定位分析性能的瓶颈。

```bash
SHOW VARIABLES LIKE '%slow_query%'
vim /etc/my.cnf
```

- slow_query_log 可以设置慢查询日志的开闭状态

- long_query_time 可以规定查询超时的时间，单位是秒

```ini
slow_query_log=ON
long_query_time=1
```
