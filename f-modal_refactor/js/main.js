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

/***/ "./src/action-on-scroll.js":
/*!*********************************!*\
  !*** ./src/action-on-scroll.js ***!
  \*********************************/
/*! exports provided: actionOnScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionOnScroll", function() { return actionOnScroll; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);




/**
 *
 * actionOnScroll use the IntersectionObserver API to check if element is intersceting
 *
 * @param {HTMLElement} element - element to observer
 * @param {Action} Function/String - To either excute provided function on element or add the string as a class name
 * @param {Boolean} defualt false - pass true if you want the function to run every time element is Intersecting
 * @param {Object} Object - Pass options to customise IntersectionObserver see docs
 */
function actionOnScroll(element, action) {
  var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    threshold: [0, 0.1, 1]
  };

  if (element && typeof element != 'undefined' && element != null) {
    var actionOnScrollAction = function actionOnScrollAction(entries) {
      entries.forEach(function (entry) {
        //what to do with element depending on action type
        if (entry.isIntersecting) {
          if (typeof action === 'string') {
            element.classList.add(action);
          } else if (typeof action === 'function') {
            action(element);
          } // stop observing if repeat === false


          if (repeat === false) {
            observer.unobserve(element);
          }
        }
      });
    }; //intialise observer and observer element


    var observer = new IntersectionObserver(actionOnScrollAction, options);
    observer.observe(element);
  }
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
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_0__);




/**
 * WAI-ARIA attributes
 *
 * Quicker to type, intellisensible, documents what they're for, and saves a
 * tiny amount of code by replacing the string 'aria-' with a minifiable
 * variable and dot notation.
 *
 * @module aria-attributes
 * @author Web Development
 * @copyright City, University of London 2018
 */

/**
 * @readonly
 * @enum {string}
 */
var aria = {
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");











/**
 * Main entry
 *
 * @author Web Development
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
    // console.log(e);
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "Pattern launch ".concat(e.fileName, " (").concat(window.location, ")"), true);
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
    var launchFn = pattern.launchFn,
        launchQuery = pattern.launchQuery;
    Array.from(document.querySelectorAll(launchQuery)).filter(function (elem) {
      return elem.className.indexOf("".concat(launchQuery, "-no-js"));
    }).forEach(function (elem) {
      return tryCatch(function () {
        return launchFn(elem);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    // disable for now
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', function() {
    //         navigator.serviceWorker
    //             .register('sw.js')
    //             .then(function() {}, function() {});
    //     }, false);
    // }
    Array.from(document.getElementsByTagName('html')).forEach(function (html) {
      var ie = Object(_util__WEBPACK_IMPORTED_MODULE_9__["detectIE"])();
      Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeClass"])(html, 'no-js', false);

      if (ie >= 12) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    _patterns__WEBPACK_IMPORTED_MODULE_8__["default"].forEach(launchPattern);
    var parameters = Object(_util__WEBPACK_IMPORTED_MODULE_9__["parametersToObject"])(location.search);
    parameters['dev'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_10__["devcorate"])(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_10__["devcorate"])(document.querySelector('body'), 'rel', parameters['rel']);
  }
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
/* harmony import */ var _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-slider */ "./src/patterns/key-info-box/key-info-slider.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");
/* harmony import */ var _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/paginated-list/paginated-list */ "./src/patterns/paginated-list/paginated-list.js");
/* harmony import */ var _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/pagination/pagination */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/tabs/tabs */ "./src/patterns/tabs/tabs.js");
/* harmony import */ var _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/theme-switcher/theme-switcher */ "./src/patterns/theme-switcher/theme-switcher.js");
/* harmony import */ var _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/link-finder/link-finder */ "./src/patterns/link-finder/link-finder.js");
/* harmony import */ var _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/back-to-top-link/back-to-top-link */ "./src/patterns/back-to-top-link/back-to-top-link.js");
/* harmony import */ var _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/modal/modal */ "./src/patterns/modal/modal.js");
/* harmony import */ var _patterns_modal_slider_modal_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/modal-slider/modal-slider */ "./src/patterns/modal-slider/modal-slider.js");
/* harmony import */ var _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patterns/social-icon/social-icon */ "./src/patterns/social-icon/social-icon.js");
/* harmony import */ var _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patterns/image-carousel/image-carousel */ "./src/patterns/image-carousel/image-carousel.js");
/* harmony import */ var _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patterns/animation/content-separator/content-separator */ "./src/patterns/animation/content-separator/content-separator.js");
/* harmony import */ var _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patterns/animation/image-expand/image-expand */ "./src/patterns/animation/image-expand/image-expand.js");
/* harmony import */ var _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patterns/animation/content-fade-in/content-fade-in */ "./src/patterns/animation/content-fade-in/content-fade-in.js");
/* harmony import */ var _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./patterns/animation/content-slide-up/content-slide-up */ "./src/patterns/animation/content-slide-up/content-slide-up.js");
/* harmony import */ var _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patterns/slider/slider */ "./src/patterns/slider/slider.js");
/* harmony import */ var _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./patterns/animation/number-animation/number-animation */ "./src/patterns/animation/number-animation/number-animation.js");
/* harmony import */ var _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./patterns/show-more/show-more */ "./src/patterns/show-more/show-more.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City, University of London 2018
 */

























/* harmony default export */ __webpack_exports__["default"] = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_load_more_load_more__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_theme_switcher_theme_switcher__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_12__["default"], _patterns_back_to_top_link_back_to_top_link__WEBPACK_IMPORTED_MODULE_13__["default"], _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_18__["default"], _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_19__["default"], _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_20__["default"], _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_21__["default"], _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_14__["default"], _patterns_modal_slider_modal_slider__WEBPACK_IMPORTED_MODULE_15__["default"], _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_16__["default"], _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_22__["default"], _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_17__["default"], _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_23__["default"], _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_24__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");









/**
 * Accordion
 *
 * @module patterns/accordion/accordion
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */



var className = 'accordion',
    headingClassName = className + '__heading',
    headingTextClassName = headingClassName + '__text',
    headingIconClassName = headingClassName + '__indicator fal',
    bodyClassName = className + '__body',
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_8__["reduceMotion"])() ? 0 : 999,
    scrollTo = true;
/**
 * Sets a heading and the button nested within to be open or closed.
 *
 * @param {HTMLHeadingElement} heading - An accordion heading.
 * @param {boolean} open - Set this section to be open?
 */

function setSection(heading, open) {
  heading.dataset.open = open;
  heading.firstElementChild.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded, open);
}
/**
 * Open a section, calculate its height, then close it again.
 *
 * With no transition, this is essentially invisible to the user.
 *
 * @param {HTMLHeadingElement} heading - An accordion heading.
 * @return {string} The pixel height of the section when open.
 */


function calculateAccordionBodyHeight(heading) {
  var section = heading.nextElementSibling;
  setSection(heading, true);
  section.dataset.closed = 'false';
  var height = section.offsetHeight + 'px';
  setSection(heading, false);
  section.dataset.closed = 'true';
  return height;
}
/**
 * Set style properties for transition.
 *
 * @param {HTMLElement} element - The section to transition.
 * @param {string} initialHeight - The initial height from which to transition.
 */


function setupTransition(element, initialHeight) {
  element.style.height = initialHeight;
  element.dataset.closed = 'false';
  return true;
}
/**
 * Cleanup after transition.
 *
 * @param {HTMLElement} accordionSection - The section that transitioned.
 */


function cleanupTransition(section) {
  var open = Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(section.previousElementSibling.dataset.open);
  section.style.height = null;
  section.dataset.closed = open ? 'false' : 'true';
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
  var heading = button.parentNode,
      accordionSection = heading.nextElementSibling;
  /**
   * After we've transitioned the opening/closing, we want to revert to
   * letting the CSS size the element. Add a listener to do this that will
   * self-destruct after running.
   */

  accordionSection.addEventListener('transitionend', function () {
    return cleanupTransition(accordionSection);
  }, {
    capture: true,
    once: true
  });

  if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded))) {
    // Starting height is the current height
    setupTransition(accordionSection, accordionSection.offsetHeight + 'px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      accordionSection.style.height = '0px';
    }, 0);
    history.pushState(null, null, "".concat(window.location.pathname).concat(window.location.search));
    setSection(heading, false);
  } else {
    // Calclulate and save how big we're transitioning to
    var sectionHeight = calculateAccordionBodyHeight(heading); // Starting height is 0

    setupTransition(accordionSection, '0px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      accordionSection.style.height = sectionHeight;
    }, 0); // If we already have history, replace it rather than adding to it.

    if (window.location.hash) {
      history.replaceState(null, null, '#' + heading.id);
    } else {
      history.pushState(null, null, '#' + heading.id);
    }

    if (toggleOpen) {
      var sections = Array.from(document.querySelectorAll("#".concat(heading.parentElement.id, " > .").concat(bodyClassName)));
      headings.forEach(function (heading) {
        return setSection(heading, false);
      });
      sections.filter(function (section) {
        return section.id !== accordionSection.id;
      }).forEach(function (section) {
        section.dataset.closed = 'true';
      });
    }

    setSection(heading, true);

    if (scrollTo && !(Object(_util__WEBPACK_IMPORTED_MODULE_8__["verticallyInWindow"])(heading) && Object(_util__WEBPACK_IMPORTED_MODULE_8__["verticallyInWindow"])(accordionSection))) {
      zenscroll__WEBPACK_IMPORTED_MODULE_6___default.a.to(heading, scrollDuration);
    }
  }
}
/**
 * Create a button from the text content of a heading.
 *
 * @param {HTMLElement} heading - An accordion heading.
 * @returns {HTMLButtonElement} An accordion section button.
 */


