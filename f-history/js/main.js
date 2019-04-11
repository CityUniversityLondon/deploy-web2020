/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ }),

/***/ "./src/aria-attributes.js":
/*!********************************!*\
  !*** ./src/aria-attributes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/**
 * WAI-ARIA attributes
 *
 * Quicker to type, intellisensible, documents what they're for, and saves a
 * tiny amount of code by replacing the string 'aria-' with a minifiable
 * variable and dot notation.
 *
 * @module aria-attributes
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */

/**
 * @readonly
 * @enum {string}
 */
const aria = {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  activeDescendant: 'aria-activedescendant',

  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  atomic: 'aria-atomic',

  /** Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. */
  autoComplete: 'aria-autocomplete',

  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  busy: 'aria-busy',

  /** Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. */
  checked: 'aria-checked',

  /** Defines the total number of columns in a table, grid, or treegrid. */
  colCount: 'aria-colcount',

  /** Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. */
  colIndex: 'aria-colindex',

  /** Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. */
  colSpan: 'aria-colspan',

  /** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
  controls: 'aria-controls',

  /** Indicates the element that represents the current item within a container or set of related elements. */
  current: 'aria-current',

  /** Identifies the element (or elements) that describes the object. */
  describedBy: 'aria-describedby',

  /** Identifies the element that provides a detailed, extended description for the object. */
  details: 'aria-details',

  /** Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. */
  disabled: 'aria-disabled',

  /** [Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target. */
  dropEffect: 'aria-dropeffect',

  /** Identifies the element that provides an error message for the object. */
  errorMessage: 'aria-errormessage',

  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  expanded: 'aria-expanded',

  /** Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. */
  flowTo: 'aria-flowto',

  /** [Deprecated in ARIA 1.1] Indicates an element's "grabbed" state in a drag-and-drop operation. */
  grabbed: 'aria-grabbed',

  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  hasPopup: 'aria-haspopup',

  /** Indicates whether the element is exposed to an accessibility API. */
  hidden: 'aria-hidden',

  /** Indicates the entered value does not conform to the format expected by the application. */
  invalid: 'aria-invalid',

  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  keyShortcuts: 'aria-keyshortcuts',

  /** Defines a string value that labels the current element. */
  label: 'aria-label',

  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: 'aria-labelledby',

  /** Defines the hierarchical level of an element within a structure. */
  level: 'aria-level',

  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  live: 'aria-live',

  /** Indicates whether an element is modal when displayed. */
  modal: 'aria-modal',

  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  multiLine: 'aria-multiline',

  /** Indicates that the user may select more than one item from the current selectable descendants. */
  multiSelectable: 'aria-multiselectable',

  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  orientation: 'aria-orientation',

  /** Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. */
  owns: 'aria-owns',

  /** Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. */
  placeholder: 'aria-placeholder',

  /** Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  posInset: 'aria-posinset',

  /** Indicates the current "pressed" state of toggle buttons. */
  pressed: 'aria-pressed',

  /** Indicates that the element is not editable, but is otherwise operable. */
  readOnly: 'aria-readonly',

  /** Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. */
  relevant: 'aria-relevant',

  /** Indicates that user input is required on the element before a form may be submitted. */
  required: 'aria-required',

  /** Defines a human-readable, author-localized description for the role of an element. */
  roleDescription: 'aria-roledescription',

  /** Defines the total number of rows in a table, grid, or treegrid. */
  rowCount: 'aria-rowcount',

  /** Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. */
  rowIndex: 'aria-rowindex',

  /** Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. */
  rowSpan: 'aria-rowspan',

  /** Indicates the current "selected" state of various widgets. */
  selected: 'aria-selected',

  /** Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  setSize: 'aria-setsize',

  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  sort: 'aria-sort',

  /** Defines the maximum allowed value for a range widget. */
  valueMax: 'aria-valuemax',

  /** Defines the minimum allowed value for a range widget. */
  valueMin: 'aria-valuemin',

  /** Defines the current value for a range widget. */
  valueNow: 'aria-valuenow',

  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  valueText: 'aria-valuetext'
};
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze(aria));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: tryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");





/**
 * Main entry
 *
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */



/**
 * try a function, log the error if it throws an exception.
 *
 * @param {Function} f - The function to call.
 */

function tryCatch(f) {
  try {
    f();
  } catch (e) {
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["gaEvent"])('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `Pattern launch ${e.fileName} (${window.location})`, true);
  }
}
/**
 * Runs the function for each pattern against every element that has the
 * matching class, unless the element also has that class with a '-no-js' suffix
 * (for cases where you want to use the CSS for a pattern, but not the
 * functionality).
 *
 * @param {object} pattern - An object containing the class name to trigger the pattern and the launch function to run for those elements.
 */

function launchPattern(pattern) {
  if (typeof pattern === 'function') {
    tryCatch(pattern);
  } else if (pattern.launchQuery) {
    const launchFn = pattern.launchFn,
          launchQuery = pattern.launchQuery;
    Array.from(document.querySelectorAll(launchQuery)).filter(elem => elem.className.indexOf(`${launchQuery}-no-js`)).forEach(elem => tryCatch(() => launchFn(elem)));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // disable for now
  // if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', function() {
  //         navigator.serviceWorker
  //             .register('sw.js')
  //             .then(function() {}, function() {});
  //     }, false);
  // }
  Array.from(document.getElementsByTagName('html')).forEach(html => {
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(html, 'no-js', false);
    html.className = (html.className + ' js').trim();
  });
  _patterns__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(launchPattern);
  const parameters = Object(_util__WEBPACK_IMPORTED_MODULE_3__["parametersToObject"])(location.search);
  parameters['dev'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_4__["devcorate"])(document.querySelector('body'), 'dev', parameters['dev']);
  parameters['rel'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_4__["devcorate"])(document.querySelector('body'), 'rel', parameters['rel']);
}, false);

/***/ }),

/***/ "./src/patterns.js":
/*!*************************!*\
  !*** ./src/patterns.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns/accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/cms-editor-warning/cms-editor-warning */ "./src/patterns/cms-editor-warning/cms-editor-warning.js");
/* harmony import */ var _patterns_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/cookie-notice/cookie-notice */ "./src/patterns/cookie-notice/cookie-notice.js");
/* harmony import */ var _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/feedback/feedback */ "./src/patterns/feedback/feedback.js");
/* harmony import */ var _patterns_history_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/history/history */ "./src/patterns/history/history.js");
/* harmony import */ var _patterns_key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-paginated */ "./src/patterns/key-info-box/key-info-paginated.js");
/* harmony import */ var _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-slider */ "./src/patterns/key-info-box/key-info-slider.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");
/* harmony import */ var _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/paginated-list/paginated-list */ "./src/patterns/paginated-list/paginated-list.js");
/* harmony import */ var _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/pagination/pagination */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/tabs/tabs */ "./src/patterns/tabs/tabs.js");
/* harmony import */ var _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/theme-switcher/theme-switcher */ "./src/patterns/theme-switcher/theme-switcher.js");
/* harmony import */ var _patterns_external_link_finder_external_link_finder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/external-link-finder/external-link-finder */ "./src/patterns/external-link-finder/external-link-finder.js");
/* harmony import */ var _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/back-to-top-link/back-to-top-link */ "./src/patterns/back-to-top-link/back-to-top-link.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */




 // import keyInfoBox from './patterns/key-info-box/key-info-box';










/* harmony default export */ __webpack_exports__["default"] = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_history_history__WEBPACK_IMPORTED_MODULE_4__["default"], // keyInfoBox,
_patterns_key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_external_link_finder_external_link_finder__WEBPACK_IMPORTED_MODULE_12__["default"], _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_13__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util.js");





/**
 * Accordion
 *
 * @module patterns/accordion/accordion
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */



const className = 'accordion',
      headingClassName = className + '__heading',
      headingTextClassName = headingClassName + '__text',
      headingIconClassName = headingClassName + '__indicator fal',
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_4__["reduceMotion"])() ? 0 : 999,
      scrollTo = false;
/**
 * Sets a heading and the button nested within to be open or closed.
 *
 * @param {HTMLElement} heading - An accordion heading.
 * @param {boolean} open - Set this section to be open?
 */

function setSection(heading, open) {
  heading.dataset.open = open;
  heading.setAttribute('tabindex', '1');
  heading.firstElementChild.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].expanded, open);
  let bodyLinks = heading.nextElementSibling.getElementsByTagName('a');

  if (open) {
    heading.nextElementSibling.classList.add('active');
    let bodyHeight = heading.nextElementSibling.scrollHeight;
    let bodyHeightRem = Object(_util__WEBPACK_IMPORTED_MODULE_4__["pxToRem"])(bodyHeight);
    heading.nextElementSibling.style.maxHeight = parseInt(bodyHeightRem + 5) + 'rem';

    for (const bodyLink of bodyLinks) {
      bodyLink.setAttribute('tabindex', '1');
    }
  } else {
    heading.nextElementSibling.classList.remove('active');
    heading.nextElementSibling.style.maxHeight = null;

    for (const bodyLink of bodyLinks) {
      bodyLink.setAttribute('tabindex', '-1');
    }
  }
}
/**
 * Respond to button clicks - open if closed, close if open.
 *
 * If opening, will also push the heading ID into the history, so C+Ping the URL
 * will open the most recently viewed section. Closing a section removes any
 * hash.
 *
 * @param {HTMLButtonElement} button - The button that was clicked.
 * @param {HTMLElement[]} headings - All headings in this accordion.
 * @param {boolean} [toggleOpen] - Should other accordion sections close? Default to false.
 */


function buttonClick(button, headings, toggleOpen) {
  const heading = button.parentNode;

  if (Object(_util__WEBPACK_IMPORTED_MODULE_4__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].expanded))) {
    setSection(heading, false);
    history.pushState(null, null, `${window.location.pathname}${window.location.search}`);
  } else {
    toggleOpen && headings.forEach(heading => setSection(heading, false));
    setSection(heading, true);
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(heading, scrollDuration);
    history.pushState(null, null, '#' + heading.id);
  }
}
/**
 * Create a button from the text content of a heading.
 *
 * @param {HTMLElement} heading - An accordion heading.
 * @returns {HTMLButtonElement} An accordion section button.
 */


