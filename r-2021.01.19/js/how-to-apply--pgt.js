!function(e){function t(t){for(var n,o,s=t[0],c=t[1],p=t[2],u=0,_=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);_.length;)_.shift()();return l.push.apply(l,p||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a,o=l[t],s=!0,c=1;c<o.length;c++)a=o[c],0!==r[a]&&(s=!1);s&&(l.splice(t--,1),e=n(n.s=o[0]))}return e}function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={},r={6:0},l=[];n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var i=c;l.push([214,0,1,3,2,4]),a()}({2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function o(e,t,a){const n=a?C(t):T(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function r(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function s(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function c(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function p(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function i(e,t,a,n,o,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:o,nonInteractionHit:r})}function u(e,t){t.forEach(t=>e.appendChild(t))}function _(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function m(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function d(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function h(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function f(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function g(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function y(e){return x()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{x.a.isCancel(e)||i("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function E(e){return S.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),S.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}a.d(t,"o",(function(){return n})),a.d(t,"m",(function(){return o})),a.d(t,"l",(function(){return r})),a.d(t,"i",(function(){return l})),a.d(t,"q",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"j",(function(){return p})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"h",(function(){return _})),a.d(t,"n",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return f})),a.d(t,"p",(function(){return g})),a.d(t,"b",(function(){return y})),a.d(t,"f",(function(){return E}));var w=a(5),b=(a.n(w),a(14)),j=(a.n(b),a(13)),N=(a.n(j),a(3)),O=(a.n(N),a(6)),v=(a.n(O),a(10)),x=a.n(v),k=a(0),S=a.n(k);const C=e=>t=>0>t.indexOf(e),T=e=>t=>t!==e},214:function(e,t,a){e.exports=a(218)},218:function(e,t,a){"use strict";function n(e){if(e.data)return e.data.map((e,t)=>l.a.createElement("li",{key:t,className:"apply"},l.a.createElement("a",{href:e.link},l.a.createElement("span",null,e.text)," ",l.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))}function o(e){function t(){P(),H(),Y(),V(),$(),te(),ne(),re(),se(),pe(),G(),X(),ue()}function a(e){let t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getUTCMonth()]," ").concat(t.getUTCFullYear())}function o(e){let a,o,r,c;S(M),t(),a=q?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{i(u),w(),j(),O()}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},B))):null,y(a),o=D?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{j(),O(),q?p(q[0].options):i(u)}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},F))):null,w(o),r=J?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{O(),D?s(D[0].options):q?p(q[0].options):i(u)}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},L))):null,j(r),c=l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))),O(c),x();let _,m=[];e.map(e=>{const t={text:e.header,link:e.options.apply};m.push(t),_=l.a.createElement(n,{data:m}),ue(_)})}function s(e){S(A),t(),O(),J=null;let r,s,c,_,m,d,h=[],g=[],E=[],b=[],N=[];c=q?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{i(u)}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},B))):null,y(c),_=D?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{p(q[0].options)}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},F))):null,w(_),m=J?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,j(m),e.map(t=>{let c=t.options;c.map(p=>{let i=p.options;i.map(()=>{if(1<e.length)if(L=l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))),j(L),O(),c.map(e=>{N.push(e.header)}),N=N.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<N.length){let t=[];N.map(a=>{let n=e.filter(e=>e.options[0].header===a);t.push(n)}),t[0].map(t=>{if(1<t.options[0].options.length)return l.a.createElement("li",{key:t},l.a.createElement("button",null,l.a.createElement("span",{"data-date-src":t,onClick:t=>{let n=t.target.getAttribute("data-date-src");L=a(n),J=e.filter(e=>e.header===n),o(J[0].options[0].options),f(!1)}},a(t))));{const e={text:a(t.header),link:t.options[0].options[0].options.apply};E.push(e),E=Array.from(new Set(E.map(e=>e.text))).map(e=>E.find(t=>t.text===e)),ae=l.a.createElement(n,{data:E})}}),t[1].map(t=>{if(1<t.options[0].options.length)return l.a.createElement("li",{key:t},l.a.createElement("button",null,l.a.createElement("span",{"data-date-src":t,onClick:t=>{let n=t.target.getAttribute("data-date-src");L=a(n),J=e.filter(e=>e.header===n),o(J[0].options[0].options),f(!1)}},a(t))));{const e={text:a(t.header),link:t.options[0].options[0].options.apply};b.push(e),b=Array.from(new Set(b.map(e=>e.text))).map(e=>b.find(t=>t.text===e)),ce=l.a.createElement(n,{data:b})}}),$(l.a.createElement("h3",null,t[0][0].options[0].header)),te(ee),ne(ae),re(l.a.createElement("h3",null,t[1][0].options[0].header)),se(le),pe(ce)}else if(1<c.length||1<i.length)h.push(t.header),h=h.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),r=h.map(t=>l.a.createElement("li",{key:t},l.a.createElement("button",null,l.a.createElement("span",{"data-date-src":t,onClick:t=>{let n=t.target.getAttribute("data-date-src");L=a(n),J=e.filter(e=>e.header===n),o(J[0].options[0].options),f(!1)}},a(t))))),x(I);else{g.push(t.header),g=g.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];g.map(t=>{let n=e.filter(e=>e.header===t);d={text:a(t),link:n[0].options[0].options[0].options.apply},o.push(d)}),s=l.a.createElement(n,{data:o}),x()}else o(e[0].options[0].options)})})}),s&&X(s),r&&G(r)}function p(e){t(),j(),O(),D=null,J=null;let a,o,r,c,p=[],_=[],m=[];c=q?l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},l.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{i(u)}},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},B))):null,y(c),e.map(t=>{S(T);let c=t.options;c.map(i=>{let u=i.options;u.map(i=>{let d=i.options;d.map(()=>{if(u.map(e=>{m.push(e.header)}),m=m.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(F=l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))),w(F),j(),O(),1<c.length||1<m.length||1<d.length)p.push(t.header),p=p.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),o=p.map(t=>l.a.createElement("li",{key:t},l.a.createElement("button",null,l.a.createElement("span",{onClick:t=>{F=t.target.textContent,D=e.filter(e=>e.header===F),s(D[0].options),f(!1)}},t)))),x(I);else{_.push(t.header),_=_.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];_.map(t=>{let n=e.filter(e=>e.header===t);a={text:t,link:n[0].options[0].options[0].options[0].options.apply},o.push(a)}),r=l.a.createElement(n,{data:o}),x()}else s(e[0].options)})})})}),o&&Y(o),r&&V(r)}function i(e){f(!0),S(C),t(),w(),j(),O(),q=null,D=null,J=null;let a,o,r=[],s=[],c=[];1<e.length&&(B=l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon"})),l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))),y(B)),1<e.length?e.map(t=>{let i=t.options;i.map(u=>{let _=u.options;_.map(u=>{let m=u.options;m.map(u=>{let d=u.options;d.map(()=>{if(m.map(e=>{c.push(e.header)}),c=c.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(1<i.length||1<_.length||1<c.length||1<d.length)r.push(t.header),r=r.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),a=r.map(t=>l.a.createElement("li",{key:t},l.a.createElement("button",null,l.a.createElement("span",{onClick:t=>{B=t.target.innerText,q=e.filter(e=>e.header===B),p(q[0].options),f(!1)}},t)))),x(I);else{s.push(t.header),s=s.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const a=[];s.map(t=>{let n=e.filter(e=>e.header===t);const o={text:t,link:n[0].options[0].options[0].options[0].options[0].options.apply};a.push(o)}),o=l.a.createElement(n,{data:a})}})})})})}):p(u[0].options),a&&P(a),o&&H(o)}let u=e.config;const[m,d]=Object(r.useState)(!1),[h,f]=Object(r.useState)(!1),[g,y]=Object(r.useState)(),[E,w]=Object(r.useState)(),[b,j]=Object(r.useState)(),[N,O]=Object(r.useState)(),[v,x]=Object(r.useState)(),[k,S]=Object(r.useState)("Choose the qualification you wish to apply for:"),C="Choose the qualification you wish to apply for:",T="Choose the route you wish to apply for:",A="Choose the entry point you wish to apply for:",M="Apply online now:",I=l.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},l.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},l.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"}))));let q,B,D,F,J,L,[U,P]=Object(r.useState)(),[R,H]=Object(r.useState)(),[W,Y]=Object(r.useState)(),[Q,V]=Object(r.useState)(),[z,G]=Object(r.useState)(),[K,X]=Object(r.useState)(),[Z,$]=Object(r.useState)(),[ee,te]=Object(r.useState)(!1),[ae,ne]=Object(r.useState)(!1),[oe,re]=Object(r.useState)(),[le,se]=Object(r.useState)(!1),[ce,pe]=Object(r.useState)(!1),[ie,ue]=Object(r.useState)();const _e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},l.a.createElement("p",null,k),Z||ee||ae||oe||le||ce?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,Z),l.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},ee,ae),l.a.createElement("h3",null,oe),l.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},le,ce)):l.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},U,R,W,Q,z,K,ie))),me=e.element.dataset.otheryear&&e.element.dataset.otherurl&&l.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},l.a.createElement("a",{href:e.element.dataset.otherurl},e.element.dataset.otheryear," entry is also available.")),[de,he]=Object(r.useState)({});let fe=null,ge=null;const ye=()=>fe,Ee=()=>ge;return Object(r.useEffect)(()=>{de.activate||he(_()(Ee(),{initialFocus:Ee().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>d(!1),clickOutsideDeactivates:!0})),m?(de.activate&&de.activate(),Object(c.a)(ye())):(de.deactivate&&de.deactivate(),Object(c.b)(ye()))},[m]),l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"cta-block"},l.a.createElement("li",{className:"cta-block__cta"},l.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>{d(!0),f(!0),t(),i(u)}},l.a.createElement("span",null,"Apply now")))),l.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":m,ref:e=>fe=e},l.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>ge=e},l.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{de.deactivate&&de.deactivate(),Object(c.b)(ye()),d(!1)}},l.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),h?null:l.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},l.a.createElement("button",{onClick:()=>{f(!0),i(u)}},l.a.createElement("span",{className:"fas fa-redo"})," ",l.a.createElement("span",null,"Start again"))),l.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},g,E,b,N,v),l.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},l.a.createElement("h2",null,"Start in ",e.element.dataset.year)),_e,l.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},me))))}a.r(t);var r=a(0),l=a.n(r),s=a(31),c=(a(5),a(6),a(32)),p=a(1),i=a.n(p),u=a(19),_=a.n(u);o.propTypes={config:i.a.array,element:i.a.object};var m=a(2);const d=3e4;var h=a(128),f=a.n(h);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(m.b)({timeout:d,url:e})})(e.dataset.config).then(t=>{Object(s.render)(l.a.createElement(o,{config:f()(t),element:e}),e)})})}})}});