function buttonFromHeading(heading) {
  var button = document.createElement('button'),
      // Chrome can't apply grid layout to buttons, need to wrap contents
  wrapper = document.createElement('div'),
      textSpan = document.createElement('span'),
      iconSpan = document.createElement('span');
  textSpan.className = headingTextClassName;
  iconSpan.className = headingIconClassName;
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].hidden, true);
  button.setAttribute('type', 'button');
  textSpan.appendChild(document.createTextNode(heading.textContent));
  Object(_util__WEBPACK_IMPORTED_MODULE_8__["appendAll"])(wrapper, [textSpan, iconSpan]);
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
  var locationHash = window.location.hash.substr(1),
      toggleOpen = Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(accordion.dataset.toggleopen),
      defaultOpen = Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(accordion.dataset.defaultopen),
      allowSingle = Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(accordion.dataset.allowsingle),
      headings = Array.from(document.querySelectorAll("#".concat(accordion.id, " > .").concat(headingClassName)));
  var idLinked = false;

  if (!(allowSingle || headings.length > 1)) {
    /**
     * not enough content to accordion
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_8__["removeClass"])(accordion, className, false);
    return;
  }

  headings.forEach(function (heading) {
    var content = heading.nextElementSibling,
        button = buttonFromHeading(heading);
    content.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].labelledBy, heading.id);
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
      heading.nextElementSibling.dataset.closed = 'true';
    }

    button.addEventListener('click', function () {
      return buttonClick(button, headings, toggleOpen);
    }, true);
  });
  /* Show first item of accordion, if accordion is set to default open,
         and we haven't linked to a specific section */

  if (defaultOpen && !idLinked) {
    setSection(headings[0], true);
    headings[0].nextElementSibling.dataset.closed = 'false';
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAccordion,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/content-fade-in/content-fade-in.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/animation/content-fade-in/content-fade-in.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 *  Animates content section to fade in and upwards on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-section
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

var className = 'content-fade-in';

function contentFadeIn(contentFadein) {
  var viewPortHeight = window.innerHeight; // calculates viewport height

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
    contentFadein.classList.add('content-fade-in--start');
    window.addEventListener('scroll', function () {
      var elemOffset = contentFadein.offsetTop;
      var screenPos = window.pageYOffset; // calculates scroll position

      if (screenPos > elemOffset - viewPortHeight + 10 && !contentFadein.className.includes('content-fade-in--complete')) {
        contentFadein.classList.add('content-fade-in--complete');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: contentFadeIn,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/content-separator/content-separator.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/animation/content-separator/content-separator.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 * Leading separator transition
 *
 * @module paint-layouts/case-study-transition-effects/leading-separator
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

var className = 'content-separator-container';
/**
 *
 * @param {HTMLElement} contentSeparatorContainer: the separator is the
 * first child of this container
 *
 */

function contentSeparator(contentSeparatorContainer) {
  var viewPortHeight = window.innerHeight; // calculates viewport height

  var el = insertElement(contentSeparatorContainer);

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
    el.classList.add('content-separator--transition-start');
    window.addEventListener('scroll', function () {
      var elemOffset = el.offsetTop;
      var screenPos = window.pageYOffset; // calculates scroll position

      if (screenPos > elemOffset - viewPortHeight + 20 && !el.className.includes('content-separator--transition-complete')) {
        el.classList.add('content-separator--transition-complete');
      }
    });
  }
}
/**
 *
 * @param {HTMLElement} contentSeparatorContainer: the separator is the
 * first child of this container
 *
 * @returns {HTMLElement} el: the element that has the transition
 *
 */


function insertElement(contentSeparatorContainer) {
  var el = document.createElement('div');
  el.setAttribute('class', 'content-separator');
  contentSeparatorContainer.prepend(el);
  return el;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: contentSeparator,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/content-slide-up/content-slide-up.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/animation/content-slide-up/content-slide-up.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util */ "./src/util.js");






/**
 * Background slideup transition, Animates content to slide up on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-slideup
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

var className = 'content-slide-up';

function contentSlideUp(contentSlideup) {
  var viewPortHeight = window.innerHeight; // calculates viewport height

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) {
    contentSlideup.classList.add('content-slideup--start');
    window.addEventListener('scroll', function () {
      var screenPos = window.pageYOffset; // calculates scroll position

      var elemOffsetTop = contentSlideup.offsetTop; // calculates element offset from top to the page

      var parentElemHeight = contentSlideup.parentElement.offsetHeight - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue('padding-bottom')) - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue('padding-top'));

      if (screenPos > elemOffsetTop - viewPortHeight - parentElemHeight * 70 / 100 && !contentSlideup.className.includes('content-slideup--end')) {
        contentSlideup.classList.add('content-slideup--end');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: contentSlideUp,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/image-expand/image-expand.js":
/*!*************************************************************!*\
  !*** ./src/patterns/animation/image-expand/image-expand.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 * Image transition
 *
 * @module paint-layouts/case-study-transition-effects/banner-image
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

var className = 'image-expand';

function imageExpand(image) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
    var viewPortHeight = window.innerHeight; // calculates viewport height

    image.classList.add('image-expand--start');
    window.addEventListener('scroll', function () {
      var elemOffset = image.offsetTop;
      var screenPos = window.pageYOffset; // calculates scroll position

      if (screenPos > elemOffset - viewPortHeight + 100 && !image.className.includes('image-expand--complete')) {
        image.classList.add('image-expand--complete');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: imageExpand,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/number-animation/number-animation.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/animation/number-animation/number-animation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _action_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../action-on-scroll */ "./src/action-on-scroll.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util */ "./src/util.js");











var className = 'animate-number';
var DURATION = 1500; // set duration variable 1500 ms increase if want longer animation

/**
 *
 * find container containing the number
 *
 * @param {HTMLElement} element - html element to be animated
 * @return {HTMLElement} element - if element to be animated is found return it else return original element
 */

function findNumberContainer(widget) {
  var nested = widget.querySelector('.animate--number__number');
  return typeof nested != 'undefined' && nested != null ? nested : widget;
}
/**
 *
 * Intial setup
 * add data attr : data-animation-number-value - number to animate
 * add data attr : data-animation-number-float - boolean value if number is float
 * add data attr : data-animation-numner-start - number value of where to start animation from
 * add class name - animate--number--init
 *
 * @param {HTMLElement} element - The section that need to be animated
 * @return {boolean} - if number animation is setup?
 */


function initNumberAnimation(widget) {
  var startStr = widget.dataset.animationNumberStart || '0';
  var start = parseFloat(startStr);
  var numberContainer = findNumberContainer(widget);
  var numberStr = numberContainer.innerHTML.trim().replace(/,/g, '');

  if (numberStr.match(/^-?[0-9,]+(\.[0-9,]+])?/)) {
    widget.dataset.animationNumberValue = parseFloat(numberStr);
    widget.dataset.animationNumberFloat = !!numberStr.match(/\./);
    widget.dataset.animationNumberStart = start;
    numberContainer.innerHTML = startStr;
    widget.classList.add('animate--number--init');
    return true;
  } else {
    return false;
  }
}
/**
 *
 * run animation function
 *
 * @param {HTMLElement} element - element to be animated
 */


function runNumberAnimation(widget) {
  var numberContainer = findNumberContainer(widget);
  var isFloat = widget.dataset.animationNumberFloat;
  var value = parseInt(widget.dataset.animationNumberValue);

  if (value !== 0) {
    var first = true;
    var startTime = 0;
    var startValue = parseInt(widget.dataset.animationNumberStart);
    var lastValue = 0;
    /**
     * function to run animation
     *
     * @param {timestamp} time stamp - time stamp from requestAnimationFrame API
     */

    var f = function f(timestamp) {
      if (first) {
        startTime = timestamp;
        first = false;
      }

      var t = (timestamp - startTime) / DURATION; // difference in time between two discrete points in time divied by duration

      var finish = t >= 1;
      var k = finish ? 1 : 1 - Math.pow(1 - t, 4);
      var v = k * (value - startValue) + startValue;

      if (isFloat) {
        v = Math.round(v);
      }

      if (lastValue !== v) {
        lastValue = v;
        numberContainer.innerHTML = v.toLocaleString('en-GB'); // append and format to GB
      }

      if (finish) {
        //end of animation
        widget.classList.add('animate--number--complete');
      } else {
        //repeat call requestAnimationFrame until finish is true
        window.requestAnimationFrame(f);
      }
    };
    /**
     * run requestAnimationFrame to repaint animation to screen
     */


    window.requestAnimationFrame(f);
  }
}
/**
 *
 * Intial setup
 *
 * number animation should contain a wrapper with a class name 'animate-number'
 * there should be at least one child element with a class name 'animate--number__heading'
 * and a span element with a class name 'animate--number__number' containing the number
 *
 * e.g.
 *
 * <div class="animate-number">
 *  <h2 class="animate animate--number__heading">
 *      <span class="animate--number__number">10,000</span>
 *  </h2>
 * </div>
 *
 * @param {HTMLElement} elm - An HTML element with the 'animate-number' class.
 *
 */


function init(elm) {
  var lazyNumbers = [].slice.call(elm.querySelectorAll('.animate--number'));
  /**
   * check if browser support IntersectionObserver api
   */

  if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["checkIntersectionObserver"])()) {
    lazyNumbers.forEach(function (lazyUnit) {
      initNumberAnimation(lazyUnit);
      /**
       * pass the element and function to actionOnScroll
       * to animate when element is intersecting
       */

      Object(_action_on_scroll__WEBPACK_IMPORTED_MODULE_7__["actionOnScroll"])(lazyUnit, runNumberAnimation);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: init,
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
 * @module patterns/back-to-top-Link/back-to-top-Link
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */
var className = 'back-to-top',
    viewPortHeight = window.innerHeight;
/**
 * Back to top link button only appears on long pages and when you have scrolled down long enough
 *
 * Please change the parameters below to alter the behaviour of the back to top button.
 *
 * @param {variable} pageHeight - only appears on long pages which are 'X' times the viewport height.
 * @param {variable} scrollPos - sets how many viewport heights you need to scroll down for back to top to appear. 1 = 1 viewport height
 */

var pageHeight = 1.5;
var scrollPos = 1;
/**
 *  Initialises back to top button for long pages only
 *
 * @param{HTMLParentElement} - selects back to top parent element, which is used in return to select children elements
 */

function initBacktoTop(backToTop) {
  var backToTopBut = backToTop.querySelectorAll('a')[0];
  backToTopBut.style.display = 'none';
  window.addEventListener('load', function () {
    var docHeight = document.body.clientHeight; // calculates page height

    var backToTopDock = backToTop.offsetTop;
    var deadZone = backToTopDock - viewPortHeight; // deadzone is the 'area' when you scroll to the bottom of the page, where the back to top botton docks back into the footer

    if (docHeight > viewPortHeight * pageHeight && deadZone > viewPortHeight * scrollPos + viewPortHeight) {
      // this route is for pages long enough to have the back to top button stick to the right and eventually dock in the footer once you reach the bottom of the page
      backToTopBut.style.display = 'inline';
      backToTopBut.classList.add('back-to-top-hide');

      window.onscroll = function () {
        updateProgress(backToTopBut, deadZone);
        scrollButtonShow(backToTopBut, deadZone);
      };
    } else if (docHeight > viewPortHeight * pageHeight) {
      // this route is for odd pages just long enough for button to appear in footer once scrolled down, but no long enough to have space for a sticky button to sit in the corner while scrolling.
      backToTopBut.style.display = 'inline';
    }
  });
}
/**
 *  Button fading behaviour
 *
 * @param {HTMLAnchorElement} backToTopBut - back to top anchor button.
 * @param {number} deadZone - deadzone is the 'area' identified by vertical scroll position, when you scroll to the bottom of the page, where the back to top botton docks back into the footer.
 */


function scrollButtonShow(backToTopBut, deadZone) {
  var screenPos = window.pageYOffset; // calculates scroll position

  if (screenPos > viewPortHeight * scrollPos && screenPos < deadZone) {
    // shows button when scrolled down far enough - see parameters
    backToTopBut.classList.remove('back-to-top-hide');
    backToTopBut.classList.add('back-to-top-stick');
  } else if (screenPos < 200) {
    // hides button when close to top of the page
    backToTopBut.classList.add('back-to-top-hide');
  } else if (screenPos >= deadZone) {
    // docks button in footer when reaching bottom of the page
    backToTopBut.classList.remove('back-to-top-stick');
    backToTopBut.classList.remove('back-to-top-hide');
  }
}
/**
 *  Progress meter:
 *
 */
// updateProgress function


function updateProgress() {
  // Setting up SVG animation
  var progressPath = document.getElementsByClassName('back-to-top')[0].querySelector('path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 0ms linear'; // Calculate values

  var scroll = window.pageYOffset;
  var height = document.documentElement.scrollHeight - window.innerHeight;
  var progress = pathLength - scroll * pathLength / height; // Updates progress bar

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
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");






/**
 * Warning removal
 *
 * @module patterns/cms-editor-warning/cms-editor-warning
 * @author Web Development
 * @copyright City, University of London 2018
 */

var className = 'cms-editor',
    warningClass = className + '-warning',
    buttonClass = warningClass + '-remover';
/**
 * Create a warning remover button.
 *
 * @returns {HTMLButtonElement} A button element.
 */

function createButton() {
  var button = document.createElement('button');
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
  var warnings = Array.from(elem.querySelectorAll(".".concat(warningClass)));

  if (warnings.length) {
    var button = createButton();
    button.addEventListener('click', function () {
      warnings.forEach(function (w) {
        return w.parentNode.removeChild(w);
      });
      button.parentNode.removeChild(button);
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(elem, className, false);
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
 * @author Web Development
 * @copyright City, University of London 2018
 */


var className = 'cookie-notice',
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
  var now = new Date(),
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
  var agreeButton = document.createElement('button'),
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/util.js");








/**
 * Devcorate
 *
 * @module patterns/devcorate/devcorate
 * @author Web Development
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
  Array.from(elem.querySelectorAll('a')).forEach(function (anchor) {
    if (anchor.origin === window.location.origin) {
      var parameters = anchor.search ? Object(_util__WEBPACK_IMPORTED_MODULE_5__["parametersToObject"])(anchor.search) : {};
      parameters[param] = value;
      anchor.href = "".concat(anchor.origin).concat(anchor.pathname).concat(Object(_util__WEBPACK_IMPORTED_MODULE_5__["objectToParameters"])(parameters)).concat(anchor.hash);
    }
  });
}

/***/ }),

/***/ "./src/patterns/feedback/feedback.js":
/*!*******************************************!*\
  !*** ./src/patterns/feedback/feedback.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util.js");






/**
 * Feedback
 *
 * @module patterns/feedback/feedback
 * @author Web Development
 * @copyright City, University of London 2018
 */


var className = 'feedback',
    feedbackPage = '/feedback';
/**
 * Push a Google Analytics page feedback event into the data layer queue.
 *
 * @param {string} action - The event action.
 * @param {number} value - The event value
 */

function sendFeedback(action, value) {
  Object(_util__WEBPACK_IMPORTED_MODULE_4__["gaEvent"])('pageFeedback', 'Page feedback', action, window.location.toString(), value, true);
}
/**
 * Handle a click on the "no, it's not useful" button.
 *
 * @param {HTMLParagraphElement} container - The button container.
 */


function handleNo(container) {
  sendFeedback('Not useful', 0);
  var message = document.createElement('p'),
      messagePrefix = document.createTextNode('We’re sorry to hear that, please consider '),
      linkText = document.createTextNode('sending us some feedback'),
      link = document.createElement('a'),
      messageSuffix = document.createTextNode(' so we can make it better.');
  container.childNodes.forEach(function (elem) {
    return container.removeChild(elem);
  });
  link.href = feedbackPage;
  link.appendChild(linkText);
  Object(_util__WEBPACK_IMPORTED_MODULE_4__["appendAll"])(message, [messagePrefix, link, messageSuffix]);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].live, 'polite');
  container.appendChild(message);
}
/**
 * Handle a click on the "yes, it's useful" button.
 *
 * @param {HTMLParagraphElement} container - The button container.
 */


function handleYes(container) {
  sendFeedback('Useful', 1);
  var message = document.createElement('p'),
      messageText = document.createTextNode('Thanks! Your feedback will be used to improve our website.');
  container.childNodes.forEach(function (elem) {
    return container.removeChild(elem);
  });
  message.appendChild(messageText);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].live, 'polite');
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
  var questionText = document.createTextNode('Is this page useful?'),
      directFeedbackWrapper = document.createElement('div'),
      directFeedbackForm = document.createElement('form'),
      directFeedbackFieldset = document.createElement('fieldset'),
      questionLegend = document.createElement('legend'),
      yesButton = document.createElement('button'),
      noButton = document.createElement('button');
  yesButton.setAttribute('type', 'button');
  yesButton.appendChild(document.createTextNode('Yes'));
  yesButton.addEventListener('click', function () {
    return handleYes(directFeedbackWrapper);
  }, true);
  noButton.setAttribute('type', 'button');
  noButton.appendChild(document.createTextNode('No'));
  noButton.addEventListener('click', function () {
    return handleNo(directFeedbackWrapper);
  }, true);
  questionLegend.appendChild(questionText);
  Object(_util__WEBPACK_IMPORTED_MODULE_4__["appendAll"])(directFeedbackFieldset, [questionLegend, yesButton, noButton]);
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
        query: props.query,
        showClearing: props.showClearing
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
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showClearing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results/finder__results__highlight__query */ "./src/patterns/finder/components/results/finder__results__highlight__query.js");





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
  var displayCourseCode = ['Undergraduate', 'Foundation', 'CPD'],
      courseCode = displayCourseCode.indexOf(props.details.metaData.L) >= 0 && props.details.metaData.N && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fal fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Course code:"), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.N)); // Degree certification, if it has it

  var award = props.details.metaData.M && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fal fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Award:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.M)); // Course duration, if it has it

  var duration = props.details.metaData.D && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Duration:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.D)); // Course method, if it has it

  var method = props.details.metaData.metd && props.query.facets.metd && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-book-reader icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Method of study:"), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.metd)); // Course location, if it has it

  var location = props.details.metaData.loc && props.query.facets.loc && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Location:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.loc)); // Course School, if it has it

  var school = props.details.metaData.E && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "School:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.E)); //Clearing

  var clearing = props.details.metaData.K === 'yes' && props.showClearing && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearing_label"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Available in clearing"));
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "finder__results__card finder__results__course"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, clearing, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "finder__results__card__heading underline-transition__title"
  }, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_4__["default"])(props.details.title, props.query.query) : props.details.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_4__["default"])(props.details.metaData.L.replace(/_/g, ' '), props.query.query) : props.details.metaData.L.replace(/_/g, ' ')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_4__["default"])(props.details.metaData.c, props.query.query) : props.details.metaData.c), school, award, duration, courseCode, method, location)));
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  showClearing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
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
  var school = (props.details.metaData.E || props.details.metaData.D) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', props.details.metaData.E && props.details.metaData.E, props.details.metaData.E && props.details.metaData.D && ', ', props.details.metaData.D && props.details.metaData.D); // headshot, if they have a thumbnail

  var headshot = props.details.metaData.K && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  var facetKeys = Object.keys(props.query.facets);

  if (facetKeys.length) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "finder__clear",
      type: "reset",
      value: "Reset",
      onClick: function onClick() {
        props.clear();
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "far fa-fw fa-times icon",
      "aria-label": "Clear input"
    }), "Reset");
  } else {
    return null;
  }
}

