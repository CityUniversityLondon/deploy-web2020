!function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n,a=o[t],u=!0,i=1;i<a.length;i++)n=a[i],0!==c[n]&&(u=!1);u&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var a={},c={6:0},o=[];r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([220,1,0,3,2]),n()}({15:function(e,t,n){"use strict";function r(e){return c.a.createElement("button",{className:"finder__clear",type:"button",onClick:()=>{e.clear()}},c.a.createElement("span",{className:"far fa-fw fa-times icon"}),c.a.createElement("span",{className:"finder__clear__text"},"Reset"))}var a=n(0),c=n.n(a),o=n(1),u=n.n(o);r.propTypes={clear:u.a.func},t.a=r},2:function(e,t,n){"use strict";function r(e){return!("true"!==e)}function a(e,t,n){const r=n?T(t):P(t);e.className=e.className.split(/\s+/).filter(e=>r(e)).join(" ")}function c(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function o(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function u(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function i(e){const t={};return e.substr(1).split("&").forEach(e=>{const[n,r]=e.split("=");t[n]=r}),t}function s(e){if(0<Object.keys(e).length){let t="?";for(const n in e)1!==t.length&&(t+="&"),t+=n+"="+e[n];return t}return""}function l(e,t,n,r,a,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteractionHit:c})}function f(e,t){t.forEach(t=>e.appendChild(t))}function d(e){return e.replace(/\D/g,"")}function p(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function m(e){let t=[];for(let n=e.length>>>0;n--;)t[n]=e[n];return t}function g(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const n=e.indexOf("Edge/");return!!(0<n)&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}function b(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function y(e,t){let n=document.createElement(e);return t.map((function(e){"content"===e.label?n.appendChild(document.createTextNode(e.val)):n.setAttribute(e.label,e.val)})),n}function _(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function h(e){return x()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{x.a.isCancel(e)||l("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function w(e){return D.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),D.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}function O(e,t){let n=[],r=0,a=e.length;for(;r<a;)n.push(e.slice(r,r+=t));return n}n.d(t,"q",(function(){return r})),n.d(t,"o",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"j",(function(){return o})),n.d(t,"s",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"p",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return y})),n.d(t,"r",(function(){return _})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return w})),n.d(t,"b",(function(){return O}));var v=n(4),E=(n.n(v),n(14)),j=(n.n(E),n(19)),S=(n.n(j),n(6)),q=(n.n(S),n(3)),k=(n.n(q),n(5)),N=(n.n(k),n(8)),x=n.n(N),C=n(0),D=n.n(C);const T=e=>t=>0>t.indexOf(e),P=e=>t=>t!==e},220:function(e,t,n){e.exports=n(221)},221:function(e,t,n){"use strict";n.r(t);var r=n(3),a=(n.n(r),n(0)),c=n.n(a),o=n(41),u=(n.n(o),n(52)),i=n(7);document.addEventListener("DOMContentLoaded",()=>{/(Trident|MSIE)/.test(navigator.userAgent)||Array.from(document.querySelectorAll(".finder__mini")).forEach(e=>{Object(i.b)(e.dataset.config).then(t=>{Object(o.render)(c.a.createElement(u.a,{config:t}),e)})})})},52:function(e,t,n){"use strict";function r(e){function t(){h.focus()}const[n,r]=Object(o.useState)(e.query.query),[a,c]=Object(o.useState)([]),[i,s]=Object(o.useState)({cancel:()=>{}}),[b]=Object(o.useState)("finder--"+e.query.collection+"--"+Math.random().toString(16).slice(-4)),[y,_]=Object(o.useState)(!1);Object(o.useEffect)(()=>{r(e.query.query)},[e.updating]);let h=null;const w=()=>{i.cancel(),r(""),c([]),t();const n=e.query;n.query="",n.sortBy=e.config.sort,e.update.query(n),e.update.results(!e.update.updateState)},O=t=>{i.cancel();const n=e.query;n.query=t,e.update.query(n),e.update.results(!e.update.updateState)},v=n&&u.a.createElement(f.a,{clear:()=>{w()}}),E=a&&0<a.length&&u.a.createElement("ul",{className:y?"finder__query__suggestions show":"finder__query__suggestions hide"},[...new Set(a)].slice(0,d).map(e=>u.a.createElement("li",{key:e},u.a.createElement("button",{type:"button",onBlur:()=>_(!1),onFocus:()=>_(!0),onMouseDown:()=>{_(!0),r(e),c([]),t(),O(e)},onClick:()=>{_(!0),r(e),c([]),t(),O(e)},onKeyDown:e=>{switch(e.keyCode){case p:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),c([]);break;case m:e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus()):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus());break;case g:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus())}}},function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,u.a.createElement("span",{className:"sr-only"},e),u.a.createElement("span",{"aria-hidden":"true"},u.a.createElement("span",{className:"finder__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,n))))),j=u.a.createElement("div",{className:"finder__query__input"},u.a.createElement("div",{className:"finder__query__icon--wrapper"},u.a.createElement("span",{className:"finder__icon fal fa-search"})),u.a.createElement("label",{className:"sr-only",htmlFor:b},"Search ".concat(e.config.summariseAs.plural)),u.a.createElement("input",{autoComplete:"off",id:b,name:"query",placeholder:e.config.placeholder,ref:e=>{h=e},type:"text",value:n,onKeyDown:e=>{switch(e.keyCode){case p:w();break;case g:a&&0<a.length&&(e.preventDefault(),e.target.parentNode.querySelector(".finder__query__suggestions button").focus())}},onFocus:()=>_(!0),onBlur:()=>_(!1),onChange:t=>{if(c([]),r(t.target.value),i.cancel(),t.target.value){const[n,r]=Object(l.c)(e.query.collection,t.target.value);s({cancel:()=>{r.cancel()}}),n.then(e=>c(e)).catch(()=>c([]))}else c([])}}),E,v);return u.a.createElement("fieldset",{className:"finder__query"},u.a.createElement("div",null,j,u.a.createElement("button",{type:"submit",className:"finder__query__submit",onClick:()=>(()=>{let e="",t=document.getElementsByClassName("finder__mini")[0];e="meta_level_sand="+t.getAttribute("data-level")+"&meta_subject_sand="+t.getAttribute("data-subject")+"&meta_type_sand="+t.getAttribute("data-type"),window.location.replace("https://web2020.city.ac.uk/prospective-students/courses?".concat(e,"&query=").concat(n))})()},u.a.createElement("span",{className:"fal fa-search finder__query__submit__icon","aria-hidden":"true"})," ",u.a.createElement("span",{className:"finder__query__submit__text"},"Find"))))}function a(e,t){return e.map(e=>{const n={};return t.get("meta_".concat(e.meta,"_orsand"))&&(n[e.meta]=t.get("meta_".concat(e.meta,"_orsand"))),n}).reduce((e,t)=>Object.assign(e,t))}function c(e){const t=new URLSearchParams(window.location.search),n={collection:e.config.collection,fixedFacets:e.config.fixedFacets,query:t.get("query")||"",sortBy:t.get("query")?null:t.get("sort")||e.config.sort,sortDirection:t.get("sortdirection")||e.config.sortDirection,startRank:t.get("start_rank")||1,numRanks:t.get("num_ranks")||e.config.numRanks,facets:a(e.config.facetLabels,t)},[r,c]=Object(o.useState)(n),[i,s]=Object(o.useState)(!0),[f,d]=Object(o.useState)({cancel:()=>{}}),[p,m]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{(function(e,t,n,r){const a=new URLSearchParams(window.location.search);""===e?a.delete("query"):a.set("query",e),1===t?a.delete("start_rank"):a.set("start_rank",t),r.forEach(e=>{n[e.meta]?a.set("meta_".concat(e.meta,"_orsand"),n[e.meta]):a.delete("meta_".concat(e.meta,"_orsand"))});const c=a.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(c).concat(a.toString()))})(r.query,r.startRank,r.facets,e.config.facetLabels),s(!0),f.cancel();const[t,n]=Object(l.a)(r.collection,r.fixedFacets,r.query,r.sortBy,r.sortDirection,r.startRank,r.numRanks,r.facets);d({cancel:()=>{n.cancel()}}),t.then(()=>{s(!1)}).catch(()=>{s(!1)})},[p]),u.a.createElement("form",{onSubmit:e=>{e.preventDefault()}},u.a.createElement(b,{config:e.config,query:r,update:{query:e=>c(e),results:e=>m(e),updateState:p},updating:i}))}n(4),n(20),n(58),n(14),n(35),n(3),n(5),n(59);var o=n(0),u=n.n(o),i=n(1),s=n.n(i),l=n(7),f=(n(19),n(15));const d=5,p=27,m=38,g=40;r.propTypes={config:s.a.object,query:s.a.object,update:s.a.object,updating:s.a.bool};var b=r;c.propTypes={config:s.a.object},t.a=c},7:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n,r,c,o,u,i){const s={};t.forEach(e=>{s["meta_".concat(e.meta,"_sand")]=e.value});const l={};Object.keys(i).forEach(e=>l["meta_".concat(e,"_sand")]=i[e]);const d=f.a.CancelToken.source(),y={baseURL:g,cancelToken:d.token,httpsAgent:new p.a.Agent({keepAlive:!0}),url:b,timeout:_,params:a(a(a({},s),l),{},{collection:e,num_ranks:u,query:n,sort:r?"".concat("desc"===c?"d":"").concat(r):null,start_rank:o})};return[Object(m.c)(y),d]}function u(e,t){const n=f.a.CancelToken.source(),r={baseURL:g,cancelToken:n.token,url:y,timeout:_,params:{collection:e,partial_query:t}};return[Object(m.c)(r),n]}function i(e){return Object(m.c)({timeout:_,url:e})}n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var s=n(3),l=(n.n(s),n(8)),f=n.n(l),d=n(40),p=n.n(d),m=n(2);const g="https://web2020.city.ac.uk/web-services",b="/funnelback-find",y="/funnelback-suggest",_=3e4},76:function(){},77:function(){}});