!function(e){function t(t){for(var n,r,l=t[0],i=t[1],o=t[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);m.length;)m.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a,r=c[t],l=!0,i=1;i<r.length;i++)a=r[i],0!==s[a]&&(l=!1);l&&(c.splice(t--,1),e=n(n.s=r[0]))}return e}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={},s={2:0},c=[];n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=i;c.push([215,0,1]),a()}({11:function(e,t,a){"use strict";function n(e){return s.a.createElement("button",{className:"finder__clear",type:"button",onClick:()=>{e.clear()}},s.a.createElement("span",{className:"far fa-fw fa-times icon","aria-label":"Clear input"}),s.a.createElement("span",{className:"finder__clear__text"},"Reset"))}var r=a(0),s=a.n(r),c=a(1),l=a.n(c);n.propTypes={clear:l.a.func},t.a=n},2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function r(e,t,a){const n=a?k(t):j(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function s(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function c(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function l(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function i(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function o(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function u(e,t,a,n,r,s){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:s})}function d(e,t){t.forEach(t=>e.appendChild(t))}function m(e){return e.replace(/\D/g,"")}function p(){let e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function f(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function _(){let e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}let a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function g(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function y(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):a.setAttribute(e.label,e.val)})),a}function b(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}a.d(t,"n",(function(){return n})),a.d(t,"l",(function(){return r})),a.d(t,"k",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"p",(function(){return l})),a.d(t,"j",(function(){return i})),a.d(t,"i",(function(){return o})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"h",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"m",(function(){return f})),a.d(t,"d",(function(){return _})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return y})),a.d(t,"o",(function(){return b}));var E=a(4),h=(a.n(E),a(18)),q=(a.n(h),a(20)),v=(a.n(q),a(3)),N=(a.n(v),a(5));a.n(N);const k=e=>t=>0>t.indexOf(e),j=e=>t=>t!==e},215:function(e,t,a){e.exports=a(216)},216:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a.n(n),a(0)),s=a.n(r),c=a(62),l=(a.n(c),a(50)),i=a(6);document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".wrapper--finder");e&&Array.from(e).forEach(e=>{Object(i.b)(e.dataset.config).then(t=>{Object(c.render)(s.a.createElement(l.a,{config:t}),e)})})}})},50:function(e,t,a){"use strict";function n(e){function t(){p.focus()}const[a,n]=Object(b.useState)(e.query.query),[r,s]=Object(b.useState)([]),[c,l]=Object(b.useState)({cancel:()=>{}}),[i]=Object(b.useState)("finder--"+e.query.collection+"--"+Math.random().toString(16).slice(-4)),[o,u]=Object(b.useState)(!1),[d,m]=Object(b.useState)("");Object(b.useEffect)(()=>{n(e.query.query)},[e.updating]);let p=null;const f=()=>{c.cancel(),n(""),s([]),t();const a=e.query;a.query="",a.sortBy=e.config.sort,e.update.query(a),e.update.results(!e.update.updateState)},_=t=>{c.cancel(),s([]);const n=e.query;n.query=t||(a||""),n.startRank=1,n.sortBy=a?null:e.config.sort,e.update.query(n),e.update.results(!e.update.updateState)},g=a&&E.a.createElement(N.a,{clear:()=>{f()}}),y=e=>{u(!1),s([]),t(),_(e)},h=r&&0<r.length&&E.a.createElement("ul",{role:"listbox","aria-label":"Search suggestions","aria-activedescendant":d,className:o?"finder__query__suggestions show":"finder__query__suggestions hide"},[...new Set(r)].slice(0,k).map((e,t)=>E.a.createElement("li",{key:e,role:"option",id:i+"--"+t},E.a.createElement("button",{type:"button",onBlur:()=>{m(""),u(!1)},onFocus:()=>u(!0),onMouseDown:()=>y(e),onClick:()=>y(e),onKeyDown:e=>{switch(e.keyCode){case j:e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),s([]),m("");break;case w:e.target.parentNode.previousElementSibling&&e.target.parentNode.previousElementSibling.querySelector("button")?(e.preventDefault(),e.target.parentNode.previousElementSibling.querySelector("button").focus(),m(e.target.parentNode.previousElementSibling.id)):(e.preventDefault(),e.target.parentNode.parentNode.parentNode.querySelector("input").focus(),m(""));break;case O:e.preventDefault(),e.target.parentNode.nextElementSibling&&e.target.parentNode.nextElementSibling.querySelector("button")&&(e.preventDefault(),e.target.parentNode.nextElementSibling.querySelector("button").focus(),m(e.target.parentNode.nextElementSibling.id));break;case D:e.preventDefault(),e.target.parentNode.parentNode.firstChild&&e.target.parentNode.parentNode.firstChild.querySelector("button")&&(e.preventDefault(),e.target.parentNode.parentNode.firstChild.querySelector("button").focus(),m(e.target.parentNode.firstChild.id));break;case S:e.preventDefault(),e.target.parentNode.parentNode.lastChild&&e.target.parentNode.parentNode.lastChild.querySelector("button")&&(e.preventDefault(),e.target.parentNode.parentNode.lastChild.querySelector("button").focus(),m(e.target.parentNode.lastChild.id))}}},function(e,t){return E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,E.a.createElement("span",{className:"sr-only"},e),E.a.createElement("span",{"aria-hidden":"true"},E.a.createElement("span",{className:"finder__suggestion"},e.slice(e.indexOf(t.toLowerCase()),t.length)),e.slice(e.indexOf(t.toLowerCase())+t.length))))}(e,a))))),q=E.a.createElement("div",{className:"finder__query__input"},E.a.createElement("div",{className:"finder__query__icon--wrapper"},E.a.createElement("span",{className:"finder__icon fal fa-search icon","aria-hidden":"true"})),E.a.createElement("label",{className:"sr-only",htmlFor:i},"Search ".concat(e.config.summariseAs.plural)),E.a.createElement("input",{autoComplete:"off",id:i,name:"query",placeholder:e.config.placeholder,ref:e=>{p=e},type:"text",value:a,onKeyDown:e=>{switch(e.keyCode){case j:f();break;case O:r&&0<r.length&&(e.preventDefault(),e.target.parentNode.querySelector(".finder__query__suggestions button").focus(),m(e.target.parentNode.querySelector(".finder__query__suggestions li").id))}},onFocus:()=>u(!0),onBlur:()=>u(!1),onChange:t=>{if(s([]),n(t.target.value),c.cancel(),t.target.value){const[a,n]=Object(v.c)(e.query.collection,t.target.value);l({cancel:()=>{n.cancel()}}),a.then(e=>s(e)).catch(()=>s([]))}else s([])}}),h,g);return E.a.createElement("fieldset",{className:"finder__query"},E.a.createElement("div",null,q,E.a.createElement("button",{type:"submit",className:"finder__query__submit",onClick:()=>_()},E.a.createElement("span",{className:"fal fa-search finder__query__submit__icon","aria-hidden":"true"})," ",E.a.createElement("span",{className:"finder__query__submit__text"},"Find"))))}function r(e){const t=Math.random().toString(16).slice(-4),a=e.query.facets[e.facet.meta]||"",n=e.facet.values.reduce((e,t)=>[...e,t],[]),r=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values?e.responseFacet[0].categories[0].values.reduce((e,t)=>[...e,t.data],[]):[],s=n.map(e=>e.data).filter(e=>0>r.indexOf(e)).length;return e.facet.values.length>s?E.a.createElement("div",{className:"finder__filter finder__select ".concat(a&&"finder__select--selected")},E.a.createElement("label",{className:"finder__select__overline",htmlFor:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.name),E.a.createElement("select",{name:e.facet.name,id:"meta_".concat(e.facet.meta,"_sand--").concat(t),onChange:t=>(t=>{const a=e.query,n=t;e.dependencies.map(e=>{delete a.facets[e.meta]}),n?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:a},E.a.createElement("option",{value:"",id:"meta".concat(e.facet.meta,"all"),name:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.noSelection),e.facet.values.map((n,r)=>{const s=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(e=>e.data===n.data);return a===n.data||s&&s[0]?E.a.createElement("option",{key:r,value:n.data,id:"meta".concat(e.facet.meta).concat(r),name:"meta_".concat(e.facet.meta,"_sand--").concat(t)},n.label,a===n.data?"":0<s[0].count&&" (".concat(s[0].count,")")):null}))):null}function s(e){const t=Math.random().toString(16).slice(-4),a=t=>{const a=e.query,n=t.target.value;t.target.checked?a.facets[e.facet.meta]=n:delete a.facets[e.facet.meta],a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)},n="".concat(e.facet.name,"-").concat(t);return E.a.createElement("fieldset",{className:"finder__filter finder__togglebox"},E.a.createElement("div",{className:"finder__toggle"},E.a.createElement("label",{htmlFor:n},e.facet.values[0].label,E.a.createElement("input",{type:"checkbox",id:n,name:e.facet.name,value:e.facet.values[0].data,onChange:e=>a(e),checked:!!e.query.facets[e.facet.meta]}),E.a.createElement("span",{className:"toggle ".concat(e.query.facets[e.facet.meta]?"toggle--open":"toggle--close")}))))}function c(e){const t=0<Object.keys(e.query.facets).length&&E.a.createElement("div",{className:"finder__filters__clear--desktop"},E.a.createElement(N.a,{clear:e.clear,query:e.query}));return E.a.createElement("div",{className:"finder__filters"},E.a.createElement("h2",{className:"finder__filters__heading"},E.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"}),"Filter ".concat(e.config.summariseAs.plural)," ",E.a.createElement(N.a,{clear:e.clear,query:e.query})),E.a.createElement("fieldset",null,E.a.createElement("div",{className:"finder__filters__wrapper--filters"},e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!e.dependency||!!(0<=a.indexOf(e.dependency)&&""!==t[e.dependency])}(t,e.query.facets))return null;switch(t.type){case"select":return E.a.createElement(C,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"toggle":return E.a.createElement(R,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update})}}),t,E.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."))))}function l(e){let t;const a=1===e.totalMatching?e.summariseAs.singular:e.summariseAs.plural;return 0==e.totalMatching&&(t=E.a.createElement("div",null,E.a.createElement("p",null,"Your search did not match any ",e.summariseAs.plural,"."),E.a.createElement("p",null,"Suggestions:"),E.a.createElement("ul",null,E.a.createElement("li",null,"Make sure that all words are spelled correctly"),E.a.createElement("li",null,"Try different keywords"),E.a.createElement("li",null,"Try more general keywords"),E.a.createElement("li",null,"Try fewer keywords"),E.a.createElement("li",null,"Try fewer filters"),E.a.createElement("li",null,E.a.createElement("button",{type:"button",onClick:()=>{e.clear()}},"Reset filters")),E.a.createElement("li",null,E.a.createElement("button",{type:"button",onClick:()=>{const t=e.query;t.query="",t.sortBy=e.config.sort,e.update.query(t),e.update.results(!e.update.updateState)}},"Reset search"))))),E.a.createElement("div",{className:"finder__results__summary"},E.a.createElement("h2",{"aria-live":"polite",className:"finder__results__summary__heading"},e.query.query||0<Object.keys(e.query.facets).length?"Matching":"All"," ",a," (showing"," ",e.totalMatching>e.numRanks&&E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,e.currStart),"–",E.a.createElement("span",null,e.currEnd)," of"," "),E.a.createElement("span",null,e.totalMatching)," ",a,e.query.query&&" for “".concat(e.query.query,"”"),")"),t)}function i(e){const[t,a]=Object(b.useState)(!1),[n,r]=Object(b.useState)({});let s=null;const c=()=>s;Object(b.useEffect)(()=>{n.activate||r(F()(c(),{onDeactivate:()=>a(!1),clickOutsideDeactivates:!0})),t?(n.activate&&n.activate(),Object(L.disableBodyScroll)(c())):(n.deactivate&&n.deactivate(),Object(L.enableBodyScroll)(c()))},[t]);const l=e.response&&e.response.summary&&e.response.summary.totalMatching,i=1===l?e.summariseAs.singular:e.summariseAs.plural,o=l?"Show ".concat(l," ").concat(i):"Close",u=0<l?E.a.createElement(M,{currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,query:e.query,numRanks:e.response.summary.numRanks,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching}):E.a.createElement("div",{className:"finder__results__summary"},E.a.createElement("h2",{className:"finder__results__summary__heading-wrap"},"No ",e.summariseAs.plural)),d=0<Object.keys(e.query.facets).length?E.a.createElement("span",null,"Filters"," ",E.a.createElement("span",{className:"finder__mobilefilters__toggle__filterNo"},"(",Object.keys(e.query.facets).length,")")):E.a.createElement("span",null,"Filter");return E.a.createElement("div",{className:"finder__filters--mobile","data-open":t},E.a.createElement("button",{type:"button",className:"finder__filters--mobile__toggle","aria-haspopup":!0,"aria-expanded":t,onClick:()=>a(!t),"data-filters-applied":0!==Object.keys(e.query.facets).length},E.a.createElement("span",null,E.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",d)),E.a.createElement("div",{className:"finder__filters--mobile__filters",ref:e=>{s=e}},E.a.createElement("div",{className:"finder__filters--mobile__filters__content"},E.a.createElement(A,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear,mobile:!0}),E.a.createElement("button",{type:"button",className:"finder__filters--mobile__apply","aria-expanded":t,onClick:()=>a(!t),disabled:e.updating},0===Object.keys(e.query.facets).length?null:E.a.createElement("span",{className:"far fa-chevron-left"}),E.a.createElement("span",{"aria-live":"polite"},e.updating?E.a.createElement(E.a.Fragment,null,E.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Updating ",e.summariseAs.plural,"…")):E.a.createElement(E.a.Fragment,null,E.a.createElement("span",null,0===Object.keys(e.query.facets).length?"Close":o)))))),u)}function o(e){const t=e.details.metaData.type||e.details.metaData.level||null,a=e.details.metaData.code&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fal fa-fw fa-graduation-cap icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Course code:")," ",E.a.createElement("span",null,e.details.metaData.code)),n=e.details.metaData.qualification&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fal fa-fw fa-award icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Award:")," ",E.a.createElement("span",null,2<e.details.metaData.qualification.split("|").length?e.details.metaData.qualification.split("|").slice(0,-1).join(", ")+" or "+e.details.metaData.qualification.split("|").slice(-1):e.details.metaData.qualification.split("|").join(" or "))),r=e.details.metaData.duration&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fal fa-fw fa-clock icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Duration:")," ",E.a.createElement("span",null,e.details.metaData.duration)),s=e.details.metaData.method&&e.query.facets.method&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fas fa-fw fa-book-reader icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Method of study:")," ",E.a.createElement("span",null,2<e.details.metaData.method.split("|").length?Object(U.o)(e.details.metaData.method).split("|").slice(0,-1).join(", ")+" or "+Object(U.o)(e.details.metaData.method).split("|").slice(-1):Object(U.o)(e.details.metaData.method).split("|").join(" or "))),c=e.details.metaData.location&&e.query.facets.location&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fas fa-fw fa-map-marker-alt icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Location:")," ",E.a.createElement("span",null,e.details.metaData.location)),l=e.details.metaData.school&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"far fa-fw fa-building icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"School:")," ",E.a.createElement("span",null,e.details.metaData.school)),i="1"===e.details.metaData.clearing&&E.a.createElement("div",{className:"clearing_label"},E.a.createElement("p",null,"Available in clearing"));return E.a.createElement("li",{className:"finder__results__card finder__results__course"},E.a.createElement("a",{href:e.details.clickTrackingUrl},i,E.a.createElement("div",{className:"finder__results__card__details"},E.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.query.query?B(e.details.title,e.query.query):e.details.title),E.a.createElement("p",{className:"finder__results__card__description"},e.query.query?B(t&&t.replace(/_/g," "),e.query.query):t&&t),E.a.createElement("p",null,e.query.query?B(e.details.metaData.c&&e.details.metaData.c.replace(/_/g," "),e.query.query):e.details.metaData.c&&e.details.metaData.c),l,n,r,a,s,c)))}function u(e){const t=(e.details.metaData.E||e.details.metaData.D)&&E.a.createElement("p",{className:"finder__results__card__tag"},E.a.createElement("span",{className:"fal fa-fw fa-university icon","aria-hidden":"true"})," ",e.details.metaData.E&&e.details.metaData.E,e.details.metaData.E&&e.details.metaData.D&&", ",e.details.metaData.D&&e.details.metaData.D),a=e.details.metaData.K&&E.a.createElement("div",{className:"thumbnail__image-container"},E.a.createElement("img",{src:e.details.metaData.K,alt:""}));return E.a.createElement("li",{className:"finder__results__card finder__results__profile"},E.a.createElement("a",{href:"/fb"+e.details.clickTrackingUrl},a,E.a.createElement("div",{className:"finder__results__card__details"},E.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},E.a.createElement("span",null,e.details.title)),E.a.createElement("p",{className:"finder__results__card__description"},e.details.metaData.J),t)))}function d(e){switch(e.type){case"course":return E.a.createElement(I,{details:e.details,query:e.query});case"profile":return E.a.createElement(J,{details:e.details})}}function m(e){return E.a.createElement("li",{className:"finder__results__card finder__results__bestbet"},E.a.createElement("a",{href:e.details.clickTrackingUrl},E.a.createElement("div",{className:"finder__results__card__details"},E.a.createElement("h3",{className:"finder__results__card__heading underline-transition__title"},e.details.title),E.a.createElement("p",{className:"finder__results__card__description"},e.details.description))))}function p(e){const t=e.text.split(/\|/)[0].trim();return E.a.createElement("p",null,"Did you mean “",E.a.createElement("button",{type:"button",className:"finder__didyoumean__button",onClick:()=>{const a=e.query;a.query=t,a.startRank=1,e.update.query(a),e.update.results(!e.update.updateState)}},t),"”?")}function f(e){var t=Math.ceil;const a=t(e.totalMatching/e.numRanks),n=t(e.currStart/e.numRanks),r=[],s=t=>{const a=1+(t-1)*e.numRanks,n=e.query;n.startRank=a,e.update.query(n),e.update.results(!e.update.updateState)};r.push(E.a.createElement("button",{className:"pagination__controls__button--prev",key:"prev",type:"button",disabled:1===n,onClick:()=>{s(n-1)}},E.a.createElement("span",null,"Previous page")));for(let e=1;e<=a;e++){let t;switch(e-a){case 0:t="pagination__controls__element pagination__controls__button pagination__controls__button--last";break;case-1:t="pagination__controls__element pagination__controls__button pagination__controls__button--penultimate";break;default:t="pagination__controls__element pagination__controls__button"}r.push(E.a.createElement("button",{"aria-current":e===n?"page":null,"aria-expanded":e===n,"aria-label":"Open page ".concat(e),className:t,"data-page":e,"data-proximity":Math.abs(e-n),disabled:e===n,key:e,type:"button",onClick:()=>{s(e)}},E.a.createElement("span",null,e))),1===e?r.push(E.a.createElement("span",{key:"firstEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"},E.a.createElement("span",null,"…"))):e===a-1&&r.push(E.a.createElement("span",{key:"lastEllipsis",className:"pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"},E.a.createElement("span",null,"…")))}return r.push(E.a.createElement("button",{className:"pagination__controls__button--next",key:"next",type:"button",disabled:n===a,onClick:()=>{s(n+1)}},E.a.createElement("span",null,"Next page"))),E.a.createElement("div",{className:"pagination__wrapper"},E.a.createElement("nav",{className:"pagination__controls","data-pagecount":a},r))}function _(e){const t=E.a.createElement("p",{className:"finder__results__updating","aria-live":"polite"},E.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",E.a.createElement("span",null,"Updating ",e.summariseAs.plural,"…"));if(e.response){const a=e.response.spell&&e.response.spell.text&&0===e.response.summary.totalMatching&&E.a.createElement(W,{query:e.query,text:e.response.spell.text,update:e.update}),n=e.response.summary.totalMatching>e.response.summary.numRanks&&E.a.createElement(V,{currStart:e.response.summary.currStart,numRanks:e.response.summary.numRanks,query:e.query,totalMatching:e.response.summary.totalMatching,update:e.update}),r=e.updating?E.a.createElement(E.a.Fragment,null,t):E.a.createElement(E.a.Fragment,null,E.a.createElement(M,{clear:e.clear,config:e.config,currEnd:e.response.summary.currEnd,currStart:e.response.summary.currStart,numRanks:e.response.summary.numRanks,query:e.query,summariseAs:e.summariseAs,totalMatching:e.response.summary.totalMatching,update:e.update}),a,E.a.createElement("ol",{start:e.response.summary.currStart,className:"finder__results__list"},e.response.bestBets.map(e=>E.a.createElement(H,{details:e,key:e.docNum})),e.response.results.map(t=>E.a.createElement(K,{bestBet:!1,details:t,key:t.docNum,type:e.type,query:e.query}))),n);return E.a.createElement("div",{className:"finder__results"},r)}return E.a.createElement("div",{className:"finder__results"},t)}function g(e,t){return e.map(e=>{const a={};return t.get("meta_".concat(e.meta,"_sand"))&&(a[e.meta]=t.get("meta_".concat(e.meta,"_sand"))),a}).reduce((e,t)=>Object.assign(e,t))}function y(e){const t=new URLSearchParams(window.location.search),a={collection:e.config.collection,fixedFacets:e.config.fixedFacets,query:t.get("query")||"",sortBy:t.get("query")?null:t.get("sort")||e.config.sort,sortDirection:t.get("sortdirection")||e.config.sortDirection,startRank:t.get("start_rank")||1,numRanks:t.get("num_ranks")||e.config.numRanks,facets:g(e.config.facetLabels,t)},n={bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}},[r,s]=Object(b.useState)(a),[c,l]=Object(b.useState)(n),[i,o]=Object(b.useState)(!0),[u,d]=Object(b.useState)({cancel:()=>{}}),[m,p]=Object(b.useState)(!1);Object(b.useEffect)(()=>{(function(e,t,a,n){if(window){const r=new URLSearchParams(window.location.search);""===e?r.delete("query"):r.set("query",e),1===t?r.delete("start_rank"):r.set("start_rank",t),n.forEach(e=>{a[e.meta]?r.set("meta_".concat(e.meta,"_sand"),a[e.meta]):r.delete("meta_".concat(e.meta,"_sand"))});const s=r.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(s).concat(r.toString()))}})(r.query,r.startRank,r.facets,e.config.facetLabels),o(!0),u.cancel();const[t,a]=Object(v.a)(r.collection,r.fixedFacets,r.query,r.sortBy,r.sortDirection,r.startRank,r.numRanks,r.facets);d({cancel:()=>{a.cancel()}}),t.then(e=>{l(e),o(!1)}).catch(()=>{l(n),o(!1)})},[m]);const f={query:e=>s(e),results:e=>p(e),updateState:m},_=()=>{const e=Object.assign({},r);e.facets={},s(e),p(!m)};return E.a.createElement("form",{className:0<e.config.facetLabels.length?"finder":"finder finder--nofilters",onSubmit:e=>{e.preventDefault()}},E.a.createElement(x,{config:e.config,query:r,update:f,updating:i}),0<e.config.facetLabels.length&&E.a.createElement(E.a.Fragment,null,E.a.createElement(P,{config:e.config,query:r,response:c,update:f,updating:i,summariseAs:e.config.summariseAs,clear:_}),E.a.createElement("div",{className:"finder__filters--desktop"},E.a.createElement(A,{config:e.config,query:r,response:c,update:f,clear:_}))),E.a.createElement(Y,{query:r,response:c,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:f,updating:i,clear:_,config:e.config}))}a(4),a(21),a(57),a(14),a(29),a(3),a(5),a(58);var b=a(0),E=a.n(b),h=a(1),q=a.n(h),v=a(6),N=a(11);const k=5,[j,w,O,S,D]=[27,38,40,35,36];n.propTypes={config:q.a.object,query:q.a.object,update:q.a.object,updating:q.a.bool};var x=n;r.propTypes={facet:q.a.object,query:q.a.object,responseFacet:q.a.arrayOf(q.a.object),update:q.a.object,dependencies:q.a.arrayOf(q.a.object)};var C=r;s.propTypes={facet:q.a.object,query:q.a.object,responseFacet:q.a.arrayOf(q.a.object),update:q.a.object};var R=s;c.propTypes={config:q.a.object,query:q.a.object,response:q.a.object,update:q.a.object,clear:q.a.func,mobile:q.a.bool};var A=c;l.propTypes={clear:q.a.func,config:q.a.object,currEnd:q.a.number,currStart:q.a.number,numRanks:q.a.number,query:q.a.object,summariseAs:q.a.object,totalMatching:q.a.number,update:q.a.object};var M=l,T=a(28),F=a.n(T),L=a(40);i.propTypes={config:q.a.object,query:q.a.object,response:q.a.object,update:q.a.object,clear:q.a.func,updating:q.a.bool,summariseAs:q.a.object};var P=i,B=(a(18),a(20),(e,t)=>t?e:E.a.createElement(E.a.Fragment,null,e.split(t).reduce((e,a,n)=>n?e.concat(E.a.createElement("span",{className:"highlightText",key:t+a},t),a):[a],[]))),U=a(2);o.propTypes={details:q.a.object,query:q.a.object};var I=o;u.propTypes={details:q.a.object};var J=u;d.propTypes={details:q.a.object,query:q.a.object,type:q.a.string};var K=d;m.propTypes={details:q.a.object};var H=m;a(36);p.propTypes={query:q.a.object,text:q.a.string,update:q.a.object};var W=p;f.propTypes={currStart:q.a.number,query:q.a.object,numRanks:q.a.number,totalMatching:q.a.number,update:q.a.object};var V=f;_.propTypes={query:q.a.object,response:q.a.object,summariseAs:q.a.object,type:q.a.string,update:q.a.object,updating:q.a.bool,clear:q.a.func};var Y=_;y.propTypes={config:q.a.object},t.a=y},6:function(e,t,a){"use strict";function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}));return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e){return m()(e).then(e=>{if(E===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{m.a.isCancel(e)||Object(_.e)("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function l(e,t,a,n,s,l,i,o){const u={};t.forEach(e=>{u["meta_".concat(e.meta,"_sand")]=e.value});const d={};Object.keys(o).forEach(e=>d["meta_".concat(e,"_sand")]=o[e]);const p=m.a.CancelToken.source();return[c({baseURL:g,cancelToken:p.token,httpsAgent:new f.a.Agent({keepAlive:!0}),url:y,timeout:h,params:r({},u,{},d,{collection:e,num_ranks:i,query:a,sort:n?"".concat("desc"===s?"d":"").concat(n):null,start_rank:l})}),p]}function i(e,t){const a=m.a.CancelToken.source();return[c({baseURL:g,cancelToken:a.token,url:b,timeout:h,params:{collection:e,partial_query:t}}),a]}function o(e){return c({timeout:h,url:e})}a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var u=a(3),d=(a.n(u),a(13)),m=a.n(d),p=a(39),f=a.n(p),_=a(2);const g="https://web2020.city.ac.uk/web-services",y="/funnelback-find",b="/funnelback-suggest",E=200,h=3e4},76:function(){},77:function(){}});