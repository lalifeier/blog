---
title: 监控
---

## 主机监控

使用 node_exporter 组件来收集主机的各种指标数据，比如 CPU 使用率、内存使用率、磁盘使用率等。

## 容器监控

使用 cAdvisor 组件来收集容器的指标数据，比如 CPU 使用率、内存使用率、网络流量等。

## 指标数据持久化

使用 Prometheus 组件来存储和管理收集到的指标数据。

## 指标数据可视化

使用 Grafana 组件来展示和可视化存储在 Prometheus 中的指标数据。

### Grafana 模版

#### cAdvisor

- [Docker 监控](https://grafana.com/grafana/dashboards/8321)

#### node_exporter

- [Node Exporter Full](https://grafana.com/grafana/dashboards/1860)
- [主机基础监控](https://grafana.com/grafana/dashboards/9276)

## 预警通知

使用 Alertmanager 组件来设置和发送预警通知，比如发送邮件、短信、Slack 消息等。

## 参考

- [prometheus 样例](https://github.com/lalifeier/docker-environment/tree/main/metrics/prometheus)
