!function(e){function t(t){for(var n,s,l=t[0],p=t[1],c=t[2],u=0,_=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&_.push(o[s][0]),o[s]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(i&&i(t);_.length;)_.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var p=a[l];0!==o[p]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={8:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var i=p;r.push([245,1,0,4,3,2]),a()}({2:function(e,t,a){"use strict";a.d(t,"q",(function(){return l})),a.d(t,"n",(function(){return p})),a.d(t,"m",(function(){return c})),a.d(t,"j",(function(){return i})),a.d(t,"s",(function(){return u})),a.d(t,"l",(function(){return _})),a.d(t,"k",(function(){return m})),a.d(t,"h",(function(){return d})),a.d(t,"a",(function(){return f})),a.d(t,"i",(function(){return h})),a.d(t,"p",(function(){return g})),a.d(t,"e",(function(){return y})),a.d(t,"c",(function(){return E})),a.d(t,"d",(function(){return w})),a.d(t,"r",(function(){return b})),a.d(t,"b",(function(){return j})),a.d(t,"g",(function(){return N})),a.d(t,"f",(function(){return O})),a.d(t,"o",(function(){return v})),a(3),a(5),a(12);var n=a(8),o=a.n(n),r=a(0),s=a.n(r);function l(e){return"true"===e}function p(e,t,a){const n=a?(o=t,e=>e.indexOf(o)<0):(e=>t=>t!==e)(t);var o;e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function c(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function i(e){return 0!==e.offsetHeight&&0!==e.offsetWidth}function u(e){return e.getBoundingClientRect().top>=0&&e.getBoundingClientRect().top<=window.innerHeight}function _(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function m(e){if(Object.keys(e).length>0){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function d(e,t,a,n,o,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:o,nonInteractionHit:r})}function f(e,t){t.forEach(t=>e.appendChild(t))}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function g(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function y(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function E(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function w(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function b(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function j(e){return o()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: "+e.status}).catch(e=>{o.a.isCancel(e)||d("jsError","JavaScript error",`Line ${e.lineNumber} – ${e.message}`,`axiosRequest ${e.fileName} (${window.location})`,!0)})}function N(e){const t=new Date(e);return s.a.createElement("time",{dateTime:`${t.getHours()?t.getHours():"00"}:${t.getMinutes()?t.getMinutes():"00"}`},t.getHours()?t.getHours():"00",":",t.getMinutes()?t.getMinutes():"00")}function O(e){return s.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),s.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}function v(e){switch(e){case"tiny":return 375;case"mobile":return 432;case"tablet":return 768;case"between":return 900;case"small":return 1024;case"desktop":default:return 1280;case"large":return 1440;case"1080":return 1920;case"4k":return 3840;case"8k":return 7680}}},245:function(e,t,a){e.exports=a(260)},260:function(e,t,a){"use strict";a.r(t),a(3);var n=a(0),o=a.n(n),r=a(26),s=(a(5),a(25),a(22));function l(e){if(e.data)return e.data.map((e,t)=>o.a.createElement("li",{key:t,className:"apply"},o.a.createElement("a",{href:e.link},o.a.createElement("span",null,e.text)," ",o.a.createElement("span",{className:"far fa-external-link","aria-label":"(external link)"}))))}var p=a(1),c=a.n(p),i=a(18),u=a.n(i);function _(e){let t=e.config;const[a,r]=Object(n.useState)(!1),[p,c]=Object(n.useState)(!1),[i,_]=Object(n.useState)(),[m,d]=Object(n.useState)(),[f,h]=Object(n.useState)(),[g,y]=Object(n.useState)(),[E,w]=Object(n.useState)(),[b,j]=Object(n.useState)("Choose the qualification you wish to apply for:"),N=o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__next"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon","aria-hidden":"true"}))));let O,v,x,k,S,C,[M,T]=Object(n.useState)(),[A,D]=Object(n.useState)(),[I,q]=Object(n.useState)(),[B,F]=Object(n.useState)(),[J,L]=Object(n.useState)(),[H,U]=Object(n.useState)(),[$,P]=Object(n.useState)(),[R,Q]=Object(n.useState)(!1),[W,Y]=Object(n.useState)(!1),[V,z]=Object(n.useState)(),[G,K]=Object(n.useState)(!1),[X,Z]=Object(n.useState)(!1),[ee,te]=Object(n.useState)();function ae(){T(),D(),q(),F(),P(),Q(),Y(),z(),K(),Z(),L(),U(),te()}function ne(e){let t=new Date(e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getUTCMonth()]} ${t.getUTCFullYear()}`}function oe(e,a){let n,r,s,p;a&&j(a),ae(),n=O?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{pe(t),d(),h(),y()}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,_(n),r=x?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{h(),y(),O?le(O[0].options):pe(t)}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,d(r),s=S?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{y(),x?se(x[0].options):O?le(O[0].options):pe(t)}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,h(s),p=o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Method of study"))),y(p),w();let c,i=[];e.map(e=>{const t={text:e.header,link:e.options.apply};i.push(t),c=o.a.createElement(l,{data:i}),te(c)})}function re(e,t,a){let n=[];e.map(e=>{let a={...e,options:e.options.filter(e=>e.header===t)};n.push(a)});let r=[];n.map(e=>{e.options[0]&&r.push(e.options[0].header)}),r=r.filter((e,t,a)=>a.indexOf(e)===t);let s=r.map(e=>o.a.createElement("h3",{key:e},e)),p=n.map(t=>{if(t.options.length>0){if(t.options[0].options.length>1)return o.a.createElement("li",{key:t},o.a.createElement("button",null,o.a.createElement("span",{"data-date-src":t.header,onClick:t=>{let a=t.target.getAttribute("data-date-src");C=ne(a),S=e.filter(e=>e.header===a),oe(S[0].options[0].options,"Apply online now:"),c(!1)}},ne(t.header))));{const e={text:ne(t.header),link:t.options[0].options[0].options.apply};let a=[];return a.push(e),a=Array.from(new Set(a.map(e=>e.text))).map(e=>a.find(t=>t.text===e)),o.a.createElement(l,{data:a})}}});n.map(()=>{"#location-1"===a?(P(s),Q(p)):"#location-2"===a&&(z(s),K(p))})}function se(e){j("Choose the entry point you wish to apply for:"),ae(),y(),S=null;let a,n,r,s,p,i,u=[],m=[],f=[],g=[];r=O?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{pe(t)}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,_(r),s=x?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{pe(t)}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose route"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))):null,d(s),p=S?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))):null,h(p),e.map(t=>{let r=t.options;r.map(s=>{let p=s.options;p.map(()=>{if(e.length>1||e[0].options.length>1)if(C=o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Entry point"))),h(C),y(),r.map(e=>{f.push(e.header)}),f=f.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),f.length>1){f.map(t=>{let a=e.filter(e=>e.options[0].header===t);g.push(a)});let t=[];e.map(e=>{e.options.map(e=>{t.push(e.header)})}),t=t.filter((e,t,a)=>a.indexOf(e)===t);for(let a=1;a<=t.length;a++)re(e,t[a-1],"#location-"+a)}else if(r.length>1||p.length>1)u.push(t.header),u=u.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),a=u.map(t=>o.a.createElement("li",{key:t},o.a.createElement("button",null,o.a.createElement("span",{"data-date-src":t,onClick:t=>{let a=t.target.getAttribute("data-date-src");C=ne(a),S=e.filter(e=>e.header===a),oe(S[0].options[0].options,"Apply now for "+ne(S[0].header)+" entry:"),c(!1)}},ne(t))))),w(N);else{m.push(t.header),m=m.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const a=[];m.map(t=>{let n=e.filter(e=>e.header===t);i={text:ne(t),link:n[0].options[0].options[0].options.apply},a.push(i)}),n=o.a.createElement(l,{data:a}),w()}else oe(e[0].options[0].options,"Apply for "+ne(e[0].header)+" entry:")})})}),n&&U(n),a&&L(a)}function le(e){ae(),h(),y(),x=null,S=null;let a,n,r,s,p=[],i=[],u=[];s=O?o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__previous"},o.a.createElement("button",{className:"how-to-apply--pgt--js__modal__progress__wrapper",onClick:()=>{pe(t)}},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-check icon","aria-label":"Back to choose qualification"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))):null,_(s),e.map(t=>{j("Choose the route you wish to apply for:");let s=t.options;s.map(_=>{let m=_.options;m.map(_=>{let f=_.options;f.map(()=>{if(m.map(e=>{u.push(e.header)}),u=u.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),e.length>1)if(k=o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Route"))),d(k),h(),y(),s.length>1||u.length>1||f.length>1)p.push(t.header),p=p.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),n=p.map(t=>o.a.createElement("li",{key:t},o.a.createElement("button",null,o.a.createElement("span",{onClick:t=>{k=t.target.textContent,x=e.filter(e=>e.header===k),se(x[0].options),c(!1)}},t)))),w(N);else{i.push(t.header),i=i.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const n=[];i.map(t=>{let o=e.filter(e=>e.header===t);a={text:t,link:o[0].options[0].options[0].options[0].options.apply},n.push(a)}),r=o.a.createElement(l,{data:n}),w()}else se(e[0].options)})})})}),n&&q(n),r&&F(r)}function pe(e){c(!0),j("Choose the qualification you wish to apply for:"),ae(),d(),h(),y(),O=null,x=null,S=null;let a,n,r=[],s=[],p=[];e.length>1&&(v=o.a.createElement("li",{className:"how-to-apply--pgt--js__modal__progress__current"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__wrapper"},o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__circle"},o.a.createElement("span",{className:"fas fa-circle icon"})),o.a.createElement("span",{className:"how-to-apply--pgt--js__modal__progress__text"},"Qualification"))),_(v)),e.length>1?e.map(t=>{let i=t.options;i.map(u=>{let _=u.options;_.map(u=>{let m=u.options;m.map(u=>{let d=u.options;d.map(()=>{if(m.map(e=>{p.push(e.header)}),p=p.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),e.length>1)if(i.length>1||_.length>1||p.length>1||d.length>1)r.push(t.header),r=r.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]),a=r.map(t=>o.a.createElement("li",{key:t},o.a.createElement("button",null,o.a.createElement("span",{onClick:t=>{v=t.target.innerText,O=e.filter(e=>e.header===v),le(O[0].options),c(!1)}},t)))),w(N);else{s.push(t.header),s=s.reduce((function(e,t){return-1===e.indexOf(t)&&e.push(t),e}),[]);const a=[];s.map(t=>{let n=e.filter(e=>e.header===t);const o={text:t,link:n[0].options[0].options[0].options[0].options[0].options.apply};a.push(o)}),n=o.a.createElement(l,{data:a})}})})})})}):le(t[0].options),a&&T(a),n&&D(n)}const ce=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("p",null,b),$||R||W||V||G||X?o.a.createElement(o.a.Fragment,null,$,o.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},R,W),V,o.a.createElement("ul",{className:"how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"},G,X)):o.a.createElement("ul",{className:"how-to-apply--pgt--js__options"},M,A,I,B,J,H,ee))),ie=e.element.dataset.otheryear&&e.element.dataset.otherurl&&o.a.createElement("p",{className:"how-to-apply--pgt--js__modal__alternative"},o.a.createElement("a",{href:e.element.dataset.otherurl},e.element.dataset.otheryear," entry is also available.")),[ue,_e]=Object(n.useState)({});let me=null,de=null;const fe=()=>me,he=()=>de;return Object(n.useEffect)(()=>{ue.activate||_e(u()(he(),{initialFocus:he().querySelector(".how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a"),onDeactivate:()=>r(!1),clickOutsideDeactivates:!0})),a?(ue.activate&&ue.activate(),Object(s.a)(fe())):(ue.deactivate&&ue.deactivate(),Object(s.b)(fe()))},[a]),o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"cta-block"},o.a.createElement("li",{className:"cta-block__cta"},o.a.createElement("button",{className:"primary-cta-arrow--bright",onClick:()=>{r(!0),c(!0),ae(),pe(t)}},o.a.createElement("span",null,"Apply now")))),o.a.createElement("div",{className:"how-to-apply--pgt--js__modal","data-open":a,ref:e=>me=e},o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content",ref:e=>de=e},o.a.createElement("button",{className:"how-to-apply--pgt--js__close",onClick:()=>{ue.deactivate&&ue.deactivate(),Object(s.b)(fe()),r(!1)}},o.a.createElement("span",{className:"fas fa-times icon","aria-label":"Close"})),p?null:o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__reset"},o.a.createElement("button",{onClick:()=>{c(!0),pe(t)}},o.a.createElement("span",{className:"fas fa-redo"})," ",o.a.createElement("span",null,"Start again"))),o.a.createElement("ol",{className:"how-to-apply--pgt--js__modal__progress"},i,m,f,g,E),o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},o.a.createElement("h2",null,"Start in ",e.element.dataset.year)),ce,o.a.createElement("div",{className:"how-to-apply--pgt--js__modal__content-wrapper"},ie))))}_.propTypes={config:c.a.array,element:c.a.object};var m=_,d=a(2),f=a(146),h=a.n(f);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".how-to-apply--pgt--js");e&&Array.from(e).forEach(e=>{(function(e){const t={timeout:3e4,url:e};return Object(d.b)(t)})(e.dataset.config).then(t=>{Object(r.render)(o.a.createElement(m,{config:h()(t),element:e}),e)})})}})}});