!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r,a;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){if(void 0===(a="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=a),!0,e.exports=o(),!!0){var i=window.Cookies,c=window.Cookies=o();c.noConflict=function(){return window.Cookies=i,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,a,o){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(o=e({path:"/"},r.defaults,o)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*o.expires),o.expires=c}o.expires=o.expires?o.expires.toUTCString():"";try{i=JSON.stringify(a),/^[\{\[]/.test(i)&&(a=i)}catch(e){}a=n.write?n.write(a,t):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var s in o)o[s]&&(u+="; "+s,!0!==o[s]&&(u+="="+o[s]));return document.cookie=t+"="+a+u}t||(i={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,f=0;f<l.length;f++){var p=l[f].split("="),m=p.slice(1).join("=");this.json||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var h=p[0].replace(d,decodeURIComponent);if(m=n.read?n.read(m,h):n(m,h)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(e){}if(t===h){i=m;break}t||(i[h]=m)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict";n.r(t);var r={launch:function(e){var t=Array.from(e.querySelectorAll(".accordion__heading")),n=window.location.hash.substr(1),r=!1;t.forEach(function(a){var o=a.nextElementSibling,i=document.createTextNode(a.textContent),c=document.createElement("button"),u=document.createElement("div"),s=document.createElement("span"),l=document.createElement("span");s.className="accordion__heading__text",l.className="accordion__heading__indicator fal",l.setAttribute("aria-hidden","true"),n===a.id?(r=!0,a.dataset.open="true",c.setAttribute("aria-expanded","true")):(a.dataset.open="false",c.setAttribute("aria-expanded","false")),s.appendChild(i),u.appendChild(s),u.appendChild(l),c.appendChild(u),a.replaceChild(c,a.firstChild),o.setAttribute("aria-labelledby",a.id),o.setAttribute("aria-role","region"),c.onclick=function(){"true"===this.getAttribute("aria-expanded")?(a.dataset.open="false",this.setAttribute("aria-expanded","false"),history.pushState(null,null,window.location.pathname)):("true"===e.dataset.toggleopen&&t.forEach(function(e){e.dataset.open="false",e.firstChild.setAttribute("aria-expanded","false")}),a.dataset.open="true",this.setAttribute("aria-expanded","true"),history.pushState(null,null,"#"+a.id))}}),"true"!==e.dataset.defaultopen||r||(t[0].dataset.open="true",t[0].firstChild.setAttribute("aria-expanded","true"))},className:"accordion"},a=n(1),o=n.n(a),i=n(2),c=n.n(i);var u={launch:function(e){console.info("menu launched");var t=e.querySelector("menu__label"),n=document.createElement("button");Array.from(t.childNodes).forEach(function(e){return n.appendChild(e)}),t.appendChild(n),console.info(JSON.stringify(t))},classname:"menu"},s=n(0),l=n.n(s),d="theme--",f="cityTheme",p={domain:".city.ac.uk",expires:365,path:"/",samesite:"strict",secure:!0};var m={launch:function(e){Array.from(e.getElementsByTagName("button")).forEach(function(e){return e.onclick=function(){l.a.remove(f,p),Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className=e.className.split(/\s+/).filter(function(e){return e.indexOf(d)<0}).join(" ")}),"clear"!==e.dataset.action&&function(e){var t=d.concat("",e);Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className.indexOf(t)<0&&(e.className=e.className.concat(" ",t))}),l.a.set(f,e,p)}(e.dataset.theme)}})},className:"theme-switcher"},h=[r,o.a,c.a,u,m];function y(e){try{e()}catch(e){console&&console.error&&console.error(e)}}function g(e){if("function"==typeof e)y(e);else if(e.className){var t=e.className,n=e.launch;Array.from(document.getElementsByClassName(t)).filter(function(e){return e.className.indexOf(t.concat("","-no-js"))}).forEach(function(e){return y(function(){return n(e)})})}}document.addEventListener("DOMContentLoaded",function(){Array.from(document.getElementsByTagName("html")).forEach(function(e){return e.className=e.className.split(/\s+/).filter(function(e){return"no-js"!==e}).concat("js").join(" ")}),h.forEach(g)})}]);