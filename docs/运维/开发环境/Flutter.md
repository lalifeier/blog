# Flutter

```bash
# fvm
cat >> ~/.zshrc <<EOF
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH="$HOME/.pub-cache/bin:$HOME/fvm/default/bin:$PATH"
# alias flutter="fvm flutter"
# alias dart="fvm dart"
EOF

wget https://github.com/fluttertools/fvm/releases/download/2.4.1/fvm-2.4.1-linux-x64.tar.gz

# install
brew tap leoafarias/fvm
brew install fvm

# uninstall
brew uninstall fvm
brew untap leoafarias/fvm

# fvm install 3.3.0
fvm install stable
fvm global stable

flutter config --no-analytics --enable-web
flutter precache
yes | flutter doctor --android-licenses
flutter doctor
flutter emulators --create
flutter update-packages

vim ~/fvm/versions/stable/packages/flutter_tools/gradle/flutter.gradle
buildscript {
    repositories {
        // google()
        // mavenCentral()
        maven { url 'https://maven.aliyun.com/nexus/content/repositories/google' }
        maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
    }
    dependencies {
        /* When bumping, also update ndkVersion above. */
        classpath 'com.android.tools.build:gradle:4.1.0'
    }
}
```
