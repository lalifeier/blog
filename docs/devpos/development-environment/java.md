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
# ~/.gradle/init.gradle
vim ~/.sdkman/candidates/gradle/7.5.1/init.d/init.gradle
allprojects{
    repositories {
        def ALIYUN_CENTRAL_URL = 'https://maven.aliyun.com/repository/central'
        def ALIYUN_JCENTER_URL = 'https://maven.aliyun.com/repository/public'
        def ALIYUN_GOOGLE_URL = 'https://maven.aliyun.com/repository/google'
        def ALIYUN_GRADLE_PLUGIN_URL = 'https://maven.aliyun.com/repository/gradle-plugin'
        def ALIYUN_SPRING_URL = 'https://maven.aliyun.com/repository/spring'
        def ALIYUN_SPRING_PLUGIN_URL = 'https://maven.aliyun.com/repository/spring-plugin'
        def ALIYUN_GRAILS_CORE_URL = 'https://maven.aliyun.com/repository/grails-core'
        def ALIYUN_APACHE_SNAPSHOT_URL = 'https://maven.aliyun.com/repository/apache-snapshots'

        all { ArtifactRepository repo ->
            if(repo instanceof MavenArtifactRepository){
                def url = repo.url.toString()
                if (url.startsWith('https://repo1.maven.org/maven2')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_CENTRAL_URL."
                    remove repo
                }
                if (url.startsWith('https://jcenter.bintray.com/')) {
                    project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."
                    remove repo
                }
            }
        }
        maven {
            url ALIYUN_CENTRAL_URL
            url ALIYUN_JCENTER_URL
            url ALIYUN_GOOGLE_URL
            url ALIYUN_GRADLE_PLUGIN_URL
            url ALIYUN_SPRING_URL
            url ALIYUN_SPRING_PLUGIN_URL
            url ALIYUN_GRAILS_CORE_URL
            url ALIYUN_APACHE_SNAPSHOT_URL
        }
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
