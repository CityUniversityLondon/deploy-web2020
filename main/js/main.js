!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=c(),!!0){var i=window.Cookies,a=window.Cookies=c();a.noConflict=function(){return window.Cookies=i,a}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,o,c){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(c=e({path:"/"},r.defaults,c)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*c.expires),c.expires=a}c.expires=c.expires?c.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var s in c)c[s]&&(u+="; "+s,!0!==c[s]&&(u+="="+c[s]));return document.cookie=t+"="+o+u}t||(i={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,m=0;m<f.length;m++){var d=f[m].split("="),p=d.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var y=d[0].replace(l,decodeURIComponent);if(p=n.read?n.read(p,y):n(p,y)||p.replace(l,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===y){i=p;break}t||(i[y]=p)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(2),i=n.n(c),a=n(3),u=n.n(a),s=n(0),f=n.n(s),l="citytheme";var m={launch:function(e){Array.from(e.getElementsByTagName("button")).forEach(function(e){return e.onclick=function(){Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className=e.className.split(/\s+/).filter(function(e){return e.indexOf("theme--")>=0}).toString()}),f.a.remove(l),"clear"!==e.dataset.action&&function(e){var t="theme--"+e;Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className.indexOf(t)<0&&e.className.concat(" ",t)}),f.a.set(l,e,{domain:".city.ac.uk",expires:365,path:"/",secure:!0})}(e.dataset.theme)}})},className:"theme-switcher"},d=[i.a,o.a,u.a,m];function p(e){try{e()}catch(e){console&&console.error&&console.error(e)}}function y(e){if("function"==typeof e)p(e);else if(e.className){var t=e.className,n=e.launch;Array.from(document.getElementsByClassName(t)).filter(function(e){return!e.className.indexOf(t+"-no-js")}).forEach(function(e){return p(function(){return n(e)})})}}document.addEventListener("DOMContentLoaded",function(){Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className=e.className.split(/\s+/).filter(function(e){return"no-js"!==e}).concat("js").join(" ")}),d.forEach(y)})}]);