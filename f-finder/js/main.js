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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([0,"vendor","react"]);
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
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");






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
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "Pattern launch ".concat(e.fileName, " (").concat(window.location, ")"), true);
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
    const {
      launchFn,
      launchQuery
    } = pattern;
    Array.from(document.querySelectorAll(launchQuery)).filter(elem => elem.className.indexOf("".concat(launchQuery, "-no-js"))).forEach(elem => tryCatch(() => launchFn(elem)));
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
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(html, 'no-js', false);
    html.className = (html.className + ' js').trim();
  });
  _patterns__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(launchPattern);
  const parameters = Object(_util__WEBPACK_IMPORTED_MODULE_4__["parametersToObject"])(location.search);
  parameters['dev'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_5__["devcorate"])(document.querySelector('body'), 'dev', parameters['dev']);
  parameters['rel'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_5__["devcorate"])(document.querySelector('body'), 'rel', parameters['rel']);
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
/* harmony import */ var _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/finder/finder */ "./src/patterns/finder/finder.js");
/* harmony import */ var _patterns_load_more_load_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/load-more/load-more */ "./src/patterns/load-more/load-more.js");
/* harmony import */ var _patterns_key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-paginated */ "./src/patterns/key-info-box/key-info-paginated.js");
/* harmony import */ var _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-slider */ "./src/patterns/key-info-box/key-info-slider.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");
/* harmony import */ var _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/paginated-list/paginated-list */ "./src/patterns/paginated-list/paginated-list.js");
/* harmony import */ var _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/pagination/pagination */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/tabs/tabs */ "./src/patterns/tabs/tabs.js");
/* harmony import */ var _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/theme-switcher/theme-switcher */ "./src/patterns/theme-switcher/theme-switcher.js");
/* harmony import */ var _patterns_external_link_finder_external_link_finder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/external-link-finder/external-link-finder */ "./src/patterns/external-link-finder/external-link-finder.js");
/* harmony import */ var _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/back-to-top-link/back-to-top-link */ "./src/patterns/back-to-top-link/back-to-top-link.js");
/* harmony import */ var _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/social-icon/social-icon */ "./src/patterns/social-icon/social-icon.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2018
 */














 // import modal from './patterns/modal/modal';


/* harmony default export */ __webpack_exports__["default"] = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_key_info_box_key_info_paginated__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_load_more_load_more__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_12__["default"], _patterns_external_link_finder_external_link_finder__WEBPACK_IMPORTED_MODULE_13__["default"], _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_14__["default"], _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_15__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");







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
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_6__["reduceMotion"])() ? 0 : 999,
      scrollTo = false;
/**
 * Calculate height of body element associated to accordion heading.
 *
 * @param {HTMLElement} heading - An accordion heading.
 */

function calcBodyHeight(heading) {
  let bodyHeight = heading.nextElementSibling.scrollHeight;
  let bodyHeightRem = Object(_util__WEBPACK_IMPORTED_MODULE_6__["pxToRem"])(bodyHeight);
  heading.nextElementSibling.style.maxHeight = parseInt(bodyHeightRem + 5) + 'rem';
}
/**
 * Sets a heading and the button nested within to be open or closed.
 *
 * @param {HTMLElement} heading - An accordion heading.
 * @param {boolean} open - Set this section to be open?
 */


function setSection(heading, open) {
  heading.dataset.open = open;
  heading.setAttribute('tabindex', '-1');
  heading.firstElementChild.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].expanded, open);
  let bodyLinks = heading.nextElementSibling.getElementsByTagName('a');

  for (const bodyLink of bodyLinks) {
    bodyLink.setAttribute('tabindex', '0');
  }

  if (open) {
    heading.nextElementSibling.classList.add('active');
    calcBodyHeight(heading);
    window.addEventListener('resize', () => {
      calcBodyHeight(heading);
    });
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

  if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].expanded))) {
    setSection(heading, false);
    history.pushState(null, null, "".concat(window.location.pathname).concat(window.location.search));
  } else {
    toggleOpen && headings.forEach(heading => setSection(heading, false));
    setSection(heading, true);
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_4___default.a.to(heading, scrollDuration);
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
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].hidden, true);
  button.setAttribute('type', 'button');
  textSpan.appendChild(document.createTextNode(heading.textContent));
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(wrapper, [textSpan, iconSpan]);
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
        toggleOpen = Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(accordion.dataset.toggleopen),
        defaultOpen = Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(accordion.dataset.defaultopen),
        allowSingle = Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(accordion.dataset.allowsingle),
        headings = Array.from(accordion.querySelectorAll(".".concat(headingClassName)));
  let idLinked = false;

  if (!(allowSingle || headings.length > 1)) {
    /**
     * not enough content to accordion
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["removeClass"])(accordion, className, false);
    return;
  }

  const buildHeadings = () => {
    headings.forEach(heading => {
      const content = heading.nextElementSibling,
            button = buttonFromHeading(heading);
      content.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].labelledBy, heading.id);
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
      /* Show first item of accordion if accordion set to default open */

      if (defaultOpen && !idLinked) {
        setSection(headings[0], true);
      }
    });
  };
  /**
   * DOM must be fully loaded to accurately calculate body heights across browsers
   */


  window.addEventListener('load', function () {
    buildHeadings();

    if (defaultOpen && !idLinked) {
      setSection(headings[0], true);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAccordion,
  launchQuery: ".".concat(className)
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
  const progressPath = document.getElementsByClassName('back-to-top')[0].querySelector('path');
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
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
  const warnings = Array.from(elem.querySelectorAll(".".concat(warningClass)));

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
  launchQuery: ".".concat(className)
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
        notice = this.closest(".".concat(className));
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
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
      anchor.href = "".concat(anchor.origin).concat(anchor.pathname).concat(Object(_util__WEBPACK_IMPORTED_MODULE_2__["objectToParameters"])(parameters)).concat(anchor.hash);
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
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);





/**
 * External Link Finder
 *
 * @module patterns/external-link-finder/external-link-finder
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

/**
 *  Finds external links and adds font awesome icon to indicate external link
 * Instructions: add external-link-finder class to templates in article container element
 */
const className = 'external-link-finder';

function findExternalLink(anchorsArea) {
  const anchors = anchorsArea.querySelectorAll('a');

  if (anchors.length > 0) {
    anchors.forEach(function (anchor) {
      /** checks if anchors links are :
       * external
       * not an image
       * not contain font awesome external link icon already
       * fab for social icons
       * is not a social icon
       * not a CTA
       * not an email hyperlink
       * not a telephone number link
       * has to contain a href value
       */
      if (anchor.origin !== window.location.origin && anchor.querySelectorAll('img').length < 1 && anchor.querySelectorAll('.fa-external-link').length < 1 && anchor.querySelectorAll('.fab').length < 1 && anchor.className !== 'social-icon' && !anchor.parentElement.className.includes('cta-block') && anchor.href.indexOf('mailto:') !== 0 && anchor.href.indexOf('tel:') !== 0 && anchor.origin) {
        // adds font awesome external link icon after completing checks
        let node = document.createElement('span');
        node.className = 'fa fa-external-link inline-external-link ';
        node.setAttribute('aria-hidden', 'true');
        anchor.appendChild(node);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: findExternalLink,
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);






function finder__results__bestbet(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "finder__results__card finder__results__bestbet"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: '/fb' + props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, props.details.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.description))));
}

finder__results__bestbet.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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







function finder__results__course(props) {
  switch (props.type) {
    case 'course':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details
      });

    case 'profile':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details
      });
  }
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





