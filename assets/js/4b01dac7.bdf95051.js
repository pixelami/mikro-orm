(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,s=O["".concat(c,".").concat(j)]||O[j]||m[j]||r;return a?b.a.createElement(s,p(p({ref:t},l),{},{components:a})):b.a.createElement(s,p({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},389:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(1140)),c={id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",hide_title:!0},p={unversionedId:"api/classes/core.baseentity",id:"api/classes/core.baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P>",description:"Class: BaseEntity",source:"@site/docs/api/classes/core.baseentity.md",slug:"/api/classes/core.baseentity",permalink:"/docs/next/api/classes/core.baseentity",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.baseentity.md",version:"current",sidebar_label:"BaseEntity",sidebar:"API",previous:{title:"Class: ArrayType<T>",permalink:"/docs/next/api/classes/core.arraytype"},next:{title:"Class: BigIntType",permalink:"/docs/next/api/classes/core.biginttype"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-baseentityt-pk-p"},"Class: BaseEntity<T, PK, P",">"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".BaseEntity"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyof T"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#populate"}),Object(r.b)("em",{parentName:"a"},"Populate")),"<T",">"," ","|"," ",Object(r.b)("em",{parentName:"td"},"unknown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"BaseEntity"))),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),Object(r.b)("em",{parentName:"a"},"IWrappedEntity")),"<T, PK, P",">")),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new BaseEntity"),"<T, PK, P",">","(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.baseentity"}),Object(r.b)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"PK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.baseentity"}),Object(r.b)("em",{parentName:"a"},"BaseEntity")),"<T, PK, P",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L5"}),"packages/core/src/entity/BaseEntity.ts:5")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"assign"),"(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.assignoptions"}),Object(r.b)("em",{parentName:"a"},"AssignOptions")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L35"}),"packages/core/src/entity/BaseEntity.ts:35")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L39"}),"packages/core/src/entity/BaseEntity.ts:39")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isinitialized"},"isInitialized"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L11"}),"packages/core/src/entity/BaseEntity.ts:11")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"populated"},"populated"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"populated"),"(",Object(r.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"populated")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L15"}),"packages/core/src/entity/BaseEntity.ts:15")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tojson"},"toJSON"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(r.b)("inlineCode",{parentName:"p"},"args"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...args")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L27"}),"packages/core/src/entity/BaseEntity.ts:27")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toobject"},"toObject"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toObject"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"[]): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ignoreFields")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"),"[]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L23"}),"packages/core/src/entity/BaseEntity.ts:23")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"topojo"},"toPOJO"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toPOJO"),"(): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#entitydata"}),Object(r.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L31"}),"packages/core/src/entity/BaseEntity.ts:31")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toreference"},"toReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toReference"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Implementation of: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.iwrappedentity"}),"IWrappedEntity")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d422/packages/core/src/entity/BaseEntity.ts#L19"}),"packages/core/src/entity/BaseEntity.ts:19")))}o.isMDXComponent=!0}}]);