function buttonFromHeading(heading) {
  const button = document.createElement('button'),
        // Chrome can't apply grid layout to buttons, need to wrap contents
  wrapper = document.createElement('div'),
        textSpan = document.createElement('span'),
        iconSpan = document.createElement('span');
  textSpan.className = headingTextClassName;
  iconSpan.className = headingIconClassName;
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].hidden, true);
  button.setAttribute('type', 'button');
  textSpan.appendChild(document.createTextNode(heading.textContent));
  Object(_util__WEBPACK_IMPORTED_MODULE_4__["appendAll"])(wrapper, [textSpan, iconSpan]);
  button.appendChild(wrapper);
  return button;
}
/**
 * Transform an element with the accordion class into an accordion.
 *
 * accordions should contain an even number of children, alternating headings
 * and content elements. The element type is unimportant - headings should have
 * the headingClassName - but headings should contain only text, no other
 * children.
 *
 * e.g.
 *
 * <div class="accordion">
 * <h2 class="accordion__heading">Heading 1</h2>
 * <div>Content 1</div>
 * <h2 class="accordion__heading">Heading 2</h2>
 * <div>Content 2</div>
 * </div>
 *
 * @param {HTMLElement} accordion - An HTML element with the accordion class.
 */


function launchAccordion(accordion) {
  const locationHash = window.location.hash.substr(1),
        toggleOpen = Object(_util__WEBPACK_IMPORTED_MODULE_4__["toBool"])(accordion.dataset.toggleopen),
        defaultOpen = Object(_util__WEBPACK_IMPORTED_MODULE_4__["toBool"])(accordion.dataset.defaultopen),
        allowSingle = Object(_util__WEBPACK_IMPORTED_MODULE_4__["toBool"])(accordion.dataset.allowsingle),
        headings = Array.from(accordion.querySelectorAll(`.${headingClassName}`));
  let idLinked = false;

  if (!(allowSingle || headings.length > 1)) {
    /**
     * not enough content to accordion
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(accordion, className, false);
    return;
  }

  headings.forEach(heading => {
    const content = heading.nextElementSibling,
          button = buttonFromHeading(heading);
    content.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].labelledBy, heading.id);
    content.setAttribute('role', 'region');
    heading.replaceChild(button, heading.firstChild);
    /**
     * if the location hash matches the heading's ID, we'll open that
     * instead of the first section, or instead of leaving everything
     * closed.
     */

    if (locationHash === heading.id) {
      idLinked = true;
      setSection(heading, true);
    } else {
      setSection(heading, false);
    }

    button.addEventListener('click', () => buttonClick(button, headings, toggleOpen), true);
  });

  if (defaultOpen && !idLinked) {
    setSection(headings[0], true);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAccordion,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/back-to-top-link/back-to-top-link.js":
/*!***********************************************************!*\
  !*** ./src/patterns/back-to-top-link/back-to-top-link.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/**
 * Back To Top Link Scroll
 *
 * @module patterns/external-link-finder/external-link-finder
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

/**
 *  Back to top link button only appears on long pages and when you have scrolled down long enough
 *
 */
const className = 'back-to-top',
      viewPortHeight = window.innerHeight,
      // calculates viewport height
docHeight = document.documentElement.scrollHeight; // calculates page height

/**
 *  Parameters
 *
 */

const pageHeight = 1.5; // only appears on long pages which are 'X' times the viewport height

const scrollPos = 1; // sets how many viewport heights you need to scroll down for back to top to appear

/**
 *  Initialises for long pages only
 *
 */

function initBacktoTop() {
  const scrollToTopBut = document.getElementsByClassName('back-to-top')[0].querySelectorAll('a')[0];

  if (docHeight > viewPortHeight * pageHeight) {
    scrollToTopBut.style.opacity = 0;
    scrollToTopBut.classList.add('back-to-top-stick');

    window.onscroll = function () {
      updateProgress();
      scrollButtonShow();
    };
  }
}
/**
 *  Button fading behaviour
 *
 */


function scrollButtonShow() {
  const scrollToTopBut = document.getElementsByClassName('back-to-top')[0].querySelectorAll('a')[0];
  let screenPos = window.pageYOffset; // calculates scroll position

  if (screenPos > viewPortHeight * scrollPos) {
    // shows button when scrolled down far enough - see parameters
    scrollToTopBut.classList.add('back-to-top-show');
  } else if (screenPos < 200) {
    // hides button when close to top of the page
    scrollToTopBut.classList.remove('back-to-top-show');
  }
}
/**
 *  Progress meter:
 *
 */
// updateProgress function


function updateProgress() {
  // Setting up SVG animation
  const progressPath = document.querySelector('path');
  const pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 0ms linear'; // Calculate values

  let scroll = window.pageYOffset;
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let progress = pathLength - scroll * pathLength / height; // Updates progress bar

  progressPath.style.strokeDashoffset = progress;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: initBacktoTop,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/cms-editor-warning/cms-editor-warning.js":
/*!***************************************************************!*\
  !*** ./src/patterns/cms-editor-warning/cms-editor-warning.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Warning removal
 *
 * @module patterns/cms-editor-warning/cms-editor-warning
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */

const className = 'cms-editor',
      warningClass = className + '-warning',
      buttonClass = warningClass + '-remover';
/**
 * Create a warning remover button.
 *
 * @returns {HTMLButtonElement} A button element.
 */

function createButton() {
  const button = document.createElement('button');
  button.className = buttonClass;
  button.setAttribute('type', 'button');
  button.appendChild(document.createTextNode('Remove CMS editor warnings'));
  return button;
}
/**
 * The Web 2020 design adds a class .cms-editor to the body tag if the current
 * has write access to the page.
 *
 * If there are any CMS editor warnings inside the launch element, this will
 * append a button to the element that will remove that class, the warnings,
 * and the button itself, leaving the page as it would appear to the user.
 *
 * @param {HTMLElement} elem - An HTML element with the cms-editor class.
 */


function launchRemover(elem) {
  const warnings = Array.from(elem.querySelectorAll(`.${warningClass}`));

  if (warnings.length) {
    const button = createButton();
    button.addEventListener('click', () => {
      warnings.forEach(w => w.parentNode.removeChild(w));
      button.parentNode.removeChild(button);
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(elem, className, false);
    }, true);
    elem.appendChild(button);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchRemover,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/cookie-notice/cookie-notice.js":
/*!*****************************************************!*\
  !*** ./src/patterns/cookie-notice/cookie-notice.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Cookie notice
 *
 * @module patterns/cookie-notice/cookie-notice
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */


const className = 'cookie-notice',
      cookieName = 'cityCookieNotice',
      cookieOptions = {
  expires: 365,
  path: '/',
  samesite: 'strict',
  secure: true
};
/**
 * Remove the cookie notice and set a cookie so it won't come back.
 */

function dismissCookieNotice() {
  const now = new Date(),
        notice = this.closest(`.${className}`);
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(cookieName, now.toISOString(), cookieOptions);
  notice.parentNode.removeChild(notice);
}
/**
 * Add a button to dismiss the cookie notice, then set it to display.
 *
 * @param {HTMLElement} elem
 */


function launchCookieNotice(elem) {
  const agreeButton = document.createElement('button'),
        agreeButtonSpan = document.createElement('span'),
        agreeButtonText = document.createTextNode('Agree and dismiss');
  agreeButton.setAttribute('type', 'button');
  agreeButtonSpan.appendChild(agreeButtonText);
  agreeButton.appendChild(agreeButtonSpan);
  elem.appendChild(agreeButton);
  elem.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].live, 'polite');
  agreeButton.addEventListener('click', dismissCookieNotice, true);
  elem.dataset.display = true;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchCookieNotice,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/devcorate/devcorate.js":
/*!*********************************************!*\
  !*** ./src/patterns/devcorate/devcorate.js ***!
  \*********************************************/
/*! exports provided: devcorate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devcorate", function() { return devcorate; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");





/**
 * Devcorate
 *
 * @module patterns/devcorate/devcorate
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */

/**
 * Persist a query parameter to all same-site anchors inside an element.
 *
 * @param {HTMLElement} elem - An element containing anchors to decorate.
 * @param {string} param - The name of a query parameter.
 * @param {string} value - The value for the query parameter.
 */

function devcorate(elem, param, value) {
  Array.from(elem.querySelectorAll('a')).forEach(anchor => {
    if (anchor.origin === window.location.origin) {
      const parameters = anchor.search ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["parametersToObject"])(anchor.search) : {};
      parameters[param] = value;
      anchor.href = `${anchor.origin}${anchor.pathname}${Object(_util__WEBPACK_IMPORTED_MODULE_2__["objectToParameters"])(parameters)}${anchor.hash}`;
    }
  });
}

/***/ }),

/***/ "./src/patterns/external-link-finder/external-link-finder.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/external-link-finder/external-link-finder.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);




/**
 * External Link Finder
 *
 * @module patterns/external-link-finder/external-link-finder
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

/**
 *  Finds external links and adds font awesome icon to indicate external link
 *
 */
const className = 'content';

function findExternalLink() {
  var anchors = document.getElementsByClassName('content')[0].querySelectorAll('a');
  anchors.forEach(function (i) {
    /** checks if anchors links are :
     * external
     * not an image
     * not contain font awesome icon already
     * not a CTA
     * not an email hyperlink
     */
    if (i.origin !== window.location.origin && i.querySelectorAll('img').length < 1 && i.querySelectorAll('.fa-external-link').length < 1 && !i.parentElement.className.includes('cta-block') && i.href.indexOf('mailto:')) {
      // adds font awesome external link icon after completing checks
      var node = document.createElement('span');
      node.className = 'fa fa-external-link inline-external-link ';
      node.setAttribute('aria-hidden', 'true');
      i.appendChild(node);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: findExternalLink,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/feedback/feedback.js":
/*!*******************************************!*\
  !*** ./src/patterns/feedback/feedback.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");





/**
 * Feedback
 *
 * @module patterns/feedback/feedback
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */


const className = 'feedback',
      feedbackPage = '/feedback';
/**
 * Push a Google Analytics page feedback event into the data layer queue.
 *
 * @param {string} action - The event action.
 * @param {number} value - The event value
 */

function sendFeedback(action, value) {
  Object(_util__WEBPACK_IMPORTED_MODULE_3__["gaEvent"])('pageFeedback', 'Page feedback', action, window.location.toString(), value, true);
}
/**
 * Handle a click on the "no, it's not useful" button.
 *
 * @param {HTMLParagraphElement} container - The button container.
 */


function handleNo(container) {
  sendFeedback('Not useful', 0);
  const message = document.createElement('p'),
        messagePrefix = document.createTextNode('We’re sorry to hear that, please consider '),
        linkText = document.createTextNode('sending us some feedback'),
        link = document.createElement('a'),
        messageSuffix = document.createTextNode(' so we can make it better.');
  container.childNodes.forEach(elem => container.removeChild(elem));
  link.href = feedbackPage;
  link.appendChild(linkText);
  Object(_util__WEBPACK_IMPORTED_MODULE_3__["appendAll"])(message, [messagePrefix, link, messageSuffix]);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].live, 'polite');
  container.appendChild(message);
}
/**
 * Handle a click on the "yes, it's useful" button.
 *
 * @param {HTMLParagraphElement} container - The button container.
 */


function handleYes(container) {
  sendFeedback('Useful', 1);
  const message = document.createElement('p'),
        messageText = document.createTextNode('Thanks! Your feedback will be used to improve our website.');
  container.childNodes.forEach(elem => container.removeChild(elem));
  message.appendChild(messageText);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].live, 'polite');
  container.appendChild(message);
}
/**
 * By default, the Feedback widget contains a link to the feedback form.
 *
 * With JavaScript, we add “is it useful?” buttons to track events to GA.
 *
 * @param {HTMLElement} elem - The feedback widget.
 */