function finder__results__course(props) {
  const displayCourseCode = ['Undergraduate', 'Foundation', 'CPD'];
  const courseCode = displayCourseCode.indexOf(props.details.metaData.L) >= 0 && props.details.metaData.N && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Course code:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.N));
  const award = props.details.metaData.M && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Award:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.M));
  const duration = props.details.metaData.D && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Duration:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.D));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__course"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.L), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c), award, duration, courseCode)));
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
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





function finder__results__profile(props) {
  const school = props.details.metaData.E && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', props.details.metaData.E, props.details.metaData.D && ", ".concat(props.details.metaData.D));
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

/***/ "./src/patterns/finder/components/finder__appliedfilters.js":
/*!******************************************************************!*\
  !*** ./src/patterns/finder/components/finder__appliedfilters.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);










function finder__appliedfilters(props) {
  const removeFacet = facet => {
    const params = new URLSearchParams(window.location.search),
          newQuery = props.query;
    params.delete("meta_".concat(facet, "_orsand"));
    delete newQuery.facets[facet];
    window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const facetKeys = Object.keys(props.query.facets);

  if (facetKeys.length) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
      className: "finder__appliedfilters"
    }, facetKeys.map(facet => {
      const labels = props.config.facetLabels.filter(facetLabel => facetLabel.meta === facet)[0],
            facetValue = props.query.facets[facet],
            label = labels.values.filter(value => value.data === facetValue)[0];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        key: facet
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        onClick: () => removeFacet(facet)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "fal fa-times icon",
        "aria-label": "Remove filter"
      }), ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "".concat(labels.name, ": ").concat(label.label))));
    }));
  } else {
    return null;
  }
}

finder__appliedfilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__appliedfilters);

/***/ }),

/***/ "./src/patterns/finder/components/finder__checkbox.js":
/*!************************************************************!*\
  !*** ./src/patterns/finder/components/finder__checkbox.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


// import React from 'react';


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

/***/ "./src/patterns/finder/components/finder__clear.js":
/*!*********************************************************!*\
  !*** ./src/patterns/finder/components/finder__clear.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





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

/***/ "./src/patterns/finder/components/finder__didyoumean.js":
/*!**************************************************************!*\
  !*** ./src/patterns/finder/components/finder__didyoumean.js ***!
  \**************************************************************/
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







function finder__didyoumean(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Did you mean \u201C", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__didyoumean__button",
    onClick: () => {
      const newQuery = props.query;
      newQuery.query = props.text.split(/\|/)[0].trim();
      newQuery.startRank = 1;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    }
  }, props.text.split(/\|/)[0].trim()), "\u201D?");
}

finder__didyoumean.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__didyoumean);

/***/ }),

/***/ "./src/patterns/finder/components/finder__filters.js":
/*!***********************************************************!*\
  !*** ./src/patterns/finder/components/finder__filters.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__radio */ "./src/patterns/finder/components/finder__radio.js");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__checkbox */ "./src/patterns/finder/components/finder__checkbox.js");







function finder__filters(props) {
  if (props.config.facetLabels.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__filters"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Filter ".concat(props.config.summariseAs.plural)), props.config.facetLabels.map(facet => {
      switch (facet.type) {
        case 'radio':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update
          });

        case 'checkbox':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.query
          });
      }
    }));
  } else {
    return null;
  }
}

finder__filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__filters);

/***/ }),

