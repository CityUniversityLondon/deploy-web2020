!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var a,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(r){if(void 0===(o="function"==typeof(a=r)?a.call(t,n,t,e):a)||(e.exports=o),!0,e.exports=r(),!!0){var c=window.Cookies,i=window.Cookies=r();i.noConflict=function(){return window.Cookies=c,i}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}return function t(n){function a(t,o,r){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=e({path:"/"},a.defaults,r)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*r.expires),r.expires=i}r.expires=r.expires?r.expires.toUTCString():"";try{c=JSON.stringify(o),/^[\{\[]/.test(c)&&(o=c)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var l in r)r[l]&&(s+="; "+l,!0!==r[l]&&(s+="="+r[l]));return document.cookie=t+"="+o+s}t||(c={});for(var u=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var f=u[m].split("="),p=f.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var h=f[0].replace(d,decodeURIComponent);if(p=n.read?n.read(p,h):n(p,h)||p.replace(d,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===h){c=p;break}t||(c[h]=p)}catch(e){}}return c}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}(function(){})})},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict";n.r(t);var a={launch:function(e){const t=Array.from(e.querySelectorAll(".accordion__heading")),n=window.location.hash.substr(1);let a=!1;t.forEach(function(o){const r=o.nextElementSibling,c=document.createTextNode(o.textContent),i=document.createElement("button"),s=document.createElement("div"),l=document.createElement("span"),u=document.createElement("span");l.className="accordion__heading__text",u.className="accordion__heading__indicator fal",u.setAttribute("aria-hidden","true"),n===o.id?(a=!0,o.dataset.open="true",i.setAttribute("aria-expanded","true")):(o.dataset.open="false",i.setAttribute("aria-expanded","false")),l.appendChild(c),s.appendChild(l),s.appendChild(u),i.appendChild(s),o.replaceChild(i,o.firstChild),r.setAttribute("aria-labelledby",o.id),r.setAttribute("aria-role","region"),i.onclick=function(){"true"===this.getAttribute("aria-expanded")?(o.dataset.open="false",this.setAttribute("aria-expanded","false"),history.pushState(null,null,window.location.pathname)):("true"===e.dataset.toggleopen&&t.forEach(function(e){e.dataset.open="false",e.firstChild.setAttribute("aria-expanded","false")}),o.dataset.open="true",this.setAttribute("aria-expanded","true"),history.pushState(null,null,"#"+o.id))}}),"true"!==e.dataset.defaultopen||a||(t[0].dataset.open="true",t[0].firstChild.setAttribute("aria-expanded","true"))},className:"accordion"},o=n(1),r=n.n(o),c=n(2),i=n.n(c);var s={launch:function(e){const t=e.querySelector(".menu__label"),n=e.querySelector(".menu__level2"),a=document.createElement("button"),o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");e.dataset.open="false",a.setAttribute("aria-expanded","false"),a.setAttribute("aria-haspopup","true"),Array.from(t.childNodes).forEach(e=>o.appendChild(e)),a.appendChild(o),r.className="menu__columns",c.className="menu__columns__col menu__columns__col1",i.className="menu__columns__col menu__columns__col2",s.className="menu__columns__col menu__columns__col3",l.className="menu__columns__col menu__columns__col4",c.appendChild(n),[c,i,s,l].forEach(e=>r.appendChild(e)),u.className="menu-veil",u.dataset.on="false",u.setAttribute("aria-hidden","true"),a.onclick=function(){"false"===e.dataset.open?(u.dataset.on="true",e.dataset.open="true",a.setAttribute("aria-expanded","true")):(e.dataset.open="false",a.setAttribute("aria-expanded","false"),u.dataset.on="false")},document.querySelector("main").insertBefore(u,document.querySelector("main > article")),e.appendChild(r),t.appendChild(a)},className:"menu"},l=n(0),u=n.n(l);const d="theme--",m="cityTheme",f={domain:".city.ac.uk",expires:365,path:"/",samesite:"strict",secure:!0};var p={launch:function(e){Array.from(e.getElementsByTagName("button")).forEach(e=>e.onclick=function(){u.a.remove(m,f),Array.from(document.getElementsByTagName("html")).forEach(e=>e.className=e.className.split(/\s+/).filter(e=>e.indexOf(d)<0).join(" ")),"clear"!==e.dataset.action&&function(e){const t=d.concat("",e);Array.from(document.getElementsByTagName("html")).forEach(e=>e.className.indexOf(t)<0&&(e.className=e.className.concat(" ",t))),u.a.set(m,e,f)}(e.dataset.theme)})},className:"theme-switcher"},h=[a,r.a,i.a,s,p];function _(e){try{e()}catch(e){console&&console.error&&console.error(e)}}function y(e){if("function"==typeof e)_(e);else if(e.className){const t=e.className,n=e.launch;Array.from(document.getElementsByClassName(t)).filter(e=>e.className.indexOf(t.concat("","-no-js"))).forEach(e=>_(()=>n(e)))}}document.addEventListener("DOMContentLoaded",function(){Array.from(document.getElementsByTagName("html")).forEach(e=>e.className=e.className.split(/\s+/).filter(e=>"no-js"!==e).concat("js").join(" ")),h.forEach(y)})}]);