function launchFeedback(elem) {
  const questionText = document.createTextNode('Is this page useful?'),
        directFeedbackWrapper = document.createElement('div'),
        directFeedbackForm = document.createElement('form'),
        directFeedbackFieldset = document.createElement('fieldset'),
        questionLegend = document.createElement('legend'),
        yesButton = document.createElement('button'),
        noButton = document.createElement('button');
  yesButton.setAttribute('type', 'button');
  yesButton.appendChild(document.createTextNode('Yes'));
  yesButton.addEventListener('click', () => handleYes(directFeedbackWrapper), true);
  noButton.setAttribute('type', 'button');
  noButton.appendChild(document.createTextNode('No'));
  noButton.addEventListener('click', () => handleNo(directFeedbackWrapper), true);
  questionLegend.appendChild(questionText);
  Object(_util__WEBPACK_IMPORTED_MODULE_3__["appendAll"])(directFeedbackFieldset, [questionLegend, yesButton, noButton]);
  directFeedbackForm.appendChild(directFeedbackFieldset);
  directFeedbackWrapper.appendChild(directFeedbackForm);
  directFeedbackWrapper.className = className + '__direct';
  elem.insertBefore(directFeedbackWrapper, elem.firstElementChild);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchFeedback,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/history/history.js":
/*!*****************************************!*\
  !*** ./src/patterns/history/history.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../key-info-box/key-info-paginated */ "./src/patterns/key-info-box/key-info-paginated.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_5__);






/**
 * History - build URL on dynamic content pages
 *
 * @module patterns/history/history
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */



const className = 'dynamic';
let loadMoreWrapper = document.querySelector('.dynamic--load-more'),
    loadMoreButton = loadMoreWrapper.querySelector('.content-toggle button'),
    urlHash = window.location.hash.substr(1),
    listingPosition = ''; // Blank by default for non-hashed URLs
// Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_5___default.a.setup(_key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["defaultDuration"], _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["edgeOffset"]);
/**
 * Control what elements should display in listing.
 *
 * @param {HTMLElement[]} elems - All elements in group of listings.
 * @param {number} maxVisible - Maximum number of elements that should be visible at any one time.
 * @param {number} targetElemIndex - Index value of element to scroll to.
 */

function showHideItems(elems, maxVisible, targetElemIndex) {
  for (const elem of elems.entries()) {
    if (elem[0] < maxVisible) {
      if (maxVisible > elems.length) {
        loadMoreButton.style.display = 'none';
      }

      if (elem[0] == targetElemIndex) {
        let scrollTarget = elem[1];
        zenscroll__WEBPACK_IMPORTED_MODULE_5___default.a.to(scrollTarget);
      }

      if (elem[1].classList.contains('hide')) {
        elem[1].classList.remove('hide');
      }
    }
  }
}
/**
 * Build URL on each 'Load more' click, e.g. => '#keyinfoabc123-listing4
 * Include ID of parent wrapper and position of first new listing in each batch loaded.
 *
 * @param {number} loadMoreClicks - Number of 'Load more' clicks.
 * @param {string} groupType - Pattern type ID of parent wrapper.
 * @param {string} itemType - Descriptive string that will be passed to the URL, e.g. 'listing'.
 * @param {string} itemTypeClass - Class name of child elements being shown/hidden.
 *
 */


function buildDynamicUrl(loadMoreClicks, groupType, itemType, itemTypeClass) {
  let parentWrapper = loadMoreButton.closest('.dynamic--load-more');
  let parentWrapperId = parentWrapper.getAttribute('id');

  if (urlHash) {
    let urlHashParts = urlHash.split('-');
    parentWrapperId = urlHashParts[0];
    let listingId = Object(_util__WEBPACK_IMPORTED_MODULE_4__["numberFromString"])(urlHashParts[1]);
    listingPosition += _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"];
    let visibleBatches = Math.floor(listingId / _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"]);
    let remainders = listingId % _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"];
    /**
     * Remainders condition ensures next batch always shows so browser can scroll to a visible listing
     */

    remainders ? visibleBatches += 1 : null;
    let totalVisibleListings = visibleBatches * _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"];
    parentWrapper = parentWrapperId.replace(groupType, '');
    parentWrapper = document.getElementById(parentWrapper);
    let items = parentWrapper.querySelectorAll(itemTypeClass);
    showHideItems(items, totalVisibleListings, listingId);
    loadMoreButton.addEventListener('click', () => {
      visibleBatches += 1;
      totalVisibleListings = visibleBatches * _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"]; // console.log(`I now need to show ${visibleBatches} batches`);
      // console.log(`That means ${totalVisibleListings} listings. Let's start looping...`);
      // console.log(`Our batch number is now ${visibleBatches}`)

      showHideItems(items, totalVisibleListings, listingId);
      const updateListingPosition = new Promise(resolve => {
        resolve(listingPosition = (visibleBatches - 1) * _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"] + 1);
      });
      updateListingPosition.then(() => {
        history.pushState('', '', `#${parentWrapperId}-${itemType}${listingPosition}`);
      });
    });
    localStorage.setItem('storageListingPosition', `${visibleBatches}`);
  } else {
    loadMoreButton.addEventListener('click', () => {
      // console.log(loadMoreClicks);
      loadMoreClicks += 1;
      const updateListingPosition = new Promise(resolve => {
        resolve(listingPosition = loadMoreClicks * _key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_3__["batchNumber"] + 1);
      });
      updateListingPosition.then(() => {
        history.pushState('', '', `#${groupType}${parentWrapperId}-${itemType}${listingPosition}`); // When user navigates back/forward to page, use listing position stored locally

        localStorage.setItem('storageListingPosition', `${loadMoreClicks}`);
      });
    });
    localStorage.setItem('storageListingPosition', `${loadMoreClicks}`);
  }
} // Target element using 'load more' functionality


function loadMore() {
  let counter = 0;

  if (_util__WEBPACK_IMPORTED_MODULE_4__["browserBackForward"]) {
    let storageListingPosition = parseInt(localStorage.getItem('storageListingPosition')); // console.log(`Storage listing position: ${storageListingPosition}`);

    buildDynamicUrl(storageListingPosition, 'keyinfo', 'listing', '.key-info__listing');
  } else {
    localStorage.clear();
    buildDynamicUrl(counter, 'keyinfo', 'listing', '.key-info__listing');
  } // if (urlHash) {
  //     let storageListingPosition = parseInt(
  //         localStorage.getItem('storageListingPosition')
  //     );
  // }

} // Detect what type of dynamic pattern is being used, e.g. 'Load more'


function dynamicContentType() {
  let dynamicElementWrapper = document.querySelector('.dynamic');

  if (dynamicElementWrapper.classList.contains('dynamic--load-more')) {
    loadMore();
  }
}

dynamicContentType();
/* harmony default export */ __webpack_exports__["default"] = ({
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/key-info-box/key-info-paginated.js":
/*!*********************************************************!*\
  !*** ./src/patterns/key-info-box/key-info-paginated.js ***!
  \*********************************************************/
/*! exports provided: listingsLength, batchNumber, edgeOffset, defaultDuration, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listingsLength", function() { return listingsLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchNumber", function() { return batchNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgeOffset", function() { return edgeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDuration", function() { return defaultDuration; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_1__);




/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */

const className = 'key-info-paginated';
let listings = document.querySelectorAll('.key-info__listing'),
    batchNumber = 3,
    contentToggles = document.querySelectorAll('.content-toggle'),
    browserWidth = document.documentElement.scrollWidth,
    listingDates = document.querySelectorAll('.key-info__date'),
    listingsVisible = [],
    listingsLength = [],
    paginated = document.getElementsByClassName('key-info--short-course-paginated'),
    paginatedPage,
    defaultDuration = 2000,
    edgeOffset = 100; // Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

function dateTabIndex() {
  for (const listingDate of listingDates) {
    listingDate.setAttribute('tabindex', '-1');
  }
} // Visible listings: needed to decide if more content still to be loaded.


function calculateVisibleListings() {
  listingsVisible = [];

  for (const listing of listings) {
    if (!listing.classList.contains('hide')) {
      listingsVisible.push(listing);
    }
  }
} // Mobile: Show listing entry based on navigation button clicks


function listingDisplay() {
  for (const listing of listings.entries()) {
    listing[1].setAttribute('data-id', `listing-${listing[0]}`);
  }
} // Initial listings display


function defaultListingsDisplay() {
  listingsLength = [];

  for (const listing of listings.entries()) {
    listingsLength.push(listings.length);
    listing[0] > batchNumber - 1 ? listing[1].classList.add('hide') : listing[1].style.display = 'grid';
  }
} // Show number of available starting dates.


function listingsQuantity() {
  let listingsNumber = [];

  for (const listing of listings.entries()) {
    listingsNumber.push(listing.length);
  }

  listingsNumber = listingsNumber.length;
  let datesQuantities = document.querySelectorAll('.key-info__dates-quantity');

  for (const datesQuantity of datesQuantities) {
    let date;
    listingsNumber == 1 ? date = 'date' : date = 'dates';
    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('key-info__icon--left');
    datesQuantity.appendChild(iconWrapper);
    let calendarIcon = document.createElement('span');
    calendarIcon.classList.add('fas');
    calendarIcon.classList.add('fa-calendar-day');
    iconWrapper.appendChild(calendarIcon);
    let iconTextDiv = document.createElement('div');
    iconTextDiv.classList.add('icon-text');
    iconTextDiv.classList.add('icon-text--margin-left');
    iconWrapper.appendChild(iconTextDiv);
    let iconTextP = document.createElement('p');
    iconTextP.appendChild(document.createTextNode(listingsNumber + ' available start ' + date));
    iconTextDiv.appendChild(iconTextP);
  }
}

function launchKeyInfo(batchNumber) {
  dateTabIndex(); // Desktop: Toggle control listings when more than three listings exist

  if (browserWidth > 768) {
    if (listings.length > batchNumber) {
      listingDisplay();
      defaultListingsDisplay();
      calculateVisibleListings();

      for (const contentToggle of contentToggles) {
        contentToggle.addEventListener('click', e => {
          // This will increase with each 'Load more' click, so visible listings
          // must be captured before any further listings are made visible
          let preExpandListingsVisible = listingsVisible.length;
          e.preventDefault();

          if (preExpandListingsVisible < listings.length) {
            for (const listing of listings.entries()) {
              let targetListing = document.querySelector(`[data-id='listing-${preExpandListingsVisible}']`);
              let listingsVisibleLength = parseInt(listingsVisible.length);
              listingsLength = parseInt(listingsLength);
              let remainingItems = parseInt(listingsLength - listingsVisibleLength); // Zen scroll to first listing of newly visible listings and focus on date

              zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(targetListing, 200);
              let targetListingDate = targetListing.querySelectorAll('.key-info__date'); // Final batch of listings, zen scroll to 'load more' button and offset

              if (remainingItems <= batchNumber) {
                zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(contentToggle, 200);
                contentToggles[0].style.display = 'none';
              }

              targetListingDate[0].focus(); // Bring in newly visible listings in two phases to allow for opacity transition

              if (listing[0] < preExpandListingsVisible + batchNumber) {
                const promise = new Promise(resolve => {
                  resolve(listing[1].style.display = 'grid');
                });
                promise.then(() => {
                  listing[1].classList.remove('hide');
                }); // Calculating visible listings must run here after display properties are updated

                promise.then(() => {
                  calculateVisibleListings();
                });
              }
            }
          }
        }, false);
      }
    } else {
      contentToggles[0].style.display = 'none';
    } // Mobile: one listing visible at a time

  } else if (browserWidth < 768 && listings.length > 1 && paginatedPage) {
    let listWrapper = document.getElementById('short-course-key-info-listings');
    listWrapper.classList.add('paginated-list'); // Scroll to top of listings after each paginated index click

    let paginationControls = document.querySelectorAll('.pagination__controls > button');

    for (const paginationControl of paginationControls) {
      paginationControl.addEventListener('click', () => {
        let listingsTop = document.getElementById('short-course-key-info-listings');

        if (paginationControl.getAttribute('aria-expanded') !== true) {
          zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(listingsTop, 0);
        }
      });
    }
  } else if (browserWidth < 768 && listings.length == 1) {
    for (const listing of listings.entries()) {
      listing[0] > 0 ? listing[1].style.display = 'none' : listing[1].style.display = 'block';
    }
  }
} // Detect if page uses paginated index


paginated.length > 0 ? paginatedPage = true : paginatedPage = false;

if (paginatedPage) {
  listingsQuantity();
  launchKeyInfo(batchNumber); // Run function on resize as well as launch as some styles overriden by JS

  window.onresize = () => launchKeyInfo(batchNumber);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/key-info-box/key-info-slider.js":
/*!******************************************************!*\
  !*** ./src/patterns/key-info-box/key-info-slider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */


const className = 'key-info-slider';
let listings = document.querySelectorAll('.key-info__listing'),
    batchNumber = 3,
    contentToggles = document.querySelectorAll('.content-toggle'),
    contentSliders = document.querySelectorAll('.content-slider'),
    browserWidth = document.documentElement.scrollWidth,
    prevBtn = document.getElementById('key-info-previous-item'),
    nextBtn = document.getElementById('key-info-next-item'),
    listingHeight = '',
    listingDates = document.querySelectorAll('.key-info__date'),
    listingsVisible = [],
    listingsLength = [],
    slider = document.getElementsByClassName('key-info--short-course-slider'),
    sliderPage,
    defaultDuration = 2000,
    edgeOffset = 100; // Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

function dateTabIndex() {
  for (const listingDate of listingDates) {
    listingDate.setAttribute('tabindex', '-1');
  }
} // Initial listings display


function defaultListingsDisplay() {
  listingsLength = [];

  for (const listing of listings.entries()) {
    listingsLength.push(listings.length);
    listing[0] > batchNumber - 1 ? listing[1].classList.add('hide') : listing[1].style.display = 'grid';
  }
} // Visible listings: needed to decide if more content still to be loaded.


function calculateVisibleListings() {
  listingsVisible = [];

  for (const listing of listings) {
    if (!listing.classList.contains('hide')) {
      listingsVisible.push(listing);
    }
  }
} // Show number of listings in data set


function listingsQuantity() {
  let listingsNumber = [];

  for (const listing of listings.entries()) {
    listingsNumber.push(listing.length);
  }

  listingsNumber = listingsNumber.length;
  let datesQuantities = document.querySelectorAll('.key-info__dates-quantity');

  for (const datesQuantity of datesQuantities) {
    let date;
    listingsNumber == 1 ? date = 'date' : date = 'dates';
    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('key-info__icon--left');
    datesQuantity.appendChild(iconWrapper);
    let calendarIcon = document.createElement('span');
    calendarIcon.classList.add('fas');
    calendarIcon.classList.add('fa-calendar-day');
    iconWrapper.appendChild(calendarIcon);
    let iconTextDiv = document.createElement('div');
    iconTextDiv.classList.add('icon-text');
    iconTextDiv.classList.add('icon-text--margin-left');
    iconWrapper.appendChild(iconTextDiv);
    let iconTextP = document.createElement('p');
    iconTextP.appendChild(document.createTextNode(listingsNumber + ' available start ' + date));
    iconTextDiv.appendChild(iconTextP);
  }
}
/**
 * Launches Key Info slider pattern. Pass in how many listings should display per batch,
 * i.e. each time user selects 'Load more'.
 *  */


function launchKeyInfo(batchNumber) {
  let counter = 0; // Mobile: Show listing entry based on navigation button clicks

  function listingDisplay() {
    for (const listing of listings.entries()) {
      if (browserWidth < 768 && listings.length > 1) {
        listing[0] == counter ? listing[1].style.display = 'block' : listing[1].style.display = 'none';
      }

      listing[1].setAttribute('data-id', `listing-${listing[0]}`);
    }
  } // Mobile: Enable/disable navigation buttons based on position of listing in collection


  function navBtnState() {
    for (const contentSlider of contentSliders) {
      contentSlider.style.display = 'block';
    }

    let listingsLength = listings.length - 1;
    counter == 0 ? (prevBtn.setAttribute('disabled', true), nextBtn.removeAttribute('disabled')) : counter > 0 && counter < listingsLength ? (prevBtn.removeAttribute('disabled'), nextBtn.removeAttribute('disabled')) : (nextBtn.setAttribute('disabled', true), prevBtn.removeAttribute('disabled'));
  } // Mobile: Set mobile listings navigation buttons to correct position based on listing height


  function navBtnPosition() {
    for (const listing of listings.entries()) {
      if (counter == listing[0]) {
        listingHeight = listing[1].getAttribute('data-height');
        prevBtn.style.top = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(`-${listingHeight}`)) + Object(_util__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(100) + 'rem';
        nextBtn.style.top = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(`-${listingHeight}`)) + Object(_util__WEBPACK_IMPORTED_MODULE_2__["pxToRem"])(100) + 'rem';
      }
    }
  } // Run regardless of viewport size


  dateTabIndex(); // Desktop: Toggle control listings when more than three listings exist

  if (browserWidth > 768) {
    if (listings.length > batchNumber) {
      listingDisplay();
      defaultListingsDisplay();
      calculateVisibleListings();

      for (const contentToggle of contentToggles) {
        contentToggle.addEventListener('click', e => {
          // This will increase with each 'Load more' click, so visible listings
          // must be captured before any further listings are made visible
          let preExpandListingsVisible = listingsVisible.length;
          e.preventDefault();

          if (preExpandListingsVisible < listings.length) {
            for (const listing of listings.entries()) {
              let targetListing = document.querySelector(`[data-id='listing-${preExpandListingsVisible}']`);
              let listingsVisibleLength = parseInt(listingsVisible.length);
              listingsLength = parseInt(listingsLength);
              let remainingItems = parseInt(listingsLength - listingsVisibleLength); // Zen scroll to first listing of newly visible listings and focus on date

              zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(targetListing, 200);
              let targetListingDate = targetListing.querySelectorAll('.key-info__date'); // Final batch of listings, zen scroll to 'load more' button and offset

              if (remainingItems <= batchNumber) {
                zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(contentToggle, 0);
                contentToggles[0].style.display = 'none';
              }

              targetListingDate[0].focus(); // Bring in newly visible listings in two phases to allow for opacity transition

              if (listing[0] < preExpandListingsVisible + batchNumber) {
                const promise = new Promise(resolve => {
                  resolve(listing[1].style.display = 'grid');
                });
                promise.then(() => {
                  listing[1].classList.remove('hide');
                }); // Calculating visible listings must run here after display properties are updated

                promise.then(() => {
                  calculateVisibleListings();
                });
              }
            }
          }
        }, false);
      }
    } else {
      contentToggles[0].style.display = 'none';
    } // Mobile: one listing visible at a time

  } else if (browserWidth < 768 && listings.length > 1) {
    for (const listing of listings.entries()) {
      // Capture listing height and set to data attribute
      listing[1].style.display = 'block';
      listing[1].setAttribute('data-height', listing[1].offsetHeight);
      listing[1].style.display = 'none'; // On load, set mobile navigation buttons at correct height

      counter == 0 && listing[0] == 0 ? navBtnPosition() : null;
      listing[0] > 0 ? listing[1].style.display = 'none' : listing[1].style.display = 'block';
    }

    navBtnState();
    prevBtn.addEventListener('click', () => {
      counter = counter - 1;
      navBtnState();
      navBtnPosition();
      listingDisplay();
    });
    nextBtn.addEventListener('click', () => {
      counter = counter + 1;
      navBtnState();
      navBtnPosition();
      listingDisplay();
    });
  } else if (browserWidth < 768 && listings.length == 1) {
    for (const listing of listings.entries()) {
      listing[0] > 0 ? listing[1].style.display = 'none' : listing[1].style.display = 'block';
    }
  }
} // Detect if page uses slider


slider.length > 0 ? sliderPage = true : sliderPage = false;

if (sliderPage) {
  listingsQuantity();
  launchKeyInfo(batchNumber); // Run function on resize as well as launch as some styles overriden by JS

  window.onresize = () => launchKeyInfo(batchNumber);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/menu/menu.js":
/*!***********************************!*\
  !*** ./src/patterns/menu/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");




/**
 * Global menu
 *
 * @module patterns/menu/menu
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */




const className = 'menu',
      currentClassName = className + '__current',
      hierarchyClassName = className + '__hierarchy',
      columnsClassName = className + '__columns',
      columnClassName = columnsClassName + '__col',
      buttonClassName = className + '__button',
      buttonTextClassName = buttonClassName + '__text',
      buttonIconClassName = buttonClassName + '__icon',
      menuLevelClassNamePrefix = className + '__level',
      veilClassName = className + '__veil',
      // the menu starts with the entries below the root, not the root itself
firstLevel = 2,
      levelsSupported = 4,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_3__["reduceMotion"])() ? 0 : 999;
/**
 * Copies a sub-menu into the appropriate column for its menu level, replacing
 * the existing sub-menu if there is one.
 *
 * @param {HTMLUListElement} subMenu - A UL element representing a sub-menu.
 * @param {HTMLDivElement[]} columns - The array of column divs.
 */

function appendMenu(subMenu, columns) {
  const menuLevel = Number.parseInt(subMenu.className.slice(-1)),
        column = columns[menuLevel - firstLevel];
  column.firstChild ? column.replaceChild(subMenu.cloneNode(true), column.firstChild) : column.appendChild(subMenu.cloneNode(true));
}
/**
 * Decorate sub-menu element with the appropriate attributes.
 *
 * @param {HTMLLIElement} menuItem - The list item representing button menu item.
 * @param {HTMLULElement} subMenu - The menu item's sub-menu.
 * @returns {HTMLULElement|null} Return the sub-menu if it should be open, otherwise null.
 */


function prepareSubMenu(menuItem, subMenu) {
  const menuItemBtn = document.createElement('button'),
        iconSpan = document.createElement('span'),
        textSpan = document.createElement('span');
  menuItemBtn.setAttribute('type', 'button');
  iconSpan.toggleAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hidden, true);
  iconSpan.className = `${buttonIconClassName} fal fa-fw`;
  textSpan.className = `${buttonTextClassName}`;
  Object(_util__WEBPACK_IMPORTED_MODULE_3__["appendAll"])(menuItemBtn, [iconSpan, textSpan]);
  menuItem.insertBefore(menuItemBtn, subMenu);

  if (menuItem.className.indexOf(currentClassName) >= 0 || menuItem.className.indexOf(hierarchyClassName) >= 0) {
    /**
     * The sub-menu is in the asset lineage, so it will be opened.
     * Return it so it can be pushed into the menus array.
     */
    setMenuItemButtonDetails(menuItemBtn, true);
    return subMenu;
  } else {
    setMenuItemButtonDetails(menuItemBtn, false);
    return null;
  }
}
/**
 * Iterate over the menu lists, transforming them into the initial menu with the
 * current asset lineage open.
 *
 * @param {HTMLElement} menu - The menu container.
 * @returns {HTMLUListElement[]} An initial array of sub-menus, with attributes set.
 */


function prepareMenu(menu) {
  const menus = [];
  Array.from(menu.querySelectorAll('li')).forEach(menuItem => {
    const link = menuItem.querySelector('a'),
          subMenu = menuItem.querySelector('ul'),
          linkText = 'Visit ' + menuItem.dataset.title,
          textWrapper = document.createElement('span'),
          currentWrapper = document.createElement('span');
    /**
     * To format the current page the same as a link, we need to double-wrap
     * it in spans. To programmatically focus it, we need to give it a
     * tabindex.
     *
     * Actual links only need one span.
     */

    if (menuItem.className.indexOf(currentClassName) >= 0) {
      textWrapper.appendChild(menuItem.firstChild.cloneNode(true));
      currentWrapper.appendChild(textWrapper);
      currentWrapper.setAttribute('tabindex', -1);
      menuItem.replaceChild(currentWrapper, menuItem.firstChild);
    } else {
      textWrapper.appendChild(link.firstChild.cloneNode(true));
      link.replaceChild(textWrapper, link.firstChild);
      link.title = linkText;
    }

    if (subMenu) {
      const prepped = prepareSubMenu(menuItem, subMenu);
      prepped && menus.push(prepped);
    }
  });
  return menus;
}
/**
 * Creates a function for setting a menu to be open or closed.
 *
 * @param {HTMLElement} menu - The menu container.
 * @param {HTMLDivElement} veil - The veil div.
 * @param {HTMLButtonElement} button - The button that toggles the menu.
 * @returns {Function} A function that will set the menu to be open/closed.
 */


function menuSetter(menu, veil, button) {
  /**
   * @param {boolean} open - Set the menu to be open?
   */
  const setMenu = open => {
    menu.dataset.open = open;
    veil.dataset.on = open;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, open);
  };

  return setMenu;
}
/**
 * Scroll the selected asset lineage into view in each column of the menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function scrollMenusIntoView(menu) {
  /**
   * If the current page is in the first level, select it.
   * */
  const currentPage = menu.querySelector(`.${columnClassName}:first-of-type > ul .${currentClassName}`),
        col = currentPage && menu.querySelector(`.${columnClassName}:first-of-type > ul`);
  /**
   * The first column is the entire menu on mobile, so we need to scroll
   * the entire column if the current page is in it and off-screen.
   *
   * The other sub-menus only display a single level, so we scroll the
   * list to the open item or the current page.
   */

  Array.from(menu.querySelectorAll(`.${columnClassName} > ul`)).forEach((list, i) => {
    if (i === 0 && currentPage && Object(_util__WEBPACK_IMPORTED_MODULE_3__["isVisible"])(currentPage)) {
      /**
       * The current page is in the first column
       */
      const scrollCol = zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.createScroller(col);
      scrollCol.center(currentPage, scrollDuration);
    } else {
      const target = list.querySelector(['[data-open="true"]', `.${currentClassName}`].join(',')),
            scrollList = zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.createScroller(list);
      target && scrollList.to(target, scrollDuration);
    }
  });
}
/**
 * Opens or closes the menu, (de)activates the focus trap if provided, and
 * scrolls the sub-menus so that the current page lineage or open menus are in
 * view.
 *
 * @param {HTMLButtonElement} button - The button for toggling the menu.
 * @param {Function} setMenu - A function for setting menu attributes to be open/closed.
 * @param {object} [trap] - An optional focus trap object.
 */


function toggleMenu(button, setMenu, trap) {
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["toBool"])(expanded)) {
    trap && trap.deactivate();
    setMenu(false);
  } else {
    setMenu(true);
    trap && trap.activate();
    const menu = button.closest(`.${className}`);
    scrollMenusIntoView(menu);
  }
}
/**
 * Return all menu items from every instance of a sub-menu level.
 *
 * @param {HTMLElement} menu - The menu element.
 * @param {number} level - The menu level to retrieve.
 * @returns {HTMLLIElement[]} Every menu item of that level from every sub-menu.
 */


