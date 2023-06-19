"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[877],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=m(r),d=a,g=i["".concat(s,".").concat(d)]||i[d]||u[d]||p;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<p;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>i,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=r(5882),a=(r(9496),r(9613));const p={},o="pm2",l={unversionedId:"devpos/process-manager-tool/pm2",id:"devpos/process-manager-tool/pm2",title:"pm2",description:"\u5b89\u88c5",source:"@site/docs/devpos/process-manager-tool/pm2.md",sourceDirName:"devpos/process-manager-tool",slug:"/devpos/process-manager-tool/pm2",permalink:"/blog/devpos/process-manager-tool/pm2",draft:!1,editUrl:"https://github.com/lalifeier/blog/edit/main/docs/devpos/process-manager-tool/pm2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u7a0b\u7ba1\u7406\u5de5\u5177",permalink:"/blog/category/tool/process-manager-tool"},next:{title:"supervisor",permalink:"/blog/devpos/process-manager-tool/supervisor"}},s={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u4f7f\u7528\u5747\u8861\u8d1f\u8f7d\u6a21\u5f0f(cluster mode)\u7684\u76f8\u5173\u547d\u4ee4",id:"\u4f7f\u7528\u5747\u8861\u8d1f\u8f7d\u6a21\u5f0fcluster-mode\u7684\u76f8\u5173\u547d\u4ee4",level:3},{value:"0 \u79d2\u505c\u673a\u91cd\u65b0\u52a0\u8f7d(\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u8fbe\u5230\u91cd\u542f\u65f6\u4e0d\u505c\u6b62\u670d\u52a1)",id:"0-\u79d2\u505c\u673a\u91cd\u65b0\u52a0\u8f7d\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u8fbe\u5230\u91cd\u542f\u65f6\u4e0d\u505c\u6b62\u670d\u52a1",level:3}],c={toc:m};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pm2"},"pm2"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pm2 -g\n")),(0,a.kt)("h2",{id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"},"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210ecosystem.config.js\u6587\u4ef6\npm2 init\n")),(0,a.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pm2 start app.js --name="test" # \u542f\u52a8\u5e76\u547d\u540d\u4e3atest\uff0c\u6ca1\u6709\u547d\u540d\u7684\u8bdd\u540e\u7eed\u53ef\u4ee5\u7528id\u66ff\u4ee3name\npm2 start app.js --watch # \u5f53\u6587\u4ef6\u53d8\u5316\u65f6\u81ea\u52a8\u91cd\u542f\u5e94\u7528\npm2 start script.sh # \u542f\u52a8bash\u811a\u672c\npm2 list # \u67e5\u770b\u6240\u6709\u542f\u52a8\u7684\u5e94\u7528\u5217\u8868\npm2 monit # \u663e\u793a\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684CPU\u548c\u5185\u5b58\u5360\u7528\u60c5\u51b5\npm2 show [app-id/app-name] # \u663e\u793a\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709\u4fe1\u606f\npm2 log # \u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\u4fe1\u606f\npm2 log [app-id/app-name] # \u663e\u793a\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7684\u65e5\u5fd7\u4fe1\u606f\npm2 flush # \u6e05\u7a7a\u6240\u6709\u65e5\u5fd7\u6587\u4ef6\npm2 stop all # \u505c\u6b62\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\npm2 stop [app-id/app-name] # \u505c\u6b62\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\npm2 restart all # \u91cd\u542f\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\npm2 restart [app-id/app-name] # \u91cd\u542f\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\npm2 delete all  # \u5173\u95ed\u5e76\u5220\u9664\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\npm2 delete [app-id/app-name] # \u5220\u9664\u6307\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\npm2 reset [app-id/app-name] # \u91cd\u7f6e\u91cd\u542f\u6570\u91cf\npm2 startup # \u521b\u5efa\u5f00\u673a\u81ea\u542f\u52a8\u547d\u4ee4\npm2 save # \u4fdd\u5b58\u5f53\u524d\u5e94\u7528\u5217\u8868\npm2 resurrect # \u91cd\u65b0\u52a0\u8f7d\u4fdd\u5b58\u7684\u5e94\u7528\u5217\u8868\npm2 update # \u4fdd\u5b58\u8fdb\u7a0b\uff0c\u6740\u6b7b\u5e76\u91cd\u542f\u8fdb\u7a0b\uff0c\u4e00\u822c\u7528\u4e8e\u66f4\u65b0pm2\u7248\u672c\npm2 ecosystem # \u751f\u6210\u4e00\u4e2a\u793a\u4f8bjson\u914d\u7f6e\u6587\u4ef6\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5747\u8861\u8d1f\u8f7d\u6a21\u5f0fcluster-mode\u7684\u76f8\u5173\u547d\u4ee4"},"\u4f7f\u7528\u5747\u8861\u8d1f\u8f7d\u6a21\u5f0f(cluster mode)\u7684\u76f8\u5173\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 start app.js -i n # \u5747\u8861\u8d1f\u8f7d\u6a21\u5f0f(cluster mode)\u542f\u52a8n\u4e2aapp.js\u5e94\u7528\u5b9e\u4f8b\npm2 reload all # \u91cd\u542f\u5747\u8861\u8d1f\u8f7d\u6a21\u5f0f(cluster mode)\u4e0b\u7684\u6240\u6709\u5e94\u7528\npm2 gracefulReload all # Graceful reload all apps in cluster mode\npm2 scale [app-id/app-name] 10 #\u5c06\u6307\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u62d3\u5c55\u523010\u4e2a\u5b9e\u4f8b\n")),(0,a.kt)("h3",{id:"0-\u79d2\u505c\u673a\u91cd\u65b0\u52a0\u8f7d\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u8fbe\u5230\u91cd\u542f\u65f6\u4e0d\u505c\u6b62\u670d\u52a1"},"0 \u79d2\u505c\u673a\u91cd\u65b0\u52a0\u8f7d(\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u8fbe\u5230\u91cd\u542f\u65f6\u4e0d\u505c\u6b62\u670d\u52a1)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pm2 reload app.js # \u91cd\u65b0\u542f\u52a8\u6240\u6709\u8fdb\u7a0b\uff0c\u59cb\u7ec8\u4fdd\u6301\u81f3\u5c11\u4e00\u4e2a\u8fdb\u7a0b\u5728\u8fd0\u884c\npm2 gracefulReload all # \u4f18\u96c5\u5730\u4ee5\u96c6\u7fa4\u6a21\u5f0f\u91cd\u65b0\u52a0\u8f7d\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\n")))}i.isMDXComponent=!0}}]);