!function(e){function t(t){for(var n,c,l=t[0],i=t[1],o=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={6:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=i;s.push([202,1,0,3,2,4]),a()}({11:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(1),c=a.n(s);function l(e){const t=Math.random().toString(16).slice(-4),a=e.config.sort.filter(t=>""!==t.type||""!==e.query.query||Object.keys(e.query.facets).length>0||""===e.query.sortType);return a.length>1?r.a.createElement("div",{className:"finder__select--sort finder__select"+(e.query.sortType!==e.config.sort[0].type?" finder__select--selected":"")},r.a.createElement("label",{className:"finder__select__overline",htmlFor:"sort--"+t},"Sort by"),r.a.createElement("select",{name:"sort",id:"sort--"+t,onChange:t=>(t=>{const a=e.query;a.sortType=t,a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:e.query.sortType},a.map((e,t)=>r.a.createElement("option",{key:t,value:e.type},e.label)))):null}l.propTypes={config:c.a.object,query:c.a.object,update:c.a.object},t.a=l},13:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(1),c=a.n(s);function l(e){return r.a.createElement("button",{className:"finder__reset",type:"button",onClick:()=>{e.clear(e.resetSort)}},r.a.createElement("span",{className:"far fa-fw fa-times icon"}),r.a.createElement("span",{className:"finder__reset__text"},"Reset"))}l.propTypes={clear:c.a.func,resetSort:c.a.bool},t.a=l},2:function(e,t,a){"use strict";a.d(t,"q",(function(){return l})),a.d(t,"n",(function(){return i})),a.d(t,"m",(function(){return o})),a.d(t,"j",(function(){return u})),a.d(t,"s",(function(){return d})),a.d(t,"l",(function(){return f})),a.d(t,"k",(function(){return m})),a.d(t,"h",(function(){return p})),a.d(t,"a",(function(){return _})),a.d(t,"i",(function(){return y})),a.d(t,"p",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"d",(function(){return v})),a.d(t,"r",(function(){return E})),a.d(t,"b",(function(){return j})),a.d(t,"g",(function(){return w})),a.d(t,"f",(function(){return k})),a.d(t,"o",(function(){return N})),a(3),a(7);var n=a(5),r=a.n(n),s=a(0),c=a.n(s);function l(e){return"true"===e}function i(e,t,a){const n=a?(r=t,e=>e.indexOf(r)<0):(e=>t=>t!==e)(t);var r;e.className=e.className.split(/\s+/).filter(e=>n(e)).join(" ")}function o(){return!!window.matchMedia("(prefers-reduced-motion: reduce)").matches}function u(e){return 0!==e.offsetHeight&&0!==e.offsetWidth}function d(e){return e.getBoundingClientRect().top>=0&&e.getBoundingClientRect().top<=window.innerHeight}function f(e){const t={};return e.substr(1).split("&").forEach(e=>{const[a,n]=e.split("=");t[a]=n}),t}function m(e){if(Object.keys(e).length>0){let t="?";for(const a in e)1!==t.length&&(t+="&"),t+=a+"="+e[a];return t}return""}function p(e,t,a,n,r,s){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:e,eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteractionHit:s})}function _(e,t){t.forEach(t=>e.appendChild(t))}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:432;const t=window.innerWidth;if(t<e)return!0}function g(e){let t=[];for(let a=e.length>>>0;a--;)t[a]=e[a];return t}function h(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){let t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}function b(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function v(e,t){let a=document.createElement(e);return t.map((function(e){"content"===e.label?a.appendChild(document.createTextNode(e.val)):"html"===e.label?a.innerHTML=e.val:a.setAttribute(e.label,e.val)})),a}function E(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function j(e){return r()(e).then(e=>{if(200===e.status)return e.data;throw"Bad response: "+e.status}).catch(e=>{r.a.isCancel(e)||p("jsError","JavaScript error",`Line ${e.lineNumber} – ${e.message}`,`axiosRequest ${e.fileName} (${window.location})`,!0)})}function w(e){const t=new Date(e);return c.a.createElement("time",{dateTime:`${t.getHours()?t.getHours():"00"}:${t.getMinutes()?t.getMinutes():"00"}`},t.getHours()?t.getHours():"00",":",t.getMinutes()?t.getMinutes():"00")}function k(e){return c.a.createElement("time",{dateTime:e.toISOString().split("T")[0]},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],", ",e.getUTCDate(),c.a.createElement("sup",null,function(e){const t=e.toString().slice(-1);return e>=11&&e<=13?"th":"1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th"}(e.getUTCDate()))," ",["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()]," ",e.getUTCFullYear())}function N(e){switch(e){case"tiny":return 375;case"mobile":return 432;case"tablet":return 768;case"between":return 900;case"small":return 1024;case"desktop":default:return 1280;case"large":return 1440;case"1080":return 1920;case"4k":return 3840;case"8k":return 7680}}},202:function(e,t,a){e.exports=a(206)},206:function(e,t,a){"use strict";a.r(t),a(3);var n=a(0),r=a.n(n),s=a(16),c=(a(21),a(1)),l=a.n(c),i=a(4);function o(e){const t=Math.random().toString(16).slice(-4),a=e.query.facets[e.facet.meta]||"",n=e.facet.values.reduce((e,t)=>[...e,t],[]),s=e.responseFacet[0]&&e.responseFacet[0].allValues?e.responseFacet[0].allValues.reduce((e,t)=>[...e,t.data],[]):[],c=n.map(e=>e.data).filter(e=>s.indexOf(e.toLowerCase())<0).length;return e.facet.values.length>c?r.a.createElement("div",{className:"finder__filter finder__select "+(a&&"finder__select--selected")},r.a.createElement("label",{htmlFor:`meta_${e.facet.meta}_sand--${t}`},e.facet.name),r.a.createElement("select",{name:e.facet.name,id:`meta_${e.facet.meta}_sand--${t}`,onChange:t=>(t=>{const a=e.query;e.dependencies.map(e=>{delete a.facets[e.meta]}),t?a.facets[e.facet.meta]=t:delete a.facets[e.facet.meta],a.startRank=1,a.misspelling=null,a.interacted=!0,e.update.query(a),e.update.results(!e.update.updateState)})(t.target.value),value:a},r.a.createElement("option",{value:"",id:`meta${e.facet.meta}all`,name:`meta_${e.facet.meta}_sand--${t}`},e.facet.noSelection),e.facet.values.map((t,n)=>{const s=e.responseFacet[0]&&e.responseFacet[0].allValues&&e.responseFacet[0].allValues.filter(e=>e.data.toLowerCase()===t.data.toLowerCase());return a.toLowerCase()===t.data.toLowerCase()||s&&s[0]?r.a.createElement("option",{key:n,value:t.data.toLowerCase()},t.label):null}))):null}o.propTypes={facet:l.a.object,query:l.a.object,responseFacet:l.a.arrayOf(l.a.object),update:l.a.object,dependencies:l.a.arrayOf(l.a.object)};var u=o,d=a(13),f=a(11),m=a(2);function p(e){const t=Object.keys(e.query.facets).length>0?r.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},r.a.createElement(d.a,{clear:e.clear,resetSort:!1})):null,a=Object.keys(e.query.facets).length>0||e.query.sortType!==e.config.sort[0].type?r.a.createElement(d.a,{clear:e.clear,resetSort:!0}):null,n=e.config.sort.length>1&&e.config.displaySort?r.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},r.a.createElement(f.a,{config:e.config,query:e.query,update:e.update})):null;return r.a.createElement("div",{className:"finder__filters"},r.a.createElement("h2",{className:"finder__filters__heading"},r.a.createElement("span",{className:"finder__filters__heading__text"},r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Use the filter to show data that is of interest to you"),a),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>function(e,t){const a=Object.keys(t);return!e.dependency||a.indexOf(e.dependency)>=0&&""!==t[e.dependency]}(t,e.query.facets)?"select"===t.type?r.a.createElement(u,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)}):void Object(m.h)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0):null),r.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}p.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func};var _=p,y=a(24),g=a(25);function h(e){const t=Object.keys(e.query.facets).length>0?r.a.createElement("div",{className:"finder__filters__reset finder__filters__reset--desktop"},r.a.createElement(d.a,{clear:e.clear,resetSort:!1})):null,a=Object.keys(e.query.facets).length>0||e.query.sortType!==e.config.sort[0].type?r.a.createElement(d.a,{clear:e.clear,resetSort:!0}):null,n=e.config.sort.length>1&&e.config.displaySort?r.a.createElement("div",{className:"wrapper--finder__select--sort--mobile"},r.a.createElement(f.a,{config:e.config,query:e.query,update:e.update})):null;return r.a.createElement("div",{className:"finder__filters"},r.a.createElement("h2",{className:"finder__filters__heading"},r.a.createElement("span",{className:"finder__filters__heading__text"},r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ","Filter "+e.config.summariseAs.plural),a),r.a.createElement("fieldset",null,r.a.createElement("div",{className:"wrapper--finder_filters--filters"},e.config.facetLabels.map(t=>{if(!function(e,t){const a=Object.keys(t);return!e.dependency||a.indexOf(e.dependency)>=0&&""!==t[e.dependency]}(t,e.query.facets))return null;switch(t.type){case"select":return r.a.createElement(u,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"checkbox":return r.a.createElement(y.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});case"tag":return r.a.createElement(g.a,{key:t.meta,facet:t,query:e.query,responseFacet:e.response&&e.response.facets?e.response.facets.filter(e=>e.name===t.funnelbackName):[],update:e.update,dependencies:e.config.facetLabels.filter(e=>e.dependency===t.meta)});default:Object(m.h)("jsError","JavaScript error","finder__filters()","Unknown filter type in finder__filters.js",!0)}}),r.a.createElement("p",{className:"finder__filters__nofilters"},"No filters are valid for the current query."),t,n)))}h.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func};var b=h,v=a(12),E=a.n(v),j=a(17);let w=null;const k=()=>w;function N(e){const[t,a]=Object(n.useState)(!1),[s,c]=Object(n.useState)({});Object(n.useEffect)(()=>{s.activate||c(E()(k(),{initialFocus:k().querySelector(".wrapper--finder__filters--mobile__apply"),onDeactivate:()=>a(!1),clickOutsideDeactivates:!0})),t?(s.activate&&s.activate(),Object(j.a)(k().querySelector(".wrapper--finder__filters--mobile__filters"))):(s.deactivate&&s.deactivate(),Object(j.b)(k().querySelector(".wrapper--finder__filters--mobile__filters")))},[t,s]);const l=e.response&&e.response.summary&&e.response.summary.totalMatching?"Show Graduate Outcomes":"Close",i=e.config.displaySort?e.config.sort[0].type!==e.query.sortType||Object.keys(e.query.facets).length>0?r.a.createElement("span",null,"Filters"," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type!==e.query.sortType?Object.keys(e.query.facets).length+1:Object.keys(e.query.facets).length,")")):r.a.createElement("span",null,"Filter"):Object.keys(e.query.facets).length>0?r.a.createElement("span",null,"Filters"," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__toggle__count"},"(",e.config.sort[0].type!==e.query.sortType?Object.keys(e.query.facets).length+1:Object.keys(e.query.facets).length,")")):r.a.createElement("span",null,"Filter"),o=t?null:r.a.createElement("button",{type:"button",className:"wrapper--finder__filters--mobile__toggle","aria-haspopup":!0,"aria-expanded":t,onClick:()=>a(!t),"data-filters-applied":!!(0!==Object.keys(e.query.facets).length||e.config.displaySort&&e.config.sort[0].type!==e.query.sortType)},r.a.createElement("span",null,r.a.createElement("span",{className:"far fa-sliders-h icon","aria-hidden":"true"})," ",i));return r.a.createElement("div",{className:"wrapper--finder__filters--mobile","data-open":t,ref:e=>w=e},o,r.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters"},r.a.createElement("div",{className:"wrapper--finder__filters--mobile__filters__content"},r.a.createElement(b,{config:e.config,query:e.query,response:e.response,update:e.update,clear:e.clear}),r.a.createElement("p",{className:"wrapper--finder__filters--mobile__filters__content--text"},"If you do not see the course you are interested in, please contact the"," ",r.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details"))),r.a.createElement("div",{className:"wrapper--finder__filters--mobile__apply"},r.a.createElement("button",{type:"button","aria-expanded":t,onClick:()=>a(!t),disabled:e.updating},0===Object.keys(e.query.facets).length?null:r.a.createElement("span",{className:"far fa-chevron-left icon"}),r.a.createElement("span",{"aria-live":"polite"},e.updating?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"fas fa-spinner fa-pulse icon","aria-hidden":"true"})," ",r.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},"Updating ",e.summariseAs.plural,"…")):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"wrapper--finder__filters--mobile__apply__text"},e.query.facets.t?l:"Close"))))))}N.propTypes={config:l.a.object,query:l.a.object,response:l.a.object,update:l.a.object,clear:l.a.func,updating:l.a.bool,summariseAs:l.a.object};var q=N;function O(e){const t=e.data&&e.data.filter(e=>!(!e[0]||!e[1])).map(e=>[e[0],parseFloat(e[1])||0]);let a=!1,n=!1;100===t[0][1]&&(a=!0),e.chartsLength&&100===t[1][1]&&(n=!0);let s=t.reduce((function(e,t){return e+t[1]}),0),c=0,l=t.map((function(t,l){let i=Math.min(1,t[1]/s),o=2*Math.PI*i,u=o>Math.PI?1:0,d=`${e.title}${t[0].replace(/\s+/g,"")}${t[1]}${e.chartId}`,f=100*Math.sin(c),m=-100*Math.cos(c);c+=o;let p=`M ${f} ${m} A 100 100  0 ${u} 1 ${100*Math.sin(c)} ${-100*Math.cos(c)}`;return!a&&!n&&l<7?r.a.createElement("path",{key:d,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:p,fill:"none"}):a?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"}),r.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"})):n?r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",fill:"none"}),r.a.createElement("path",{key:d,strokeWidth:"32",className:"chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",d:"M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",fill:"none"})):r.a.createElement("path",{key:d,strokeWidth:32,className:"chart--piechart__value animate--svg-path",d:p,fill:"none",stroke:"url(#striped)"})})),i=t.map((function(t,a){let n=Math.round(100*(t[1]+Number.EPSILON))/100,c=`${t[0]}: ${Math.round(100*(100*n/s+Number.EPSILON))/100}%`,l=`legend-${e.title}${t[0].replace(/\s+/g,"")}${t[1]}${e.chartId}`;return 7===a?r.a.createElement("div",{key:l,className:"chart__legend__item"},r.a.createElement("span",{className:"chart__legend__item__icon"},r.a.createElement("svg",{height:"23",width:"23"},r.a.createElement("circle",{cx:"12",cy:"10",r:"9",stroke:"black",strokeWidth:"1",fill:"url(#striped)"}))),r.a.createElement("span",{className:"chart__legend__item__label"},c)):r.a.createElement("div",{key:l,className:"chart__legend__item"},r.a.createElement("span",{className:"fa fa-circle chart__legend__item__icon","aria-hidden":"true"}),r.a.createElement("span",{className:"chart__legend__item__label"},c))}));return r.a.createElement("div",{className:"chart"},r.a.createElement("h3",{className:"chart__title"},e.title),r.a.createElement("div",{className:"chart__columns"},r.a.createElement("div",{className:"chart--piechart animate animate-svg"},r.a.createElement("div",{className:"chart--pie-chart__svg-wrapper"},r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200"},r.a.createElement("g",{transform:"translate(100,100) scale(0.8620689655172413)"},l)))),r.a.createElement("div",{className:"chart__legend"},i)))}a(7),O.propTypes={data:l.a.array,title:l.a.string,chartsLength:l.a.bool,chartId:l.a.number};var S=O;function M(e){return r.a.createElement("div",{className:"company-wrapper"},r.a.createElement("h3",null,"Company names"),r.a.createElement("div",{className:"company-list",dangerouslySetInnerHTML:{__html:e.text}}))}M.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var x=M;function T(e){return r.a.createElement("div",{className:"institutions-wrapper"},r.a.createElement("h3",null,"Institutions of further study"),r.a.createElement("div",{className:"institutions-list",dangerouslySetInnerHTML:{__html:e.text}}))}T.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var L=T;function $(e){return r.a.createElement("div",{className:"jobs-wrapper"},r.a.createElement("h3",null,"Jobs titles"),r.a.createElement("div",{className:"jobs-list",dangerouslySetInnerHTML:{__html:e.text}}))}$.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var C=$;function F(e){return r.a.createElement("div",{className:"salary-wrapper"},r.a.createElement("h3",null,"Salary"),r.a.createElement("div",{className:"salary-list",dangerouslySetInnerHTML:{__html:e.text}}))}F.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var I=F;function A(e){return r.a.createElement("div",{className:"jobs-wrapper"},r.a.createElement("h3",null,"Positive outcome"),r.a.createElement("div",{className:"jobs-list",dangerouslySetInnerHTML:{__html:e.text}}))}A.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var R=A;function P(e){return r.a.createElement("div",{className:"jobs-wrapper"},r.a.createElement("h3",null,"Graduate level employment"),r.a.createElement("div",{className:"jobs-list",dangerouslySetInnerHTML:{__html:e.text}}))}P.propTypes={data:l.a.array,title:l.a.string,text:l.a.string};var H=P;function U(e){const t=e.details.listMetadata.companys?r.a.createElement(x,{text:e.details.listMetadata.companys[0]}):null,a=e.details.listMetadata.institutions?r.a.createElement(L,{text:e.details.listMetadata.institutions[0]}):null,n=e.details.listMetadata.jobT?r.a.createElement(C,{text:e.details.listMetadata.jobT[0]}):null,s=e.details.listMetadata.salary?r.a.createElement(I,{text:e.details.listMetadata.salary[0]}):null,c=e.details.listMetadata.gradLevel?r.a.createElement(H,{text:e.details.listMetadata.gradLevel[0]}):null,l=e.details.listMetadata.positiveOutcome?r.a.createElement(R,{text:e.details.listMetadata.positiveOutcome[0]}):null,i=e.details.listMetadata.chart.map(e=>JSON.parse(e));let o=0;return e.details.listMetadata.companys&&o++,e.details.listMetadata.institutions&&o++,e.details.listMetadata.jobT&&o++,e.details.listMetadata.salary&&o++,e.details.listMetadata.gradLevel&&o++,e.details.listMetadata.positiveOutcome&&o++,r.a.createElement("div",{className:"destination-leaver"},r.a.createElement("div",{className:"card__details__text"},r.a.createElement("h2",{className:"card__heading"},"Showing data for ",e.details.title),r.a.createElement("p",{className:"card__description"},e.details.listMetadata.c&&e.details.listMetadata.c[0])),r.a.createElement("div",{className:"chart-row chart-row--columns"},i.map((e,t)=>{let a=`${e[0].title}${t}${e[0].id}`,n=1===i.length;return r.a.createElement(S,{key:a,data:e[0].chart,title:e[0].title,id:e[0].id,chartsLength:n,chartId:parseInt(e[0].id)})})),r.a.createElement("div",{className:"destination-leaver-content","data-length":o},s,t,a,n,c,l))}U.propTypes={details:l.a.object};var V=U;function J(e){return r.a.createElement(V,{details:e.details})}J.propTypes={details:l.a.object,query:l.a.object,type:l.a.string};var W=J;function D(e){const t="resultsVariant"in e.config?"finder__results__list finder__results__list--"+e.config.resultsVariant:"finder__results__list";if(e.response&&e.query.facets.level&&e.query.facets.t){const a=e.response.bestBets.length>0||e.response.results.length>0?r.a.createElement("div",{start:e.response.summary.currStart,className:t},r.a.createElement(W,{bestBet:!1,details:e.response.results[0],key:e.response.results[0].docNum,type:e.type,query:e.query})):null,n=r.a.createElement(r.a.Fragment,null,a);return r.a.createElement("div",{className:"finder__results"},n)}return r.a.createElement("div",{className:"finder__results"})}D.propTypes={clear:l.a.func,query:l.a.object,response:l.a.object,summariseAs:l.a.object,type:l.a.string,update:l.a.object,updating:l.a.bool};var B=D,G=a(6),Y=a.n(G);const z=Object(m.m)()?0:1e3;function K(e,t){return e.map(e=>{const a={};return t.get(`meta_${e.meta}_sand`)&&(a[e.meta]=t.get(`meta_${e.meta}_sand`)),a}).reduce((e,t)=>Object.assign(e,t))}function Q(e){const t=new URLSearchParams(window.location.search),a={collection:e.config.collection,facets:e.config.facetLabels.length>0?K(e.config.facetLabels,t):{},fixedFacets:e.config.fixedFacets,fixedParameters:e.config.fixParameters?e.config.fixParameters:[],interacted:!1,misspelling:null,numRanks:t.get("num_ranks")||e.config.numRanks,query:t.get("query")||"",sortType:t.get("query")?"":t.get("sort")||e.config.sort[0].type,startRank:t.get("start_rank")||1},s=Object.freeze({bestBets:[],facets:[],results:[],spell:null,summary:{currEnd:0,currStart:0,numRanks:0,totalMatching:0}}),[c,l]=Object(n.useState)(a),[o,u]=Object(n.useState)(s),[d,f]=Object(n.useState)(!0),[m,p]=Object(n.useState)({cancel:()=>{}}),[y,g]=Object(n.useState)(!1);Object(n.useEffect)(()=>{!function(e,t,a,n,r,s){if(window){const c=new URLSearchParams(window.location.search);""!==e?c.set("query",e):c.delete("query"),1!==t?c.set("start_rank",t):c.delete("start_rank"),n!==s&&""!==n?c.set("sort",n):c.delete("sort"),r.forEach(e=>{a[e.meta]?c.set(`meta_${e.meta}_sand`,a[e.meta]):c.delete(`meta_${e.meta}_sand`)});const l=c.toString().length?"?":"";window.history.replaceState({},"",`${window.location.pathname}${l}${c.toString()}`)}}(c.query,c.startRank,c.facets,c.sortType,e.config.facetLabels,e.config.sort[0].type),f(!0),c.interacted&&Y.a.center(e.element.querySelector(".finder__results"),z,-window.innerHeight/10),m.cancel();const[t,a]=Object(i.a)(c.collection,c.fixedFacets,c.fixedParameters,c.query,c.sortType,c.startRank,c.numRanks,c.facets);p({cancel:()=>{a.cancel()}}),t.then(e=>{if(u(e),f(!1),e.spell&&0===e.summary.totalMatching){const t=e.spell.text.split(/\|/)[0].trim(),a=c;a.misspelling=c.query,a.query=t,a.startRank=1,l(a),g(!y)}}).catch(()=>{u(s),f(!1)})},[y]);const h={query:e=>l(e),results:e=>g(e),updateState:y},b=t=>{const a=c;m.cancel(),a.sortType=t?e.config.sort[0].type:a.sortType,a.facets={},a.startRank=1,a.misspelling=null,a.interacted=!0,l(a),g(!y)};return r.a.createElement("form",{className:e.config.facetLabels.length>0?"finder":"finder finder--nofilters",onSubmit:e=>{e.preventDefault()}},e.config.facetLabels.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{config:e.config,query:c,response:o,update:h,updating:d,summariseAs:e.config.summariseAs,clear:b}),r.a.createElement("div",{className:"wrapper--finder__filters--desktop"},r.a.createElement(_,{config:e.config,query:c,response:o,update:h,clear:b}))),r.a.createElement("div",{className:"wrapper--destination-leavers-HE__info-text"},r.a.createElement("p",null,"If you do not see the course you are interested in, please contact the"," ",r.a.createElement("a",{href:"/prospective-students/career-development/careers-team"},"careers department")," ","at City for full details")),r.a.createElement(B,{clear:b,config:e.config,query:c,response:o,summariseAs:e.config.summariseAs,type:e.config.resultCard,update:h,updating:d}))}Q.propTypes={config:l.a.object,element:l.a.object};var X=Q;document.addEventListener("DOMContentLoaded",()=>{if(!/(Trident|MSIE)/.test(navigator.userAgent)){const e=document.querySelectorAll(".wrapper--destination-leavers-HE");e&&Array.from(e).forEach(e=>{Object(i.b)(e.dataset.config).then(t=>{Object(s.render)(r.a.createElement(X,{config:t,element:e}),e)})})}})},24:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(1),c=a.n(s);function l(e){const t=Math.random().toString(16).slice(-4),a=e.facet.meta in e.query.facets,n=e.responseFacet[0]&&e.responseFacet[0].allValues&&e.responseFacet[0].allValues.filter(t=>t.data.toLowerCase()===e.facet.checkedValue.toLowerCase());if(n&&n[0]&&n[0].count>0){const s=()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),a?delete t.facets[e.facet.meta]:t.facets[e.facet.meta]=e.facet.checkedValue,t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)};return r.a.createElement("div",{className:"finder__filter finder__checkbox"},r.a.createElement("input",{type:"checkbox",id:`meta_${e.facet.meta}_sand--${t}`,name:`meta_${e.facet.meta}_sand`,value:e.facet.checkedValue,onChange:()=>s(),checked:a}),r.a.createElement("div",{className:"finder__checkbox__indicator finder__checkbox__indicator","aria-hidden":"true",onClick:()=>s()},a?r.a.createElement("span",{className:"fa fa-fw fas fa-check icon"}):null),r.a.createElement("label",{className:"finder__filters__label--always",htmlFor:`meta_${e.facet.meta}_sand--${t}`},e.facet.name,!a&&n&&" ("+n[0].count+")"))}return null}l.propTypes={facet:c.a.object,query:c.a.object,responseFacet:c.a.arrayOf(c.a.object),update:c.a.object,dependencies:c.a.arrayOf(c.a.object)},t.a=l},25:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(1),c=a.n(s);function l(e){return e.query.facets[e.facet.meta]?r.a.createElement("div",{className:"finder__filter finder__tag"},r.a.createElement("button",{onClick:()=>(()=>{const t=e.query;e.dependencies.map(e=>{delete t.facets[e.meta]}),delete t.facets[e.facet.meta],t.startRank=1,t.misspelling=null,t.interacted=!0,e.update.query(t),e.update.results(!e.update.updateState)})(),type:"button"},r.a.createElement("span",{className:"fa-fw far fa-times icon","aria-hidden":"true"}),r.a.createElement("span",{className:"finder__tag__text"},r.a.createElement("span",{className:"sr-only"},"Remove filter for "),e.facet.name,":"," ",e.facet.values.filter(t=>t.data.toLowerCase()===e.query.facets[e.facet.meta].toLowerCase())[0].label))):null}l.propTypes={facet:c.a.object,query:c.a.object,responseFacet:c.a.arrayOf(c.a.object),update:c.a.object,dependencies:c.a.arrayOf(c.a.object)},t.a=l},39:function(e,t){},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(5),r=a.n(n),s=a(22),c=a.n(s),l=a(2);const i="https://www.city.ac.uk/web-services",o=3e4;function u(e,t,a,n,s,u,d,f,m){const p={};a.forEach(e=>{p[""+e.name]=e.value});const _={};t.forEach(e=>{_[`meta_${e.meta}_sand`]=e.value});const y={};Object.keys(f).forEach(e=>y[`meta_${e}_sand`]=f[e]);const g=r.a.CancelToken.source(),h={baseURL:i,cancelToken:g.token,httpsAgent:new c.a.Agent({keepAlive:!0}),url:"/funnelback-16-find",timeout:o,params:{...p,..._,...y,collection:e,num_ranks:d,query:n,sort:s||"",start_rank:u,events:m||""}};return[Object(l.b)(h),g]}function d(e,t){const a=r.a.CancelToken.source(),n={baseURL:i,cancelToken:a.token,url:"/funnelback-16-suggest",timeout:o,params:{collection:e,partial_query:t,show:100}};return[Object(l.b)(n),a]}function f(e){const t={timeout:o,url:e};return Object(l.b)(t)}},40:function(e,t){}});