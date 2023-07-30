---
title: Spring Boot 3.0 升级指南
---

## 升级 JDK

Spring Boot 3.0 最低要求 Java 17，并向上兼容支持 Java 19。

## 升级依赖

- [Spring Cloud Alibaba 毕业版本依赖关系](https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

## 配置属性

Spring Boot 3.0 提供了一个 spring-boot-properties-migrator 模块。一旦作为依赖关系添加到你的项目中，它不仅会在启动时分析你的应用程序的环境并打印诊断结果，而且还会在运行时为你临时迁移属性。

```kdl
runtimeOnly("org.springframework.boot:spring-boot-properties-migrator")
```

> 完成迁移之后，务必要移除 spring-boot-properties-migrator 依赖。

## Jakarta EE

Spring Boot 3.0 已将所有底层依赖项从 Java EE 迁移到了 Jakarta EE API，基于 Jakarta EE 9 并尽可能地兼容 Jakarta EE 10。

由于 Java EE 已经变更为 Jakarta EE，包名以 `javax` 开头的需要相应地变更为 `jakarta`。

- [Automatic Migration From Java EE to Jakarta EE](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-6/)

## spring.factories

spring.factories 功能在 Spring Boot 2.7 已经废弃，在 Spring Boot 3.0 彻底移除。

Spring Boot 2.7 引入了一个新的文件 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 用于注册自动配置。

- [changes-to-auto-configuration](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes#changes-to-auto-configuration)

## 数据访问

`spring.data` 前缀已被保留给 Spring Data 项目，如果你使用了 Spring Data 项目的子项目，`application.yaml` 中相关的配置属性就需要相应的变更。例如 `spring.redis` 现在需要修改为 `spring.data.redis`。

### MySQL JDBC Driver

将`mysql:mysql-connector-java` 更改为 `com.mysql:mysql-connector-j`

## 参考

- [Spring Boot 3.0 Migration Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