function menuItems(menu, level) {
  return Array.from(menu.querySelectorAll(`.${menuLevelClassNamePrefix}${level} > li`));
}
/**
 * When we change which sub-menu is open, the entire tree below it also changes
 * - whatever was open is now closed. So, we remove those sub-menus.
 *
 * @param {HTMLDivElement} column - The column to retain.
 * @param {number} level - Close everything at this level and lower.
 */


function clearColumnsToTheRight(column, level) {
  const menu = column.closest(`.${className}`);
  /**
   * Remove sub-menus from columns to the right
   */

  let nextColumn = column.nextElementSibling;

  while (nextColumn) {
    Array.from(nextColumn.childNodes).forEach(subMenu => nextColumn.removeChild(subMenu));
    nextColumn = nextColumn.nextElementSibling;
  }
  /**
   * Set all items to be closed at current level and lower, in every sub-menu.
   */


  let list = menuItems(menu, level);

  while (list.length) {
    list.forEach(menuItem => {
      const button = menuItem.querySelector('button');
      button && setMenuItemButtonDetails(button, false);
    });
    list = menuItems(menu, ++level);
  }
}
/**
 * Set sub-menu button attributes for the open/closed state.
 *
 * @param {HTMLButtonElement} button - The button to decorate.
 * @param {boolean} open - Should it be open?
 */


