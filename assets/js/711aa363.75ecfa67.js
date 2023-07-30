"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[443],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(5882),a=(r(9496),r(9613));const i={title:"Spring Boot 3.0 \u5347\u7ea7\u6307\u5357"},o=void 0,l={unversionedId:"backend/spring-boot-3.0-migration",id:"backend/spring-boot-3.0-migration",title:"Spring Boot 3.0 \u5347\u7ea7\u6307\u5357",description:"\u5347\u7ea7 JDK",source:"@site/docs/backend/spring-boot-3.0-migration.md",sourceDirName:"backend",slug:"/backend/spring-boot-3.0-migration",permalink:"/blog/backend/spring-boot-3.0-migration",draft:!1,editUrl:"https://github.com/lalifeier/blog/edit/main/docs/backend/spring-boot-3.0-migration.md",tags:[],version:"current",frontMatter:{title:"Spring Boot 3.0 \u5347\u7ea7\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u540e\u7aef",permalink:"/blog/category/backend"},next:{title:"\u8fd0\u7ef4",permalink:"/blog/category/devops"}},p={},c=[{value:"\u5347\u7ea7 JDK",id:"\u5347\u7ea7-jdk",level:2},{value:"\u5347\u7ea7\u4f9d\u8d56",id:"\u5347\u7ea7\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e\u5c5e\u6027",id:"\u914d\u7f6e\u5c5e\u6027",level:2},{value:"Jakarta EE",id:"jakarta-ee",level:2},{value:"spring.factories",id:"springfactories",level:2},{value:"\u6570\u636e\u8bbf\u95ee",id:"\u6570\u636e\u8bbf\u95ee",level:2},{value:"MySQL JDBC Driver",id:"mysql-jdbc-driver",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5347\u7ea7-jdk"},"\u5347\u7ea7 JDK"),(0,a.kt)("p",null,"Spring Boot 3.0 \u6700\u4f4e\u8981\u6c42 Java 17\uff0c\u5e76\u5411\u4e0a\u517c\u5bb9\u652f\u6301 Java 19\u3002"),(0,a.kt)("h2",{id:"\u5347\u7ea7\u4f9d\u8d56"},"\u5347\u7ea7\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"Spring Cloud Alibaba \u6bd5\u4e1a\u7248\u672c\u4f9d\u8d56\u5173\u7cfb"))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5c5e\u6027"},"\u914d\u7f6e\u5c5e\u6027"),(0,a.kt)("p",null,"Spring Boot 3.0 \u63d0\u4f9b\u4e86\u4e00\u4e2a spring-boot-properties-migrator \u6a21\u5757\u3002\u4e00\u65e6\u4f5c\u4e3a\u4f9d\u8d56\u5173\u7cfb\u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff0c\u5b83\u4e0d\u4ec5\u4f1a\u5728\u542f\u52a8\u65f6\u5206\u6790\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u73af\u5883\u5e76\u6253\u5370\u8bca\u65ad\u7ed3\u679c\uff0c\u800c\u4e14\u8fd8\u4f1a\u5728\u8fd0\u884c\u65f6\u4e3a\u4f60\u4e34\u65f6\u8fc1\u79fb\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kdl"},'runtimeOnly("org.springframework.boot:spring-boot-properties-migrator")\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b8c\u6210\u8fc1\u79fb\u4e4b\u540e\uff0c\u52a1\u5fc5\u8981\u79fb\u9664 spring-boot-properties-migrator \u4f9d\u8d56\u3002")),(0,a.kt)("h2",{id:"jakarta-ee"},"Jakarta EE"),(0,a.kt)("p",null,"Spring Boot 3.0 \u5df2\u5c06\u6240\u6709\u5e95\u5c42\u4f9d\u8d56\u9879\u4ece Java EE \u8fc1\u79fb\u5230\u4e86 Jakarta EE API\uff0c\u57fa\u4e8e Jakarta EE 9 \u5e76\u5c3d\u53ef\u80fd\u5730\u517c\u5bb9 Jakarta EE 10\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e Java EE \u5df2\u7ecf\u53d8\u66f4\u4e3a Jakarta EE\uff0c\u5305\u540d\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"javax")," \u5f00\u5934\u7684\u9700\u8981\u76f8\u5e94\u5730\u53d8\u66f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-6/"},"Automatic Migration From Java EE to Jakarta EE"))),(0,a.kt)("h2",{id:"springfactories"},"spring.factories"),(0,a.kt)("p",null,"spring.factories \u529f\u80fd\u5728 Spring Boot 2.7 \u5df2\u7ecf\u5e9f\u5f03\uff0c\u5728 Spring Boot 3.0 \u5f7b\u5e95\u79fb\u9664\u3002"),(0,a.kt)("p",null,"Spring Boot 2.7 \u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports")," \u7528\u4e8e\u6ce8\u518c\u81ea\u52a8\u914d\u7f6e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes#changes-to-auto-configuration"},"changes-to-auto-configuration"))),(0,a.kt)("h2",{id:"\u6570\u636e\u8bbf\u95ee"},"\u6570\u636e\u8bbf\u95ee"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spring.data")," \u524d\u7f00\u5df2\u88ab\u4fdd\u7559\u7ed9 Spring Data \u9879\u76ee\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4e86 Spring Data \u9879\u76ee\u7684\u5b50\u9879\u76ee\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," \u4e2d\u76f8\u5173\u7684\u914d\u7f6e\u5c5e\u6027\u5c31\u9700\u8981\u76f8\u5e94\u7684\u53d8\u66f4\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.redis")," \u73b0\u5728\u9700\u8981\u4fee\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.data.redis"),"\u3002"),(0,a.kt)("h3",{id:"mysql-jdbc-driver"},"MySQL JDBC Driver"),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"mysql:mysql-connector-java")," \u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"com.mysql:mysql-connector-j")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide"},"Spring Boot 3.0 Migration Guide"))))}s.isMDXComponent=!0}}]);