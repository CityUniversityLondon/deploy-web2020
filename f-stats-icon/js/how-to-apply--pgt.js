/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"how-to-apply--pgt": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([6,"vendor","react"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/how-to-apply--pgt.js":
/*!**********************************!*\
  !*** ./src/how-to-apply--pgt.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/how-to-apply/how-to-apply--pgt */ "./src/patterns/how-to-apply/how-to-apply--pgt.js");
/* harmony import */ var _patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/how-to-apply/pgt-data */ "./src/patterns/how-to-apply/pgt-data.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! edn-to-js */ "./node_modules/edn-to-js/dist/main.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(edn_to_js__WEBPACK_IMPORTED_MODULE_5__);




/**
 * How to apply PGT entry
 *
 * @author Web Development
 * @copyright City, University of London 2020
 */





document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const howToApplyCTAs = document.querySelectorAll('.how-to-apply--pgt--js');
    howToApplyCTAs && Array.from(howToApplyCTAs).forEach(howToApply => {
      Object(_patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_4__["howToApplyConfig"])(howToApply.dataset.config).then(config => {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: edn_to_js__WEBPACK_IMPORTED_MODULE_5___default()(config),
          element: howToApply
        }), howToApply);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/how-to-apply/how-to-apply--pgt.js":
/*!********************************************************!*\
  !*** ./src/patterns/how-to-apply/how-to-apply--pgt.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__);





/**
 * How to apply for postgraduate taught degrees
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/how-to-apply/how-to-apply--pgt
 * @author Web Development
 * @copyright City, University of London 2020
 */




const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/**
 * Launch the how to apply modal.
 *
 * @param {object} props The JSON configuration file for the modal.
 * @return {object} The React component to render.
 */

function HowToApply(props) {
  const entryPoints = distilConfiguration(props.config),
        initialPreferences = {
    qualification: Object.keys(entryPoints).length === 1 ? Object.keys(entryPoints[0])[0] : null,
    subject: null,
    entry: null,
    location: null
  },
        [modalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        [preferences, setPreferences] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialPreferences),
        [question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(nextQuestion(preferences, entryPoints)),
        [multipleSubjects, setMultipleSubjects] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        [multipleEntryPoints, setMultipleEntryPoints] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        [multipleLocations, setMultipleLocations] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        qualificationQuestion = question === 'qualification' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Choose the qualification you wish to apply for:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, entryPoints.map((qualification, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'qualification' + i
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.qualification = Object.keys(qualification)[0];
      const subjectOptions = qualification[newPreferences.qualification];

      if (subjectOptions.length === 1) {
        newPreferences.subject = 'UNIQUE';
        setMultipleSubjects(false);
      } else {
        newPreferences.subject = null;
        setMultipleSubjects(true);
      }

      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object.keys(qualification)[0])))))),
        subjectQuestion = question === 'subject' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Choose the route you wish to apply for:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, nextLevel(entryPoints, preferences.qualification).map((subject, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'subject' + i
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.subject = Object.keys(subject)[0];
      const entryOptions = subject[newPreferences.subject];

      if (entryOptions.length === 1) {
        newPreferences.entry = Object.keys(entryOptions[0])[0];
        setMultipleEntryPoints(false);
      } else {
        newPreferences.entry = null;
        setMultipleEntryPoints(true);
      }

      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object.keys(subject)[0])))))),
        entryQuestion = question === 'entry' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Choose the entry point you wish to apply for:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, nextLevel(nextLevel(entryPoints, preferences.qualification), preferences.subject).map((entryPoint, i) => {
    const formattedDate = new Date(Object.keys(entryPoint)[0]);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: 'entry-point' + i
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: () => {
        const newPreferences = preferences;
        newPreferences.entry = Object.keys(entryPoint)[0];
        const locationOptions = entryPoint[newPreferences.entry];

        if (locationOptions.length === 1) {
          newPreferences.location = Object.keys(locationOptions[0])[0];
          setMultipleLocations(false);
        } else {
          newPreferences.location = null;
          setMultipleLocations(true);
        }

        setPreferences(newPreferences);
        setQuestion(nextQuestion(newPreferences, entryPoints));
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, months[formattedDate.getMonth()], ' ', formattedDate.getFullYear())));
  }))),
        locationQuestion = question === 'location' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Choose where you wish to study:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, nextLevel(nextLevel(nextLevel(entryPoints, preferences.qualification), preferences.subject), preferences.entry).map((location, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'location' + i
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.entry = Object.keys(location)[0];
      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object.keys(location)[0])))))),
        applyQuestion = question === 'apply' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Apply online now:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, nextLevel(nextLevel(nextLevel(nextLevel(entryPoints, preferences.qualification), preferences.subject), preferences.entry), preferences.location).map((method, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'method' + i
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: method[Object.keys(method)[0]]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object.keys(method)[0], ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-external-link",
    "aria-label": "(external link)"
  }))))))),
        qualificationsProgress = Object.keys(entryPoints).length > 1 ? question === 'qualification' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Qualification"))) : preferences.qualification ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.qualification = null;
      newPreferences.subject = null;
      newPreferences.entry = null;
      newPreferences.location = null;
      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose qualification"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, preferences.qualification))) : null : null,
        subjectsProgress = multipleSubjects ? question === 'subject' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Route"))) : preferences.subject ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.subject = null;
      newPreferences.entry = null;
      newPreferences.location = null;
      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose study route"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, preferences.subject))) : null : null,
        entryPointsProgress = multipleEntryPoints ? question === 'entry' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Entry point"))) : preferences.entry ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.entry = null;
      newPreferences.location = null;
      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose entry point"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, months[new Date(preferences.entry).getMonth()], ' ', new Date(preferences.entry).getFullYear()))) : null : null,
        locationsProgress = multipleLocations ? question === 'location' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Location"))) : preferences.location ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.location = null;
      setPreferences(newPreferences);
      setQuestion(nextQuestion(newPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose location"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, preferences.location))) : null : null,
        nextStep = question !== 'apply' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon",
    "aria-hidden": "true"
  })))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Method of study"))),
        qualificationsProgressMobile = Object.keys(entryPoints).length > 1 && (question == 'qualification' || preferences.qualification) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'qualification' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'qualification' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'qualification' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Qualification"))) : null,
        subjectsProgressMobile = multipleSubjects && (question == 'subject' || preferences.subject) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'subject' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'subject' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'subject' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Subject"))) : null,
        entryPointsProgressMobile = multipleEntryPoints && (question == 'entry' || preferences.entry) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'entry' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'entry' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'entry' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Entry point"))) : null,
        locationsProgressMobile = multipleLocations && (question == 'location' || preferences.location) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'location' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'location' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'location' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Location"))) : null,
        nextStepMobile = question !== 'apply' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Method of study"))),
        alternative = props.element.dataset.otheryear && props.element.dataset.otherurl && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "how-to-apply--pgt--js__modal__alternative"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: props.element.dataset.otherurl
  }, "Apply to start in ", props.element.dataset.otheryear, ".")),
        reset = JSON.stringify(preferences) !== JSON.stringify(initialPreferences) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__reset"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => {
      setPreferences(initialPreferences);
      setQuestion(nextQuestion(initialPreferences, entryPoints));
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-redo"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Start again")));
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  let modalRef = null,
      modalContentRef = null;

  const getModal = () => modalRef,
        getModalContent = () => modalContentRef;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_4___default()(getModalContent(), {
        initialFocus: getModalContent().querySelector('.how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a'),
        onDeactivate: () => setModalVisible(false),
        clickOutsideDeactivates: true
      }));
    }

    if (modalVisible) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["disableBodyScroll"])(getModal());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["enableBodyScroll"])(getModal());
    }
  }, [modalVisible]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "cta-block"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "cta-block__cta"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "primary-cta-arrow--bright",
    onClick: () => setModalVisible(true)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Apply now")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal",
    "data-open": modalVisible,
    ref: modal => modalRef = modal
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content",
    ref: modalContent => modalContentRef = modalContent
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__close",
    onClick: () => {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["enableBodyScroll"])(getModal());
      setModalVisible(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-times icon",
    "aria-label": "Close"
  })), reset, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress"
  }, qualificationsProgress, subjectsProgress, entryPointsProgress, locationsProgress, nextStep), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress--mobile"
  }, qualificationsProgressMobile, subjectsProgressMobile, entryPointsProgressMobile, locationsProgressMobile, nextStepMobile), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Applying to start in ", props.element.dataset.year), alternative), qualificationQuestion, subjectQuestion, entryQuestion, locationQuestion, applyQuestion)));
}

