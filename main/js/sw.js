!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(n){return t[n]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=54)}([function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,n,e){var r=e(11),o=e(17);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(18)("wks"),o=e(9),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n,e){var r=e(0),o=e(1),i=e(8),u=e(9)("src"),c="toString",f=Function[c],a=(""+f).split(c);e(10).inspectSource=function(t){return f.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]===e||(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(n+""))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,c,function(){return"function"==typeof this&&this[u]||f.call(this)})},function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+e).toString(36))}},function(t){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,n,e){var r=e(12),o=e(22),i=e(23),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},,function(t,n,e){"use strict";var r=e(1),o=e(7),i=e(5),u=e(13),c=e(2);t.exports=function(t,n,e){var f=c(t),a=e(u,f,""[t]),s=a[0],l=a[1];i(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,s),r(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,e){var r=e(3),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(10),o=e(0),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,n){return u[t]||(u[t]=void 0===n?{}:n)})("versions",[]).push({version:r.version,mode:e(19)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t){t.exports=!1},function(t,n,e){e(15)("match",1,function(t,n,e){return[function(e){"use strict";var r=t(this),o=void 0==e?void 0:e[n];return void 0===o?new RegExp(e)[n](r+""):o.call(e,r)},e]})},,function(t,n,e){t.exports=!e(4)&&!e(5)(function(){return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){t.exports=e(55)},function(t,n,e){"use strict";e.r(n);var r=e(20);e.n(r);const o="city-web-2020",i=["/__data/assets/git_bridge/0005/440879/main/js/main.js","/__data/assets/git_bridge/0005/440879/main/css/main.css","/","/404"];self.addEventListener("install",function(t){t.waitUntil(caches.open(o).then(function(t){return t.addAll(i)}))}),self.addEventListener("fetch",function(t){"GET"===t.request.method&&0===t.request.url.indexOf(location.protocol+"//"+location.hostname)&&t.respondWith(caches.match(t.request).then(function(n){if(n)return n;const e=t.request.clone();return fetch(e,{credentials:"include"}).then(function(n){if(!n||200!==n.status||"basic"!==n.type)return n;const e=n.clone();return caches.open(o).then(function(n){n.put(t.request,e)}),n})}))})}]);