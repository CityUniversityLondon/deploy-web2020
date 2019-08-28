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
/******/ 		"finder": 0
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
/******/ 	deferredModules.push([4,"vendor","react"]);
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
/** @license React v16.8.6
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
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
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

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

/***/ "./src/finder.js":
/*!***********************!*\
  !*** ./src/finder.js ***!
  \***********************/
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
/* harmony import */ var _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/finder/finder */ "./src/patterns/finder/finder.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");




/**
 * Finder entry
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */




document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.wrapper--finder')).forEach(finder => {
    Object(_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_4__["finderConfig"])(finder.dataset.config).then(config => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patterns_finder_finder__WEBPACK_IMPORTED_MODULE_3__["default"], {
        config: config
      }), finder);
    });
  });
});

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__bestbet.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__bestbet.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__bestbet
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Render a Funnelback best bet as a results card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__bestbet(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__bestbet"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: '/fb' + props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, props.details.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.description))));
}

finder__results__bestbet.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__bestbet);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__card.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__card.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_results_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__results__course */ "./src/patterns/finder/components/cards/finder__results__course.js");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__results__profile */ "./src/patterns/finder/components/cards/finder__results__profile.js");


/**
 * @module patterns/finder/components/cards/finder__results__bestbet
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Render a Funnelback result as the appropriate card type.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__course(props) {
  switch (props.type) {
    case 'course':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details,
        query: props.query
      });

    case 'profile':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details
      });
  }
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__course);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__course.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__course.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results/finder__results__highlight__query */ "./src/patterns/finder/components/results/finder__results__highlight__query.js");




/**
 * @module patterns/finder/components/cards/finder__results__course
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Render a Funnelback result as a course card.
 *
 * TODO: once the new collections are set up, standardise the metadata labels.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__course(props) {
  // Render course codes for courses that have and should display them
  // notably, not short courses
  const displayCourseCode = ['Undergraduate', 'Foundation', 'CPD'],
        courseCode = displayCourseCode.indexOf(props.details.metaData.L) >= 0 && props.details.metaData.N && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Course code:"), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.N)); // Degree certification, if it has it

  const award = props.details.metaData.M && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Award:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.M)); // Course duration, if it has it

  const duration = props.details.metaData.D && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Duration:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.D)); // Course method, if it has it

  const method = props.details.metaData.metd && props.query.facets.metd && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-book-reader icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Method of study:"), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.metd)); // Course location, if it has it

  const location = props.details.metaData.loc && props.query.facets.loc && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Location:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.loc)); // Course School, if it has it

  const school = props.details.metaData.E && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.E)); //Clearing

  const clearing = props.details.metaData.K && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clearing_label"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Available in clearing", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-arrow-circle-right",
    "aria-hidden": "true"
  })));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "finder__results__card finder__results__course"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__results__card__details__Top"
  }, clearing, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_3__["default"])(props.details.title, props.query.query) : props.details.title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_3__["default"])(props.details.metaData.L.replace(/_/g, ' '), props.query.query) : props.details.metaData.L.replace(/_/g, ' ')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_3__["default"])(props.details.metaData.c, props.query.query) : props.details.metaData.c), school, award, duration, courseCode, method, location)));
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__course);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__profile.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__profile.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__profile
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Render a Funnelback result as a profile card.
 *
 * TODO: once the new collections are set up, standardise the metadata labels.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__profile(props) {
  // render school and department, if they have them
  const school = (props.details.metaData.E || props.details.metaData.D) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', props.details.metaData.E && props.details.metaData.E, props.details.metaData.E && props.details.metaData.D && ', ', props.details.metaData.D && props.details.metaData.D); // headshot, if they have a thumbnail

  const headshot = props.details.metaData.K && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnail__image-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.metaData.K,
    alt: ""
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: '/fb' + props.details.clickTrackingUrl
  }, headshot, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.J), school)));
}

finder__results__profile.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__profile);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__checkbox.js":
/*!********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__checkbox.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */
// import React from 'react';