/***/ "./src/patterns/finder/components/finder__mobilefilters.js":
/*!*****************************************************************!*\
  !*** ./src/patterns/finder/components/finder__mobilefilters.js ***!
  \*****************************************************************/
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
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__filters */ "./src/patterns/finder/components/finder__filters.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__);










function finder__mobilefilters(props) {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  let filters = null;

  const getFilters = () => filters;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_5___default()(getFilters()));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__["disableBodyScroll"])(getFilters());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__["enableBodyScroll"])(getFilters());
    }
  }, [display]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__mobilefilters",
    "data-open": display
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fal fa-filter icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Filter ", props.config.summariseAs.plural, Object.keys(props.query.facets).length > 0 && " (".concat(Object.keys(props.query.facets).length, " applied)")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
    update: props.update
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__apply",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.updating ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Updating results\u2026")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.response.summary.totalMatching === 1 ? "View 1 ".concat(props.config.summariseAs.singular) : "View ".concat(props.response.summary.totalMatching, " ").concat(props.config.summariseAs.plural))))))));
}

finder__mobilefilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__mobilefilters);

/***/ }),

/***/ "./src/patterns/finder/components/finder__pagination.js":
/*!**************************************************************!*\
  !*** ./src/patterns/finder/components/finder__pagination.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





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

/***/ "./src/patterns/finder/components/finder__query.js":
/*!*********************************************************!*\
  !*** ./src/patterns/finder/components/finder__query.js ***!
  \*********************************************************/
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
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/finder__clear.js");
/* harmony import */ var _finder_appliedfilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__appliedfilters */ "./src/patterns/finder/components/finder__appliedfilters.js");











const maximumSuggestions = 5,
      //[keyCodeEscape, keyCodeUp, keyCodeDown] = [27, 38, 40],
keyCodeEscape = 27;

function finder__query(props) {
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.query.query);
  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    cancel: () => {}
  });
  const [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(16).slice(-4));
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setPartialQuery(props.query.query);
  }, [props.updating]);
  let textInput = null;

  function focusInput() {
    textInput.focus();
  }

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
    if (partialQuery) {
      call.cancel();
      setSuggestions([]);
      const newQuery = props.query;
      newQuery.query = partialQuery;
      newQuery.startRank = 1;
      newQuery.sortBy = null;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    }
  };

  const clear = partialQuery && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_7__["default"], {
    clear: () => {
      clearQuery();
    }
  });
  const suggestionsList = suggestions && suggestions.length > 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "finder__query__suggestions"
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map(suggestion => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    key: suggestion
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    onClick: () => {
      setPartialQuery(suggestion);
      setSuggestions([]);
      focusInput();
    }
  }, suggestion))));
  const input = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__query__input"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
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
      }
    },
    onChange: e => {
      // keep  what they're typing
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
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "fal fa-search",
    "aria-hidden": "true"
  }), ' ', "Find"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_appliedfilters__WEBPACK_IMPORTED_MODULE_8__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  }));
}

finder__query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__query);

/***/ }),

/***/ "./src/patterns/finder/components/finder__radio.js":
/*!*********************************************************!*\
  !*** ./src/patterns/finder/components/finder__radio.js ***!
  \*********************************************************/
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









function finder__radio(props) {
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.facet.defaultOpen),
        currentValue = props.query.facets[props.facet.meta] || '';
  const responseFacets = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values ? props.responseFacet[0].categories[0].values.reduce((acc, data) => {
    return [...acc, data.data.toLowerCase()];
  }, []) : [];
  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data.data.replace(/^"/, '').replace(/"$/, '')];
  }, []);
  const hiddenFacets = allFacets.filter(facet => responseFacets.indexOf(facet) < 0).length;

  const setFacet = e => {
    const newQuery = props.query,
          newValue = e.target.value;
    newValue ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const randomNumber = Math.random().toString(16).slice(-4);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "finder__filter finder__radio"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("legend", {
    "data-open": open ? 'true' : 'false'
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "button",
    "aria-expanded": open ? 'true' : 'false',
    onClick: () => setOpen(!open)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, props.facet.name), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
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

    if (responseFacetDetails && responseFacetDetails[0] || currentValue === value.data) {
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
    } else {
      return null;
    }
  })));
}

finder__radio.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__radio);

/***/ }),

/***/ "./src/patterns/finder/components/finder__results.js":
/*!***********************************************************!*\
  !*** ./src/patterns/finder/components/finder__results.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/finder__results__bestbet */ "./src/patterns/finder/components/cards/finder__results__bestbet.js");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/patterns/finder/components/finder__didyoumean.js");
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__summary */ "./src/patterns/finder/components/finder__results__summary.js");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__pagination */ "./src/patterns/finder/components/finder__pagination.js");










function finder__results(props) {
  const updating = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__updating"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Updating results\u2026"));

  if (props.response) {
    const didYouMean = props.response.spell && props.response.spell.text && props.response.summary.totalMatching === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: props.query,
      text: props.response.spell.text,
      update: props.update
    });
    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    const resultsContent = props.updating ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, updating) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currEnd: props.response.summary.currEnd,
      currStart: props.response.summary.currStart,
      query: props.response.query,
      numRanks: props.response.summary.numRanks,
      summariseAs: props.summariseAs,
      totalMatching: props.response.summary.totalMatching
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
      type: props.type
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
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results);

/***/ }),

