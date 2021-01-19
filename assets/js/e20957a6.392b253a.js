(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{1012:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),c=(r(0),r(1140)),o={id:"clearcachecommand",title:"Class: ClearCacheCommand",sidebar_label:"ClearCacheCommand"},i={unversionedId:"api/classes/clearcachecommand",id:"version-4.3/api/classes/clearcachecommand",isDocsHomePage:!1,title:"Class: ClearCacheCommand",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/clearcachecommand.md",slug:"/api/classes/clearcachecommand",permalink:"/docs/api/classes/clearcachecommand",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/clearcachecommand.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611067810,sidebar_label:"ClearCacheCommand",sidebar:"version-4.3/API",previous:{title:"Class: ChangeSetPersister",permalink:"/docs/api/classes/changesetpersister"},next:{title:"Class: Collection<T, O>",permalink:"/docs/api/classes/collection"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"describe",id:"describe",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handler",id:"handler",children:[]}]}],m={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ClearCacheCommand"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CommandModule")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"command"},"command"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"command"),': string = "cache:clear"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/ClearCacheCommand.ts#L7"}),"packages/cli/src/commands/ClearCacheCommand.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"describe"},"describe"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"describe"),': string = "Clear metadata cache"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/ClearCacheCommand.ts#L8"}),"packages/cli/src/commands/ClearCacheCommand.ts:8"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"handler"},"handler"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"handler"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Arguments): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/ClearCacheCommand.ts#L13"}),"packages/cli/src/commands/ClearCacheCommand.ts:13"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arguments")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}b.isMDXComponent=!0},1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=n.a.createContext({}),b=function(e){var t=n.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=a,u=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return r?n.a.createElement(u,i(i({ref:t},m),{},{components:r})):n.a.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<c;m++)o[m]=r[m];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);