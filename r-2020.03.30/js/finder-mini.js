!function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n,a=o[t],u=!0,i=1;i<a.length;i++)n=a[i],0!==c[n]&&(u=!1);u&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var a={},c={6:0},o=[];r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([223,1,0,3,2]),n()}({17:function(e,t,n){"use strict";function r(e){return c.a.createElement("button",{className:"finder__clear",type:"button",onClick:()=>{e.clear()}},c.a.createElement("span",{className:"far fa-fw fa-times icon"}),c.a.createElement("span",{className:"finder__clear__text"},"Reset"))}var a=n(0),c=n.n(a),o=n(1),u=n.n(o);r.propTypes={clear:u.a.func},t.a=r},2:function(e,t,n){"use strict";function r(e){return!("true"!==e)}function a(e,t,n){var r=n?P(t):L(t);e.className=e.className.split(/\s+/).filter(e=>r(e)).join(" ")}function c(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function o(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function u(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function i(e){var t={};return e.substr(1).split("&").forEach(e=>{var[n,r]=e.split("=");t[n]=r}),t}function s(e){if(0<Object.keys(e).length){var t="?";for(var n in e)1!==t.length&&(t+="&"),t+=n+"="+e[n];return t}return""}function l(e,t,n,r,a,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:n,eventLabel:r,eventValue:a,nonInteractionHit:c})}function f(e,t){t.forEach(t=>e.appendChild(t))}function d(e){return e.replace(/\D/g,"")}function p(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432,t=window.innerWidth;if(t<e)return!0}function m(e){for(var t=[],n=e.length>>>0;n--;)t[n]=e[n];return t}function b(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var r=e.indexOf("Edge/");return!!(0<r)&&parseInt(e.substring(r+5,e.indexOf(".",r)),10)}function g(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function y(e,t){var n=document.createElement(e);return t.map((function(e){"content"===e.label?n.appendChild(document.createTextNode(e.val)):n.setAttribute(e.label,e.val)})),n}function v(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function h(e){return C()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{C.a.isCancel(e)||l("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function _(e){return T.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),T.a.createElement("sup",null,function(e){var t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}n.d(t,"p",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"m",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"r",(function(){return u})),n.d(t,"l",(function(){return i})),n.d(t,"k",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"o",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"q",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return _}));var w=n(13),O=(n.n(w),n(4)),S=(n.n(O),n(5)),E=(n.n(S),n(16)),j=(n.n(E),n(33)),q=(n.n(j),n(7)),k=(n.n(q),n(3)),N=(n.n(k),n(6)),x=(n.n(N),n(11)),C=n.n(x),D=n(0),T=n.n(D),P=e=>t=>0>t.indexOf(e),L=e=>t=>t!==e},223:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";n.r(t);var r=n(3),a=(n.n(r),n(0)),c=n.n(a),o=n(43),u=(n.n(o),n(55)),i=n(9);document.addEventListener("DOMContentLoaded",()=>{/(Trident|MSIE)/.test(navigator.userAgent)||Array.from(document.querySelectorAll(".finder__mini")).forEach(e=>{Object(i.b)(e.dataset.config).then(t=>{Object(o.render)(c.a.createElement(u.a,{config:t}),e)})})})},55:function(e,t,n){"use strict";function r(e){function t(){h.focus()}var[n,r]=Object(o.useState)(e.query.query),[a,c]=Object(o.useState)([]),[i,s]=Object(o.useState)({cancel:()=>{}}),[g]=Object(o.useState)("finder--"+e.query.collection+"--"+Math.random().toString(16).slice(-4)),[y,v]=Object(o.useState)(!1);Object(o.useEffect)(()=>{r(e.query.query)},[e.updating]);var h=null,_=()=>{i.cancel(),r(""),c([]),t();var n=e.query;n.query="",n.sortBy=e.config.sort,e.update.query(n),e.update.results(!e.update.updateState)},w=t=>{i.cancel();var n=e.query;n.query=t,e.update.query(n),e.update.results(!e.update.updateState)},O=n&&u.a.createElement(f.a,{clear:()=>{_()}}),S=a&&0<a.length&&u.a.createElement("ul",{className:y?"finder__query__suggestions show":"finder__query__suggestions hide"},[...new Set(a)].slice(0,d).map(e=>u.a.createElement("li",{key:e},u.a.createElement("button",{type:"button",onBlur:()=>v(!1),onFocus:()=>v(!0),onMouseDown:()=>{v(!0),r(e),c([]),t(),w(e)},onClick:()=>{v(!0),r(e),c([]),t(),w(e)},onKeyDown:e=>{switch(e.keyCode){case p:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),c([]);break;case m:e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus()):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus());break;case b:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus())}}},function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,u.a.createElement("span",{className:"sr-only"},e),u.a.createElement("span",{"aria-hidden":"true"},u.a.createElement("span",{className:"finder__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,n))))),E=u.a.createElement("div",{className:"finder__query__input"},u.a.createElement("div",{className:"finder__query__icon--wrapper"},u.a.createElement("span",{className:"finder__icon fal fa-search"})),u.a.createElement("label",{className:"sr-only",htmlFor:g},"Search ".concat(e.config.summariseAs.plural)),u.a.createElement("input",{autoComplete:"off",id:g,name:"query",placeholder:e.config.placeholder,ref:e=>{h=e},type:"text",value:n,onKeyDown:e=>{switch(e.keyCode){case p:_();break;case b:a&&0<a.length&&(e.preventDefault(),e.target.parentNode.querySelector(".finder__query__suggestions button").focus())}},onFocus:()=>v(!0),onBlur:()=>v(!1),onChange:t=>{if(c([]),r(t.target.value),i.cancel(),t.target.value){var[n,a]=Object(l.c)(e.query.collection,t.target.value);s({cancel:()=>{a.cancel()}}),n.then(e=>c(e)).catch(()=>c([]))}else c([])}}),S,O);return u.a.createElement("fieldset",{className:"finder__query"},u.a.createElement("div",null,E,u.a.createElement("button",{type:"submit",className:"finder__query__submit",onClick:()=>(()=>{function e(e){return e===a}var t="",r=["Short courses","Professional development courses","City Health courses","In-house law courses"],a=document.getElementsByClassName("finder__mini")[0].getAttribute("data-level");!function(a){t=r.filter(e).length?"meta_level_sand=Short+courses+and+professional+development&meta_type_sand="+a:"meta_level_sand="+a,window.location.replace("https://web2020.city.ac.uk/prospective-students/courses?".concat(t,"&query=").concat(n))}(a)})()},u.a.createElement("span",{className:"fal fa-search finder__query__submit__icon","aria-hidden":"true"})," ",u.a.createElement("span",{className:"finder__query__submit__text"},"Find"))))}function a(e,t){return e.map(e=>{var n={};return t.get("meta_".concat(e.meta,"_orsand"))&&(n[e.meta]=t.get("meta_".concat(e.meta,"_orsand"))),n}).reduce((e,t)=>Object.assign(e,t))}function c(e){var t=new URLSearchParams(window.location.search),n={collection:e.config.collection,fixedFacets:e.config.fixedFacets,query:t.get("query")||"",sortBy:t.get("query")?null:t.get("sort")||e.config.sort,sortDirection:t.get("sortdirection")||e.config.sortDirection,startRank:t.get("start_rank")||1,numRanks:t.get("num_ranks")||e.config.numRanks,facets:a(e.config.facetLabels,t)},[r,c]=Object(o.useState)(n),[i,s]=Object(o.useState)(!0),[f,d]=Object(o.useState)({cancel:()=>{}}),[p,m]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{(function(e,t,n,r){var a=new URLSearchParams(window.location.search);""===e?a.delete("query"):a.set("query",e),1===t?a.delete("start_rank"):a.set("start_rank",t),r.forEach(e=>{n[e.meta]?a.set("meta_".concat(e.meta,"_orsand"),n[e.meta]):a.delete("meta_".concat(e.meta,"_orsand"))});var c=a.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(c).concat(a.toString()))})(r.query,r.startRank,r.facets,e.config.facetLabels),s(!0),f.cancel();var[t,n]=Object(l.a)(r.collection,r.fixedFacets,r.query,r.sortBy,r.sortDirection,r.startRank,r.numRanks,r.facets);d({cancel:()=>{n.cancel()}}),t.then(()=>{s(!1)}).catch(()=>{s(!1)})},[p]),u.a.createElement("form",{onSubmit:e=>{e.preventDefault()}},u.a.createElement(g,{config:e.config,query:r,update:{query:e=>c(e),results:e=>m(e),updateState:p},updating:i}))}n(4),n(23),n(60),n(16),n(39),n(3),n(6),n(61);var o=n(0),u=n.n(o),i=n(1),s=n.n(i),l=n(9),f=(n(13),n(5),n(33),n(17)),d=5,p=27,m=38,b=40;r.propTypes={config:s.a.object,query:s.a.object,update:s.a.object,updating:s.a.bool};var g=r;c.propTypes={config:s.a.object},t.a=c},80:function(){},81:function(){},9:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n,r,c,o,u,i){var s={};t.forEach(e=>{s["meta_".concat(e.meta,"_sand")]=e.value});var l={};Object.keys(i).forEach(e=>l["meta_".concat(e,"_sand")]=i[e]);var d=f.a.CancelToken.source(),y={baseURL:b,cancelToken:d.token,httpsAgent:new p.a.Agent({keepAlive:!0}),url:g,timeout:v,params:a({},s,{},l,{collection:e,num_ranks:u,query:n,sort:r?"".concat("desc"===c?"d":"").concat(r):null,start_rank:o})};return[Object(m.b)(y),d]}function u(e,t){var n=f.a.CancelToken.source(),r={baseURL:b,cancelToken:n.token,url:y,timeout:v,params:{collection:e,partial_query:t}};return[Object(m.b)(r),n]}function i(e){return Object(m.b)({timeout:v,url:e})}n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var s=n(3),l=(n.n(s),n(11)),f=n.n(l),d=n(42),p=n.n(d),m=n(2),b="https://web2020.city.ac.uk/web-services",g="/funnelback-find",y="/funnelback-suggest",v=3e4}});