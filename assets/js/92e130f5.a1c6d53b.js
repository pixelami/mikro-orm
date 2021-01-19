(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(a),O=r,j=m["".concat(i,".").concat(O)]||m[O]||s[O]||b;return a?n.a.createElement(j,c(c({ref:t},l),{},{components:a})):n.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<b;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},680:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),b=(a(0),a(1140)),i={id:"migrationgenerator",title:"Class: MigrationGenerator",sidebar_label:"MigrationGenerator"},c={unversionedId:"api/classes/migrationgenerator",id:"version-4.3/api/classes/migrationgenerator",isDocsHomePage:!1,title:"Class: MigrationGenerator",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/migrationgenerator.md",slug:"/api/classes/migrationgenerator",permalink:"/docs/api/classes/migrationgenerator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/migrationgenerator.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611067810,sidebar_label:"MigrationGenerator",sidebar:"version-4.3/API",previous:{title:"Class: MigrationCommandFactory",permalink:"/docs/api/classes/migrationcommandfactory"},next:{title:"Class: MigrationRunner",permalink:"/docs/api/classes/migrationrunner"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"driver",id:"driver",children:[]},{value:"namingStrategy",id:"namingstrategy",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createStatement",id:"createstatement",children:[]},{value:"generate",id:"generate",children:[]},{value:"generateJSMigrationFile",id:"generatejsmigrationfile",children:[]},{value:"generateTSMigrationFile",id:"generatetsmigrationfile",children:[]}]}],l={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MigrationGenerator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new MigrationGenerator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"driver"),": AbstractSqlDriver, ",Object(b.b)("inlineCode",{parentName:"p"},"namingStrategy"),": NamingStrategy, ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions"),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationgenerator"}),"MigrationGenerator")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L5"}),"packages/migrations/src/MigrationGenerator.ts:5"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"driver")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AbstractSqlDriver")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"namingStrategy")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NamingStrategy")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationgenerator"}),"MigrationGenerator")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": AbstractSqlDriver"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L7"}),"packages/migrations/src/MigrationGenerator.ts:7"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"namingstrategy"},"namingStrategy"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"namingStrategy"),": NamingStrategy"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L8"}),"packages/migrations/src/MigrationGenerator.ts:8"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L9"}),"packages/migrations/src/MigrationGenerator.ts:9"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createstatement"},"createStatement"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createStatement"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"padLeft"),": number): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L30"}),"packages/migrations/src/MigrationGenerator.ts:30"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padLeft")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generate"},"generate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"diff"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": string): Promise","<","[string, string]",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L11"}),"packages/migrations/src/MigrationGenerator.ts:11"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"diff")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","[string, string]",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generatejsmigrationfile"},"generateJSMigrationFile"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generateJSMigrationFile"),"(",Object(b.b)("inlineCode",{parentName:"p"},"className"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"diff"),": string[]): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L39"}),"packages/migrations/src/MigrationGenerator.ts:39"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"className")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"diff")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generatetsmigrationfile"},"generateTSMigrationFile"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"generateTSMigrationFile"),"(",Object(b.b)("inlineCode",{parentName:"p"},"className"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"diff"),": string[]): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/migrations/src/MigrationGenerator.ts#L53"}),"packages/migrations/src/MigrationGenerator.ts:53"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"className")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"diff")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"))}p.isMDXComponent=!0}}]);