!function(e){function t(t){for(var n,r,l=t[0],i=t[1],o=t[2],f=0,d=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a,r=s[t],l=!0,i=1;i<r.length;i++)a=r[i],0!==c[a]&&(l=!1);l&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={},c={5:0},s=[];n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=i;s.push([239,1,0,4,3,2]),a()}({16:function(e,t,a){"use strict";function n(e){const t=Math.random().toString(16).slice(-4),a=e.config.sort.filter(t=>""!==t.type||!!(""!==e.query.query||0<Object.keys(e.query.facets).length||""===e.query.sortType));return 1<a.length?s.a.createElement("div",{className:"finder__select--sort finder__select".concat(e.query.sortType===e.config.sort[0].type?"":" finder__select--selected")},s.a.createElement("label",{className:"finder__select__overline",htmlFor:"sort--".concat(t)},"Sort by"),s.a.createElement("select",{name:"sort",id:"sort--".concat(t),onChange:t=>(t=>{const a=e.query;a.sortType=t,a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:e.query.sortType},a.map((e,t)=>s.a.createElement("option",{key:t,value:e.type},e.label)))):null}var r=a(10),c=(a.n(r),a(0)),s=a.n(c),l=a(1),i=a.n(l);n.propTypes={config:i.a.object,query:i.a.object,update:i.a.object},t.a=n},18:function(e,t,a){"use strict";function n(e){return c.a.createElement("button",{className:"finder__reset",type:"button",onClick:()=>{e.clear(e.resetSort)}},c.a.createElement("span",{className:"far fa-fw fa-times icon"}),c.a.createElement("span",{className:"finder__reset__text"},"Reset"))}var r=a(0),c=a.n(r),s=a(1),l=a.n(s);n.propTypes={clear:l.a.func,resetSort:l.a.bool},t.a=n},2:function(e,t,a){"use strict";function n(e){return!("true"!==e)}function r(e,t,a){const n=a?T(t):x(t);e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function c(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(e){return!(0===e.offsetHeight||0===e.offsetWidth)}function l(e){return!!(0<=e.getBoundingClientRect().top&&e.getBoundingClientRect().top<=window.innerHeight)}function i(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function o(e){if(0<Object.keys(e).length){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function u(e,t,a,n,r,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:c})}function f(e,t){t.forEach(t=>e.appendChild(t))}function d(e=432){if(window.innerWidth<e)return!0}function p(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function m(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return!!(0<a)&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function _(){return!!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}function y(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function g(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function h(e){return O()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{O.a.isCancel(e)||u("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function b(e){return S.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),S.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}a.d(t,"o",(function(){return n})),a.d(t,"m",(function(){return r})),a.d(t,"l",(function(){return c})),a.d(t,"i",(function(){return s})),a.d(t,"q",(function(){return l})),a.d(t,"k",(function(){return i})),a.d(t,"j",(function(){return o})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return f})),a.d(t,"h",(function(){return d})),a.d(t,"n",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return y})),a.d(t,"p",(function(){return g})),a.d(t,"b",(function(){return h})),a.d(t,"f",(function(){return b}));var v=a(4),E=(a.n(v),a(10)),j=(a.n(E),a(14)),w=(a.n(j),a(3)),k=(a.n(w),a(5)),N=(a.n(k),a(7)),O=a.n(N),q=a(0),S=a.n(q);const T=e=>t=>0>t.indexOf(e),x=e=>t=>t!==e},239:function(e,t,a){e.exports=a(242)},242:function(e,t,a){"use strict";function n(e){const t=Math.random().toString(16).slice(-4),a=e.query.facets[e.facet.meta]||"",n=e.facet.values.reduce((e,t)=>[...e,t],[]),r=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values?e.responseFacet[0].categories[0].values.reduce((e,t)=>[...e,t.data],[]):[],c=n.map(e=>e.data).filter(e=>0>r.indexOf(e.toLowerCase())).length;return e.facet.values.length>c?h.a.createElement("div",{className:"finder__filter finder__select ".concat(a&&"finder__select--selected")},h.a.createElement("label",{htmlFor:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.name),h.a.createElement("select",{name:e.facet.name,id:"meta_".concat(e.facet.meta,"_sand--").concat(t),onChange:t=>(t=>{const a=e.query;e.dependencies.map(e=>{delete a.facets[e.meta]}),t?a.facets[e.facet.meta]=t:delete a.facets[e.facet.meta],a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:a},h.a.createElement("option",{value:"",id:"meta".concat(e.facet.meta,"all"),name:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.noSelection),e.facet.values.map((t,n)=>{const r=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(e=>e.data.toLowerCase()===t.data.toLowerCase());return a.toLowerCase()===t.data.toLowerCase()||r&&r[0]?h.a.createElement("option",{key:n,value:t.data.toLowerCase()},t.label):null}))):null}function r(e){const t=0<Object.keys(e.query.facets).length?h.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},h.a.createElement(k.a,{clear:e.clear,resetSort:!1})):null,a=0<Object.keys(e.query.facets).length||e.query.sortType!==e.config.sort[0].type?h.a.createElement(k.a,{clear:e.clear,resetSort:!0}):null,n=1<e.config.sort.length&&e.config.displaySort?h.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},h.a.createElement(N.a,{config:e.config,query:e.query,update:e.update})):null;return h.a.createElement("div",{className:"finder__filters"},h.a.createElement("h2",{className:"finder__filters__heading"},h.a.createElement("span",{className:"finder__filters__heading__text"},h.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Use the filter to show data that is of interest to you"),a),h.a.createElement("fieldset",null,h.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!e.dependency||!!(0<=a.indexOf(e.dependency)&&""!==t[e.dependency])}(t,e.query.facets))return null;switch(t.type){case"select":return h.a.createElement(w,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});default:Object(O.g)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0)}}),h.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}function c(e){const t=0<Object.keys(e.query.facets).length?h.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},h.a.createElement(k.a,{clear:e.clear,resetSort:!1})):null,a=0<Object.keys(e.query.facets).length||e.query.sortType!==e.config.sort[0].type?h.a.createElement(k.a,{clear:e.clear,resetSort:!0}):null,n=1<e.config.sort.length&&e.config.displaySort?h.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},h.a.createElement(N.a,{config:e.config,query:e.query,update:e.update})):null;return h.a.createElement("div",{className:"finder__filters"},h.a.createElement("h2",{className:"finder__filters__heading"},h.a.createElement("span",{className:"finder__filters__heading__text"},h.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Filter ".concat(e.config.summariseAs.plural)),a),h.a.createElement("fieldset",null,h.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!e.dependency||!!(0<=a.indexOf(e.dependency)&&""!==t[e.dependency])}(t,e.query.facets))return null;switch(t.type){case"select":return h.a.createElement(w,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"checkbox":return h.a.createElement(S.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"tag":return h.a.createElement(T.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});default:Object(O.g)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0)}}),h.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}function s(e){const[t,a]=Object(g.useState)(!1),[n,r]=Object(g.useState)({});Object(g.useEffect)(()=>{n.activate||r(C()(D(),{initialFocus:D().querySelector(".wrapper--finder__filters--mobile__apply"),onDeactivate:()=>a(!1),clickOutsideDeactivates:!0})),t?(n.activate&&n.activate(),Object(F.a)(D().querySelector(".wrapper--finder__filters--mobile__filters"))):(n.deactivate&&n.deactivate(),Object(F.b)(D().querySelector(".wrapper--finder__filters--mobile__filters")))},[t,n]);const c=e.response&&e.response.summary&&e.response.summary.totalMatching?"Show Graduate Outcomes":"Close",s=e.config.displaySort?e.config.sort[0].type!==e.query.sortType||0<Object.keys(e.query.facets).length?h.a.createElement("span",null,"Filters"," ",h.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type===e.query.sortType?Object.keys(e.query.facets).length:Object.keys(e.query.facets).length+1,")")):h.a.createElement("span",null,"Filter"):0<Object.keys(e.query.facets).length?h.a.createElement("span",null,"Filters"," ",h.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type===e.query.sortType?Object.keys(e.query.facets).length:Object.keys(e.query.facets).length+1,")")):h.a.createElement("span",null,"Filter"),l=t?null:h.a.createElement("button",{type:"button",className:"wrapper--finder__filters--mobile__toggle","aria-haspopup":!0,"aria-expanded":t,onClick:()=>a(!t),"data-filters-applied":!!(0!==Object.keys(e.query.facets).length||e.config.displaySort&&e.config.sort[0].type!==e.query.sortType)},h.a.createElement("span",null,h.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",s));return h.a.createElement("div",{className:"wrapper--finder__filters--mobile","data-open":t,ref:e=>M=e},l,h.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters"},h.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters__content"},h.a.createElement(x,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear}),h.a.createElement("p",{className:"wrapper--finder__filters--mobile__filters__content--text"},"If you do not see the course you are interested in, please contact the"," ",h.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details"))),h.a.createElement("div",{className:"wrapper--finder__filters--mobile__apply"},h.a.createElement("button",{type:"button","aria-expanded":t,onClick:()=>a(!t),disabled:e.updating},0===Object.keys(e.query.facets).length?null:h.a.createElement("span",{className:"far fa-chevron-left icon"}),h.a.createElement("span",{"aria-live":"polite"},e.updating?h.a.createElement(h.a.Fragment,null,h.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",h.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},"Updating ",e.summariseAs.plural,"…")):h.a.createElement(h.a.Fragment,null,h.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},e.query.facets.t?c:"Close"))))))}function l(e){const t=e.data&&e.data.filter(e=>!(!e[0]||!e[1])).map(e=>[e[0],parseFloat(e[1])||0]);let a=!1,n=!1;100===t[0][1]&&(a=!0),e.chartsLength&&100===t[1][1]&&(n=!0);let r=t.reduce((function(e,t){return e+t[1]}),0),c=0,s=t.map((function(t,s){var l=Math.cos,i=Math.sin,o=Math.PI;let u=2*o*Math.min(1,t[1]/r),f=u>o?1:0,d="".concat(e.title).concat(t[0].replace(/\s+/g,"")).concat(t[1]).concat(e.chartId),p=100*i(c),m=-100*l(c);c+=u;let _=100*i(c),y=-100*l(c),g="M ".concat(p," ").concat(m," A 100 100  0 ").concat(f," ").concat(1," ").concat(_," ").concat(y);return!a&&!n&&7>s?h.a.createElement("path",{key:d,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:g,fill:"none"}):a?h.a.createElement(h.a.Fragment,null,h.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"}),h.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"})):n?h.a.createElement(h.a.Fragment,null,h.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"}),h.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"})):h.a.createElement("path",{key:d,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:g,fill:"none",stroke:"url(#striped)"})})),l=t.map((function(t,a){var n=Math.round,c=Number.EPSILON;let s=n(100*(t[1]+c))/100,l="".concat(t[0],": ").concat(n(100*(100*s/r+c))/100,"%"),i="legend-".concat(e.title).concat(t[0].replace(/\s+/g,"")).concat(t[1]).concat(e.chartId);return 7===a?h.a.createElement("div",{key:i,className:"chart__legend__item"},h.a.createElement("span",{className:"chart__legend__item__icon"},h.a.createElement("svg",{height:"23",width:"23"},h.a.createElement("circle",{cx:"12",cy:"10",r:"9",stroke:"black",strokeWidth:"1",fill:"url(#striped)"}))),h.a.createElement("span",{className:"chart__legend__item__label"},l)):h.a.createElement("div",{key:i,className:"chart__legend__item"},h.a.createElement("span",{className:"fa fa-circle chart__legend__item__icon","aria-hidden":"true"}),h.a.createElement("span",{className:"chart__legend__item__label"},l))}));return h.a.createElement("div",{className:"chart"},h.a.createElement("h3",{className:"chart__title"},e.title),h.a.createElement("div",{className:"chart__columns"},h.a.createElement("div",{className:"chart--piechart animate animate-svg"},h.a.createElement("div",{className:"chart--pie-chart__svg-wrapper"},h.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200"},h.a.createElement("g",{transform:"translate(100,100) scale(0.8620689655172413)"},s)))),h.a.createElement("div",{className:"chart__legend"},l)))}function i(e){return h.a.createElement("div",{className:"company-wrapper"},h.a.createElement("h3",null,"Company names"),h.a.createElement("div",{className:"company-list",dangerouslySetInnerHTML:{__html:e.text}}))}function o(e){return h.a.createElement("div",{className:"institutions-wrapper"},h.a.createElement("h3",null,"Institutions of further study"),h.a.createElement("div",{className:"institutions-list",dangerouslySetInnerHTML:{__html:e.text}}))}function u(e){return h.a.createElement("div",{className:"jobs-wrapper"},h.a.createElement("h3",null,"Jobs titles"),h.a.createElement("div",{className:"jobs-list",dangerouslySetInnerHTML:{__html:e.text}}))}function f(e){return h.a.createElement("div",{className:"salary-wrapper"},h.a.createElement("h3",null,"Salary"),h.a.createElement("div",{className:"salary-list",dangerouslySetInnerHTML:{__html:e.text}}))}function d(e){const t=e.details.metaData.companys?h.a.createElement(R,{text:e.details.metaData.companys}):null,a=e.details.metaData.institutions?h.a.createElement(P,{text:e.details.metaData.institutions}):null,n=e.details.metaData.jobT?h.a.createElement(U,{text:e.details.metaData.jobT}):null,r=e.details.metaData.salary?h.a.createElement(H,{text:e.details.metaData.salary}):null,c=e.details.metaData.chart.split("|").map(e=>JSON.parse(e));let s=0;return e.details.metaData.companys&&s++,e.details.metaData.institutions&&s++,e.details.metaData.jobT&&s++,e.details.metaData.salary&&s++,h.a.createElement("div",{className:"destination-leaver"},h.a.createElement("div",{className:"card__details__text"},h.a.createElement("h2",{className:"card__heading"},"Showing data for ",e.details.title),h.a.createElement("p",{className:"card__description"},e.details.metaData.c&&e.details.metaData.c)),h.a.createElement("div",{className:"chart-row chart-row--columns"},c.map((e,t)=>{let a="".concat(e[0].title).concat(t).concat(e[0].id),n=1===c.length;return h.a.createElement(I,{key:a,data:e[0].chart,title:e[0].title,id:e[0].id,chartsLength:n,chartId:parseInt(e[0].id)})})),h.a.createElement("div",{className:"destination-leaver-content","data-length":s},r,t,a,n))}function p(e){return h.a.createElement(J,{details:e.details})}function m(e){const t="resultsVariant"in e.config?"finder__results__list finder__results__list--".concat(e.config.resultsVariant):"finder__results__list";if(e.response&&e.query.facets.level&&e.query.facets.t){const a=0<e.response.bestBets.length||0<e.response.results.length?h.a.createElement("div",{start:e.response.summary.currStart,className:t},h.a.createElement(W,{bestBet:!1,details:e.response.results[0],key:e.response.results[0].docNum,type:e.type,query:e.query})):null,n=h.a.createElement(h.a.Fragment,null,a);return h.a.createElement("div",{className:"finder__results"},n)}return h.a.createElement("div",{className:"finder__results"})}function _(e,t){return e.map(e=>{const a={};return t.get("meta_".concat(e.meta,"_sand"))&&(a[e.meta]=t.get("meta_".concat(e.meta,"_sand"))),a}).reduce((e,t)=>Object.assign(e,t))}function y(e){const t=new URLSearchParams(window.location.search),a={collection:e.config.collection,facets:0<e.config.facetLabels.length?_(e.config.facetLabels,t):{},fixedFacets:e.config.fixedFacets,interacted:!1,misspelling:null,numRanks:t.get("num_ranks")||e.config.numRanks,query:t.get("query")||"",sortType:t.get("query")?"":t.get("sort")||e.config.sort[0].type,startRank:t.get("start_rank")||1},n=Object.freeze({bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}}),[r,c]=Object(g.useState)(a),[s,l]=Object(g.useState)(n),[i,o]=Object(g.useState)(!0),[u,f]=Object(g.useState)({cancel:()=>{}}),[d,p]=Object(g.useState)(!1);Object(g.useEffect)(()=>{(function(e,t,a,n,r,c){if(window){const s=new URLSearchParams(window.location.search);""===e?s.delete("query"):s.set("query",e),1===t?s.delete("start_rank"):s.set("start_rank",t),n!==c&&""!==n?s.set("sort",n):s.delete("sort"),r.forEach(e=>{a[e.meta]?s.set("meta_".concat(e.meta,"_sand"),a[e.meta]):s.delete("meta_".concat(e.meta,"_sand"))});const l=s.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(l).concat(s.toString()))}})(r.query,r.startRank,r.facets,r.sortType,e.config.facetLabels,e.config.sort[0].type),o(!0),r.interacted&&Y.a.center(e.element.querySelector(".finder__results"),z,-window.innerHeight/G),u.cancel();const[t,a]=Object(j.a)(r.collection,r.fixedFacets,r.query,r.sortType,r.startRank,r.numRanks,r.facets);f({cancel:()=>{a.cancel()}}),t.then(e=>{if(l(e),o(!1),e.spell&&0===e.summary.totalMatching){const t=e.spell.text.split(/\|/)[0].trim(),a=r;a.misspelling=r.query,a.query=t,a.startRank=1,c(a),p(!d)}}).catch(()=>{l(n),o(!1)})},[d]);const m={query:e=>c(e),results:e=>p(e),updateState:d},y=t=>{const a=r;u.cancel(),a.sortType=t?e.config.sort[0].type:a.sortType,a.facets={},a.startRank=1,a.misspelling=null,a.interacted=!0,c(a),p(!d)};return h.a.createElement("form",{className:0<e.config.facetLabels.length?"finder":"finder finder--nofilters",onSubmit:e=>{e.preventDefault()}},0<e.config.facetLabels.length&&h.a.createElement(h.a.Fragment,null,h.a.createElement(A,{config:e.config,query:r,response:s,update:m,updating:i,summariseAs:e.config.summariseAs,clear:y}),h.a.createElement("div",{className:"wrapper--finder__filters--desktop"},h.a.createElement(q,{config:e.config,query:r,response:s,update:m,clear:y}))),h.a.createElement("div",{className:"wrapper--destination-leavers-HE__info-text"},h.a.createElement("p",null,"If you do not see the course you are interested in, please contact the"," ",h.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details")),h.a.createElement(B,{clear:y,config:e.config,query:r,response:s,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:m,updating:i}))}a.r(t);var g=a(0),h=a.n(g),b=a(25),v=(a(4),a(24),a(83),a(10),a(26),a(3),a(5),a(53),a(1)),E=a.n(v),j=a(6);n.propTypes={facet:E.a.object,query:E.a.object,responseFacet:E.a.arrayOf(E.a.object),update:E.a.object,dependencies:E.a.arrayOf(E.a.object)};var w=n,k=a(18),N=a(16),O=a(2);r.propTypes={config:E.a.object,query:E.a.object,response:E.a.object,update:E.a.object,clear:E.a.func};var q=r,S=a(33),T=a(34);c.propTypes={config:E.a.object,query:E.a.object,response:E.a.object,update:E.a.object,clear:E.a.func};var x=c,L=a(17),C=a.n(L),F=a(21);let M=null;const D=()=>M;s.propTypes={config:E.a.object,query:E.a.object,response:E.a.object,update:E.a.object,clear:E.a.func,updating:E.a.bool,summariseAs:E.a.object};var A=s;a(14);l.propTypes={data:E.a.array,title:E.a.string,chartsLength:E.a.bool,chartId:E.a.number};var I=l;i.propTypes={data:E.a.array,title:E.a.string,text:E.a.string};var R=i;o.propTypes={data:E.a.array,title:E.a.string,text:E.a.string};var P=o;u.propTypes={data:E.a.array,title:E.a.string,text:E.a.string};var U=u;f.propTypes={data:E.a.array,title:E.a.string,text:E.a.string};var H=f;d.propTypes={details:E.a.object};var J=d;p.propTypes={details:E.a.object,query:E.a.object,type:E.a.string};var W=p;m.propTypes={clear:E.a.func,query:E.a.object,response:E.a.object,summariseAs:E.a.object,type:E.a.string,update:E.a.object,updating:E.a.bool};var B=m,V=a(9),Y=a.n(V);const z=Object(O.l)()?0:1e3,G=10;y.propTypes={config:E.a.object,element:E.a.object},document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".wrapper--destination-leavers-HE");e&&Array.from(e).forEach(e=>{Object(j.b)(e.dataset.config).then(t=>{Object(b.render)(h.a.createElement(y,{config:t,element:e}),e)})})}})},33:function(e,t,a){"use strict";function n(e){const t=Math.random().toString(16).slice(-4),a=e.facet.meta in e.query.facets,n=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(t=>t.data.toLowerCase()===e.facet.checkedValue.toLowerCase());if(n&&n[0]&&0<n[0].count){const r=()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),a?delete t.facets[e.facet.meta]:t.facets[e.facet.meta]=e.facet.checkedValue,t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)};return i.a.createElement("div",{className:"finder__filter finder__checkbox"},i.a.createElement("input",{type:"checkbox",id:"meta_".concat(e.facet.meta,"_sand--").concat(t),name:"meta_".concat(e.facet.meta,"_sand"),value:e.facet.checkedValue,onChange:()=>r(),checked:a}),i.a.createElement("div",{className:"finder__checkbox__indicator finder__checkbox__indicator","aria-hidden":"true",onClick:()=>r()},a?i.a.createElement("span",{className:"fa fa-fw fas fa-check icon"}):null),i.a.createElement("label",{className:"finder__filters__label--always",htmlFor:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.name,!a&&n&&" ("+n[0].count+")"))}return null}var r=a(4),c=(a.n(r),a(10)),s=(a.n(c),a(5)),l=(a.n(s),a(0)),i=a.n(l),o=a(1),u=a.n(o);n.propTypes={facet:u.a.object,query:u.a.object,responseFacet:u.a.arrayOf(u.a.object),update:u.a.object,dependencies:u.a.arrayOf(u.a.object)},t.a=n},34:function(e,t,a){"use strict";function n(e){return e.query.facets[e.facet.meta]?l.a.createElement("div",{className:"finder__filter finder__tag"},l.a.createElement("button",{onClick:()=>(()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),delete t.facets[e.facet.meta],t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)})(),type:"button"},l.a.createElement("span",{className:"fa-fw far fa-times icon","aria-hidden":"true"}),l.a.createElement("span",{className:"finder__tag__text"},l.a.createElement("span",{className:"sr-only"},"Remove filter for "),e.facet.name,":"," ",e.facet.values.filter(t=>t.data.toLowerCase()===e.query.facets[e.facet.meta].toLowerCase())[0].label))):null}var r=a(4),c=(a.n(r),a(5)),s=(a.n(c),a(0)),l=a.n(s),i=a(1),o=a.n(i);n.propTypes={facet:o.a.object,query:o.a.object,responseFacet:o.a.arrayOf(o.a.object),update:o.a.object,dependencies:o.a.arrayOf(o.a.object)},t.a=n},6:function(e,t,a){"use strict";function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t,a=1;a<arguments.length;a++)t=null==arguments[a]?{}:arguments[a],a%2?n(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}));return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t,a,n,c,s,l,i,o){const f={};a.forEach(e=>{f["".concat(e.name)]=e.value});const y={};t.forEach(e=>{y["meta_".concat(e.meta,"_sand")]=e.value});const g={};Object.keys(i).forEach(e=>g["meta_".concat(e,"_sand")]=i[e]);const b=u.a.CancelToken.source(),v={baseURL:m,cancelToken:b.token,httpsAgent:new d.a.Agent({keepAlive:!0}),url:_,timeout:h,params:r(r(r(r({},f),y),g),{},{collection:e,num_ranks:l,query:n,sort:c||"",start_rank:s,events:o||""})};return[Object(p.b)(v),b]}function l(e,t){const a=u.a.CancelToken.source(),n={baseURL:m,cancelToken:a.token,url:y,timeout:h,params:{collection:e,partial_query:t,show:g}};return[Object(p.b)(n),a]}function i(e){return Object(p.b)({timeout:h,url:e})}a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i}));var o=a(7),u=a.n(o),f=a(36),d=a.n(f),p=a(2);const m="https://www.city.ac.uk/web-services",_="/funnelback-find",y="/funnelback-suggest",g=100,h=3e4},67:function(){},68:function(){}});