/***/ "./src/patterns/finder/components/finder__results__summary.js":
/*!********************************************************************!*\
  !*** ./src/patterns/finder/components/finder__results__summary.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);





function finder__results__summary(props) {
  const result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.totalMatching > props.numRanks && "".concat(props.currStart, "\u2013").concat(props.currEnd, " of "), props.totalMatching, " ", props.query && 'matching ', result, props.query && " for \u201C".concat(props.query, "\u201D"));
}

finder__results__summary.propTypes = {
  currEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
/* harmony import */ var _components_finder_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/finder__query */ "./src/patterns/finder/components/finder__query.js");
/* harmony import */ var _components_finder_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/finder__filters */ "./src/patterns/finder/components/finder__filters.js");
/* harmony import */ var _components_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/finder__mobilefilters */ "./src/patterns/finder/components/finder__mobilefilters.js");
/* harmony import */ var _components_finder_results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/finder__results */ "./src/patterns/finder/components/finder__results.js");










/**
 * Universal finder
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/finder/finder
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
 * @copyright City, University of London 2019
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

function Finder(props) {
  const params = new URLSearchParams(window.location.search);
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
  };
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialQuery);
  const [funnelbackResponse, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialResponse);
  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true);
  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);

  const replaceHistory = (currQuery, currStartRank, currFacets) => {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    props.config.facetLabels.forEach(facet => {
      if (currFacets[facet.meta]) {
        params.set("meta_".concat(facet.meta, "_orsand"), currFacets[facet.meta]);
      } else {
        params.delete("meta_".concat(facet.meta, "_orsand"));
      }
    });
    window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    replaceHistory(query.query, query.startRank, query.facets);
    setUpdating(true);
    call.cancel();
    const [request, requestToken] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_9__["find"])(query.collection, query.fixedFacets, query.query, query.sortBy, query.sortDirection, query.startRank, query.numRanks, query.facets);
    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    });
    request.then(data => {
      setResponse(data);
      setUpdating(false);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    });
  }, [update]);
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_finder_query__WEBPACK_IMPORTED_MODULE_10__["default"], {
    config: props.config,
    query: query,
    update: {
      query: newQuery => setQuery(newQuery),
      results: newUpdate => setUpdate(newUpdate),
      updateState: update
    },
    updating: updating
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_12__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: {
      query: newQuery => setQuery(newQuery),
      results: newUpdate => setUpdate(newUpdate),
      updateState: update
    },
    updating: updating
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_finder_filters__WEBPACK_IMPORTED_MODULE_11__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: {
      query: newQuery => setQuery(newQuery),
      results: newUpdate => setUpdate(newUpdate),
      updateState: update
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_finder_results__WEBPACK_IMPORTED_MODULE_13__["default"], {
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: {
      query: newQuery => setQuery(newQuery),
      results: newUpdate => setUpdate(newUpdate),
      updateState: update
    },
    updating: updating
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




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Functions for making requests to Funnelback
 *
 * @module funnelback
 * @author Tom Waddington <tom.waddington.1@city.ac.uk>
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
    params: _objectSpread({}, fixedFacetParams, facetParams, {
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

/***/ "./src/patterns/key-info-box/key-info-paginated.js":
/*!*********************************************************!*\
  !*** ./src/patterns/key-info-box/key-info-paginated.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);





/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2018
 */

const className = 'key-info-paginated';
let listings = document.querySelectorAll('.key-info__listing'),
    batchQuantity = 3,
    contentToggles = document.querySelectorAll('.content-toggle'),
    browserWidth = document.documentElement.scrollWidth,
    listingDates = document.querySelectorAll('.key-info__date'),
    listingsVisible = [],
    // listingsLength = [],
defaultDuration = 2000,
    edgeOffset = 100; // Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

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
    listing[1].setAttribute('data-id', "listing-".concat(listing[0]));
  }
} // Initial listings display

/* function defaultListingsDisplay() {
    listingsLength = [];
    for (const listing of listings.entries()) {
        listingsLength.push(listings.length);
        listing[0] > batchQuantity - 1
            ? listing[1].classList.add('hide')
            : (listing[1].style.display = 'grid');
    }
} */
// Show number of available starting dates.


function listingsQuantity() {
  const listingsNumber = [];

  for (const listing of listings.entries()) {
    listingsNumber.push(listing.length);
  }

  let datesQuantities = document.querySelectorAll('.key-info__dates-quantity');

  for (const datesQuantity of datesQuantities) {
    let date;
    listingsNumber.length == 1 ? date = 'date' : date = 'dates';
    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('key-info__icon--left');
    datesQuantity.appendChild(iconWrapper);
    let calendarIcon = document.createElement('span');
    calendarIcon.classList.add('fas');
    calendarIcon.classList.add('fa-calendar-day');
    iconWrapper.appendChild(calendarIcon);
    let iconTextDiv = document.createElement('div');
    iconWrapper.appendChild(iconTextDiv);
    let iconTextP = document.createElement('p');
    iconTextP.appendChild(document.createTextNode(listingsNumber.length + ' available start ' + date));
    iconTextDiv.appendChild(iconTextP);
  }
}