const nextLevel = (arr, k) => arr.filter(i => Object.keys(i)[0] === k)[0][k];
/**
 * Condense the configuration options for easier access.
 *
 * @param {Object[]} config The JSONified entry points configuration.
 * @return {Object[]} - The simplified configuration
 */


function distilConfiguration(config) {
  return config.map(qualification => {
    const qualificationHeader = qualification.header,
          subjects = qualification.options.map(subject => {
      const subjectHeader = subject.header,
            entries = subject.options.map(entry => {
        const entryHeader = entry.header,
              locations = entry.options.map(location => {
          const locationHeader = location.header,
                methods = location.options.map(method => {
            const methodHeader = method.header,
                  applyLink = method.options.apply,
                  methodObj = new Object();

            if (methodHeader) {
              methodObj[methodHeader] = applyLink;
            } else {
              methodObj['UNIQUE'] = applyLink;
            }

            return methodObj;
          }),
                locationObject = new Object();

          if (locationHeader) {
            locationObject[locationHeader] = methods;
          } else {
            locationObject['UNIQUE'] = methods;
          }

          return locationObject;
        }),
              entryObj = new Object();

        if (entryHeader) {
          entryObj[entryHeader] = locations;
        } else {
          entryObj['UNIQUE'] = locations;
        }

        return entryObj;
      }),
            subjectObj = new Object();

      if (subjectHeader) {
        subjectObj[subjectHeader] = entries;
      } else {
        subjectObj['UNIQUE'] = entries;
      }

      return subjectObj;
    }),
          qualificationObj = new Object();

    if (qualificationHeader) {
      qualificationObj[qualificationHeader] = subjects;
    } else {
      qualificationObj['UNIQUE'] = subjects;
    }

    return qualificationObj;
  });
}

