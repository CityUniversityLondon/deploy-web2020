!function(e){function t(t){for(var r,o,c=t[0],s=t[1],a=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n,o=u[t],c=!0,s=1;s<o.length;s++)n=o[s],0!==i[n]&&(c=!1);c&&(u.splice(t--,1),e=r(r.s=o[0]))}return e}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var o={},i={9:0},u=[];r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var f=s;u.push([170,0,1]),n()}({170:function(e,t,n){e.exports=n(171)},171:function(e,t,n){"use strict";n.r(t);var r=n(172),o=(n.n(r),n(70));n.n(o);const i="city-web2020",u=["/__data/assets/git_bridge/0005/440879/main/js/main.js","/__data/assets/git_bridge/0005/440879/main/css/main.css","/","/404"];self.addEventListener("install",(function(e){e.waitUntil(caches.open(i).then((function(e){return e.addAll(u)})))})),self.addEventListener("fetch",(function(e){"GET"===e.request.method&&0===e.request.url.indexOf(window.location.origin)&&e.respondWith(caches.match(e.request).then((function(t){if(t)return t;const n=e.request.clone();return fetch(n,{credentials:"include"}).then((function(t){if(!t||200!==t.status||"basic"!==t.type)return t;const n=t.clone();return caches.open(i).then((function(t){t.put(e.request,n)})),t}))})))}))}});