(window.webpackJsonp=window.webpackJsonp||[]).push([[705,117,876],{1137:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(22),i=t(1147),o=t(1160),c=t(1141);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(c.a,{className:"pagination-nav__link",to:t},n.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(c.a,{className:"pagination-nav__link",to:r},n.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(1152);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,c=Object(l.default)().siteConfig.title,u=a.blogDescription,f=a.blogTitle,d="/"===a.permalink?c:f;return n.a.createElement(i.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return n.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(m,{metadata:a})))))}},1148:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),i=t.n(l),o=t(1145),c=t.n(o),m=t(1141),s=t(22),u=t(1144),f=t(56),d=t.n(f);function g(e){var a=e.to,t=e.href,l=e.label,o=Object(n.a)(e,["to","href","label"]),c=Object(u.a)(a);return i.a.createElement(m.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},o),l)}var p=function(e){var a=e.url,t=e.alt;return i.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(s.default)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,r=t||{},n=r.copyright,l=r.links,o=void 0===l?[]:l,m=r.logo,f=void 0===m?{}:m,E=Object(u.a)(f.src);return t?i.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===t.style})},i.a.createElement("div",{className:"container"},o&&o.length>0&&i.a.createElement("div",{className:"row footer__links"},o.map((function(e,a){return i.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return"GitHub Stars"===e.label?i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:a})):"GitHub Sponsors"===e.label?i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?i.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(g,e))}))):null)}))),(f||n)&&i.a.createElement("div",{className:"text--center"},f&&f.src&&i.a.createElement("div",{className:"margin-bottom--sm"},f.href?i.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},i.a.createElement(p,{alt:f.alt,url:E})):i.a.createElement(p,{alt:f.alt,url:E})),n,"Icons made by ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);