finder__clear.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _finder_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__radio */ "./src/patterns/finder/components/filters/finder__radio.js");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_selectbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__selectbox */ "./src/patterns/finder/components/filters/finder__selectbox.js");
/* harmony import */ var _query_finder_appliedfilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../query/finder__appliedfilters */ "./src/patterns/finder/components/query/finder__appliedfilters.js");
/* harmony import */ var _finder_clear_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__clear__filter */ "./src/patterns/finder/components/filters/finder__clear__filter.js");
/* harmony import */ var _finder_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__toggle */ "./src/patterns/finder/components/filters/finder__toggle.js");







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
  var setFacets = Object.keys(facetMap);

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
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__filters"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_query_finder_appliedfilters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    config: props.config,
    query: props.query,
    update: props.update,
    clear: props.clear
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("fieldset", {
    className: "finder__filter"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__filters__heading"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "Filter ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "finder__filters__heading__btn-icon"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_clear_filter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clear: props.clear,
    query: props.query
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }))), props.config.facetLabels.map(function (facet) {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'radio':
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_radio__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update,
            mobile: props.mobile ? true : false
          });

        case 'checkbox':
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update
          });

        case 'selectbox':
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_selectbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update
          });

        case 'toggle':
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_finder_toggle__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update
          });
      }
    } else {
      return null;
    }
  })));
}

finder__filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var _results_finder_results_summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../results/finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__);











function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      focusTrap = _useState4[0],
      setFocusTrap = _useState4[1];

  var filters = null;

  var getFilters = function getFilters() {
    return filters;
  }; // trap tab focus when the filters are open


  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_12___default()(getFilters(), {
        onDeactivate: function onDeactivate() {
          return setDisplay(false);
        },
        clickOutsideDeactivates: true
      }));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__["disableBodyScroll"])(getFilters());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__["enableBodyScroll"])(getFilters());
    }
  }, [display]);
  var totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  var totalMatchingMessage = totalMatching === 1 ? 'Show 1 results' : totalMatching ? "Show ".concat(totalMatching, " results") : 'Close';
  var summary = totalMatching >= 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_results_finder_results_summary__WEBPACK_IMPORTED_MODULE_11__["default"], {
    currEnd: props.response.summary.currEnd,
    currStart: props.response.summary.currStart,
    query: props.response.query,
    numRanks: props.response.summary.numRanks,
    summariseAs: props.summariseAs,
    totalMatching: props.response.summary.totalMatching
  }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
    className: "finder__results__summary__heading-wrap"
  }, "No results");
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "finder__mobilefilters",
    "data-open": display
  }, summary, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(!display);
    },
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 ? true : false
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: Object.keys(props.query.facets).length > 0 ? " Filters <span class=\"finder__mobilefilters__toggle__filterNo\">(".concat(Object.keys(props.query.facets).length, ")</span>") : 'Filter'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "finder__mobilefilters__filters",
    ref: function ref(mobilefilters) {
      filters = mobilefilters;
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "finder__mobilefilters__filters__content"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_finder_filters__WEBPACK_IMPORTED_MODULE_10__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: true
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    type: "button",
    className: "finder__mobilefilters__apply",
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(!display);
    },
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "far fa-chevron-left"
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    "aria-live": "polite"
  }, props.updating ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Updating results\u2026")) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage)))))));
}

finder__mobilefilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);

















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(props.query.facets[props.facet.meta] !== undefined ? true : props.mobile === true ? false : props.facet.defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1],
      currentValue = props.query.facets[props.facet.meta] || ''; // reduce the facet configuration to an array of all possible values for
  // the facet


  var allFacets = props.facet.values.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data.data.replace(/^"/, '').replace(/"$/, '')]);
  }, []); // reduce the Funnelback response for the facet to an array of valid
  // values for the current query

  var responseFacets = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values ? props.responseFacet[0].categories[0].values.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data.data.toLowerCase()]);
  }, []) : []; // count how many possible facets are not valid for the current query
  // and will be hidden

  var hiddenFacets = allFacets.filter(function (facet) {
    return responseFacets.indexOf(facet) < 0;
  }).length;

  var setFacet = function setFacet(e) {
    var newQuery = props.query,
        newValue = e.target.value;
    newValue ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  }; // the facet will be in the page twice, for desktop and mobile layouts
  // salting the input name to stop that breaking


  var randomNumber = Math.random().toString(16).slice(-4);
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("fieldset", {
    className: "finder__filter finder__radio"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("legend", {
    "data-open": open ? 'true' : 'false'
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
    type: "button",
    "aria-expanded": open ? 'true' : 'false',
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.facet.name), ' ', react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    className: open ? 'fal fa-minus icon' : 'fal fa-plus icon',
    "aria-label": open ? 'Close filter' : 'Open filter'
  })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
    role: "presentation"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
    key: 'all'
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
    checked: currentValue === '',
    id: "meta".concat(props.facet.meta, "all"),
    name: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
    type: "radio",
    value: "",
    onChange: function onChange(e) {
      return setFacet(e);
    }
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
    htmlFor: "meta".concat(props.facet.meta, "all")
  }, props.facet.noSelection, hiddenFacets > 0 && " (".concat(hiddenFacets, " hidden)"))), props.facet.values.map(function (value, i) {
    var responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values.filter(function (responseFacetValue) {
      return responseFacetValue.data.toLowerCase() === value.data.replace(/^"/, '').replace(/"$/, '');
    });
    return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
      checked: currentValue === value.data,
      id: "meta".concat(props.facet.meta).concat(i),
      name: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
      type: "radio",
      value: value.data,
      onChange: function onChange(e) {
        return setFacet(e);
      }
    }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
      htmlFor: "meta".concat(props.facet.meta).concat(i)
    }, value.label, " (", responseFacetDetails && responseFacetDetails[0] ? responseFacetDetails[0].count : 0, ")"));
  })));
}

finder__radio.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











/**<
 * @module patterns/finder/components/finder__selectbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__selectbox(props) {
  var randomNumber = Math.random().toString(16).slice(-4);

  var setFacet = function setFacet(e) {
    var newQuery = props.query,
        newValue = e.target.value;
    newValue ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1; // if(props.facet.meta === 'G' && !newValue){
    //     delete newQuery.facets.rSub;
    // }

    props.facet.meta === 'G' && !newValue ? delete newQuery.facets.rSub : null;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "finder__select finder__selectbox"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "finder__select__overline",
    htmlFor: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber)
  }, props.facet.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    name: props.facet.name,
    id: "meta_".concat(props.facet.meta, "_orsand--").concat(randomNumber),
    value: props.query.facets[props.facet.meta] ? props.query.facets[props.facet.meta] : '',
    onChange: function onChange(e) {
      return setFacet(e);
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: ""
  }, props.facet.noSelection), props.responseFacet[0] && props.responseFacet[0].categories[0] ? props.responseFacet[0].categories[0].values.map(function (value) {
    var responseFacetDetails = "\"".concat(value.data, "\"");
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: value.data,
      value: responseFacetDetails
    }, props.facet.meta === 'rSub' ? value.label.replace(props.query.facets.G.replace(/"/g, '') + '_', '') : value.label);
  }) : null));
}

finder__selectbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









/**
 * @module patterns/finder/components/finder__toggle
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__toggle(props) {
  var randomNumber = Math.random().toString(16).slice(-4);

  var setFacet = function setFacet(e) {
    var newQuery = props.query,
        newValue = e.target.value,
        checked = e.target.checked;
    checked ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  var idString = "".concat(props.facet.name, "-").concat(randomNumber);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", {
    className: "finder__filter finder__togglebox"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "finder__toggle"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: idString
  }, props.facet.values[0].label, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "checkbox",
    id: idString,
    name: props.facet.name,
    value: props.facet.values[0].data,
    onChange: function onChange(e) {
      return setFacet(e);
    },
    checked: props.query.facets[props.facet.meta] ? true : false
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "toggle round ".concat(props.query.facets[props.facet.meta] ? 'toggleOpen' : 'toggleClose')
  }))));
}

finder__toggle.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _filters_finder_clear_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filters/finder__clear__filter */ "./src/patterns/finder/components/filters/finder__clear__filter.js");







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
  var removeFacet = function removeFacet(facet) {
    var newQuery = props.query;
    delete newQuery.facets[facet];
    facet === 'G' && props.query.facets.rSub ? delete newQuery.facets.rSub : null;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  var facetKeys = Object.keys(props.query.facets);

  if (facetKeys.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "finder__applied__filters__heading"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, "Applied filters"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_filters_finder_clear_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      clear: props.clear,
      query: props.query
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "finder__appliedfilters__wrap"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "finder__appliedfilters"
    }, facetKeys.map(function (facet) {
      var labels = props.config.facetLabels.filter(function (facetLabel) {
        return facetLabel.meta === facet;
      })[0],
          facetValue = props.query.facets[facet];
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: facet
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return removeFacet(facet);
        }
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "fal fa-times icon",
        "aria-label": "Remove filter"
      }), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, labels.name, ":\xA0", labels.meta === 'rSub' ? facetValue.replace(props.query.facets.G.replace(/"/g, '') + '_', '') : facetValue))));
    }))));
  } else {
    return null;
  }
}

finder__appliedfilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
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
    onClick: function onClick() {
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */




var maximumSuggestions = 5,
    keyCodeEscape = 27,
    keyCodeUp = 38,
    keyCodeDown = 40;

function highlightQueryTerm(suggestion, partialQuery) {
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(props.query.query),
      _useState2 = _slicedToArray(_useState, 2),
      partialQuery = _useState2[0],
      setPartialQuery = _useState2[1]; // Funnelback suggestions for the currently typed text


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1]; // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])({
    cancel: function cancel() {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      call = _useState6[0],
      setCall = _useState6[1]; // ref for the input field, so we can .focus() it


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(16).slice(-4)),
      _useState8 = _slicedToArray(_useState7, 1),
      inputId = _useState8[0]; // boolean to show or hide suggestions


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showSuggestions = _useState10[0],
      setShowSuggestions = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    setPartialQuery(props.query.query);
  }, [props.updating]);
  var textInput = null;

  function focusInput() {
    textInput.focus();
  } // on clear, make a default request for results


  var clearQuery = function clearQuery() {
    call.cancel();
    setPartialQuery('');
    setSuggestions([]);
    focusInput();
    var newQuery = props.query;
    newQuery.query = '';
    newQuery.sortBy = props.config.sort;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  var submitForm = function submitForm() {
    call.cancel();
    setSuggestions([]);
    var newQuery = props.query;
    newQuery.query = partialQuery ? partialQuery : '';
    newQuery.startRank = 1;
    newQuery.sortBy = partialQuery ? null : props.config.sort;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  var submitSuggestion = function submitSuggestion(s) {
    call.cancel();
    var newQuery = props.query;
    newQuery.query = s;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  var clear = partialQuery && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_16__["default"], {
    clear: function clear() {
      clearQuery();
    }
  }); // render suggestions
  // TODO: probably should be refactored into a separate component

  var suggestionsList = suggestions && suggestions.length > 0 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ul", {
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, _toConsumableArray(new Set(suggestions)).slice(0, maximumSuggestions).map(function (suggestion) {
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", {
      key: suggestion
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
      type: "button",
      onBlur: function onBlur() {
        return setShowSuggestions(false);
      },
      onFocus: function onFocus() {
        return setShowSuggestions(true);
      },
      onMouseDown: function onMouseDown() {
        //for browsers because onBlur get excuted before onClick
        setShowSuggestions(true);
        setPartialQuery(suggestion);
        setSuggestions([]);
        focusInput();
        submitSuggestion(suggestion); //passing suggestion because partialQuery value get overwritten for some reason.
      },
      onClick: function onClick() {
        //for mobile
        setShowSuggestions(true);
        setPartialQuery(suggestion);
        setSuggestions([]);
        focusInput();
        submitSuggestion(suggestion); //passing suggestion because partialQuery value get overwritten for some reason.
      },
      onKeyDown: function onKeyDown(e) {
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
    }, highlightQueryTerm(suggestion, partialQuery)));
  }));
  var input = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "finder__query__input"
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "finder__icon fal fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: props.config.placeholder,
    ref: function ref(input) {
      textInput = input;
    },
    type: "text",
    value: partialQuery,
    onKeyDown: function onKeyDown(e) {
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
    onFocus: function onFocus() {
      return setShowSuggestions(true);
    },
    onBlur: function onBlur() {
      return setShowSuggestions(false);
    },
    onChange: function onChange(e) {
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
        var _suggest = Object(_funnelback__WEBPACK_IMPORTED_MODULE_15__["suggest"])(props.query.collection, e.target.value),
            _suggest2 = _slicedToArray(_suggest, 2),
            suggestionsPromise = _suggest2[0],
            newCall = _suggest2[1]; // update our request cancel function for the new request


        setCall({
          cancel: function cancel() {
            newCall.cancel();
          }
        });
        suggestionsPromise.then(function (data) {
          return setSuggestions(data);
        }).catch(function () {
          return setSuggestions([]);
        });
      } else {
        // input is empty, empty suggestions
        setSuggestions([]);
      }
    }
  }), suggestionsList, clear);
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("fieldset", {
    className: "finder__query"
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, input, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: function onClick() {
      return submitForm();
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "fal fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

finder__query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool
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
  var presentableText = props.text.split(/\|/)[0].trim();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Did you mean \u201C", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "finder__didyoumean__button",
    onClick: function onClick() {
      var newQuery = props.query;
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
  var numberOfPages = Math.ceil(props.totalMatching / props.numRanks),
      currentPage = Math.ceil(props.currStart / props.numRanks),
      pages = [];

  var changePage = function changePage(pageNumber) {
    var newStartRank = 1 + (pageNumber - 1) * props.numRanks,
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
    onClick: function onClick() {
      changePage(currentPage - 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Previous page")));

  var _loop = function _loop(page) {
    var className = void 0;

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
      onClick: function onClick() {
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
  };

  for (var page = 1; page <= numberOfPages; page++) {
    _loop(page);
  }

  pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__controls__button--next",
    key: "next",
    type: "button",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: function onClick() {
      changePage(currentPage + 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Next page")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "pagination__controls",
    "data-pagecount": numberOfPages
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/patterns/finder/components/cards/finder__results__bestbet.js");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/patterns/finder/components/results/finder__didyoumean.js");
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__pagination */ "./src/patterns/finder/components/results/finder__pagination.js");




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
  var updating = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Updating results\u2026"));

  if (props.response) {
    // Response may include spelling suggestion
    var didYouMean = props.response.spell && props.response.spell.text && props.response.summary.totalMatching === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_5__["default"], {
      query: props.query,
      text: props.response.spell.text,
      update: props.update
    }); // if we have more results than will fit on a single page, we need
    // pagination

    var pagination = props.response.summary.totalMatching > props.response.summary.numRanks && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    }); // render either the results, or a spinner while we wait for Funnelback

    var resultsContent = props.updating ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, updating) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }), didYouMean, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
      start: props.response.summary.currStart,
      className: "finder__results__list"
    }, props.response.bestBets.map(function (card) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: card,
        key: card.docNum
      });
    }), props.response.results.map(function (card) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bestBet: false,
        details: card,
        key: card.docNum,
        type: props.type,
        query: props.query,
        showClearing: props.config.showClearing
      });
    })), pagination);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finder__results"
    }, updating);
  }
}

