!function(e){function t(t){for(var r,o,a=t[0],c=t[1],s=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n,o=u[t],a=!0,c=1;c<o.length;c++)n=o[c],0!==i[n]&&(a=!1);a&&(u.splice(t--,1),e=r(r.s=o[0]))}return e}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var o={},i={9:0},u=[];r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var f=c;u.push([216,1,0]),n()}({216:function(e,t,n){e.exports=n(217)},217:function(e,t,n){"use strict";n.r(t);var r=n(13),o=(n.n(r),n(138)),i=(n.n(o),n(82)),u=(n.n(i),"city-web2020"),a=["/__data/assets/git_bridge/0005/440879/main/js/main.js","/__data/assets/git_bridge/0005/440879/main/css/main.css","/","/404"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(u).then((function(e){return e.addAll(a)})))})),self.addEventListener("fetch",(function(e){"GET"===e.request.method&&0===e.request.url.indexOf(window.location.origin)&&e.respondWith(caches.match(e.request).then((function(t){if(t)return t;var n=e.request.clone();return fetch(n,{credentials:"include"}).then((function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open(u).then((function(t){t.put(e.request,n)})),t}))})))}))}});