"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[918],{3261:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(5882),l=a(9496),r=a(5924),s=a(3933),o=a(7651),c=a(1300),i=a(3413),d=a(7530),m=a(5254);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p="breadcrumbHomeIcon_oOPp";function b(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:p})))}const v="breadcrumbsContainer_G0qU";function E(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:a,index:s,addMicrodata:o}=e;return l.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function g(){const e=(0,o.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,v),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(E,{href:t.href,isLast:n},t.label))})))):null}},5040:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ne});var n=a(9496),l=a(8172),r=a(3854);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(5924),m=a(3632),u=a(2258);function p(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var b=a(5672),v=a(5596),E=a(3933),h=a(7530);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:E.k.common.lastUpdated},n.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(5882);const N="iconEdit_ypfH";function L(e){let{className:t,...a}=e;return n.createElement("svg",(0,Z.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(N,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function k(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:E.k.common.editThisPage},n.createElement(L,null),n.createElement(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(3413);const U="tag_sFOE",A="tagRegular_G8AU",w="tagWithCount_UO60";function y(e){let{permalink:t,label:a,count:l}=e;return n.createElement(T.Z,{href:t,className:(0,d.Z)(U,l?w:A)},a,l&&n.createElement("span",null,l))}const C="tags_kFf8",x="tag_LvLA";function M(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(C,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x},n.createElement(y,{label:t,permalink:a}))}))))}const B="lastUpdated_naAF";function H(e){return n.createElement("div",{className:(0,d.Z)(E.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function I(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(E.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",B)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||a||r);return o||i?n.createElement("footer",{className:(0,d.Z)(E.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(H,{tags:s}),i&&n.createElement(I,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var V=a(7781),D=a(3168);const F="tocCollapsibleButton_HiPr",S="tocCollapsibleButtonExpanded_K0XA";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,Z.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",F,!t&&S,a.className)}),n.createElement(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R="tocCollapsible_TcAO",z="tocCollapsibleContent_g_B_",q="tocCollapsibleExpanded_W5Lp";function G(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,V.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(R,!s&&q,a)},n.createElement(O,{collapsed:s,onClick:o}),n.createElement(V.z,{lazy:!0,className:z,collapsed:s},n.createElement(D.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const J="tocMobile_Aa5E";function W(){const{toc:e,frontMatter:t}=c();return n.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(E.k.docs.docTocMobile,J)})}var K=a(5178);function X(){const{toc:e,frontMatter:t}=c();return n.createElement(K.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:E.k.docs.docTocDesktop})}var Y=a(3791),$=a(5238);function j(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(E.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(Y.Z,{as:"h1"},a)),n.createElement($.Z,null,t))}var Q=a(3261);const ee="docItemContainer_uJHi",te="docItemCol_qVsY";function ae(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(W,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(X,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&te)},n.createElement(b.Z,null),n.createElement("div",{className:ee},n.createElement("article",null,n.createElement(Q.Z,null),n.createElement(v.Z,null),a.mobile,n.createElement(j,null,t),n.createElement(P,null)),n.createElement(p,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ne(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ae,null,n.createElement(a,null))))}},2258:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(5882),l=a(9496),r=a(7530),s=a(5924),o=a(3413);function c(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(o.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(c,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},5596:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(9496),l=a(5924),r=a(7530),s=a(3933),o=a(7539);function c(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},5672:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(9496),l=a(5924),r=a(3575),s=a(3413),o=a(7530),c=a(8181),i=a(3933),d=a(9513),m=a(7539);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(o),E=u??(h=v).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:E.path,onClick:()=>m(v.name)})))}function E(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}}}]);