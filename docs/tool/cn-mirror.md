---
## title: 国内加速镜像
---

# 国内加速镜像

## 开源镜像站

| 开源镜像站                                        | 链接                                 |
| ------------------------------------------------- | ------------------------------------ |
| [阿里云](https://mirrors.aliyun.com)              | https://mirrors.aliyun.com           |
| [腾讯云](https://mirrors.cloud.tencent.com)       | https://mirrors.cloud.tencent.com    |
| [网易云](https://mirrors.163.com)                 | https://mirrors.163.com              |
| [搜狐](https://mirrors.sohu.com)                  | https://mirrors.sohu.com             |
| [华为云](https://mirrors.huaweicloud.com)         | https://mirrors.huaweicloud.com      |
| [清华大学](https://mirrors.tuna.tsinghua.edu.cn)  | https://mirrors.tuna.tsinghua.edu.cn |
| [北京大学](https://mirrors.pku.edu.cn/Mirrors)    | https://mirrors.pku.edu.cn           |
| [中国科技大学](http://mirrors.ustc.edu.cn)        | http://mirrors.ustc.edu.cn           |
| [北京邮电大学](https://mirrors.bupt.edu.cn)       | https://mirrors.bupt.edu.cn          |
| [上海交通大学](https://mirrors.sjtug.sjtu.edu.cn) | https://mirrors.sjtug.sjtu.edu.cn    |
| [南京大学](https://mirrors.nju.edu.cn)            | https://mirrors.nju.edu.cn           |
| [重庆大学](https://mirrors.cqu.edu.cn)            | https://mirrors.cqu.edu.cn           |
| [大连东软信息学院](http://mirrors.neusoft.edu.cn) | http://mirrors.neusoft.edu.cn        |

## 系统

### Ubuntu

| 镜像源                                                  | 使用帮助                                     |
| ------------------------------------------------------- | -------------------------------------------- |
| [阿里云](https://developer.aliyun.com/mirror/ubuntu)    | https://developer.aliyun.com/mirror/ubuntu   |
| [腾讯云](https://mirrors.tencent.com/help/ubuntu.htmlu) | https://mirrors.tencent.com/help/ubuntu.html |
| [网易云](http://mirrors.163.com/.help/ubuntu.html)      | http://mirrors.163.com/.help/ubuntu.html     |

## 工具

### Github

#### 使用代理网站下载

- [GitHub 文件在线下载](https://ghproxy.com)

- [GitHub 加速谷歌插件](https://chrome.google.com/webstore/detail/github%E5%8A%A0%E9%80%9F/ffjjnphohkfckeplcjflmgneebafggej)

#### 修改 hosts 文件

- [GitHub520](https://github.com/521xueweihan/GitHub520)
- [GitHub Hosts](https://github.com/ineo6/hosts)

## 容器

### [Docker CE](https://hub.docker.com)

| 镜像名称                                                                                                      | 镜像地址                                |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [阿里云](https://cr.console.aliyun.com)                                                                       | https://<your_code>.mirror.aliyuncs.com |
| [DaoCloud](https://github.com/DaoCloud/public-image-mirror)                                                   | https://docker.m.daocloud.io            |
| [网易云](https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A88) | https://hub-mirror.c.163.com            |
| [百度云](https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A88) | https://mirror.baidubce.com             |
| [Docker 镜像代理](https://dockerproxy.com)                                                                    | https://dockerproxy.com                 |

#### 全局配置

修改`/etc/docker/daemon.json`

```json
{
  "registry-mirrors": [
    "https://1nj0zren.mirror.aliyuncs.com",
    "http://f1361db2.m.daocloud.io",
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com",
    "https://dockerproxy.com"
  ],
  "host": ["tcp://0.0.0.0:2375"]
}
```

## 语言

### [PyPI](https://pypi.org)

| 镜像源                                                 | 镜像地址                                      |
| ------------------------------------------------------ | --------------------------------------------- |
| [阿里云](https://developer.aliyun.com/mirror/pypi)     | https://mirrors.aliyun.com/pypi/simple        |
| [腾讯云](https://mirrors.tencent.com/help/pypi.html)   | https://mirrors.cloud.tencent.com/pypi/simple |
| [清华](https://mirrors.tuna.tsinghua.edu.cn/help/pypi) | https://pypi.tuna.tsinghua.edu.cn/simple      |
| 豆瓣                                                   | https://pypi.douban.com/simple                |
| [百度云](https://cloud.baidu.com/doc/BCC/s/pll52bxhu)  | http://mirrors.baidubce.com/pypi/simple/      |

#### 临时使用

```bash
pip install -i https://mirrors.aliyun.com/pypi/simple <some-package>
```

#### 设为默认

升级 pip 到最新的版本 (>=10.0.0) 后进行配置

```bash
python -m pip install --upgrade pip
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
```

或修改`~/.pip/pip.conf`

```conf
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.c
```

您也可以临时使用本镜像来升级 pip

```bash
pip install -i https://mirrors.cloud.tencent.com/pypi/simple --upgrade pip
```

### [npm](https://www.npmjs.com)

| 镜像源                                                        | 镜像地址                               |
| ------------------------------------------------------------- | -------------------------------------- |
| [阿里云](https://npmmirror.com)                               | https://registry.npmmirror.com         |
| [腾讯云](https://cloud.tencent.com/document/product/213/8623) | https://mirrors.cloud.tencent.com/npm/ |

#### 临时使用

```bash
npm --registry https://registry.npm.taobao.org install [name]
```

#### 设为默认

```bash
npm config set registry https://registry.npmmirror.com
```

#### 使用 cnpm

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm  install [name]
```

### [composer](https://packagist.org)

| 镜像源                                                           | 镜像地址                             |
| ---------------------------------------------------------------- | ------------------------------------ |
| [阿里云](https://developer.aliyun.com/composer)                  | https://mirrors.aliyun.com/composer/ |
| [Packagist / Composer 中国全量镜像](https://pkg.phpcomposer.com) | https://packagist.phpcomposer.com    |

#### 单个项目配置

```bash
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

#### 设为默认

```bash
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

### [go](https://pkg.go.dev/)

| 镜像源                                                | 镜像地址                            |
| ----------------------------------------------------- | ----------------------------------- |
| [阿里云](https://developer.aliyun.com/mirror/goproxy) | https://mirrors.aliyun.com/goproxy/ |
| [七牛云](https://goproxy.cn)                          | https://goproxy.cn                  |
| [官方](https://goproxy.io)                            | https://goproxy.io                  |

#### 设为默认

Go 1.13 及以上

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

### [maven](https://central.sonatype.com)

| 镜像源                                                             | 镜像地址                                                         |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| [阿里云](https://developer.aliyun.com/mvn/guide)                   | https://maven.aliyun.com/repository/public                       |
| [腾讯云](https://cloud.tencent.com/document/product/213/8623)      | https://mirrors.cloud.tencent.com/nexus/repository/maven-public/ |
| [网易云](https://mirrors.163.com/.help/maven.html)                 | http://mirrors.163.com/maven/repository/maven-public/            |
| [华为云](https://www.huaweicloud.com/special/maven-jingxiang.html) | https://repo.huaweicloud.com/repository/maven/                   |

#### 全局配置

修改`~/.m2/settings.xml`

在` <mirrors>` `</mirrors>`标签中添加 mirror 子节点

```xml

<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

### [gradle](https://plugins.gradle.org)

| 镜像源                                                             | 镜像地址                                                         |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| [阿里云](https://developer.aliyun.com/mvn/guide)                   | https://maven.aliyun.com/repository/public                       |
| [腾讯云](https://cloud.tencent.com/document/product/213/8623)      | https://mirrors.cloud.tencent.com/nexus/repository/maven-public/ |
| [网易云](https://mirrors.163.com/.help/maven.html)                 | http://mirrors.163.com/maven/repository/maven-public/            |
| [华为云](https://www.huaweicloud.com/special/maven-jingxiang.html) | https://repo.huaweicloud.com/repository/maven/                   |

#### 全局配置

修改`~/.gradle/init.gradle.kts`

```kts
fun RepositoryHandler.enableMirror() {
  all {
    if (this is MavenArtifactRepository) {
      val originalUrl = this.url.toString().removeSuffix("/")
      urlMappings[originalUrl]?.let {
        logger.lifecycle("Repository[$url] is mirrored to $it")
        this.setUrl(it)
      }
    }
  }
}

val urlMappings = mapOf(
  "https://repo.maven.apache.org/maven2" to "https://mirrors.tencent.com/nexus/repository/maven-public/",
  "https://dl.google.com/dl/android/maven2" to "https://mirrors.tencent.com/nexus/repository/maven-public/",
  "https://plugins.gradle.org/m2" to "https://mirrors.tencent.com/nexus/repository/gradle-plugins/"
)

gradle.allprojects {
  buildscript {
    repositories.enableMirror()
  }
  repositories.enableMirror()
}

gradle.beforeSettings {
  pluginManagement.repositories.enableMirror()
  if (gradle.gradleVersion >= "6.8") {
    dependencyResolutionManagement.repositories.enableMirror()
  }
}
```