/**
 * TODO: checkbox facet control
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__checkbox() {
  return null;
}

finder__checkbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__checkbox);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__clear__filter.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__clear__filter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__clear
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__clear(props) {
  const facetKeys = Object.keys(props.query.facets);

  if (facetKeys.length) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "finder__clear",
      type: "reset",
      value: "Reset",
      onClick: () => {
        props.clear();
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "far fa-fw fa-times icon",
      "aria-label": "Clear input"
    }), "Reset");
  } else {
    return null;
  }
}

finder__clear.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (finder__clear);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__filters.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__filters.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__radio */ "./src/patterns/finder/components/filters/finder__radio.js");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_selectbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__selectbox */ "./src/patterns/finder/components/filters/finder__selectbox.js");
/* harmony import */ var _query_finder_appliedfilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../query/finder__appliedfilters */ "./src/patterns/finder/components/query/finder__appliedfilters.js");
/* harmony import */ var _finder_clear_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__clear__filter */ "./src/patterns/finder/components/filters/finder__clear__filter.js");
/* harmony import */ var _finder_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__toggle */ "./src/patterns/finder/components/filters/finder__toggle.js");


/**
 * @module patterns/finder/components/finder__filters
 * @author Web Development
 * @copyright City, University of London 2019
 */








/**
 * Predicate for whether a facet should be displayed, if it's dependent on
 * another facet being set.
 *
 * @param {object} facet The facet to potentially display.
 * @param {object} facetMap The facets currently set on the query.
 * @return {bool} - Has any dependency been met
 */

function dependencyMet(facet, facetMap) {
  const setFacets = Object.keys(facetMap);

  if (!facet.dependency || setFacets.indexOf(facet.meta) >= 0) {
    return true;
  } else {
    if (setFacets.indexOf(facet.dependency) >= 0 && facetMap[facet.dependency] !== '') {
      return true;
    } else {
      return false;
    }
  }
}
/**
 * Component to update facet values in the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */


function finder__filters(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_finder_appliedfilters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: props.config,
    query: props.query,
    update: props.update,
    clear: props.clear
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Filter ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__heading__btn-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_clear_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    clear: props.clear,
    query: props.query
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }))), props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'radio':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            mobile: props.mobile ? true : false
          });

        case 'checkbox':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update
          });

        case 'selectbox':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_selectbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update
          });

        case 'toggle':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_toggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update
          });
      }
    } else {
      return null;
    }
  }));
}

finder__filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__filters);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__mobilefilters.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__mobilefilters.js ***!
  \*************************************************************************/
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
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var _results_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results/finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_7__);





/**
 * @module patterns/finder/components/finder__mobilefilters
 * @author Web Development
 * @copyright City, University of London 2019
 */




 // seems to fix most issues with old iPhones and position: fixed
// may not be necessary long-term, but I was in a hurry