function setMenuItemButtonDetails(button, open) {
  const menuItem = button.closest('li'),
        sectionText = menuItem.dataset.title + ' section',
        textSpan = button.querySelector(`.${buttonTextClassName}`),
        text = open ? 'Close ' : 'Open ';
  menuItem.dataset.open = open;
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
/**
 * Open/close the sub-menu when its button is clicked.
 *
 * @param {HTMLUListElement} subMenu - Toggle the sub-menu when its button is clicked.
 */


function listenForSubMenuToggles(subMenu) {
  Array.from(subMenu.querySelectorAll('button')).forEach(button => button.addEventListener('click', () => toggleSubMenu(button), true));
}
/**
 * Toggle a sub-menu open or closed.
 *
 * When a sub-menu is opened, we clone it and add it to the next column to the
 * right.
 */


function toggleSubMenu(button) {
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded),
        menu = button.closest(`.${className}`),
        thisList = button.closest('ul'),
        thisLevel = Number.parseInt(thisList.className.slice(-1)),
        thisCol = menu.querySelector(`.${columnClassName}:nth-of-type(${thisLevel - firstLevel + 1})`),
        scrollList = zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.createScroller(thisList);
  /***
   * Whether we're opening a different sub-menu or closing the current one,
   * everything below it should collapse.
   */

  clearColumnsToTheRight(thisCol, thisLevel);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["toBool"])(expanded)) {
    setAllWithSameID(button, false);
  } else {
    const columnToTheRight = thisCol.nextSibling,
          subMenu = button.closest('li').querySelector('ul').cloneNode(true);
    columnToTheRight.appendChild(subMenu);
    /**
     * The cloned element won't have any of the event listeners the were
     * set up on the original.
     */

    listenForSubMenuToggles(subMenu);
    subMenu.querySelector(['button', 'a'].join(',')).focus();
    setAllWithSameID(button, true);
  }

  scrollList.to(button.closest('li'), scrollDuration);
}
/**
 * The desktop menus are cloned sub-sections of the overall menu. When we open
 * and close one, we need to set the others the same way.
 *
 * @param {HTMLButtonElement} button - The button that's been opened/closed.
 * @param {boolean} open - Should it be set open?
 */


function setAllWithSameID(button, open) {
  Array.from(document.querySelectorAll(`[data-id="${button.closest('li').dataset.id}"]`)).forEach(menuItem => setMenuItemButtonDetails(menuItem.querySelector('button'), open));
}
/**
 * Create an array of divs representing each column of the menu.
 *
 * @param {number} levels - How many columns to create.
 * @returns {HTMLDivElement[]} An array of divs representing the columns.
 */


