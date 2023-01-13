"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[430],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,v=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(5882),o=(r(9496),r(9613));const p={},a="PHP",l={unversionedId:"devpos/development-environment/php",id:"devpos/development-environment/php",title:"PHP",description:"",source:"@site/docs/devpos/development-environment/php.md",sourceDirName:"devpos/development-environment",slug:"/devpos/development-environment/php",permalink:"/blog/devpos/development-environment/php",draft:!1,editUrl:"https://github.com/lalifeier/blog/tree/main/packages/create-docusaurus/templates/shared/docs/devpos/development-environment/php.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node",permalink:"/blog/devpos/development-environment/node"},next:{title:"Python",permalink:"/blog/devpos/development-environment/python"}},i={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"php"},"PHP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://github.com/phpbrew/phpbrew/releases/latest/download/phpbrew.phar\nchmod +x phpbrew.phar\n\n# Move the file to some directory within your $PATH\nsudo mv phpbrew.phar /usr/local/bin/phpbrew\n\ncat >> ~/.zshrc <<EOF\n[[ -e $HOME/.phpbrew/bashrc ]] && source $HOME/.phpbrew/bashrc\nEOF\n\nphpbrew install 5.6 +default +fpm +mysql +gd\nphpbrew list\nphpbrew switch 5.6\n")))}u.isMDXComponent=!0}}]);