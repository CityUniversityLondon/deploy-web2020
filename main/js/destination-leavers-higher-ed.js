!function(e){function t(t){for(var n,s,l=t[0],i=t[1],o=t[2],f=0,d=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={5:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=i;c.push([229,1,0,4,3,2]),a()}({12:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),s=a.n(c);function l(e){const t=Math.random().toString(16).slice(-4),a=e.config.sort.filter(t=>""!==t.type||""!==e.query.query||Object.keys(e.query.facets).length>0||""===e.query.sortType);return a.length>1?r.a.createElement("div",{className:"finder__select--sort finder__select".concat(e.query.sortType!==e.config.sort[0].type?" finder__select--selected":"")},r.a.createElement("label",{className:"finder__select__overline",htmlFor:"sort--".concat(t)},"Sort by"),r.a.createElement("select",{name:"sort",id:"sort--".concat(t),onChange:t=>(t=>{const a=e.query;a.sortType=t,a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:e.query.sortType},a.map((e,t)=>r.a.createElement("option",{key:t,value:e.type},e.label)))):null}l.propTypes={config:s.a.object,query:s.a.object,update:s.a.object},t.a=l},14:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),s=a.n(c);function l(e){return r.a.createElement("button",{className:"finder__reset",type:"button",onClick:()=>{e.clear(e.resetSort)}},r.a.createElement("span",{className:"far fa-fw fa-times icon"}),r.a.createElement("span",{className:"finder__reset__text"},"Reset"))}l.propTypes={clear:s.a.func,resetSort:s.a.bool},t.a=l},2:function(e,t,a){"use strict";a.d(t,"p",(function(){return l})),a.d(t,"m",(function(){return i})),a.d(t,"l",(function(){return o})),a.d(t,"i",(function(){return u})),a.d(t,"r",(function(){return f})),a.d(t,"k",(function(){return d})),a.d(t,"j",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"a",(function(){return _})),a.d(t,"h",(function(){return y})),a.d(t,"o",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"d",(function(){return v})),a.d(t,"q",(function(){return E})),a.d(t,"b",(function(){return j})),a.d(t,"f",(function(){return w})),a.d(t,"n",(function(){return k})),a(3),a(10),a(4);var n=a(7),r=a.n(n),c=a(0),s=a.n(c);function l(e){return"true"===e}function i(e,t,a){const n=a?(r=t,e=>e.indexOf(r)<0):(e=>t=>t!==e)(t);var r;e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function o(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function u(e){return 0!==e.offsetHeight&&0!==e.offsetWidth}function f(e){return e.getBoundingClientRect().top>=0&&e.getBoundingClientRect().top<=window.innerHeight}function d(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function m(e){if(Object.keys(e).length>0){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function p(e,t,a,n,r,c){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:c})}function _(e,t){t.forEach(t=>e.appendChild(t))}function y(e=432){if(window.innerWidth<e)return!0}function g(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function h(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function b(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function v(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function E(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function j(e){return r()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: ".concat(e.status)}).catch(e=>{r.a.isCancel(e)||p("jsError","JavaScript error","Line ".concat(e.lineNumber," – ").concat(e.message),"axiosRequest ".concat(e.fileName," (").concat(window.location,")"),!0)})}function w(e){return s.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),s.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11||e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}function k(e){switch(e){case"tiny":return 375;case"mobile":return 432;case"tablet":return 768;case"between":return 900;case"small":return 1024;case"desktop":default:return 1280;case"large":return 1440;case"1080":return 1920;case"4k":return 3840;case"8k":return 7680}}},229:function(e,t,a){e.exports=a(233)},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=(a(3),a(22),a(4),a(48),a(1)),l=a.n(s),i=a(5);function o(e){const t=Math.random().toString(16).slice(-4),a=e.query.facets[e.facet.meta]||"",n=e.facet.values.reduce((e,t)=>[...e,t],[]),c=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values?e.responseFacet[0].categories[0].values.reduce((e,t)=>[...e,t.data],[]):[],s=n.map(e=>e.data).filter(e=>c.indexOf(e.toLowerCase())<0).length;return e.facet.values.length>s?r.a.createElement("div",{className:"finder__filter finder__select ".concat(a&&"finder__select--selected")},r.a.createElement("label",{htmlFor:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.name),r.a.createElement("select",{name:e.facet.name,id:"meta_".concat(e.facet.meta,"_sand--").concat(t),onChange:t=>(t=>{const a=e.query;e.dependencies.map(e=>{delete a.facets[e.meta]}),t?a.facets[e.facet.meta]=t:delete a.facets[e.facet.meta],a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:a},r.a.createElement("option",{value:"",id:"meta".concat(e.facet.meta,"all"),name:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.noSelection),e.facet.values.map((t,n)=>{const c=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(e=>e.data.toLowerCase()===t.data.toLowerCase());return a.toLowerCase()===t.data.toLowerCase()||c&&c[0]?r.a.createElement("option",{key:n,value:t.data.toLowerCase()},t.label):null}))):null}o.propTypes={facet:l.a.object,query:l.a.object,responseFacet:l.a.arrayOf(l.a.object),update:l.a.object,dependencies:l.a.arrayOf(l.a.object)};var u=o,f=a(14),d=a(12),m=a(2);function p(e){const t=Object.keys(e.query.facets).length>0?r.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},r.a.createElement(f.a,{clear:e.clear,resetSort:!1})):null,a=Object.keys(e.query.facets).length>0||e.query.sortType!==e.config.sort[0].type?r.a.createElement(f.a,{clear:e.clear,resetSort:!0}):null,n=e.config.sort.length>1&&e.config.displaySort?r.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},r.a.createElement(d.a,{config:e.config,query:e.query,update:e.update})):null;return r.a.createElement("div",{className:"finder__filters"},r.a.createElement("h2",{className:"finder__filters__heading"},r.a.createElement("span",{className:"finder__filters__heading__text"},r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Use the filter to show data that is of interest to you"),a),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>function(e,t){const a=Object.keys(t);return!e.dependency||a.indexOf(e.dependency)>=0&&""!==t[e.dependency]}(t,e.query.facets)?"select"===t.type?r.a.createElement(u,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)}):void Object(m.g)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0):null),r.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}p.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func};var _=p,y=a(27),g=a(28);function h(e){const t=Object.keys(e.query.facets).length>0?r.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},r.a.createElement(f.a,{clear:e.clear,resetSort:!1})):null,a=Object.keys(e.query.facets).length>0||e.query.sortType!==e.config.sort[0].type?r.a.createElement(f.a,{clear:e.clear,resetSort:!0}):null,n=e.config.sort.length>1&&e.config.displaySort?r.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},r.a.createElement(d.a,{config:e.config,query:e.query,update:e.update})):null;return r.a.createElement("div",{className:"finder__filters"},r.a.createElement("h2",{className:"finder__filters__heading"},r.a.createElement("span",{className:"finder__filters__heading__text"},r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Filter ".concat(e.config.summariseAs.plural)),a),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!e.dependency||a.indexOf(e.dependency)>=0&&""!==t[e.dependency]}(t,e.query.facets))return null;switch(t.type){case"select":return r.a.createElement(u,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"checkbox":return r.a.createElement(y.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"tag":return r.a.createElement(g.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});default:Object(m.g)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0)}}),r.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}h.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func};var b=h,v=a(13),E=a.n(v),j=a(19);let w=null;const k=()=>w;function N(e){const[t,a]=Object(n.useState)(!1),[c,s]=Object(n.useState)({});Object(n.useEffect)(()=>{c.activate||s(E()(k(),{initialFocus:k().querySelector(".wrapper--finder__filters--mobile__apply"),onDeactivate:()=>a(!1),clickOutsideDeactivates:!0})),t?(c.activate&&c.activate(),Object(j.a)(k().querySelector(".wrapper--finder__filters--mobile__filters"))):(c.deactivate&&c.deactivate(),Object(j.b)(k().querySelector(".wrapper--finder__filters--mobile__filters")))},[t,c]);const l=e.response&&e.response.summary&&e.response.summary.totalMatching?"Show Graduate Outcomes":"Close",i=e.config.displaySort?e.config.sort[0].type!==e.query.sortType||Object.keys(e.query.facets).length>0?r.a.createElement("span",null,"Filters"," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type!==e.query.sortType?Object.keys(e.query.facets).length+1:Object.keys(e.query.facets).length,")")):r.a.createElement("span",null,"Filter"):Object.keys(e.query.facets).length>0?r.a.createElement("span",null,"Filters"," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type!==e.query.sortType?Object.keys(e.query.facets).length+1:Object.keys(e.query.facets).length,")")):r.a.createElement("span",null,"Filter"),o=t?null:r.a.createElement("button",{type:"button",className:"wrapper--finder__filters--mobile__toggle","aria-haspopup":!0,"aria-expanded":t,onClick:()=>a(!t),"data-filters-applied":!!(0!==Object.keys(e.query.facets).length||e.config.displaySort&&e.config.sort[0].type!==e.query.sortType)},r.a.createElement("span",null,r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",i));return r.a.createElement("div",{className:"wrapper--finder__filters--mobile","data-open":t,ref:e=>w=e},o,r.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters"},r.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters__content"},r.a.createElement(b,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear}),r.a.createElement("p",{className:"wrapper--finder__filters--mobile__filters__content--text"},"If you do not see the course you are interested in, please contact the"," ",r.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details"))),r.a.createElement("div",{className:"wrapper--finder__filters--mobile__apply"},r.a.createElement("button",{type:"button","aria-expanded":t,onClick:()=>a(!t),disabled:e.updating},0===Object.keys(e.query.facets).length?null:r.a.createElement("span",{className:"far fa-chevron-left icon"}),r.a.createElement("span",{"aria-live":"polite"},e.updating?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},"Updating ",e.summariseAs.plural,"…")):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},e.query.facets.t?l:"Close"))))))}N.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func,updating:l.a.bool,summariseAs:l.a.object};var q=N;function O(e){const t=e.data&&e.data.filter(e=>!(!e[0]||!e[1])).map(e=>[e[0],parseFloat(e[1])||0]);let a=!1,n=!1;100===t[0][1]&&(a=!0),e.chartsLength&&100===t[1][1]&&(n=!0);let c=t.reduce((function(e,t){return e+t[1]}),0),s=0,l=t.map((function(t,l){let i=Math.min(1,t[1]/c),o=2*Math.PI*i,u=o>Math.PI?1:0,f="".concat(e.title).concat(t[0].replace(/\s+/g,"")).concat(t[1]).concat(e.chartId),d=100*Math.sin(s),m=-100*Math.cos(s);s+=o;let p=100*Math.sin(s),_=-100*Math.cos(s),y="M ".concat(d," ").concat(m," A 100 100  0 ").concat(u," ").concat(1," ").concat(p," ").concat(_);return!a&&!n&&l<7?r.a.createElement("path",{key:f,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:y,fill:"none"}):a?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:f,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"}),r.a.createElement("path",{key:f,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"})):n?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:f,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"}),r.a.createElement("path",{key:f,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"})):r.a.createElement("path",{key:f,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:y,fill:"none",stroke:"url(#striped)"})})),i=t.map((function(t,a){let n=Math.round(100*(t[1]+Number.EPSILON))/100,s="".concat(t[0],": ").concat(Math.round(100*(100*n/c+Number.EPSILON))/100,"%"),l="legend-".concat(e.title).concat(t[0].replace(/\s+/g,"")).concat(t[1]).concat(e.chartId);return 7===a?r.a.createElement("div",{key:l,className:"chart__legend__item"},r.a.createElement("span",{className:"chart__legend__item__icon"},r.a.createElement("svg",{height:"23",width:"23"},r.a.createElement("circle",{cx:"12",cy:"10",r:"9",stroke:"black",strokeWidth:"1",fill:"url(#striped)"}))),r.a.createElement("span",{className:"chart__legend__item__label"},s)):r.a.createElement("div",{key:l,className:"chart__legend__item"},r.a.createElement("span",{className:"fa fa-circle chart__legend__item__icon","aria-hidden":"true"}),r.a.createElement("span",{className:"chart__legend__item__label"},s))}));return r.a.createElement("div",{className:"chart"},r.a.createElement("h3",{className:"chart__title"},e.title),r.a.createElement("div",{className:"chart__columns"},r.a.createElement("div",{className:"chart--piechart animate animate-svg"},r.a.createElement("div",{className:"chart--pie-chart__svg-wrapper"},r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200"},r.a.createElement("g",{transform:"translate(100,100) scale(0.8620689655172413)"},l)))),r.a.createElement("div",{className:"chart__legend"},i)))}a(10),O.propTypes={data:l.a.array,title:l.a.string,chartsLength:l.a.bool,chartId:l.a.number};var S=O;function x(e){return r.a.createElement("div",{className:"company-wrapper"},r.a.createElement("h3",null,"Company names"),r.a.createElement("div",{className:"company-list",dangerouslySetInnerHTML:{__html:e.text}}))}x.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var T=x;function L(e){return r.a.createElement("div",{className:"institutions-wrapper"},r.a.createElement("h3",null,"Institutions of further study"),r.a.createElement("div",{className:"institutions-list",dangerouslySetInnerHTML:{__html:e.text}}))}L.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var C=L;function F(e){return r.a.createElement("div",{className:"jobs-wrapper"},r.a.createElement("h3",null,"Jobs titles"),r.a.createElement("div",{className:"jobs-list",dangerouslySetInnerHTML:{__html:e.text}}))}F.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var M=F;function A(e){return r.a.createElement("div",{className:"salary-wrapper"},r.a.createElement("h3",null,"Salary"),r.a.createElement("div",{className:"salary-list",dangerouslySetInnerHTML:{__html:e.text}}))}A.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var I=A;function R(e){const t=e.details.metaData.companys?r.a.createElement(T,{text:e.details.metaData.companys}):null,a=e.details.metaData.institutions?r.a.createElement(C,{text:e.details.metaData.institutions}):null,n=e.details.metaData.jobT?r.a.createElement(M,{text:e.details.metaData.jobT}):null,c=e.details.metaData.salary?r.a.createElement(I,{text:e.details.metaData.salary}):null,s=e.details.metaData.chart.split("|").map(e=>JSON.parse(e));let l=0;return e.details.metaData.companys&&l++,e.details.metaData.institutions&&l++,e.details.metaData.jobT&&l++,e.details.metaData.salary&&l++,r.a.createElement("div",{className:"destination-leaver"},r.a.createElement("div",{className:"card__details__text"},r.a.createElement("h2",{className:"card__heading"},"Showing data for ",e.details.title),r.a.createElement("p",{className:"card__description"},e.details.metaData.c&&e.details.metaData.c)),r.a.createElement("div",{className:"chart-row chart-row--columns"},s.map((e,t)=>{let a="".concat(e[0].title).concat(t).concat(e[0].id),n=1===s.length;return r.a.createElement(S,{key:a,data:e[0].chart,title:e[0].title,id:e[0].id,chartsLength:n,chartId:parseInt(e[0].id)})})),r.a.createElement("div",{className:"destination-leaver-content","data-length":l},c,t,a,n))}R.propTypes={details:l.a.object};var D=R;function P(e){return r.a.createElement(D,{details:e.details})}P.propTypes={details:l.a.object,query:l.a.object,type:l.a.string};var U=P;function H(e){const t="resultsVariant"in e.config?"finder__results__list finder__results__list--".concat(e.config.resultsVariant):"finder__results__list";if(e.response&&e.query.facets.level&&e.query.facets.t){const a=e.response.bestBets.length>0||e.response.results.length>0?r.a.createElement("div",{start:e.response.summary.currStart,className:t},r.a.createElement(U,{bestBet:!1,details:e.response.results[0],key:e.response.results[0].docNum,type:e.type,query:e.query})):null,n=r.a.createElement(r.a.Fragment,null,a);return r.a.createElement("div",{className:"finder__results"},n)}return r.a.createElement("div",{className:"finder__results"})}H.propTypes={clear:l.a.func,query:l.a.object,response:l.a.object,summariseAs:l.a.object,type:l.a.string,update:l.a.object,updating:l.a.bool};var J=H,W=a(6),B=a.n(W);const V=Object(m.l)()?0:1e3;function Y(e,t){return e.map(e=>{const a={};return t.get("meta_".concat(e.meta,"_sand"))&&(a[e.meta]=t.get("meta_".concat(e.meta,"_sand"))),a}).reduce((e,t)=>Object.assign(e,t))}function z(e){const t=new URLSearchParams(window.location.search),a={collection:e.config.collection,facets:e.config.facetLabels.length>0?Y(e.config.facetLabels,t):{},fixedFacets:e.config.fixedFacets,fixedParameters:e.config.fixParameters?e.config.fixParameters:[],interacted:!1,misspelling:null,numRanks:t.get("num_ranks")||e.config.numRanks,query:t.get("query")||"",sortType:t.get("query")?"":t.get("sort")||e.config.sort[0].type,startRank:t.get("start_rank")||1},c=Object.freeze({bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}}),[s,l]=Object(n.useState)(a),[o,u]=Object(n.useState)(c),[f,d]=Object(n.useState)(!0),[m,p]=Object(n.useState)({cancel:()=>{}}),[y,g]=Object(n.useState)(!1);Object(n.useEffect)(()=>{!function(e,t,a,n,r,c){if(window){const s=new URLSearchParams(window.location.search);""!==e?s.set("query",e):s.delete("query"),1!==t?s.set("start_rank",t):s.delete("start_rank"),n!==c&&""!==n?s.set("sort",n):s.delete("sort"),r.forEach(e=>{a[e.meta]?s.set("meta_".concat(e.meta,"_sand"),a[e.meta]):s.delete("meta_".concat(e.meta,"_sand"))});const l=s.toString().length?"?":"";window.history.replaceState({},"","".concat(window.location.pathname).concat(l).concat(s.toString()))}}(s.query,s.startRank,s.facets,s.sortType,e.config.facetLabels,e.config.sort[0].type),d(!0),s.interacted&&B.a.center(e.element.querySelector(".finder__results"),V,-window.innerHeight/10),m.cancel();const[t,a]=Object(i.a)(s.collection,s.fixedFacets,s.fixedParameters,s.query,s.sortType,s.startRank,s.numRanks,s.facets);p({cancel:()=>{a.cancel()}}),t.then(e=>{if(u(e),d(!1),e.spell&&0===e.summary.totalMatching){const t=e.spell.text.split(/\|/)[0].trim(),a=s;a.misspelling=s.query,a.query=t,a.startRank=1,l(a),g(!y)}}).catch(()=>{u(c),d(!1)})},[y]);const h={query:e=>l(e),results:e=>g(e),updateState:y},b=t=>{const a=s;m.cancel(),a.sortType=t?e.config.sort[0].type:a.sortType,a.facets={},a.startRank=1,a.misspelling=null,a.interacted=!0,l(a),g(!y)};return r.a.createElement("form",{className:e.config.facetLabels.length>0?"finder":"finder finder--nofilters",onSubmit:e=>{e.preventDefault()}},e.config.facetLabels.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{config:e.config,query:s,response:o,update:h,updating:f,summariseAs:e.config.summariseAs,clear:b}),r.a.createElement("div",{className:"wrapper--finder__filters--desktop"},r.a.createElement(_,{config:e.config,query:s,response:o,update:h,clear:b}))),r.a.createElement("div",{className:"wrapper--destination-leavers-HE__info-text"},r.a.createElement("p",null,"If you do not see the course you are interested in, please contact the"," ",r.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details")),r.a.createElement(J,{clear:b,config:e.config,query:s,response:o,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:h,updating:f}))}z.propTypes={config:l.a.object,element:l.a.object};var G=z;document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".wrapper--destination-leavers-HE");e&&Array.from(e).forEach(e=>{Object(i.b)(e.dataset.config).then(t=>{Object(c.render)(r.a.createElement(G,{config:t,element:e}),e)})})}})},27:function(e,t,a){"use strict";a(3),a(4);var n=a(0),r=a.n(n),c=a(1),s=a.n(c);function l(e){const t=Math.random().toString(16).slice(-4),a=e.facet.meta in e.query.facets,n=e.responseFacet[0]&&e.responseFacet[0].categories[0]&&e.responseFacet[0].categories[0].values.filter(t=>t.data.toLowerCase()===e.facet.checkedValue.toLowerCase());if(n&&n[0]&&n[0].count>0){const c=()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),a?delete t.facets[e.facet.meta]:t.facets[e.facet.meta]=e.facet.checkedValue,t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)};return r.a.createElement("div",{className:"finder__filter finder__checkbox"},r.a.createElement("input",{type:"checkbox",id:"meta_".concat(e.facet.meta,"_sand--").concat(t),name:"meta_".concat(e.facet.meta,"_sand"),value:e.facet.checkedValue,onChange:()=>c(),checked:a}),r.a.createElement("div",{className:"finder__checkbox__indicator finder__checkbox__indicator","aria-hidden":"true",onClick:()=>c()},a?r.a.createElement("span",{className:"fa fa-fw fas fa-check icon"}):null),r.a.createElement("label",{className:"finder__filters__label--always",htmlFor:"meta_".concat(e.facet.meta,"_sand--").concat(t)},e.facet.name,!a&&n&&" ("+n[0].count+")"))}return null}l.propTypes={facet:s.a.object,query:s.a.object,responseFacet:s.a.arrayOf(s.a.object),update:s.a.object,dependencies:s.a.arrayOf(s.a.object)},t.a=l},28:function(e,t,a){"use strict";a(3),a(4);var n=a(0),r=a.n(n),c=a(1),s=a.n(c);function l(e){return e.query.facets[e.facet.meta]?r.a.createElement("div",{className:"finder__filter finder__tag"},r.a.createElement("button",{onClick:()=>(()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),delete t.facets[e.facet.meta],t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)})(),type:"button"},r.a.createElement("span",{className:"fa-fw far fa-times icon","aria-hidden":"true"}),r.a.createElement("span",{className:"finder__tag__text"},r.a.createElement("span",{className:"sr-only"},"Remove filter for "),e.facet.name,":"," ",e.facet.values.filter(t=>t.data.toLowerCase()===e.query.facets[e.facet.meta].toLowerCase())[0].label))):null}l.propTypes={facet:s.a.object,query:s.a.object,responseFacet:s.a.arrayOf(s.a.object),update:s.a.object,dependencies:s.a.arrayOf(s.a.object)},t.a=l},5:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return d}));var n=a(7),r=a.n(n),c=a(30),s=a.n(c),l=a(2);const i="https://www.city.ac.uk/web-services",o=3e4;function u(e,t,a,n,c,u,f,d,m){const p={};a.forEach(e=>{p["".concat(e.name)]=e.value});const _={};t.forEach(e=>{_["meta_".concat(e.meta,"_sand")]=e.value});const y={};Object.keys(d).forEach(e=>y["meta_".concat(e,"_sand")]=d[e]);const g=r.a.CancelToken.source(),h={baseURL:i,cancelToken:g.token,httpsAgent:new s.a.Agent({keepAlive:!0}),url:"/funnelback-find",timeout:o,params:{...p,..._,...y,collection:e,num_ranks:f,query:n,sort:c||"",start_rank:u,events:m||""}};return[Object(l.b)(h),g]}function f(e,t){const a=r.a.CancelToken.source(),n={baseURL:i,cancelToken:a.token,url:"/funnelback-suggest",timeout:o,params:{collection:e,partial_query:t,show:100}};return[Object(l.b)(n),a]}function d(e){const t={timeout:o,url:e};return Object(l.b)(t)}},60:function(e,t){},61:function(e,t){}});