function launchKeyInfo(batchQuantity) {
  dateTabIndex(); // Desktop: Toggle control listings when more than three listings exist

  if (browserWidth > 768) {
    if (listings.length > batchQuantity) {
      listingDisplay(); // defaultListingsDisplay();

      calculateVisibleListings();
      /* for (const contentToggle of contentToggles) {
              contentToggle.addEventListener(
              'click',
              e => {
                  // This will increase with each 'Load more' click, so visible listings
                  // must be captured before any further listings are made visible
                  let preExpandListingsVisible = listingsVisible.length;
                  e.preventDefault();
                  if (preExpandListingsVisible < listings.length) {
                      for (const listing of listings.entries()) {
                          let targetListing = document.querySelector(
                              `[data-id='listing-${preExpandListingsVisible}']`
                          );
                          let listingsVisibleLength = parseInt(
                              listingsVisible.length
                          );
                          listingsLength = parseInt(listingsLength);
                          let remainingItems = parseInt(
                              listingsLength - listingsVisibleLength
                          );
                          // Zen scroll to first listing of newly visible listings and focus on date
                          scroll.to(targetListing, 200);
                          let targetListingDate = targetListing.querySelectorAll(
                              '.key-info__date'
                          );
                          // Final batch of listings, zen scroll to 'load more' button and offset
                          if (remainingItems <= batchQuantity) {
                              scroll.to(contentToggle, 200);
                              contentToggles[0].style.display = 'none';
                          }
                          targetListingDate[0].focus();
                          // Bring in newly visible listings in two phases to allow for opacity transition
                          if (
                              listing[0] <
                              preExpandListingsVisible + batchQuantity
                          ) {
                              const promise = new Promise(resolve => {
                                  resolve(
                                      (listing[1].style.display = 'grid')
                                  );
                              });
                              promise.then(() => {
                                  listing[1].classList.remove('hide');
                              });
                              // Calculating visible listings must run here after display properties are updated
                              promise.then(() => {
                                  calculateVisibleListings();
                              });
                          }
                      }
                  }
              },
              false
          );
      } */
    } else {
      contentToggles[0].style.display = 'none';
    } // Mobile: one listing visible at a time

  } else if (browserWidth < 768 && listings.length > 1) {
    let listWrapper = document.getElementById('short-course-key-info-listings');
    listWrapper.classList.add('paginated-list'); // Scroll to top of listings after each paginated index click

    let paginationControls = document.querySelectorAll('.pagination__controls > button');

    for (const paginationControl of paginationControls) {
      paginationControl.addEventListener('click', () => {
        let listingsTop = document.getElementById('short-course-key-info-listings');

        if (paginationControl.getAttribute('aria-expanded') !== true) {
          zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(listingsTop, 0);
        }
      });
    }
  } else if (browserWidth < 768 && listings.length == 1) {
    for (const listing of listings.entries()) {
      listing[0] > 0 ? listing[1].style.display = 'none' : listing[1].style.display = 'block';
    }
  }
}

