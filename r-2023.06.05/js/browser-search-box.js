!function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={5:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([204,1,0,3,2]),n()}({2:function(e,t,n){"use strict";n.d(t,"q",(function(){return u})),n.d(t,"n",(function(){return s})),n.d(t,"m",(function(){return i})),n.d(t,"j",(function(){return l})),n.d(t,"s",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"p",(function(){return y})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return _})),n.d(t,"r",(function(){return w})),n.d(t,"b",(function(){return E})),n.d(t,"g",(function(){return S})),n.d(t,"f",(function(){return N})),n.d(t,"o",(function(){return x})),n(3),n(7);var r=n(5),a=n.n(r),o=n(0),c=n.n(o);function u(e){return"true"===e}function s(e,t,n){const r=n?(a=t,e=>e.indexOf(a)<0):(e=>t=>t!==e)(t);var a;e.className=e.className.split(/\s+/).filter(e=>r(e)).join(" ")}function i(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return 0!==e.offsetHeight&&0!==e.offsetWidth}function d(e){return e.getBoundingClientRect().top>=0&&e.getBoundingClientRect().top<=window.innerHeight}function f(e){const t={};return e.substr(1).split("&").forEach(e=>{const[n,r]=e.split("=");t[n]=r}),t}function p(e){if(Object.keys(e).length>0){let t="?";for(const n in e)1!==t.length&&(t+="&"),t+=n+"="+e[n];return t}return""}function m(e,t,n,r,a,o){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteractionHit:o})}function b(e,t){t.forEach(t=>e.appendChild(t))}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function y(e){let t=[];for(let n=e.length>>>0;n--;)t[n]=e[n];return t}function h(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}function v(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function _(e,t){let n=document.createElement(e);return t.map((function(e){"content"===e.label?n.appendChild(document.createTextNode(e.val)):"html"===e.label?n.innerHTML=e.val:n.setAttribute(e.label,e.val)})),n}function w(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function E(e){return a()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: "+e.status}).catch(e=>{a.a.isCancel(e)||m("jsError","JavaScript error",`Line ${e.lineNumber} – ${e.message}`,`axiosRequest ${e.fileName} (${window.location})`,!0)})}function S(e){const t=new Date(e);return c.a.createElement("time",{dateTime:`${t.getHours()?t.getHours():"00"}:${t.getMinutes()?t.getMinutes():"00"}`},t.getHours()?t.getHours():"00",":",t.getMinutes()?t.getMinutes():"00")}function N(e){return c.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),c.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11&&e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}function x(e){switch(e){case"tiny":return 375;case"mobile":return 432;case"tablet":return 768;case"between":return 900;case"small":return 1024;case"desktop":default:return 1280;case"large":return 1440;case"1080":return 1920;case"4k":return 3840;case"8k":return 7680}}},204:function(e,t,n){e.exports=n(211)},211:function(e,t,n){"use strict";n.r(t),n(3);var r=n(0),a=n.n(r),o=n(16),c=n(1),u=n.n(c),s=n(4),i=n(23);const l="Escape",d="ArrowDown";function f(e){const[t,n]=Object(r.useState)(""),[o,c]=Object(r.useState)([]),[u,f]=Object(r.useState)({cancel:()=>{}}),[p]=Object(r.useState)("search-box--"+e.query.collection),[m,b]=Object(r.useState)(!1),[g,y]=Object(r.useState)("");Object(r.useEffect)(()=>{n(e.query.query)},[e.query.query,e.updating]);let h=null;function v(){h.focus()}const _=()=>{u.cancel(),n(""),c([]),v()},w=t&&a.a.createElement(i.a,{clear:()=>{_()}}),E=n=>{b(!1),c([]),v(),(n=>{u.cancel();const r=e.query;r.misspelling=null,r.query=n||t||"",r.sortType=t?"":e.config.sort[0].type,r.startRank=1,r.interacted=!0,e.update.query(r),e.update.results(!e.update.updateState)})(n)},S=o&&o.length>0&&a.a.createElement("ul",{role:"listbox","aria-label":"Search suggestions","aria-activedescendant":g,className:m?"search-box__query__suggestions show":"search-box__query__suggestions hide"},[...new Set(o)].slice(0,5).map((e,n)=>a.a.createElement("li",{key:e,role:"option",id:p+"--"+n},a.a.createElement("button",{type:"button",onBlur:()=>{y(""),b(!1)},onFocus:()=>b(!0),onMouseDown:()=>E(e),onClick:()=>E(e),onKeyDown:e=>{switch(e.key){case l:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),c([]),y("");break;case"ArrowUp":e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus(),y(e.target.parentNode.previousElementSibling.id)):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),y(""));break;case d:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus(),y(e.target.parentNode.nextElementSibling.id));break;case"Home":e.preventDefault(),e.target.parentNode.parentNode.firstChild&&e.target.parentNode.parentNode.firstChild.querySelector("button")&&(e.preventDefault(),e.target.parentNode.parentNode.firstChild.querySelector("button").focus(),y(e.target.parentNode.firstChild.id));break;case"End":e.preventDefault(),e.target.parentNode.parentNode.lastChild&&e.target.parentNode.parentNode.lastChild.querySelector("button")&&(e.preventDefault(),e.target.parentNode.parentNode.lastChild.querySelector("button").focus(),y(e.target.parentNode.lastChild.id))}}},function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,a.a.createElement("span",{className:"sr-only"},e),a.a.createElement("span",{"aria-hidden":"true"},a.a.createElement("span",{className:"search-box__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,t))))),N=a.a.createElement("div",{className:"search-box__query__input"},a.a.createElement("label",{className:"sr-only",htmlFor:p},"Search"),a.a.createElement("input",{autoComplete:"off",id:p,name:"query",placeholder:"Enter course title or keyword",ref:e=>{h=e},type:"text",value:t,onKeyDown:e=>{switch(e.key){case l:_();break;case d:o&&o.length>0&&(e.preventDefault(),e.target.parentNode.querySelector(".search-box__query__suggestions button").focus(),y(e.target.parentNode.querySelector(".search-box__query__suggestions li").id))}},onFocus:()=>b(!0),onBlur:()=>b(!1),onChange:e=>{if(c([]),n(e.target.value),u.cancel(),e.target.value){const[t,n]=Object(s.c)("city-university~sp-web2020-courses",e.target.value);f({cancel:()=>{n.cancel()}}),t.then(e=>c(e)).catch(()=>c([]))}else c([])}}),S,w);return a.a.createElement("fieldset",{className:"search-box__query"},a.a.createElement("div",null,N,a.a.createElement("button",{type:"submit",className:"search-box__query__submit"},a.a.createElement("span",{className:"fal fa-search search-box__query__submit__icon","aria-hidden":"true"})," ",a.a.createElement("span",{className:"sr-only search-box__query__submit__text"},"Find"))))}f.propTypes={config:u.a.object,query:u.a.object,update:u.a.object,updating:u.a.bool};var p=f;function m(e){const t=e.query.facets[e.facet.meta]||"";return a.a.createElement("div",{className:"search-box__filter search-box__select "+(t&&"search-box__select--selected")},a.a.createElement("label",{className:"sr-only",htmlFor:`meta_${e.facet.meta}_sand--`},e.facet.name),a.a.createElement("select",{name:`meta_${e.facet.meta}_sand`,id:`meta_${e.facet.meta}_sand--`,onChange:t=>(t=>{const n=e.query;t?n.facets[e.facet.meta]=t:delete n.facets[e.facet.meta],n.startRank=1,n.misspelling=null,n.interacted=!0,e.update.query(n),e.update.results(!e.update.updateState)})(t.target.value),value:t},a.a.createElement("option",{value:"",id:`meta${e.facet.meta}all`,name:`meta_${e.facet.meta}_sand--`},e.facet.noSelection),e.facet.values.map((e,t)=>a.a.createElement("option",{key:t,value:e.data.toLowerCase()},e.label))),a.a.createElement("span",{className:"fas fa-sharp fa-chevron-down icon"}))}m.propTypes={facet:u.a.object,query:u.a.object,update:u.a.object};var b=m;function g(e){const t={collection:e.config.collection,facets:{},fixedFacets:e.config.fixedFacets,fixedParameters:e.config.fixParameters?e.config.fixParameters:[],interacted:!1,misspelling:null,numRanks:e.config.numRanks,query:"",sortType:"",startRank:1},[n,o]=Object(r.useState)(t),[c]=Object(r.useState)(!0),[u,s]=Object(r.useState)(!1),i={query:e=>o(e),results:e=>s(e),updateState:u},l=e.config.facetLabels.filter(e=>"level"===e.meta);return a.a.createElement("form",{action:"https://www.city.ac.uk/prospective-students/courses"},a.a.createElement("h2",null,"Search for a course"),a.a.createElement(b,{key:l[0].meta,facet:l[0],query:n,update:i}),a.a.createElement(p,{config:e.config,query:n,update:i,updating:c}))}g.propTypes={config:u.a.object,element:u.a.object};var y=g;document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelector("#search-box");e&&Object(s.b)(e.dataset.config).then(t=>{Object(o.hydrate)(a.a.createElement(y,{element:e,config:t}),e)})}})},23:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),c=n.n(o);function u(e){return a.a.createElement("button",{className:"finder__clear",type:"button",onClick:()=>{e.clear(e.resetSort)}},a.a.createElement("span",{className:"fad fa-fw fa-times-circle icon "}),a.a.createElement("span",{className:"finder__clear__text"},"Clear query"))}u.propTypes={clear:c.a.func,resetSort:c.a.bool},t.a=u},39:function(e,t){},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(5),a=n.n(r),o=n(22),c=n.n(o),u=n(2);const s="https://www.city.ac.uk/web-services",i=3e4;function l(e,t,n,r,o,l,d,f,p){const m={};n.forEach(e=>{m[""+e.name]=e.value});const b={};t.forEach(e=>{b[`meta_${e.meta}_sand`]=e.value});const g={};Object.keys(f).forEach(e=>g[`meta_${e}_sand`]=f[e]);const y=a.a.CancelToken.source(),h={baseURL:s,cancelToken:y.token,httpsAgent:new c.a.Agent({keepAlive:!0}),url:"/funnelback-16-find",timeout:i,params:{...m,...b,...g,collection:e,num_ranks:d,query:r,sort:o||"",start_rank:l,events:p||""}};return[Object(u.b)(h),y]}function d(e,t){const n=a.a.CancelToken.source(),r={baseURL:s,cancelToken:n.token,url:"/funnelback-16-suggest",timeout:i,params:{collection:e,partial_query:t,show:100}};return[Object(u.b)(r),n]}function f(e){const t={timeout:i,url:e};return Object(u.b)(t)}},40:function(e,t){}});