finder__results.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);






var formatLabel = function formatLabel(label, value) {
  if (value) {
    return label;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, label.split(value).reduce(function (prev, current, i) {
    if (!i) {
      return [current];
    }

    return prev.concat(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





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
  var searchHints;
  var result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;

  if (props.totalMatching == 0) {
    searchHints = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Your search"), " \"", props.query, "\u201C did not match any courses."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Suggestions:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Make sure that all words are spelled correctly"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Try different keywords"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Try more general keywords"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Try fewer keywords"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Try fewer filters"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault;
        props.clear();
      }
    }, "Reset filters")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault;
        var newQuery = props.queryF;
        newQuery.query = '';
        newQuery.sortBy = props.config.sort;
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      }
    }, "Reset search"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    "aria-live": "polite",
    className: "finder__results__summary__heading-wrap"
  }, props.totalMatching > props.numRanks && "".concat(props.currStart, "\u2013").concat(props.currEnd, " of "), props.totalMatching, " ", props.query && 'matching ', result, props.query && " for \u201C".concat(props.query, "\u201D")), searchHints);
}

finder__results__summary.propTypes = {
  queryF: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  currEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/query/finder__query */ "./src/patterns/finder/components/query/finder__query.js");
/* harmony import */ var _components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/filters/finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var _components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/filters/finder__mobilefilters */ "./src/patterns/finder/components/filters/finder__mobilefilters.js");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  return facets.map(function (facet) {
    var param = {};

    if (params.get("meta_".concat(facet.meta, "_orsand"))) {
      param[facet.meta] = params.get("meta_".concat(facet.meta, "_orsand"));
    }

    return param;
  }).reduce(function (facetParams, facet) {
    return Object.assign(facetParams, facet);
  });
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
  var params = new URLSearchParams(window.location.search);
  currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
  currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
  facetLabels.forEach(function (facet) {
    if (currFacets[facet.meta]) {
      params.set("meta_".concat(facet.meta, "_orsand"), currFacets[facet.meta]);
    } else {
      params.delete("meta_".concat(facet.meta, "_orsand"));
    }
  });
  var hasParams = params.toString().length ? '?' : '';
  window.history.replaceState({}, '', "".concat(window.location.pathname).concat(hasParams).concat(params.toString()));
}
/**
 * Launch the universal Finder.
 *
 * @param {object} props The JSON configuration file for the Finder.
 * @return {object} The React component to render.
 */


function Finder(props) {
  var params = new URLSearchParams(window.location.search);
  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/

  var initialQuery = {
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

  var initialResponse = {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(initialQuery),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(initialResponse),
      _useState4 = _slicedToArray(_useState3, 2),
      funnelbackResponse = _useState4[0],
      setResponse = _useState4[1]; // Boolean to indicate when a query is in progress


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      updating = _useState6[0],
      setUpdating = _useState6[1]; // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])({
    cancel: function cancel() {}
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      call = _useState8[0],
      setCall = _useState8[1]; // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      update = _useState10[0],
      setUpdate = _useState10[1]; // Retrieve Funnelback results


  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, props.config.facetLabels); // indicate a request is in progress

    setUpdating(true);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    var _find = Object(_funnelback__WEBPACK_IMPORTED_MODULE_16__["find"])(query.collection, query.fixedFacets, query.query, query.sortBy, query.sortDirection, query.startRank, query.numRanks, query.facets),
        _find2 = _slicedToArray(_find, 2),
        request = _find2[0],
        requestToken = _find2[1]; // save the requestToken, so


    setCall({
      cancel: function cancel() {
        requestToken.cancel();
      }
    }); // when the response from Funnelback arrives,
    // update the results and display them

    request.then(function (data) {
      setResponse(data);
      setUpdating(false);
    }).catch(function () {
      setResponse(initialResponse);
      setUpdating(false);
    });
  }, [update]); // update props so child components can update the query

  var updater = {
    query: function query(newQuery) {
      return setQuery(newQuery);
    },
    results: function results(newUpdate) {
      return setUpdate(newUpdate);
    },
    updateState: update
  };

  var clear = function clear() {
    var clearQuery = Object.assign({}, query);
    clearQuery.facets = {};
    setQuery(clearQuery);
    setUpdate(!update);
  };

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_17__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  }), props.config.facetLabels.length > 0 && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_19__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_18__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    clear: clear
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  config: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util.js */ "./src/util.js");










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

var baseUrl = 'https://web2020.city.ac.uk/web-services',
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
  return axios__WEBPACK_IMPORTED_MODULE_7___default()(config).then(function (response) {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  }).catch(function (e) {
    if (!axios__WEBPACK_IMPORTED_MODULE_7___default.a.isCancel(e)) {
      Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
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
  var fixedFacetParams = {};
  fixedFacets.forEach(function (facet) {
    fixedFacetParams["meta_".concat(facet.meta, "_orsand")] = facet.value;
  });
  var facetParams = {},
      facetKeys = Object.keys(facets);
  facetKeys.forEach(function (key) {
    return facetParams["meta_".concat(key, "_orsand")] = facets[key];
  });
  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_7___default.a.CancelToken,
      call = CancelToken.source(),
      config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    httpsAgent: new https__WEBPACK_IMPORTED_MODULE_8___default.a.Agent({
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
  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_7___default.a.CancelToken,
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
  var config = {
    timeout: timeout,
    url: url
  };
  return axiosRequest(config);
}

/***/ }),

/***/ "./src/patterns/image-carousel/image-carousel.js":
/*!*******************************************************!*\
  !*** ./src/patterns/image-carousel/image-carousel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_math_sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.math.sign */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/util.js");








var className = 'swiper-container';
var ie = Object(_util__WEBPACK_IMPORTED_MODULE_5__["detectIE"])();
var i = 0,
    x0 = null,
    locked = false,
    config = {},
    sliderTranslateCoOr = 0;

function init(elem) {
  //inital setup
  //lazy load images
  var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    var lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target.parentNode.nextSibling.firstElementChild.firstElementChild;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImages.forEach(function (lazyImage, i, a) {
      if (i !== a.length - 1) {
        lazyImageObserver.observe(lazyImage.parentNode);
      }
    });
  }

  var _C = elem.querySelector('.swiper-wrapper'),
      numInd = document.createElement('div'),
      numIndActiveSl = document.createElement('span'),
      numIndSeparator = document.createElement('span'),
      numbIndSlLength = document.createElement('span'),
      buttonsWrap = document.createElement('div'),
      prevBtnWrap = document.createElement('div'),
      nextBtnWrap = document.createElement('div'),
      nextBtn = document.createElement('BUTTON'),
      prevBtn = document.createElement('BUTTON'); //setup carousel buttons


  buttonsWrap.className = 'swiper-buttons-wrap';
  prevBtnWrap.className = 'swiper-button-prev';
  nextBtnWrap.className = 'swiper-button-next';
  nextBtn.name = 'nextButton';
  nextBtn.type = 'button';
  nextBtn.className = 'fas fa-arrow-right swiper-slider-arrow arrow-right--btn-next';
  nextBtn.setAttribute('aria-label', 'Next slider');
  nextBtn.addEventListener('click', next, false);
  prevBtn.name = 'prevButton';
  prevBtn.type = 'button';
  prevBtn.className = 'fas fa-arrow-left swiper-slider-arrow arrow-left--btn-prev';
  prevBtn.setAttribute('aria-label', 'Previous slider');
  prevBtn.addEventListener('click', previous, false);
  prevBtn.disabled = true;
  nextBtnWrap.appendChild(nextBtn);
  prevBtnWrap.appendChild(prevBtn);
  buttonsWrap.appendChild(prevBtnWrap);
  buttonsWrap.appendChild(nextBtnWrap); //perpare the indicators to append to html

  numInd.className = 'swiper-indicator';
  numIndActiveSl.className = 'swiper-indicator__active-slider';
  numbIndSlLength.className = 'swiper-indicator__slider-length';
  numIndActiveSl.innerText = i + 1;
  numbIndSlLength.innerText = _C.children.length;
  numIndSeparator.innerText = ' /';
  numInd.appendChild(numIndActiveSl);
  numInd.appendChild(numIndSeparator);
  numInd.appendChild(numbIndSlLength);
  elem.appendChild(numInd);
  elem.appendChild(buttonsWrap);
  config.sliderLength = _C.children.length;

  _C.style.setProperty('--n', config.sliderLength); //add event listeners


  _C.addEventListener('mousedown', lock, false);

  _C.addEventListener('touchstart', lock, false);

  _C.addEventListener('mousemove', drag, false);

  _C.addEventListener('touchmove', drag, false);

  _C.addEventListener('mouseup', move, false);

  _C.addEventListener('touchend', move, false);

  _C.firstElementChild.classList.toggle('active');

  activeSlider(i, _C);
}

function numIndicator(index, e) {
  e.querySelector('.swiper-indicator__active-slider').innerText = index + 1;
}

function activeSlider(index, sliders) {
  var a = Object(_util__WEBPACK_IMPORTED_MODULE_5__["toArray"])(sliders.querySelectorAll('.swiper-slide'));
  a.forEach(function (e) {
    e.classList.remove('active');
    e.querySelectorAll('a').forEach(function (a) {
      return a.tabIndex = -1;
    }); // disable focus on non active slider with hyperlinks
  });
  a[index].classList.toggle('active');
  a[index].querySelectorAll('a').forEach(function (a) {
    return a.tabIndex = 0;
  });
}

function toogleNextBtn(index, length, e) {
  var nextBtn = checkEventType(e);

  if (index + 1 === length) {
    nextBtn.querySelector('.swiper-button-next button').disabled = true;
    nextBtn.querySelector('.swiper-button-prev button').disabled = false;
  } else if (i + 1 < length) {
    nextBtn.querySelector('.swiper-button-next button').disabled = false;
    nextBtn.querySelector('.swiper-button-prev button').disabled = false;
  }

  activeSlider(index, nextBtn);
  numIndicator(index, nextBtn);
}

function tooglePrevBtn(index, length, e) {
  var prevBtn = checkEventType(e);

  if (index + 1 === 1) {
    prevBtn.querySelector('.swiper-button-prev button').disabled = true;
    prevBtn.querySelector('.swiper-button-next button').disabled = false;
  } else if (i + 1 > 1) {
    prevBtn.querySelector('.swiper-button-prev button').disabled = false;
    prevBtn.querySelector('.swiper-button-next button').disabled = false;
  }

  activeSlider(index, prevBtn);
  numIndicator(index, prevBtn);
}

function next(e) {
  e.preventDefault();
  var sl = e.target.parentElement.parentElement.parentElement.querySelector('.swiper-wrapper');

  if (sl.classList.contains('smooth')) {
    sl.classList.toggle('smooth');
  }

  if (!ie) {
    sl.style.setProperty('--i', i != 0 ? i += 1 : i = 1);
    sl.classList.toggle('smooth');
    toogleNextBtn(i, sl.children.length, e);
  } else {
    var sliderWidth = totalSliderWidth(e) / sl.children.length;
    sliderTranslateCoOr -= sliderWidth;
    sl.style.setProperty('transform', 'translate(' + sliderTranslateCoOr + 'px)');
    sl.classList.toggle('smooth');
    i != 0 ? i += 1 : i = 1;
    toogleNextBtn(i, sl.children.length, e);
  }
}

function previous(e) {
  e.preventDefault();
  var psl = e.target.parentElement.parentElement.parentElement.querySelector('.swiper-wrapper');

  if (psl.classList.contains('smooth')) {
    psl.classList.toggle('smooth');
  }

  if (!ie) {
    psl.style.setProperty('--i', i ? i -= 1 : i = 0);
    psl.classList.toggle('smooth');
    tooglePrevBtn(i, psl.children.length, e);
  } else {
    var sliderWidth = totalSliderWidth(e) / psl.children.length;
    sliderTranslateCoOr += sliderWidth;
    psl.style.setProperty('transform', 'translate(' + sliderTranslateCoOr + 'px)');
    psl.classList.toggle('smooth');
    i ? i -= 1 : i = 0;
    tooglePrevBtn(i, psl.children.length, e);
  }
}

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
} //return touch points or event


function lock(e) {
  x0 = unify(e).clientX; //set mousedown clientX value

  e.target.classList.toggle('smooth', !(locked = true));
}

function drag(e) {
  //e.preventDefault();
  if (i !== e.target.children.length - 1 && i !== 0) {
    if (locked) {
      e.target.style.setProperty('--tx', "".concat(Math.round(unify(e).clientX - x0), "px"));
    }
  }
}

function move(e) {
  if (locked) {
    var dx = unify(e).clientX - x0,
        //dx is value calculate by using clientX mousedown and after value
    s = Math.sign(dx),
        //check if swipe is left or right by checking value is negative ot positive
    tx = getComputedStyle(e.target).getPropertyValue('--tx'),
        p = parseInt(tx.replace(/\D/g, '')); // MAY use the drag length as a condition to move slider

    if ((i > 0 || s < 0) && (i < e.target.children.length - 1 || s > 0) && (p > 100 || i === 0 || i === e.target.children.length - 1) //conditions to swip to slider
    ) {
        if (!ie) {
          e.target.style.setProperty('--i', i -= s); //increment i (i repersent the slider)

          e.target.style.setProperty('--tx', '0px'); //reset touch x value

          e.target.classList.toggle('smooth', !(locked = false));
          x0 = null;

          if (s === -1) {
            toogleNextBtn(i, e.target.children.length, e);
          } else {
            tooglePrevBtn(i, e.target.children.length, e);
          }
        } else {
          animateSlider(e, s);
          s === -1 ? toogleNextBtn(i, e.target.children.length, e) : tooglePrevBtn(i, e.target.children.length, e);
        }
      }
  }
}

function checkEventType(e) {
  switch (e.type) {
    case 'mouseup':
      return e.target.parentElement.parentElement;

    case 'touchend':
      return e.target.parentElement.parentElement;

    default:
      return e.target.parentElement.parentElement.parentElement;
  }
} //edge fall back cannot use CSS var inside a cal()


