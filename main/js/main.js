!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var a,r;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){if(void 0===(r="function"==typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r),!0,e.exports=o(),!!0){var c=window.Cookies,i=window.Cookies=o();i.noConflict=function(){return window.Cookies=c,i}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}return function t(n){function a(t,r,o){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(o=e({path:"/"},a.defaults,o)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*o.expires),o.expires=i}o.expires=o.expires?o.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,!0!==o[s]&&(l+="="+o[s]));return document.cookie=t+"="+r+l}t||(c={});for(var u=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,f=0;f<u.length;f++){var m=u[f].split("="),p=m.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var h=m[0].replace(d,decodeURIComponent);if(p=n.read?n.read(p,h):n(p,h)||p.replace(d,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===h){c=p;break}t||(c[h]=p)}catch(e){}}return c}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}(function(){})})},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict";n.r(t);var a={launch:function(e){const t=Array.from(e.querySelectorAll(".accordion__heading")),n=window.location.hash.substr(1);let a=!1;t.forEach(function(r){const o=r.nextElementSibling,c=document.createTextNode(r.textContent),i=document.createElement("button"),l=document.createElement("div"),s=document.createElement("span"),u=document.createElement("span");s.className="accordion__heading__text",u.className="accordion__heading__indicator fal",u.setAttribute("aria-hidden","true"),n===r.id?(a=!0,r.dataset.open="true",i.setAttribute("aria-expanded","true")):(r.dataset.open="false",i.setAttribute("aria-expanded","false")),s.appendChild(c),l.appendChild(s),l.appendChild(u),i.appendChild(l),r.replaceChild(i,r.firstChild),o.setAttribute("aria-labelledby",r.id),o.setAttribute("aria-role","region"),i.onclick=function(){"true"===this.getAttribute("aria-expanded")?(r.dataset.open="false",this.setAttribute("aria-expanded","false"),history.pushState(null,null,window.location.pathname)):("true"===e.dataset.toggleopen&&t.forEach(function(e){e.dataset.open="false",e.firstChild.setAttribute("aria-expanded","false")}),r.dataset.open="true",this.setAttribute("aria-expanded","true"),history.pushState(null,null,"#"+r.id))}}),"true"!==e.dataset.defaultopen||a||(t[0].dataset.open="true",t[0].firstChild.setAttribute("aria-expanded","true"))},className:"accordion"},r=n(1),o=n.n(r),c=n(2),i=n.n(c);const l=2;function s(e,t){const n=t[Number.parseInt(e.className.slice(-1))-l];n.firstChild?n.replaceChild(e.cloneNode(!0),n.firstChild):n.appendChild(e.cloneNode(!0))}function u(e,t,n){"false"===e.dataset.open?(n.dataset.on="true",e.dataset.open="true",t.setAttribute("aria-expanded","true")):(e.dataset.open="false",t.setAttribute("aria-expanded","false"),n.dataset.on="false")}var d={launch:function(e){const t=e.querySelector(".menu__label"),n=e.querySelector(".menu__level"+l),a=document.createElement("button"),r=document.createElement("div"),o=document.createElement("div"),c=[document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div")],i=document.createElement("div");!function(e,t){Array.from(e.querySelectorAll("li")).forEach(function(e){if((e.className.match(/menu__hierarchy/)||e.className.match(/menu__current/))&&e.querySelector("ul")){const n=e.querySelector("ul");s(n,t),n.querySelector(".menu__current > ul")&&s(n.querySelector(".menu__current > ul"),t)}})}(e,c),i.className="menu__veil",i.dataset.on="false",i.setAttribute("aria-hidden","true"),document.querySelector("main").insertBefore(i,document.querySelector("main > article")),i.onclick=(()=>u(e,a,i)),e.dataset.open="false",a.setAttribute("aria-expanded","false"),a.setAttribute("aria-haspopup","true"),Array.from(t.childNodes).forEach(e=>r.appendChild(e)),a.appendChild(r),a.onclick=(()=>u(e,a,i)),o.className="menu__columns",c.forEach(e=>e.className="menu__columns__col"),c[0].appendChild(n),c.forEach(e=>o.appendChild(e)),e.appendChild(o),t.appendChild(a)},className:"menu"},f=n(0),m=n.n(f);const p="theme--",h="cityTheme",y={domain:".city.ac.uk",expires:365,path:"/",samesite:"strict",secure:!0};var b={launch:function(e){Array.from(e.getElementsByTagName("button")).forEach(e=>e.onclick=function(){m.a.remove(h,y),Array.from(document.getElementsByTagName("html")).forEach(e=>e.className=e.className.split(/\s+/).filter(e=>e.indexOf(p)<0).join(" ")),"clear"!==e.dataset.action&&function(e){const t=p.concat("",e);Array.from(document.getElementsByTagName("html")).forEach(e=>e.className.indexOf(t)<0&&(e.className=e.className.concat(" ",t))),m.a.set(h,e,y)}(e.dataset.theme)})},className:"theme-switcher"},v=[a,o.a,i.a,d,b];function g(e){try{e()}catch(e){console&&console.error&&console.error(e)}}function C(e){if("function"==typeof e)g(e);else if(e.className){const t=e.className,n=e.launch;Array.from(document.getElementsByClassName(t)).filter(e=>e.className.indexOf(t.concat("","-no-js"))).forEach(e=>g(()=>n(e)))}}document.addEventListener("DOMContentLoaded",function(){Array.from(document.getElementsByTagName("html")).forEach(e=>e.className=e.className.split(/\s+/).filter(e=>"no-js"!==e).concat("js").join(" ")),v.forEach(C)})}]);