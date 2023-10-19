"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3],{9613:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>u});var o=t(9496);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=o.createContext({}),d=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},m=function(n){var e=d(n.components);return o.createElement(i.Provider,{value:e},n.children)},p="mdxType",v={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,i=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),p=d(t),c=a,u=p["".concat(i,".").concat(c)]||p[c]||v[c]||r;return t?o.createElement(u,l(l({ref:e},m),{},{components:t})):o.createElement(u,l({ref:e},m))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[p]="string"==typeof n?n:a,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},687:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(5882),a=(t(9496),t(9613));const r={},l="Node",s={unversionedId:"devpos/development-environment/node",id:"devpos/development-environment/node",title:"Node",description:"\u7248\u672c\u7ba1\u7406\u5668",source:"@site/docs/devpos/development-environment/node.md",sourceDirName:"devpos/development-environment",slug:"/devpos/development-environment/node",permalink:"/blog/devpos/development-environment/node",draft:!1,editUrl:"https://github.com/lalifeier/blog/edit/main/docs/devpos/development-environment/node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/blog/devpos/development-environment/java"},next:{title:"PHP",permalink:"/blog/devpos/development-environment/php"}},i={},d=[{value:"\u7248\u672c\u7ba1\u7406\u5668",id:"\u7248\u672c\u7ba1\u7406\u5668",level:2},{value:"nvm",id:"nvm",level:3},{value:"Volta",id:"volta",level:3},{value:"asdf",id:"asdf",level:3},{value:"fnm",id:"fnm",level:3}],m={toc:d};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node"},"Node"),(0,a.kt)("h2",{id:"\u7248\u672c\u7ba1\u7406\u5668"},"\u7248\u672c\u7ba1\u7406\u5668"),(0,a.kt)("h3",{id:"nvm"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/nvm-sh/nvm"},"nvm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5 nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash\n\n# \u5c06 nvm \u6dfb\u52a0\u5230 bash \u914d\u7f6e\u6587\u4ef6\ncat >> ~/.zshrc <<EOF\nexport NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\nEOF\n\n# \u5b89\u88c5\u6700\u65b0 LTS \u7248\u672c\u7684 Node\nnvm install node\n\n# \u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684 Node \u7248\u672c\nnvm list\n\n# \u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684 Node\nnvm install <version>\n\n# \u5378\u8f7d\u6307\u5b9a\u7248\u672c\u7684 Node\nnvm uninstall <version>\n\n# \u4f7f\u7528\u6307\u5b9a\u7248\u672c\u7684 Node\nnvm use <version>\n\n# \u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c\u7684 Node\nnvm alias default <version>\n\n# \u4e3a\u6307\u5b9a\u7248\u672c\u7684 Node \u8bbe\u7f6e\u522b\u540d\nnvm alias <alias> <version>\n')),(0,a.kt)("h3",{id:"volta"},(0,a.kt)("a",{parentName:"h3",href:"https://volta.sh"},"Volta")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 Volta\ncurl https://get.volta.sh | bash\n\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Node\nvolta install node\n\n# \u4e3a\u60a8\u7684\u9879\u76ee\u56fa\u5b9a Node \u548c Yarn \u7684\u7279\u5b9a\u7248\u672c\nvolta pin node@12.20\nvolta pin yarn@1.19\n\n# \u67e5\u770b\u5f53\u524d\u4f7f\u7528\u5de5\u5177\u7684\u7248\u672c\nvolta list\n\n# \u66f4\u65b0\u9879\u76eepackage.json\u6587\u4ef6\u4ee5\u4f7f\u7528\u9009\u5b9a\u7248\u672c\u7684\u5de5\u5177\nvolta pin <tool[@version]>\n\n# \u5378\u8f7d\u6307\u5b9a\u7248\u672c\u7684 Node\nvolta uninstall <tool[@version]>\n")),(0,a.kt)("h3",{id:"asdf"},(0,a.kt)("a",{parentName:"h3",href:"https://asdf-vm.com"},"asdf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 asdf\nbrew install asdf\n\n# \u5b89\u88c5\u8bed\u8a00\u63d2\u4ef6\nasdf plugin add nodejs\n\n# \u67e5\u770b\u6240\u6709\u53ef\u5b89\u88c5\u7684nodejs\u7248\u672c\nasdf list all nodejs\n\n# \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Node\nasdf install nodejs latest\n\n# \u8bbe\u7f6e\u9ed8\u8ba4 Node \u7248\u672c\nasdf global nodejs latest\n\n# \u67e5\u770b\u5168\u90e8\u8f6f\u4ef6\u5305\nasdf plugin list all\n\n# \u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\nasdf plugin-list\n\n# \u5b89\u88c5\u8f6f\u4ef6\u5305\nasdf plugin add <name>\n\n# \u67e5\u770b\u6240\u6709\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u7248\u672c\nasdf list all <name>\n\n# \u5b89\u88c5\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u6307\u5b9a\u7248\u672c\nasdf install <name> <version>\n\n# \u5378\u8f7d\u6307\u5b9a\u8f6f\u4ef6\u5305\u7684\u6307\u5b9a\u7248\u672c\nasdf uninstall <name> <version>\n\n# \u5728\u5f53\u524d shell \u4e2d\u8bbe\u7f6e\u8f6f\u4ef6\u5305\u7248\u672c\nasdf shell <name> <version>\n\n# \u8bbe\u7f6e\u8f6f\u4ef6\u5305\u7684\u672c\u5730\u7248\u672c\nasdf local <name> <version>\n\n# \u8bbe\u7f6e\u8f6f\u4ef6\u5305\u7684\u5168\u5c40\u7248\u672c\nasdf global <name> <version>\n")),(0,a.kt)("h3",{id:"fnm"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/Schniz/fnm"},"fnm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 fnm\ncurl -fsSL https://fnm.vercel.app/install | bash\n\n# \u5b89\u88c5\u6700\u65b0 LTS \u7248\u672c\u7684 Node\nfnm install --lts\n\n# \u5217\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684 Node \u7248\u672c\nfnm list\n\n# \u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684 Node\nfnm install <version>\n\n# \u5378\u8f7d\u6307\u5b9a\u7248\u672c\u7684 Node\nfnm uninstall <version>\n\n# \u4f7f\u7528\u6307\u5b9a\u7248\u672c\u7684 Node\nfnm use <version>\n\n# \u4f7f\u7528\u6307\u5b9a\u7248\u672c\u7684 Node\uff08\u5168\u5c40\uff09\nfnm default <version>\n")))}p.isMDXComponent=!0}}]);