/**
 * Render the mobile version of the filters.
 *
 * TODO: this is a bit flaky on old iPhones with long facets (i.e. longer than
 * the main body of the page)
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__mobilefilters(props) {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  let filters = null;

  const getFilters = () => filters; // trap tab focus when the filters are open


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_6___default()(getFilters(), {
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_7__["disableBodyScroll"])(getFilters());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_7__["enableBodyScroll"])(getFilters());
    }
  }, [display]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const totalMatchingMessage = totalMatching === 1 ? 'Show 1 results' : totalMatching ? "Show ".concat(totalMatching, " results") : 'Close';
  const summary = totalMatching >= 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_results_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currEnd: props.response.summary.currEnd,
    currStart: props.response.summary.currStart,
    query: props.response.query,
    numRanks: props.response.summary.numRanks,
    summariseAs: props.summariseAs,
    totalMatching: props.response.summary.totalMatching
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "finder__results__summary__heading-wrap"
  }, "No results");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__mobilefilters",
    "data-open": display
  }, summary, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 ? true : false
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object.keys(props.query.facets).length > 0 ? " Filters <span class=\"finder__mobilefilters__toggle__filterNo\">(".concat(Object.keys(props.query.facets).length, ")</span>") : 'Filter'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__mobilefilters__filters",
    ref: mobilefilters => {
      filters = mobilefilters;
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__mobilefilters__filters__content"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_finder_filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__apply",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-chevron-left"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    "aria-live": "polite"
  }, props.updating ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Updating results\u2026")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage)))))));
}

finder__mobilefilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__mobilefilters);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__radio.js":
/*!*****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__radio.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







/**
 * @module patterns/finder/components/finder__radio
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Render radio facet.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__radio(props) {
  // Radio facets can be toggled open and closed
  // default state on load is defined in config
  // Always open on load if facet set.
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.query.facets[props.facet.meta] !== undefined ? true : props.mobile === true ? false : props.facet.defaultOpen),
        currentValue = props.query.facets[props.facet.meta] || ''; // reduce the facet configuration to an array of all possible values for
  // the facet

  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data.data.replace(/^"/, '').replace(/"$/, '')];
  }, []); // reduce the Funnelback response for the facet to an array of valid
  // values for the current query

  const responseFacets = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values ? props.responseFacet[0].categories[0].values.reduce((acc, data) => {
    return [...acc, data.data.toLowerCase()];
  }, []) : []; // count how many possible facets are not valid for the current query
  // and will be hidden

  const hiddenFacets = allFacets.filter(facet => responseFacets.indexOf(facet) < 0).length;

  const setFacet = e => {
    const newQuery = props.query,
          newValue = e.target.value;
    newValue ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  }; // the facet will be in the page twice, for desktop and mobile layouts
  // salting the input name to stop that breaking


  const randomNumber = Math.random().toString(16).slice(-4);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "finder__filter finder__radio"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
    "data-open": open ? 'true' : 'false'
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    "aria-expanded": open ? 'true' : 'false',
    onClick: () => setOpen(!open)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.facet.name), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: open ? 'fal fa-minus icon' : 'fal fa-plus icon',
    "aria-label": open ? 'Close filter' : 'Open filter'
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    role: "presentation"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    key: 'all'
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    checked: currentValue === '',
    id: "meta".concat(props.facet.meta, "all"),
    name: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
    type: "radio",
    value: "",
    onChange: e => setFacet(e)
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "meta".concat(props.facet.meta, "all")
  }, props.facet.noSelection, hiddenFacets > 0 && " (".concat(hiddenFacets, " hidden)"))), props.facet.values.map((value, i) => {
    const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.replace(/^"/, '').replace(/"$/, ''));
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      checked: currentValue === value.data,
      id: "meta".concat(props.facet.meta).concat(i),
      name: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
      type: "radio",
      value: value.data,
      onChange: e => setFacet(e)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "meta".concat(props.facet.meta).concat(i)
    }, value.label, " (", responseFacetDetails && responseFacetDetails[0] ? responseFacetDetails[0].count : 0, ")"));
  })));
}

finder__radio.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__radio);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__selectbox.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__selectbox.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








/**<
 * @module patterns/finder/components/finder__selectbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__selectbox(props) {
  const randomNumber = Math.random().toString(16).slice(-4);

  const setFacet = e => {
    const newQuery = props.query,
          newValue = e.target.value;
    newValue ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1; // if(props.facet.meta === 'G' && !newValue){
    //     delete newQuery.facets.rSub;
    // }

    props.facet.meta === 'G' && !newValue ? delete newQuery.facets.rSub : null;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  }; //filter out related subject


  const filterRSubject = s => {
    let rs = s.data.replace(/"/g, '');
    let rq = props.query.facets.G.replace(/"/g, '');
    let regex = new RegExp('^' + rq + '_');
    return regex.test(rs);
  }; //check if the facets is related subject


  const relatedSubject = props.query.facets.G && props.facet.values.filter(filterRSubject);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("fieldset", {
    className: "finder__filter finder__selectbox"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "finder__select"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
    className: "finder__select__overline",
    htmlFor: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber)
  }, props.facet.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    name: props.facet.name,
    id: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
    value: props.query.facets[props.facet.meta] ? props.query.facets[props.facet.meta] : '',
    onChange: e => setFacet(e)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: ""
  }, "All ".concat(props.facet.name)), relatedSubject && props.facet.meta === 'rSub' ? relatedSubject.map(value => {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value.data,
      value: value.data
    }, value.label);
  }) : props.facet.values.map(value => {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value.data,
      value: value.data
    }, value.label);
  }))));
}

finder__selectbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__selectbox);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__toggle.js":
/*!******************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__toggle.js ***!
  \******************************************************************/
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