function totalSliderWidth(e) {
  var sliders = Object(_util__WEBPACK_IMPORTED_MODULE_5__["toArray"])(checkEventType(e).querySelectorAll('.swiper-slide'));
  var totalWidth = 0;
  sliders.forEach(function (s) {
    var style = window.getComputedStyle ? getComputedStyle(s, null) : s.currentStyle;
    totalWidth += s.offsetWidth + parseInt(style.marginRight) || 0;
  });
  return totalWidth;
}

function animateSlider(e, lr) {
  var sliderWidth = totalSliderWidth(e) / e.target.children.length;
  lr === -1 ? sliderTranslateCoOr -= sliderWidth : sliderTranslateCoOr += sliderWidth;
  e.target.style.setProperty('transform', 'translate(' + sliderTranslateCoOr + 'px)');
  e.target.classList.toggle('smooth');
  i -= lr;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: init,
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_10__);













/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */
 // import { pxToRem } from '../../util';

var className = 'key-information--lifelong-learning';
var listings = document.querySelector('.key-information--lifelong-learning > ul'),
    batchQuantity = 3,
    contentToggles = Array.from(document.querySelectorAll('.content-toggle button')),
    contentSliders = document.querySelectorAll('.content-slider'),
    browserWidth = document.documentElement.scrollWidth,
    prevBtn = document.getElementById('key-info-previous-item'),
    nextBtn = document.getElementById('key-info-next-item'),
    // listingHeight = '',
listingDates = document.querySelectorAll('.key-information--lifelong-learning > ul > li'),
    listingsVisible = [],
    defaultDuration = 2000,
    edgeOffset = 100; // Zen scroll setup

zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

function dateTabIndex() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = listingDates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var listingDate = _step.value;
      listingDate.setAttribute('tabindex', '-1');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
} // Visible listings: needed to decide if more content still to be loaded.


function calculateVisibleListings() {
  listingsVisible = [];
  Array.from(listings.children).forEach(function (elem) {
    if (!elem.classList.contains('hide')) {
      listingsVisible.push(elem);
    }
  });
} // Initial listings display


function defaultListingsDisplay() {
  var listElements = Array.from(listings.children);
  listElements.forEach(function (elem, i) {
    i > batchQuantity - 1 ? elem.classList.add('hide') : elem.style.display = 'grid';
  });
}
/**
 * Launches Key Info slider pattern. Pass in how many listings should display per batch,
 * i.e. each time user selects 'Load more'.
 *  */


function launchKeyInfo(batchQuantity) {
  var digit = document.querySelector('.key-information--lifelong-learning__current__digit');
  var counter = 0; // Mobile: Show listing entry based on navigation button clicks

  function listingDisplay() {
    Array.from(listings.children).forEach(function (listing, i) {
      if (browserWidth < 768 && Array.from(listings.children).length > 1) {
        i === counter ? listing.style.display = 'block' : listing.style.display = 'none';
      }

      listing.setAttribute('data-id', "listing-".concat(i));
    });
  } // Mobile: Enable/disable navigation buttons based on position of listing in collection


  function navBtnState() {
    if (counter === 0) {
      prevBtn.setAttribute('disabled', true);
      nextBtn.removeAttribute('disabled');
    } else if (counter > 0 && counter < Array.from(listings.children).length - 1) {
      prevBtn.removeAttribute('disabled');
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', true);
      prevBtn.removeAttribute('disabled');
    }
  } // // Mobile: Set mobile listings navigation buttons to correct position based on listing height
  // function navBtnPosition() {
  //     Array.from(listings.children).forEach((listing, i) => {
  //         if (counter === i) {
  //             listingHeight = listing.dataset.height;
  //         }
  //     });
  // }
  // Run regardless of viewport size


  dateTabIndex(); // Desktop: Toggle control listings when more than three listings exist

  if (browserWidth >= 768) {
    if (Array.from(listings.children).length > batchQuantity) {
      listingDisplay();
      defaultListingsDisplay();
      calculateVisibleListings();
      contentToggles.forEach(function (contentToggle) {
        contentToggle.addEventListener('click', function (e) {
          // This will increase with each 'Load more' click, so visible listings
          // must be captured before any further listings are made visible
          var preExpandListingsVisible = listingsVisible.length;
          e.preventDefault();

          if (preExpandListingsVisible < Array.from(listings.children).length) {
            Array.from(listings.children).forEach(function (elem, i) {
              var targetListing = document.querySelector("[data-id='listing-".concat(preExpandListingsVisible, "']"));
              var listingsVisibleLength = parseInt(listingsVisible.length) + batchQuantity;
              var listingsLength = Array.from(listings.children).length;
              var remainingItems = parseInt(listingsLength - listingsVisibleLength); // Zen scroll to first listing of newly visible listings and focus on date

              zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(targetListing, 200);
              targetListing.focus(); // let targetListingDate = targetListing.querySelectorAll(
              //     '.key-info__date'
              // );
              // Final batch of listings, zen scroll to 'load more' button and offset

              if (remainingItems <= 0) {
                zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(contentToggle, 200);
                contentToggle.style.display = 'none';
              } // targetListingDate[0].focus();
              // Bring in newly visible listings in two phases to allow for opacity transition


              if (i < preExpandListingsVisible + batchQuantity) {
                var promise = new Promise(function (resolve) {
                  resolve(elem.style.display = 'grid');
                });
                promise.then(function () {
                  elem.classList.remove('hide');
                }); // Calculating visible listings must run here after display properties are updated

                promise.then(function () {
                  calculateVisibleListings();
                });
              }
            });
          }
        }, false);
      });
    } else {
      contentToggles.forEach(function (elem) {
        elem.style.display = 'none';
      });
    } // Mobile: one listing visible at a time

  } else if (browserWidth < 768 && Array.from(listings.children).length > 1) {
    Array.from(listings.children).forEach(function (listing, i) {
      // Capture listing height and set to data attribute
      listing.style.display = 'block';
      listing.dataset.height = listing.offsetHeight;
      listing.style.display = 'none'; // On load, set mobile navigation buttons at correct height
      // counter === 0 && i === 0 ? navBtnPosition() : null;

      i > 0 ? listing.style.display = 'none' : listing.style.display = 'block';
    });
    Array.from(contentSliders).forEach(function (contentSlider) {
      contentSlider.removeAttribute('hidden');
    });
    navBtnState();
    prevBtn.addEventListener('click', function () {
      counter = counter - 1;
      navBtnState(); // navBtnPosition();

      listingDisplay();
      digit.innerText = counter + 1;
    });
    nextBtn.addEventListener('click', function () {
      counter = counter + 1;
      navBtnState(); // navBtnPosition();

      listingDisplay();
      digit.innerText = counter + 1;
    });
  } else if (browserWidth < 768 && Array.from(listings.children).length === 1) {
    Array.from(listings.children).forEach(function (listing, i) {
      i > 0 ? listing.style.display = 'none' : listing.style.display = 'block';
    });
  }
}

function launchKeyInfoSlider() {
  launchKeyInfo(batchQuantity);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchKeyInfoSlider,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/link-finder/link-finder.js":
/*!*************************************************!*\
  !*** ./src/patterns/link-finder/link-finder.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");







/**
 * Link Finder
 *
 * @module patterns/link-finder/link-finder
 * @author Web Development
 * @copyright City, University of London 2019
 */

var className = 'link-finder';
/**
 * Function that prepends icon to anchor paramater
 *
 * @param {HTMLElement} anchor - HTML element to prepend icon to
 * @param {string} className - class name to specify FA icon
 */

function prependIcon(anchor, className) {
  var node = document.createElement('span');
  node.className = 'fas ' + className + '  link-decorator';
  node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hidden, true);
  anchor.parentNode.prepend(node);
}
/**
 * Checks if anchor has to have external URL icon
 *
 * @param {HTMLElement} anchor - an anchor HTML element
 */


function findExternalLink(anchor) {
  if (anchor.origin !== window.location.origin && anchor.querySelectorAll('img').length < 1 && anchor.querySelectorAll('.fa-external-link').length < 1 && anchor.className !== 'social-icon' && !anchor.parentElement.className.includes('cta-block') && anchor.href.indexOf('mailto:') !== 0 && anchor.href.indexOf('tel:') !== 0 && anchor.origin) {
    var node = document.createElement('span');
    node.className = 'far fa-external-link inline-external-link';
    node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, '(external link)');
    anchor.appendChild(node);
  }
}
/**
 * This function checks if the anchor has any of the extensions from the 'fileTypes' object
 * if yes it calls prependIcon() to add the appropriate FA icon
 *
 * @param {HTMLElement} anchor - an anchor HTML element
 */


function findDocumentLinks(anchor) {
  var fileTypes = {
    pdf: 'pdf',
    docx: 'word',
    doc: 'word',
    xlsx: 'excel',
    xls: 'excel'
  };

  for (var key in fileTypes) {
    if (anchor.href.indexOf('.' + key) != -1) {
      prependIcon(anchor, 'fa-file-' + fileTypes[key]);
      var anchorText = anchor.textContent;
      anchorText += ' [' + key.toUpperCase() + ']';
      anchor.textContent = null;
      anchor.textContent = anchorText;
      break;
    }
  }
}
/**
 * Every anchor on the webpage has to have appropriate icons prepended or appended depending on predefined requirements
 * This function will iterate through every anchor of the HTML element and calls the appropriate function to add the right icon
 * if required
 *
 * @param {HTMLElement} e - an HTML element with 'link-finder' class name
 */


function findLinks(e) {
  var anchors = e.querySelectorAll('a');
  anchors.forEach(function (anchor) {
    findDocumentLinks(anchor);
    findExternalLink(anchor);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: findLinks,
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_10__);












/**
 * Load more - show additional items on 'Load more' button click. Update URL to illustrate where user is in item set.
 *
 * @module patterns/load-more/load-more
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */


var className = 'load-more';
var hashedUrl = window.location.hash,
    loadMoreId;
/**
 * Control what items will display based on wrapper's 'data-listings-show' data attribute.
 *
 * @param {HTMLElements} [items] - Elements controlled by 'Load more' button.
 * @param {number} visibleItems - Number of items visible at any one time.
 * @param {HTMLElement} loadMoreBtn - Button controlling particular item group.
 */

function itemsDisplay(items, visibleItems, loadMoreBtn) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      item[1].setAttribute('tabindex', '-1');

      if (item[0] >= visibleItems) {
        item[1].classList.add('hide');
        item[1].style.display = 'none';
      } else {
        item[1].classList.remove('hide');
        item[1].style.display = 'grid';
      }
    } // Hide 'load more' button when reached end of listings

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

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
  var targetItem = visibleItems - itemsIncrement;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = items.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      if (item[0] == targetItem) {
        item[1].focus();
        zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(item[1]);
      } else if (visibleItems == itemsIncrement) {
        if (item[0] == 0) {
          item[1].focus();
          zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(item[1]);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
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
  var targetListingUrlParam = visibleItems - (itemsIncrement - 1);
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
  var targetListingUrlParam = visibleItems - (itemsIncrement - 1);
  history.replaceState('', '', "#".concat(parentType).concat(wrapperId, "-").concat(childrenType).concat(targetListingUrlParam));
}

function launchLoadMore(e) {
  var wrapperId = e.getAttribute('id'),
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
  var visibleItems = parseInt(e.getAttribute('data-items-visible')); // Load correct number of items based on URL hash

  if (hashedUrl) {
    var hashedUrlParts = hashedUrl.split('-');
    var activeItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_9__["numberFromString"])(hashedUrlParts[1]));
    visibleItems = activeItem + (itemsIncrement - 1);
    e.setAttribute('data-items-visible', visibleItems);
    itemsDisplay(items, visibleItems, loadMoreBtn);
    scrollToItem(items, visibleItems, itemsIncrement);
  } else {
    itemsDisplay(items, visibleItems, loadMoreBtn);
  } // Run on every 'load more' click: increase listings by batch number


  loadMoreBtn.addEventListener('click', function () {
    visibleItems += itemsIncrement;
    e.setAttribute('data-items-visible', visibleItems);
    itemsDisplay(items, visibleItems, loadMoreBtn);
    scrollToItem(items, visibleItems, itemsIncrement);
    hashedUrl = window.location.hash;
    hashedUrl ? replaceUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement) : pushUrlState(parentType, childrenType, wrapperId, visibleItems, itemsIncrement);
    loadMoreId = e.id;
  }); // Back/forward browser clicks.

  window.onpopstate = function () {
    var loadMoreIdElement = document.getElementById(loadMoreId); // Must re-assign variable on pop state change

    hashedUrl = window.location.hash;

    if (hashedUrl) {
      // Capture latest hash
      var updatedUrlParts = window.location.hash.split('-');
      var currentItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_9__["numberFromString"])(updatedUrlParts[1]));
      currentItem = currentItem + (itemsIncrement - 1);
      visibleItems = currentItem;
      e.setAttribute('data-items-visible', visibleItems);
      itemsDisplay(items, visibleItems, loadMoreBtn);
      scrollToItem(items, visibleItems, itemsIncrement);
    } else {
      var relatedItems = loadMoreIdElement.querySelectorAll('.item');
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");











/**
 * Global menu
 *
 * @module patterns/menu/menu
 * @author Web Development
 * @copyright City, University of London 2018
 */




var className = 'menu',
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
firstLevel = 1,
    levelsSupported = 6,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_10__["reduceMotion"])() ? 0 : 999;
/**
 * Copies a sub-menu into the appropriate column for its menu level, replacing
 * the existing sub-menu if there is one.
 *
 * @param {HTMLUListElement} subMenu - A UL element representing a sub-menu.
 * @param {HTMLDivElement[]} columns - The array of column divs.
 */

