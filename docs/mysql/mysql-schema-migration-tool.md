---
title: MySQL表结构迁移工具
---

## pt-online-schema-change

### 安装

#### Ubuntu

```bash
sudo apt update
sudo apt install curl

curl -O https://repo.percona.com/apt/percona-release_latest.generic_all.deb

sudo apt install gnupg2 lsb-release ./percona-release_latest.generic_all.deb

sudo apt update

sudo apt-get install percona-toolkit
```

### 使用

```bash
# 添加表字段
pt-online-schema-change --host=your_host --port=your_port --user=root --password=your_password --alter "add column age int(11) default null" D=your_database,t=your_table --charset=utf8 --execute --print --statistics --no-check-alter
# 删除表字段
pt-online-schema-change --host=your_host --port=your_port --user=root --password=your_password --alter "drop column age" D=your_database,t=your_table --charset=utf8 --execute --print --statistics --no-check-alter
# 修改表字段
pt-online-schema-change --host=your_host --port=your_port --user=root --password=your_password --alter "MODIFY COLUMN num int(11) unsigned NOT NULL DEFAULT '0'" D=your_database,t=your_table --charset=utf8 --execute --print --statistics --no-check-alter
# 修改表字段名
pt-online-schema-change --host=your_host --port=your_port --user=root --password=your_password --alter "CHANGE COLUMN age address varchar(30)" D=your_database,t=your_table --charset=utf8 --execute --print --statistics --no-check-alter
# 添加索引
pt-online-schema-change --host=your_host --port=your_port --user=root --password=your_password --alter "add idx_address(address)" D=your_database,t=your_table --charset=utf8 --execute --print --statistics --no-check-alter
```

## gh-ost

### 安装

#### Ubuntu

```bash
wget https://github.com/github/gh-ost/releases/download/v1.1.5/gh-ost_1.1.5_amd64.deb
sudo dpkg -i gh-ost_1.1.5_amd64.deb
```

### 使用

```bash
# 主库
gh-ost -max-load=Threads_running=20 \
            -critical-load=Threads_running=100 \
            -chunk-size=2000 -user="temp" -password="test" -host=10.10.1.10 \
            -allow-on-master -database="sbtest" -table="sbtest1" \
            -alter="engine=innodb" -cut-over=default \
            -exact-rowcount -concurrent-rowcount -default-retries=120 \
            -timestamp-old-table -assume-rbr -panic-flag-file=/tmp/ghost.panic.flag \
            -execute

# 从库或者只读实例
gh-ost -max-load=Threads_running=20 \
            -critical-load=Threads_running=100 \
            -max-lag-millis=5000 -throttle-control-replicas="10.10.1.100:3306"  \
            -chunk-size=2000 -user="temp" -password="test" -host=10.10.1.10 \
            -allow-on-master -database="sbtest" -table="sbtest1" \
            -alter="engine=innodb" -cut-over=default \
            -exact-rowcount -concurrent-rowcount -default-retries=120 \
            -timestamp-old-table -assume-rbr -panic-flag-file=/tmp/ghost.panic.flag \
            -execute
```

## MySQL ONLINE DDL

## 参考

- https://docs.percona.com/percona-software-repositories/installing.html
