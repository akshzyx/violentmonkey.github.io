(self.webpackChunkviolentmonkey_github_io=self.webpackChunkviolentmonkey_github_io||[]).push([[451],{2102:function(e,t,r){const n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){r(6992),r(3948);var n=r(2122),c=r(215);const o=["scope","children"];r(6992),r(3948);const a=r(7294),{mdx:l}=r(4983),{useMDXScope:s}=r(6948);e.exports=function(e){let{scope:t,children:r}=e,u=c(e,o);const i=s(t),f=a.useMemo((()=>{if(!r)return null;const e=n({React:a,mdx:l},i),t=Object.keys(e),c=t.map((t=>e[t]));return new Function("_fn",...t,`${r}`)({},...c)}),[r,t]);return a.createElement(f,n({},u))}},8868:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(7294),c=r(2102),o=(r(4747),r(4916),r(2085));function a({items:e}){return n.createElement("ul",null,e.map(((e,t)=>{const r=e.url.indexOf("#"),c=r<0?"#":e.url.slice(r);return n.createElement("li",{key:t},n.createElement("a",{href:c},e.title),e.items&&n.createElement(a,{items:e.items}))})))}function l(e){const{className:t,data:r}=e,c=(0,n.useRef)(),l=(0,n.useRef)();return(0,n.useEffect)((()=>{if(!r)return;const t=Array.from(c.current.querySelectorAll("a"));t.forEach((e=>{e.dataset.id=decodeURIComponent(e.href.split("#")[1]||"")}));return(0,o.Z)((()=>{const{articleRef:r}=e;if(!r.current||!c.current)return;const{scrollTop:n}=document.body,o=t.map((e=>{const{id:t}=e.dataset,c=r.current.querySelector(`#${t}`);return c&&{id:t,a:e,offset:c.getBoundingClientRect().top-n-70}})).filter(Boolean),{a:a}=o.find(((e,t)=>{const r=o[t+1];return r&&r.offset>0}))||{};l.current&&(l.current.className=""),a&&(a.className="active"),l.current=a}))})),n.createElement("section",{className:`toc ${t||""}`,ref:c},r&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Table of Contents"),n.createElement(a,{items:r.items})))}var s=r(6798),u=r(7402),i=(0,s.n)((function({location:e,data:t}){const{mdx:r}=t,o=(0,n.useRef)(),{setData:a}=s._.useContainer();(0,n.useEffect)((()=>(a(r.frontmatter.sidebar),()=>{a(null)})),[r.frontmatter.sidebar,a]);const{pathname:i}=e,f="/"===i;return n.createElement(u.Z,{location:e},n.createElement("main",{className:"flex-1 has-toc"},!f&&n.createElement("section",{className:"mb-10 pt-1"},n.createElement("h1",null,r.frontmatter.title)),n.createElement("section",{className:"items-start with-toc"},!f&&n.createElement(l,{data:r.tableOfContents,articleRef:o}),n.createElement("article",{className:"flex-1 min-w-0 mr-4",ref:o},n.createElement(c.MDXRenderer,null,r.body))),n.createElement("section",null,n.createElement("hr",null),r.fields.slug.startsWith("posts/")&&n.createElement("div",{className:"mb-6"},n.createElement("em",null,"Published at ",r.frontmatter.date)))))}))},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},2122:function(e,t,r){var n=r(8416);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-index-js-c05e62fd87998660dde8.js.map