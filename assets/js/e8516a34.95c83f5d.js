"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[685],{9613:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>v});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,v=p["".concat(i,".").concat(u)]||p[u]||m[u]||c;return n?t.createElement(v,s(s({ref:r},d),{},{components:n})):t.createElement(v,s({ref:r},d))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<c;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9490:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=n(5882),o=(n(9496),n(9613));const c={},s="Docker",a={unversionedId:"devpos/development-environment/docker",id:"devpos/development-environment/docker",title:"Docker",description:"",source:"@site/docs/devpos/development-environment/docker.md",sourceDirName:"devpos/development-environment",slug:"/devpos/development-environment/docker",permalink:"/blog/devpos/development-environment/docker",draft:!1,editUrl:"https://github.com/lalifeier/blog/edit/main/docs/devpos/development-environment/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/blog/devpos/development-environment/android"},next:{title:"Flutter",permalink:"/blog/devpos/development-environment/flutter"}},i={},l=[],d={toc:l};function p(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\n# Install Docker\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh --mirror Aliyun\n\n# Docker mirror\ncat <<EOF | sudo tee /etc/docker/daemon.json\n{\n    "registry-mirrors": [\n        "https://1nj0zren.mirror.aliyuncs.com",\n        "https://dockerhub.azk8s.cn",\n        "https://docker.mirrors.ustc.edu.cn",\n        "http://f1361db2.m.daocloud.io",\n        "https://hub-mirror.c.163.com",\n        "https://mirror.baidubce.com",\n        "https://registry.docker-cn.com"\n    ],\n    "host": ["tcp://0.0.0.0:2375"]\n}\nEOF\nsudo systemctl daemon-reload\nsudo systemctl restart docker\n\n# Install Docker Compose\nsudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n\n# sudo groupadd docker\n\n# Allow current user to run Docker commands\nsudo usermod -aG docker $USER\n')))}p.isMDXComponent=!0}}]);