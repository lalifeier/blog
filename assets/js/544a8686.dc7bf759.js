"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[740],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,b=s["".concat(p,".").concat(d)]||s[d]||f[d]||l;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(5882),o=(r(9496),r(9613));const l={},a="Buf",i={unversionedId:"devpos/development-tool/buf",id:"devpos/development-tool/buf",title:"Buf",description:"\u5b89\u88c5",source:"@site/docs/devpos/development-tool/buf.md",sourceDirName:"devpos/development-tool",slug:"/devpos/development-tool/buf",permalink:"/blog/devpos/development-tool/buf",draft:!1,editUrl:"https://github.com/lalifeier/blog/edit/main/docs/devpos/development-tool/buf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bazel",permalink:"/blog/devpos/development-tool/bazel"},next:{title:"\u73a9\u8f6c Ubuntu 20.04 LTS",permalink:"/blog/devpos/playing-around-with-ubuntu-20.04-lts"}},p={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buf"},"Buf"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install bufbuild/buf/buf\n")))}s.isMDXComponent=!0}}]);