function launchKeyInfoPaginated() {
  listingsQuantity();
  launchKeyInfo(batchQuantity);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchKeyInfoPaginated,
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util.js");






/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */


const className = 'key-info-slider';
let listings = document.querySelectorAll('.key-info__listing'),
    batchQuantity = 3,
    contentToggles = document.querySelectorAll('.content-toggle'),
    contentSliders = document.querySelectorAll('.content-slider'),
    browserWidth = document.documentElement.scrollWidth,
    prevBtn = document.getElementById('key-info-previous-item'),
    nextBtn = document.getElementById('key-info-next-item'),
    listingHeight = '',
    listingDates = document.querySelectorAll('.key-info__date'),
    listingsVisible = [],
    listingsLength = [],
    defaultDuration = 2000,
    edgeOffset = 100; // Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_3___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

function dateTabIndex() {
  for (const listingDate of listingDates) {
    listingDate.setAttribute('tabindex', '-1');
  }
} // Initial listings display


function defaultListingsDisplay() {
  listingsLength = [];

  for (const listing of listings.entries()) {
    listingsLength.push(listings.length);
    listing[0] > batchQuantity - 1 ? listing[1].classList.add('hide') : listing[1].style.display = 'grid';
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
  const listingsNumber = [];

  for (const listing of listings.entries()) {
    listingsNumber.push(listing.length);
  }

  let datesQuantities = document.querySelectorAll('.key-info__dates-quantity');

  for (const datesQuantity of datesQuantities) {
    let date;
    listingsNumber.length == 1 ? date = 'date' : date = 'dates';
    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('key-info__icon--left');
    datesQuantity.appendChild(iconWrapper);
    let calendarIcon = document.createElement('span');
    calendarIcon.classList.add('fas');
    calendarIcon.classList.add('fa-calendar-day');
    iconWrapper.appendChild(calendarIcon);
    let iconTextDiv = document.createElement('div');
    iconWrapper.appendChild(iconTextDiv);
    let iconTextP = document.createElement('p');
    iconTextP.appendChild(document.createTextNode(listingsNumber.length + ' available start ' + date));
    iconTextDiv.appendChild(iconTextP);
  }
}
/**
 * Launches Key Info slider pattern. Pass in how many listings should display per batch,
 * i.e. each time user selects 'Load more'.
 *  */


function launchKeyInfo(batchQuantity) {
  let counter = 0; // Mobile: Show listing entry based on navigation button clicks

  function listingDisplay() {
    for (const listing of listings.entries()) {
      if (browserWidth < 768 && listings.length > 1) {
        listing[0] == counter ? listing[1].style.display = 'block' : listing[1].style.display = 'none';
      }

      listing[1].setAttribute('data-id', "listing-".concat(listing[0]));
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
        prevBtn.style.top = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_4__["pxToRem"])("-".concat(listingHeight))) + Object(_util__WEBPACK_IMPORTED_MODULE_4__["pxToRem"])(100) + 'rem';
        nextBtn.style.top = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_4__["pxToRem"])("-".concat(listingHeight))) + Object(_util__WEBPACK_IMPORTED_MODULE_4__["pxToRem"])(100) + 'rem';
      }
    }
  } // Run regardless of viewport size


  dateTabIndex(); // Desktop: Toggle control listings when more than three listings exist

  if (browserWidth > 768) {
    if (listings.length > batchQuantity) {
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
              let targetListing = document.querySelector("[data-id='listing-".concat(preExpandListingsVisible, "']"));
              let listingsVisibleLength = parseInt(listingsVisible.length);
              listingsLength = parseInt(listingsLength);
              let remainingItems = parseInt(listingsLength - listingsVisibleLength); // Zen scroll to first listing of newly visible listings and focus on date

              zenscroll__WEBPACK_IMPORTED_MODULE_3___default.a.to(targetListing, 200);
              let targetListingDate = targetListing.querySelectorAll('.key-info__date'); // Final batch of listings, zen scroll to 'load more' button and offset

              if (remainingItems <= batchQuantity) {
                zenscroll__WEBPACK_IMPORTED_MODULE_3___default.a.to(contentToggle, 0);
                contentToggles[0].style.display = 'none';
              }

              targetListingDate[0].focus(); // Bring in newly visible listings in two phases to allow for opacity transition

              if (listing[0] < preExpandListingsVisible + batchQuantity) {
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
}

function launchKeyInfoSlider() {
  listingsQuantity();
  launchKeyInfo(batchQuantity);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchKeyInfoSlider,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/load-more/load-more.js":
/*!*********************************************!*\
  !*** ./src/patterns/load-more/load-more.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Load more - show additional items on 'Load more' button click. Update URL to illustrate where user is in item set.
 *
 * @module patterns/load-more/load-more
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */


const className = 'load-more';
let hashedUrl = window.location.hash,
    loadMoreId;
/**
 * Control what items will display based on wrapper's 'data-listings-show' data attribute.
 *
 * @param {HTMLElements} [items] - Elements controlled by 'Load more' button.
 * @param {number} visibleItems - Number of items visible at any one time.
 * @param {HTMLElement} loadMoreBtn - Button controlling particular item group.
 */

function itemsDisplay(items, visibleItems, loadMoreBtn) {
  for (const item of items.entries()) {
    item[1].setAttribute('tabindex', '-1');

    if (item[0] >= visibleItems) {
      item[1].classList.add('hide');
      item[1].style.display = 'none';
    } else {
      item[1].classList.remove('hide');
      item[1].style.display = 'grid';
    }
  } // Hide 'load more' button when reached end of listings


  if (visibleItems > items.length) {
    loadMoreBtn.classList.add('hide');
  } else {
    loadMoreBtn.classList.remove('hide');
  }
}
/**
 * Scroll to, and focus first listing of newly visible items batch.
 *
 * @param {HTMLElement} [items] - Elements controlled by 'Load more' button.
 * @param {number} visibleItems - Number of items visible at any one time.
 * @param {number} itemsIncrement - Number of additional items shown when 'Load more' button is clicked.
 */


function scrollToItem(items, visibleItems, itemsIncrement) {
  let targetItem = visibleItems - itemsIncrement;

  for (const item of items.entries()) {
    if (item[0] == targetItem) {
      item[1].focus();
      zenscroll__WEBPACK_IMPORTED_MODULE_4___default.a.to(item[1]);
    } else if (visibleItems == itemsIncrement) {
      if (item[0] == 0) {
        item[1].focus();
        zenscroll__WEBPACK_IMPORTED_MODULE_4___default.a.to(item[1]);
      }
    }
  }
}
/**
 * Push state to URL: used to build initial hash after first 'Load more' click.
 *
 * @param {string} parentType - Data attribute describing parent group.
 * @param {string} childrenType - Data attribute describing child items.
 * @param {HTMLElement} wrapperId - Parent element wrapping items and 'Load more' button.
 * @param {number} visibleItems - Number of items visible at any one time.
 * @param {number} itemsIncrement - Number of additional tems shown when 'Load more' button is clicked.
 */


function pushUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement) {
  let targetListingUrlParam = visibleItems - (itemsIncrement - 1);
  history.pushState('', '', "#".concat(parentType).concat(wrapperId, "-").concat(childrenType).concat(targetListingUrlParam));
}
/**
 * Replace URL state: used to swap existing hash
 *
 * @param {string} parentType - Data attribute describing parent group.
 * @param {string} childrenType - Data attribute describing child items.
 * @param {HTMLElement} wrapperId - Parent element wrapping items and 'Load more' button.
 * @param {number} visibleItems - Number of items visible at any one time.
 * @param {number} itemsIncrement - Number of additional tems shown when 'Load more' button is clicked.
 */


function replaceUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement) {
  let targetListingUrlParam = visibleItems - (itemsIncrement - 1);
  history.replaceState('', '', "#".concat(parentType).concat(wrapperId, "-").concat(childrenType).concat(targetListingUrlParam));
}

function launchLoadMore(e) {
  let wrapperId = e.getAttribute('id'),
      items = e.querySelectorAll('.item'),
      itemsIncrement = parseInt(e.dataset.increment),
      loadMoreBtn = e.querySelector('.content-toggle button'),
      parentType = e.getAttribute('data-item-parent'),
      childrenType = e.getAttribute('data-item-children');
  /**
   * Give wrapper a numeric data attribute. As this changes, so
   * will the number of visible items.
   */

  e.setAttribute('data-items-visible', itemsIncrement);
  let visibleItems = parseInt(e.getAttribute('data-items-visible')); // Load correct number of items based on URL hash

  if (hashedUrl) {
    let hashedUrlParts = hashedUrl.split('-');
    let activeItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_3__["numberFromString"])(hashedUrlParts[1]));
    visibleItems = activeItem + (itemsIncrement - 1);
    e.setAttribute('data-items-visible', visibleItems);
    itemsDisplay(items, visibleItems, loadMoreBtn);
    scrollToItem(items, visibleItems, itemsIncrement);
  } else {
    itemsDisplay(items, visibleItems, loadMoreBtn);
  } // Run on every 'load more' click: increase listings by batch number


  loadMoreBtn.addEventListener('click', () => {
    visibleItems += itemsIncrement;
    e.setAttribute('data-items-visible', visibleItems);
    itemsDisplay(items, visibleItems, loadMoreBtn);
    scrollToItem(items, visibleItems, itemsIncrement);
    hashedUrl = window.location.hash;
    hashedUrl ? replaceUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement) : pushUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement);
    loadMoreId = e.id;
  }); // Back/forward browser clicks.

  window.onpopstate = () => {
    let loadMoreIdElement = document.getElementById(loadMoreId); // Must re-assign variable on pop state change

    hashedUrl = window.location.hash;

    if (hashedUrl) {
      // Capture latest hash
      let updatedUrlParts = window.location.hash.split('-');
      let currentItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_3__["numberFromString"])(updatedUrlParts[1]));
      currentItem = currentItem + (itemsIncrement - 1);
      visibleItems = currentItem;
      e.setAttribute('data-items-visible', visibleItems);
      itemsDisplay(items, visibleItems, loadMoreBtn);
      scrollToItem(items, visibleItems, itemsIncrement);
    } else {
      let relatedItems = loadMoreIdElement.querySelectorAll('.item');
      visibleItems = itemsIncrement;
      itemsDisplay(items, visibleItems, loadMoreBtn);
      e.setAttribute('data-items-visible', itemsIncrement);
      scrollToItem(relatedItems, visibleItems, itemsIncrement);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchLoadMore,
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
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
  iconSpan.className = "".concat(buttonIconClassName, " fal fa-fw");
  textSpan.className = "".concat(buttonTextClassName);
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
  const currentPage = menu.querySelector(".".concat(columnClassName, ":first-of-type > ul .").concat(currentClassName)),
        col = currentPage && menu.querySelector(".".concat(columnClassName, ":first-of-type > ul"));
  /**
   * The first column is the entire menu on mobile, so we need to scroll
   * the entire column if the current page is in it and off-screen.
   *
   * The other sub-menus only display a single level, so we scroll the
   * list to the open item or the current page.
   */

  Array.from(menu.querySelectorAll(".".concat(columnClassName, " > ul"))).forEach((list, i) => {
    if (i === 0 && currentPage && Object(_util__WEBPACK_IMPORTED_MODULE_3__["isVisible"])(currentPage)) {
      /**
       * The current page is in the first column
       */
      const scrollCol = zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.createScroller(col);
      scrollCol.center(currentPage, scrollDuration);
    } else {
      const target = list.querySelector(['[data-open="true"]', ".".concat(currentClassName)].join(',')),
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
    const menu = button.closest(".".concat(className));
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
  return Array.from(menu.querySelectorAll(".".concat(menuLevelClassNamePrefix).concat(level, " > li")));
}
/**
 * When we change which sub-menu is open, the entire tree below it also changes
 * - whatever was open is now closed. So, we remove those sub-menus.
 *
 * @param {HTMLDivElement} column - The column to retain.
 * @param {number} level - Close everything at this level and lower.
 */


function clearColumnsToTheRight(column, level) {
  const menu = column.closest(".".concat(className));
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
        textSpan = button.querySelector(".".concat(buttonTextClassName)),
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
        menu = button.closest(".".concat(className)),
        thisList = button.closest('ul'),
        thisLevel = Number.parseInt(thisList.className.slice(-1)),
        thisCol = menu.querySelector(".".concat(columnClassName, ":nth-of-type(").concat(thisLevel - firstLevel + 1, ")")),
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
  Array.from(document.querySelectorAll("[data-id=\"".concat(button.closest('li').dataset.id, "\"]"))).forEach(menuItem => setMenuItemButtonDetails(menuItem.querySelector('button'), open));
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
        menu = label.closest(".".concat(className));
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
      const open = Array.from(menu.querySelectorAll([".".concat(currentClassName, " > span"), ".".concat(hierarchyClassName, " > a"), ".".concat(columnClassName, " > ul > li:first-of-type > a")].join(','))).filter(elem => elem && Object(_util__WEBPACK_IMPORTED_MODULE_3__["isVisible"])(elem));
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
  const label = menu.querySelector(".".concat(buttonClassName)),
        menuList = menu.querySelector(".".concat(menuLevelClassNamePrefix).concat(firstLevel)),
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
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
    page.setAttribute(_aria_attributes_js__WEBPACK_IMPORTED_MODULE_3__["default"].label, "Page ".concat(pageNumber + 1));
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
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
    const pagesArray = Array.from(pages.querySelectorAll(".".concat(pageClassName))),
          controlsArray = Array.from(controls.querySelectorAll('button'));
    closeAll(pagesArray, controlsArray);
    const page = pages.querySelector(".".concat(pageClassName, ":nth-of-type(").concat(pageNumber, ")")),
          button = controls.querySelector("[data-page=\"".concat(pageNumber, "\"]"));
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
    const currentPage = Number.parseInt(controls.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, "=\"true\"]")).dataset.page);
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
  let summaryText = "".concat(pageCount, " pages)");

  if (itemCount && Number.parseInt(itemCount)) {
    summaryText = "(".concat(itemCount, " items on ") + summaryText;
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, "Open page ".concat(pageNumber));

  if (totalPages - pageNumber === 1) {
    button.className = "".concat(controlsElementClassName, " ").concat(buttonClassName, " ").concat(buttonClassName, "--penultimate");
  } else if (totalPages === pageNumber) {
    button.className = "".concat(controlsElementClassName, " ").concat(buttonClassName, " ").concat(buttonClassName, "--last");
  } else {
    button.className = "".concat(controlsElementClassName, " ").concat(buttonClassName);
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
        pages = Array.from(elem.querySelectorAll(".".concat(pageClassName))),
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

  ellipsisFirst.className = "".concat(controlsElementClassName, " ").concat(ellipsisClassName, " ").concat(ellipsisClassName, "--first");
  ellipsisFirstInner.innerText = '…';
  ellipsisFirst.appendChild(ellipsisFirstInner);
  ellipsisLast.className = "".concat(controlsElementClassName, " ").concat(ellipsisClassName, " ").concat(ellipsisClassName, "--last");
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
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/social-icon/social-icon.js":
/*!*************************************************!*\
  !*** ./src/patterns/social-icon/social-icon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const className = 'fa-link';

function copyIconToClipboard(elem) {
  const copy = elem;
  copy.addEventListener('mouseover', () => {
    let t = document.createElement('div');
    let link = document.createElement('span');
    t.className = 'tooltip';
    link.className = 'link-copy';
    let textlink = document.createTextNode('http://google.com');
    let textnode = document.createTextNode('Copy link');
    t.appendChild(textnode);
    link.appendChild(textlink);
    t.appendChild(link);
    document.querySelector('.fa-link').appendChild(t);
  });
  copy.addEventListener('click', e => {
    e.preventDefault();
    let text = document.querySelector('.link-copy');
    let range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      document.querySelector('.tooltip').textContent = 'Link Copied';
      document.querySelector('.tooltip').classList.add(msg);
    } catch (err) {
      throw new Error(e);
    } // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported


    window.getSelection().removeAllRanges();
  });
  copy.addEventListener('mouseout', e => {
    //remove element from mouseover
    e.target.childNodes[0].remove();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: copyIconToClipboard,
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../main */ "./src/main.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");







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
      [endKey, homeKey, arrowLeft, arrowUp, arrowRight, arrowDown] = [35, 36, 37, 38, 39, 40],
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_6__["reduceMotion"])() ? 0 : 999,
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
  link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].selected, selected);

  if (selected) {
    //link.removeAttribute('tabindex');
    link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].current, true);
  } else {
    link.setAttribute('tabindex', 0);
    link.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].current);
  }
}
/**
 * Change the selection to the requested tab.
 *
 * @param {HTMLAnchorElement} newTab - The selected tab.
 */


