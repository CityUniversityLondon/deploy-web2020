!function(e){function t(t){for(var n,o,s=t[0],p=t[1],c=t[2],u=0,_=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(i&&i(t);_.length;)_.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a,o=l[t],s=!0,p=1;p<o.length;p++)a=o[p],0!==r[a]&&(s=!1);s&&(l.splice(t--,1),e=n(n.s=o[0]))}return e}function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var o={},r={8:0},l=[];n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var i=p;l.push([238,1,0,4,3,2]),a()}({2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function o(e,t,a){const n=a?C(t):T(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function r(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function s(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function p(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function c(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function i(e,t,a,n,o,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:o,nonInteractionHit:r})}function u(e,t){t.forEach(t=>e.appendChild(t))}function _(e=432){if(window.innerWidth<e)return!0}function m(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function d(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function f(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function h(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function g(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function y(e){return x()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{x.a.isCancel(e)||i("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function w(e){return S.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),S.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}a.d(t,"o",(function(){return n})),a.d(t,"m",(function(){return o})),a.d(t,"l",(function(){return r})),a.d(t,"i",(function(){return l})),a.d(t,"q",(function(){return s})),a.d(t,"k",(function(){return p})),a.d(t,"j",(function(){return c})),a.d(t,"g",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"h",(function(){return _})),a.d(t,"n",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return h})),a.d(t,"p",(function(){return g})),a.d(t,"b",(function(){return y})),a.d(t,"f",(function(){return w}));var E=a(4),b=(a.n(E),a(10)),j=(a.n(b),a(14)),N=(a.n(j),a(3)),O=(a.n(N),a(5)),v=(a.n(O),a(7)),x=a.n(v),k=a(0),S=a.n(k);const C=e=>t=>0>t.indexOf(e),T=e=>t=>t!==e},238:function(e,t,a){e.exports=a(246)},246:function(e,t,a){"use strict";function n(e){if(e.data)return e.data.map((e,t)=>c.a.createElement("li",{key:t,className:"apply"},c.a.createElement("a",{href:e.link},c.a.createElement("span",null,e.text)," ",c.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}));return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e){function t(){R(),Q(),Y(),z(),ee(),ae(),oe(),le(),pe(),ie(),K(),Z(),_e()}function a(e){let t=new Date(e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getUTCMonth()]," ").concat(t.getUTCFullYear())}function o(e,a){let o,r,l,p;a&&T(a),t(),o=I?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m),j(),O(),x()}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(o),r=B?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{O(),x(),I?i(I[0].options):_(m)}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,j(r),l=J?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{x(),B?s(B[0].options):I?i(I[0].options):_(m)}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,O(l),p=c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))),x(p),S();let u,d=[];e.map(e=>{const t={text:e.header,link:e.options.apply};d.push(t),u=c.a.createElement(n,{data:d}),_e(u)})}function l(e,t,l){let s=[];e.map(e=>{let a=r(r({},e),{},{options:e.options.filter(e=>e.header===t)});s.push(a)});let p=[];s.map(e=>{e.options[0]&&p.push(e.options[0].header)}),p=p.filter((e,t,a)=>a.indexOf(e)===t);let i=p.map(e=>c.a.createElement("h3",{key:e},e)),u=s.map(t=>{if(0<t.options.length){if(1<t.options[0].options.length)return c.a.createElement("li",{key:t},c.a.createElement("button",null,c.a.createElement("span",{"data-date-src":t.header,onClick:t=>{let n=t.target.getAttribute("data-date-src");L=a(n),J=e.filter(e=>e.header===n),o(J[0].options[0].options,"Apply online now:"),y(!1)}},a(t.header))));{const e={text:a(t.header),link:t.options[0].options[0].options.apply};let o=[];return o.push(e),o=Array.from(new Set(o.map(e=>e.text))).map(e=>o.find(t=>t.text===e)),c.a.createElement(n,{data:o})}}});s.map(()=>{"#location-1"===l?(ee(i),ae(u)):"#location-2"==l&&(le(i),pe(u))})}function s(e){T(P),t(),x(),J=null;let r,s,p,u,d,f,h=[],g=[],w=[],b=[];p=I?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m)}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(p),u=B?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{i(I[0].options)}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,j(u),d=J?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,O(d),e.map(t=>{let p=t.options;p.map(i=>{let u=i.options;u.map(()=>{if(1<e.length||1<e[0].options.length)if(L=c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))),O(L),x(),p.map(e=>{w.push(e.header)}),w=w.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<w.length){w.map(t=>{let a=e.filter(e=>e.options[0].header===t);b.push(a)});let t=[];e.map(e=>{e.options.map(e=>{t.push(e.header)})}),t=t.filter((e,t,a)=>a.indexOf(e)===t);for(let a=1;a<=t.length;a++)l(e,t[a-1],"#location-".concat(a),"#location-".concat(a,"__buttons"))}else if(1<p.length||1<u.length)h.push(t.header),h=h.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),r=h.map(t=>c.a.createElement("li",{key:t},c.a.createElement("button",null,c.a.createElement("span",{"data-date-src":t,onClick:t=>{let n=t.target.getAttribute("data-date-src");L=a(n),J=e.filter(e=>e.header===n),o(J[0].options[0].options,"Apply now for "+a(J[0].header)+" entry:"),y(!1)}},a(t))))),S(D);else{g.push(t.header),g=g.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];g.map(t=>{let n=e.filter(e=>e.header===t);f={text:a(t),link:n[0].options[0].options[0].options.apply},o.push(f)}),s=c.a.createElement(n,{data:o}),S()}else o(e[0].options[0].options,"Apply for "+a(e[0].header)+" entry:")})})}),s&&Z(s),r&&K(r)}function i(e){t(),O(),x(),B=null,J=null;let a,o,r,l,p=[],i=[],u=[];l=I?c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},c.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{_(m)}},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,E(l),e.map(t=>{T(M);let l=t.options;l.map(_=>{let m=_.options;m.map(_=>{let d=_.options;d.map(()=>{if(m.map(e=>{u.push(e.header)}),u=u.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(F=c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))),j(F),O(),x(),1<l.length||1<u.length||1<d.length)p.push(t.header),p=p.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),o=p.map(t=>c.a.createElement("li",{key:t},c.a.createElement("button",null,c.a.createElement("span",{onClick:t=>{F=t.target.textContent,B=e.filter(e=>e.header===F),s(B[0].options),y(!1)}},t)))),S(D);else{i.push(t.header),i=i.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const o=[];i.map(t=>{let n=e.filter(e=>e.header===t);a={text:t,link:n[0].options[0].options[0].options[0].options.apply},o.push(a)}),r=c.a.createElement(n,{data:o}),S()}else s(e[0].options)})})})}),o&&Y(o),r&&z(r)}function _(e){y(!0),T(A),t(),j(),O(),x(),I=null,B=null,J=null;let a,o,r=[],l=[],s=[];1<e.length&&(q=c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon"})),c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))),E(q)),1<e.length?e.map(t=>{let p=t.options;p.map(u=>{let _=u.options;_.map(u=>{let m=u.options;m.map(u=>{let d=u.options;d.map(()=>{if(m.map(e=>{s.push(e.header)}),s=s.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),1<e.length)if(1<p.length||1<_.length||1<s.length||1<d.length)r.push(t.header),r=r.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),a=r.map(t=>c.a.createElement("li",{key:t},c.a.createElement("button",null,c.a.createElement("span",{onClick:t=>{q=t.target.innerText,I=e.filter(e=>e.header===q),i(I[0].options),y(!1)}},t)))),S(D);else{l.push(t.header),l=l.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const a=[];l.map(t=>{let n=e.filter(e=>e.header===t);const o={text:t,link:n[0].options[0].options[0].options[0].options[0].options.apply};a.push(o)}),o=c.a.createElement(n,{data:a})}})})})})}):i(m[0].options),a&&R(a),o&&Q(o)}let m=e.config;const[d,h]=Object(p.useState)(!1),[g,y]=Object(p.useState)(!1),[w,E]=Object(p.useState)(),[b,j]=Object(p.useState)(),[N,O]=Object(p.useState)(),[v,x]=Object(p.useState)(),[k,S]=Object(p.useState)(),[C,T]=Object(p.useState)("Choose the qualification you wish to apply for:"),A="Choose the qualification you wish to apply for:",M="Choose the route you wish to apply for:",P="Choose the entry point you wish to apply for:",D=c.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},c.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},c.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"}))));let I,q,B,F,J,L,[U,R]=Object(p.useState)(),[H,Q]=Object(p.useState)(),[W,Y]=Object(p.useState)(),[V,z]=Object(p.useState)(),[G,K]=Object(p.useState)(),[X,Z]=Object(p.useState)(),[$,ee]=Object(p.useState)(),[te,ae]=Object(p.useState)(!1),[ne,oe]=Object(p.useState)(!1),[re,le]=Object(p.useState)(),[se,pe]=Object(p.useState)(!1),[ce,ie]=Object(p.useState)(!1),[ue,_e]=Object(p.useState)();const me=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},c.a.createElement("p",null,C),$||te||ne||re||se||ce?c.a.createElement(c.a.Fragment,null,$,c.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},te,ne),re,c.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},se,ce)):c.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},U,H,W,V,G,X,ue))),de=e.element.dataset.otheryear&&e.element.dataset.otherurl&&c.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},c.a.createElement("a",{href:e.element.dataset.otherurl},e.element.dataset.otheryear," entry is also available.")),[fe,he]=Object(p.useState)({});let ge=null,ye=null;const we=()=>ge,Ee=()=>ye;return Object(p.useEffect)(()=>{fe.activate||he(f()(Ee(),{initialFocus:Ee().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>h(!1),clickOutsideDeactivates:!0})),d?(fe.activate&&fe.activate(),Object(u.a)(we())):(fe.deactivate&&fe.deactivate(),Object(u.b)(we()))},[d]),c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"cta-block"},c.a.createElement("li",{className:"cta-block__cta"},c.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>{h(!0),y(!0),t(),_(m)}},c.a.createElement("span",null,"Apply now")))),c.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":d,ref:e=>ge=e},c.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>ye=e},c.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{fe.deactivate&&fe.deactivate(),Object(u.b)(we()),h(!1)}},c.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),g?null:c.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},c.a.createElement("button",{onClick:()=>{y(!0),_(m)}},c.a.createElement("span",{className:"fas fa-redo"})," ",c.a.createElement("span",null,"Start again"))),c.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},w,b,N,v,k),c.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},c.a.createElement("h2",null,"Start in ",e.element.dataset.year)),me,c.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},de))))}a.r(t);var p=a(0),c=a.n(p),i=a(25),u=(a(4),a(24),a(5),a(21)),_=a(1),m=a.n(_),d=a(17),f=a.n(d);s.propTypes={config:m.a.array,element:m.a.object};var h=a(2);const g=3e4;var y=a(138),w=a.n(y);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){return Object(h.b)({timeout:g,url:e})})(e.dataset.config).then(t=>{Object(i.render)(c.a.createElement(s,{config:w()(t),element:e}),e)})})}})}});
//# sourceMappingURL=how-to-apply--pgt.js.map