function appendMenu(subMenu, columns) {
  var menuLevel = Number.parseInt(subMenu.className.slice(-1)),
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
  var menuItemBtn = document.createElement('button'),
      iconSpan = document.createElement('span'),
      textSpan = document.createElement('span');
  menuItemBtn.setAttribute('type', 'button');
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].hidden, 'true');
  iconSpan.className = "".concat(buttonIconClassName, " fal fa-fw");
  textSpan.className = "".concat(buttonTextClassName);
  Object(_util__WEBPACK_IMPORTED_MODULE_10__["appendAll"])(menuItemBtn, [iconSpan, textSpan]);
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
  var menus = [];
  Array.from(menu.querySelectorAll('li')).forEach(function (menuItem) {
    var link = menuItem.querySelector('a'),
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
      var prepped = prepareSubMenu(menuItem, subMenu);
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
  var setMenu = function setMenu(open) {
    menu.dataset.open = open;
    veil.dataset.on = open;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].expanded, open);
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
  var currentPage = menu.querySelector(".".concat(columnClassName, ":first-of-type > ul .").concat(currentClassName)),
      col = currentPage && menu.querySelector(".".concat(columnClassName, ":first-of-type > ul"));
  /**
   * The first column is the entire menu on mobile, so we need to scroll
   * the entire column if the current page is in it and off-screen.
   *
   * The other sub-menus only display a single level, so we scroll the
   * list to the open item or the current page.
   */

  Array.from(menu.querySelectorAll(".".concat(columnClassName, " > ul"))).forEach(function (list, i) {
    if (i === 0 && currentPage && Object(_util__WEBPACK_IMPORTED_MODULE_10__["isVisible"])(currentPage)) {
      /**
       * The current page is in the first column
       */
      var scrollCol = zenscroll__WEBPACK_IMPORTED_MODULE_8___default.a.createScroller(col);
      scrollCol.center(currentPage, scrollDuration);
    } else {
      var target = list.querySelector(['[data-open="true"]', ".".concat(currentClassName)].join(',')),
          scrollList = zenscroll__WEBPACK_IMPORTED_MODULE_8___default.a.createScroller(list);
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
  var expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].expanded);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_10__["toBool"])(expanded)) {
    trap && trap.deactivate();
    setMenu(false);
  } else {
    setMenu(true);
    trap && trap.activate();
    var menu = button.closest(".".concat(className));
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
  var menu = column.closest(".".concat(className));
  /**
   * Remove sub-menus from columns to the right
   */

  var nextColumn = column.nextElementSibling;

  while (nextColumn) {
    Array.from(nextColumn.childNodes).forEach(function (subMenu) {
      return nextColumn.removeChild(subMenu);
    });
    nextColumn = nextColumn.nextElementSibling;
  }
  /**
   * Set all items to be closed at current level and lower, in every sub-menu.
   */


  var list = menuItems(menu, level);

  while (list.length) {
    list.forEach(function (menuItem) {
      var button = menuItem.querySelector('button');
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
  var menuItem = button.closest('li'),
      sectionText = menuItem.dataset.title + ' section',
      textSpan = button.querySelector(".".concat(buttonTextClassName)),
      text = open ? 'Close ' : 'Open ';
  menuItem.dataset.open = open;
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
/**
 * Open/close the sub-menu when its button is clicked.
 *
 * @param {HTMLUListElement} subMenu - Toggle the sub-menu when its button is clicked.
 */


function listenForSubMenuToggles(subMenu) {
  Array.from(subMenu.querySelectorAll('button')).forEach(function (button) {
    return button.addEventListener('click', function () {
      return toggleSubMenu(button);
    }, true);
  });
}
/**
 * Toggle a sub-menu open or closed.
 *
 * When a sub-menu is opened, we clone it and add it to the next column to the
 * right.
 */


function toggleSubMenu(button) {
  var expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].expanded),
      menu = button.closest(".".concat(className)),
      thisList = button.closest('ul'),
      thisLevel = Number.parseInt(thisList.className.slice(-1)),
      thisCol = menu.querySelector(".".concat(columnClassName, ":nth-of-type(").concat(thisLevel - firstLevel + 1, ")")),
      scrollList = zenscroll__WEBPACK_IMPORTED_MODULE_8___default.a.createScroller(thisList);
  /***
   * Whether we're opening a different sub-menu or closing the current one,
   * everything below it should collapse.
   */

  clearColumnsToTheRight(thisCol, thisLevel);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_10__["toBool"])(expanded)) {
    setAllWithSameID(button, false);
  } else {
    var columnToTheRight = thisCol.nextSibling,
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
  Array.from(document.querySelectorAll("[data-id=\"".concat(button.closest('li').dataset.id, "\"]"))).forEach(function (menuItem) {
    return setMenuItemButtonDetails(menuItem.querySelector('button'), open);
  });
}
/**
 * Create an array of divs representing each column of the menu.
 *
 * @param {number} levels - How many columns to create.
 * @returns {HTMLDivElement[]} An array of divs representing the columns.
 */


function createColumns(levels) {
  var columns = [];

  for (var i = 0; i < levels; i++) {
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
  var buttonWrapper = document.createElement('div'),
      menu = label.closest(".".concat(className));
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].hasPopup, 'menu');
  Array.from(label.childNodes).forEach(function (child) {
    return buttonWrapper.appendChild(child);
  });
  button.appendChild(buttonWrapper);
  var trap = focus_trap__WEBPACK_IMPORTED_MODULE_9___default()(menu, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: function initialFocus() {
      var open = Array.from(menu.querySelectorAll([".".concat(currentClassName, " > span"), ".".concat(hierarchyClassName, " > a"), ".".concat(columnClassName, " > ul > li:first-of-type > a")].join(','))).filter(function (elem) {
        return elem && Object(_util__WEBPACK_IMPORTED_MODULE_10__["isVisible"])(elem);
      });
      return open[open.length - 1];
    },
    onDeactivate: function onDeactivate() {
      return toggleMenu(button, setMenu);
    },
    clickOutsideDeactivates: true
  });
  button.addEventListener('click', function () {
    return toggleMenu(button, setMenu, trap);
  }, true);
}
/**
 * Transform the Matrix-generated menu lists into an interactive menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function launchMenu(menu) {
  var label = menu.querySelector(".".concat(buttonClassName)),
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
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  setMenu(false);
  menus.forEach(function (menu) {
    return appendMenu(menu, columns);
  });
  columns.forEach(function (column) {
    return columnsContainer.appendChild(column);
  });
  menu.appendChild(columnsContainer);
  label.appendChild(button);
  listenForSubMenuToggles(columnsContainer);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchMenu,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/modal-slider/modal-slider.js":
/*!***************************************************!*\
  !*** ./src/patterns/modal-slider/modal-slider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * modal-slider
 *
 * @module patterns/modal-slider/modal-slider
 * @author Daniel Miller <daniel.miller@city.ac.uk>
 * @copyright City, University of London 2018
 *
 */


var className = 'modal-slider';
/**
 * Entry function - loop through all the list items and
 * add the navigation buttons/listeners
 *
 * @param {HTMLElement} modalSlider - The UL element
 *
 */

function modalSlider(modalSlider) {
  var allListItems = modalSlider.querySelectorAll('li');
  var direction;
  allListItems.forEach(function (listItem) {
    // insert the button container once for each list item
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__buttons modal__buttons--slider';
    var modalContent = listItem.querySelector('.modal__content');
    modalContent.append(buttonContainer);
    /*
        if there's a previous sibling, get it and 
        create HTML elements inside current modal, if not, 
        we get the last list item and link to that
    */
    // 1 is right, -1 is left

    direction = -1;

    if (listItem.previousElementSibling != null) {
      createElements(listItem, listItem.previousElementSibling, direction);
    } else {
      createElements(listItem, allListItems[allListItems.length - 1], direction);
    }
    /*
        if there's a next sibling, get it and 
        create HTML elements inside current modal, if not, 
        we get the first list item and link to that
    */


    direction = 1;

    if (listItem.nextElementSibling != null) {
      createElements(listItem, listItem.nextElementSibling, direction);
    } else {
      createElements(listItem, allListItems[0], direction);
    } // now the buttons are added, add listeners for left/right click


    addButtonListeners(listItem);
  });
}
/**
 * Add listeners to buttons so user can navigate left/right
 *
 * @param {HTMLElement} currentListItem - the active list item
 *
 */


function addButtonListeners(currentListItem) {
  var buttonsContainer = currentListItem.querySelector('.modal__buttons');
  var buttons = buttonsContainer.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.addEventListener('click', slideLeftorRight, false);
  });
}
/**
 * Respond to left or right button click
 *
 * @param {event} e - the button event
 *
 */


function slideLeftorRight(e) {
  var dataDirection = e.target.parentNode.getAttribute('data-direction');
  var parentListItem = e.target.closest('li');
  var thisModalSlider = e.target.closest('.modal-slider');
  var thisModalPopup = parentListItem.querySelector('.modal__popup');
  var allListItems = thisModalSlider.querySelectorAll('li');
  var newModal; // always hide the active modal

  thisModalPopup.setAttribute('data-hidden', true); // remove tab indexes of current modal, false is set tab index to -1

  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setTabIndexes"])(thisModalPopup, 'button', false);

  if (dataDirection == '1') {
    /* 
        if there's a next li element, show it, if not, show the
        first list item's modal
    */
    if (parentListItem.nextElementSibling != null) {
      newModal = parentListItem.nextElementSibling.querySelector('.modal__popup');
      newModal.removeAttribute('data-hidden');
    } else {
      newModal = allListItems[0].querySelector('.modal__popup');
      newModal.removeAttribute('data-hidden');
    }
  } else {
    /* 
        if there's a previous li element, show it, if not, show the
        last list item's modal
    */
    if (parentListItem.previousElementSibling != null) {
      newModal = parentListItem.previousElementSibling.querySelector('.modal__popup');
      newModal.removeAttribute('data-hidden');
    } else {
      newModal = allListItems[allListItems.length - 1].querySelector('.modal__popup');
      newModal.removeAttribute('data-hidden');
    }
  } // set the tab indexes, true is remove tab indexes


  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setTabIndexes"])(newModal, 'button', true); // trap the focus in the newly shown modal

  trapFocus(newModal);
}
/**
 * Trap focus: when the user navigates left or right,
 * the focus must be trapped to the new modal
 *
 * @param {HTMLElement} modalPopup - the modal popup div
 *
 */


function trapFocus(modalPopup) {
  var modalInner = modalPopup.querySelector('.modal__inner');
  var trap = focus_trap__WEBPACK_IMPORTED_MODULE_1___default()(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}
/**
 * Create elements helper function to create all the HTML elements
 *
 * @param {HTMLElement} activeListItem - the active list item containing active modal HTML markup
 * @param {HTMLElement} elementSibling - the element's next or prev sibling list item
 * @param {int} direction - helper var to tell us if it's a next or previous button required
 *
 */


function createElements(activeListItem, elementSibling, direction) {
  var elementSiblingModalPopup = elementSibling.querySelector('.modal__popup');
  var elementSiblingDataTitle = elementSiblingModalPopup.getAttribute('data-title');
  var modalButtonsContainer = activeListItem.querySelector('.modal__buttons');
  var icon = document.createElement('span');
  icon.className = 'modal__buttons__icon far';
  var button = document.createElement('button');
  button.setAttribute('tabindex', '-1');
  /* 
      outer span is for anchor discreet effect to work on text
      that wraps - by default anchor discreet will not work
      on text that wraps on two or more lines
  */

  var outerSpan = document.createElement('span');
  outerSpan.className = 'modal__underline-transition';
  var spanText = document.createElement('span');
  spanText.textContent = elementSiblingDataTitle;
  modalButtonsContainer.append(button);
  var blockDiv = document.createElement('div');
  blockDiv.append(outerSpan);
  outerSpan.append(spanText);
  button.append(blockDiv); // 1 is right, -1 is left

  if (direction == 1) {
    button.setAttribute('data-direction', '1');
    icon.classList.add('fa-long-arrow-right');
    button.append(icon);
  } else {
    button.setAttribute('data-direction', '-1');
    icon.classList.add('fa-long-arrow-left');
    button.prepend(icon);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: modalSlider,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/modal/modal.js":
/*!*************************************!*\
  !*** ./src/patterns/modal/modal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * modal
 *
 * @module patterns/modal/modal
 * @author Daniel Miller <daniel.miller@city.ac.uk>
 * @copyright City, University of London 2018
 *
 */


var className = 'modal-group';
var modalBackground = document.createElement('div'),
    trap;
/**
 * Launch function: sets the modal attr to hidden, adds
 * elements to toggle the modal, adds event listeners to those
 * elements to toggle the modal and sets tab indexes
 * on all anchor elements
 *
 * @param {HTMLElement} modal - the modal
 *
 */

function launchModal(modalGroup) {
  var allListItems = modalGroup.querySelectorAll('li');
  allListItems.forEach(function (listItem) {
    // add classes to heading and first p element as per modal format
    var heading = listItem.firstElementChild;
    var modalBodyCopy = listItem.getElementsByTagName('p')[0];
    heading.className = 'modal__heading';
    modalBodyCopy.className = 'modal__body-copy';
    var linkElement = document.createElement('a');
    linkElement.className = 'modal__trigger';
    linkElement.setAttribute('href', '#');
    linkElement.textContent = heading.textContent;
    listItem.prepend(linkElement); // remove elements, create the div scaffolding, then reinsert

    heading.remove();
    modalBodyCopy.remove();
    var modalPopup = document.createElement('div');
    modalPopup.className = 'modal__popup';
    modalPopup.setAttribute('data-hidden', true); // data-title is used in modal slider

    modalPopup.setAttribute('data-title', heading.textContent);
    var modalInner = document.createElement('div');
    modalInner.className = 'modal__inner';
    modalInner.setAttribute('role', 'dialog');
    var modalContent = document.createElement('div');
    modalContent.className = 'modal__content';
    var modalCloseElement = document.createElement('button');
    modalCloseElement.className = 'modal__close fas fa-times';
    modalCloseElement.setAttribute('aria-label', 'Close modal');
    listItem.append(modalPopup);
    modalPopup.append(modalInner);
    modalInner.append(modalContent);
    modalContent.append(modalCloseElement, heading, modalBodyCopy);
    addEventListeners(listItem, linkElement, modalCloseElement);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["setTabIndexes"])(listItem, 'button', false);
  });
}
/**
 * Add event listeners: adds all the required event listerners
 *
 * @param {HTMLElement} modal - the modal
 * @param {HTMLElement} linkElement - the modal trigger anchor
 * @param {HTMLElement} modalCloseElement - the modal close trigger
 *
 */


function addEventListeners(modal, linkElement, modalCloseElement) {
  linkElement.addEventListener('click', openModal, false);
  modalCloseElement.addEventListener('click', closeModal, false);
  /*
   * listen for escape key press and close
   */

  modal.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
    }
  });
  /*
   * listen for a click outside of modal inner and close
   */

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal__popup')) {
      closeModal(e);
    }
  });
}
/**
 * Open modal: runs all the required functions
 * to open the modal
 *
 * @param {event} e - click event
 *
 */


function openModal(e) {
  e.preventDefault();
  var modal = e.target.nextElementSibling;
  addBackgroundFade();
  document.body.classList.add('modal--in', 'no-scroll');
  modal.removeAttribute('data-hidden', true);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setTabIndexes"])(modal, 'button', true);
  trapFocus(modal);
}
/**
 * Close modal: runs all the required functions
 * to close the modal
 *
 * @param {event} e - click event
 *
 */