/**
 * @module patterns/finder/components/finder__toggle
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__toggle(props) {
  const setFacet = e => {
    const newQuery = props.query,
          newValue = e.target.value,
          checked = e.target.checked;
    checked ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    className: "finder__filter finder__togglebox"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__toggle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: props.facet.name,
    "aria-label": props.facet.values[0].label
  }, props.facet.values[0].label, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "checkbox",
    id: props.facet.name,
    name: props.facet.name,
    value: props.facet.values[0].data,
    onChange: e => setFacet(e),
    checked: props.query.facets[props.facet.meta] ? true : false
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "toggle round ".concat(props.query.facets[props.facet.meta] ? 'toggleOpen' : 'toggleClose')
  }))));
}

finder__toggle.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__toggle);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__appliedfilters.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__appliedfilters.js ***!
  \************************************************************************/
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
/* harmony import */ var _filters_finder_clear_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/finder__clear__filter */ "./src/patterns/finder/components/filters/finder__clear__filter.js");





/**
 * @module patterns/finder/components/finder__appliedfilters
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * A list of currently applied filters as buttons that can be clicked to
 * remove them.
 *
 * @param {object} props
 * @return {object} - React component.
 */

function finder__appliedfilters(props) {
  const removeFacet = facet => {
    const newQuery = props.query;
    delete newQuery.facets[facet];
    facet === 'G' && props.query.facets.rSub ? delete newQuery.facets.rSub : null;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const facetKeys = Object.keys(props.query.facets);

  if (facetKeys.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "finder__applied__filters__heading"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Applied filters"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_filters_finder_clear_filter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clear: props.clear,
      query: props.query
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "finder__appliedfilters__wrap"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "finder__appliedfilters"
    }, facetKeys.map(facet => {
      const labels = props.config.facetLabels.filter(facetLabel => facetLabel.meta === facet)[0],
            facetValue = props.query.facets[facet],
            label = labels.values.filter(value => value.data === facetValue)[0];
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: facet
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        onClick: () => removeFacet(facet)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "fal fa-times icon",
        "aria-label": "Remove filter"
      }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, labels.name, ":\xA0", label.label))));
    }))));
  } else {
    return null;
  }
}

finder__appliedfilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__appliedfilters);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__clear.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__clear.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__clear
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__clear(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "finder__clear",
    type: "button",
    onClick: () => {
      props.clear();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-fw fa-times icon",
    "aria-label": "Clear input"
  }));
}

finder__clear.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (finder__clear);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__query.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__query.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");







/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */




const maximumSuggestions = 5,
      [keyCodeEscape, keyCodeUp, keyCodeDown] = [27, 38, 40];

function highlightQueryTerm(suggestion, partialQuery) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "finder__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length))));
}
/**
 * Search input field and autocomplete.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */


function finder__query(props) {
  // save what they're typing
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.query.query); // Funnelback suggestions for the currently typed text

  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]); // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    cancel: () => {}
  }); // ref for the input field, so we can .focus() it

  const [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(16).slice(-4)); // boolean to show or hide suggestions

  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setPartialQuery(props.query.query);
  }, [props.updating]);
  let textInput = null;

  function focusInput() {
    textInput.focus();
  } // on clear, make a default request for results


  const clearQuery = () => {
    call.cancel();
    setPartialQuery('');
    setSuggestions([]);
    focusInput();
    const newQuery = props.query;
    newQuery.query = '';
    newQuery.sortBy = props.config.sort;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const submitForm = () => {
    call.cancel();
    setSuggestions([]);
    const newQuery = props.query;
    newQuery.query = partialQuery ? partialQuery : '';
    newQuery.startRank = 1;
    newQuery.sortBy = partialQuery ? null : props.config.sort;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const submitSuggestion = s => {
    call.cancel();
    const newQuery = props.query;
    newQuery.query = s;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const clear = partialQuery && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_7__["default"], {
    clear: () => {
      clearQuery();
    }
  }); // render suggestions
  // TODO: probably should be refactored into a separate component

  const suggestionsList = suggestions && suggestions.length > 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map(suggestion => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    key: suggestion
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    onBlur: () => setShowSuggestions(false),
    onFocus: () => setShowSuggestions(true),
    onMouseDown: () => {
      //for browsers because onBlur get excuted before onClick
      setShowSuggestions(true);
      setPartialQuery(suggestion);
      setSuggestions([]);
      focusInput();
      submitSuggestion(suggestion); //passing suggestion because partialQuery value get overwritten for some reason.
    },
    onClick: () => {
      //for mobile
      setShowSuggestions(true);
      setPartialQuery(suggestion);
      setSuggestions([]);
      focusInput();
      submitSuggestion(suggestion); //passing suggestion because partialQuery value get overwritten for some reason.
    },
    onKeyDown: e => {
      switch (e.keyCode) {
        case keyCodeEscape:
          e.target.parentNode.parentNode.parentNode.querySelector('input').focus();
          setSuggestions([]);
          break;

        case keyCodeUp:
          if (e.target.parentNode.previousElementSibling && e.target.parentNode.previousElementSibling.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.previousElementSibling.querySelector('button').focus();
          } else {
            e.preventDefault();
            e.target.parentNode.parentNode.parentNode.querySelector('input').focus();
          }

          break;

        case keyCodeDown:
          e.preventDefault();

          if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.nextElementSibling.querySelector('button').focus();
          }

          break;
      }
    }
  }, highlightQueryTerm(suggestion, partialQuery)))));
  const input = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__query__input"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "finder__icon fal fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: props.config.placeholder,
    ref: input => {
      textInput = input;
    },
    type: "text",
    value: partialQuery,
    onKeyDown: e => {
      switch (e.keyCode) {
        case keyCodeEscape:
          clearQuery();
          break;

        case keyCodeDown:
          if (suggestions && suggestions.length > 0) {
            e.preventDefault();
            e.target.parentNode.querySelector('.finder__query__suggestions button').focus();
          }

          break;
      }
    },
    onFocus: () => setShowSuggestions(true),
    onBlur: () => setShowSuggestions(false),
    onChange: e => {
      //clear old suggestions
      setSuggestions([]); // keep  what they're typing

      setPartialQuery(e.target.value);
      /**
       * if we have a request to the suggestions service in progress,
       * cancel it. Stops old suggestions overwriting new ones because
       * the requests can't keep up with fast typing.
       */

      call.cancel();

      if (e.target.value) {
        // input is populated, ask for suggestions
        const [suggestionsPromise, newCall] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_6__["suggest"])(props.query.collection, e.target.value); // update our request cancel function for the new request

        setCall({
          cancel: () => {
            newCall.cancel();
          }
        });
        suggestionsPromise.then(data => setSuggestions(data)).catch(() => setSuggestions([]));
      } else {
        // input is empty, empty suggestions
        setSuggestions([]);
      }
    }
  }), suggestionsList, clear);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "finder__query"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, input, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "fal fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

finder__query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__query);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__didyoumean.js":
/*!**********************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__didyoumean.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @module patterns/finder/components/finder__didyoumean
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Returns a Funnelback spelling suggestion as a button to update the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */

function finder__didyoumean(props) {
  // response from Funnelback may include facet values, which we're ignoring
  // for now and certainly shouldn't be shown to the user
  const presentableText = props.text.split(/\|/)[0].trim();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Did you mean \u201C", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__didyoumean__button",
    onClick: () => {
      const newQuery = props.query;
      newQuery.query = presentableText;
      newQuery.startRank = 1;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    }
  }, presentableText), "\u201D?");
}