function nextQuestion(preferences) {
  const question = preferences.qualification === null ? 'qualification' : preferences.subject === null ? 'subject' : preferences.entry === null ? 'entry' : preferences.location === null ? 'location' : 'apply';
  return question;
}

HowToApply.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  element: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HowToApply);

/***/ }),

/***/ "./src/patterns/how-to-apply/pgt-data.js":
/*!***********************************************!*\
  !*** ./src/patterns/how-to-apply/pgt-data.js ***!
  \***********************************************/
/*! exports provided: howToApplyConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howToApplyConfig", function() { return howToApplyConfig; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util.js */ "./src/util.js");


/**
 * Functions to retrieve how to apply configuration.
 *
 * @module pgt-data
 * @author Web Development
 * @copyright City, University of London 2020
 */

const timeout = 30000;
/**
 * How to apply configuration.
 *
 * @param {string} url The HTA configuration file.
 * @return {Promise} - A promise of  configuration object.
 */

function howToApplyConfig(url) {
  const config = {
    timeout: timeout,
    url: url
  };
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["axiosRequest"])(config);
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, pxToRem, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBool", function() { return toBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceMotion", function() { return reduceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticallyInWindow", function() { return verticallyInWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parametersToObject", function() { return parametersToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToParameters", function() { return objectToParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaEvent", function() { return gaEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendAll", function() { return appendAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return pxToRem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFromString", function() { return numberFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectIE", function() { return detectIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIntersectionObserver", function() { return checkIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHTMLElement", function() { return createHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercaseFirstLetterLowercaseRest", function() { return uppercaseFirstLetterLowercaseRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosRequest", function() { return axiosRequest; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);








/**
 * Useful utility functions
 *
 * @module util
 * @author Web Development
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
 * Predicate testing whether an element is positioned in the window.
 *
 *
 * @param {HTMLElement} elem - An HTML element.
 * @returns {boolean} - Is it onscreen?
 */

function verticallyInWindow(elem) {
  return elem.getBoundingClientRect().top >= 0 && elem.getBoundingClientRect().top <= window.innerHeight ? true : false;
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
    const [k, v] = parameter.split('=');
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
 * Calculates viewport width to determinte if using mobile
 * @param {number} number - width of screen, with default value = 432.
 *
 */

function isMobile() {
  let screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 432;
  const viewPortWidth = window.innerWidth;
  const mobileScreen = screen;

  if (viewPortWidth < mobileScreen) {
    return true;
  }
}
/**
 *
 * Turn DOM elements to array e.g return [li, li, li] from DOM element selecting 'li' <ul><li></li><li></li><li></li></ul>
 *
 * @param {object} object - Object
 */

function toArray(obj) {
  let array = []; // iterate backwards ensuring that length is an UInt32

  for (let i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
/**
 *
 * Check browser user agent is IE or edge and return version number
 *
 */

function detectIE() {
  let ua = window.navigator.userAgent;
  let msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  let trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  let edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return false;
}
/**
 *
 * Check If browser support Intersection Observer API
 *
 * @returns {Boolean} -
 */

function checkIntersectionObserver() {
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    return true;
  } else {
    return false;
  }
}
/**
 * Create elements containing classes, content and any other attributes
 *
 * @param {string} type - Type of element to create, e.g. "div", "button".
 * @param {array} attributes - Array of objects specifying which attributes to assign to the element i.e. {label : "class", val : "container"}
 */

function createHTMLElement(type, attributes) {
  let el = document.createElement(type);
  attributes.map(function (att) {
    att.label === 'content' ? el.appendChild(document.createTextNode(att.val)) : el.setAttribute(att.label, att.val);
  });
  return el;
}
function uppercaseFirstLetterLowercaseRest(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
/**
 * Asynchronous request to Funnelback web service.
 *
 * @param {object} config An axios configuration object.
 * @return {Promise} - A promise of a Funnelback response.
 */

function axiosRequest(config) {
  const httpOK = 200;
  return axios__WEBPACK_IMPORTED_MODULE_5___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_5___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
    }
  });
}

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./src/how-to-apply--pgt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/how-to-apply--pgt.js */"./src/how-to-apply--pgt.js");


/***/ })

/******/ });
//# sourceMappingURL=how-to-apply--pgt.js.map