function createColumns(levels) {
  const columns = [];

  for (let i = 0; i < levels; i++) {
    columns[i] = document.createElement('div');
    columns[i].className = columnClassName;
  }

  return columns;
}
/**
 * Turn the menu label into a button to toggle the menu open and closed.
 *
 * While the menu is open, a focus trap should limit tab indexing to the menu
 * and its button, and the content should be veiled.
 *
 * @param {HTMLElement} label - The menu label.
 * @param {HTMLButtonElement} button - A button element.
 * @param {Function} setMenu - A function to open/close the menu.
 */


function createMenuToggle(label, button, setMenu) {
  const buttonWrapper = document.createElement('div'),
        menu = label.closest(`.${className}`);
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hasPopup, 'menu');
  Array.from(label.childNodes).forEach(child => buttonWrapper.appendChild(child));
  button.appendChild(buttonWrapper);
  const trap = focus_trap__WEBPACK_IMPORTED_MODULE_2___default()(menu, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: () => {
      const open = Array.from(menu.querySelectorAll([`.${currentClassName} > span`, `.${hierarchyClassName} > a`, `.${columnClassName} > ul > li:first-of-type > a`].join(','))).filter(elem => elem && Object(_util__WEBPACK_IMPORTED_MODULE_3__["isVisible"])(elem));
      return open[open.length - 1];
    },
    onDeactivate: () => toggleMenu(button, setMenu),
    clickOutsideDeactivates: true
  });
  button.addEventListener('click', () => toggleMenu(button, setMenu, trap), true);
}
/**
 * Transform the Matrix-generated menu lists into an interactive menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function launchMenu(menu) {
  const label = menu.querySelector(`.${buttonClassName}`),
        menuList = menu.querySelector(`.${menuLevelClassNamePrefix}${firstLevel}`),
        button = document.createElement('button'),
        columnsContainer = document.createElement('div'),
        columns = createColumns(levelsSupported),
        veil = document.createElement('div'),
        setMenu = menuSetter(menu, veil, button),
        menus = prepareMenu(menu);
  columnsContainer.className = columnsClassName;
  /**
   * Put the entire menu in the first column.
   */

  columns[0].appendChild(menuList);
  createMenuToggle(label, button, setMenu);
  veil.className = veilClassName;
  veil.toggleAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hidden, true);
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  setMenu(false);
  menus.forEach(menu => appendMenu(menu, columns));
  columns.forEach(column => columnsContainer.appendChild(column));
  menu.appendChild(columnsContainer);
  label.appendChild(button);
  listenForSubMenuToggles(columnsContainer);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchMenu,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/paginated-list/paginated-list.js":
/*!*******************************************************!*\
  !*** ./src/patterns/paginated-list/paginated-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagination/pagination.js */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../aria-attributes.js */ "./src/aria-attributes.js");




/**
 * Paginated list
 *
 * @module patterns/paginated-list/paginated-list
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */



const className = 'paginated-list',
      minimumPage = 4,
      defaultPage = 8,
      maximumPage = 12;
/**
 * Ensure the page size is within the defined range.
 *
 * @param {number} pageSizeSetting - The user-requested page size.
 * @returns {number} The validated page size.
 */

function setPageSize(pageSizeSetting) {
  if (pageSizeSetting < minimumPage) {
    return minimumPage;
  } else if (pageSizeSetting > maximumPage) {
    return maximumPage;
  } else {
    return pageSizeSetting;
  }
}
/**
 * Transform an (un)ordered list into a paginated list, preserving the numbering
 * of the original if set.
 *
 * If the element is not a list or there are too few items to paginate, clean
 * up the DOM and return without paginating.
 *
 * @param {HTMLUListElement|HTMLOListElement} list - An (un)ordered list element with the paginated-list class.
 */


function launchPaginatedList(list) {
  if (!(list.tagName === 'UL' || list.tagName === 'OL')) {
    /**
     * not a list, remove the classname
     * to avoid conflicting styles then bail
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(list, className, false);
    return;
  }

  const pageSizeSetting = Number.parseInt(list.dataset.pagesize) ? Number.parseInt(list.dataset.pagesize) : defaultPage,
        listItems = Array.from(list.querySelectorAll('li')),
        pageSize = setPageSize(pageSizeSetting);

  if (listItems.length <= pageSize) {
    /**
     * list too short, doesn’t need pagination.
     * remove the classname to avoid conflicting
     * styles then bail
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(list, className, false);
    return;
  }

  const pages = [],

  /** ordered lists can be reversed.
   * if the original was reversed,
   * all our sub-lists must be too
   */
  reversed = list.tagName === 'OL' && list.hasAttribute('reversed') ? true : false,

  /**
   * the start attribute may be set,
   * if not the start is either 1
   * or the list length (if reversed)
   */
  start = list.tagName === 'OL' && list.hasAttribute('start') ? Number.parseInt(list.hasAttribute('start')) : reversed ? listItems.length : 1;
  list.setAttribute('role', 'presentation');
  let pageNumber = 0,
      pageItems = listItems.slice(0, pageSize);
  /* loop through items while we can still make a page */

  while (pageItems.length > 0) {
    const page = document.createElement('li'),
          newList = list.tagName === 'UL' ? document.createElement('ul') : document.createElement('ol');
    /**
     * set start attribute and keep reversed attribute
     * on ordered lists
     */

    if (list.tagName === 'OL') {
      if (!reversed) {
        newList.setAttribute('start', pageSize * pageNumber + start);
      } else {
        newList.setAttribute('start', start - pageSize * pageNumber);
        newList.toggleAttribute('reversed', true);
      }
    }
    /* move this page of items into the page and inner list */


    pageItems.forEach(listItem => newList.appendChild(listItem));
    page.appendChild(newList);
    page.className = _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_1__["pageClassName"];
    page.setAttribute('tabindex', -1);
    page.setAttribute(_aria_attributes_js__WEBPACK_IMPORTED_MODULE_3__["default"].label, `Page ${pageNumber + 1}`);
    pages.push(page);
    /* try to fetch another page */

    ++pageNumber;
    pageItems = listItems.slice(pageSize * pageNumber, pageSize * pageNumber + pageSize);
  }
  /* add the pages to the original list in bulk */


  pages.forEach(page => list.appendChild(page));
  Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_1__["addPagination"])(list, listItems.length);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchPaginatedList,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/pagination/pagination.js":
/*!***********************************************!*\
  !*** ./src/patterns/pagination/pagination.js ***!
  \***********************************************/
/*! exports provided: addPagination, pageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPagination", function() { return addPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageClassName", function() { return pageClassName; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");





/**
 * Pagination
 *
 * @module patterns/pagination/pagination
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */



const className = 'pagination',
      pageClassName = 'page',
      wrapperClassName = className + '__wrapper',
      controlsClassName = className + '__controls',
      controlsElementClassName = controlsClassName + '__element',
      ellipsisClassName = controlsClassName + '__ellipsis',
      buttonClassName = controlsClassName + '__button',
      summaryClassName = className + '__summary',
      nextPrevRegEx = /pagination__controls__button--(next|prev)/,
      maximumButtonsToDisplay = 6,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_3__["reduceMotion"])() ? 0 : 999;
/**
 * Creates a function for enabling/disabling the next/previous page buttons when
 * there's nothing for them to do.
 *
 * @param {HTMLButtonElement} next - The next page button.
 * @param {HTMLButtonElement} prev - The previous page button.
 * @param {number} pageCount - The total number of pages in this paginated element.
 * @returns {Function} A function that will disable the next/previous buttons when there is no next/previous page.
 */

function createToggleNextPrev(next, prev, pageCount) {
  /***
   * Disables the next/previous page buttons if there is no next/previous page
   * relative to this page.
   *
   * @param {number} pageNumber - The current page number.
   */
  const toggleNextPrev = pageNumber => {
    pageCount === pageNumber ? next.toggleAttribute('disabled', true) : next.toggleAttribute('disabled', false);
    1 === pageNumber ? prev.toggleAttribute('disabled', true) : prev.toggleAttribute('disabled', false);
  };

  return toggleNextPrev;
}
/**
 * Calculate proximity to current page, so we can hide extraneous buttons.
 *
 * @param {number} pageCount - The total number of pages in this paginated element.
 * @param {HTMLButtonElement[]} controls - An array of control buttons.
 * @param {number} pageNumber - The number of the current page.
 */


function setProximity(pageCount, controls, pageNumber) {
  if (pageCount > maximumButtonsToDisplay) {
    controls.forEach(function (button) {
      if (!button.className.match(nextPrevRegEx)) {
        const buttonNumber = Number.parseInt(button.dataset.page);
        button.dataset.proximity = buttonNumber - pageNumber;
      }
    });
  }
}
/**
 * Set the attributes to make a page button (un)selected.
 *
 * @param {HTMLButtonElement} button - The button element.
 * @param {boolean} selected - Should the button indicated selection?
 */


function toggleButton(button, selected) {
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, selected);
  button.toggleAttribute('disabled', selected);
  selected ? button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].current, 'page') : button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].current);
}
/**
 * 'Close' all pages and mark all buttons as not selected.
 *
 * @param {HTMLElement[]} pages - An array of page elements.
 * @param {HTMLButtonElement[]} controls - An array of control buttons.
 */


function closeAll(pages, controls) {
  pages.forEach(page => page.dataset.open = false);
  controls.forEach(function (button) {
    if (!button.className.match(nextPrevRegEx)) {
      toggleButton(button, false);
    }
  });
}
/**
 * Create a function that, given a page number, sets the page to be open and
 * optionally scrolls it into view.
 *
 * @param {HTMLElement[]} pages - The pages of this paginated element.
 * @param {HTMLElement} controls - The nav element containing the pagination control buttons.
 * @param {Function} toggleNextPrev - A function to enable/disable the next/previous page buttons when appropriate.
 * @returns {Function} A function for opening a given page number and optionally scrolling it into view.
 */