finder__didyoumean.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__didyoumean);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__pagination.js":
/*!**********************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__pagination.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__pagination
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Renders standard pagination controls patttern for the results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__pagination(props) {
  const numberOfPages = Math.ceil(props.totalMatching / props.numRanks),
        currentPage = Math.ceil(props.currStart / props.numRanks),
        pages = [];

  const changePage = pageNumber => {
    const newStartRank = 1 + (pageNumber - 1) * props.numRanks,
          newQuery = props.query;
    newQuery.startRank = newStartRank;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__controls__button--prev",
    key: "prev",
    type: "button",
    disabled: currentPage === 1 ? true : false,
    onClick: () => {
      changePage(currentPage - 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Previous page")));

  for (let page = 1; page <= numberOfPages; page++) {
    let className;

    switch (page - numberOfPages) {
      case 0:
        className = 'pagination__controls__element pagination__controls__button pagination__controls__button--last';
        break;

      case -1:
        className = 'pagination__controls__element pagination__controls__button pagination__controls__button--penultimate';
        break;

      default:
        className = 'pagination__controls__element pagination__controls__button';
    }

    pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      "aria-current": page === currentPage ? 'page' : null,
      "aria-expanded": page === currentPage ? true : false,
      "aria-label": "Open page ".concat(page),
      className: className,
      "data-page": page,
      "data-proximity": Math.abs(page - currentPage),
      disabled: page === currentPage ? true : false,
      key: page,
      type: "button",
      onClick: () => {
        changePage(page);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, page)));

    if (page === 1) {
      pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: "firstEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2026")));
    } else if (page === numberOfPages - 1) {
      pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: "lastEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2026")));
    }
  }

  pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__controls__button--next",
    key: "next",
    type: "button",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: () => {
      changePage(currentPage + 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Next page")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "pagination__controls"
  }, pages));
}

finder__pagination.propTypes = {
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__pagination);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/patterns/finder/components/cards/finder__results__bestbet.js");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/patterns/finder/components/results/finder__didyoumean.js");
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__pagination */ "./src/patterns/finder/components/results/finder__pagination.js");


/**
 * @module patterns/finder/components/finder__results
 * @author Web Development
 * @copyright City, University of London 2019
 */







/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results(props) {
  const updating = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Updating results\u2026"));

  if (props.response) {
    // Response may include spelling suggestion
    const didYouMean = props.response.spell && props.response.spell.text && props.response.summary.totalMatching === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: props.query,
      text: props.response.spell.text,
      update: props.update
    }); // if we have more results than will fit on a single page, we need
    // pagination

    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    }); // render either the results, or a spinner while we wait for Funnelback

    const resultsContent = props.updating ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, updating) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currEnd: props.response.summary.currEnd,
      currStart: props.response.summary.currStart,
      query: props.response.query,
      numRanks: props.response.summary.numRanks,
      summariseAs: props.summariseAs,
      totalMatching: props.response.summary.totalMatching,
      clear: props.clear,
      update: props.update,
      config: props.config,
      queryF: props.query
    }), didYouMean, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      start: props.response.summary.currStart,
      className: "finder__results__list"
    }, props.response.bestBets.map(card => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      details: card,
      key: card.docNum
    })), props.response.results.map(card => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bestBet: false,
      details: card,
      key: card.docNum,
      type: props.type,
      query: props.query
    }))), pagination);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    }, updating);
  }
}

