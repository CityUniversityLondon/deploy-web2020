!function(e){function t(t){for(var n,r,l=t[0],o=t[1],i=t[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a,r=s[t],l=!0,o=1;o<r.length;o++)a=r[o],0!==c[a]&&(l=!1);l&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={},c={2:0},s=[];n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;s.push([204,0,1]),a()}({114:function(){},115:function(){},15:function(e,t,a){"use strict";function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?n(t,!0).forEach(function(a){c(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))});return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e){return d()(e).then(e=>{if(E===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{d.a.isCancel(e)||Object(_.d)("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function l(e,t,a,n,c,l,o,i){const u={};t.forEach(e=>{u["meta_".concat(e.meta,"_orsand")]=e.value});const m={};Object.keys(i).forEach(e=>m["meta_".concat(e,"_orsand")]=i[e]);const p=d.a.CancelToken.source();return[s({baseURL:y,cancelToken:p.token,httpsAgent:new f.a.Agent({keepAlive:!0}),url:g,timeout:h,params:r({},u,{},m,{collection:e,num_ranks:o,query:a,sort:n?"".concat("desc"===c?"d":"").concat(n):null,start_rank:l})}),p]}function o(e,t){const a=d.a.CancelToken.source();return[s({baseURL:y,cancelToken:a.token,url:b,timeout:h,params:{collection:e,partial_query:t}}),a]}function i(e){return s({timeout:h,url:e})}a.d(t,"a",function(){return l}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return i});var u=a(3),m=(a.n(u),a(19)),d=a.n(m),p=a(58),f=a.n(p),_=a(2);const y="https://web2020.city.ac.uk/web-services",g="/funnelback-find",b="/funnelback-suggest",E=200,h=3e4},2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function r(e,t,a){const n=a?v(t):k(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function c(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function l(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function o(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function i(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function u(e,t,a,n,r,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:c})}function m(e,t){t.forEach(t=>e.appendChild(t))}function d(e){return e.replace(/\D/g,"")}function p(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;if(window.innerWidth<e)return!0}function f(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function _(){let e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}let a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function y(e,t,a,n,r,c,s,l,o){let i=document.createElement(e);return t&&i.appendChild(document.createTextNode(t)),r&&i.classList.add(r),c&&i.classList.add(c),s&&i.classList.add(s),l&&i.classList.add(l),o&&i.classList.add(o),a&&i.setAttribute("aria-label",a),n&&i.setAttribute("disabled",!0),i}a.d(t,"m",function(){return n}),a.d(t,"k",function(){return r}),a.d(t,"j",function(){return c}),a.d(t,"f",function(){return s}),a.d(t,"n",function(){return l}),a.d(t,"i",function(){return o}),a.d(t,"h",function(){return i}),a.d(t,"d",function(){return u}),a.d(t,"a",function(){return m}),a.d(t,"g",function(){return d}),a.d(t,"e",function(){return p}),a.d(t,"l",function(){return f}),a.d(t,"c",function(){return _}),a.d(t,"b",function(){return y});var g=a(4),b=(a.n(g),a(13)),E=(a.n(b),a(27)),h=(a.n(E),a(3)),q=(a.n(h),a(7));a.n(q);const v=e=>t=>0>t.indexOf(e),k=e=>t=>t!==e},204:function(e,t,a){e.exports=a(205)},205:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a.n(n),a(0)),c=a.n(r),s=a(127),l=(a.n(s),a(45)),o=a(15);document.addEventListener("DOMContentLoaded",()=>{Array.from(document.querySelectorAll(".wrapper--finder")).forEach(e=>{Object(o.b)(e.dataset.config).then(t=>{Object(s.render)(c.a.createElement(l.a,{config:t}),e)})})})},45:function(e,t,a){"use strict";function n(e){return N.a.createElement("button",{className:"finder__clear",type:"button",onClick:()=>{e.clear()}},N.a.createElement("span",{className:"far fa-fw fa-times icon","aria-label":"Clear input"}))}function r(e){function t(){m.focus()}const[a,n]=Object(k.useState)(e.query.query),[r,c]=Object(k.useState)([]),[s,l]=Object(k.useState)({cancel:()=>{}}),[o]=Object(k.useState)("finder--"+e.query.collection+"--"+Math.random().toString(16).slice(-4)),[i,u]=Object(k.useState)(!1);Object(k.useEffect)(()=>{n(e.query.query)},[e.updating]);let m=null;const d=()=>{s.cancel(),n(""),c([]),t();const a=e.query;a.query="",a.sortBy=e.config.sort,e.update.query(a),e.update.results(!e.update.updateState)},p=t=>{s.cancel();const a=e.query;a.query=t,e.update.query(a),e.update.results(!e.update.updateState)},f=a&&N.a.createElement(S,{clear:()=>{d()}}),_=r&&0<r.length&&N.a.createElement("ul",{className:i?"finder__query__suggestions show":"finder__query__suggestions hide"},[...new Set(r)].slice(0,D).map(e=>N.a.createElement("li",{key:e},N.a.createElement("button",{type:"button",onBlur:()=>u(!1),onFocus:()=>u(!0),onMouseDown:()=>{u(!0),n(e),c([]),t(),p(e)},onClick:()=>{u(!0),n(e),c([]),t(),p(e)},onKeyDown:e=>{switch(e.keyCode){case C:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),c([]);break;case x:e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus()):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus());break;case F:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus())}}},function(e,t){return N.a.createElement(N.a.Fragment,null,N.a.createElement("span",null,N.a.createElement("span",{className:"sr-only"},e),N.a.createElement("span",{"aria-hidden":"true"},N.a.createElement("span",{className:"finder__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,a))))),y=N.a.createElement("div",{className:"finder__query__input"},N.a.createElement("div",{className:"finder__query__icon--wrapper"},N.a.createElement("span",{className:"finder__icon fal fa-search"})),N.a.createElement("label",{className:"sr-only",htmlFor:o},"Search ".concat(e.config.summariseAs.plural)),N.a.createElement("input",{autoComplete:"off",id:o,name:"query",placeholder:e.config.placeholder,ref:e=>{m=e},type:"text",value:a,onKeyDown:e=>{switch(e.keyCode){case C:d();break;case F:r&&0<r.length&&(e.preventDefault(),e.target.parentNode.querySelector(".finder__query__suggestions button").focus())}},onFocus:()=>u(!0),onBlur:()=>u(!1),onChange:t=>{if(c([]),n(t.target.value),s.cancel(),t.target.value){const[a,n]=Object(O.c)(e.query.collection,t.target.value);l({cancel:()=>{n.cancel()}}),a.then(e=>c(e)).catch(()=>c([]))}else c([])}}),_,f);return N.a.createElement("fieldset",{className:"finder__query"},N.a.createElement("div",null,y,N.a.createElement("button",{type:"submit",className:"finder__query__submit",onClick:()=>(()=>{s.cancel(),c([]);const t=e.query;t.query=a||"",t.startRank=1,t.sortBy=a?null:e.config.sort,e.update.query(t),e.update.results(!e.update.updateState)})()},N.a.createElement("span",{className:"fal fa-search finder__query__submit__icon","aria-hidden":"true"})," ",N.a.createElement("span",{className:"finder__query__submit__text"},"Find"))))}function c(e){const[t,a]=Object(k.useState)(void 0!==e.query.facets[e.facet.meta]||!0!==e.mobile&&e.facet.defaultOpen),n=e.query.facets[e.facet.meta]||"",r=e.facet.values.reduce((e,t)=>[...e,t.data.replace(/^"/,"").replace(/"$/,"")],[]),c=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values?e.responseFacet[0].categories[0].values.reduce((e,t)=>[...e,t.data.toLowerCase()],[]):[],s=r.filter(e=>0>c.indexOf(e)).length,l=t=>{const a=e.query,n=t.target.value;n?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)},o=Math.random().toString(16).slice(-4);return N.a.createElement("fieldset",{className:"finder__filter finder__radio"},N.a.createElement("legend",{"data-open":t?"true":"false"},N.a.createElement("button",{type:"button","aria-expanded":t?"true":"false",onClick:()=>a(!t)},N.a.createElement("span",null,N.a.createElement("span",{className:"underline-transition__title"},e.facet.name)," ",N.a.createElement("span",{className:t?"fal fa-minus icon":"fal fa-plus icon","aria-label":t?"Close filter":"Open filter"})))),N.a.createElement("ul",{role:"presentation"},N.a.createElement("li",{key:"all"},N.a.createElement("input",{checked:""===n,id:"meta".concat(e.facet.meta,"all"),name:"meta_".concat(e.facet.meta,"_orsand--").concat(o),type:"radio",value:"",onChange:e=>l(e)}),N.a.createElement("label",{htmlFor:"meta".concat(e.facet.meta,"all")},e.facet.noSelection,0<s&&" (".concat(s," hidden)"))),e.facet.values.map((t,a)=>{const r=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(e=>e.data.toLowerCase()===t.data.replace(/^"/,"").replace(/"$/,""));return N.a.createElement("li",{key:a},N.a.createElement("input",{checked:n===t.data,id:"meta".concat(e.facet.meta).concat(a),name:"meta_".concat(e.facet.meta,"_orsand--").concat(o),type:"radio",value:t.data,onChange:e=>l(e)}),N.a.createElement("label",{htmlFor:"meta".concat(e.facet.meta).concat(a)},t.label," (",r&&r[0]?r[0].count:0,")"))})))}function s(){return null}function l(e){const t=Math.random().toString(16).slice(-4),a=t=>{const a=e.query,n=t.target.value;n?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,"G"!==e.facet.meta||n||delete a.facets.rSub,e.update.query(a),e.update.results(!e.update.updateState)};return N.a.createElement("fieldset",{className:"finder__filter finder__selectbox"},N.a.createElement("div",{className:"finder__select"},N.a.createElement("label",{className:"finder__select__overline",htmlFor:"meta_".concat(e.facet.meta,"_orsand--").concat(t)},e.facet.name),N.a.createElement("select",{name:e.facet.name,id:"meta_".concat(e.facet.meta,"_orsand--").concat(t),value:e.query.facets[e.facet.meta]?e.query.facets[e.facet.meta]:"",onChange:e=>a(e)},N.a.createElement("option",{value:""},e.facet.noSelection),e.facet.values.map((t,a)=>{const n=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(e=>e.data.toLowerCase()===t.data.replace(/^"/,"").replace(/"$/,""));return N.a.createElement("option",{key:a,value:t.data},t.label," (",n&&n[0]?n[0].count:0,")")}))))}function o(e){return Object.keys(e.query.facets).length?N.a.createElement("button",{className:"finder__clear",type:"reset",value:"Reset",onClick:()=>{e.clear()}},N.a.createElement("span",{className:"far fa-fw fa-times icon","aria-label":"Clear input"}),"Reset"):null}function i(e){const t=Object.keys(e.query.facets);return 0<t.length?N.a.createElement(N.a.Fragment,null,N.a.createElement("div",{className:"finder__applied__filters__heading"},N.a.createElement("h2",null,"Applied filters"),N.a.createElement(A,{clear:e.clear,query:e.query})),N.a.createElement("div",{className:"finder__appliedfilters__wrap"},N.a.createElement("ul",{className:"finder__appliedfilters"},t.map(t=>{const a=e.config.facetLabels.filter(e=>e.meta===t)[0],n=e.query.facets[t];return N.a.createElement("li",{key:t},N.a.createElement("button",{type:"button",onClick:()=>(t=>{const a=e.query;delete a.facets[t],"G"===t&&e.query.facets.rSub&&delete a.facets.rSub,e.update.query(a),e.update.results(!e.update.updateState)})(t)},N.a.createElement("span",null,N.a.createElement("span",{className:"fal fa-times icon","aria-label":"Remove filter"})," ",N.a.createElement("span",null,a.name,": ","rSub"===a.meta?n.replace(e.query.facets.G+"_",""):n))))})))):null}function u(e){const t=Math.random().toString(16).slice(-4),a=t=>{const a=e.query,n=t.target.value;t.target.checked?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)},n="".concat(e.facet.name,"-").concat(t);return N.a.createElement("fieldset",{className:"finder__filter finder__togglebox"},N.a.createElement("div",{className:"finder__toggle"},N.a.createElement("label",{htmlFor:n},e.facet.values[0].label,N.a.createElement("input",{type:"checkbox",id:n,name:e.facet.name,value:e.facet.values[0].data,onChange:e=>a(e),checked:!!e.query.facets[e.facet.meta]}),N.a.createElement("span",{className:"toggle round ".concat(e.query.facets[e.facet.meta]?"toggleOpen":"toggleClose")}))))}function m(e){return N.a.createElement("div",{className:"finder__filters"},N.a.createElement(P,{config:e.config,query:e.query,update:e.update,clear:e.clear}),N.a.createElement("div",{className:"finder__filters__heading"},N.a.createElement("h2",null,"Filter ".concat(e.config.summariseAs.plural)),N.a.createElement("div",{className:"finder__filters__heading__btn-icon"},N.a.createElement(A,{clear:e.clear,query:e.query}),N.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"}))),e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!(e.dependency&&!(0<=a.indexOf(e.meta))&&!(0<=a.indexOf(e.dependency)&&""!==t[e.dependency]))}(t,e.query.facets))return null;switch(t.type){case"radio":return N.a.createElement(M,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,mobile:!!e.mobile});case"checkbox":return N.a.createElement(T,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update});case"selectbox":return N.a.createElement(L,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update});case"toggle":return N.a.createElement(B,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update})}}))}function d(e){let t;const a=1===e.totalMatching?e.summariseAs.singular:e.summariseAs.plural;return 0==e.totalMatching&&(t=N.a.createElement("div",null,N.a.createElement("p",null,N.a.createElement("strong",null,"Your search")," “",e.query,"” did not match any courses."),N.a.createElement("p",null,"Suggestions:"),N.a.createElement("ul",null,N.a.createElement("li",null,"Make sure that all words are spelled correctly"),N.a.createElement("li",null,"Try different keywords"),N.a.createElement("li",null,"Try more general keywords"),N.a.createElement("li",null,"Try fewer keywords"),N.a.createElement("li",null,"Try fewer filters"),N.a.createElement("li",null,N.a.createElement("a",{href:"#",onClick:t=>{t.preventDefault,e.clear()}},"Reset filters")),N.a.createElement("li",null,N.a.createElement("a",{href:"#",onClick:t=>{t.preventDefault;const a=e.queryF;a.query="",a.sortBy=e.config.sort,e.update.query(a),e.update.results(!e.update.updateState)}},"Reset search"))))),N.a.createElement("div",null,N.a.createElement("h2",{"aria-live":"polite",className:"finder__results__summary__heading-wrap"},e.totalMatching>e.numRanks&&"".concat(e.currStart,"–").concat(e.currEnd," of "),e.totalMatching," ",e.query&&"matching ",a,e.query&&" for “".concat(e.query,"”")),t)}function p(e){const[t,a]=Object(k.useState)(!1),[n,r]=Object(k.useState)({});let c=null;const s=()=>c;Object(k.useEffect)(()=>{n.activate||r(H()(s(),{onDeactivate:()=>a(!1),clickOutsideDeactivates:!0})),t?(n.activate&&n.activate(),Object(J.disableBodyScroll)(s())):(n.deactivate&&n.deactivate(),Object(J.enableBodyScroll)(s()))},[t]);const l=e.response&&e.response.summary&&e.response.summary.totalMatching,o=1===l?"Show 1 results":l?"Show ".concat(l," results"):"Close",i=1<=l?N.a.createElement(I,{currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,query:e.response.query,numRanks:e.response.summary.numRanks,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching}):N.a.createElement("h2",{className:"finder__results__summary__heading-wrap"},"No results");return N.a.createElement("div",{className:"finder__mobilefilters","data-open":t},i,N.a.createElement("button",{type:"button",className:"finder__mobilefilters__toggle","aria-haspopup":!0,"aria-expanded":t,onClick:()=>a(!t),"data-filters-applied":0!==Object.keys(e.query.facets).length},N.a.createElement("span",null,N.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",N.a.createElement("span",{dangerouslySetInnerHTML:{__html:0<Object.keys(e.query.facets).length?' Filters <span class="finder__mobilefilters__toggle__filterNo">('.concat(Object.keys(e.query.facets).length,")</span>"):"Filter"}}))),N.a.createElement("div",{className:"finder__mobilefilters__filters",ref:e=>{c=e}},N.a.createElement("div",{className:"finder__mobilefilters__filters__content"},N.a.createElement(U,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear,mobile:!0}),N.a.createElement("button",{type:"button",className:"finder__mobilefilters__apply","aria-expanded":t,onClick:()=>a(!t),disabled:e.updating},0===Object.keys(e.query.facets).length?null:N.a.createElement("span",{className:"far fa-chevron-left"}),N.a.createElement("span",{"aria-live":"polite"},e.updating?N.a.createElement(N.a.Fragment,null,N.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Updating results…")):N.a.createElement(N.a.Fragment,null,N.a.createElement("span",null,0===Object.keys(e.query.facets).length?"Close":o)))))))}function f(e){const t=0<=["Undergraduate","Foundation","CPD"].indexOf(e.details.metaData.L)&&e.details.metaData.N&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-graduation-cap icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Course code:")," ",N.a.createElement("span",null,e.details.metaData.N)),a=e.details.metaData.M&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-award icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Award:")," ",N.a.createElement("span",null,e.details.metaData.M)),n=e.details.metaData.D&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-clock icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Duration:")," ",N.a.createElement("span",null,e.details.metaData.D)),r=e.details.metaData.metd&&e.query.facets.metd&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-book-reader icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Method of study:")," ",N.a.createElement("span",null,e.details.metaData.metd)),c=e.details.metaData.loc&&e.query.facets.loc&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-map-marker-alt icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Location:")," ",N.a.createElement("span",null,e.details.metaData.loc)),s=e.details.metaData.E&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"far fa-fw fa-building icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"School:")," ",N.a.createElement("span",null,e.details.metaData.E)),l="yes"===e.details.metaData.K&&e.showClearing&&N.a.createElement("div",{className:"clearing_label"},N.a.createElement("p",null,"Available in clearing"));return N.a.createElement("li",{className:"finder__results__card finder__results__course"},N.a.createElement("a",{href:e.details.clickTrackingUrl},l,N.a.createElement("div",{className:"finder__results__card__details"},N.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.query.query?$(e.details.title,e.query.query):e.details.title),N.a.createElement("p",{className:"finder__results__card__description"},e.query.query?$(e.details.metaData.L.replace(/_/g," "),e.query.query):e.details.metaData.L.replace(/_/g," ")),N.a.createElement("p",null,e.query.query?$(e.details.metaData.c,e.query.query):e.details.metaData.c),s,a,n,t,r,c)))}function _(e){const t=(e.details.metaData.E||e.details.metaData.D)&&N.a.createElement("p",{className:"finder__results__card__tag"},N.a.createElement("span",{className:"fal fa-fw fa-university icon","aria-hidden":"true"})," ",e.details.metaData.E&&e.details.metaData.E,e.details.metaData.E&&e.details.metaData.D&&", ",e.details.metaData.D&&e.details.metaData.D),a=e.details.metaData.K&&N.a.createElement("div",{className:"thumbnail__image-container"},N.a.createElement("img",{src:e.details.metaData.K,alt:""}));return N.a.createElement("li",{className:"finder__results__card finder__results__profile"},N.a.createElement("a",{href:"/fb"+e.details.clickTrackingUrl},a,N.a.createElement("div",{className:"finder__results__card__details"},N.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},N.a.createElement("span",null,e.details.title)),N.a.createElement("p",{className:"finder__results__card__description"},e.details.metaData.J),t)))}function y(e){switch(e.type){case"course":return N.a.createElement(W,{details:e.details,query:e.query,showClearing:e.showClearing});case"profile":return N.a.createElement(V,{details:e.details})}}function g(e){return N.a.createElement("li",{className:"finder__results__card finder__results__bestbet"},N.a.createElement("a",{href:"/fb"+e.details.clickTrackingUrl},N.a.createElement("div",{className:"finder__results__card__details"},N.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.details.title),N.a.createElement("p",{className:"finder__results__card__description"},e.details.description))))}function b(e){const t=e.text.split(/\|/)[0].trim();return N.a.createElement("p",null,"Did you mean “",N.a.createElement("button",{type:"button",className:"finder__didyoumean__button",onClick:()=>{const a=e.query;a.query=t,a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)}},t),"”?")}function E(e){var t=Math.ceil;const a=t(e.totalMatching/e.numRanks),n=t(e.currStart/e.numRanks),r=[],c=t=>{const a=1+(t-1)*e.numRanks,n=e.query;n.startRank=a,e.update.query(n),e.update.results(!e.update.updateState)};r.push(N.a.createElement("button",{className:"pagination__controls__button--prev",key:"prev",type:"button",disabled:1===n,onClick:()=>{c(n-1)}},N.a.createElement("span",null,"Previous page")));for(let e=1;e<=a;e++){let t;switch(e-a){case 0:t="pagination__controls__element pagination__controls__button pagination__controls__button--last";break;case-1:t="pagination__controls__element pagination__controls__button pagination__controls__button--penultimate";break;default:t="pagination__controls__element pagination__controls__button"}r.push(N.a.createElement("button",{"aria-current":e===n?"page":null,"aria-expanded":e===n,"aria-label":"Open page ".concat(e),className:t,"data-page":e,"data-proximity":Math.abs(e-n),disabled:e===n,key:e,type:"button",onClick:()=>{c(e)}},N.a.createElement("span",null,e))),1===e?r.push(N.a.createElement("span",{key:"firstEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"},N.a.createElement("span",null,"…"))):e===a-1&&r.push(N.a.createElement("span",{key:"lastEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"},N.a.createElement("span",null,"…")))}return r.push(N.a.createElement("button",{className:"pagination__controls__button--next",key:"next",type:"button",disabled:n===a,onClick:()=>{c(n+1)}},N.a.createElement("span",null,"Next page"))),N.a.createElement("div",{className:"pagination__wrapper"},N.a.createElement("nav",{className:"pagination__controls","data-pagecount":a},r))}function h(e){const t=N.a.createElement("p",{className:"finder__results__updating","aria-live":"polite"},N.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",N.a.createElement("span",null,"Updating results…"));if(e.response){const a=e.response.spell&&e.response.spell.text&&0===e.response.summary.totalMatching&&N.a.createElement(Q,{query:e.query,text:e.response.spell.text,update:e.update}),n=e.response.summary.totalMatching>e.response.summary.numRanks&&N.a.createElement(X,{currStart:e.response.summary.currStart,numRanks:e.response.summary.numRanks,query:e.query,totalMatching:e.response.summary.totalMatching,update:e.update}),r=e.updating?N.a.createElement(N.a.Fragment,null,t):N.a.createElement(N.a.Fragment,null,N.a.createElement(I,{currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,query:e.response.query,numRanks:e.response.summary.numRanks,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching,clear:e.clear,update:e.update,config:e.config,queryF:e.query}),a,N.a.createElement("ol",{start:e.response.summary.currStart,className:"finder__results__list"},e.response.bestBets.map(e=>N.a.createElement(z,{details:e,key:e.docNum})),e.response.results.map(t=>N.a.createElement(Y,{bestBet:!1,details:t,key:t.docNum,type:e.type,query:e.query,showClearing:e.config.showClearing}))),n);return N.a.createElement("div",{className:"finder__results"},r)}return N.a.createElement("div",{className:"finder__results"},t)}function q(e,t){return e.map(e=>{const a={};return t.get("meta_".concat(e.meta,"_orsand"))&&(a[e.meta]=t.get("meta_".concat(e.meta,"_orsand"))),a}).reduce((e,t)=>Object.assign(e,t))}function v(e){const t=new URLSearchParams(window.location.search),a={collection:e.config.collection,fixedFacets:e.config.fixedFacets,query:t.get("query")||"",sortBy:t.get("query")?null:t.get("sort")||e.config.sort,sortDirection:t.get("sortdirection")||e.config.sortDirection,startRank:t.get("start_rank")||1,numRanks:t.get("num_ranks")||e.config.numRanks,facets:q(e.config.facetLabels,t)},n={bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}},[r,c]=Object(k.useState)(a),[s,l]=Object(k.useState)(n),[o,i]=Object(k.useState)(!0),[u,m]=Object(k.useState)({cancel:()=>{}}),[d,p]=Object(k.useState)(!1);Object(k.useEffect)(()=>{(function(e,t,a,n){const r=new URLSearchParams(window.location.search);""===e?r.delete("query"):r.set("query",e),1===t?r.delete("start_rank"):r.set("start_rank",t),n.forEach(e=>{a[e.meta]?r.set("meta_".concat(e.meta,"_orsand"),a[e.meta]):r.delete("meta_".concat(e.meta,"_orsand"))});const c=r.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(c).concat(r.toString()))})(r.query,r.startRank,r.facets,e.config.facetLabels),i(!0),u.cancel();const[t,a]=Object(O.a)(r.collection,r.fixedFacets,r.query,r.sortBy,r.sortDirection,r.startRank,r.numRanks,r.facets);m({cancel:()=>{a.cancel()}}),t.then(e=>{l(e),i(!1)}).catch(()=>{l(n),i(!1)})},[d]);const f={query:e=>c(e),results:e=>p(e),updateState:d},_=()=>{const e=Object.assign({},r);e.facets={},c(e),p(!d)};return N.a.createElement("form",{className:0<e.config.facetLabels.length?"finder":"finder finder--nofilters",onSubmit:e=>{e.preventDefault()}},N.a.createElement(R,{config:e.config,query:r,update:f,updating:o}),0<e.config.facetLabels.length&&N.a.createElement(N.a.Fragment,null,N.a.createElement(G,{config:e.config,query:r,response:s,update:f,updating:o,summariseAs:e.config.summariseAs,clear:_}),N.a.createElement(U,{config:e.config,query:r,response:s,update:f,clear:_})),N.a.createElement(Z,{query:r,response:s,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:f,updating:o,clear:_,config:e.config}))}a(4),a(33),a(14),a(36),a(3),a(7),a(93);var k=a(0),N=a.n(k),j=a(1),w=a.n(j),O=a(15);n.propTypes={clear:w.a.func};var S=n;const D=5,[C,x,F]=[27,38,40];r.propTypes={config:w.a.object,query:w.a.object,update:w.a.object,updating:w.a.bool};var R=r;a(13);c.propTypes={facet:w.a.object,query:w.a.object,responseFacet:w.a.arrayOf(w.a.object),update:w.a.object,mobile:w.a.bool};var M=c;s.propTypes={facet:w.a.object,query:w.a.object,responseFacet:w.a.arrayOf(w.a.object),update:w.a.object};var T=s;l.propTypes={facet:w.a.object,query:w.a.object,responseFacet:w.a.arrayOf(w.a.object),update:w.a.object};var L=l;o.propTypes={clear:w.a.func};var A=o;i.propTypes={config:w.a.object,query:w.a.object,update:w.a.object};var P=i;u.propTypes={facet:w.a.object,query:w.a.object,responseFacet:w.a.arrayOf(w.a.object),update:w.a.object};var B=u;m.propTypes={config:w.a.object,query:w.a.object,response:w.a.object,update:w.a.object,clear:w.a.func,mobile:w.a.bool};var U=m;d.propTypes={queryF:w.a.object,currEnd:w.a.number,currStart:w.a.number,query:w.a.string,numRanks:w.a.number,summariseAs:w.a.object,totalMatching:w.a.number,clear:w.a.func,update:w.a.object,config:w.a.object};var I=d,K=a(24),H=a.n(K),J=a(35);p.propTypes={config:w.a.object,query:w.a.object,response:w.a.object,update:w.a.object,clear:w.a.func,updating:w.a.bool,summariseAs:w.a.object};var G=p,$=(a(27),(e,t)=>t?e:N.a.createElement(N.a.Fragment,null,e.split(t).reduce((e,a,n)=>n?e.concat(N.a.createElement("span",{className:"highlightText",key:t+a},t),a):[a],[])));f.propTypes={details:w.a.object,query:w.a.object,showClearing:w.a.bool};var W=f;_.propTypes={details:w.a.object};var V=_;y.propTypes={details:w.a.object,query:w.a.object,type:w.a.string,showClearing:w.a.bool};var Y=y;g.propTypes={details:w.a.object};var z=g;a(51);b.propTypes={query:w.a.object,text:w.a.string,update:w.a.object};var Q=b;E.propTypes={currStart:w.a.number,query:w.a.object,numRanks:w.a.number,totalMatching:w.a.number,update:w.a.object};var X=E;h.propTypes={query:w.a.object,response:w.a.object,summariseAs:w.a.object,type:w.a.string,update:w.a.object,updating:w.a.bool,clear:w.a.func};var Z=h;v.propTypes={config:w.a.object},t.a=v}});