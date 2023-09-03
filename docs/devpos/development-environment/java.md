# Java

```bash
# sdkman
curl -s "https://get.sdkman.io" | bash

cat >> ~/.zshrc <<EOF
#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"
EOF

sdk list java
sdk install java 8.0.362-librca
sdk default java 8.0.362-librca

# sdk install java 17.0.6-librca

# maven
# https://developer.aliyun.com/mvn/guide
sdk install maven
# ~/.m2/settings.xml
vim ~/.sdkman/candidates/maven/3.8.6/conf/settings.xml
#在<mirrors></mirrors>标签中添加 mirror 子节点
# <mirror>
#   <id>nexus-aliyun</id>
#   <mirrorOf>*</mirrorOf>
#   <name>Nexus aliyun</name>
#   <url>http://maven.aliyun.com/nexus/content/groups/public</url>
# </mirror>
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>

# gradle
sdk install gradle
# ~/.gradle/init.gradle.kts
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

# build.gradle
allprojects {
  repositories {
    maven {
      url 'https://maven.aliyun.com/repository/public/'
    }
    mavenLocal()
    mavenCentral()
  }
}

sdk install tomcat
# sdk install springboot

# sdk flush candidates
# sdk env init

# jenv
# git clone https://github.com/jenv/jenv.git ~/.jenv
# cat >> ~/.zshrc <<EOF
# export PATH="$HOME/.jenv/bin:$PATH"
# eval "$(jenv init -)"
# EOF
```
