!function(e){function t(t){for(var n,l,r=t[0],c=t[1],p=t[2],i=0,m=[];i<r.length;i++)l=r[i],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(_&&_(t);m.length;)m.shift()();return s.push.apply(s,p||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a,l=s[t],r=!0,c=1;c<l.length;c++)a=l[c],0!==o[a]&&(r=!1);r&&(s.splice(t--,1),e=n(n.s=l[0]))}return e}function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var l={},o={4:0},s=[];n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var _=c;s.push([223,0,1]),a()}({2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function l(e,t,a){const n=a?x(t):C(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function o(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function r(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function c(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function p(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function _(e,t,a,n,l,o){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:l,nonInteractionHit:o})}function i(e,t){t.forEach(t=>e.appendChild(t))}function m(e){return e.replace(/\D/g,"")}function u(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function g(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function d(){let e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}let a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function y(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function f(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):a.setAttribute(e.label,e.val)})),a}function h(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function j(e){return k()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{k.a.isCancel(e)||_("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}a.d(t,"o",(function(){return n})),a.d(t,"m",(function(){return l})),a.d(t,"l",(function(){return o})),a.d(t,"h",(function(){return s})),a.d(t,"q",(function(){return r})),a.d(t,"k",(function(){return c})),a.d(t,"j",(function(){return p})),a.d(t,"f",(function(){return _})),a.d(t,"a",(function(){return i})),a.d(t,"i",(function(){return m})),a.d(t,"g",(function(){return u})),a.d(t,"n",(function(){return g})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return f})),a.d(t,"p",(function(){return h})),a.d(t,"b",(function(){return j}));var w=a(4),E=(a.n(w),a(30)),b=(a.n(E),a(13)),N=(a.n(b),a(3)),v=(a.n(N),a(5)),O=(a.n(v),a(8)),k=a.n(O);const x=e=>t=>0>t.indexOf(e),C=e=>t=>t!==e},223:function(e,t,a){e.exports=a(225)},225:function(e,t,a){"use strict";function n(e){const t=function(e){return e.map(e=>{const t=e.header,a=e.options.map(e=>{const t=e.header,a=e.options.map(e=>{const t=e.header,a=e.options.map(e=>{const t=e.header,a=e.options.map(e=>{const t=e.header,a=e.options.apply,n={};return t?n[t]=a:n.UNIQUE=a,n}),n={};return t?n[t]=a:n.UNIQUE=a,n}),n={};return t?n[t]=a:n.UNIQUE=a,n}),n={};return t?n[t]=a:n.UNIQUE=a,n}),n={};return t?n[t]=a:n.UNIQUE=a,n})}(e.config),a={qualification:1===Object.keys(t).length?Object.keys(t[0])[0]:null,subject:null,entry:null,location:null},[n,r]=Object(o.useState)(!1),[c,p]=Object(o.useState)(a),[_,d]=Object(o.useState)(l(c)),[y,f]=Object(o.useState)(!0),[h,j]=Object(o.useState)(!0),[w,E]=Object(o.useState)(!0),b="qualification"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the qualification you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},t.map((e,t)=>s.a.createElement("li",{key:"qualification"+t},s.a.createElement("button",{onClick:()=>{const t=c;t.qualification=Object.keys(e)[0],1===e[t.qualification].length?(t.subject="UNIQUE",f(!1)):(t.subject=null,f(!0)),p(t),d(l(t))}},s.a.createElement("span",null,Object.keys(e)[0])))))),N="subject"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the route you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(t,c.qualification).map((e,t)=>s.a.createElement("li",{key:"subject"+t},s.a.createElement("button",{onClick:()=>{const t=c;t.subject=Object.keys(e)[0];const a=e[t.subject];1===a.length?(t.entry=Object.keys(a[0])[0],j(!1)):(t.entry=null,j(!0)),p(t),d(l(t))}},s.a.createElement("span",null,Object.keys(e)[0])))))),v="entry"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the entry point you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(t,c.qualification),c.subject).map((e,t)=>{const a=new Date(Object.keys(e)[0]);return s.a.createElement("li",{key:"entry-point"+t},s.a.createElement("button",{onClick:()=>{const t=c;t.entry=Object.keys(e)[0];const a=e[t.entry];1===a.length?(t.location=Object.keys(a[0])[0],E(!1)):(t.location=null,E(!0)),p(t),d(l(t))}},s.a.createElement("span",null,u[a.getUTCMonth()]," ",a.getUTCFullYear())))}))),O="location"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose where you wish to study:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(g(t,c.qualification),c.subject),c.entry).map((e,t)=>s.a.createElement("li",{key:"location"+t},s.a.createElement("button",{onClick:()=>{const t=c;t.entry=Object.keys(e)[0],p(t),d(l(t))}},s.a.createElement("span",null,Object.keys(e)[0])))))),k="apply"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Apply online now:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(g(g(t,c.qualification),c.subject),c.entry),c.location).map((e,t)=>s.a.createElement("li",{key:"method"+t},s.a.createElement("a",{href:e[Object.keys(e)[0]]},s.a.createElement("span",null,Object.keys(e)[0]," ",s.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))))),x=1<Object.keys(t).length?"qualification"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):c.qualification?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{const e=c;e.qualification=null,e.subject=null,e.entry=null,e.location=null,p(e),d(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.qualification))):null:null,C=y?"subject"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):c.subject?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{const e=c;e.subject=null,e.entry=null,e.location=null,p(e),d(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose study route"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.subject))):null:null,q=h?"entry"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):c.entry?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{const e=c;e.entry=null,e.location=null,p(e),d(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose entry point"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},u[new Date(c.entry).getUTCMonth()]," ",new Date(c.entry).getUTCFullYear()))):null:null,S=w?"location"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):c.location?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{const e=c;e.location=null,p(e),d(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose location"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.location))):null:null,U="apply"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"})))),I=1<Object.keys(t).length&&("qualification"==_||c.qualification)?s.a.createElement("li",{className:"qualification"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"qualification"===_?"fas fa-circle icon":"fas fa-check icon"})),"qualification"===_&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,M=y&&("subject"==_||c.subject)?s.a.createElement("li",{className:"subject"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"subject"===_?"fas fa-circle icon":"fas fa-check icon"})),"subject"===_&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Subject"))):null,A=h&&("entry"==_||c.entry)?s.a.createElement("li",{className:"entry"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"entry"===_?"fas fa-circle icon":"fas fa-check icon"})),"entry"===_&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,B=w&&("location"==_||c.location)?s.a.createElement("li",{className:"location"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"location"===_?"fas fa-circle icon":"fas fa-check icon"})),"location"===_&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):null,F="apply"===_?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})))),L=e.element.dataset.otheryear&&e.element.dataset.otherurl&&s.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},s.a.createElement("a",{href:e.element.dataset.otherurl},"Apply to start in ",e.element.dataset.otheryear,".")),T=JSON.stringify(c)!==JSON.stringify(a)&&s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},s.a.createElement("button",{onClick:()=>{p(a),d(l(a))}},s.a.createElement("span",{className:"fas fa-redo"})," ",s.a.createElement("span",null,"Start again"))),[D,J]=Object(o.useState)({});let Q=null,P=null;const R=()=>Q,H=()=>P;return Object(o.useEffect)(()=>{D.activate||J(i()(H(),{initialFocus:H().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>r(!1),clickOutsideDeactivates:!0})),n?(D.activate&&D.activate(),Object(m.disableBodyScroll)(R())):(D.deactivate&&D.deactivate(),Object(m.enableBodyScroll)(R()))},[n]),s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"cta-block"},s.a.createElement("li",{className:"cta-block__cta"},s.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>r(!0)},s.a.createElement("span",null,"Apply now")))),s.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":n,ref:e=>Q=e},s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>P=e},s.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{D.deactivate&&D.deactivate(),Object(m.enableBodyScroll)(R()),r(!1)}},s.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),T,s.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},x,C,q,S,U),s.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress--mobile"},I,M,A,B,F),s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("h2",null,"Applying to start in ",e.element.dataset.year),L),b,N,v,O,k)))}function l(e){return null===e.qualification?"qualification":null===e.subject?"subject":null===e.entry?"entry":null===e.location?"location":"apply"}a.r(t);a(3);var o=a(0),s=a.n(o),r=a(41),c=(a(4),a(5),a(1)),p=a.n(c),_=a(21),i=a.n(_),m=a(22);const u=["January","February","March","April","May","June","July","August","September","October","November","December"],g=(e,t)=>e.filter(e=>Object.keys(e)[0]===t)[0][t];n.propTypes={config:p.a.array,element:p.a.object};var d=a(2);const y=3e4;var f=a(135),h=a.n(f);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(d.b)({timeout:y,url:e})})(e.dataset.config).then(t=>{Object(r.render)(s.a.createElement(n,{config:h()(t),element:e}),e)})})}})}});