function createOpenPage(pages, controls, toggleNextPrev) {
  /**
   * Open a given page number and optionally scroll it into view.
   *
   * @param {number} pageNumber - The number of the page to open.
   * @param {boolean} [focus] - Focus the newly-opened page? Defaults to false.
   * @param {boolean} [scrollTo] - Scroll to the top of the newly-opened page? Defaults to false.
   */
  const openPage = (pageNumber, focus, scrollTo) => {
    const pagesArray = Array.from(pages.querySelectorAll(`.${pageClassName}`)),
          controlsArray = Array.from(controls.querySelectorAll('button'));
    closeAll(pagesArray, controlsArray);
    const page = pages.querySelector(`.${pageClassName}:nth-of-type(${pageNumber})`),
          button = controls.querySelector(`[data-page="${pageNumber}"]`);
    setProximity(pagesArray.length, controlsArray, pageNumber);
    toggleNextPrev(pageNumber);
    page.dataset.open = true;
    toggleButton(button, true);
    focus && page.focus();
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(page, scrollDuration);
  };

  return openPage;
}
/**
 * Create a function that will respond to a next or previous button click.
 *
 * @param {HTMLElement} controls - The controls container.
 * @param {Function} newPageFn - A function that, given the current page number, returns the page number to open.
 * @param {Function} openPage - A function that, given a page number, opens the page and optionally scrolls it into view.
 * @returns {Function} A function to respond to next/previous button clicks.
 */


function createNextPrevOpenPage(controls, newPageFn, openPage) {
  /**
   * Returns a function that responds to next/previous button clicks.
   */
  const nextPrevOpenPage = () => {
    const currentPage = Number.parseInt(controls.querySelector(`[${_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded}="true"]`).dataset.page);
    openPage(newPageFn(currentPage), true, false);
  };

  return nextPrevOpenPage;
}
/**
 * Create and set summary text for a paginated element.
 *
 * @param {HTMLParagraphElement} summary - The element to transform into a summary.
 * @param {number} pageCount - The number of pages in the paginated element.
 * @param {number} [itemCount] - Optionally, the total number of items across all pages.
 */


function setSummaryText(summary, pageCount, itemCount) {
  let summaryText = `${pageCount} pages)`;

  if (itemCount && Number.parseInt(itemCount)) {
    summaryText = `(${itemCount} items on ` + summaryText;
  } else {
    summaryText = '(' + summaryText;
  }

  summary.appendChild(document.createTextNode(summaryText));
}
/**
 * Sets attributes and adds listeners to the next/previous page buttons.
 *
 * @param {HTMLButtonElement} next - The next page button element.
 * @param {HTMLButtonElement} prev - The previous page button element.
 * @param {HTMLElement} controls - The controls container element.
 * @param {number} pageCount - The total number of pages in the paginated element.
 * @param {Function} openPage - A function that, given a page number, opens the page and optionally scrolls it into view.
 */


function prepareNextPrev(next, prev, controls, pageCount, openPage) {
  [{
    button: next,
    class: buttonClassName + '--next',
    text: 'Next page',
    newPageFn: pageNumber => pageNumber < pageCount && pageNumber + 1
  }, {
    button: prev,
    class: buttonClassName + '--prev',
    text: 'Previous page',
    newPageFn: pageNumber => pageNumber > 1 && pageNumber - 1
  }].forEach(button => {
    const btn = button.button,
          btnSpan = document.createElement('span');
    btn.className = button.class;
    btn.setAttribute('type', 'button');
    btnSpan.appendChild(document.createTextNode(button.text));
    btn.appendChild(btnSpan);
    btn.addEventListener('click', createNextPrevOpenPage(controls, button.newPageFn, openPage), true);
  });
}
/**
 * Create a new page select button.
 *
 * @param {number} pageNumber - The page that this button is for.
 * @param {number} totalPages - The total number of pages in the paginated element.
 * @returns {HTMLButtonElement} A new button element.
 */


function createPageButton(pageNumber, totalPages) {
  const button = document.createElement('button'),
        buttonSpan = document.createElement('span');
  buttonSpan.appendChild(document.createTextNode(pageNumber));
  button.dataset.page = pageNumber;
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, `Open page ${pageNumber}`);

  if (totalPages - pageNumber === 1) {
    button.className = `${controlsElementClassName} ${buttonClassName} ${buttonClassName}--penultimate`;
  } else if (totalPages === pageNumber) {
    button.className = `${controlsElementClassName} ${buttonClassName} ${buttonClassName}--last`;
  } else {
    button.className = `${controlsElementClassName} ${buttonClassName}`;
  }

  button.appendChild(buttonSpan);
  return button;
}
/**
 * Adds pagination controls to an element containing two or more page elements.
 *
 * e.g.
 *
 * <div class="pagination">
 * <div class="page">Page 1 content</div>
 * <div class="page">Page 2 content</div>
 * </div>
 *
 * @param {HTMLElement} elem - The element to paginate.
 * @param {number} [itemCount] - Optionally, the total number of items on all pages combined.
 */


function addPagination(elem, itemCount) {
  const wrapper = document.createElement('div'),
        pages = Array.from(elem.querySelectorAll(`.${pageClassName}`)),
        controls = document.createElement('nav'),
        next = document.createElement('button'),
        prev = document.createElement('button'),
        pageButtons = [],
        summary = document.createElement('p'),
        toggleNextPrev = createToggleNextPrev(next, prev, pages.length),
        openPage = createOpenPage(elem, controls, toggleNextPrev),
        ellipsisFirst = document.createElement('span'),
        ellipsisFirstInner = document.createElement('span'),
        ellipsisLast = document.createElement('span'),
        ellipsisLastInner = document.createElement('span');

  if (!pages.length > 1) {
    /**
     * too few pages, doesn’t need pagination.
     * remove the classname to avoid conflicting
     * styles then bail
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(elem, className, false);
    return;
  }

  ellipsisFirst.className = `${controlsElementClassName} ${ellipsisClassName} ${ellipsisClassName}--first`;
  ellipsisFirstInner.innerText = '…';
  ellipsisFirst.appendChild(ellipsisFirstInner);
  ellipsisLast.className = `${controlsElementClassName} ${ellipsisClassName} ${ellipsisClassName}--last`;
  ellipsisLastInner.innerText = '…';
  ellipsisLast.appendChild(ellipsisLastInner);
  prepareNextPrev(next, prev, controls, pages.length, openPage);
  pageButtons.push(prev);

  for (let pageNumber = 1; pageNumber <= pages.length; pageNumber++) {
    const pageButton = createPageButton(pageNumber, pages.length);
    pageButton.addEventListener('click', () => openPage(pageNumber, true, false));

    if (pages.length > 2 && pageNumber === pages.length) {
      pageButtons.push(ellipsisLast);
    }

    pageButtons.push(pageButton);

    if (pages.length > 2 && pageNumber === 1) {
      pageButtons.push(ellipsisFirst);
    }
  }

  pageButtons.push(next);
  wrapper.className = wrapperClassName;
  controls.className = controlsClassName;
  controls.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, 'Pagination');
  summary.className = summaryClassName;
  setSummaryText(summary, pages.length, itemCount);
  elem.parentNode.replaceChild(wrapper, elem);
  wrapper.appendChild(elem);
  pageButtons.forEach(pageButton => controls.appendChild(pageButton));
  openPage(1, false, false);
  wrapper.appendChild(controls);
  wrapper.appendChild(summary);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: addPagination,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/tabs/tabs.js":
/*!***********************************!*\
  !*** ./src/patterns/tabs/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main */ "./src/main.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");




/**
 * Tabs
 *
 * @module patterns/tabs/tabs
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018-2019
 */





const className = 'tabs',
      panelClassName = className + '__panel',
      linksClassName = className + '__links',
      endKey = 35,
      homeKey = 36,
      arrowLeft = 37,
      arrowUp = 38,
      arrowRight = 39,
      arrowDown = 40,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_3__["reduceMotion"])() ? 0 : 999,
      scrollTo = false;
/**
 * Set the attributes of a tab to be selected or not selected.
 *
 * Unselected tabs are removed from the tab order.
 *
 * @param {HTMLAnchorElement} link - The anchor element to toggle.
 * @param {boolean} selected - Set the element to be selected?
 */

function toggleLink(link, selected) {
  link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].selected, selected);

  if (selected) {
    //link.removeAttribute('tabindex');
    link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].current, true);
  } else {
    link.setAttribute('tabindex', 0);
    link.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].current);
  }
}
/**
 * Change the selection to the requested tab.
 *
 * @param {HTMLAnchorElement} newTab - The selected tab.
 */


function selectTab(newTab) {
  const tabs = newTab.closest(`.${className}`),
        controls = tabs.querySelector(`.${linksClassName}`),
        linkItems = Array.from(controls.querySelectorAll('li')),
        panels = Array.from(tabs.querySelectorAll(`.${panelClassName}`));
  /**
   * Unselect every tab and related panel.
   */

  linkItems.forEach(linkItem => {
    toggleLink(linkItem.firstElementChild, false);
  });
  panels.forEach(panel => panel.toggleAttribute('hidden', true));
  /**
   * Select the requested tab.
   */

  toggleLink(newTab, true);
  tabs.querySelector(newTab.hash).toggleAttribute('hidden', false);
  history.pushState(null, null, newTab.hash);
  /**
   * Move focus to the section and optionally scroll it into view.
   */

  newTab.focus();
  scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(tabs, scrollDuration);
}
/**
 * Respond to event changing tab selection.
 *
 * @param {Event} e - The initiating event.
 * @param {HTMLAnchorElement} newTab - The selected tab.
 */


function selectTabEvent(e, newTab) {
  e.preventDefault();
  selectTab(newTab);
}
/**
 * Respond to cursor key events inside the tabbed section.
 *
 * @param {Event} e - The initiating keydown event.
 * @param {HTMLElement} tabs - The controls for the tabbed section.
 */


function keyEvents(e, tabs) {
  const currentTab = tabs.querySelector(`[${_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].selected}="true"]`),
        currentTabLI = currentTab.parentNode;
  let newTab = null;

  if (arrowLeft === e.which) {
    /**
     * Previous tab has been requested - if we're already at the beginning,
     * we need to wrap around to the last tab.
     */
    currentTabLI.previousElementSibling ? newTab = currentTabLI.previousElementSibling.firstElementChild : newTab = tabs.querySelector('li:last-of-type a');
  } else if (arrowRight === e.which) {
    /**
     * Next tab has been requested - if we're already at the end, we need
     * to wrap around to the first tab.
     */
    currentTabLI.nextElementSibling ? newTab = currentTabLI.nextElementSibling.firstElementChild : newTab = tabs.querySelector('li:first-of-type a');
  } else if (arrowDown === e.which) {
    /**
     * Move focus into the tab content.
     */
    tabs.querySelector(currentTab.hash).focus();
  } else if (arrowUp === e.which) {
    /**
     * Move focus to the currently selected tab control.
     */
    currentTab.focus();
  } else if (homeKey === e.which) {
    /**
     * First tab
     */
    newTab = tabs.querySelector('li:first-of-type a');
  } else if (endKey === e.which) {
    /**
     * Last tab
     */
    newTab = tabs.querySelector('li:last-of-type a');
  }

  newTab && selectTabEvent(e, newTab);
}
/**
 * Set attributes and listeners for the tabbed section controls.
 *
 * @param {HTMLLIElement[]} linkItems - An array of list items containing the tab anchors.
 * @returns {boolean} A boolean indicating whether the current URL has an anchor pointing to a panel in this tabbed section.
 */


