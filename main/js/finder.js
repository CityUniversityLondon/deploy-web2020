!function(e){function t(t){for(var n,r,s=t[0],u=t[1],o=t[2],f=0,m=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(i&&i(t);m.length;)m.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a,r=l[t],s=!0,u=1;u<r.length;u++)a=r[u],0!==c[a]&&(s=!1);s&&(l.splice(t--,1),e=n(n.s=r[0]))}return e}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={},c={2:0},l=[];n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var i=u;l.push([236,0,1]),a()}({155:function(){},156:function(){},2:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){return!("true"!==e)}function c(e,t,a){var n=a?C(t):F(t);e.className=e.className.split(/\s+/).filter((function(e){return n(e)})).join(" ")}function l(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function u(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function o(e){var t={};return e.substr(1).split("&").forEach((function(e){var a=n(e.split("="),2),r=a[0],c=a[1];t[r]=c})),t}function i(e){if(0<Object.keys(e).length){var t="?";for(var a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function f(e,t,a,n,r,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:c})}function m(e,t){t.forEach((function(t){return e.appendChild(t)}))}function d(e){return e.replace(/\D/g,"")}function p(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;if(window.innerWidth<e)return!0}function _(e){for(var t=[],a=e.length>>>0;a--;)t[a]=e[a];return t}function y(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var n=e.indexOf("Edge/");return!!(0<n)&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}function b(e,t,a,n,r,c,l,s,u){var o=document.createElement(e);return t&&o.appendChild(document.createTextNode(t)),r&&o.classList.add(r),c&&o.classList.add(c),l&&o.classList.add(l),s&&o.classList.add(s),u&&o.classList.add(u),a&&o.setAttribute("aria-label",a),n&&o.setAttribute("disabled",!0),o}a.d(t,"m",(function(){return r})),a.d(t,"k",(function(){return c})),a.d(t,"j",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"n",(function(){return u})),a.d(t,"i",(function(){return o})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return m})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"l",(function(){return _})),a.d(t,"c",(function(){return y})),a.d(t,"b",(function(){return b}));var g=a(14),E=(a.n(g),a(24)),h=(a.n(E),a(23)),v=(a.n(h),a(20)),q=(a.n(v),a(10)),j=(a.n(q),a(28)),k=(a.n(j),a(11)),N=(a.n(k),a(44)),w=(a.n(N),a(18)),S=(a.n(w),a(6)),O=(a.n(S),a(31)),D=(a.n(O),a(45)),x=(a.n(D),a(8)),A=(a.n(x),a(15)),C=(a.n(A),function(e){return function(t){return 0>t.indexOf(e)}}),F=function(e){return function(t){return t!==e}}},236:function(e,t,a){e.exports=a(237)},237:function(e,t,a){"use strict";a.r(t);var n=a(17),r=(a.n(n),a(6)),c=(a.n(r),a(8)),l=(a.n(c),a(0)),s=a.n(l),u=a(171),o=(a.n(u),a(66)),i=a(33);document.addEventListener("DOMContentLoaded",(function(){Array.from(document.querySelectorAll(".wrapper--finder")).forEach((function(e){Object(i.b)(e.dataset.config).then((function(t){Object(u.render)(s.a.createElement(o.a,{config:t}),e)}))}))}))},33:function(e,t,a){"use strict";function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?n(t,!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}));return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){return g()(e).then((function(e){if(N===e.status)return e.data;throw"Bad response: ".concat(e.status)})).catch((function(e){g.a.isCancel(e)||Object(v.d)("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)}))}function s(e,t,a,n,c,s,u,o){var i={};t.forEach((function(e){i["meta_".concat(e.meta,"_orsand")]=e.value}));var f={};Object.keys(o).forEach((function(e){return f["meta_".concat(e,"_orsand")]=o[e]}));var m=g.a.CancelToken.source();return[l({baseURL:q,cancelToken:m.token,httpsAgent:new h.a.Agent({keepAlive:!0}),url:j,timeout:w,params:r({},i,{},f,{collection:e,num_ranks:u,query:a,sort:n?"".concat("desc"===c?"d":"").concat(n):null,start_rank:s})}),m]}function u(e,t){var a=g.a.CancelToken.source();return[l({baseURL:q,cancelToken:a.token,url:k,timeout:w,params:{collection:e,partial_query:t}}),a]}function o(e){return l({timeout:w,url:e})}a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return o}));var i=a(14),f=(a.n(i),a(9)),m=(a.n(f),a(23)),d=(a.n(m),a(138)),p=(a.n(d),a(139)),_=(a.n(p),a(28)),y=(a.n(_),a(8)),b=(a.n(y),a(34)),g=a.n(b),E=a(87),h=a.n(E),v=a(2),q="https://web2020.city.ac.uk/web-services",j="/funnelback-find",k="/funnelback-suggest",N=200,w=3e4},66:function(e,t,a){"use strict";function n(e){return x.a.createElement("button",{className:"finder__clear",type:"button",onClick:function(){e.clear()}},x.a.createElement("span",{className:"far fa-fw fa-times icon","aria-label":"Clear input"}))}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e){function t(){b.focus()}var a=c(Object(D.useState)(e.query.query),2),n=a[0],l=a[1],s=c(Object(D.useState)([]),2),u=s[0],o=s[1],i=c(Object(D.useState)({cancel:function(){}}),2),f=i[0],m=i[1],d=c(Object(D.useState)("finder--"+e.query.collection+"--"+Math.random().toString(16).slice(-4)),1)[0],p=c(Object(D.useState)(!1),2),_=p[0],y=p[1];Object(D.useEffect)((function(){l(e.query.query)}),[e.updating]);var b=null,g=function(){f.cancel(),l(""),o([]),t();var a=e.query;a.query="",a.sortBy=e.config.sort,e.update.query(a),e.update.results(!e.update.updateState)},E=function(t){f.cancel();var a=e.query;a.query=t,e.update.query(a),e.update.results(!e.update.updateState)},h=n&&x.a.createElement(T,{clear:function(){g()}}),v=u&&0<u.length&&x.a.createElement("ul",{className:_?"finder__query__suggestions show":"finder__query__suggestions hide"},r(new Set(u)).slice(0,R).map((function(e){return x.a.createElement("li",{key:e},x.a.createElement("button",{type:"button",onBlur:function(){return y(!1)},onFocus:function(){return y(!0)},onMouseDown:function(){y(!0),l(e),o([]),t(),E(e)},onClick:function(){y(!0),l(e),o([]),t(),E(e)},onKeyDown:function(e){switch(e.keyCode){case M:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),o([]);break;case L:e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus()):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus());break;case P:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus())}}},function(e,t){return x.a.createElement(x.a.Fragment,null,x.a.createElement("span",null,x.a.createElement("span",{className:"sr-only"},e),x.a.createElement("span",{"aria-hidden":"true"},x.a.createElement("span",{className:"finder__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,n)))}))),q=x.a.createElement("div",{className:"finder__query__input"},x.a.createElement("div",{className:"finder__query__icon--wrapper"},x.a.createElement("span",{className:"finder__icon fal fa-search"})),x.a.createElement("label",{className:"sr-only",htmlFor:d},"Search ".concat(e.config.summariseAs.plural)),x.a.createElement("input",{autoComplete:"off",id:d,name:"query",placeholder:e.config.placeholder,ref:function(e){b=e},type:"text",value:n,onKeyDown:function(e){switch(e.keyCode){case M:g();break;case P:u&&0<u.length&&(e.preventDefault(),e.target.parentNode.querySelector(".finder__query__suggestions button").focus())}},onFocus:function(){return y(!0)},onBlur:function(){return y(!1)},onChange:function(t){if(o([]),l(t.target.value),f.cancel(),t.target.value){var a=c(Object(F.c)(e.query.collection,t.target.value),2),n=a[0],r=a[1];m({cancel:function(){r.cancel()}}),n.then((function(e){return o(e)})).catch((function(){return o([])}))}else o([])}}),v,h);return x.a.createElement("fieldset",{className:"finder__query"},x.a.createElement("div",null,q,x.a.createElement("button",{type:"submit",className:"finder__query__submit",onClick:function(){return function(){f.cancel(),o([]);var t=e.query;t.query=n||"",t.startRank=1,t.sortBy=n?null:e.config.sort,e.update.query(t),e.update.results(!e.update.updateState)}()}},x.a.createElement("span",{className:"fal fa-search finder__query__submit__icon","aria-hidden":"true"})," ",x.a.createElement("span",{className:"finder__query__submit__text"},"Find"))))}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){var t=u(Object(D.useState)(void 0!==e.query.facets[e.facet.meta]||!0!==e.mobile&&e.facet.defaultOpen),2),a=t[0],n=t[1],r=e.query.facets[e.facet.meta]||"",c=e.facet.values.reduce((function(e,t){return[].concat(s(e),[t.data.replace(/^"/,"").replace(/"$/,"")])}),[]),l=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values?e.responseFacet[0].categories[0].values.reduce((function(e,t){return[].concat(s(e),[t.data.toLowerCase()])}),[]):[],o=c.filter((function(e){return 0>l.indexOf(e)})).length,i=function(t){var a=e.query,n=t.target.value;n?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)},f=Math.random().toString(16).slice(-4);return x.a.createElement("fieldset",{className:"finder__filter finder__radio"},x.a.createElement("legend",{"data-open":a?"true":"false"},x.a.createElement("button",{type:"button","aria-expanded":a?"true":"false",onClick:function(){return n(!a)}},x.a.createElement("span",null,x.a.createElement("span",{className:"underline-transition__title"},e.facet.name)," ",x.a.createElement("span",{className:a?"fal fa-minus icon":"fal fa-plus icon","aria-label":a?"Close filter":"Open filter"})))),x.a.createElement("ul",{role:"presentation"},x.a.createElement("li",{key:"all"},x.a.createElement("input",{checked:""===r,id:"meta".concat(e.facet.meta,"all"),name:"meta_".concat(e.facet.meta,"_orsand--").concat(f),type:"radio",value:"",onChange:function(e){return i(e)}}),x.a.createElement("label",{htmlFor:"meta".concat(e.facet.meta,"all")},e.facet.noSelection,0<o&&" (".concat(o," hidden)"))),e.facet.values.map((function(t,a){var n=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter((function(e){return e.data.toLowerCase()===t.data.replace(/^"/,"").replace(/"$/,"")}));return x.a.createElement("li",{key:a},x.a.createElement("input",{checked:r===t.data,id:"meta".concat(e.facet.meta).concat(a),name:"meta_".concat(e.facet.meta,"_orsand--").concat(f),type:"radio",value:t.data,onChange:function(e){return i(e)}}),x.a.createElement("label",{htmlFor:"meta".concat(e.facet.meta).concat(a)},t.label," (",n&&n[0]?n[0].count:0,")"))}))))}function i(){return null}function f(e){var t=Math.random().toString(16).slice(-4),a=function(t){var a=e.query,n=t.target.value;n?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,"G"!==e.facet.meta||n||delete a.facets.rSub,e.update.query(a),e.update.results(!e.update.updateState)};return x.a.createElement("div",{className:"finder__select finder__selectbox"},x.a.createElement("label",{className:"finder__select__overline",htmlFor:"meta_".concat(e.facet.meta,"_orsand--").concat(t)},e.facet.name),x.a.createElement("select",{name:e.facet.name,id:"meta_".concat(e.facet.meta,"_orsand--").concat(t),value:e.query.facets[e.facet.meta]?e.query.facets[e.facet.meta]:"",onChange:function(e){return a(e)}},x.a.createElement("option",{value:""},e.facet.noSelection),e.responseFacet[0]&&e.responseFacet[0].categories[0]?e.responseFacet[0].categories[0].values.map((function(t){var a='"'.concat(t.data,'"');return x.a.createElement("option",{key:t.data,value:a},"rSub"===e.facet.meta?t.label.replace(e.query.facets.G+"_",""):t.label)})):null))}function m(e){return Object.keys(e.query.facets).length?x.a.createElement("button",{className:"finder__clear",type:"reset",value:"Reset",onClick:function(){e.clear()}},x.a.createElement("span",{className:"far fa-fw fa-times icon","aria-label":"Clear input"}),"Reset"):null}function d(e){var t=Object.keys(e.query.facets);return 0<t.length?x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"finder__applied__filters__heading"},x.a.createElement("h2",null,"Applied filters"),x.a.createElement(G,{clear:e.clear,query:e.query})),x.a.createElement("div",{className:"finder__appliedfilters__wrap"},x.a.createElement("ul",{className:"finder__appliedfilters"},t.map((function(t){var a=e.config.facetLabels.filter((function(e){return e.meta===t}))[0],n=e.query.facets[t];return x.a.createElement("li",{key:t},x.a.createElement("button",{type:"button",onClick:function(){return function(t){var a=e.query;delete a.facets[t],"G"===t&&e.query.facets.rSub&&delete a.facets.rSub,e.update.query(a),e.update.results(!e.update.updateState)}(t)}},x.a.createElement("span",null,x.a.createElement("span",{className:"fal fa-times icon","aria-label":"Remove filter"})," ",x.a.createElement("span",null,a.name,": ","rSub"===a.meta?n.replace(e.query.facets.G+"_",""):n))))}))))):null}function p(e){var t=Math.random().toString(16).slice(-4),a=function(t){var a=e.query,n=t.target.value;t.target.checked?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)},n="".concat(e.facet.name,"-").concat(t);return x.a.createElement("fieldset",{className:"finder__filter finder__togglebox"},x.a.createElement("div",{className:"finder__toggle"},x.a.createElement("label",{htmlFor:n},e.facet.values[0].label,x.a.createElement("input",{type:"checkbox",id:n,name:e.facet.name,value:e.facet.values[0].data,onChange:function(e){return a(e)},checked:!!e.query.facets[e.facet.meta]}),x.a.createElement("span",{className:"toggle round ".concat(e.query.facets[e.facet.meta]?"toggleOpen":"toggleClose")}))))}function _(e){return x.a.createElement("div",{className:"finder__filters"},x.a.createElement("fieldset",null,x.a.createElement(H,{config:e.config,query:e.query,update:e.update,clear:e.clear})),x.a.createElement("fieldset",{className:"finder__filter"},x.a.createElement("div",{className:"finder__filters__heading"},x.a.createElement("h2",null,"Filter ".concat(e.config.summariseAs.plural)),x.a.createElement("div",{className:"finder__filters__heading__btn-icon"},x.a.createElement(G,{clear:e.clear,query:e.query}),x.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"}))),e.config.facetLabels.map((function(t){if(!function(e,t){var a=Object.keys(t);return!(e.dependency&&!(0<=a.indexOf(e.meta))&&!(0<=a.indexOf(e.dependency)&&""!==t[e.dependency]))}(t,e.query.facets))return null;switch(t.type){case"radio":return x.a.createElement(I,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter((function(e){return e.name===t.funnelbackName})):[],update:e.update,mobile:!!e.mobile});case"checkbox":return x.a.createElement(U,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter((function(e){return e.name===t.funnelbackName})):[],update:e.update});case"selectbox":return x.a.createElement(K,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter((function(e){return e.name===t.funnelbackName})):[],update:e.update});case"toggle":return x.a.createElement(J,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter((function(e){return e.name===t.funnelbackName})):[],update:e.update})}}))))}function y(e){var t,a=1===e.totalMatching?e.summariseAs.singular:e.summariseAs.plural;return 0==e.totalMatching&&(t=x.a.createElement("div",null,x.a.createElement("p",null,x.a.createElement("strong",null,"Your search"),' "',e.query,"“ did not match any courses."),x.a.createElement("p",null,"Suggestions:"),x.a.createElement("ul",null,x.a.createElement("li",null,"Make sure that all words are spelled correctly"),x.a.createElement("li",null,"Try different keywords"),x.a.createElement("li",null,"Try more general keywords"),x.a.createElement("li",null,"Try fewer keywords"),x.a.createElement("li",null,"Try fewer filters"),x.a.createElement("li",null,x.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault,e.clear()}},"Reset filters")),x.a.createElement("li",null,x.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault;var a=e.queryF;a.query="",a.sortBy=e.config.sort,e.update.query(a),e.update.results(!e.update.updateState)}},"Reset search"))))),x.a.createElement("div",null,x.a.createElement("h2",{"aria-live":"polite",className:"finder__results__summary__heading-wrap"},e.totalMatching>e.numRanks&&"".concat(e.currStart,"–").concat(e.currEnd," of "),e.totalMatching," ",e.query&&"matching ",a,e.query&&" for “".concat(e.query,"”")),t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e){var t=b(Object(D.useState)(!1),2),a=t[0],n=t[1],r=b(Object(D.useState)({}),2),c=r[0],l=r[1],s=null,u=function(){return s};Object(D.useEffect)((function(){c.activate||l(Y()(u(),{onDeactivate:function(){return n(!1)},clickOutsideDeactivates:!0})),a?(c.activate&&c.activate(),Object(z.disableBodyScroll)(u())):(c.deactivate&&c.deactivate(),Object(z.enableBodyScroll)(u()))}),[a]);var o=e.response&&e.response.summary&&e.response.summary.totalMatching,i=1===o?"Show 1 results":o?"Show ".concat(o," results"):"Close",f=1<=o?x.a.createElement($,{currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,query:e.response.query,numRanks:e.response.summary.numRanks,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching}):x.a.createElement("h2",{className:"finder__results__summary__heading-wrap"},"No results");return x.a.createElement("div",{className:"finder__mobilefilters","data-open":a},f,x.a.createElement("button",{type:"button",className:"finder__mobilefilters__toggle","aria-haspopup":!0,"aria-expanded":a,onClick:function(){return n(!a)},"data-filters-applied":0!==Object.keys(e.query.facets).length},x.a.createElement("span",null,x.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",x.a.createElement("span",{dangerouslySetInnerHTML:{__html:0<Object.keys(e.query.facets).length?' Filters <span class="finder__mobilefilters__toggle__filterNo">('.concat(Object.keys(e.query.facets).length,")</span>"):"Filter"}}))),x.a.createElement("div",{className:"finder__mobilefilters__filters",ref:function(e){s=e}},x.a.createElement("div",{className:"finder__mobilefilters__filters__content"},x.a.createElement(W,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear,mobile:!0}),x.a.createElement("button",{type:"button",className:"finder__mobilefilters__apply","aria-expanded":a,onClick:function(){return n(!a)},disabled:e.updating},0===Object.keys(e.query.facets).length?null:x.a.createElement("span",{className:"far fa-chevron-left"}),x.a.createElement("span",{"aria-live":"polite"},e.updating?x.a.createElement(x.a.Fragment,null,x.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Updating results…")):x.a.createElement(x.a.Fragment,null,x.a.createElement("span",null,0===Object.keys(e.query.facets).length?"Close":i)))))))}function E(e){var t=0<=["Undergraduate","Foundation","CPD"].indexOf(e.details.metaData.L)&&e.details.metaData.N&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fal fa-fw fa-graduation-cap icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Course code:")," ",x.a.createElement("span",null,e.details.metaData.N)),a=e.details.metaData.M&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fal fa-fw fa-award icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Award:")," ",x.a.createElement("span",null,e.details.metaData.M)),n=e.details.metaData.D&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fal fa-fw fa-clock icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Duration:")," ",x.a.createElement("span",null,e.details.metaData.D)),r=e.details.metaData.metd&&e.query.facets.metd&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fas fa-book-reader icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Method of study:")," ",x.a.createElement("span",null,e.details.metaData.metd)),c=e.details.metaData.loc&&e.query.facets.loc&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fas fa-map-marker-alt icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Location:")," ",x.a.createElement("span",null,e.details.metaData.loc)),l=e.details.metaData.E&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"far fa-building icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"School:")," ",x.a.createElement("span",null,e.details.metaData.E)),s="yes"===e.details.metaData.K&&e.showClearing&&x.a.createElement("div",{className:"clearing_label"},x.a.createElement("p",null,"Available in clearing"));return x.a.createElement("li",{className:"finder__results__card finder__results__course"},x.a.createElement("a",{href:e.details.clickTrackingUrl},s,x.a.createElement("div",{className:"finder__results__card__details"},x.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.query.query?X(e.details.title,e.query.query):e.details.title),x.a.createElement("p",{className:"finder__results__card__description"},e.query.query?X(e.details.metaData.L.replace(/_/g," "),e.query.query):e.details.metaData.L.replace(/_/g," ")),x.a.createElement("p",null,e.query.query?X(e.details.metaData.c,e.query.query):e.details.metaData.c),l,a,n,t,r,c)))}function h(e){var t=(e.details.metaData.E||e.details.metaData.D)&&x.a.createElement("p",{className:"finder__results__card__tag"},x.a.createElement("span",{className:"fal fa-fw fa-university icon","aria-hidden":"true"})," ",e.details.metaData.E&&e.details.metaData.E,e.details.metaData.E&&e.details.metaData.D&&", ",e.details.metaData.D&&e.details.metaData.D),a=e.details.metaData.K&&x.a.createElement("div",{className:"thumbnail__image-container"},x.a.createElement("img",{src:e.details.metaData.K,alt:""}));return x.a.createElement("li",{className:"finder__results__card finder__results__profile"},x.a.createElement("a",{href:"/fb"+e.details.clickTrackingUrl},a,x.a.createElement("div",{className:"finder__results__card__details"},x.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},x.a.createElement("span",null,e.details.title)),x.a.createElement("p",{className:"finder__results__card__description"},e.details.metaData.J),t)))}function v(e){switch(e.type){case"course":return x.a.createElement(Z,{details:e.details,query:e.query,showClearing:e.showClearing});case"profile":return x.a.createElement(ee,{details:e.details})}}function q(e){return x.a.createElement("li",{className:"finder__results__card finder__results__bestbet"},x.a.createElement("a",{href:"/fb"+e.details.clickTrackingUrl},x.a.createElement("div",{className:"finder__results__card__details"},x.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.details.title),x.a.createElement("p",{className:"finder__results__card__description"},e.details.description))))}function j(e){var t=e.text.split(/\|/)[0].trim();return x.a.createElement("p",null,"Did you mean “",x.a.createElement("button",{type:"button",className:"finder__didyoumean__button",onClick:function(){var a=e.query;a.query=t,a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)}},t),"”?")}function k(e){var t=Math.ceil,a=t(e.totalMatching/e.numRanks),n=t(e.currStart/e.numRanks),r=[],c=function(t){var a=1+(t-1)*e.numRanks,n=e.query;n.startRank=a,e.update.query(n),e.update.results(!e.update.updateState)};r.push(x.a.createElement("button",{className:"pagination__controls__button--prev",key:"prev",type:"button",disabled:1===n,onClick:function(){c(n-1)}},x.a.createElement("span",null,"Previous page")));for(var l=function(e){var t;switch(e-a){case 0:t="pagination__controls__element pagination__controls__button pagination__controls__button--last";break;case-1:t="pagination__controls__element pagination__controls__button pagination__controls__button--penultimate";break;default:t="pagination__controls__element pagination__controls__button"}r.push(x.a.createElement("button",{"aria-current":e===n?"page":null,"aria-expanded":e===n,"aria-label":"Open page ".concat(e),className:t,"data-page":e,"data-proximity":Math.abs(e-n),disabled:e===n,key:e,type:"button",onClick:function(){c(e)}},x.a.createElement("span",null,e))),1===e?r.push(x.a.createElement("span",{key:"firstEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"},x.a.createElement("span",null,"…"))):e==a-1&&r.push(x.a.createElement("span",{key:"lastEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"},x.a.createElement("span",null,"…")))},s=1;s<=a;s++)l(s);return r.push(x.a.createElement("button",{className:"pagination__controls__button--next",key:"next",type:"button",disabled:n===a,onClick:function(){c(n+1)}},x.a.createElement("span",null,"Next page"))),x.a.createElement("div",{className:"pagination__wrapper"},x.a.createElement("nav",{className:"pagination__controls","data-pagecount":a},r))}function N(e){var t=x.a.createElement("p",{className:"finder__results__updating","aria-live":"polite"},x.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",x.a.createElement("span",null,"Updating results…"));if(e.response){var a=e.response.spell&&e.response.spell.text&&0===e.response.summary.totalMatching&&x.a.createElement(ne,{query:e.query,text:e.response.spell.text,update:e.update}),n=e.response.summary.totalMatching>e.response.summary.numRanks&&x.a.createElement(re,{currStart:e.response.summary.currStart,numRanks:e.response.summary.numRanks,query:e.query,totalMatching:e.response.summary.totalMatching,update:e.update}),r=e.updating?x.a.createElement(x.a.Fragment,null,t):x.a.createElement(x.a.Fragment,null,x.a.createElement($,{currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,query:e.response.query,numRanks:e.response.summary.numRanks,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching,clear:e.clear,update:e.update,config:e.config,queryF:e.query}),a,x.a.createElement("ol",{start:e.response.summary.currStart,className:"finder__results__list"},e.response.bestBets.map((function(e){return x.a.createElement(ae,{details:e,key:e.docNum})})),e.response.results.map((function(t){return x.a.createElement(te,{bestBet:!1,details:t,key:t.docNum,type:e.type,query:e.query,showClearing:e.config.showClearing})}))),n);return x.a.createElement("div",{className:"finder__results"},r)}return x.a.createElement("div",{className:"finder__results"},t)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e,t){return e.map((function(e){var a={};return t.get("meta_".concat(e.meta,"_orsand"))&&(a[e.meta]=t.get("meta_".concat(e.meta,"_orsand"))),a})).reduce((function(e,t){return Object.assign(e,t)}))}function O(e){var t=new URLSearchParams(window.location.search),a={collection:e.config.collection,fixedFacets:e.config.fixedFacets,query:t.get("query")||"",sortBy:t.get("query")?null:t.get("sort")||e.config.sort,sortDirection:t.get("sortdirection")||e.config.sortDirection,startRank:t.get("start_rank")||1,numRanks:t.get("num_ranks")||e.config.numRanks,facets:S(e.config.facetLabels,t)},n={bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}},r=w(Object(D.useState)(a),2),c=r[0],l=r[1],s=w(Object(D.useState)(n),2),u=s[0],o=s[1],i=w(Object(D.useState)(!0),2),f=i[0],m=i[1],d=w(Object(D.useState)({cancel:function(){}}),2),p=d[0],_=d[1],y=w(Object(D.useState)(!1),2),b=y[0],g=y[1];Object(D.useEffect)((function(){(function(e,t,a,n){var r=new URLSearchParams(window.location.search);""===e?r.delete("query"):r.set("query",e),1===t?r.delete("start_rank"):r.set("start_rank",t),n.forEach((function(e){a[e.meta]?r.set("meta_".concat(e.meta,"_orsand"),a[e.meta]):r.delete("meta_".concat(e.meta,"_orsand"))}));var c=r.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(c).concat(r.toString()))})(c.query,c.startRank,c.facets,e.config.facetLabels),m(!0),p.cancel();var t=w(Object(F.a)(c.collection,c.fixedFacets,c.query,c.sortBy,c.sortDirection,c.startRank,c.numRanks,c.facets),2),a=t[0],r=t[1];_({cancel:function(){r.cancel()}}),a.then((function(e){o(e),m(!1)})).catch((function(){o(n),m(!1)}))}),[b]);var E={query:function(e){return l(e)},results:function(e){return g(e)},updateState:b},h=function(){var e=Object.assign({},c);e.facets={},l(e),g(!b)};return x.a.createElement("form",{className:0<e.config.facetLabels.length?"finder":"finder finder--nofilters",onSubmit:function(e){e.preventDefault()}},x.a.createElement(B,{config:e.config,query:c,update:E,updating:f}),0<e.config.facetLabels.length&&x.a.createElement(x.a.Fragment,null,x.a.createElement(Q,{config:e.config,query:c,response:u,update:E,updating:f,summariseAs:e.config.summariseAs,clear:h}),x.a.createElement(W,{config:e.config,query:c,response:u,update:E,clear:h})),x.a.createElement(ce,{query:c,response:u,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:E,updating:f,clear:h,config:e.config}))}a(14),a(24),a(9),a(10),a(21),a(50),a(133),a(11),a(18),a(6),a(60),a(8),a(15),a(135);var D=a(0),x=a.n(D),A=a(1),C=a.n(A),F=a(33);a(17),a(20),a(32),a(163);n.propTypes={clear:C.a.func};var T=n,R=5,M=27,L=38,P=40;l.propTypes={config:C.a.object,query:C.a.object,update:C.a.object,updating:C.a.bool};var B=l;a(23),a(28),a(31);o.propTypes={facet:C.a.object,query:C.a.object,responseFacet:C.a.arrayOf(C.a.object),update:C.a.object,mobile:C.a.bool};var I=o;i.propTypes={facet:C.a.object,query:C.a.object,responseFacet:C.a.arrayOf(C.a.object),update:C.a.object};var U=i;f.propTypes={facet:C.a.object,query:C.a.object,responseFacet:C.a.arrayOf(C.a.object),update:C.a.object};var K=f;m.propTypes={clear:C.a.func};var G=m;d.propTypes={config:C.a.object,query:C.a.object,update:C.a.object};var H=d;p.propTypes={facet:C.a.object,query:C.a.object,responseFacet:C.a.arrayOf(C.a.object),update:C.a.object};var J=p;_.propTypes={config:C.a.object,query:C.a.object,response:C.a.object,update:C.a.object,clear:C.a.func,mobile:C.a.bool};var W=_;y.propTypes={queryF:C.a.object,currEnd:C.a.number,currStart:C.a.number,query:C.a.string,numRanks:C.a.number,summariseAs:C.a.object,totalMatching:C.a.number,clear:C.a.func,update:C.a.object,config:C.a.object};var $=y,V=a(41),Y=a.n(V),z=a(52);g.propTypes={config:C.a.object,query:C.a.object,response:C.a.object,update:C.a.object,clear:C.a.func,updating:C.a.bool,summariseAs:C.a.object};var Q=g,X=(a(45),function(e,t){return t?e:x.a.createElement(x.a.Fragment,null,e.split(t).reduce((function(e,a,n){return n?e.concat(x.a.createElement("span",{className:"highlightText",key:t+a},t),a):[a]}),[]))});E.propTypes={details:C.a.object,query:C.a.object,showClearing:C.a.bool};var Z=E;h.propTypes={details:C.a.object};var ee=h;v.propTypes={details:C.a.object,query:C.a.object,type:C.a.string,showClearing:C.a.bool};var te=v;q.propTypes={details:C.a.object};var ae=q;a(82);j.propTypes={query:C.a.object,text:C.a.string,update:C.a.object};var ne=j;k.propTypes={currStart:C.a.number,query:C.a.object,numRanks:C.a.number,totalMatching:C.a.number,update:C.a.object};var re=k;N.propTypes={query:C.a.object,response:C.a.object,summariseAs:C.a.object,type:C.a.string,update:C.a.object,updating:C.a.bool,clear:C.a.func};var ce=N;O.propTypes={config:C.a.object},t.a=O}});