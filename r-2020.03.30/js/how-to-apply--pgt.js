!function(e){function a(a){for(var n,l,s=a[0],c=a[1],p=a[2],i=0,m=[];i<s.length;i++)l=s[i],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(_&&_(a);m.length;)m.shift()();return o.push.apply(o,p||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t,l=o[a],s=!0,c=1;c<l.length;c++)t=l[c],0!==r[t]&&(s=!1);s&&(o.splice(a--,1),e=n(n.s=l[0]))}return e}function n(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var l={},r={7:0},o=[];n.m=e,n.c=l,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)n.d(t,l,function(a){return e[a]}.bind(null,l));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var p=0;p<s.length;p++)a(s[p]);var _=c;o.push([225,1,0,3,2,4]),t()}({2:function(e,a,t){"use strict";function n(e){return!("true"!==e)}function l(e,a,t){var n=t?M(a):I(a);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function r(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function o(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function s(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function c(e){var a={};return e.substr(1).split("&").forEach(e=>{var[t,n]=e.split("=");a[t]=n}),a}function p(e){if(0<Object.keys(e).length){var a="?";for(var t in e)1!==a.length&&(a+="&"),a+=t+"="+e[t];return a}return""}function _(e,a,t,n,l,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:a,eventAction:t,eventLabel:n,eventValue:l,nonInteractionHit:r})}function i(e,a){a.forEach(a=>e.appendChild(a))}function m(e){return e.replace(/\D/g,"")}function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432,a=window.innerWidth;if(a<e)return!0}function g(e){for(var a=[],t=e.length>>>0;t--;)a[t]=e[t];return a}function d(){var e=window.navigator.userAgent,a=e.indexOf("MSIE ");if(0<a)return parseInt(e.substring(a+5,e.indexOf(".",a)),10);if(0<e.indexOf("Trident/")){var t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}var n=e.indexOf("Edge/");return!!(0<n)&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}function y(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function f(e,a){var t=document.createElement(e);return a.map((function(e){"content"===e.label?t.appendChild(document.createTextNode(e.val)):t.setAttribute(e.label,e.val)})),t}function h(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function j(e){return q()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{q.a.isCancel(e)||_("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function E(e){return T.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),T.a.createElement("sup",null,function(e){var a=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===a?"st":"2"===a?"nd":"3"===a?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}t.d(a,"p",(function(){return n})),t.d(a,"n",(function(){return l})),t.d(a,"m",(function(){return r})),t.d(a,"i",(function(){return o})),t.d(a,"r",(function(){return s})),t.d(a,"l",(function(){return c})),t.d(a,"k",(function(){return p})),t.d(a,"g",(function(){return _})),t.d(a,"a",(function(){return i})),t.d(a,"j",(function(){return m})),t.d(a,"h",(function(){return u})),t.d(a,"o",(function(){return g})),t.d(a,"e",(function(){return d})),t.d(a,"c",(function(){return y})),t.d(a,"d",(function(){return f})),t.d(a,"q",(function(){return h})),t.d(a,"b",(function(){return j})),t.d(a,"f",(function(){return E}));var w=t(13),b=(t.n(w),t(4)),N=(t.n(b),t(5)),v=(t.n(N),t(16)),O=(t.n(v),t(33)),k=(t.n(O),t(7)),x=(t.n(k),t(3)),C=(t.n(x),t(6)),S=(t.n(C),t(11)),q=t.n(S),U=t(0),T=t.n(U),M=e=>a=>0>a.indexOf(e),I=e=>a=>a!==e},225:function(e,a,t){e.exports=t(227)},227:function(e,a,t){"use strict";function n(e){var a=function(e){return e.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.apply,n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n})}(e.config),t={qualification:1===Object.keys(a).length?Object.keys(a[0])[0]:null,subject:null,entry:null,location:null},[n,s]=Object(r.useState)(!1),[c,p]=Object(r.useState)(t),[_,d]=Object(r.useState)(l(c)),[y,f]=Object(r.useState)(!0),[h,j]=Object(r.useState)(!0),[E,w]=Object(r.useState)(!0),b="qualification"===_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,"Choose the qualification you wish to apply for:")),o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},a.map((e,a)=>o.a.createElement("li",{key:"qualification"+a},o.a.createElement("button",{onClick:()=>{var a=c;a.qualification=Object.keys(e)[0],1===e[a.qualification].length?(a.subject="UNIQUE",f(!1)):(a.subject=null,f(!0)),p(a),d(l(a))}},o.a.createElement("span",null,Object.keys(e)[0])))))),N="subject"===_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,"Choose the route you wish to apply for:")),o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(a,c.qualification).map((e,a)=>o.a.createElement("li",{key:"subject"+a},o.a.createElement("button",{onClick:()=>{var a=c;a.subject=Object.keys(e)[0];var t=e[a.subject];1===t.length?(a.entry=Object.keys(t[0])[0],j(!1)):(a.entry=null,j(!0)),p(a),d(l(a))}},o.a.createElement("span",null,Object.keys(e)[0])))))),v="entry"===_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,"Choose the entry point you wish to apply for:")),o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(a,c.qualification),c.subject).map((e,a)=>{var t=new Date(Object.keys(e)[0]);return o.a.createElement("li",{key:"entry-point"+a},o.a.createElement("button",{onClick:()=>{var a=c;a.entry=Object.keys(e)[0];var t=e[a.entry];1===t.length?(a.location=Object.keys(t[0])[0],w(!1)):(a.location=null,w(!0)),p(a),d(l(a))}},o.a.createElement("span",null,u[t.getUTCMonth()]," ",t.getUTCFullYear())))}))),O="location"===_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,"Choose where you wish to study:")),o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(g(a,c.qualification),c.subject),c.entry).map((e,a)=>o.a.createElement("li",{key:"location"+a},o.a.createElement("button",{onClick:()=>{var a=c;a.entry=Object.keys(e)[0],p(a),d(l(a))}},o.a.createElement("span",null,Object.keys(e)[0])))))),k="apply"===_&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,"Apply online now:")),o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},g(g(g(g(a,c.qualification),c.subject),c.entry),c.location).map((e,a)=>o.a.createElement("li",{key:"method"+a},o.a.createElement("a",{href:e[Object.keys(e)[0]]},o.a.createElement("span",null,Object.keys(e)[0]," ",o.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))))),x=1<Object.keys(a).length?"qualification"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):c.qualification?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=c;e.qualification=null,e.subject=null,e.entry=null,e.location=null,p(e),d(l(e))}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.qualification))):null:null,C=y?"subject"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):c.subject?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=c;e.subject=null,e.entry=null,e.location=null,p(e),d(l(e))}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose study route"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.subject))):null:null,S=h?"entry"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):c.entry?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=c;e.entry=null,e.location=null,p(e),d(l(e))}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose entry point"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},u[new Date(c.entry).getUTCMonth()]," ",new Date(c.entry).getUTCFullYear()))):null:null,q=E?"location"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):c.location?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=c;e.location=null,p(e),d(l(e))}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose location"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},c.location))):null:null,U="apply"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"})))),T=1<Object.keys(a).length&&("qualification"===_||c.qualification)?o.a.createElement("li",{className:"qualification"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"qualification"===_?"fas fa-circle icon":"fas fa-check icon"})),"qualification"===_&&o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,M=y&&("subject"===_||c.subject)?o.a.createElement("li",{className:"subject"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"subject"===_?"fas fa-circle icon":"fas fa-check icon"})),"subject"===_&&o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Subject"))):null,I=h&&("entry"===_||c.entry)?o.a.createElement("li",{className:"entry"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"entry"===_?"fas fa-circle icon":"fas fa-check icon"})),"entry"===_&&o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,A=E&&("location"===_||c.location)?o.a.createElement("li",{className:"location"===_?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"location"===_?"fas fa-circle icon":"fas fa-check icon"})),"location"===_&&o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):null,F="apply"===_?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})))),D=e.element.dataset.otheryear&&e.element.dataset.otherurl&&o.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},o.a.createElement("a",{href:e.element.dataset.otherurl},"Apply to start in ",e.element.dataset.otheryear,".")),J=JSON.stringify(c)!==JSON.stringify(t)&&o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},o.a.createElement("button",{onClick:()=>{p(t),d(l(t))}},o.a.createElement("span",{className:"fas fa-redo"})," ",o.a.createElement("span",null,"Start again"))),[B,L]=Object(r.useState)({}),Q=null,P=null,R=()=>Q,H=()=>P;return Object(r.useEffect)(()=>{B.activate||L(i()(H(),{initialFocus:H().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>s(!1),clickOutsideDeactivates:!0})),n?(B.activate&&B.activate(),Object(m.disableBodyScroll)(R())):(B.deactivate&&B.deactivate(),Object(m.enableBodyScroll)(R()))},[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"cta-block"},o.a.createElement("li",{className:"cta-block__cta"},o.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>s(!0)},o.a.createElement("span",null,"Apply now")))),o.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":n,ref:e=>Q=e},o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>P=e},o.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{B.deactivate&&B.deactivate(),Object(m.enableBodyScroll)(R()),s(!1)}},o.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),J,o.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},x,C,S,q,U),o.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress--mobile"},T,M,I,A,F),o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("h2",null,"Applying to start in ",e.element.dataset.year),D),b,N,v,O,k)))}function l(e){return null===e.qualification?"qualification":null===e.subject?"subject":null===e.entry?"entry":null===e.location?"location":"apply"}t.r(a);t(3);var r=t(0),o=t.n(r),s=t(43),c=(t(4),t(6),t(1)),p=t.n(c),_=t(24),i=t.n(_),m=t(25),u=["January","February","March","April","May","June","July","August","September","October","November","December"],g=(e,a)=>e.filter(e=>Object.keys(e)[0]===a)[0][a];n.propTypes={config:p.a.array,element:p.a.object};var d=t(2),y=3e4,f=t(142),h=t.n(f);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){var e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(d.b)({timeout:y,url:e})})(e.dataset.config).then(a=>{Object(s.render)(o.a.createElement(n,{config:h()(a),element:e}),e)})})}})}});