function closeModal(e) {
  e.preventDefault();
  var modal;

  if (e.target.classList.contains('modal__close')) {
    modal = e.target.closest('.modal__popup');
  } else {
    modal = e.target;
  }

  document.body.classList.remove('modal--in', 'no-scroll');
  modal.setAttribute('data-hidden', true);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setTabIndexes"])(modal, 'button', false);
  trap.deactivate();
}
/**
 * Add background fade: adds the background fade element
 * to the body. Only adds once if element not in source
 *
 */


function addBackgroundFade() {
  if (!document.body.contains(modalBackground)) {
    modalBackground.setAttribute('class', 'modal__background');
    document.body.appendChild(modalBackground);
  }
}
/**
 * Trap focus: focus needs to be trapped inside the
 * modal when it's opened. This function takes care of
 * this
 *
 * @param {HTMLElement} modal - the modal
 *
 */


function trapFocus(modal) {
  var modalInner = modal.querySelector('.modal__inner');
  trap = focus_trap__WEBPACK_IMPORTED_MODULE_1___default()(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchModal,
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
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pagination/pagination.js */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../aria-attributes.js */ "./src/aria-attributes.js");









/**
 * Paginated list
 *
 * @module patterns/paginated-list/paginated-list
 * @author Web Development
 * @copyright City, University of London 2018
 */



var className = 'paginated-list',
    minimumPage = 1,
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
    Object(_util__WEBPACK_IMPORTED_MODULE_7__["removeClass"])(list, className, false);
    return;
  }

  var pageSizeSetting = Number.parseInt(list.dataset.pagesize) ? Number.parseInt(list.dataset.pagesize) : defaultPage,
      listItems = Array.from(list.children),
      pageSize = setPageSize(pageSizeSetting);

  if (listItems.length <= pageSize) {
    /**
     * list too short, doesn’t need pagination.
     * remove the classname to avoid conflicting
     * styles then bail
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_7__["removeClass"])(list, className, false);
    return;
  }

  var pages = [],

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
  var pageNumber = 0,
      pageItems = listItems.slice(0, pageSize);
  /* loop through items while we can still make a page */

  var _loop = function _loop() {
    var page = document.createElement('li'),
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
        newList.setAttribute('reversed', 'true');
      }
    }
    /* move this page of items into the page and inner list */


    pageItems.forEach(function (listItem) {
      return newList.appendChild(listItem);
    });
    page.appendChild(newList);
    page.className = _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6__["pageClassName"];
    page.setAttribute('tabindex', -1);
    page.setAttribute(_aria_attributes_js__WEBPACK_IMPORTED_MODULE_8__["default"].label, "Page ".concat(pageNumber + 1));
    pages.push(page);
    /* try to fetch another page */

    ++pageNumber;
    pageItems = listItems.slice(pageSize * pageNumber, pageSize * pageNumber + pageSize);
  };

  while (pageItems.length > 0) {
    _loop();
  }
  /* add the pages to the original list in bulk */


  pages.forEach(function (page) {
    return list.appendChild(page);
  });
  Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_6__["addPagination"])(list, listItems.length);
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");










/**
 * Pagination
 *
 * @module patterns/pagination/pagination
 * @author Web Development
 * @copyright City, University of London 2018
 */



var className = 'pagination',
    pageClassName = 'page',
    wrapperClassName = className + '__wrapper',
    controlsClassName = className + '__controls',
    controlsElementClassName = controlsClassName + '__element',
    ellipsisClassName = controlsClassName + '__ellipsis',
    buttonClassName = controlsClassName + '__button',
    summaryClassName = className + '__summary',
    nextPrevRegEx = /pagination__controls__button--(next|prev)/,
    maximumButtonsToDisplay = 6,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_8__["reduceMotion"])() ? 0 : 999;
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
  var toggleNextPrev = function toggleNextPrev(pageNumber) {
    pageCount === pageNumber ? next.setAttribute('disabled', 'true') : next.removeAttribute('disabled');
    1 === pageNumber ? prev.setAttribute('disabled', 'true') : prev.removeAttribute('disabled');
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
        var buttonNumber = Number.parseInt(button.dataset.page);
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded, selected);
  selected ? button.setAttribute('disabled', 'true') : button.removeAttribute('disabled');
  selected ? button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].current, 'page') : button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].current);
}
/**
 * 'Close' all pages and mark all buttons as not selected.
 *
 * @param {HTMLElement[]} pages - An array of page elements.
 * @param {HTMLButtonElement[]} controls - An array of control buttons.
 */


function closeAll(pages, controls) {
  pages.forEach(function (page) {
    return page.dataset.open = false;
  });
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
  var openPage = function openPage(pageNumber, focus, scrollTo) {
    var pagesArray = Array.from(pages.querySelectorAll(".".concat(pageClassName))),
        controlsArray = Array.from(controls.querySelectorAll('button'));
    closeAll(pagesArray, controlsArray);
    var page = pages.querySelector(".".concat(pageClassName, ":nth-of-type(").concat(pageNumber, ")")),
        button = controls.querySelector("[data-page=\"".concat(pageNumber, "\"]"));
    setProximity(pagesArray.length, controlsArray, pageNumber);
    toggleNextPrev(pageNumber);
    page.dataset.open = true;
    toggleButton(button, true);
    focus && page.focus();
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_7___default.a.to(page, scrollDuration);
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
  var nextPrevOpenPage = function nextPrevOpenPage() {
    var currentPage = Number.parseInt(controls.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded, "=\"true\"]")).dataset.page);
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
  var summaryText = "".concat(pageCount, " pages)");

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
    newPageFn: function newPageFn(pageNumber) {
      return pageNumber < pageCount && pageNumber + 1;
    }
  }, {
    button: prev,
    class: buttonClassName + '--prev',
    text: 'Previous page',
    newPageFn: function newPageFn(pageNumber) {
      return pageNumber > 1 && pageNumber - 1;
    }
  }].forEach(function (button) {
    var btn = button.button,
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
  var button = document.createElement('button'),
      buttonSpan = document.createElement('span');
  buttonSpan.appendChild(document.createTextNode(pageNumber));
  button.dataset.page = pageNumber;
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].label, "Open page ".concat(pageNumber));

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
  var wrapper = document.createElement('div'),
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
    Object(_util__WEBPACK_IMPORTED_MODULE_8__["removeClass"])(elem, className, false);
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

  var _loop = function _loop(pageNumber) {
    var pageButton = createPageButton(pageNumber, pages.length);
    pageButton.addEventListener('click', function () {
      return openPage(pageNumber, true, false);
    });

    if (pages.length > 2 && pageNumber === pages.length) {
      pageButtons.push(ellipsisLast);
    }

    pageButtons.push(pageButton);

    if (pages.length > 2 && pageNumber === 1) {
      pageButtons.push(ellipsisFirst);
    }
  };

  for (var pageNumber = 1; pageNumber <= pages.length; pageNumber++) {
    _loop(pageNumber);
  }

  pageButtons.push(next);
  wrapper.className = wrapperClassName;
  controls.className = controlsClassName;
  controls.dataset.pagecount = pages.length;
  controls.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].label, 'Pagination');
  summary.className = summaryClassName;
  setSummaryText(summary, pages.length, itemCount);
  elem.parentNode.replaceChild(wrapper, elem);
  wrapper.appendChild(elem);
  pageButtons.forEach(function (pageButton) {
    return controls.appendChild(pageButton);
  });
  openPage(1, false, false);
  wrapper.appendChild(controls);
  wrapper.appendChild(summary);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: addPagination,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/show-more/show-more.js":
/*!*********************************************!*\
  !*** ./src/patterns/show-more/show-more.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Show-more
 *
 * @module patterns/show-more/show-more
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */


var className = 'show-more';
/**
 * innitial function on page load; it hides text container of 'show-more' DOM element, and calles
 * createShowMoreButton(element) function to create a control button
 *
 * @param {HTMLElement} element - HTML parent element with classname 'show-more'
 */

function showMore(element) {
  var showMoreTextElements = document.querySelectorAll('.show-more__text');
  showMoreTextElements.forEach(function (element) {
    element.setAttribute('data-hidden', 'true');
  });
  createShowMoreButton(element);
}
/**
 * event listener that handles click event of 'show-more' button
 *
 * @param {object} e - MouseEvent object
 */


function handleShowMoreClick(e) {
  e.preventDefault();
  var parent = e.currentTarget.parentNode.parentNode.parentNode;
  var showMoreText = parent.querySelector('.show-more__text');
  var showMoreAnchorLinkText = parent.querySelector('.show-more__link-text');
  var hiddenElement = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(showMoreText.dataset.hidden);

  if (hiddenElement) {
    e.currentTarget.setAttribute('data-open', 'true');
    showMoreText.setAttribute('data-hidden', 'false');
    showMoreAnchorLinkText.textContent = 'Show less';
    showMoreText.style.maxHeight = '100%';
    var headingElement = parent.querySelector('h2');
    headingElement.scrollIntoView();
  } else {
    e.currentTarget.setAttribute('data-open', 'false');
    showMoreText.setAttribute('data-hidden', 'true');
    showMoreAnchorLinkText.textContent = 'Show more';
    showMoreText.style.maxHeight = null;

    var _headingElement = parent.querySelector('h2');

    _headingElement.scrollIntoView();
  }
}
/**
 * create 'show-more' button in the following HTML structure then append it to '.show-more' HTML element
 * <div class="show-more__button__container">
 *  <span class="show-more__button">
 *    <a href="">
 *      <span class="icon fal fa-plus-circle" aria-hidden="true"></span>
 *      <span class="icon fal fa-minus-circle" aria-hidden="true"></span>
 *      <span class="show-more__link-text">Show more</span>
 *      <span class="sr-only"> about the {[data]=title} </span>
 *    </a>
 *  </span>
 * </div>
 *
 * @param {HTMLElement} element - HTML parent element with classname 'show-more'
 */


function createShowMoreButton(element) {
  var showMoreButtonDiv = document.createElement('div');
  showMoreButtonDiv.classList.add('show-more__button__container');
  var showMoreButton = document.createElement('span');
  showMoreButton.classList.add('show-more__button');
  showMoreButtonDiv.appendChild(showMoreButton);
  var showMoreAnchor = document.createElement('a');
  showMoreAnchor.setAttribute('href', '');
  showMoreAnchor.addEventListener('click', handleShowMoreClick);
  showMoreButton.appendChild(showMoreAnchor);
  element.appendChild(showMoreButtonDiv);
  var plusIcon = document.createElement('span');
  plusIcon.classList.add('icon');
  plusIcon.classList.add('fal');
  plusIcon.classList.add('fa-plus-circle');
  plusIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].hidden, true);
  var minusIcon = document.createElement('span');
  minusIcon.classList.add('icon');
  minusIcon.classList.add('fal');
  minusIcon.classList.add('fa-minus-circle');
  minusIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].hidden, true);
  var showMoreText = document.createElement('span');
  showMoreText.classList.add('show-more__link-text');
  showMoreText.appendChild(document.createTextNode('Show more'));
  var dataTitle = element.getAttribute('data-title');
  var srTextElement = document.createElement('span');
  srTextElement.appendChild(document.createTextNode('about ' + dataTitle));
  srTextElement.classList.add('sr-only');
  showMoreAnchor.appendChild(plusIcon);
  showMoreAnchor.appendChild(minusIcon);
  showMoreAnchor.appendChild(showMoreText);
  showMoreAnchor.appendChild(srTextElement);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: showMore,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/slider/slider.js":
/*!***************************************!*\
  !*** ./src/patterns/slider/slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util */ "./src/util.js");














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Slider
 *
 * @module patterns/slider/slider
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

var className = 'slider';
var sliderChildren, sliderChildrenLength;
/**
 * Creates a slider when adding slider class to an ul element. The li elements are the slides.
 *
 * @param {className} slider - class name of Ul element containing li (slides).
 */

