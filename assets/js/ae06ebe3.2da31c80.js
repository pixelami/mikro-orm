(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,O=l["".concat(s,".").concat(d)]||l[d]||m[d]||c;return r?n.a.createElement(O,b(b({ref:t},o),{},{components:r})):n.a.createElement(O,b({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,s[1]=b;for(var o=2;o<c;o++)s[o]=r[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},806:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(1140)),s={id:"tableexistsexception",title:"Class: TableExistsException",sidebar_label:"TableExistsException"},b={unversionedId:"api/classes/tableexistsexception",id:"version-4.3/api/classes/tableexistsexception",isDocsHomePage:!1,title:"Class: TableExistsException",description:"Exception for an already existing table referenced in a statement detected in the driver.",source:"@site/versioned_docs/version-4.3/api/classes/tableexistsexception.md",slug:"/api/classes/tableexistsexception",permalink:"/docs/api/classes/tableexistsexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/tableexistsexception.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611067810,sidebar_label:"TableExistsException",sidebar:"version-4.3/API",previous:{title:"Class: SyntaxErrorException",permalink:"/docs/api/classes/syntaxerrorexception"},next:{title:"Class: TableNotFoundException",permalink:"/docs/api/classes/tablenotfoundexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],o={toc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Exception for an already existing table referenced in a statement detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/databaseobjectexistsexception"}),"DatabaseObjectExistsException")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"TableExistsException")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new TableExistsException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/driverexception#error"}),"Error"),"): ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/tableexistsexception"}),"TableExistsException")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#constructor"}),"constructor"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/classes/driverexception#error"}),"Error"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/classes/tableexistsexception"}),"TableExistsException")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#code"}),"code"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#errmsg"}),"errmsg"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": number"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#errno"}),"errno"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"message"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#message"}),"message"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:974")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"name"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#name"}),"name"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:973")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#stack"}),"stack"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);