function selectTab(newTab) {
  const tabs = newTab.closest(".".concat(className)),
        controls = tabs.querySelector(".".concat(linksClassName)),
        linkItems = Array.from(controls.querySelectorAll('li')),
        panels = Array.from(tabs.querySelectorAll(".".concat(panelClassName)));
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
  scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_4___default.a.to(tabs, scrollDuration);
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
  const currentTab = tabs.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].selected, "=\"true\"]")),
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
  accordion.id = "accordion".concat(tabs.dataset.assetid);
  accordion.dataset.allowsingle = 'false';
  accordion.dataset.defaultopen = 'true';
  accordion.dataset.level = tabs.dataset.level;
  accordion.dataset.tabs = tabs.dataset.tabs;
  accordion.dataset.toggleopen = 'true';
  Array.from(tabs.querySelectorAll(".".concat(panelClassName))).forEach(panel => {
    const heading = panel.querySelector(".".concat(panelClassName, "__heading")),
          body = panel.querySelector(".".concat(panelClassName, "__body")),
          accordionHeading = document.createElement("h".concat(accordion.dataset.level)),
          accordionSection = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = "accordion".concat(tabs.dataset.assetid, "-header").concat(panel.dataset.assetid);
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].labelledBy);
    accordionHeading.innerText = heading.innerText.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = "accordion".concat(tabs.dataset.assetid, "-body").concat(panel.dataset.assetid);
    accordionSection.innerHTML = body.innerHTML;
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(accordion, [accordionHeading, accordionSection]);
  });
  tabs.parentNode.insertBefore(wrapper, tabs);
  wrapper.appendChild(tabs);
  wrapper.appendChild(accordion);
  Object(_main__WEBPACK_IMPORTED_MODULE_5__["tryCatch"])(() => _accordion_accordion__WEBPACK_IMPORTED_MODULE_7__["default"].launchFn(accordion));
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
  const controls = tabs.querySelector(".".concat(linksClassName)),
        linkItems = Array.from(controls.querySelectorAll('li')),
        panels = Array.from(tabs.querySelectorAll(".".concat(panelClassName)));

  if (linkItems.length === 1) {
    /**
     * don't make one tab into a tabbed section, makes no sense
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["removeClass"])(tabs, className, false);
    return;
  }

  controls.setAttribute('role', 'tablist'); // zero by passes by not using CSS styling on the tabs

  if (tabs.getAttribute('data-mobiletabs') > 0) {
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
  launchQuery: ".".concat(className)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
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
  html.className += " ".concat(classPrefix).concat(theme);
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
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, parametersToObject, objectToParameters, gaEvent, appendAll, pxToRem, numberFromString */
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

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/main.js */"./src/main.js");


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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map