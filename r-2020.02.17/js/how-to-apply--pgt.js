!function(e){function a(a){for(var n,r,s=a[0],c=a[1],p=a[2],i=0,m=[];i<s.length;i++)r=s[i],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&m.push(l[r][0]),l[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(_&&_(a);m.length;)m.shift()();return o.push.apply(o,p||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t,r=o[a],s=!0,c=1;c<r.length;c++)t=r[c],0!==l[t]&&(s=!1);s&&(o.splice(a--,1),e=n(n.s=r[0]))}return e}function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r={},l={4:0},o=[];n.m=e,n.c=r,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var p=0;p<s.length;p++)a(s[p]);var _=c;o.push([232,0,1]),t()}({2:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){return!("true"!==e)}function l(e,a,t){var n=t?A(a):I(a);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function o(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function c(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function p(e){var a={};return e.substr(1).split("&").forEach(e=>{var t=n(e.split("="),2),r=t[0],l=t[1];a[r]=l}),a}function _(e){if(0<Object.keys(e).length){var a="?";for(var t in e)1!==a.length&&(a+="&"),a+=t+"="+e[t];return a}return""}function i(e,a,t,n,r,l){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:a,eventAction:t,eventLabel:n,eventValue:r,nonInteractionHit:l})}function m(e,a){a.forEach(a=>e.appendChild(a))}function u(e){return e.replace(/\D/g,"")}function g(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432,a=window.innerWidth;if(a<e)return!0}function y(e){for(var a=[],t=e.length>>>0;t--;)a[t]=e[t];return a}function d(){var e=window.navigator.userAgent,a=e.indexOf("MSIE ");if(0<a)return parseInt(e.substring(a+5,e.indexOf(".",a)),10);if(0<e.indexOf("Trident/")){var t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}var n=e.indexOf("Edge/");return!!(0<n)&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}function f(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function h(e,a){var t=document.createElement(e);return a.map((function(e){"content"===e.label?t.appendChild(document.createTextNode(e.val)):t.setAttribute(e.label,e.val)})),t}function j(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function w(e){return q()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{q.a.isCancel(e)||i("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}t.d(a,"o",(function(){return r})),t.d(a,"m",(function(){return l})),t.d(a,"l",(function(){return o})),t.d(a,"h",(function(){return s})),t.d(a,"q",(function(){return c})),t.d(a,"k",(function(){return p})),t.d(a,"j",(function(){return _})),t.d(a,"f",(function(){return i})),t.d(a,"a",(function(){return m})),t.d(a,"i",(function(){return u})),t.d(a,"g",(function(){return g})),t.d(a,"n",(function(){return y})),t.d(a,"e",(function(){return d})),t.d(a,"c",(function(){return f})),t.d(a,"d",(function(){return h})),t.d(a,"p",(function(){return j})),t.d(a,"b",(function(){return w}));var E=t(16),b=(t.n(E),t(4)),N=(t.n(b),t(5)),v=(t.n(N),t(14)),O=(t.n(v),t(35)),k=(t.n(O),t(9)),x=(t.n(k),t(3)),S=(t.n(x),t(6)),C=(t.n(S),t(11)),q=t.n(C),A=e=>a=>0>a.indexOf(e),I=e=>a=>a!==e},232:function(e,a,t){e.exports=t(234)},234:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){var a=function(e){return e.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.map(e=>{var a=e.header,t=e.options.apply,n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n}),n={};return a?n[a]=t:n.UNIQUE=t,n})}(e.config),t={qualification:1===Object.keys(a).length?Object.keys(a[0])[0]:null,subject:null,entry:null,location:null},r=n(Object(o.useState)(!1),2),c=r[0],p=r[1],_=n(Object(o.useState)(t),2),i=_[0],d=_[1],f=n(Object(o.useState)(l(i)),2),h=f[0],j=f[1],w=n(Object(o.useState)(!0),2),E=w[0],b=w[1],N=n(Object(o.useState)(!0),2),v=N[0],O=N[1],k=n(Object(o.useState)(!0),2),x=k[0],S=k[1],C="qualification"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the qualification you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},a.map((e,a)=>s.a.createElement("li",{key:"qualification"+a},s.a.createElement("button",{onClick:()=>{var a=i;a.qualification=Object.keys(e)[0],1===e[a.qualification].length?(a.subject="UNIQUE",b(!1)):(a.subject=null,b(!0)),d(a),j(l(a))}},s.a.createElement("span",null,Object.keys(e)[0])))))),q="subject"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the route you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},y(a,i.qualification).map((e,a)=>s.a.createElement("li",{key:"subject"+a},s.a.createElement("button",{onClick:()=>{var a=i;a.subject=Object.keys(e)[0];var t=e[a.subject];1===t.length?(a.entry=Object.keys(t[0])[0],O(!1)):(a.entry=null,O(!0)),d(a),j(l(a))}},s.a.createElement("span",null,Object.keys(e)[0])))))),A="entry"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose the entry point you wish to apply for:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},y(y(a,i.qualification),i.subject).map((e,a)=>{var t=new Date(Object.keys(e)[0]);return s.a.createElement("li",{key:"entry-point"+a},s.a.createElement("button",{onClick:()=>{var a=i;a.entry=Object.keys(e)[0];var t=e[a.entry];1===t.length?(a.location=Object.keys(t[0])[0],S(!1)):(a.location=null,S(!0)),d(a),j(l(a))}},s.a.createElement("span",null,g[t.getUTCMonth()]," ",t.getUTCFullYear())))}))),I="location"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Choose where you wish to study:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},y(y(y(a,i.qualification),i.subject),i.entry).map((e,a)=>s.a.createElement("li",{key:"location"+a},s.a.createElement("button",{onClick:()=>{var a=i;a.entry=Object.keys(e)[0],d(a),j(l(a))}},s.a.createElement("span",null,Object.keys(e)[0])))))),U="apply"===h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("p",null,"Apply online now:")),s.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},y(y(y(y(a,i.qualification),i.subject),i.entry),i.location).map((e,a)=>s.a.createElement("li",{key:"method"+a},s.a.createElement("a",{href:e[Object.keys(e)[0]]},s.a.createElement("span",null,Object.keys(e)[0]," ",s.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))))),M=1<Object.keys(a).length?"qualification"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):i.qualification?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=i;e.qualification=null,e.subject=null,e.entry=null,e.location=null,d(e),j(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},i.qualification))):null:null,T=E?"subject"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):i.subject?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=i;e.subject=null,e.entry=null,e.location=null,d(e),j(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose study route"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},i.subject))):null:null,B=v?"entry"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):i.entry?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=i;e.entry=null,e.location=null,d(e),j(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose entry point"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},g[new Date(i.entry).getUTCMonth()]," ",new Date(i.entry).getUTCFullYear()))):null:null,F=x?"location"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):i.location?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{var e=i;e.location=null,d(e),j(l(e))}},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose location"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},i.location))):null:null,L="apply"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"})))),D=1<Object.keys(a).length&&("qualification"==h||i.qualification)?s.a.createElement("li",{className:"qualification"===h?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"qualification"===h?"fas fa-circle icon":"fas fa-check icon"})),"qualification"===h&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,J=E&&("subject"==h||i.subject)?s.a.createElement("li",{className:"subject"===h?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"subject"===h?"fas fa-circle icon":"fas fa-check icon"})),"subject"===h&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Subject"))):null,Q=v&&("entry"==h||i.entry)?s.a.createElement("li",{className:"entry"===h?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"entry"===h?"fas fa-circle icon":"fas fa-check icon"})),"entry"===h&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,P=x&&("location"==h||i.location)?s.a.createElement("li",{className:"location"===h?"how-to-apply--pgt--js__modal__progress__current":"how-to-apply--pgt--js__modal__progress__previous"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"location"===h?"fas fa-circle icon":"fas fa-check icon"})),"location"===h&&s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Location"))):null,R="apply"===h?s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})),s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))):s.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},s.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},s.a.createElement("span",{className:"fas fa-circle icon"})))),H=e.element.dataset.otheryear&&e.element.dataset.otherurl&&s.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},s.a.createElement("a",{href:e.element.dataset.otherurl},"Apply to start in ",e.element.dataset.otheryear,".")),W=JSON.stringify(i)!==JSON.stringify(t)&&s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},s.a.createElement("button",{onClick:()=>{d(t),j(l(t))}},s.a.createElement("span",{className:"fas fa-redo"})," ",s.a.createElement("span",null,"Start again"))),Y=n(Object(o.useState)({}),2),V=Y[0],z=Y[1],G=null,K=null,X=()=>G,Z=()=>K;return Object(o.useEffect)(()=>{V.activate||z(m()(Z(),{initialFocus:Z().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>p(!1),clickOutsideDeactivates:!0})),c?(V.activate&&V.activate(),Object(u.disableBodyScroll)(X())):(V.deactivate&&V.deactivate(),Object(u.enableBodyScroll)(X()))},[c]),s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"cta-block"},s.a.createElement("li",{className:"cta-block__cta"},s.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>p(!0)},s.a.createElement("span",null,"Apply now")))),s.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":c,ref:e=>G=e},s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>K=e},s.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{V.deactivate&&V.deactivate(),Object(u.enableBodyScroll)(X()),p(!1)}},s.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),W,s.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},M,T,B,F,L),s.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress--mobile"},D,J,Q,P,R),s.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},s.a.createElement("h2",null,"Applying to start in ",e.element.dataset.year),H),C,q,A,I,U)))}function l(e){return null===e.qualification?"qualification":null===e.subject?"subject":null===e.entry?"entry":null===e.location?"location":"apply"}t.r(a);t(17),t(3);var o=t(0),s=t.n(o),c=t(46),p=(t(4),t(14),t(6),t(1)),_=t.n(p),i=t(26),m=t.n(i),u=t(27),g=["January","February","March","April","May","June","July","August","September","October","November","December"],y=(e,a)=>e.filter(e=>Object.keys(e)[0]===a)[0][a];r.propTypes={config:_.a.array,element:_.a.object};var d=t(2),f=3e4,h=t(150),j=t.n(h);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){var e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(d.b)({timeout:f,url:e})})(e.dataset.config).then(a=>{Object(c.render)(s.a.createElement(r,{config:j()(a),element:e}),e)})})}})}});