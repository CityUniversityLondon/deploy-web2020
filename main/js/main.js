!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=53)}([function(t,e,n){var r=n(9),o=n(22);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,e,n){var r=n(23)("wks"),o=n(12),i=n(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e,n){for(var r=n(34),o=n(26),i=n(6),c=n(1),a=n(0),u=n(15),s=n(2),l=s("iterator"),f=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(p),h=0;h<m.length;h++){var y,v=m[h],g=p[v],x=c[v],b=x&&x.prototype;if(b&&(b[l]||a(b,l,d),b[f]||a(b,f,v),u[v]=d,g))for(y in r)b[y]||i(b,y,r[y],!0)}},function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(7),c=n(12)("src"),a="toString",u=Function[a],s=(""+u).split(a);n(13).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,a){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]===n||(u&&(i(n,c)||o(n,c,t[e]?""+t[e]:s.join(e+""))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,e,n){n(20)("split",2,function(t,e,r){"use strict";var o=n(33),i=r,c=[].push,a="split",u="length",s="lastIndex";if("c"=="abbc"[a](/(b)*/)[1]||4!="test"[a](/(?:)/,-1)[u]||2!="ab"[a](/(?:ab)*/)[u]||4!="."[a](/(.?)(.?)/)[u]||1<"."[a](/()()/)[u]||""[a](/.?/)[u]){var l=void 0===/()??/.exec("")[1];r=function(t,e){var n=this+"";if(void 0===t&&0===e)return[];if(!o(t))return i.call(n,t,e);var r,a,f,d,p,m=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,h+"g");for(l||(r=new RegExp("^"+g.source+"$(?!\\s)",h));(a=g.exec(n))&&!((f=a.index+a[0][u])>y&&(m.push(n.slice(y,a.index)),!l&&1<a[u]&&a[0].replace(r,function(){for(p=1;p<arguments[u]-2;p++)void 0===arguments[p]&&(a[p]=void 0)}),1<a[u]&&a.index<n[u]&&c.apply(m,a.slice(1)),d=a[0][u],y=f,m[u]>=v));)g[s]===a.index&&g[s]++;return y===n[u]?(d||!g.test(""))&&m.push(""):m.push(n.slice(y)),m[u]>v?m.slice(0,v):m}}else"0"[a](void 0,0)[u]&&(r=function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)});return[function(n,o){var i=t(this),c=void 0==n?void 0:n[e];return void 0===c?r.call(i+"",n,o):c.call(n,i,o)},r]})},function(t,e,n){var r=n(10),o=n(31),i=n(32),c=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},function(t){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t){t.exports={}},function(t,e,n){var r=n(37),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(23)("keys"),o=n(12);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n,r,o,i=Math.min,c=Math.max;!function(i,c){r=[],n=c(),void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)}(0,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,r){n=n||999,r||0===r||(r=9);var o,a=function(t){o=t},u=function(){clearTimeout(o),a(0)},s=function(t){return c(0,e.getTopOf(t)-r)},l=function(r,o,s){if(u(),0===o||o&&0>o||t(e.body))e.toY(r),s&&s();else{var l=e.getY(),f=c(0,r)-l,d=(new Date).getTime();o=o||i(Math.abs(f),n),function t(){a(setTimeout(function(){var n=i(1,((new Date).getTime()-d)/o),r=c(0,Math.floor(l+f*(.5>n?2*n*n:n*(4-2*n)-1)));e.toY(r),1>n&&e.getHeight()+r<e.body.scrollHeight?t():(setTimeout(u,99),s&&s())},9))}()}},f=function(t,e,n){l(s(t),e,n)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(r=e),{defaultDuration:n,edgeOffset:r}},to:f,toY:l,intoView:function(t,n,o){var i=t.getBoundingClientRect().height,c=e.getTopOf(t)+i,a=e.getHeight(),u=e.getY();s(t)<u||i+r>a?f(t,n,o):c+r>u+a?l(c-a+r,n,o):o&&o()},center:function(t,n,r,o){l(c(0,e.getTopOf(t)-e.getHeight()/2+(r||t.getBoundingClientRect().height/2)),n,o)},stop:u,moving:function(){return!!o},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,r=function(){return window.scrollY||n.scrollTop},o=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:r,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+r()-n.offsetTop}});if(o.createScroller=function(t,r,o){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return i(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},r,o)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var a="history"in window&&"pushState"in history,u=a&&"scrollRestoration"in history;u&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){u&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&o.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=o.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=c(0,o.getTopOf(e)-t),r=o.getY()-n;0<=r&&9>r&&window.scrollTo(0,n)}}},9)},!1);var s=/(^|\s)noZensmooth(\s|$)/;window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(u){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=o.getY();try{history.replaceState(n,"")}catch(t){}}var r=e.getAttribute("href")||"";if(0===r.indexOf("#")&&!s.test(e.className)){var i=0,l=document.getElementById(r.substring(1));if("#"!==r){if(!l)return;i=o.getTopOf(l)}t.preventDefault();var f=function(){window.location=r},d=o.setup().edgeOffset;d&&(i=c(0,i-d),a&&(f=function(){history.pushState({},"",r)})),o.toY(i,null,f)}}},!1)}return o})},function(t,e,n){var r,o;!function(i){void 0!==(o="function"==typeof(r=i)?r.call(e,n,e,t):r)&&(t.exports=o),t.exports=i()}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}return function e(n){function r(e,o,i){var c;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(i=t({path:"/"},r.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(o),/^[\{\[]/.test(c)&&(o=c)}catch(t){}o=n.write?n.write(o,e):encodeURIComponent(o+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(e+"")).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var s in i)i[s]&&(u+="; "+s,!0!==i[s])&&(u+="="+i[s]);return document.cookie=e+"="+o+u}e||(c={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),m=p.slice(1).join("=");this.json||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var h=p[0].replace(f,decodeURIComponent);if(m=n.read?n.read(m,h):n(m,h)||m.replace(f,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(t){}if(e===h){c=m;break}e||(c[h]=m)}catch(t){}}return c}}return r.set=r,r.get=function(t){return r.call(r,t)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(e,n){r(e,"",t(n,{expires:-1}))},r.withConverter=e,r}(function(){})})},function(t,e,n){"use strict";var r=n(0),o=n(6),i=n(11),c=n(14),a=n(2);t.exports=function(t,e,n){var u=a(t),s=n(c,u,""[t]),l=s[0],f=s[1];i(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,l),r(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var r=n(4),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(13),o=n(1),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0===e?{}:e)})("versions",[]).push({version:r.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t){t.exports=!1},function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,e,n){var r=n(45),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?n:e)(t)}},function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(9).f,o=n(7),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(){"use strict"},function(t,e,n){t.exports=!n(5)&&!n(11)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),o=n(25),i=n(2)("match");t.exports=function(t){var e;return r(t)&&(void 0===(e=t[i])?"RegExp"==o(t):!!e)}},function(t,e,n){"use strict";var r=n(35),o=n(36),i=n(15),c=n(16);t.exports=n(38)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(2)("unscopables"),o=Array.prototype;void 0==o[r]&&n(0)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(24),o=n(39),i=n(6),c=n(0),a=n(15),u=n(42),s=n(29),l=n(50),f=n(2)("iterator"),d=!([].keys&&"next"in[].keys()),p="keys",m="values",h=function(){return this};t.exports=function(t,e,n,y,v,g,x){u(n,e,y);var b,_,S,E=function(t){return!d&&t in N?N[t]:function(){return new n(this,t)}},w=e+" Iterator",C=v==m,A=!1,N=t.prototype,O=N[f]||N["@@iterator"]||v&&N[v],T=O||E(v),j=v?C?E("entries"):T:void 0,L="Array"==e&&N.entries||O;if(L&&((S=l(L.call(new t)))!==Object.prototype&&S.next&&(s(S,w,!0),!r&&"function"!=typeof S[f]&&c(S,f,h))),C&&O&&O.name!==m&&(A=!0,T=function(){return O.call(this)}),(!r||x)&&(d||A||!N[f])&&c(N,f,T),a[e]=T,a[w]=h,v)if(b={values:C?T:E(m),keys:g?T:E(p),entries:j},x)for(_ in b)_ in N||i(N,_,b[_]);else o(o.P+o.F*(d||A),e,b);return b}},function(t,e,n){var r=n(1),o=n(13),i=n(0),c=n(6),a=n(40),u="prototype",s=function(t,e,n){var l,f,d,p,m=t&s.F,h=t&s.G,y=t&s.S,v=t&s.P,g=t&s.B,x=h?r:y?r[e]||(r[e]={}):(r[e]||{})[u],b=h?o:o[e]||(o[e]={}),_=b[u]||(b[u]={});for(l in h&&(n=e),n)d=((f=!m&&x&&void 0!==x[l])?x:n)[l],p=g&&f?a(d,r):v&&"function"==typeof d?a(Function.call,d):d,x&&c(x,l,d,t&s.U),b[l]!=d&&i(b,l,p),v&&_[l]!=d&&(_[l]=d)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(41);t.exports=function(t,e,n){return r(t),void 0===e?t:1===n?function(n){return t.call(e,n)}:2===n?function(n,r){return t.call(e,n,r)}:3===n?function(n,r,o){return t.call(e,n,r,o)}:function(){return t.apply(e,arguments)}}},function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(43),o=n(22),i=n(29),c={};n(0)(c,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(10),o=n(44),i=n(28),c=n(17)("IE_PROTO"),a=function(){},u="prototype",s=function(){var t,e=n(21)("iframe"),r=i.length;for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null===t?n=s():(a[u]=r(t),n=new a,a[u]=null,n[c]=t),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(9),o=n(10),i=n(26);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),a=c.length,u=0;a>u;)r.f(t,n=c[u++],e[n]);return t}},function(t,e,n){var r=n(7),o=n(16),i=n(46)(!1),c=n(17)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(16),o=n(47),i=n(48);t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),l=i(c,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(27),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(27),o=Math.max,i=Math.min;t.exports=function(t,e){return 0>(t=r(t))?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(7),o=n(51),i=n(17)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(20)("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),o=void 0==n?void 0:n[e];return void 0===o?new RegExp(n)[e](r+""):o.call(n,r)},n]})},function(t,e,n){"use strict";function r(t,e){return Array.from(t.querySelectorAll("li")).forEach(function(t){const n=t.querySelector("a"),r=t.querySelector("ul"),o="Visit "+t.dataset.title,i=document.createElement("span"),a=document.createElement("span");if(t.className.match(/menu__current/)?(i.appendChild(t.firstChild.cloneNode(!0)),a.appendChild(i),t.replaceChild(a,t.firstChild)):(i.appendChild(n.firstChild.cloneNode(!0)),n.replaceChild(i,n.firstChild),n.title=o),r){const n=document.createElement("button"),o=document.createElement("span"),i=document.createElement("span");n.setAttribute("aria-haspopup","true"),o.setAttribute("aria-hidden","true"),o.className="fal fa-fw menu__button__icon",i.className="menu__button__text",n.appendChild(o),n.appendChild(i),t.insertBefore(n,r),t.className.match(/menu__hierarchy/)||t.className.match(/menu__current/)?(c(n,"open"),e.push(r)):c(n,"closed")}}),e}function o(t,e,n){"false"===t.dataset.open?(n.dataset.on="true",t.dataset.open="true",e.setAttribute("aria-expanded","true"),Array.from(t.querySelectorAll(".menu__columns__col > ul")).forEach(function(t){const e=t.querySelector('[data-open="true"]')||t.querySelector(".menu__current"),n=v.a.createScroller(t);e&&n.to(e)})):(t.dataset.open="false",e.setAttribute("aria-expanded","false"),n.dataset.on="false")}function i(t){const e=t.closest("ul");let n=f(e.className.slice(-1));for(let t=Array.from(document.querySelectorAll(".menu__columns__col"))[n-g].nextSibling;t;)Array.from(t.childNodes).forEach(e=>t.removeChild(e)),t=t.nextSibling;for(let t=Array.from(document.querySelectorAll(".menu__level"+n+" > li"));0<t.length;)t.forEach(function(t){const e=t.querySelector("button");e&&c(e,"closed")}),t=Array.from(document.querySelectorAll(".menu__level"+ ++n+" > li"))}function c(t,e){const n=t.closest("li"),r=n.dataset.title+" section",o=t.querySelector(".menu__button__text");"open"===e?(n.dataset.open="true",t.title="Browse "+r,o.innerText="Browse "+r,t.setAttribute("aria-expanded","true")):(n.dataset.open="false",t.title="Close "+r,o.innerText="Close "+r,t.setAttribute("aria-expanded","false"))}function a(t){Array.from(t.querySelectorAll("button")).forEach(t=>t.addEventListener("click",u,!1))}function u(){const t=this.closest(".menu__columns__col > ul"),e=v.a.createScroller(t);if("false"===this.getAttribute("aria-expanded")){i(this);const t=this.closest("ul"),e=f(t.className.slice(-1)),n=Array.from(document.querySelectorAll(".menu__columns__col"))[e-g].nextSibling,r=this.closest("li").querySelector("ul").cloneNode(!0);n.appendChild(r),a(r),Array.from(document.querySelectorAll('[data-id="'+this.closest("li").dataset.id+'"]')).forEach(function(t){c(t.querySelector("button"),"open")})}else i(this),Array.from(document.querySelectorAll('[data-id="'+this.closest("li").dataset.id+'"]')).forEach(function(t){c(t.querySelector("button"),"closed")});e.to(this.closest("li"))}function s(t){try{t()}catch(t){console&&console.error&&console.error(t)}}function l(t){if("function"==typeof t)s(t);else if(t.className){const e=t.className,n=t.launch;Array.from(document.getElementsByClassName(e)).filter(t=>t.className.indexOf(e+"-no-js")).forEach(t=>s(()=>n(t)))}}var f=Number.parseInt;n.r(e);n(8),n(3);const d="cms-editor-warning",p="cms-editor-warning-remover";var m=n(30),h=n.n(m),y=(n(52),n(18)),v=n.n(y);const g=2;var x=n(19),b=n.n(x);const _="theme--",S="cityTheme",E={domain:".city.ac.uk",expires:365,path:"/",samesite:"strict",secure:!0};var w=[{launch:function(t){const e=Array.from(t.querySelectorAll(".accordion__heading")),n=window.location.hash.substr(1);let r=!1;e.forEach(function(o){const i=o.nextElementSibling,c=document.createTextNode(o.textContent),a=document.createElement("button"),u=document.createElement("div"),s=document.createElement("span"),l=document.createElement("span");s.className="accordion__heading__text",l.className="accordion__heading__indicator fal",l.setAttribute("aria-hidden","true"),n===o.id?(r=!0,o.dataset.open="true",a.setAttribute("aria-expanded","true")):(o.dataset.open="false",a.setAttribute("aria-expanded","false")),s.appendChild(c),u.appendChild(s),u.appendChild(l),a.appendChild(u),o.replaceChild(a,o.firstChild),i.setAttribute("aria-labelledby",o.id),i.setAttribute("aria-role","region"),a.addEventListener("click",function(){"true"===this.getAttribute("aria-expanded")?(o.dataset.open="false",this.setAttribute("aria-expanded","false"),history.pushState(null,null,window.location.pathname)):("true"===t.dataset.toggleopen&&e.forEach(function(t){t.dataset.open="false",t.firstChild.setAttribute("aria-expanded","false")}),o.dataset.open="true",this.setAttribute("aria-expanded","true"),history.pushState(null,null,"#"+o.id))},!1)}),"true"!==t.dataset.defaultopen||r||(e[0].dataset.open="true",e[0].firstChild.setAttribute("aria-expanded","true"))},className:"accordion"},{launch:function(t){const e=document.createElement("button");Array.from(t.querySelectorAll("."+d)).length&&(e.className=p,e.innerText="Remove CMS editor warnings",t.appendChild(e),e.onclick=(()=>(function(t){const e=document.querySelector("."+p);t.removeChild(e),Array.from(document.getElementsByClassName(d)).forEach(t=>t.parentNode.removeChild(t)),t.className=t.className.split(/\s+/).filter(t=>"cms-editor"!==t).join(" ")})(t)))},className:"cms-editor"},h.a,{launch:function(t){const e=t.querySelector(".menu__label"),n=t.querySelector(".menu__level"+g),i=document.createElement("button"),c=document.createElement("div"),u=document.createElement("div"),s=[document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div")],l=document.createElement("div");t.dataset.open="false";const d=r(t,[]);s[0].appendChild(n),l.className="menu__veil",l.dataset.on="false",l.setAttribute("aria-hidden","true"),document.querySelector("body").insertBefore(l,document.querySelector("main")),l.addEventListener("click",()=>o(t,i,l),!1),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-haspopup","true"),Array.from(e.childNodes).forEach(t=>c.appendChild(t)),i.appendChild(c),i.addEventListener("click",()=>o(t,i,l),!1),u.className="menu__columns",s.forEach(t=>t.className="menu__columns__col"),d.forEach(t=>(function(t,e){const n=e[f(t.className.slice(-1))-g];n.firstChild?n.replaceChild(t.cloneNode(!0),n.firstChild):n.appendChild(t.cloneNode(!0))})(t,s)),s.forEach(t=>u.appendChild(t)),t.appendChild(u),e.appendChild(i),a(u)},className:"menu"},{launch:function(t){Array.from(t.getElementsByTagName("button")).forEach(t=>t.addEventListener("click",function(){b.a.remove(S,E),Array.from(document.getElementsByTagName("html")).forEach(t=>t.className=t.className.split(/\s+/).filter(t=>0>t.indexOf(_)).join(" ")),"clear"!==t.dataset.action&&function(t){const e=_+t;Array.from(document.getElementsByTagName("html")).forEach(t=>0>t.className.indexOf(e)&&(t.className=t.className+" "+e)),b.a.set(S,t,E)}(t.dataset.theme)},!1))},className:"theme-switcher"}];document.addEventListener("DOMContentLoaded",function(){Array.from(document.getElementsByTagName("html")).forEach(t=>t.className=t.className.split(/\s+/).filter(t=>"no-js"!==t).concat("js").join(" ")),w.forEach(l)},!1)}]);