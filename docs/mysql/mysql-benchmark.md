---
title: MySQL压力测试
---

## sysbench

### 安装

#### Ubuntu

```bash
apt -y install make automake libtool pkg-config libaio-dev
# For MySQL support
apt -y install libmysqlclient-dev libssl-dev
# For PostgreSQL support
apt -y install libpq-dev
```

### 使用

- 创建测试数据库 sbtest

- 准备测试数据

```bash
sysbench /usr/share/sysbench/tests/include/oltp_legacy/oltp.lua --mysql-host=192.168.153.130 --mysql-port=3306 --mysql-user=root --mysql-password=123456 --mysql-db=sbtest --oltp-tables-count=10 --oltp-table-size=100000 prepare
```

- 执行测试

```bash
sysbench /usr/share/sysbench/tests/include/oltp_legacy/oltp.lua --mysql-host=192.168.153.130 --mysql-port=3306 --mysql-user=root  --mysql-password=123456 --mysql-db=sbtest --oltp-test-mode=complex --threads=10 --time=300 --report-interval=10 run >> /home/mysysbench.log
```

- 清除数据

```bash
sysbench /usr/share/sysbench/tests/include/oltp_legacy/oltp.lua --mysql-host=192.168.153.130 --mysql-port=3306 --mysql-user=root  --mysql-password=123456 --mysql-db=sbtest  --oltp-tables-count=10 --oltp-table-size=100000 cleanup
```

### 参考

- https://github.com/akopytov/sysbench