function initSlider(slider) {
  if (slider.children.length < 2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeClass"])(slider, className, false);
    return;
  } // slider items count


  sliderChildren = _toConsumableArray(slider.children);
  sliderChildrenLength = sliderChildren.length;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sliderChildren.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sliderChild = _step.value;

      if (sliderChild[0] < 1) {
        sliderChild[1].classList.add('slider__active-slide');
      } else {
        // only displays first slide and hides rest
        sliderChild[1].classList.add('slider__slide');
        /* generates controls */

        var sliderControlsWrap = createElement('div', [{
          label: 'class',
          val: 'slider__controls__wrap'
        }]);
        var sliderControls = createElement('div', [{
          label: 'class',
          val: 'slider__controls'
        }]);
        var sliderProgress = createElement('div', [{
          label: 'class',
          val: 'slider__controls__progress'
        }]);
        var sliderButtons = createElement('div', [{
          label: 'class',
          val: 'slider__controls__buttons'
        }]); // generates progress

        sliderProgress.appendChild(createElement('span', [{
          label: 'content',
          val: '1'
        }, {
          label: 'class',
          val: 'slide__controls__progress__active'
        }]));
        sliderProgress.appendChild(createElement('span', [{
          label: 'content',
          val: ' /'
        }, {
          label: 'class',
          val: 'slide__controls__progress__separator'
        }]));
        sliderProgress.appendChild(createElement('span', [{
          label: 'content',
          val: sliderChildrenLength
        }, {
          label: 'class',
          val: 'slide__controls__progress__total'
        }]));
        sliderControlsWrap.appendChild(sliderControls).appendChild(sliderProgress);
        slider.appendChild(sliderControlsWrap); // generates buttons

        sliderButtons.appendChild(createElement('button', [{
          label: 'aria-label',
          val: 'Previous item'
        }, {
          label: 'disabled',
          val: 'true'
        }, {
          label: 'class',
          val: 'fas'
        }, {
          label: 'class',
          val: 'fa-arrow-left'
        }, {
          label: 'class',
          val: 'slider__controls__buttons__prev'
        }, {
          label: 'class',
          val: 'swiper-slider-arrow'
        }, {
          label: 'class',
          val: 'arrow-left--btn-prev'
        }]));
        sliderButtons.appendChild(createElement('button', [{
          label: 'aria-label',
          val: 'Next item'
        }, {
          label: 'class',
          val: 'fas'
        }, {
          label: 'class',
          val: 'fa-arrow-right'
        }, {
          label: 'class',
          val: 'slider__controls__buttons__next'
        }, {
          label: 'class',
          val: 'swiper-slider-arrow'
        }, {
          label: 'class',
          val: 'arrow-right--btn-next'
        }]));
        sliderControls.appendChild(sliderButtons);
        slider.querySelectorAll('.slider__controls__buttons__prev')[0].classList.add('slider__controls__buttons__disabled'); // Adds event listener to buttons

        slider.querySelector('.slider__controls__buttons__prev').addEventListener('click', function () {
          handleSlideChange(-1, slider);
        });
        slider.querySelector('.slider__controls__buttons__next').addEventListener('click', function () {
          handleSlideChange(1, slider);
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
/**
 * A function to create elements containing classes, content and any other attributes
 *
 * @param {string} type - .specify what type of element you like to create i.e. "div", "button"...
 * @param {array} attributes - an array containing objects  specifying which attributes to assign to the element i.e. {label : "class", val : "container"},{label: "content" , val:"I'm a div"}
 */


function createElement(type, attributes) {
  var el = document.createElement(type);
  attributes.map(function (att) {
    att.label === 'class' ? el.classList.add(att.val) : att.label === 'content' ? el.appendChild(document.createTextNode(att.val)) : el.setAttribute(att.label, att.val);
  });
  return el;
}
/**
 * Handles direction of slide when sliding left or right
 *
 * @param {number} direction - either 1 (next) or -1 (prev)
 * @param {className} slider - class name of Ul element containing li (slides).
 */


function handleSlideChange(direction, slider) {
  // gets position of active slide
  var activeSlide = parseInt(slider.querySelectorAll('.slide__controls__progress__active')[0].innerText);
  var newSlide = activeSlide + direction; // ensures you don't slide past first and last slide

  if (newSlide !== 0 && !(newSlide > sliderChildrenLength)) {
    // udpates progress
    slider.querySelectorAll('.slide__controls__progress__active')[0].innerHTML = newSlide;
    sliderChildren.forEach(function (item, i) {
      //displays new slide
      if (i == newSlide - 1) {
        item.classList.remove('slider__slide');
        item.classList.add('slider__active-slide');
      } else {
        item.classList.remove('slider__active-slide');
        item.classList.add('slider__slide');
      }
    }); // disables next & prev buttons when reaching beginning or end of slides

    if (newSlide == 1) {
      slider.querySelectorAll('.slider__controls__buttons__prev')[0].classList.add('slider__controls__buttons__disabled');
      slider.querySelectorAll('.slider__controls__buttons__prev')[0].setAttribute('disabled', true);
    } else {
      slider.querySelectorAll('.slider__controls__buttons__prev')[0].classList.remove('slider__controls__buttons__disabled');
      slider.querySelectorAll('.slider__controls__buttons__prev')[0].removeAttribute('disabled');
    }

    if (newSlide == sliderChildrenLength) {
      slider.querySelectorAll('.slider__controls__buttons__next')[0].classList.add('slider__controls__buttons__disabled');
      slider.querySelectorAll('.slider__controls__buttons__next')[0].setAttribute('disabled', true);
    } else {
      slider.querySelectorAll('.slider__controls__buttons__next')[0].classList.remove('slider__controls__buttons__disabled');
      slider.querySelectorAll('.slider__controls__buttons__next')[0].removeAttribute('disabled');
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: initSlider,
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


var className = 'fa-link';

function copyIconToClipboard(elem) {
  var copy = elem;
  copy.parentNode.parentNode.style.position = 'relative';
  copy.addEventListener('mouseover', function (e) {
    var t = document.createElement('div');
    var link = document.createElement('span');
    var url = window.location.href;
    t.className = 'tooltip';
    link.className = 'link-copy';
    var textlink = document.createTextNode(url);
    var textnode = document.createTextNode('Copy link');
    t.appendChild(textnode);
    link.appendChild(textlink);
    t.appendChild(link);
    e.target.parentElement.parentElement.appendChild(t);
    e.target.parentElement.parentElement.classList.add('copyLink');
  });
  copy.addEventListener('click', function (e) {
    e.preventDefault();
    var text = e.target.parentElement.parentElement.querySelector('.link-copy');
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      e.target.parentElement.parentElement.querySelector('.tooltip').textContent = 'Link Copied';
      e.target.parentElement.parentElement.querySelector('.tooltip').classList.add(msg);
    } catch (err) {
      throw new Error(e);
    } // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported


    window.getSelection().removeAllRanges();
  });
  copy.addEventListener('mouseout', function (e) {
    //remove element from mouseover
    e.target.parentElement.parentElement.querySelector('.tooltip').remove();
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../main */ "./src/main.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");










/**
 * Tabs
 *
 * @module patterns/tabs/tabs
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */





var className = 'tabs',
    panelClassName = className + '__panel',
    contentClassName = panelClassName + '__content',
    linksClassName = className + '__links',
    endKey = 35,
    homeKey = 36,
    arrowLeft = 37,
    arrowUp = 38,
    arrowRight = 39,
    arrowDown = 40,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_9__["reduceMotion"])() ? 0 : 999,
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
  link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].selected, selected);

  if (selected) {
    //link.removeAttribute('tabindex');
    link.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].current, true);
  } else {
    link.setAttribute('tabindex', 0);
    link.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].current);
  }
}
/**
 * Change the selection to the requested tab.
 *
 * @param {HTMLAnchorElement} newTab - The selected tab.
 */


function selectTab(newTab) {
  var tabs = newTab.closest(".".concat(className)),
      controls = tabs.querySelector(".".concat(linksClassName)),
      linkItems = Array.from(controls.querySelectorAll('li')),
      panels = Array.from(tabs.querySelectorAll(".".concat(panelClassName)));
  /**
   * Unselect every tab and related panel.
   */

  linkItems.forEach(function (linkItem) {
    toggleLink(linkItem.firstElementChild, false);
  });
  panels.forEach(function (panel) {
    return panel.setAttribute('hidden', 'true');
  });
  /**
   * Select the requested tab.
   */

  toggleLink(newTab, true);
  tabs.querySelector(newTab.hash).removeAttribute('hidden');
  history.pushState(null, null, newTab.hash);
  /**
   * Move focus to the section and optionally scroll it into view.
   */

  newTab.focus();
  scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_7___default.a.to(tabs, scrollDuration);
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
  var currentTab = tabs.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].selected, "=\"true\"]")),
      currentTabLI = currentTab.parentNode;
  var newTab = null;

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
  var idLinked = false;
  linkItems.forEach(function (linkItem) {
    var link = linkItem.firstElementChild;
    linkItem.setAttribute('role', 'presentation');
    link.setAttribute('role', 'tab');

    if (link.hash === window.location.hash) {
      idLinked = link.hash;
      toggleLink(link, true);
    } else {
      toggleLink(link, false);
    }

    link.addEventListener('click', function (e) {
      return selectTabEvent(e, link);
    }, true);
  });
  return idLinked;
}
/**
 * Set attributes for the tabbed section panels.
 *
 * @param {HTMLElement[]} panels - An array of tab panels.
 */


function preparePanels(panels) {
  panels.forEach(function (panel) {
    var wrapper = document.createElement('div'),
        panelElements = Array.from(panel.children);
    wrapper.className = contentClassName;
    panelElements.forEach(function (element) {
      return wrapper.appendChild(element);
    });
    panel.appendChild(wrapper);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', 0);
    panel.setAttribute('hidden', 'true');
  });
}
/**
 * Add accordion functionality for mobile.
 *
 * @param {HTMLElement} tabs - An element transformed into a tabbed section
 */


function accordionize(tabs) {
  var wrapper = document.createElement('div'),
      accordion = document.createElement('div');
  wrapper.className = 'tabs--accordion';
  accordion.className = 'accordion';
  accordion.id = "accordion".concat(tabs.dataset.assetid);
  accordion.dataset.allowsingle = 'false';
  accordion.dataset.defaultopen = 'true';
  accordion.dataset.level = tabs.dataset.level;
  accordion.dataset.tabs = tabs.dataset.tabs;
  accordion.dataset.toggleopen = 'true';
  Array.from(tabs.querySelectorAll(".".concat(panelClassName))).forEach(function (panel) {
    var heading = panel.querySelector(".".concat(panelClassName, "__heading")),
        body = panel.querySelector(".".concat(panelClassName, "__body")),
        accordionHeading = document.createElement("h".concat(accordion.dataset.level)),
        accordionSection = document.createElement('div'),
        accordionWrapper = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = "accordion".concat(tabs.dataset.assetid, "-header").concat(panel.dataset.assetid);
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_11__["default"].labelledBy);
    accordionHeading.innerText = heading.innerText.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = "accordion".concat(tabs.dataset.assetid, "-body").concat(panel.dataset.assetid);
    accordionWrapper.className = 'wrapper--accordion__body__content';
    accordionWrapper.innerHTML = body.innerHTML;
    accordionSection.appendChild(accordionWrapper);
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["appendAll"])(accordion, [accordionHeading, accordionSection]);
  });
  tabs.parentNode.insertBefore(wrapper, tabs);
  wrapper.appendChild(tabs);
  wrapper.appendChild(accordion);
  Object(_main__WEBPACK_IMPORTED_MODULE_8__["tryCatch"])(function () {
    return _accordion_accordion__WEBPACK_IMPORTED_MODULE_10__["default"].launchFn(accordion);
  });
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
  var controls = tabs.querySelector(".".concat(linksClassName)),
      linkItems = Array.from(controls.querySelectorAll('li')),
      panels = Array.from(tabs.querySelectorAll(".".concat(panelClassName))),
      numberOfTabs = Number.parseInt(tabs.dataset.mobiletabs);

  if (linkItems.length === 1) {
    /**
     * don't make one tab into a tabbed section, makes no sense
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeClass"])(tabs, className, false);
    return;
  }

  controls.setAttribute('role', 'tablist');
  preparePanels(panels);
  var idLinked = prepareLinks(linkItems);

  if (linkItems.length > numberOfTabs && (!tabs.dataset.neveraccordion || !tabs.dataset.neveraccordion === 'true')) {
    accordionize(tabs);
  }
  /**
   * If the URL doesn't include a hash pointing to one of these tabs, we
   * select the first one. Otherwise unhide the first tab.
   */


  if (!idLinked) {
    toggleLink(linkItems[0].firstElementChild, true);
    panels[0].removeAttribute('hidden');
  } else {
    var selectedTab = tabs.querySelector(idLinked);
    selectedTab.removeAttribute('hidden');
  }
  /**
   * Enable keyboard access to tabs with the cursor keys.
   */


  tabs.addEventListener('keydown', function (e) {
    return keyEvents(e, tabs);
  }, true);
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
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util.js");






/**
 * Theme switcher
 *
 * @module patterns/theme-switcher/theme-switcher
 * @author Web Development
 * @copyright City, University of London 2018
 */


var className = 'theme-switcher',
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
  var html = document.querySelector('html');
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(cookieName, cookieOptions);
  Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeClass"])(html, classPrefix, true);
}
/**
 * Add the theme class to the HTML element and set a cookie so the theme
 * setting will be preserved as we browse the site.
 *
 * @param {string} theme - A string representing a theme class.
 */


function addTheme(theme) {
  var html = document.querySelector('html');
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(cookieName, theme, cookieOptions);
  html.className += " ".concat(classPrefix).concat(theme);
}
/**
 * Respond to theme button clicks.
 *
 * @param {HTMLElement} themeList - A list of buttons for setting or clearing the site theme.
 */


function launchThemeSwitcher(themeList) {
  Array.from(themeList.querySelectorAll('button')).forEach(function (button) {
    return button.addEventListener('click', function () {
      removeThemes();

      if (button.dataset.action !== 'clear') {
        addTheme(button.dataset.theme);
      }
    }, true);
  });
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
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, pxToRem, numberFromString, isMobile, toArray, detectIE, createElement, checkIntersectionObserver, setTabIndexes */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIntersectionObserver", function() { return checkIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabIndexes", function() { return setTabIndexes; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var partialMatchFn = function partialMatchFn(m) {
  return function (s) {
    return s.indexOf(m) < 0;
  };
},
    fullMatchFn = function fullMatchFn(m) {
  return function (s) {
    return s !== m;
  };
};
/**
 * Remove a class name from an HTML element.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @param {string} className - A string representing the class to remove.
 * @param {boolean} [removePartials] - If true, remove partially matching classes.
 */


function removeClass(elem, className, removePartials) {
  var matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(function (s) {
    return matchFn(s);
  }).join(' ');
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
  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
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
  var parameters = {};
  parameterString.substr(1).split('&').forEach(function (parameter) {
    var _parameter$split = parameter.split('='),
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
    var parameters = '?';

    for (var key in parameterObj) {
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
  children.forEach(function (child) {
    return elem.appendChild(child);
  });
}
/**
 * Convert a pixel value to equivalent REM value.
 *
 * @param {number} pxValue - Value in pixels.
 */

function pxToRem(pxValue) {
  var browserWidth = document.documentElement.scrollWidth,
      fontBase;
  browserWidth > 768 ? fontBase = 18 : fontBase = 16;
  var remValue = pxValue / fontBase;
  return remValue;
}
/**
 * Extract number from string, e.g. return '123' from string 'a1b2c3'.
 *
 * @param {string} string - String
 */

function numberFromString(string) {
  var number = string.replace(/\D/g, '');
  return number;
}
/**
 * Calculates viewport width to determinte if using mobile
 * @param {number} number - width of screen, with default value = 432.
 *
 */

function isMobile() {
  var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 432;
  var viewPortWidth = window.innerWidth;
  var mobileScreen = screen;

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
  var array = []; // iterate backwards ensuring that length is an UInt32

  for (var i = obj.length >>> 0; i--;) {
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
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return false;
}
function createElement(type, content, arialabel, disabled, className1, className2, className3, className4, className5, ariaTag1, ariaTagContent1, ariaTag2, ariaTagContent2) {
  var el = document.createElement(type);
  content ? el.appendChild(document.createTextNode(content)) : null;
  className1 ? el.classList.add(className1) : null;
  className2 ? el.classList.add(className2) : null;
  className3 ? el.classList.add(className3) : null;
  className4 ? el.classList.add(className4) : null;
  className5 ? el.classList.add(className5) : null;
  arialabel ? el.setAttribute('aria-label', arialabel) : null;
  ariaTag1 ? el.setAttribute(ariaTag1, ariaTagContent1) : null;
  ariaTag2 ? el.setAttribute(ariaTag2, ariaTagContent2) : null;
  disabled ? el.setAttribute('disabled', true) : null;
  return el;
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
 * Set tab indexes: util function to set tab indexes of elements
 * belonging to a parent
 *
 * @param {HTMLElement} parent - the parent element to query
 * @param {string} selectors - a string of query selectors, e.g: 'a' or combined selector 'a, button'
 * @param {boolean} addOrRemove - helper boolean to tell us to add/remove (false is set tab index to -1)
 */

function setTabIndexes(parent, selectors, addOrRemove) {
  var elements = parent.querySelectorAll(selectors);
  elements.forEach(function (el) {
    if (!addOrRemove) {
      el.setAttribute('tabindex', '-1');
    } else {
      el.removeAttribute('tabindex');
    }
  });
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