function prepareLinks(linkItems) {
  let idLinked = false;
  linkItems.forEach(linkItem => {
    const link = linkItem.firstElementChild;
    linkItem.setAttribute('role', 'presentation');
    link.setAttribute('role', 'tab');

    if (link.hash === window.location.hash) {
      idLinked = link.hash;
      toggleLink(link, true);
    } else {
      toggleLink(link, false);
    }

    link.addEventListener('click', e => selectTabEvent(e, link), true);
  });
  return idLinked;
}
/**
 * Set attributes for the tabbed section panels.
 *
 * @param {HTMLElement[]} panels - An array of tab panels.
 */


function preparePanels(panels) {
  panels.forEach(panel => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', 0);
    panel.toggleAttribute('hidden', true);
  });
}
/**
 * Add accordion functionality for mobile.
 *
 * @param {HTMLElement} tabs - An element transformed into a tabbed section
 */


function accordionize(tabs) {
  const wrapper = document.createElement('div'),
        accordion = document.createElement('div');
  wrapper.className = 'tabs--accordion';
  accordion.className = 'accordion';
  accordion.id = `accordion${tabs.dataset.assetid}`;
  accordion.dataset.allowsingle = 'false';
  accordion.dataset.defaultopen = 'true';
  accordion.dataset.level = tabs.dataset.level;
  accordion.dataset.tabs = tabs.dataset.tabs;
  accordion.dataset.toggleopen = 'true';
  Array.from(tabs.querySelectorAll(`.${panelClassName}`)).forEach(panel => {
    const heading = panel.querySelector(`.${panelClassName}__heading`),
          body = panel.querySelector(`.${panelClassName}__body`),
          accordionHeading = document.createElement(`h${accordion.dataset.level}`),
          accordionSection = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = `accordion${tabs.dataset.assetid}-header${panel.dataset.assetid}`;
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].labelledBy);
    accordionHeading.innerText = heading.innerText.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = `accordion${tabs.dataset.assetid}-body${panel.dataset.assetid}`;
    accordionSection.innerHTML = body.innerHTML;
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["appendAll"])(accordion, [accordionHeading, accordionSection]);
  });
  tabs.parentNode.insertBefore(wrapper, tabs);
  wrapper.appendChild(tabs);
  wrapper.appendChild(accordion);
  Object(_main__WEBPACK_IMPORTED_MODULE_2__["tryCatch"])(() => _accordion_accordion__WEBPACK_IMPORTED_MODULE_4__["default"].launchFn(accordion));
}
/**
 * Transform an element with the tabs class name into a tabbed section.
 *
 * A tabbed section is expected to contain a list of anchors pointing to each
 * section, followed by the sections themselves.
 *
 * e.g.
 *
 * <div class="tabs">
 * <ul class="tabs__links">
 * <li><a href="#tab1">Tab 1</a></li>
 * <li><a href="#tab2">Tab 2</a></li>
 * </ul>
 * <section class="tabs__panel" id="tab1">Content 1</section>
 * <section class="tabs__panel" id="tab2">Content 2</section>
 * </div>
 *
 * @param {HTMLElement} tabs - An element with the tabs class
 */


function launchTabs(tabs) {
  const controls = tabs.querySelector(`.${linksClassName}`),
        linkItems = Array.from(controls.querySelectorAll('li')),
        panels = Array.from(tabs.querySelectorAll(`.${panelClassName}`));

  if (linkItems.length === 1) {
    /**
     * don't make one tab into a tabbed section, makes no sense
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(tabs, className, false);
    return;
  }

  controls.setAttribute('role', 'tablist'); // by default no-tabs is zero. If yes it would not css style the tabs. Also check template in squiz

  if (tabs.getAttribute('data-notabs') === '0') {
    preparePanels(panels);
  }

  const idLinked = prepareLinks(linkItems);

  if (linkItems.length > Number.parseInt(tabs.dataset.mobiletabs)) {
    accordionize(tabs);
  }
  /**
   * If the URL doesn't include a hash pointing to one of these tabs, we
   * select the first one. Otherwise unhide the first tab.
   */


  if (!idLinked) {
    toggleLink(linkItems[0].firstElementChild, true);
    panels[0].toggleAttribute('hidden', false);
  } else {
    const selectedTab = tabs.querySelector(idLinked);
    selectedTab.toggleAttribute('hidden', false);
  }
  /**
   * Enable keyboard access to tabs with the cursor keys.
   */


  tabs.addEventListener('keydown', e => keyEvents(e, tabs), true);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchTabs,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/theme-switcher/theme-switcher.js":
/*!*******************************************************!*\
  !*** ./src/patterns/theme-switcher/theme-switcher.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Theme switcher
 *
 * @module patterns/theme-switcher/theme-switcher
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */


const className = 'theme-switcher',
      classPrefix = 'theme--',
      cookieName = 'cityTheme',
      cookieOptions = {
  expires: 365,
  path: '/',
  samesite: 'strict',
  secure: true
};
/**
 * Delete the theme cookie and remove the theme class from the HTML element.
 */

function removeThemes() {
  const html = document.querySelector('html');
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(cookieName, cookieOptions);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(html, classPrefix, true);
}
/**
 * Add the theme class to the HTML element and set a cookie so the theme
 * setting will be preserved as we browse the site.
 *
 * @param {string} theme - A string representing a theme class.
 */


function addTheme(theme) {
  const html = document.querySelector('html');
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(cookieName, theme, cookieOptions);
  html.className += ` ${classPrefix}${theme}`;
}
/**
 * Respond to theme button clicks.
 *
 * @param {HTMLElement} themeList - A list of buttons for setting or clearing the site theme.
 */


function launchThemeSwitcher(themeList) {
  Array.from(themeList.querySelectorAll('button')).forEach(button => button.addEventListener('click', () => {
    removeThemes();

    if (button.dataset.action !== 'clear') {
      addTheme(button.dataset.theme);
    }
  }, true));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchThemeSwitcher,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, parametersToObject, objectToParameters, gaEvent, appendAll, pxToRem, numberFromString, browserBackForward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBool", function() { return toBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceMotion", function() { return reduceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parametersToObject", function() { return parametersToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToParameters", function() { return objectToParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaEvent", function() { return gaEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendAll", function() { return appendAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return pxToRem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFromString", function() { return numberFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserBackForward", function() { return browserBackForward; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Useful utility functions
 *
 * @module util
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */

/**
 * Turns string boolean into real boolean.
 *
 * @param {string} s - A string that may be 'true'.
 * @returns {boolean} True if 'true'.
 */
function toBool(s) {
  return s === 'true' ? true : false;
}

const partialMatchFn = m => s => s.indexOf(m) < 0,
      fullMatchFn = m => s => s !== m;
/**
 * Remove a class name from an HTML element.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @param {string} className - A string representing the class to remove.
 * @param {boolean} [removePartials] - If true, remove partially matching classes.
 */


function removeClass(elem, className, removePartials) {
  const matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(s => matchFn(s)).join(' ');
}
/**
 * Detect whether reduced motion is enabled.
 *
 * If it is, you should shortcut animations, disable autoplay elements, avoid
 * smooth scrolling in favour of jump scrolling, etc.
 *
 * Currently unsupported by Chrome, but works in Safari and Firefox.
 *
 * @returns {boolean} Boolean indicating that the reduce motion media query matches.
 */

function reduceMotion() {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return reducedMotionQuery.matches ? true : false;
}
/**
 * Predicate testing whether an element is currently visible, as opposed to
 * displayed: none; or similar. Doesn't necessarily mean it's visible in the
 * window.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @returns {boolean} - Is it visible?
 */

function isVisible(elem) {
  return elem.offsetHeight !== 0 && elem.offsetWidth !== 0 ? true : false;
}
/**
 * Turn a query string into an object.
 *
 * @param {string} parameterString - An HTML query string.
 * @returns {object} An object containing the parameters.
 */

function parametersToObject(parameterString) {
  const parameters = {};
  parameterString.substr(1).split('&').forEach(parameter => {
    const _parameter$split = parameter.split('='),
          _parameter$split2 = _slicedToArray(_parameter$split, 2),
          k = _parameter$split2[0],
          v = _parameter$split2[1];

    parameters[k] = v;
  });
  return parameters;
}
/**
 * Turn an object into a query string.
 *
 * @param {object} parameterObj - An object containing the parameters and their values.
 * @returns {string} A string of the parameters.
 */

function objectToParameters(parameterObj) {
  if (Object.keys(parameterObj).length > 0) {
    let parameters = '?';

    for (const key in parameterObj) {
      parameters.length !== 1 && (parameters += '&');
      parameters += key + '=' + parameterObj[key];
    }

    return parameters;
  } else {
    return '';
  }
}
/**
 * Track a Google Analytics event.
 *
 * @param {string} event - The event key for Tag Manager.
 * @param {string} eventCategory - The event category.
 * @param {string} eventAction - The event action.
 * @param {string} [eventLabel] - The event label.
 * @param {number} [eventValue] - The event value.
 * @param {boolean} [nonInteractionHit] - Does this count as interacting with the page?
 */

function gaEvent(event, eventCategory, eventAction, eventLabel, eventValue, nonInteractionHit) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: event,
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    eventValue: eventValue,
    nonInteractionHit: nonInteractionHit
  });
}
/**
 * Append an array of elements to an element.
 *
 * @param {HTMLElement} elem - The parent element.
 * @param {HTMLElement[]} children - An array of elements to append to it.
 */

function appendAll(elem, children) {
  children.forEach(child => elem.appendChild(child));
}
/**
 * Convert a pixel value to equivalent REM value.
 *
 * @param {number} pxValue - Value in pixels.
 */

function pxToRem(pxValue) {
  let browserWidth = document.documentElement.scrollWidth,
      fontBase;
  browserWidth > 768 ? fontBase = 18 : fontBase = 16;
  let remValue = pxValue / fontBase;
  return remValue;
}
/**
 * Extract number from string, e.g. return '123' from string 'a1b2c3'.
 *
 * @param {string} string - String
 */

function numberFromString(string) {
  let number = string.replace(/\D/g, '');
  return number;
}
/**
 * Variable to capture browser back/forward event
 */

let browserBackForward = window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map