finder__results.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results__highlight__query.js":
/*!*************************************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results__highlight__query.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const formatLabel = (label, value) => {
  if (value) {
    return label;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label.split(value).reduce((prev, current, i) => {
    if (!i) {
      return [current];
    }

    return prev.concat(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "highlightText",
      key: value + current
    }, value), current);
  }, []));
};

/* harmony default export */ __webpack_exports__["default"] = (formatLabel);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results__summary.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results__summary.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @module patterns/finder/components/finder__results__summary
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Results heading, summarising the response.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__summary(props) {
  let searchHints;
  const result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;

  if (props.totalMatching == 0) {
    searchHints = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Your search"), " \"", props.query, "\u201C did not match any courses."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Suggestions:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Make sure that all words are spelled correctly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try different keywords"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try more general keywords"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try fewer keywords"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try fewer filters"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault;
        props.clear();
      }
    }, "Reset filters")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault;
        const newQuery = props.queryF;
        newQuery.query = '';
        newQuery.sortBy = props.config.sort;
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      }
    }, "Reset search"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    "aria-live": "polite",
    className: "finder__results__summary__heading-wrap"
  }, props.totalMatching > props.numRanks && "".concat(props.currStart, "\u2013").concat(props.currEnd, " of "), props.totalMatching, " ", props.query && 'matching ', result, props.query && " for \u201C".concat(props.query, "\u201D")), searchHints);
}

finder__results__summary.propTypes = {
  queryF: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  currEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__summary);

/***/ }),

/***/ "./src/patterns/finder/finder.js":
/*!***************************************!*\
  !*** ./src/patterns/finder/finder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/query/finder__query */ "./src/patterns/finder/components/query/finder__query.js");
/* harmony import */ var _components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filters/finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var _components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/filters/finder__mobilefilters */ "./src/patterns/finder/components/filters/finder__mobilefilters.js");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");










/**
 * Universal finder
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City, University of London 2019
 */







/**
 * Retrieve current values for facets from the URL parameters.
 *
 * @param {object[]} facets Array of facet definitions.
 * @param {object} params URLSearchParams object for the current page.
 * @return {object} - Map of facet meta labels to their current value from the URL.
 */

function getFacetParams(facets, params) {
  return facets.map(facet => {
    const param = {};

    if (params.get("meta_".concat(facet.meta, "_orsand"))) {
      param[facet.meta] = params.get("meta_".concat(facet.meta, "_orsand"));
    }

    return param;
  }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
}
/**
 * Preserve the search state in the URL parameters.
 *
 * @param {string} currQuery The search query.
 * @param {integer} currStartRank The start rank.
 * @param {object[]} currFacets A map of facet meta labels to their values.
 * @param {*} facetLabels Array of facet definitions.
 */


function replaceHistory(currQuery, currStartRank, currFacets, facetLabels) {
  const params = new URLSearchParams(window.location.search);
  currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
  currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
  facetLabels.forEach(facet => {
    if (currFacets[facet.meta]) {
      params.set("meta_".concat(facet.meta, "_orsand"), currFacets[facet.meta]);
    } else {
      params.delete("meta_".concat(facet.meta, "_orsand"));
    }
  });
  window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
}
/**
 * Launch the universal Finder.
 *
 * @param {object} props The JSON configuration file for the Finder.
 * @return {object} The React component to render.
 */


function Finder(props) {
  const params = new URLSearchParams(window.location.search);
  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/

  const initialQuery = {
    collection: props.config.collection,
    fixedFacets: props.config.fixedFacets,
    query: params.get('query') || '',
    sortBy: params.get('query') ? null : params.get('sort') || props.config.sort,
    sortDirection: params.get('sortdirection') || props.config.sortDirection,
    startRank: params.get('start_rank') || 1,
    numRanks: params.get('num_ranks') || props.config.numRanks,
    facets: getFacetParams(props.config.facetLabels, params)
  };
  /**
   * Dummy, empty Funnelback response object for initial state.
   */

  const initialResponse = {
    bestBets: [],
    facets: [],
    results: [],
    spell: null,
    summary: {
      currEnd: 0,
      currStart: 0,
      numRanks: 0,
      totalMatching: 0
    }
  }; // State objects for the Funnelback query and response

  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialQuery);
  const [funnelbackResponse, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialResponse); // Boolean to indicate when a query is in progress

  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true); // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false); // Retrieve Funnelback results

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, props.config.facetLabels); // indicate a request is in progress

    setUpdating(true);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_9__["find"])(query.collection, query.fixedFacets, query.query, query.sortBy, query.sortDirection, query.startRank, query.numRanks, query.facets); // save the requestToken, so

    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    }); // when the response from Funnelback arrives,
    // update the results and display them

    request.then(data => {
      setResponse(data);
      setUpdating(false);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    });
  }, [update]); // update props so child components can update the query

  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };

  const clear = () => {
    const clearQuery = Object.assign({}, query);
    clearQuery.facets = {};
    setQuery(clearQuery);
    setUpdate(!update);
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_10__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  }), props.config.facetLabels.length > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_12__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_11__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    clear: clear
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_13__["default"], {
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    updating: updating,
    clear: clear,
    config: props.config
  }));
}

