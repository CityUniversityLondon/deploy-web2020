!function(e){function t(t){for(var n,o,s=t[0],c=t[1],p=t[2],u=0,_=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);_.length;)_.shift()();return l.push.apply(l,p||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a,o=l[t],s=!0,c=1;c<o.length;c++)a=o[c],0!==r[a]&&(s=!1);s&&(l.splice(t--,1),e=n(n.s=o[0]))}return e}function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={},r={7:0},l=[];n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var i=c;l.push([217,1,0,4,3,2]),a()}({2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function o(e,t,a){const n=a?C(t):T(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function r(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function s(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function c(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function p(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function i(e,t,a,n,o,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:o,nonInteractionHit:r})}function u(e,t){t.forEach(t=>e.appendChild(t))}function _(e=432){if(window.innerWidth<e)return!0}function m(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function d(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function f(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function h(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function g(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function y(e){return x()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{x.a.isCancel(e)||i("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function w(e){return S.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),S.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}a.d(t,"o",(function(){return n})),a.d(t,"m",(function(){return o})),a.d(t,"l",(function(){return r})),a.d(t,"i",(function(){return l})),a.d(t,"q",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"j",(function(){return p})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"h",(function(){return _})),a.d(t,"n",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return h})),a.d(t,"p",(function(){return g})),a.d(t,"b",(function(){return y})),a.d(t,"f",(function(){return w}));var E=a(4),b=(a.n(E),a(11)),j=(a.n(b),a(14)),N=(a.n(j),a(3)),O=(a.n(N),a(5)),v=(a.n(O),a(8)),x=a.n(v),k=a(0),S=a.n(k);const C=e=>t=>0>t.indexOf(e),T=e=>t=>t!==e},217:function(e,t,a){e.exports=a(223)},223:function(e,t,a){"use strict";function n(e){if(e.data)return e.data.map((e,t)=>p.a.createElement("li",{key:t,className:"apply"},p.a.createElement("a",{href:e.link},p.a.createElement("span",null,e.text)," ",p.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}));return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e){function t(){H(),W(),V(),G(),te(),ne(),re(),se(),pe(),ue(),X(),$(),me()}function a(e){let t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getUTCMonth()]," ").concat(t.getUTCFullYear())}function o(e){let a,o,r,l;T(D),t(),a=q?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m),j(),O(),x()}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(a),o=F?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{O(),x(),q?i(q[0].options):_(m)}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,j(o),r=L?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{x(),F?s(F[0].options):q?i(q[0].options):_(m)}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,O(r),l=p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))),x(l),S();let c,u=[];e.map(e=>{const t={text:e.header,link:e.options.apply};u.push(t),c=p.a.createElement(n,{data:u}),me(c)})}function l(e,t,l){let s=[];e.map(e=>{let a=r(r({},e),{},{options:e.options.filter(e=>e.header===t)});s.push(a)});let c=[];s.map(e=>{e.options[0]&&c.push(e.options[0].header)}),c=c.filter((e,t,a)=>a.indexOf(e)===t);let i=c.map(e=>p.a.createElement("h3",{key:e},e)),u=s.map(t=>{if(0<t.options.length){if(1<t.options[0].options.length)return p.a.createElement("li",{key:t},p.a.createElement("button",null,p.a.createElement("span",{"data-date-src":t.header,onClick:t=>{let n=t.target.getAttribute("data-date-src");U=a(n),L=e.filter(e=>e.header===n),o(L[0].options[0].options),y(!1)}},a(t.header))));{const e={text:a(t.header),link:t.options[0].options[0].options.apply};let o=[];return o.push(e),o=Array.from(new Set(o.map(e=>e.text))).map(e=>o.find(t=>t.text===e)),p.a.createElement(n,{data:o})}}});s.map(()=>{"#location-1"===l?(te(i),ne(u)):"#location-2"==l&&(se(i),pe(u))})}function s(e){T(P),t(),x(),L=null;let r,s,c,u,d,f,h=[],g=[],w=[],b=[];c=q?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m)}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(c),u=F?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{i(q[0].options)}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,j(u),d=L?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,O(d),e.map(t=>{let c=t.options;c.map(i=>{let u=i.options;u.map(()=>{if(1<e.length||1<e[0].options.length)if(U=p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))),O(U),x(),c.map(e=>{w.push(e.header)}),w=w.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<w.length){w.map(t=>{let a=e.filter(e=>e.options[0].header===t);b.push(a)});let t=[];e.map(e=>{e.options.map(e=>{t.push(e.header)})}),t=t.filter((e,t,a)=>a.indexOf(e)===t);for(let a=1;a<=t.length;a++)l(e,t[a-1],"#location-".concat(a),"#location-".concat(a,"__buttons"))}else if(1<c.length||1<u.length)h.push(t.header),h=h.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),r=h.map(t=>p.a.createElement("li",{key:t},p.a.createElement("button",null,p.a.createElement("span",{"data-date-src":t,onClick:t=>{let n=t.target.getAttribute("data-date-src");U=a(n),L=e.filter(e=>e.header===n),o(L[0].options[0].options),y(!1)}},a(t))))),S(I);else{g.push(t.header),g=g.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];g.map(t=>{let n=e.filter(e=>e.header===t);f={text:a(t),link:n[0].options[0].options[0].options.apply},o.push(f)}),s=p.a.createElement(n,{data:o}),S()}else o(e[0].options[0].options)})})}),s&&$(s),r&&X(r)}function i(e){t(),O(),x(),F=null,L=null;let a,o,r,l,c=[],i=[],u=[];l=q?p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},p.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m)}},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(l),e.map(t=>{T(A);let l=t.options;l.map(_=>{let m=_.options;m.map(_=>{let d=_.options;d.map(()=>{if(m.map(e=>{u.push(e.header)}),u=u.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(J=p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))),j(J),O(),x(),1<l.length||1<u.length||1<d.length)c.push(t.header),c=c.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),o=c.map(t=>p.a.createElement("li",{key:t},p.a.createElement("button",null,p.a.createElement("span",{onClick:t=>{J=t.target.textContent,F=e.filter(e=>e.header===J),s(F[0].options),y(!1)}},t)))),S(I);else{i.push(t.header),i=i.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];i.map(t=>{let n=e.filter(e=>e.header===t);a={text:t,link:n[0].options[0].options[0].options[0].options.apply},o.push(a)}),r=p.a.createElement(n,{data:o}),S()}else s(e[0].options)})})})}),o&&V(o),r&&G(r)}function _(e){y(!0),T(M),t(),j(),O(),x(),q=null,F=null,L=null;let a,o,r=[],l=[],s=[];1<e.length&&(B=p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon"})),p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))),E(B)),1<e.length?e.map(t=>{let c=t.options;c.map(u=>{let _=u.options;_.map(u=>{let m=u.options;m.map(u=>{let d=u.options;d.map(()=>{if(m.map(e=>{s.push(e.header)}),s=s.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(1<c.length||1<_.length||1<s.length||1<d.length)r.push(t.header),r=r.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),a=r.map(t=>p.a.createElement("li",{key:t},p.a.createElement("button",null,p.a.createElement("span",{onClick:t=>{B=t.target.innerText,q=e.filter(e=>e.header===B),i(q[0].options),y(!1)}},t)))),S(I);else{l.push(t.header),l=l.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const a=[];l.map(t=>{let n=e.filter(e=>e.header===t);const o={text:t,link:n[0].options[0].options[0].options[0].options[0].options.apply};a.push(o)}),o=p.a.createElement(n,{data:a})}})})})})}):i(m[0].options),a&&H(a),o&&W(o)}let m=e.config;const[d,h]=Object(c.useState)(!1),[g,y]=Object(c.useState)(!1),[w,E]=Object(c.useState)(),[b,j]=Object(c.useState)(),[N,O]=Object(c.useState)(),[v,x]=Object(c.useState)(),[k,S]=Object(c.useState)(),[C,T]=Object(c.useState)("Choose the qualification you wish to apply for:"),M="Choose the qualification you wish to apply for:",A="Choose the route you wish to apply for:",P="Choose the entry point you wish to apply for:",D="Apply online now:",I=p.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},p.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},p.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"}))));let q,B,F,J,L,U,[R,H]=Object(c.useState)(),[Q,W]=Object(c.useState)(),[Y,V]=Object(c.useState)(),[z,G]=Object(c.useState)(),[K,X]=Object(c.useState)(),[Z,$]=Object(c.useState)(),[ee,te]=Object(c.useState)(),[ae,ne]=Object(c.useState)(!1),[oe,re]=Object(c.useState)(!1),[le,se]=Object(c.useState)(),[ce,pe]=Object(c.useState)(!1),[ie,ue]=Object(c.useState)(!1),[_e,me]=Object(c.useState)();const de=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},p.a.createElement("p",null,C),ee||ae||oe||le||ce||ie?p.a.createElement(p.a.Fragment,null,ee,p.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},ae,oe),le,p.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},ce,ie)):p.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},R,Q,Y,z,K,Z,_e))),fe=e.element.dataset.otheryear&&e.element.dataset.otherurl&&p.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},p.a.createElement("a",{href:e.element.dataset.otherurl},e.element.dataset.otheryear," entry is also available.")),[he,ge]=Object(c.useState)({});let ye=null,we=null;const Ee=()=>ye,be=()=>we;return Object(c.useEffect)(()=>{he.activate||ge(f()(be(),{initialFocus:be().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>h(!1),clickOutsideDeactivates:!0})),d?(he.activate&&he.activate(),Object(u.a)(Ee())):(he.deactivate&&he.deactivate(),Object(u.b)(Ee()))},[d]),p.a.createElement(p.a.Fragment,null,p.a.createElement("ul",{className:"cta-block"},p.a.createElement("li",{className:"cta-block__cta"},p.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>{h(!0),y(!0),t(),_(m)}},p.a.createElement("span",null,"Apply now")))),p.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":d,ref:e=>ye=e},p.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>we=e},p.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{he.deactivate&&he.deactivate(),Object(u.b)(Ee()),h(!1)}},p.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),g?null:p.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},p.a.createElement("button",{onClick:()=>{y(!0),_(m)}},p.a.createElement("span",{className:"fas fa-redo"})," ",p.a.createElement("span",null,"Start again"))),p.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},w,b,N,v,k),p.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},p.a.createElement("h2",null,"Start in ",e.element.dataset.year)),de,p.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},fe))))}a.r(t);var c=a(0),p=a.n(c),i=a(24),u=(a(4),a(29),a(5),a(20)),_=a(1),m=a.n(_),d=a(18),f=a.n(d);s.propTypes={config:m.a.array,element:m.a.object};var h=a(2);const g=3e4;var y=a(131),w=a.n(y);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(h.b)({timeout:g,url:e})})(e.dataset.config).then(t=>{Object(i.render)(p.a.createElement(s,{config:w()(t),element:e}),e)})})}})}});