Finder.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder);

/***/ }),

/***/ "./src/patterns/finder/funnelback.js":
/*!*******************************************!*\
  !*** ./src/patterns/finder/funnelback.js ***!
  \*******************************************/
/*! exports provided: find, suggest, finderConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggest", function() { return suggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finderConfig", function() { return finderConfig; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util.js */ "./src/util.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Functions for making requests to Funnelback
 *
 * @module funnelback
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * LAUNCH: change web2020.city.ac.uk to www.city.ac.uk
 */

const baseUrl = 'https://web2020.city.ac.uk/web-services',
      findRootUrl = '/funnelback-find',
      suggestRootUrl = '/funnelback-suggest',
      httpOK = 200,
      timeout = 30000;
/**
 * Asynchronous request to Funnelback web service.
 *
 * @param {object} config An axios configuration object.
 * @return {Promise} - A promise of a Funnelback response.
 */

function axiosRequest(config) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_1___default.a.isCancel(e)) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
    }
  });
}
/**
 * Funnelback search query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} [query] The query string.
 * @param {string} [sortBy] The field to sort by.
 * @param {string} sortDirection Sort 'asc'ending or 'desc'ending.
 * @param {integer} startRank The first result to return.
 * @param {integer} numRank The number of results to return.
 * @param {object} [facets] A map of facets to query strings.
 * @return {Promise} - A promise of search results.
 */


function find(collection, fixedFacets, query, sortBy, sortDirection, startRank, numRank, facets) {
  const fixedFacetParams = {};
  fixedFacets.forEach(facet => {
    fixedFacetParams["meta_".concat(facet.meta, "_orsand")] = facet.value;
  });
  const facetParams = {},
        facetKeys = Object.keys(facets);
  facetKeys.forEach(key => facetParams["meta_".concat(key, "_orsand")] = facets[key]);
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken,
        call = CancelToken.source(),
        config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    httpsAgent: new https__WEBPACK_IMPORTED_MODULE_2___default.a.Agent({
      keepAlive: true
    }),
    url: findRootUrl,
    timeout: timeout,
    params: _objectSpread({}, fixedFacetParams, {}, facetParams, {
      collection: collection,
      num_ranks: numRank,
      query: query,
      sort: sortBy ? "".concat('desc' === sortDirection ? 'd' : '').concat(sortBy) : null,
      start_rank: startRank
    })
  };
  return [axiosRequest(config), call];
}
/**
 * Funnelback suggestion query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} partialQuery The string to make suggestions for.
 * @return {Promise} - A promise of an array of suggestion strings.
 */

function suggest(collection, partialQuery) {
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken,
        call = CancelToken.source(),
        config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    url: suggestRootUrl,
    timeout: timeout,
    params: {
      collection: collection,
      partial_query: partialQuery
    }
  };
  return [axiosRequest(config), call];
}
/**
 * Finder configuration.
 *
 * @param {string} url The Finder configuration file.
 * @return {Promise} - A promise of  configuration object.
 */

function finderConfig(url) {
  const config = {
    timeout: timeout,
    url: url
  };
  return axiosRequest(config);
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, pxToRem, numberFromString, isMobile, toArray, detectIE */
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

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./src/finder.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/finder.js */"./src/finder.js");


/***/ })

/******/ });
//# sourceMappingURL=finder.js.map