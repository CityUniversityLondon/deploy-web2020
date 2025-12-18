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
/******/ 	deferredModules.push([0,"vendor-dependencies","core","react","axios","vendor-direct"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action-on-scroll.js":
/*!*********************************!*\
  !*** ./src/action-on-scroll.js ***!
  \*********************************/
/*! exports provided: actionOnScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionOnScroll", function() { return actionOnScroll; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);






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

  if (element && typeof element !== 'undefined' && element !== null) {
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
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__);




/**
 * WAI-ARIA attributes
 *
 * Quicker to type, intellisensible, documents what they're for, and saves a
 * tiny amount of code by replacing the string 'aria-' with a minifiable
 * variable and dot notation.
 *
 * @module aria-attributes
 * @author Web Development
 * @copyright City St George's, University of London 2018
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

/***/ "./src/how-to-apply--research.js":
/*!***************************************!*\
  !*** ./src/how-to-apply--research.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/**
 * Research apply CTA (no modal)
 *
 * @module patterns/accordion/accordion
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */
var className = 'cta-block__cta--no-modal';
/**
 * Disables modal behaviour on research degree apply CTA where one date exists
 * for a method of study and modal of multiple start dates is not required. Pass
 * relevant URL path to CTA so it behaves as a standard anchor.
 *
 * @param {HTMLElement} cta - A standard research apply CTA (no modal).
 */

function launchResearchApplyCta(cta) {
  var applyAnchor = cta.querySelector('.cta-block__cta__path'),
      applyAnchorHref = applyAnchor.getAttribute('href'),
      applyCta = cta.querySelector('.research-apply-link');
  applyCta.setAttribute('href', applyAnchorHref); // Remove duplicate anchor, as href is now placed on apply CTA

  applyAnchor.remove();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchResearchApplyCta,
  launchQuery: ".".concat(className)
});

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");
/* harmony import */ var _patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/tabs/prepareAccordionTabs */ "./src/patterns/tabs/prepareAccordionTabs.js");














/**
 * Main entry
 *
 * @author Web Development
 * @copyright City St George's, University of London 2018
 */




var edgeVersion = 12;
/**
 * try a function, log the error if it throws an exception.
 *
 * @param {Function} f - The function to call.
 */

function tryCatch(f) {
  try {
    return f();
  } catch (e) {
    // console.log(e);
    Object(_util__WEBPACK_IMPORTED_MODULE_12__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "Pattern launch ".concat(e.fileName, " (").concat(window.location, ")"), true);
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
/**
 * Recursively generate accordion--tabs HTML for tabs.
 *
 * @param {HTMLElement} root
 */


function accordionizeTabs(root) {
  Array.from(root.querySelectorAll('.tabs')).filter(function (elem) {
    return elem.className.indexOf('.tabs-no-js');
  }).forEach(function (elem) {
    var potential = tryCatch(function () {
      return Object(_patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_14__["default"])(elem);
    });
    potential && accordionizeTabs(potential);
  });
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
      var ie = Object(_util__WEBPACK_IMPORTED_MODULE_12__["detectIE"])();
      Object(_util__WEBPACK_IMPORTED_MODULE_12__["removeClass"])(html, 'no-js', false);

      if (ie >= edgeVersion) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    accordionizeTabs(document);
    _patterns__WEBPACK_IMPORTED_MODULE_11__["default"].forEach(launchPattern);
    var parameters = Object(_util__WEBPACK_IMPORTED_MODULE_12__["parametersToObject"])(location.search);
    parameters['test'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_13__["devcorate"])(document.querySelector('body'), 'test', parameters['test']);
    parameters['prod'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_13__["devcorate"])(document.querySelector('body'), 'prod', parameters['prod']);
  }
}, false);

/***/ }),

/***/ "./src/paint-layouts/home/home-vi-sections/banner-promo.js":
/*!*****************************************************************!*\
  !*** ./src/paint-layouts/home/home-vi-sections/banner-promo.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);





var className = 'home-banner--promo';
var prevRatio = 0.0;
var transitionElemnt;

function takeOver(box) {
  transitionElemnt = box;
  var observer;
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: buildThresholdList()
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(transitionElemnt);
}

function buildThresholdList() {
  var thresholds = [];
  var numSteps = 60;

  for (var i = 1.0; i <= numSteps; i++) {
    var ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > prevRatio) {
      entry.intersectionRatio === 0 ? transitionElemnt.querySelector('.banner-transition-ele').style.position = 'absolute' : transitionElemnt.querySelector('.banner-transition-ele').style.position = 'fixed';
    } else {
      entry.intersectionRatio === 0 ? transitionElemnt.querySelector('.banner-transition-ele').style.position = 'absolute' : transitionElemnt.querySelector('.banner-transition-ele').style.position = 'fixed';
    }

    prevRatio = entry.intersectionRatio;
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: takeOver,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/paint-layouts/home/home-vi-sections/play-button.js":
/*!****************************************************************!*\
  !*** ./src/paint-layouts/home/home-vi-sections/play-button.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util */ "./src/util.js");






/**
 * Autoplay video asynchronously and Create control buttons for home page video.
 *
 * @module paint-layouts/home/home-vi-sections
 * @author Web Development
 * @copyright City St George's, University of London
 */

var className = 'home-banner__video';
/**
 * Create control buttons for home page video.
 *
 * @param {element} video - HTML video element.
 */

function setAutoPlay(video) {
  //Add autoplay to the video if we're on screens larger than mobile
  var viewportWidth = window.innerWidth;

  if (viewportWidth > Object(_util__WEBPACK_IMPORTED_MODULE_3__["screenWidth"])('mobile')) {
    video.autoplay = true;
    video.play();
  }
}

function createControlButton(video) {
  var urlPlayButton = video.dataset.playButton;
  var urlPauseButton = video.dataset.pauseButton; // new wrap element to contain grid

  var elButtonWrap = document.createElement('div');
  var elButtonPlay = document.createElement('button');
  var elImgPlay = document.createElement('img');
  var elImgPause = document.createElement('img');
  elImgPlay.src = urlPlayButton;
  elImgPlay.classList.add('button__img--play');
  elImgPlay.setAttribute('alt', '');
  elImgPause.src = urlPauseButton;
  elImgPause.classList.add('button__img--pause');
  elImgPause.setAttribute('alt', '');
  elButtonWrap.classList.add('banner__video__button__wrap');
  elButtonPlay.setAttribute('aria-label', 'pause background video');
  elButtonPlay.classList.add('banner__video__button');
  elButtonPlay.appendChild(elImgPlay);
  elButtonPlay.appendChild(elImgPause);
  elButtonWrap.appendChild(elButtonPlay); // add new elements adjent to video

  video.insertAdjacentElement('afterend', elButtonWrap); // Initial sync

  togglePlay(video, elButtonPlay);
  elButtonPlay.addEventListener('click', function () {
    if (video.paused || video.ended) {
      // User gesture -> always allowed
      video.play()["finally"](function () {
        return togglePlay(video, elButtonPlay);
      });
    } else {
      video.pause();
      togglePlay(video, elButtonPlay);
    }
  }); // Use real media state to updated player button.

  var resync = function resync() {
    return togglePlay(video, elButtonPlay);
  };

  video.addEventListener('play', resync);
  video.addEventListener('playing', resync);
  video.addEventListener('pause', resync);
  video.addEventListener('ended', resync);
}
/**
 * Check if video is actually playing
 *
 * @param {element} video -  HTML video element.
 */


function isActuallyPlaying(v) {
  return !v.paused && !v.ended && v.readyState >= 2;
}
/**
 * video button event listener totoggle play/pause
 *
 * @param {element} video -  HTML video element.
 * @param {element} button - video control button created by createControlButton() function
 */


function togglePlay(video, button) {
  if (isActuallyPlaying(video)) {
    button.classList.remove('play');
    button.setAttribute('aria-label', 'pause background video');
  } else {
    button.classList.add('play');
    button.setAttribute('aria-label', 'play background video');
  }
}

function initBannerVideo(e) {
  setAutoPlay(e);
  createControlButton(e);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: initBannerVideo,
  launchQuery: ".".concat(className)
});

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
/* harmony import */ var _patterns_add_class_add_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/add-class/add-class */ "./src/patterns/add-class/add-class.js");
/* harmony import */ var _patterns_back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/back-to-top/back-to-top */ "./src/patterns/back-to-top/back-to-top.js");
/* harmony import */ var _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/image-carousel/image-carousel */ "./src/patterns/image-carousel/image-carousel.js");
/* harmony import */ var _patterns_charts_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/charts/charts */ "./src/patterns/charts/charts.js");
/* harmony import */ var _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/cms-editor-warning/cms-editor-warning */ "./src/patterns/cms-editor-warning/cms-editor-warning.js");
/* harmony import */ var _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/animation/content-fade-in/content-fade-in */ "./src/patterns/animation/content-fade-in/content-fade-in.js");
/* harmony import */ var _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/animation/content-separator/content-separator */ "./src/patterns/animation/content-separator/content-separator.js");
/* harmony import */ var _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/animation/content-slide-up/content-slide-up */ "./src/patterns/animation/content-slide-up/content-slide-up.js");
/* harmony import */ var _patterns_dropdown_filter_dropdown_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/dropdown-filter/dropdown-filter */ "./src/patterns/dropdown-filter/dropdown-filter.js");
/* harmony import */ var _patterns_event_form_event_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/event-form/event-form */ "./src/patterns/event-form/event-form.js");
/* harmony import */ var _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/feedback/feedback */ "./src/patterns/feedback/feedback.js");
/* harmony import */ var _patterns_find_us_find_us__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/find-us/find-us */ "./src/patterns/find-us/find-us.js");
/* harmony import */ var _patterns_find_us_find_us_v25__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/find-us/find-us-v25 */ "./src/patterns/find-us/find-us-v25.js");
/* harmony import */ var _patterns_image_carousel_default_carousel_default_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/image-carousel/default-carousel/default-carousel */ "./src/patterns/image-carousel/default-carousel/default-carousel.js");
/* harmony import */ var _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/animation/image-expand/image-expand */ "./src/patterns/animation/image-expand/image-expand.js");
/* harmony import */ var _patterns_key_information_key_information_lifelong_learning__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patterns/key-information/key-information--lifelong-learning */ "./src/patterns/key-information/key-information--lifelong-learning.js");
/* harmony import */ var _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patterns/link-finder/link-finder */ "./src/patterns/link-finder/link-finder.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");
/* harmony import */ var _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patterns/modal/modal */ "./src/patterns/modal/modal.js");
/* harmony import */ var _patterns_mouseover_gallery_mouseover_gallery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patterns/mouseover-gallery/mouseover-gallery */ "./src/patterns/mouseover-gallery/mouseover-gallery.js");
/* harmony import */ var _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./patterns/animation/number-animation/number-animation */ "./src/patterns/animation/number-animation/number-animation.js");
/* harmony import */ var _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patterns/paginated-list/paginated-list */ "./src/patterns/paginated-list/paginated-list.js");
/* harmony import */ var _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./patterns/pagination/pagination */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _patterns_navigation_navigation_primary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./patterns/navigation/navigation-primary */ "./src/patterns/navigation/navigation-primary.js");
/* harmony import */ var _how_to_apply_research__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./how-to-apply--research */ "./src/how-to-apply--research.js");
/* harmony import */ var _patterns_navigation_navigation_secondary__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./patterns/navigation/navigation-secondary */ "./src/patterns/navigation/navigation-secondary.js");
/* harmony import */ var _patterns_dropdown_menu_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./patterns/dropdown-menu/dropdown-menu.js */ "./src/patterns/dropdown-menu/dropdown-menu.js");
/* harmony import */ var _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./patterns/show-more/show-more */ "./src/patterns/show-more/show-more.js");
/* harmony import */ var _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patterns/slider/slider */ "./src/patterns/slider/slider.js");
/* harmony import */ var _patterns_animation_svg_path_animation_svg_path_animation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./patterns/animation/svg-path-animation/svg-path-animation */ "./src/patterns/animation/svg-path-animation/svg-path-animation.js");
/* harmony import */ var _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./patterns/tabs/tabs */ "./src/patterns/tabs/tabs.js");
/* harmony import */ var _patterns_tooltip_image_credit_image_credit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./patterns/tooltip/image-credit/image-credit */ "./src/patterns/tooltip/image-credit/image-credit.js");
/* harmony import */ var _patterns_tooltip_social_share_social_share__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./patterns/tooltip/social-share/social-share */ "./src/patterns/tooltip/social-share/social-share.js");
/* harmony import */ var _paint_layouts_home_home_vi_sections_banner_promo__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./paint-layouts/home/home-vi-sections/banner-promo */ "./src/paint-layouts/home/home-vi-sections/banner-promo.js");
/* harmony import */ var _paint_layouts_home_home_vi_sections_play_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./paint-layouts/home/home-vi-sections/play-button */ "./src/paint-layouts/home/home-vi-sections/play-button.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City St George's, University of London 2018
 */

































 // import video from './patterns/video/video';



/* harmony default export */ __webpack_exports__["default"] = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_add_class_add_class__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_charts_charts__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_18__["default"], _patterns_navigation_navigation_primary__WEBPACK_IMPORTED_MODULE_24__["default"], _patterns_navigation_navigation_secondary__WEBPACK_IMPORTED_MODULE_26__["default"], _patterns_dropdown_menu_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_27__["default"], _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_22__["default"], _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_23__["default"], _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_31__["default"], _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_17__["default"], _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_15__["default"], _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_event_form_event_form__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_19__["default"], _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_29__["default"], _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_key_information_key_information_lifelong_learning__WEBPACK_IMPORTED_MODULE_16__["default"], _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_21__["default"], _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_28__["default"], _patterns_image_carousel_default_carousel_default_carousel__WEBPACK_IMPORTED_MODULE_14__["default"], _patterns_animation_svg_path_animation_svg_path_animation__WEBPACK_IMPORTED_MODULE_30__["default"], _patterns_back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_dropdown_filter_dropdown_filter__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_find_us_find_us__WEBPACK_IMPORTED_MODULE_12__["default"], _patterns_find_us_find_us_v25__WEBPACK_IMPORTED_MODULE_13__["default"], _patterns_tooltip_image_credit_image_credit__WEBPACK_IMPORTED_MODULE_32__["default"], _patterns_tooltip_social_share_social_share__WEBPACK_IMPORTED_MODULE_33__["default"], _how_to_apply_research__WEBPACK_IMPORTED_MODULE_25__["default"], // video,
_patterns_mouseover_gallery_mouseover_gallery__WEBPACK_IMPORTED_MODULE_20__["default"], _paint_layouts_home_home_vi_sections_play_button__WEBPACK_IMPORTED_MODULE_35__["default"], _paint_layouts_home_home_vi_sections_banner_promo__WEBPACK_IMPORTED_MODULE_34__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_13__);















/**
 * Accordion
 *
 * @module patterns/accordion/accordion
 * @author Web Development
 * @copyright City St George's, University of London 2018-2019
 */


var className = 'accordion',
    headingClassName = className + '__heading',
    headingTextClassName = headingClassName + '__text',
    headingIconClassName = headingClassName + '__indicator far fa-sharp',
    bodyClassName = className + '__body',
    oneSecond = 1000,
    tenthOfASecond = 100,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_11__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = true;
/**
 * Sets a heading and the button nested within to be open or closed.
 *
 * @param {HTMLHeadingElement} heading - An accordion heading.
 * @param {boolean} open - Set this section to be open?
 */

function setSection(heading, open) {
  heading.dataset.open = open;
  heading.firstElementChild.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].expanded, open);
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
  var open = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toBool"])(section.previousElementSibling.dataset.open);
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

  if (Object(_util__WEBPACK_IMPORTED_MODULE_11__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].expanded))) {
    // Starting height is the current height
    setupTransition(accordionSection, accordionSection.offsetHeight + 'px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      accordionSection.style.height = '0px';
    }, tenthOfASecond);
    setSection(heading, false); // updates URL hash, by removing hash from URL when accordion closes

    history.pushState({}, null, location.href.split('#')[0]);
  } else {
    // Calclulate and save how big we're transitioning to
    var sectionHeight = calculateAccordionBodyHeight(heading); // Starting height is 0

    setupTransition(accordionSection, '0px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      accordionSection.style.height = sectionHeight;
    }, tenthOfASecond);

    if (toggleOpen) {
      var sections = Array.from(heading.parentNode.parentNode.querySelectorAll("#".concat(heading.parentElement.id, " > .").concat(bodyClassName)));
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

    if (scrollTo && !(Object(_util__WEBPACK_IMPORTED_MODULE_11__["verticallyInWindow"])(heading) && Object(_util__WEBPACK_IMPORTED_MODULE_11__["verticallyInWindow"])(accordionSection))) {
      zenscroll__WEBPACK_IMPORTED_MODULE_13___default.a.to(heading, scrollDuration);
    } // updates URL hash with accordion heading, when accordion opens


    window.location.hash = event.currentTarget.parentElement.id;
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
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].hidden, true);
  button.setAttribute('type', 'button');
  textSpan.appendChild(document.createTextNode(heading.textContent));
  Object(_util__WEBPACK_IMPORTED_MODULE_11__["appendAll"])(wrapper, [textSpan, iconSpan]);
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
  var viewportWidth = window.innerWidth;
  var toggleOpen = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toBool"])(accordion.dataset.toggleopen),
      defaultOpen = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toBool"])(accordion.dataset.defaultopen),
      allowSingle = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toBool"])(accordion.dataset.allowsingle),
      headings = Array.from(accordion.parentNode.querySelectorAll("#".concat(accordion.id, " > .").concat(headingClassName))),
      body = Array.from(accordion.parentNode.querySelectorAll("#".concat(accordion.id, " > .").concat(bodyClassName)));
  var idLinked = false;

  if (!(allowSingle || headings.length > 1)) {
    /**
     * not enough content to accordion
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeClass"])(accordion, className, false);
    return;
  }
  /**
   * Set Iframe container to be scrollable if a tab accordion and is mobile
   */


  if (accordion.parentElement.className === 'tabs--accordion' && viewportWidth <= Object(_util__WEBPACK_IMPORTED_MODULE_11__["screenWidth"])('tablet')) {
    body.forEach(function (elem) {
      var iframe = elem.querySelector('iframe');

      if (iframe) {
        iframe.scrolling = 'auto';
        iframe.style.height = '70vh';
      }
    });
  }

  headings.forEach(function (heading) {
    var content = heading.nextElementSibling,
        button = buttonFromHeading(heading);
    content.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].labelledBy, heading.id);
    content.setAttribute('role', 'region');
    heading.replaceChild(button, heading.firstChild);
    setSection(heading, false);
    heading.nextElementSibling.dataset.closed = 'true';
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
  /**
   * Checks if hash ID is present in the URL then on page load it will open the corresponding accordordion
   */


  if (window.location.hash) {
    //finds accordion heading in URL
    var urlHash = window.location.hash;
    var heading = accordion.querySelector('' + urlHash + ''); // condition when hash in URL is of a 'always' accordion, regardless of viewport width

    if (heading) {
      // Wait for DOM to load before accessing selected accordion
      window.onload = function () {
        setSection(heading, true);
        heading.nextElementSibling.dataset.closed = 'false';
        zenscroll__WEBPACK_IMPORTED_MODULE_13___default.a.to(heading, scrollDuration);
      };
    } // determines if the hash is perhaps of an accordion which kicks in on smaller viewports, as part of a tabs / accordion pattern


    if (accordion.parentElement.className === 'tabs--accordion' && accordion.parentElement.querySelector('' + urlHash + '') && viewportWidth <= Object(_util__WEBPACK_IMPORTED_MODULE_11__["screenWidth"])('tablet')) {
      var hashConvert = urlHash.replace('tabs', 'accordion').replace('link', 'header'); // Wait for DOM to load before accessing selected accordion

      window.onload = function () {
        heading = accordion.parentElement.querySelector('' + hashConvert + '');
        setSection(heading, true);
        heading.nextElementSibling.dataset.closed = 'false';
        zenscroll__WEBPACK_IMPORTED_MODULE_13___default.a.to(heading, scrollDuration);
      };
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAccordion,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/add-class/add-class.js":
/*!*********************************************!*\
  !*** ./src/patterns/add-class/add-class.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Add class to element when it meets viewport intersection conditions.
 *
 * @module patterns/addClass/addClass
 * @author Web Development
 * @copyright City St George's, University of London 2023
 */
var className = 'add-class';
/**
 * Expected behaviour once intersection observer conditions are met. If sibling has 'data-add-class-sibling' data attribute, apply class to that element too.
 *
 * @param {Array} elements - Array of HTML elements meeting intersection conditions.
 */

function handleIntersect(elements) {
  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;

      if (element.intersectionRatio > 0) {
        element.target.classList.add('in-view');

        if (element.target.dataset.addClassSibling) {
          var siblings = element.target.parentNode.querySelectorAll('[data-add-class-sibling]');

          var _iterator2 = _createForOfIteratorHelper(siblings),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var sibling = _step2.value;
              sibling.classList.add('in-view');
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * Add 'in-view' class to element when it appears in viewport.
 *
 * @param {HTMLElement} addClass - An HTML element with the 'addClass' class.
 */


function launchAddClass(addClass) {
  ['load', 'scroll'].forEach(function (event) {
    return window.addEventListener(event, new IntersectionObserver(handleIntersect).observe(addClass), false);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAddClass,
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 *  Animates content section to fade in and upwards on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-section
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2019!
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 * Leading separator transition
 *
 * @module paint-layouts/case-study-transition-effects/leading-separator
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2019!
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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util */ "./src/util.js");






/**
 * Background slideup transition, Animates content to slide up on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-slideup
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2019!
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 * Image transition
 *
 * @module paint-layouts/case-study-transition-effects/banner-image
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2019!
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
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _action_on_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../action-on-scroll */ "./src/action-on-scroll.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util */ "./src/util.js");















var className = 'animate-number',
    DURATION = 1500; // set duration variable 1500 ms increase if want longer animation

/**
 *
 * find container containing the number
 *
 * @param {HTMLElement} element - html element to be animated
 * @return {HTMLElement} element - if element to be animated is found return it else return original element
 */

function findNumberContainer(widget) {
  var nested = widget.querySelector('.animate--number__number');
  return typeof nested !== 'undefined' && nested !== null ? nested : widget;
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
  var format = widget.dataset.animationNumberFormat;

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

    var runAnimation = function runAnimation(timestamp) {
      if (first) {
        startTime = timestamp;
        first = false;
      } // Updates dynamically from 0 (start) to 1 (finish)


      var progress = (timestamp - startTime) / DURATION,
          finish = progress >= 1,
          animationSpeed = finish ? 1 : 1 - Math.pow(1 - progress, 4); // The current number value as the animation runs

      var currentValue = isFloat ? animationSpeed * (value - startValue + startValue).toFixed(1) : null; // Restrict animated number to largest whole number; stops larger number appearing and then jumping down, e.g. 3.8% will animate to 3%, then finish on 3.8%, rather than displaying 4% and then dropping down to 3.8%

      isFloat ? currentValue = Math.floor(currentValue) : null;

      if (lastValue !== currentValue) {
        lastValue = currentValue;
        numberContainer.innerHTML = format === 'true' ? currentValue.toLocaleString('en-GB') // Append and format to GB, e.g. 4000 renders as 4,000
        : currentValue;
      }

      if (finish) {
        // Animation finished
        widget.classList.add('animate--number--complete'); // Check if final rendered number needs formatting

        numberContainer.innerHTML = parseInt(widget.dataset.animationNumberValue) >= 1000 && format === 'true' ? parseInt(widget.dataset.animationNumberValue).toLocaleString() // append and format to GB
        : widget.dataset.animationNumberValue;
      } else {
        // Repeat call requestAnimationFrame until finish is true
        window.requestAnimationFrame(runAnimation);
      }
    };
    /**
     * run requestAnimationFrame to repaint animation to screen
     */


    window.requestAnimationFrame(runAnimation);
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

  if (Object(_util__WEBPACK_IMPORTED_MODULE_12__["checkIntersectionObserver"])()) {
    lazyNumbers.forEach(function (lazyUnit) {
      initNumberAnimation(lazyUnit);
      /**
       * pass the element and function to actionOnScroll
       * to animate when element is intersecting
       */

      Object(_action_on_scroll__WEBPACK_IMPORTED_MODULE_11__["actionOnScroll"])(lazyUnit, runNumberAnimation);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: init,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/animation/svg-path-animation/svg-path-animation.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/animation/svg-path-animation/svg-path-animation.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);








/**
 * SVG path animation
 *
 * @module patterns/animation/svg path
 * @author adapted by Walter Reyneke <walter.reyneke@city.ac.uk> from CASS polaris
 * @copyright City St George's, University of London 2019!
 */
var className = 'animate-svg';
/**
 * This animation targets SVG paths. When in scrolling distance the path will animated from a starting position of zero till the full length of the path is shown.
 *
 * @param {class} animateSvg - Selects a parent class which will contain the paths targetted for animation
 *
 */

function initSvgPathAnimation(animateSvg) {
  var viewPortHeight = window.innerHeight; // calculates viewport height

  window.addEventListener('DOMContentLoaded', function () {
    var paths = animateSvg.querySelectorAll('.animate--svg-path'); // prepares the animation

    paths.forEach(function (path) {
      var length = path.getTotalLength() + 'px';
      path.classList.add('animate--svg-path--jsinit');
      path.style.strokeDashoffset = length;
      path.style.strokeDasharray = "".concat(length, ", ").concat(length);
    }); // starts animation when in scrolling view

    window.addEventListener('scroll', function () {
      var elemOffset = animateSvg.offsetTop;
      var screenPos = window.pageYOffset; // calculates scroll position

      if (screenPos > elemOffset - viewPortHeight + 30) {
        paths.forEach(function (path) {
          !path.classList.contains('animate--svg-path--jsrun') ? path.classList.add('animate--svg-path--jsrun') : null;
          setTimeout(function () {
            path.style.strokeDashoffset = 0;
          }, 100);
        });
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: initSvgPathAnimation,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/back-to-top/back-to-top.js":
/*!*************************************************!*\
  !*** ./src/patterns/back-to-top/back-to-top.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Back To Top Link Scroll
 *
 * @module patterns/back-to-top/back-to-top
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2019
 */

var className = 'back-to-top',
    viewPortHeight = window.innerHeight;
/**
 * Back to top anchor anchor only appears on long pages and when you have scrolled down long enough
 * Please change the parameter below to alter the behaviour of the back to top anchor.
 *
 * scrollPos - sets how many viewport heights you need to scroll down for back to top to appear. 1 = 1 viewport height
 */

var scrollPos = 2;
/**
 *
 * @param {HTMLElement} - selects back to top parent element, which is used in return to select children elements
 */

function initBacktoTop(backToTop) {
  var backToTopAnchor = backToTop.querySelectorAll('a')[0];
  window.addEventListener('load', function () {
    backToTop.querySelector('.back-to-top__button__arrow').appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createHTMLElement"])('span', [{
      label: 'content',
      val: 'top'
    }, {
      label: 'class',
      val: 'back-to-top__button__arrow__label'
    }])); // adds inner button label for if javascript enabled

    backToTop.setAttribute('hidden', 'true');
    window.addEventListener('scroll', function () {
      updateProgress(backToTopAnchor);
      showAnchor(backToTop);
    }, false);
  });
}
/**
 *  Anchor fading behaviour
 *
 * @param {HTMLElement} backToTop - back to top element.
 */


function showAnchor(backToTop) {
  var positionOnScreen = window.pageYOffset;

  if (positionOnScreen > viewPortHeight * scrollPos) {
    // shows anchor when scrolled down far enough - see parameters
    backToTop.dataset.docked = 'false';
    backToTop.removeAttribute('hidden');
  } else if (positionOnScreen < 200) {
    // hides anchor when close to top of the page
    backToTop.setAttribute('hidden', 'true');
    backToTop.dataset.docked = 'false';
  }
}
/**
 *  Progress meter
 *
 * @param {HTMLElement} backToTopAnchor - The anchor of the back to top element.
 */


function updateProgress(backToTopAnchor) {
  // Setting up SVG animation
  var progressPath = backToTopAnchor.querySelector('path'),
      pathLength = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength; // Calculate values

  var scroll = window.pageYOffset,
      height = document.documentElement.scrollHeight - window.innerHeight,
      progress = pathLength - scroll * pathLength / height; // Updates progress bar

  progressPath.style.strokeDashoffset = progress;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: initBacktoTop,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/charts/charts.js":
/*!***************************************!*\
  !*** ./src/patterns/charts/charts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Horizontal bar chart with proportional segments.
 *
 * @module patterns/chart/chart
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */
var className = 'chart--bar--horizontal';
var collectionMaxValue;
/**
 * Find each chart collection's maximum bar value and set as a global variable.
 * This will be used to benchmark the collection's constituent charts' relative width against.
 *
 * Example scenario: Apple yields per year
 * Bar 1 (Year 1) = 100 apples
 * Bar 2 (Year 2) = 200 apples
 * Bar 3 (Year 3) =  50 apples
 *
 * Result: Chart collection maximum = 200.
 *
 * @param {HTMLElement} chartCollection - A collection of horizontal bar charts.
 */

function setCollectionMaxValue(chartCollection) {
  var charts = chartCollection.querySelectorAll('.chart--bar--horizontal__collection'),
      singleBarTotals = [];

  var _iterator = _createForOfIteratorHelper(charts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chart = _step.value;
      var singleBarTotal = chart.querySelector('[data-bar-total]');
      singleBarTotal = parseInt(singleBarTotal.dataset.barTotal);
      singleBarTotals.push(singleBarTotal);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  collectionMaxValue = Math.max.apply(Math, singleBarTotals);
}
/**
 * Build bar charts with segment values.
 *
 * @param {HTMLElement} chartCollection - A collection of horizontal bar charts.
 */


function buildBars(chartCollection) {
  var charts = chartCollection.querySelectorAll('.chart--bar--horizontal__collection'),
      segmentWidths = [],
      chartCollectionUnits = chartCollection.dataset.units;

  var _iterator2 = _createForOfIteratorHelper(charts),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var chart = _step2.value;
      var singleBarTotalEls = chart.querySelector('[data-bar-total]'),
          singleBarSegmentEls = chart.querySelector('[data-bar-segment]'),
          singleBarTotal = parseInt(singleBarTotalEls.dataset.barTotal),
          singleBarSegment = parseInt(singleBarSegmentEls.dataset.barSegment);
      /**
       * Set bar widths relative to collection maximum value. Display as
       * numbers (0-100) to allow CSS to set percentage widths.
       *
       * Example: Apple yields per year (maximum 200)
       * Bar 1 (Year 1) => (100/200 * 100) =  50
       * Bar 2 (Year 2) => (200/200 * 100) = 100
       * Bar 3 (Year 3) => ( 50/200 * 100) =  25
       */

      var barWidth = Math.round(singleBarTotal / collectionMaxValue * 100),
          segmentWidth = Math.round(singleBarSegment / singleBarTotal * 100);
      chart.setAttribute('data-bar-width', "".concat(barWidth));
      /**
       * Create data attributes for:
       *   1. Segment width proportional to bar
       *   2. Segment width relative to collection width
       *
       * Display as numbers (0-100) to allow CSS to set percentage widths.
       *
       * Example: Variety of apples as part of overall yield (max 200).
       * Bar 1
       *      Braeburn: 50, total yield: 100
       *      Segment relative to bar => (50/100) * 100 = 50
       *      Segment relative to collection => (50/200) * 100 = 25
       * Bar 2
       *      Braeburn: 40, total yield: 200
       *      Segment relative to bar => (40/200) * 100 = 20
       *      Segment relative to collection => (40/200) * 100 = 20
       * Bar 3
       *      Braeburn: 5, total yield: 50
       *      Segment relative to bar => (5/50) * 100 = 10
       *      Segment relative to collection => (5/200) * 100 = 2.5
       */

      var relativeWidth = Math.round(segmentWidth * barWidth / 100);
      singleBarSegmentEls.setAttribute('data-relative-width', "".concat(relativeWidth));
      var segments = chart.querySelectorAll('[data-bar-segment]');

      var _iterator3 = _createForOfIteratorHelper(segments),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var segment = _step3.value;
          var segmentRelativeWidths = parseInt(segment.dataset.relativeWidth);
          segmentWidths.push(segmentRelativeWidths);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      singleBarSegmentEls.setAttribute('data-segment-width', "".concat(segmentWidth));
    }
    /**
     * Apply units label to segment with largest relative width, not just a segment's
     * absolute value.
     *
     * Example:
     * Bar 1 => Segment width: 50%, chart width: 50%, relative layout width: 25%
     * Bar 2 => Segment width: 30%, chart width: 90%, relative layout width: 27%
     *
     * Result: Units label added to segment in Bar 2.
     */

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var largestSegmentWidth = Math.max.apply(Math, segmentWidths),
      widestSegment = chartCollection.querySelector("[data-relative-width=\"".concat(largestSegmentWidth, "\"]")),
      widestSegmentLabel = widestSegment.querySelectorAll('span'); // Only append units once, even if segment widths are equal on multiple bars

  widestSegmentLabel[0].append(" ".concat(chartCollectionUnits));
}

function launchChart(chartCollection) {
  setCollectionMaxValue(chartCollection);
  buildBars(chartCollection);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchChart,
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/util.js");








/**
 * Warning removal
 *
 * @module patterns/cms-editor-warning/cms-editor-warning
 * @author Web Development
 * @copyright City St George's, University of London 2018
 */

var className = 'cms-editor',
    warningClass = className + '-warning',
    buttonClass = warningClass + '-remover',
    wrapperClass = 'wrapper--' + buttonClass;
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
    var button = createButton(),
        wrapper = document.createElement('div');
    button.addEventListener('click', function () {
      warnings.forEach(function (w) {
        return w.parentNode.removeChild(w);
      });
      button.parentNode.removeChild(button);
      Object(_util__WEBPACK_IMPORTED_MODULE_5__["removeClass"])(elem, className, false);
    }, true);
    wrapper.className = wrapperClass;
    wrapper.appendChild(button);
    document.querySelector('body').insertBefore(wrapper, document.querySelector('.global-footer'));
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchRemover,
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");











/**
 * Devcorate
 *
 * @module patterns/devcorate/devcorate
 * @author Web Development
 * @copyright City St George's, University of London 2018
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
      var parameters = anchor.search ? Object(_util__WEBPACK_IMPORTED_MODULE_8__["parametersToObject"])(anchor.search) : {};
      parameters[param] = value;
      anchor.href = "".concat(anchor.origin).concat(anchor.pathname).concat(Object(_util__WEBPACK_IMPORTED_MODULE_8__["objectToParameters"])(parameters)).concat(anchor.hash);
    }
  });
}

/***/ }),

/***/ "./src/patterns/dropdown-filter/dropdown-filter.js":
/*!*********************************************************!*\
  !*** ./src/patterns/dropdown-filter/dropdown-filter.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















/**
 * Dropdown filter
 *
 * @module patterns/dropdown-filter/dropdown-filter
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */
var className = 'dropdown-filter';
var dataGroupElement = '';
var showAll = '';
/**
 * Entry function: loops through and hides list items, sets up event listener on
 * child select box
 *
 * @param {HTMLElement} element: the dropdown div containing all elements
 */

function prepareDropdown(element) {
  // Only get direct children
  var listItems = element.querySelectorAll('ul.data-group > li'),
      firstItemVisible = element.dataset.firstItemShow; // Check if all items should be displayed on load

  showAll = element.dataset.displayAll; // Hide list items

  hideListItems(listItems, firstItemVisible, showAll); // Insert the select box to toggle items

  insertSelect(listItems, element, firstItemVisible, showAll); // Display list items on select change

  var select = element.querySelector('.dropdown-filter__select');
  select.addEventListener('change', selectChange);
}
/**
 * Hide list items: both functions require all list items to be hidden.
 * Ths function takes care of this
 *
 * @param {HTMLElements} items - The list of items to hide.
 * @param {boolean} firstItemVisible - Whether first item should be visible on load.
 * @param {boolean} showAll - Option to display all items.
 */


function hideListItems(items, firstItemVisible, showAll) {
  // Check if dropdown should show first item
  if (firstItemVisible === 'true' && showAll === 'false') {
    var itemsArray = Array.from(items);
    itemsArray[0].setAttribute('data-hidden', 'false');

    for (var i = 1; i < itemsArray.length; i++) {
      itemsArray[i].setAttribute('data-hidden', 'true');
    }
  } else if (firstItemVisible === 'false' && showAll === 'false') {
    items.forEach(function (item) {
      item.setAttribute('data-hidden', 'true');
    });
  } else if (showAll === 'true') {
    items.forEach(function (item) {
      item.setAttribute('data-hidden', 'false');
    });
  } // First item automatically visible is only relevant to component load. Other behaviour is applied when interacting with component.


  firstItemVisible = 'false';
}
/**
 * Insert select: build and add the select box to source
 *
 * @param {HTMLElements} items - The list of content for the select options.
 * @param {HTMLElement} parentElement - The element where we need to insert the select.
 * @param {boolean} firstItemVisible - Whether first item should be visible on load.
 */


function insertSelect(items, parentElement, firstItemVisible) {
  dataGroupElement = parentElement.querySelector('ul.data-group');
  var selectBox = document.createElement('select'),
      selectWrapper = parentElement.querySelector('.wrapper--dropdown-filter__select'),
      labelFor = parentElement.dataset.labelFor,
      labelValue = parentElement.dataset.labelValue,
      labelEl = document.createElement('label');
  labelEl.textContent = labelValue;
  labelEl.setAttribute('for', labelFor);
  parentElement.dataset.labelShow === 'false' ? labelEl.className = 'sr-only' : null;
  selectBox.className = 'dropdown-filter__select';
  selectBox.setAttribute('id', labelFor);
  selectBox.setAttribute('name', labelFor);
  selectWrapper.append(labelEl, selectBox); // Add default select text if filter doesn't have show all enabled

  if (parentElement.dataset.displayAll === 'false') {
    var noSelection = document.createElement('option');
    noSelection.text = parentElement.getAttribute('data-text');
    noSelection.setAttribute('value', 'no-selection');
    selectBox.appendChild(noSelection);
  }

  var defaultItemOverride, lastItemOverride; // Sort by dataset.value to display list alphabetically

  if (parentElement.dataset.alphabetical === 'true') {
    items = Array.from(items).sort(function (a, b) {
      return a.dataset.value < b.dataset.value ? -1 : a.dataset.value > b.dataset.value ? 1 : 0;
    });
  } else {
    items = _toConsumableArray(items);
  } // Update output list items to correct order


  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      dataGroupElement.append(item);
    } // Find items with first/last position overrides

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(items),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _item = _step2.value;
      _item.dataset.first === 'true' ? defaultItemOverride = _item : null;
      _item.dataset.last === 'true' ? lastItemOverride = _item : null;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var itemsLength = items.length; // Display show all option at top of dropdown if pattern has this configuration option set as true

  if (parentElement.dataset.displayAll === 'true') {
    var showAllOption = document.createElement('li');
    showAllOption.dataset.name = "All ".concat(parentElement.dataset.units);
    showAllOption.dataset.value = 'show-all';
    items.splice(0, 0, showAllOption);
  } // Remove item with dataset.first='true' from original position in array


  var defaultItemOverridePosition = items.indexOf(defaultItemOverride); // Remove item with dataset.last='true' from original position in array

  if (lastItemOverride) {
    var lastPositionOriginal = items.indexOf(lastItemOverride);
    items.splice(lastPositionOriginal, 1); // If custom last option exists, place as last selectable option

    items.splice(itemsLength, 0, lastItemOverride);
  } // Iterate over each item and create/append select option


  Array.from(items).forEach(function (item) {
    var dataValue = item.dataset.value,
        dataName = item.dataset.name,
        option = document.createElement('option');
    option.value = dataValue;
    option.text = dataName;
    selectBox.appendChild(option);
  }); // Set first item in list as selected

  if (firstItemVisible === 'true' && showAll === 'false') {
    var options = parentElement.querySelectorAll('option');

    if (defaultItemOverride) {
      if (lastItemOverride) {
        // Last item override exists
        if (parentElement.dataset.alphabetical === 'true') {
          options[defaultItemOverridePosition].setAttribute('selected', 'selected');
        } else {
          options[defaultItemOverridePosition + 1].setAttribute('selected', 'selected');
        }
      } else {
        // Default show & no last item override
        options[defaultItemOverridePosition + 1].setAttribute('selected', 'selected');
      }
    }
  }
}
/**
 * Select change: respond to select change event
 *
 * @param {event} e: The select change event.
 */


function selectChange(e) {
  // Get list items grouping
  var dropdownFilter = e.target.closest('.dropdown-filter'),
      dataGroup = dropdownFilter.querySelector('.data-group'); // Get direct children list items

  var listItems = dataGroup.querySelectorAll('ul.data-group > li');

  var _iterator3 = _createForOfIteratorHelper(listItems),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var listItem = _step3.value;
      listItem.removeAttribute('data-hidden');
    } // Hide all items before displaying chosen item

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  showAll = 'false';
  hideListItems(listItems, showAll); // Get the list item corresponding to the select value chosen

  var targetListItem = dataGroup.querySelector('li.data-group__item[data-value=' + e.target.value + ']'); // Get not selected list items

  var otherListItems = dataGroup.querySelectorAll('li.data-group__item:not([data-value=' + e.target.value + '])'); // Show/hide content based on pattern's configuration options

  if (e.target.value !== 'show-all' && e.srcElement.selectedIndex !== 0) {
    targetListItem.removeAttribute('data-hidden');

    var _iterator4 = _createForOfIteratorHelper(otherListItems),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var o = _step4.value;
        o.setAttribute('data-hidden', 'true');
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  } else if (e.target.value !== 'show-all' && e.srcElement.selectedIndex === 0) {
    var _iterator5 = _createForOfIteratorHelper(otherListItems),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _o = _step5.value;

        _o.setAttribute('data-hidden', 'true');
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: prepareDropdown,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/dropdown-menu/dropdown-menu.js":
/*!*****************************************************!*\
  !*** ./src/patterns/dropdown-menu/dropdown-menu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);









function toggleMenu(el, button) {
  var container = el.closest('.dd-menu__container'); // Close all other dropdowns in the container

  container.querySelectorAll('.dd-menu--open').forEach(function (item) {
    if (item !== el) {
      closeMenu(item);
    }
  }); // Toggle the clicked menu

  var isOpen = el.classList.toggle('dd-menu--open');
  button.setAttribute('aria-expanded', isOpen); // Find and update the screen reader text

  var srText = button.querySelector('.dd-menu__toggle-state');

  if (srText) {
    srText.textContent = isOpen ? 'Close ' : 'Open ';
  }
}

function closeMenu(el) {
  if (!el) return; // Prevent errors if el is null

  var button = el.querySelector('.dd-menu__toggle');
  if (!button) return;
  el.classList.remove('dd-menu--open');
  button.setAttribute('aria-expanded', 'false');
}

function handleOutsideInteraction(event, el) {
  if (!el.contains(event.target)) {
    closeMenu(el);
  }
}

function handleKeyboardNavigation(event, button, submenu) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    button.click();
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    var firstLink = submenu.querySelector('a');
    if (firstLink) firstLink.focus();
  } else if (event.key === 'Escape') {
    // Allow Escape to close menu when focus is still on the parent button
    closeMenu(button.closest('.dd-menu'));
    button.focus();
  }
}

function handleSubmenuNavigation(event, submenu, button) {
  var focusableItems = Array.from(submenu.querySelectorAll('a'));
  var currentIndex = focusableItems.indexOf(document.activeElement);

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    focusableItems[(currentIndex + 1) % focusableItems.length].focus();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    focusableItems[(currentIndex - 1 + focusableItems.length) % focusableItems.length].focus();
  } else if (event.key === 'Escape') {
    // Close menu even if focus is on any submenu item
    closeMenu(submenu.closest('.dd-menu'));
    button.focus();
  }
}

function launch(el) {
  var button = el.querySelector('.dd-menu__toggle');
  var submenu = el.querySelector('.dd-menu__sub');
  if (!button || !submenu) return;
  button.addEventListener('click', function (event) {
    toggleMenu(el, button);
    event.stopPropagation();
  });
  document.addEventListener('click', function (event) {
    return handleOutsideInteraction(event, el);
  });
  document.addEventListener('focusin', function (event) {
    return handleOutsideInteraction(event, el);
  });
  button.addEventListener('keydown', function (event) {
    return handleKeyboardNavigation(event, button, submenu);
  });
  submenu.addEventListener('keydown', function (event) {
    return handleSubmenuNavigation(event, submenu, button);
  });
}

var className = 'dd-menu';
/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launch,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/event-form/event-form.js":
/*!***********************************************!*\
  !*** ./src/patterns/event-form/event-form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");




/**
 * @module patterns/event-form/event-form
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */



var oneSecond = 1000,
    tenthOfASecond = 100,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_2__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = true;
var className = 'wrapper--event__info--formassembly';

function calculateFormBodyHeight(form) {
  form.dataset.open = true;
  var height = form.offsetHeight + 'px';
  form.dataset.open = false;
  return height;
}

function toggleForm(form, button, buttonText, closeButtonText) {
  var opening = !Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(form.dataset.open),
      doneTarget = opening ? form.querySelector('.event__formassembly__form__heading') : button;

  if (opening) {
    // Calclulate and save how big we're transitioning to
    var formHeight = calculateFormBodyHeight(form);
    form.addEventListener('transitionend', function openForm() {
      form.removeEventListener('transitionend', openForm, true);
      form.style = null;

      if (scrollTo && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["verticallyInWindow"])(doneTarget)) {
        zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(doneTarget, scrollDuration);
      }
    }, true); // Starting height is 0

    form.style.height = '0px';
    form.dataset.open = true; // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      form.style.height = formHeight;
    }, tenthOfASecond);
    button.querySelector('span').innerText = closeButtonText;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].expanded, true);
    form.focus();
  } else {
    // Starting height is the current height
    form.style.height = form.offsetHeight + 'px';
    form.addEventListener('transitionend', function closeForm() {
      form.removeEventListener('transitionend', closeForm, true);
      form.style = null;
      form.dataset.open = false;

      if (scrollTo && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["verticallyInWindow"])(doneTarget)) {
        zenscroll__WEBPACK_IMPORTED_MODULE_1___default.a.to(doneTarget, scrollDuration);
      }
    }, true); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(function () {
      form.style.height = '0px';
    }, tenthOfASecond);
    button.querySelector('span').innerText = buttonText;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].expanded, false);
    button.focus();
  }
}

function launchFormAssemblyForm(eventInfo) {
  var link = eventInfo.querySelector('.event__formassembly__button'),
      form = eventInfo.querySelector('.event__formassembly__form'),
      formActual = eventInfo.querySelector('.event__formassembly__form > .formassembly-form'),
      buttonText = link.innerText,
      button = document.createElement('button'),
      buttonSpan = document.createElement('span'),
      closeButtonText = 'Close registration form',
      closeButton = document.createElement('button'),
      closeButtonSpan = document.createElement('span'),
      closeButtonIcon = document.createElement('span'),
      closeButtonEnd = document.createElement('button'),
      closeButtonEndSpan = document.createElement('span'),
      closeButtonEndIcon = document.createElement('span'),
      heading = eventInfo.querySelector('.event__formassembly__form__heading'),
      wrapperHeading = document.createElement('div');
  buttonSpan.appendChild(document.createTextNode(buttonText));
  button.setAttribute('type', 'button');
  button.className = 'event__formassembly__button';
  button.appendChild(buttonSpan);
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].expanded, false);
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].owns, 'event__formassembly__form');
  closeButtonSpan.appendChild(document.createTextNode(closeButtonText));
  closeButtonSpan.className = 'event__formassembly__form__close-button__text';
  closeButtonIcon.className = 'fa-sharp fa-solid fa-xmark icon';
  closeButton.setAttribute('type', 'button');
  closeButton.className = 'event__formassembly__form__close-button';
  closeButton.appendChild(closeButtonIcon);
  closeButton.appendChild(closeButtonSpan);
  closeButtonEndSpan.appendChild(document.createTextNode(closeButtonText));
  closeButtonEndSpan.className = 'event__formassembly__form__close-button__text';
  closeButtonEndIcon.className = 'fa-sharp fa-solid fa-xmark icon';
  closeButtonEnd.setAttribute('type', 'button');
  closeButtonEnd.className = 'event__formassembly__form__close-button';
  closeButtonEnd.appendChild(closeButtonEndIcon);
  closeButtonEnd.appendChild(closeButtonEndSpan);
  button.addEventListener('click', function () {
    return toggleForm(form, button, buttonText, closeButtonText);
  }, true);
  closeButton.addEventListener('click', function () {
    return toggleForm(form, button, buttonText, closeButtonText);
  }, true);
  closeButtonEnd.addEventListener('click', function () {
    return toggleForm(form, button, buttonText, closeButtonText);
  }, true);
  form.setAttribute('tabindex', -1);
  form.dataset.open = false;
  wrapperHeading.className = 'wrapper--event__formassembly__form__heading';
  wrapperHeading.appendChild(heading);
  wrapperHeading.appendChild(closeButton);
  form.insertBefore(wrapperHeading, formActual);
  form.appendChild(closeButtonEnd);
  link.parentNode.replaceChild(button, link);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchFormAssemblyForm,
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");








/**
 * Feedback
 *
 * @module patterns/feedback/feedback
 * @author Web Development
 * @copyright City St George's, University of London 2018
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
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["gaEvent"])('pageFeedback', 'Page feedback', action, window.location.toString(), value, true);
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
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(message, [messagePrefix, link, messageSuffix]);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].live, 'polite');
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
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_5__["default"].live, 'polite');
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
      buttonWrapper = document.createElement('div'),
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
  buttonWrapper.className = 'feedback__direct__buttons';
  questionLegend.appendChild(questionText);
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(buttonWrapper, [yesButton, noButton]);
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(directFeedbackFieldset, [questionLegend, buttonWrapper]);
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

/***/ "./src/patterns/find-us/find-us-v25.js":
/*!*********************************************!*\
  !*** ./src/patterns/find-us/find-us-v25.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util */ "./src/util.js");


















/**
 * Find us, campus map page using Google map API
 *
 * @module patterns/find-us/find-us
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2025
 */

var className = 'campus-map-v25';
var lat, lng;
var campusId;
var campusOverlay;
var campusZoom;
var dataSrc;
var campusLocConfig = {
  498711: {
    // clerkenwell
    lat: '51.527761',
    lng: '-0.103283',
    campusZoom: 17,
    dataSrc: '/feed/locations/campus-map-locations-v25-clerkenwell/_nocache',
    overlay: [{
      lat: 51.527261,
      lng: -0.107649
    }, {
      lat: 51.527333,
      lng: -0.106411
    }, {
      lat: 51.527737,
      lng: -0.104968
    }, {
      lat: 51.527824,
      lng: -0.104421
    }, {
      lat: 51.528418,
      lng: -0.101159
    }, {
      lat: 51.52784,
      lng: -0.100794
    }, {
      lat: 51.52784,
      lng: -0.100794
    }, {
      lat: 51.52759,
      lng: -0.101888
    }, {
      lat: 51.52768,
      lng: -0.102484
    }, {
      lat: 51.527624,
      lng: -0.102693
    }, {
      lat: 51.5272,
      lng: -0.103048
    }, {
      lat: 51.526903,
      lng: -0.104104
    }, {
      lat: 51.52771,
      lng: -0.104635
    }, {
      lat: 51.526669,
      lng: -0.105284
    }, {
      lat: 51.52725,
      lng: -0.106421
    }, {
      lat: 51.526689,
      lng: -0.107671
    }]
  },
  763053: {
    // finsbury
    lat: '51.5208744',
    lng: '-0.0852537',
    campusZoom: 17,
    dataSrc: '/feed/locations/campus-map-locations-v25-finsbury/_nocache',
    overlay: [[{
      lat: 51.520858774620955,
      lng: -0.08556863723688905
    }, {
      lat: 51.52083653205823,
      lng: -0.08531154647877388
    }, {
      lat: 51.520778361337925,
      lng: -0.08532529531463161
    }, {
      lat: 51.52075440778178,
      lng: -0.0851438198842833
    }, {
      lat: 51.520585883979244,
      lng: -0.08521118813542727
    }, {
      lat: 51.52059786108497,
      lng: -0.08538028971282675
    }, {
      lat: 51.52048665235475,
      lng: -0.08540641209058407
    }, {
      lat: 51.52049092985349,
      lng: -0.08547652721697489
    }, {
      lat: 51.52044901271319,
      lng: -0.08548890077010746
    }, {
      lat: 51.5204592785169,
      lng: -0.08565662701426627
    }], [{
      lat: 51.52226476474981,
      lng: -0.09015529755665408
    }, {
      lat: 51.52224363127885,
      lng: -0.08992989274911023
    }, {
      lat: 51.52185123063815,
      lng: -0.08993395734466093
    }, {
      lat: 51.52186711537125,
      lng: -0.09021479068592209
    }, {
      lat: 51.52193065682891,
      lng: -0.09020628113292894
    }, {
      lat: 51.521966603858395,
      lng: -0.09080856634806456
    }, {
      lat: 51.521966603858395,
      lng: -0.09080856634806456
    }, {
      lat: 51.52219047244918,
      lng: -0.09079029525013968
    }, {
      lat: 51.522260598763985,
      lng: -0.09022127815580626
    }]]
  },
  795583: {
    // tooting
    lat: '51.4262478',
    lng: '-0.177115',
    campusZoom: 16,
    dataSrc: '/feed/locations/campus-map-locations-v25-tooting/_nocache',
    overlay: [{
      lat: 51.42871771131454,
      lng: -0.17409794550102456
    }, {
      lat: 51.427333969551015,
      lng: -0.17154881456144014
    }, {
      lat: 51.42719674940197,
      lng: -0.17154883345598806
    }, {
      lat: 51.42652213570394,
      lng: -0.17261262254587703
    }, {
      lat: 51.425973297007815,
      lng: -0.17363968682340267
    }, {
      lat: 51.42566453304997,
      lng: -0.1731445558491159
    }, {
      lat: 51.424075098238916,
      lng: -0.1740433018916375
    }, {
      lat: 51.42472694955013,
      lng: -0.17646397027100444
    }, {
      lat: 51.42497852622366,
      lng: -0.1772525339184661
    }, {
      lat: 51.42565319025514,
      lng: -0.1784445684661768
    }, {
      lat: 51.426545111724465,
      lng: -0.17923317817964338
    }, {
      lat: 51.42771148002197,
      lng: -0.17639052473001537
    }, {
      lat: 51.428054534331324,
      lng: -0.17688569618860447
    }, {
      lat: 51.428260360024545,
      lng: -0.1764455280204006
    }, {
      lat: 51.42773434010492,
      lng: -0.17571194556875333
    }]
  }
};
var locationCounter = {
  building: 0,
  'student-service': 0,
  library: 0,
  'lecture-theatre': 0,
  'residential-hall': 0
}; // var to check if needing to remove the map search incase there are no locations inside the accordions

var showSearch = false;

function createMap(mapContainer) {
  var getCampus = mapContainer.getAttribute('data-campus');
  campusId = getCampus ? getCampus : '498711'; // set to Clerkenwell for default

  lat = campusLocConfig[campusId]['lat'];
  lng = campusLocConfig[campusId]['lng'];
  campusOverlay = campusLocConfig[campusId]['overlay'];
  campusZoom = campusLocConfig[campusId]['campusZoom'];
  dataSrc = campusLocConfig[campusId]['dataSrc']; // == PROPERTIES ==

  var
  /**
   * Create a LatLng object containing the coordinate for the center of the map
   * @let {Object}
   */
  latlng = new google.maps.LatLng(lat, lng),

  /**
   * an object literal containing the properties we want to pass to the map
   * @let {Object}
   */
  mapOptions = {
    zoom: campusZoom,
    key: 'AIzaSyBvg6r1x2ZRKPAsceVaKPlg6tO20QiBDpo',
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true
  },

  /**
   * Call the constructor, thereby initializing the map  as soon as possible
   * @let {Object}: Google maps Map object
   */
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
      searchBox = document.getElementById('map-search'),

  /**
   * initlaise infoWindow
   * @let {Object}: Google maps InfoWindow object
   */
  infoWindow = new google.maps.InfoWindow({
    maxWidth: 400
  }),

  /**
   * cityLayers object literal containing skeleton options for City related things - parsing the xml file adds to this
   * it is where we keep arrays of markers to use when clearing/setting things on the map
   * @let {Object}:
   */
  cityLayers = {
    // array to hold each google marker object - for each University location
    bigMarkersArray: [],
    //arrray to hold building google marker objects - they never got removed from map
    bigBuildingsArray: [],
    buildingsObj: {},
    buildings: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    libraries: {
      toggler: document.getElementById('toggle-libraries'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    accommodation: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    lectureTheatres: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    studentCentre: {
      toggler: document.getElementById('toggle-studentCentre'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    sports: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    computerLabs: {
      toggler: document.getElementById('toggle-computerLabs'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    }
  }; // == METHODS ==

  /**
   * Removes the overlays from the map, but keeps them in the array
   * @parameter {Array} markersArray: a collections of markers
   * @return {Undefined}
   */

  function clearOverlays(markersArray) {
    var i;

    if (markersArray) {
      for (i in markersArray) {
        if (Object.prototype.hasOwnProperty.call(markersArray, i) && typeof markersArray[i] !== 'function') {
          markersArray[i].setMap(null);
        }
      }
    }
  }
  /**
   * the hashChange handler - listens for hash changes and then does cool stuff
   * @parameter {string} id of building: the window hashchange event
   * @return {Undefined}
   */


  var marker;

  function hashChange(id) {
    // Trigger - to show relevant campus marker on initial load
    if (id === '') {
      id = campusId;
    } //loop over  bigBuildingsArray to find marker


    for (var building in cityLayers.buildingsObj) {
      if (id === building) {
        var found = cityLayers.buildingsObj[building]; // clears map from previous markers

        if (marker) {
          marker.setMap(null);
        } // allocates new marker info to variable


        marker = found; //open infoWindow for this marker
        //clear all overlays first

        clearOverlays(cityLayers.bigMarkersArray); //make marker visible

        marker.setVisible(true); //set infoWindow content

        infoWindow.setContent(marker.infoHtml); //open the infoWindow centered on the marker

        infoWindow.open(map, marker); //pan map to marker position

        map.panTo(marker.position); //add marker to map

        marker.setMap(map); // checks if location is an campus, if so then it would activate the overlay for that campus

        if (id in campusLocConfig) {
          // seems like a small delay is needed sometimes to apply overlay
          setTimeout(function () {
            showOverlay(campusLocConfig[id]['overlay']);
          }, '100');
        } else {
          // else as it is normal location, then removes overlay if present
          initialMapOverlay.setMap(null);
        }

        break;
      } else {
        // else as it is normal location, then removes overlay if present
        initialMapOverlay.setMap(null);
      }
    }
  }
  /**
   * the updateHash called when a marker, infoWindow or marker link is clicked - updates hash
   * @parameter {Object || String} caller: the marker, marker link or infoWindow firing the event
   * @return {Undefined}
   */


  function updateHash(caller) {
    var callerId = '';

    if (!caller) {
      return;
    }

    if (typeof caller === 'string') {
      //a marker link was clicked
      callerId = caller; // state[callerId] = 1;
    } else if (Object.prototype.hasOwnProperty.call(caller, 'id')) {
      //a marker was clicked
      callerId = caller.id; //state[callerId] = 1;
    } else {
      //an infoWindow was closed
      callerId = 0;
    }

    location.hash = callerId;
    hashChange(callerId);
  }
  /**
   *  creates individual markers, builds a corresponding filter item, binds a infoWindow to marker with html
   * and populates accordions
   * @parameter {Object} markerConfig: an object containing letious marker configuration options
   * @return {Object} marker - google maps marker
   */


  function createMarker(markerConfig) {
    var listId = document.getElementById(markerConfig.category),
        // selects accordion category
    listItem,
        marker,
        anchor,
        html = ''; // build html for infoWindow
    // check to see if there's custom URL first

    if (markerConfig.urlCustom) {
      html = '<div id="info-window" style="min-height: 60px;"><h3><a href="' + markerConfig.urlCustom + '">' + markerConfig.name + '</a></h3>';
    } else {
      // if has asset has a link
      if (markerConfig.linkHref.length !== 0) {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + '</h3>';
      } else {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + '</h3>';
      }
    } // calculates minutes label as singular or plurar


    function minutesFormat() {
      if (parseInt(markerConfig.walkingDistance) > 1) {
        return ' minutes';
      } else {
        return ' minute';
      }
    } // add description and close div element
    // html += markerConfig.description.replace(/\<h2/g, '<h4').replace(/\h2>/g, 'h4>')  + '</div>';


    markerConfig.buildingPrefix ? html += '<p>Rooms beginning: ' + markerConfig.buildingPrefix + '</p>' : null;
    html += '<p>';
    markerConfig.roomNumber ? html += 'Room ' + markerConfig.roomNumber + '</br>' : null;
    markerConfig.floor ? html += 'Floor ' + markerConfig.floor + '</br>' : null;
    markerConfig.building ? html += markerConfig.building + '</br>' : null;
    markerConfig.buildingAdditionalInfo ? html += markerConfig.buildingAdditionalInfo + '</br>' : null;
    markerConfig.street1 ? html += markerConfig.street1 + '</br>' : null;
    markerConfig.street2 ? html += markerConfig.street2 + '</br>' : null;
    markerConfig.city ? html += markerConfig.city + '</br>' : null;
    markerConfig.postcode ? html += markerConfig.postcode + '</br>' : null;
    html += '</p>';
    html += '<p>';
    markerConfig.campus ? html += markerConfig.campus + '</br>' : null;
    html += '</p>';
    markerConfig.supports ? html += '<p>' + markerConfig.supports + '</p>' : null;
    markerConfig.walkingDistance ? html += '<p>Walking distance to campus: </br>' + markerConfig.walkingDistance + minutesFormat(markerConfig.walkingDistance) + '</p>' : null;
    markerConfig.entrance ? html += '<p>' + markerConfig.entrance + '</p>' : null;
    markerConfig.accessibility ? html += '<p>' + markerConfig.accessibility + '</p>' : null; // Build opening hours from arrays

    if (markerConfig.openingHours.length > 0) {
      var daySlot = []; // array for days which has unique opening hours

      var timeSlot = []; // array for different time slots

      markerConfig.openingHours.forEach(function (item) {
        var string = item.trim();
        var day = string.slice(0, '3');
        var hours = string.slice('3');
        var match;

        for (var i = 0; i < timeSlot.length; i++) {
          // checks current days opening hours to see if it matches opening hours of an existing day already
          if (hours === timeSlot[i]) {
            daySlot[i] += ', ' + day; // remembers that it found a match

            match = 1;
          }
        } // if no mathes are found then 'hours' are pushed into array


        if (match !== 1) {
          daySlot.push(day);
          timeSlot.push(hours);
        }
      }); // Builds opening hours text

      html += '<p>Opening hours: </br>';

      for (var i = 0; i < timeSlot.length; i++) {
        html += timeSlot[i] + ' (' + daySlot[i] + ')</br>';
      }

      html += '</p>';
    }

    html += '<p>';
    markerConfig.tel ? html += 'Tel: ' + markerConfig.tel + '</br>' : null;
    markerConfig.email ? html += 'Email: ' + markerConfig.email + '</br>' : null;
    html += '</p>'; // create google maps marker

    marker = new google.maps.Marker({
      map: markerConfig.map,
      position: markerConfig.point,
      icon: markerConfig.icon,
      animation: google.maps.Animation.DROP
    }); // add a new property to the google maps marker object so we can id markers

    marker.set('id', markerConfig.id); //add a new property of inHtml to populate infoWindow

    marker.set('infoHtml', html); // attach event listener for marker click to handle infoWindow

    google.maps.event.addListener(marker, 'click', function () {
      return updateHash(marker);
    }); // create list element

    listItem = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('li', [{
      label: 'id',
      val: 'building-' + markerConfig.id
    }, {
      label: 'class',
      val: 'building'
    }]); // create a element with click handler to open infoWindow

    anchor = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('a', [{
      label: 'html',
      val: '<span>' + markerConfig.name + '</span>'
    }, {
      label: 'href',
      val: '#'
    }]);
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      updateHash(e.target.parentElement.parentElement.getAttribute('id').replace('building-', '')); // closes locations panel and any open accordions, clears search

      toggleLocationPanel('true');
      closeAccordions();
      clearSearchString();
      return false;
    }); //add li item to accordion category ul

    listId ? listId.appendChild(listItem).appendChild(anchor) : null;

    if (markerConfig.category in locationCounter) {
      locationCounter[markerConfig.category] += 1;
    }

    return marker;
  } //end fn.createMarker

  /**
   * parses locations xml and creates markers
   * @parameter {Object} xml: xml returned from Ajax request
   * @parameter {String} textStatus: standard ajax reposnse
   * @parameter {Object} textStatus: standard ajax reposnse
   * @return {?}
   */


  function parseXml(xml) {
    var items = xml.getElementsByTagName('item');
    var index = 0,
        $self,
        marker,
        markerConfig = {},
        searchTags = [],
        searchIds = {};
    Array.from(items).forEach(function (item) {
      $self = item;
      markerConfig.openingHours = [];
      markerConfig.index = index + 1;
      markerConfig.id = $self.getElementsByTagName('guid')[0].textContent;
      markerConfig.name = $self.getElementsByTagName('title')[0].textContent;
      markerConfig.linkHref = $self.getElementsByTagName('link')[0].textContent;
      markerConfig.urlCustom = $self.getElementsByTagName('urlCustom')[0].textContent;
      markerConfig.icon = '/?a=537733'; // default city marker

      markerConfig.category = $self.getElementsByTagName('category')[0].textContent;
      markerConfig.buildingPrefix = $self.getElementsByTagName('roomPrefix')[0].textContent;
      markerConfig.roomNumber = $self.getElementsByTagName('roomNumber')[0].textContent;
      markerConfig.entrance = $self.getElementsByTagName('entrance')[0].textContent;
      markerConfig.floor = $self.getElementsByTagName('floor')[0].textContent;
      markerConfig.building = $self.getElementsByTagName('building')[0].textContent;
      markerConfig.buildingAdditionalInfo = $self.getElementsByTagName('buildingAdditionalInfo')[0].textContent;
      markerConfig.campus = $self.getElementsByTagName('campus')[0].textContent;
      markerConfig.street1 = $self.getElementsByTagName('street1')[0].textContent;
      markerConfig.street2 = $self.getElementsByTagName('street2')[0].textContent;
      markerConfig.city = $self.getElementsByTagName('city')[0].textContent;
      markerConfig.postcode = $self.getElementsByTagName('postcode')[0].textContent;
      markerConfig.country = $self.getElementsByTagName('country')[0].textContent;
      markerConfig.tel = $self.getElementsByTagName('tel')[0].textContent;
      markerConfig.email = $self.getElementsByTagName('email')[0].textContent;
      markerConfig.accessibility = $self.getElementsByTagName('accessibility')[0].textContent;
      markerConfig.walkingDistance = $self.getElementsByTagName('walkingDistance')[0].textContent;
      markerConfig.supports = $self.getElementsByTagName('supports')[0].textContent;
      markerConfig.geoLat = $self.getElementsByTagName('geoLat')[0].textContent;
      markerConfig.geoLong = $self.getElementsByTagName('geoLong')[0].textContent;
      $self.getElementsByTagName('ohMon')[0].textContent ? markerConfig.openingHours.push('Mon' + $self.getElementsByTagName('ohMon')[0].textContent) : null;
      $self.getElementsByTagName('ohTue')[0].textContent ? markerConfig.openingHours.push('Tue' + $self.getElementsByTagName('ohTue')[0].textContent) : null;
      $self.getElementsByTagName('ohWed')[0].textContent ? markerConfig.openingHours.push('Wed' + $self.getElementsByTagName('ohWed')[0].textContent) : null;
      $self.getElementsByTagName('ohThu')[0].textContent ? markerConfig.openingHours.push('Thu' + $self.getElementsByTagName('ohThu')[0].textContent) : null;
      $self.getElementsByTagName('ohFri')[0].textContent ? markerConfig.openingHours.push('Fri' + $self.getElementsByTagName('ohFri')[0].textContent) : null;
      $self.getElementsByTagName('ohSat')[0].textContent ? markerConfig.openingHours.push('Sat' + $self.getElementsByTagName('ohSat')[0].textContent) : null;
      $self.getElementsByTagName('ohSun')[0].textContent ? markerConfig.openingHours.push('Sun' + $self.getElementsByTagName('ohSun')[0].textContent) : null;
      markerConfig.point = new google.maps.LatLng(parseFloat(markerConfig.geoLat), parseFloat(markerConfig.geoLong)); //call createmarker fn

      marker = createMarker(markerConfig);

      if (markerConfig.category !== 'buildings') {
        //add returned marker to big array
        cityLayers.bigMarkersArray.push(marker);
      } else {
        //add marker to buldings array
        cityLayers.bigBuildingsArray.push(marker);
      } //all markers go in here


      cityLayers.buildingsObj[marker.id] = marker;
      searchTags.push(Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('a', [{
        label: 'content',
        val: markerConfig.name
      }, {
        label: 'data-id',
        val: markerConfig.id
      }]));
      searchIds[markerConfig.name] = markerConfig.id; //add returned marker to category array (if cat exisits)

      if (cityLayers[markerConfig.category]) {
        cityLayers[markerConfig.category].markersArray.push(marker);
      } else {//not needed for now
      }
    }); //end location item iteration

    function searchBoxInit() {
      // listens for search queries
      searchBox.addEventListener('keyup', function (e) {
        // if key press down arrow
        if (e.keyCode === parseInt('40')) {
          searchItemFocus(e.keyCode);
        } else {
          // clears previous suggestions, and 'clear search button' if exists
          clearsSearchSuggestions();
          searchSuggestions();
        }
      });

      function searchSuggestions() {
        clearsSearchSuggestions();
        var searchString = searchBox.value; // if a query is presesnt and finds a match it creates suggestions

        if (searchString.length > 0) {
          // creates HTML structure for suggestion list
          var createListWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('div', [{
            label: 'class',
            val: 'query__suggestions__wrapper'
          }]);
          var createList = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('ul', [{
            label: 'id',
            val: 'query__suggestions'
          }, {
            label: 'data-show',
            val: false
          }, {
            label: 'data-focus',
            val: -1
          }]);
          searchBox.parentElement.appendChild(createListWrapper).appendChild(createList);
          var list = document.getElementById('query__suggestions'); // adds search clear button

          var clearSearchButton = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('button', [{
            label: 'class',
            val: 'campus-map-v25__controls__search__clear'
          }, {
            label: 'html',
            val: '<span class="fa-sharp fa-solid fa-xmark icon "></span><span class="campus-map-v25__controls__search__clear__text">Clear query</span>'
          }]); // adds click event to clear search button

          clearSearchButton.addEventListener('click', function () {
            clearSearchString();
          });
          searchBox.parentElement.appendChild(clearSearchButton);
          /**
           * creates list of anchors contaning building info below:
           * @tag {HTMLelement} anchor containing building name and id
           * @maxNumberSuggestions {viarable} to set max number of suggestions to show
           */

          var maxNumberSuggestions = 10;
          var counter = 0; // Cycles through all the locations to see if they match with the search string,
          // then builds a list containing the matches

          Array.from(searchTags).forEach(function (tag) {
            if (tag.textContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
              if (counter < maxNumberSuggestions) {
                var item = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('li', []);
                var anchor = Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('a', [{
                  label: 'tabindex',
                  val: -1
                }, {
                  label: 'data-id',
                  val: tag.getAttribute('data-id')
                }, {
                  label: 'content',
                  val: tag.textContent
                }]);
                anchor.addEventListener('click', function () {
                  searchQueryIdFind(tag.getAttribute('data-id'), tag.textContent);
                  searchBox.value = tag.textContent;
                  updateHash(tag.getAttribute('data-id'));
                });
                anchor.addEventListener('keyup', function (e) {
                  e.preventDefault();
                  searchItemFocus(e.keyCode);
                });
                list.appendChild(item).appendChild(anchor);
                counter += 1;
              }

              list.setAttribute('data-show', true);
            }
          });
        } else {
          clearSearchString();
        }
      } // Handles searchbox focus behaviour


      searchBox.addEventListener('focusin', function () {
        // closes all accordions and location dropdown
        toggleLocationPanel('true');
        closeAccordions(); // check if there's a search string and then runs suggestions

        searchSuggestions();
      });
      /**
       * goes find marker and show on map
       * @id {string} string in number which is a unique identifier for each building i.e. 3252
       */

      function searchQueryIdFind(id) {
        document.getElementById('query__suggestions').setAttribute('data-show', false);
        hashChange(id);
      }
      /**
       * Handles navigating search suggestions by keyboard
       * @keyCode {number} keycode of keyboard key pressed
       */


      function searchItemFocus(keyCode) {
        var collectionNum = document.getElementById('query__suggestions').querySelectorAll('li').length; // Down arrow pressed

        if (keyCode === parseInt('40')) {
          var focusState = parseInt(document.getElementById('query__suggestions').getAttribute('data-focus'));

          if (focusState + 1 !== collectionNum) {
            document.getElementById('query__suggestions').querySelectorAll('a')[focusState + 1].focus();
            document.getElementById('query__suggestions').setAttribute('data-focus', focusState + 1);
          }
        } // Up arrow pressed
        else if (keyCode === parseInt('38')) {
          var _focusState = parseInt(document.getElementById('query__suggestions').getAttribute('data-focus'));

          if (_focusState - 1 !== -1) {
            document.getElementById('query__suggestions').querySelectorAll('a')[_focusState - 1].focus();

            document.getElementById('query__suggestions').setAttribute('data-focus', _focusState - 1);
          } else {
            searchBox.focus();
            document.getElementById('query__suggestions').setAttribute('data-focus', -1);
          }
        }
      }
    }

    searchBoxInit(); //clear marker when infoWIndow closed

    google.maps.event.addListener(infoWindow, 'closeclick', function () {
      updateHash(infoWindow);
    }); // map loading icon

    mapContainer.classList.remove('loading');
    Array.from(mapContainer.querySelectorAll('.loading-fa-icon')).forEach(function (i) {
      i.remove();
    }); // Bind an event to window.onhashchange that, when the history state changes,

    window.addEventListener('hashchange', hashChange); // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.

    hashChange(location.hash.replace('#', '')); // cleans up empty accorions

    for (var key in locationCounter) {
      if (locationCounter[key] > 0) {
        // selects empty accordion
        document.getElementById('accordion-' + key).style.display = 'block';
        showSearch = true;
      }
    }

    if (showSearch === true) {
      document.getElementById('map-controls').style.display = 'block';
    }
  } //end parse xml,
  // Loads location data from 'dataSrc' -json containing location info


  function loadXml() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === parseInt('4') && xhttp.status === parseInt('200')) {
        parseXml(xhttp.responseXML);
      }
    };

    xhttp.open('GET', dataSrc, true);
    xhttp.send(null);
  }
  /**
   * Initialises the map, shows loading icon whilst doing so
   *
   */


  function init() {
    mapContainer.classList.add('loading');
    mapContainer.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_15__["createHTMLElement"])('i', [{
      label: 'class',
      val: 'fa fa-refresh fa-spin loading-fa-icon'
    }]));
    loadXml();
  }
  /**
   * Toggles location panel open or close depending on it's status
   * @status {string} being 'true' or 'false', passed from data-show attribute
   */


  function toggleLocationPanel(status) {
    if (status === 'false') {
      mapContainer.querySelector('.campus-map-v25__controls__locations__heading').setAttribute('data-show', true);
      mapContainer.querySelector('.campus-map-v25__controls__locations').setAttribute('data-show', true);
      mapContainer.querySelector('.campus-map-v25__controls__locations').focus();

      if (document.getElementById('query__suggestions')) {
        document.getElementById('query__suggestions').setAttribute('data-show', false);
      }
    } else {
      mapContainer.querySelector('.campus-map-v25__controls__locations__heading').setAttribute('data-show', false);
      mapContainer.querySelector('.campus-map-v25__controls__locations').setAttribute('data-show', false);
    }
  } // location panel behaviour


  mapContainer.querySelector('.campus-map-v25__controls__locations__heading').addEventListener('click', function () {
    var status = this.getAttribute('data-show');
    toggleLocationPanel(status);
  });
  /**
   * Accordion overrides - this closes location accordions, it also have an optional
   * parameterater which closes all except the one. This would be when you want to close
   * all except one being clicked on for example. This override was necessary
   * as 6 individual accordions were used instead of 1 accordion having 6 sections,
   * due to layout requirements
   *
   * @parameter {id} exception - id of accordion not to close
   */

  function closeAccordions(exception) {
    Array.from(mapContainer.getElementsByClassName('accordion--location')).forEach(function (el) {
      if (el.getAttribute('id') !== exception) {
        el.querySelector('.accordion__heading').setAttribute('data-open', 'false');
        el.querySelector('.accordion__heading button').setAttribute('aria-expanded', 'false');
        el.querySelector('.accordion__body').setAttribute('data-closed', 'true');
      }
    });
  } // adds click event to close all accordions apart one from being clicked


  Array.from(mapContainer.getElementsByClassName('accordion--location')).forEach(function (el) {
    el.addEventListener('click', function () {
      // capture which accordion clicked on and closes all others
      closeAccordions(el.getAttribute('id'));
    });
  });
  /**
   * Closes search suggestions and location dropdowns
   * when clicking outside of them elements
   */

  document.addEventListener('click', function (evt) {
    var mapControls = document.getElementById('map-controls'),
        targetElement = evt.target; // clicked element

    do {
      if (targetElement === mapControls) {
        // This is a click inside. Do nothing, just return.
        return;
      } // Go up the DOM


      targetElement = targetElement.parentNode;
    } while (targetElement); // This is a click outside
    // closes location panel and location accorions, then clears / hides search suggestions


    toggleLocationPanel('true');
    closeAccordions();
    clearsSearchSuggestions();
  }); // Clears search string from location search

  function clearSearchString() {
    searchBox.value = '';
    var clearSearch = document.querySelector('.campus-map-v25__controls__search__clear');
    clearSearch ? clearSearch.remove() : null;
  } // clears existing search suggestions


  function clearsSearchSuggestions() {
    var listWrapper = searchBox.parentElement.querySelector('.query__suggestions__wrapper');
    var clearSearchButton = document.querySelector('.campus-map-v25__controls__search__clear');
    listWrapper ? searchBox.parentElement.querySelector('.query__suggestions__wrapper').remove() : null;
    clearSearchButton ? clearSearchButton.remove() : null;
  } // Optional - to show all markers in the buildingsArray on initial load
  //showOverlays(cityLayers.bigBuildingsArray);
  // loads relevant campus map overlay on initial page load


  var initialMapOverlay = new google.maps.Polygon({
    map: map,
    paths: campusOverlay,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
    geodesic: true
  }); // function to load specific campus overlay

  function showOverlay(newCampusOverlay) {
    initialMapOverlay.setMap(null);
    initialMapOverlay = new google.maps.Polygon({
      map: map,
      paths: newCampusOverlay,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: '#FF0000',
      fillOpacity: 0.2,
      geodesic: true
    });
  }

  init();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: createMap,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/find-us/find-us.js":
/*!*****************************************!*\
  !*** ./src/patterns/find-us/find-us.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../util */ "./src/util.js");

















/**
 * Find us, campus map page using Google map API
 *
 * @module patterns/find-us/find-us
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City St George's, University of London 2020
 */

var className = 'campus-map';

function createMap(mapContainer) {
  // == PROPERTIES ==
  var
  /**
   * data source - relative to handle production and test environments
   * @let {String}
   */
  dataSrc = '/feed/locations/city-buildings/_nocache',

  /**
   * Create a LatLng object containing the coordinate for the center of the map
   * @let {Object}
   */
  latlng = new google.maps.LatLng('51.527761', '-0.103283'),

  /**
   * an object literal containing the properties we want to pass to the map
   * @let {Object}
   */
  mapOptions = {
    zoom: 17,
    key: 'AIzaSyBvg6r1x2ZRKPAsceVaKPlg6tO20QiBDpo',
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true
  },

  /**
   * Call the constructor, thereby initializing the map  as soon as possible
   * @let {Object}: Google maps Map object
   */
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
      searchBox = document.getElementById('map-search'),

  /**
   * initlaise infoWindow
   * @let {Object}: Google maps InfoWindow object
   */
  infoWindow = new google.maps.InfoWindow({
    maxWidth: 400
  }),

  /**
   * cityLayers object literal containing skeleton options for City related things - parsing the xml file adds to this
   * it is where we keep arrays of markers to use when clearing/setting things on the map
   * @let {Object}:
   */
  cityLayers = {
    // array to hold each google marker object - for each University location
    bigMarkersArray: [],
    //arrray to hold building google marker objects - they never got removed from map
    bigBuildingsArray: [],
    buildingsObj: {},
    buildings: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    libraries: {
      toggler: document.getElementById('toggle-libraries'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    accommodation: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    lectureTheatres: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    studentCentre: {
      toggler: document.getElementById('toggle-studentCentre'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    sports: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ''
    },
    computerLabs: {
      toggler: document.getElementById('toggle-computerLabs'),
      markersArray: [],
      zoomLevel: 17,
      list: ''
    }
  }; // == METHODS ==

  /**
   * Removes the overlays from the map, but keeps them in the array
   * @parameter {Array} markersArray: a collections of markers
   * @return {Undefined}
   */

  function clearOverlays(markersArray) {
    var i;

    if (markersArray) {
      for (i in markersArray) {
        if (Object.prototype.hasOwnProperty.call(markersArray, i) && typeof markersArray[i] !== 'function') {
          markersArray[i].setMap(null);
        }
      }
    }
  }
  /**
   * the hashChange handler - listens for hash changes and then does cool stuff
   * @parameter {string} id of building: the window hashchange event
   * @return {Undefined}
   */


  var marker;

  function hashChange(id) {
    // Trigger - to show northampton square campus marker on initial load
    if (id === '' || id === '498711') {
      id = '498711';
    }

    if (id !== '498711') {
      // removes northampton square campus map overlay
      initialMapOverlay.setMap(null);
    } //loop over  bigBuildingsArray to find marker


    for (var building in cityLayers.buildingsObj) {
      if (id === building) {
        var found = cityLayers.buildingsObj[building]; // clears map from previous markers

        if (marker) {
          marker.setMap(null);
        } // allocates new marker info to variable


        marker = found; //open infoWindow for this marker
        //clear all overlays first

        clearOverlays(cityLayers.bigMarkersArray); //make marker visible

        marker.setVisible(true); //set infoWindow content

        infoWindow.setContent(marker.infoHtml); //open the infoWindow centered on the marker

        infoWindow.open(map, marker); //pan map to marker position

        map.panTo(marker.position); //add marker to map

        marker.setMap(map);
      }
    }
  }
  /**
   * the updateHash called when a marker, infoWindow or marker link is clicked - updates hash
   * @parameter {Object || String} caller: the marker, marker link or infoWindow firing the event
   * @return {Undefined}
   */


  function updateHash(caller) {
    var callerId = '';

    if (!caller) {
      return;
    }

    if (typeof caller === 'string') {
      //a marker link was clicked
      callerId = caller; // state[callerId] = 1;
    } else if (Object.prototype.hasOwnProperty.call(caller, 'id')) {
      //a marker was clicked
      callerId = caller.id; //state[callerId] = 1;
    } else {
      //an infoWindow was closed
      callerId = 0;
    }

    location.hash = callerId;
    hashChange(callerId);
  }
  /**
   *  creates individual markers, builds a corresponding filter item, binds a infoWindow to marker with html
   * and populates accordions
   * @parameter {Object} markerConfig: an object containing letious marker configuration options
   * @return {Object} marker - google maps marker
   */


  function createMarker(markerConfig) {
    var listId = document.getElementById(markerConfig.category),
        // selects accordion category
    listItem,
        marker,
        anchor,
        html = ''; // build html for infoWindow
    // check to see if there's custom URL first

    if (markerConfig.urlCustom) {
      html = '<div id="info-window" style="min-height: 60px;"><h3><a href="' + markerConfig.urlCustom + '">' + markerConfig.name + '</a></h3>';
    } else {
      // if has asset has a link
      if (markerConfig.linkHref.length !== 0) {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + '</h3>';
      } else {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + '</h3>';
      }
    } // calculates minutes label as singular or plurar


    function minutesFormat() {
      if (parseInt(markerConfig.walkingDistance) > 1) {
        return ' minutes';
      } else {
        return ' minute';
      }
    } // add description and close div element
    // html += markerConfig.description.replace(/\<h2/g, '<h4').replace(/\h2>/g, 'h4>')  + '</div>';


    markerConfig.buildingPrefix ? html += '<p>Rooms beginning: ' + markerConfig.buildingPrefix + '</p>' : null;
    html += '<p>';
    markerConfig.roomNumber ? html += 'Room ' + markerConfig.roomNumber + '</br>' : null;
    markerConfig.floor ? html += 'Floor ' + markerConfig.floor + '</br>' : null;
    markerConfig.building ? html += markerConfig.building + '</br>' : null;
    markerConfig.buildingAdditionalInfo ? html += markerConfig.buildingAdditionalInfo + '</br>' : null;
    markerConfig.street1 ? html += markerConfig.street1 + '</br>' : null;
    markerConfig.street2 ? html += markerConfig.street2 + '</br>' : null;
    markerConfig.city ? html += markerConfig.city + '</br>' : null;
    markerConfig.postcode ? html += markerConfig.postcode + '</br>' : null;
    html += '</p>';
    html += '<p>';
    markerConfig.campus ? html += markerConfig.campus + '</br>' : null;
    html += '</p>';
    markerConfig.supports ? html += '<p>' + markerConfig.supports + '</p>' : null;
    markerConfig.walkingDistance ? html += '<p>Walking distance to campus: </br>' + markerConfig.walkingDistance + minutesFormat(markerConfig.walkingDistance) + '</p>' : null;
    markerConfig.entrance ? html += '<p>' + markerConfig.entrance + '</p>' : null;
    markerConfig.accessibility ? html += '<p>' + markerConfig.accessibility + '</p>' : null; // Build opening hours from arrays

    if (markerConfig.openingHours.length > 0) {
      var daySlot = []; // array for days which has unique opening hours

      var timeSlot = []; // array for different time slots

      markerConfig.openingHours.forEach(function (item) {
        var string = item.trim();
        var day = string.slice(0, '3');
        var hours = string.slice('3');
        var match;

        for (var i = 0; i < timeSlot.length; i++) {
          // checks current days opening hours to see if it matches opening hours of an existing day already
          if (hours === timeSlot[i]) {
            daySlot[i] += ', ' + day; // remembers that it found a match

            match = 1;
          }
        } // if no mathes are found then 'hours' are pushed into array


        if (match !== 1) {
          daySlot.push(day);
          timeSlot.push(hours);
        }
      }); // Builds opening hours text

      html += '<p>Opening hours: </br>';

      for (var i = 0; i < timeSlot.length; i++) {
        html += timeSlot[i] + ' (' + daySlot[i] + ')</br>';
      }

      html += '</p>';
    }

    html += '<p>';
    markerConfig.tel ? html += 'Tel: ' + markerConfig.tel + '</br>' : null;
    markerConfig.email ? html += 'Email: ' + markerConfig.email + '</br>' : null;
    html += '</p>'; // create google maps marker

    marker = new google.maps.Marker({
      map: markerConfig.map,
      position: markerConfig.point,
      icon: markerConfig.icon,
      animation: google.maps.Animation.DROP
    }); // add a new property to the google maps marker object so we can id markers

    marker.set('id', markerConfig.id); //add a new property of inHtml to populate infoWindow

    marker.set('infoHtml', html); // attach event listener for marker click to handle infoWindow

    google.maps.event.addListener(marker, 'click', function () {
      return updateHash(marker);
    }); // create list element

    listItem = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('li', [{
      label: 'id',
      val: 'building-' + markerConfig.id
    }, {
      label: 'class',
      val: 'building'
    }]); // create a element with click handler to open infoWindow

    anchor = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('a', [{
      label: 'html',
      val: '<span>' + markerConfig.name + '</span>'
    }, {
      label: 'href',
      val: '#'
    }]);
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      updateHash(e.target.parentElement.parentElement.getAttribute('id').replace('building-', '')); // closes locations panel and any open accordions, clears search

      toggleLocationPanel('true');
      closeAccordions();
      clearSearchString();
      return false;
    }); //add li item to accordion category ul

    listId ? listId.appendChild(listItem).appendChild(anchor) : null;
    return marker;
  } //end fn.createMarker

  /**
   * parses locations xml and creates markers
   * @parameter {Object} xml: xml returned from Ajax request
   * @parameter {String} textStatus: standard ajax reposnse
   * @parameter {Object} textStatus: standard ajax reposnse
   * @return {?}
   */


  function parseXml(xml) {
    var items = xml.getElementsByTagName('item');
    var index = 0,
        $self,
        marker,
        markerConfig = {},
        searchTags = [],
        searchIds = {};
    Array.from(items).forEach(function (item) {
      $self = item;
      markerConfig.openingHours = [];
      markerConfig.index = index + 1;
      markerConfig.id = $self.getElementsByTagName('guid')[0].textContent;
      markerConfig.name = $self.getElementsByTagName('title')[0].textContent;
      markerConfig.linkHref = $self.getElementsByTagName('link')[0].textContent;
      markerConfig.urlCustom = $self.getElementsByTagName('urlCustom')[0].textContent;
      markerConfig.icon = '/?a=537733'; // default city marker

      markerConfig.category = $self.getElementsByTagName('category')[0].textContent;
      markerConfig.buildingPrefix = $self.getElementsByTagName('roomPrefix')[0].textContent;
      markerConfig.roomNumber = $self.getElementsByTagName('roomNumber')[0].textContent;
      markerConfig.entrance = $self.getElementsByTagName('entrance')[0].textContent;
      markerConfig.floor = $self.getElementsByTagName('floor')[0].textContent;
      markerConfig.building = $self.getElementsByTagName('building')[0].textContent;
      markerConfig.buildingAdditionalInfo = $self.getElementsByTagName('buildingAdditionalInfo')[0].textContent;
      markerConfig.campus = $self.getElementsByTagName('campus')[0].textContent;
      markerConfig.street1 = $self.getElementsByTagName('street1')[0].textContent;
      markerConfig.street2 = $self.getElementsByTagName('street2')[0].textContent;
      markerConfig.city = $self.getElementsByTagName('city')[0].textContent;
      markerConfig.postcode = $self.getElementsByTagName('postcode')[0].textContent;
      markerConfig.country = $self.getElementsByTagName('country')[0].textContent;
      markerConfig.tel = $self.getElementsByTagName('tel')[0].textContent;
      markerConfig.email = $self.getElementsByTagName('email')[0].textContent;
      markerConfig.accessibility = $self.getElementsByTagName('accessibility')[0].textContent;
      markerConfig.walkingDistance = $self.getElementsByTagName('walkingDistance')[0].textContent;
      markerConfig.supports = $self.getElementsByTagName('supports')[0].textContent;
      markerConfig.geoLat = $self.getElementsByTagName('geoLat')[0].textContent;
      markerConfig.geoLong = $self.getElementsByTagName('geoLong')[0].textContent;
      $self.getElementsByTagName('ohMon')[0].textContent ? markerConfig.openingHours.push('Mon' + $self.getElementsByTagName('ohMon')[0].textContent) : null;
      $self.getElementsByTagName('ohTue')[0].textContent ? markerConfig.openingHours.push('Tue' + $self.getElementsByTagName('ohTue')[0].textContent) : null;
      $self.getElementsByTagName('ohWed')[0].textContent ? markerConfig.openingHours.push('Wed' + $self.getElementsByTagName('ohWed')[0].textContent) : null;
      $self.getElementsByTagName('ohThu')[0].textContent ? markerConfig.openingHours.push('Thu' + $self.getElementsByTagName('ohThu')[0].textContent) : null;
      $self.getElementsByTagName('ohFri')[0].textContent ? markerConfig.openingHours.push('Fri' + $self.getElementsByTagName('ohFri')[0].textContent) : null;
      $self.getElementsByTagName('ohSat')[0].textContent ? markerConfig.openingHours.push('Sat' + $self.getElementsByTagName('ohSat')[0].textContent) : null;
      $self.getElementsByTagName('ohSun')[0].textContent ? markerConfig.openingHours.push('Sun' + $self.getElementsByTagName('ohSun')[0].textContent) : null;
      markerConfig.point = new google.maps.LatLng(parseFloat(markerConfig.geoLat), parseFloat(markerConfig.geoLong)); //call createmarker fn

      marker = createMarker(markerConfig);

      if (markerConfig.category !== 'buildings') {
        //add returned marker to big array
        cityLayers.bigMarkersArray.push(marker);
      } else {
        //add marker to buldings array
        cityLayers.bigBuildingsArray.push(marker);
      } //all markers go in here


      cityLayers.buildingsObj[marker.id] = marker;
      searchTags.push(Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('a', [{
        label: 'content',
        val: markerConfig.name
      }, {
        label: 'data-id',
        val: markerConfig.id
      }]));
      searchIds[markerConfig.name] = markerConfig.id; //add returned marker to category array (if cat exisits)

      if (cityLayers[markerConfig.category]) {
        cityLayers[markerConfig.category].markersArray.push(marker);
      } else {//not needed for now
      }
    }); //end iteration

    function searchBoxInit() {
      // listens for search queries
      searchBox.addEventListener('keyup', function (e) {
        // if key press down arrow
        if (e.keyCode === parseInt('40')) {
          searchItemFocus(e.keyCode);
        } else {
          // clears previous suggestions, and 'clear search button' if exists
          clearsSearchSuggestions();
          searchSuggestions();
        }
      });

      function searchSuggestions() {
        clearsSearchSuggestions();
        var searchString = searchBox.value; // if a query is presesnt and finds a match it creates suggestions

        if (searchString.length > 0) {
          // creates HTML structure for suggestion list
          var createListWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('div', [{
            label: 'class',
            val: 'query__suggestions__wrapper'
          }]);
          var createList = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('ul', [{
            label: 'id',
            val: 'query__suggestions'
          }, {
            label: 'data-show',
            val: false
          }, {
            label: 'data-focus',
            val: -1
          }]);
          searchBox.parentElement.appendChild(createListWrapper).appendChild(createList);
          var list = document.getElementById('query__suggestions'); // adds search clear button

          var clearSearchButton = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('button', [{
            label: 'class',
            val: 'campus-map__controls__search__clear'
          }, {
            label: 'html',
            val: '<span class="fa-sharp fa-solid fa-xmark icon "></span><span class="campus-map__controls__search__clear__text">Clear query</span>'
          }]); // adds click event to clear search button

          clearSearchButton.addEventListener('click', function () {
            clearSearchString();
          });
          searchBox.parentElement.appendChild(clearSearchButton);
          /**
           * creates list of anchors contaning building info below:
           * @tag {HTMLelement} anchor containing building name and id
           * @maxNumberSuggestions {viarable} to set max number of suggestions to show
           */

          var maxNumberSuggestions = 10;
          var counter = 0; // Cycles through all the locations to see if they match with the search string,
          // then builds a list containing the matches

          Array.from(searchTags).forEach(function (tag) {
            if (tag.textContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
              if (counter < maxNumberSuggestions) {
                var item = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('li', []);
                var anchor = Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('a', [{
                  label: 'tabindex',
                  val: -1
                }, {
                  label: 'data-id',
                  val: tag.getAttribute('data-id')
                }, {
                  label: 'content',
                  val: tag.textContent
                }]);
                anchor.addEventListener('click', function () {
                  searchQueryIdFind(tag.getAttribute('data-id'), tag.textContent);
                  searchBox.value = tag.textContent;
                  updateHash(tag.getAttribute('data-id'));
                });
                anchor.addEventListener('keyup', function (e) {
                  e.preventDefault();
                  searchItemFocus(e.keyCode);
                });
                list.appendChild(item).appendChild(anchor);
                counter += 1;
              }

              list.setAttribute('data-show', true);
            }
          });
        } else {
          clearSearchString();
        }
      } // Handles searchbox focus behaviour


      searchBox.addEventListener('focusin', function () {
        // closes all accordions and location dropdown
        toggleLocationPanel('true');
        closeAccordions(); // check if there's a search string and then runs suggestions

        searchSuggestions();
      });
      /**
       * goes find marker and show on map
       * @id {string} string in number which is a unique identifier for each building i.e. 3252
       */

      function searchQueryIdFind(id) {
        document.getElementById('query__suggestions').setAttribute('data-show', false);
        hashChange(id);
      }
      /**
       * Handles navigating search suggestions by keyboard
       * @keyCode {number} keycode of keyboard key pressed
       */


      function searchItemFocus(keyCode) {
        var collectionNum = document.getElementById('query__suggestions').querySelectorAll('li').length; // Down arrow pressed

        if (keyCode === parseInt('40')) {
          var focusState = parseInt(document.getElementById('query__suggestions').getAttribute('data-focus'));

          if (focusState + 1 !== collectionNum) {
            document.getElementById('query__suggestions').querySelectorAll('a')[focusState + 1].focus();
            document.getElementById('query__suggestions').setAttribute('data-focus', focusState + 1);
          }
        } // Up arrow pressed
        else if (keyCode === parseInt('38')) {
          var _focusState = parseInt(document.getElementById('query__suggestions').getAttribute('data-focus'));

          if (_focusState - 1 !== -1) {
            document.getElementById('query__suggestions').querySelectorAll('a')[_focusState - 1].focus();

            document.getElementById('query__suggestions').setAttribute('data-focus', _focusState - 1);
          } else {
            searchBox.focus();
            document.getElementById('query__suggestions').setAttribute('data-focus', -1);
          }
        }
      }
    }

    searchBoxInit(); //clear marker when infoWIndow closed

    google.maps.event.addListener(infoWindow, 'closeclick', function () {
      updateHash(infoWindow);
    }); // map loading icon

    mapContainer.classList.remove('loading');
    Array.from(mapContainer.querySelectorAll('.loading-fa-icon')).forEach(function (i) {
      i.remove();
    }); // Bind an event to window.onhashchange that, when the history state changes,

    window.addEventListener('hashchange', hashChange); // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.

    hashChange(location.hash.replace('#', ''));
  } //end parse xml,
  // Loads location data from 'dataSrc' -json containing location info


  function loadXml() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === parseInt('4') && xhttp.status === parseInt('200')) {
        parseXml(xhttp.responseXML);
      }
    };

    xhttp.open('GET', dataSrc, true);
    xhttp.send(null);
  }
  /**
   * Initialises the map, shows loading icon whilst doing so
   *
   */


  function init() {
    mapContainer.classList.add('loading');
    mapContainer.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_14__["createHTMLElement"])('i', [{
      label: 'class',
      val: 'fa fa-refresh fa-spin loading-fa-icon'
    }]));
    loadXml();
  }
  /**
   * Toggles location panel open or close depending on it's status
   * @status {string} being 'true' or 'false', passed from data-show attribute
   */


  function toggleLocationPanel(status) {
    if (status === 'false') {
      mapContainer.querySelector('.campus-map__controls__locations__heading').setAttribute('data-show', true);
      mapContainer.querySelector('.campus-map__controls__locations').setAttribute('data-show', true);
      mapContainer.querySelector('.campus-map__controls__locations').focus();

      if (document.getElementById('query__suggestions')) {
        document.getElementById('query__suggestions').setAttribute('data-show', false);
      }
    } else {
      mapContainer.querySelector('.campus-map__controls__locations__heading').setAttribute('data-show', false);
      mapContainer.querySelector('.campus-map__controls__locations').setAttribute('data-show', false);
    }
  } // location panel behaviour


  mapContainer.querySelector('.campus-map__controls__locations__heading').addEventListener('click', function () {
    var status = this.getAttribute('data-show');
    toggleLocationPanel(status);
  });
  /**
   * Accordion overrides - this closes location accordions, it also have an optional
   * parameterater which closes all except the one. This would be when you want to close
   * all except one being clicked on for example. This override was necessary
   * as 6 individual accordions were used instead of 1 accordion having 6 sections,
   * due to layout requirements
   *
   * @parameter {id} exception - id of accordion not to close
   */

  function closeAccordions(exception) {
    Array.from(mapContainer.getElementsByClassName('accordion--location')).forEach(function (el) {
      if (el.getAttribute('id') !== exception) {
        el.querySelector('.accordion__heading').setAttribute('data-open', 'false');
        el.querySelector('.accordion__heading button').setAttribute('aria-expanded', 'false');
        el.querySelector('.accordion__body').setAttribute('data-closed', 'true');
      }
    });
  } // adds click event to close all accordions apart one from being clicked


  Array.from(mapContainer.getElementsByClassName('accordion--location')).forEach(function (el) {
    el.addEventListener('click', function () {
      // capture which accordion clicked on and closes all others
      closeAccordions(el.getAttribute('id'));
    });
  });
  /* */

  /**
   * Closes search suggestions and location dropdowns
   * when clicking outside of them elements
   */

  document.addEventListener('click', function (evt) {
    var mapControls = document.getElementById('map-controls'),
        targetElement = evt.target; // clicked element

    do {
      if (targetElement === mapControls) {
        // This is a click inside. Do nothing, just return.
        return;
      } // Go up the DOM


      targetElement = targetElement.parentNode;
    } while (targetElement); // This is a click outside
    // closes location panel and location accorions, then clears / hides search suggestions


    toggleLocationPanel('true');
    closeAccordions();
    clearsSearchSuggestions();
  }); // Clears search string from location search

  function clearSearchString() {
    searchBox.value = '';
    var clearSearch = document.querySelector('.campus-map__controls__search__clear');
    clearSearch ? clearSearch.remove() : null;
  } // clears existing search suggestions


  function clearsSearchSuggestions() {
    var listWrapper = searchBox.parentElement.querySelector('.query__suggestions__wrapper');
    var clearSearchButton = document.querySelector('.campus-map__controls__search__clear');
    listWrapper ? searchBox.parentElement.querySelector('.query__suggestions__wrapper').remove() : null;
    clearSearchButton ? clearSearchButton.remove() : null;
  } // On page load the northampton square campus is shown on the map as an overlay
  // co-ordinates below draws the 'shape' of the campus overlay


  var cityCampus = [{
    lat: 51.527261,
    lng: -0.107649
  }, {
    lat: 51.527333,
    lng: -0.106411
  }, {
    lat: 51.527737,
    lng: -0.104968
  }, {
    lat: 51.527824,
    lng: -0.104421
  }, {
    lat: 51.528418,
    lng: -0.101159
  }, {
    lat: 51.52784,
    lng: -0.100794
  }, {
    lat: 51.52784,
    lng: -0.100794
  }, {
    lat: 51.52759,
    lng: -0.101888
  }, {
    lat: 51.52768,
    lng: -0.102484
  }, {
    lat: 51.527624,
    lng: -0.102693
  }, {
    lat: 51.5272,
    lng: -0.103048
  }, {
    lat: 51.526903,
    lng: -0.104104
  }, {
    lat: 51.52771,
    lng: -0.104635
  }, {
    lat: 51.526669,
    lng: -0.105284
  }, {
    lat: 51.52725,
    lng: -0.106421
  }, {
    lat: 51.526689,
    lng: -0.107671
  }]; // Optional - to show all markers in the buildingsArray on initial load
  //showOverlays(cityLayers.bigBuildingsArray);
  // loads northampton square campus map overlay on initial load
  //or can be displayed using: initialMapOverlay.setMap(map);

  var initialMapOverlay = new google.maps.Polygon({
    map: map,
    paths: cityCampus,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
    geodesic: true
  });
  init();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: createMap,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/image-carousel/carousel-constructor.js":
/*!*************************************************************!*\
  !*** ./src/patterns/image-carousel/carousel-constructor.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util */ "./src/util.js");














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ie = Object(_util__WEBPACK_IMPORTED_MODULE_11__["detectIE"])();

var Carousel = /*#__PURE__*/function () {
  function Carousel(elem, options) {
    _classCallCheck(this, Carousel);

    this.elem = elem;
    this.config = options ? options : {};
    this.i = 0;
    this.x0 = null;
    this.locked = false;
    this.sliderTranslateCoOr = 0;
  }
  /**
   * Set the number indicators Number
   *
   * @param {number} carousel index - current carousel index
   * @param {HTMLelement} indicator html - pass HTML containing the indicator
   */


  _createClass(Carousel, [{
    key: "numIndicator",
    value: function numIndicator(index, e) {
      e.querySelector('.swiper-indicator__active-slider').innerText = index + 1;
    }
    /**
     *
     * Set active slider
     *
     * @param {number} carousel index - current carousel index
     * @param {HTMLelement} sliders html - pass HTML containing the sliders
     */

  }, {
    key: "activeSlider",
    value: function activeSlider(index, sliders) {
      var a = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toArray"])(sliders.querySelectorAll('.swiper-slide'));
      a.forEach(function (e) {
        e.classList.remove('active');
        e.querySelectorAll('a').forEach(function (a) {
          return a.tabIndex = -1;
        }); // disable focus on non active slider with hyperlinks

        e.setAttribute('aria-hidden', 'true');
      });
      a[index].classList.toggle('active');
      a[index].querySelectorAll('a').forEach(function (a) {
        return a.tabIndex = 0;
      });
      a[index].setAttribute('aria-hidden', 'false');
    }
    /**
     *
     * Toggle next button
     *
     * @param {number} carousel index - current carousel index
     * @param {number} length of sliders -
     * @param {event} user event - interaction event perform by user
     */

  }, {
    key: "toogleNextBtn",
    value: function toogleNextBtn(index, length, e) {
      var nextBtn = this.checkEventType(e);

      if (index + 1 === length) {
        nextBtn.querySelector('.swiper-button-next button').disabled = true;
        nextBtn.querySelector('.swiper-button-prev button').disabled = false;
      } else if (this.i + 1 < length) {
        nextBtn.querySelector('.swiper-button-next button').disabled = false;
        nextBtn.querySelector('.swiper-button-prev button').disabled = false;
      }

      this.activeSlider(index, nextBtn);

      if (!this.config.hidNumInd) {
        this.numIndicator(index, nextBtn);
      }
    }
    /**
     *
     * Toggle previous button
     *
     * @param {number} carousel index - current carousel index
     * @param {number} length of sliders -
     * @param {event} user event - interaction event perform by user
     */

  }, {
    key: "tooglePrevBtn",
    value: function tooglePrevBtn(index, length, e) {
      var prevBtn = this.checkEventType(e);

      if (index + 1 === 1) {
        prevBtn.querySelector('.swiper-button-prev button').disabled = true;
        prevBtn.querySelector('.swiper-button-next button').disabled = false;
      } else if (this.i + 1 > 1) {
        prevBtn.querySelector('.swiper-button-prev button').disabled = false;
        prevBtn.querySelector('.swiper-button-next button').disabled = false;
      }

      this.activeSlider(index, prevBtn);

      if (!this.config.hidNumInd) {
        this.numIndicator(index, prevBtn);
      }
    }
    /**
     *
     * Move slide either forwards or backwards
     *
     * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
     * @param {boolean} boolean for either next or pervious - boolean to check if next or previous is called
     */

  }, {
    key: "moveSlide",
    value: function moveSlide(e, t) {
      var sl = this.checkEventType(e).querySelector('.swiper-wrapper');

      if (sl.classList.contains('smooth')) {
        sl.classList.toggle('smooth');
      }

      if (!ie) {
        if (this.config.defaultCarousel && e.target.tagName === 'INPUT') {
          sl.style.setProperty('--i', this.i);
        } else {
          t ? sl.style.setProperty('--i', this.i !== 0 ? this.i += 1 : this.i = 1) : sl.style.setProperty('--i', this.i !== 0 ? this.i -= 1 : this.i = 1);
        }

        sl.classList.toggle('smooth');
        t ? this.toogleNextBtn(this.i, sl.children.length, e) : this.tooglePrevBtn(this.i, sl.children.length, e);
      } else {
        var sliderWidthIndex = this.totalSliderWidth(e) / sl.children.length * this.i,
            sliderWidth = this.totalSliderWidth(e) / sl.children.length;
        t ? this.sliderTranslateCoOr -= sliderWidth : this.sliderTranslateCoOr += sliderWidth;
        sl.classList.toggle('smooth');

        if (this.config.defaultCarousel && e.target.tagName === 'INPUT') {
          this.sliderTranslateCoOr = -sliderWidthIndex;
          sl.style.setProperty('transform', 'translate(-' + sliderWidthIndex + 'px)');
          sl.style.setProperty('--i', this.i);
        } else {
          sl.style.setProperty('transform', 'translate(' + this.sliderTranslateCoOr + 'px)');
          t ? this.i !== 0 ? this.i += 1 : this.i = 1 : this.i !== 0 ? this.i -= 1 : this.i = 1;
        }

        t ? this.toogleNextBtn(this.i, sl.children.length, e) : this.tooglePrevBtn(this.i, sl.children.length, e);
      }

      if (this.config.defaultCarousel) {
        this.activeThumbnail(this.i, e);
      }
    }
    /**
     *
     * Next slide
     *
     * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
     */

  }, {
    key: "next",
    value: function next(e) {
      e.preventDefault();
      this.moveSlide(e, true);
    }
    /**
     *
     * Prvious slide
     *
     * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
     */

  }, {
    key: "previous",
    value: function previous(e) {
      e.preventDefault();
      this.moveSlide(e, false);
    }
    /**
     *
     * Return touch points of either touch or mouse
     *
     * @param {event} user event - event on silder from either mouse or touch events
     * @returns {event | object} - either return the event back or the object of touch events
     */

  }, {
    key: "unify",
    value: function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }
    /**
     *
     * Start of slider move Set mousedown value to global and toggle smooth class for css transition on mouse down or touch start
     *
     * @param {event} user event - user action either mosuedown or touch start
     */

  }, {
    key: "lock",
    value: function lock(e) {
      this.x0 = this.unify(e).clientX; //set mousedown clientX value

      e.target.classList.toggle('smooth', !(this.locked = true));
    }
    /**
     *
     * Moving the slider - moving the slider trigger by mouse move or touch move
     *
     * @param {event} user event - mousetouch or touchmove
     */

  }, {
    key: "drag",
    value: function drag(e) {
      if (this.i !== e.target.children.length - 1 && this.i !== 0) {
        if (this.locked) {
          e.target.style.setProperty('--tx', "".concat(Math.round(this.unify(e).clientX - this.x0), "px"));
        }
      }
    }
    /**
     *
     * Move slider
     *
     * @param {event} user event - mouseup or touchend
     */

  }, {
    key: "move",
    value: function move(e) {
      if (this.locked) {
        var dx = this.unify(e).clientX - this.x0,
            //dx is value calculate by using clientX mousedown and after value
        s = Math.sign(dx),
            //check if swipe is left or right by checking value is negative or positive
        tx = getComputedStyle(e.target).getPropertyValue('--tx'),
            p = parseInt(tx.replace(/\D/g, '')); // MAY use the drag length as a condition to move slider

        if ((this.i > 0 || s < 0) && (this.i < e.target.children.length - 1 || s > 0) && (p > 100 || this.i === 0 || this.i === e.target.children.length - 1) //conditions to swip to slider
        ) {
          if (!ie) {
            e.target.style.setProperty('--i', this.i -= s); //increment i (i repersent the slider)

            e.target.style.setProperty('--tx', '0px'); //reset touch x value

            e.target.classList.toggle('smooth', !(this.locked = false));
            this.x0 = null;

            if (s === -1) {
              this.toogleNextBtn(this.i, e.target.children.length, e);
            } else {
              this.tooglePrevBtn(this.i, e.target.children.length, e);
            }
          } else {
            this.animateSlider(e, s);
            s === -1 ? this.toogleNextBtn(this.i, e.target.children.length, e) : this.tooglePrevBtn(this.i, e.target.children.length, e);
          }

          if (this.config.defaultCarousel) {
            this.activeThumbnail(this.i, e);
          }
        }
      }
    }
    /**
     *
     * Stop drag when mouse or touch move outside the slider element
     *
     * @param {event} user event - mouseup or touchend
     */

  }, {
    key: "stopDrag",
    value: function stopDrag(e) {
      e.target.style.setProperty('--tx', '0px');
      e.stopPropagation();
      e.target.classList.toggle('smooth', !(this.locked = false));
    }
    /**
     *
     * Check event type and passing the correct parent node
     *
     * @param {event} user event - either mouse, touch, click events and thumbnail click events
     * @returns {HTMLSliderElement} -
     */

  }, {
    key: "checkEventType",
    value: function checkEventType(e) {
      if (e.target.parentElement.classList.contains('galleria-thumbnail')) {
        return e.target.parentElement.parentElement.parentElement.parentElement;
      } else {
        switch (e.type) {
          case 'mouseup':
            return e.target.parentElement.parentElement;

          case 'touchend':
            return e.target.parentElement.parentElement;

          default:
            return e.target.parentElement.parentElement.parentElement;
        }
      }
    }
    /**
     *
     * For edge browsers calculate silders total width
     *
     * @param {event} user event -
     * @returns {number} - total width of slider
     */
    //edge fall back cannot use CSS var inside a cal()

  }, {
    key: "totalSliderWidth",
    value: function totalSliderWidth(e) {
      var sliders = Object(_util__WEBPACK_IMPORTED_MODULE_11__["toArray"])(this.checkEventType(e).querySelectorAll('.swiper-slide'));
      var totalWidth = 0;
      sliders.forEach(function (s) {
        var style = window.getComputedStyle ? getComputedStyle(s, null) : s.currentStyle;
        totalWidth += s.offsetWidth + parseInt(style.marginRight) || 0;
      });
      return totalWidth;
    }
    /**
     *
     * Animate slider by setting translate value
     *
     * @param {event} user event -
     * @param {number}  - number either negative or a positive number
     */

  }, {
    key: "animateSlider",
    value: function animateSlider(e, lr) {
      var sliderWidth = this.totalSliderWidth(e) / e.target.children.length;
      lr === -1 ? this.sliderTranslateCoOr -= sliderWidth : this.sliderTranslateCoOr += sliderWidth;
      e.target.style.setProperty('transform', 'translate(' + this.sliderTranslateCoOr + 'px)');
      e.target.classList.toggle('smooth');
      this.i -= lr;
    }
    /**
     *
     * Adds and setups carousel controls
     * e.g.
     *
     *  <div class="swiper-viewport">
     *      <div class="swiper-container">
     *
     *          <ul class="swiper-wrapper">
     *              <li class="swiper-slide">
     *                  <div class="swiper-slide__image-wrapper">
     *                      <picture>
     *                          <img src="https://web2020.city.ac.uk/documentation/patterns/carousel/_DP57645_1920x1080.jpg" alt="Image">
     *                      </picture>
     *                  </div>
     *                  <div class="swiper-slide__text">
     *                      <p>We are a leading provider of healthcare .....</p>
     *                  </div>
     *              </li>
     *              <li class="swiper-slide">
     *                  <div class="swiper-slide__image-wrapper">
     *                      <img class="lazy" src="https://web2020.city.ac.uk/documentation/patterns/carousel/_DP57645_1920x1080.jpg" alt="Image">
     *                  </div>
     *                  <div class="swiper-slide__text">
     *                      <p>We are a leading provider of healthcare .....</p>
     *                  </div>
     *              </li>
     *          </ul>
     *
     *      </div>
     *  </div>
     *
     *@param {HTMLElement} elem - The element to carousel.
     *@param {Object} object - Object containing setting to setup defualt carousel. if using full width carousel
     * then do not pass in object unless you want to hide the number indicators.
     * To intialise the defualt carousel pass this object
     * {
     *  defaultCarousel: true,
     *  hidNumInd: true,
     *  }
     *
     */

  }, {
    key: "init",
    value: function init() {
      var lazyImages = [].slice.call(this.elem.querySelectorAll('img.lazy'));

      if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        var lazyImageObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry, i) {
            if (i === 0) {
              entry.target.querySelector('img').classList.remove('lazy');
            }

            if (entry.isIntersecting) {
              var lazyImage = entry.target.parentNode.parentNode.nextSibling.firstElementChild.querySelector('img');
              var sourceSet = entry.target.parentNode.parentNode.nextSibling.firstElementChild.querySelectorAll('source');
              sourceSet.forEach(function (item) {
                item.srcset = item.dataset.srcset;
              });
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('lazy');
              lazyImageObserver.unobserve(entry.target);
            }
          });
        });
        lazyImages.forEach(function (lazyImage, i, a) {
          if (i !== a.length - 1) {
            lazyImageObserver.observe(lazyImage.parentNode);
          } else {
            lazyImage.classList.remove('lazy');
          }
        });
      } else {
        lazyImages.forEach(function (e) {
          if (e.dataset.src) {
            e.src = e.dataset.src;
          }

          e.classList.remove('lazy');
        });
      }

      var _C = this.elem.querySelector('.swiper-wrapper'),
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
      nextBtn.addEventListener('click', this.next.bind(this), false);
      prevBtn.name = 'prevButton';
      prevBtn.type = 'button';
      prevBtn.className = 'fas fa-arrow-left swiper-slider-arrow arrow-left--btn-prev';
      prevBtn.setAttribute('aria-label', 'Previous slider');
      prevBtn.addEventListener('click', this.previous.bind(this), false);
      prevBtn.disabled = true;
      nextBtnWrap.appendChild(nextBtn);
      prevBtnWrap.appendChild(prevBtn);
      buttonsWrap.appendChild(prevBtnWrap);
      buttonsWrap.appendChild(nextBtnWrap);

      if (!this.config.hidNumInd) {
        //perpare the indicators to append to html
        numInd.className = 'swiper-indicator';
        numIndActiveSl.className = 'swiper-indicator__active-slider';
        numbIndSlLength.className = 'swiper-indicator__slider-length';
        numIndActiveSl.innerText = this.i + 1;
        numbIndSlLength.innerText = _C.children.length;
        numIndSeparator.innerText = ' /';
        numInd.appendChild(numIndActiveSl);
        numInd.appendChild(numIndSeparator);
        numInd.appendChild(numbIndSlLength);
        this.elem.appendChild(numInd);
      }

      this.elem.appendChild(buttonsWrap);
      this.config.sliderLength = _C.children.length;

      if (this.config.defaultCarousel) {
        this.elem.querySelector('.galleria-thumbnails-list').style.setProperty('--thumbnails', this.config.sliderLength);
      }

      _C.style.setProperty('--n', this.config.sliderLength); //add event listeners


      _C.addEventListener('mousedown', this.lock.bind(this), false);

      _C.addEventListener('touchstart', this.lock.bind(this), false);

      _C.addEventListener('mousemove', this.drag.bind(this), false);

      _C.addEventListener('touchmove', this.drag.bind(this), false);

      _C.addEventListener('mouseup', this.move.bind(this), false);

      _C.addEventListener('touchend', this.move.bind(this), false);

      _C.addEventListener('mouseout', this.stopDrag.bind(this), false);

      _C.firstElementChild.classList.toggle('active');

      this.activeSlider(this.i, _C);
    }
  }]);

  return Carousel;
}();



/***/ }),

/***/ "./src/patterns/image-carousel/default-carousel/default-carousel-constructor.js":
/*!**************************************************************************************!*\
  !*** ./src/patterns/image-carousel/default-carousel/default-carousel-constructor.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Defaultcarousel; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../util */ "./src/util.js");
/* harmony import */ var _carousel_constructor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../carousel-constructor */ "./src/patterns/image-carousel/carousel-constructor.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var keyCodeTab = 9,
    keyCodeEnter = 13;

var Defaultcarousel = /*#__PURE__*/function (_Carousel) {
  _inherits(Defaultcarousel, _Carousel);

  var _super = _createSuper(Defaultcarousel);

  function Defaultcarousel(elem, options) {
    _classCallCheck(this, Defaultcarousel);

    return _super.call(this, elem, options);
  }

  _createClass(Defaultcarousel, [{
    key: "inital",
    value: function inital() {
      _get(_getPrototypeOf(Defaultcarousel.prototype), "init", this).call(this);

      var self = this;
      var thumbnails = [].slice.call(this.elem.querySelector('.galleria-thumbnails-list').querySelectorAll('li')); //edge work around intersectionObserver not triggering using isIntersecting

      var options = {
        rootMargin: '0px',
        threshold: [0, 1]
      },
          edge = document.documentElement.classList.contains('edge');
      var edgeThumbnailsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio === 1) {
            entry.target.setAttribute('aria-hidden', 'false');
          } else {
            entry.target.setAttribute('aria-hidden', 'true');
          }
        });
      }, options);
      var thumbnailsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('aria-hidden', 'false');
          } else if (!entry.isIntersecting) {
            entry.target.setAttribute('aria-hidden', 'true');
          }
        });
      });
      thumbnails.forEach(function (e, i) {
        if (i === 0) {
          e.classList.add('active');
        }

        e.addEventListener('click', function (t) {
          self.onClickThunbnail(t, i);
        }, false);
        e.addEventListener('keyup', function (e) {
          switch (e.keyCode) {
            case keyCodeEnter:
              self.onClickThunbnail(e, i);
              break;

            case keyCodeTab:
              self.translateThumbnails(i, e);
              break;

            default:
              break;
          }
        }, false);
        e.setAttribute('aria-hidden', 'false');

        if (_util__WEBPACK_IMPORTED_MODULE_21__["checkIntersectionObserver"] && !edge) {
          thumbnailsObserver.observe(e);
        } else if (_util__WEBPACK_IMPORTED_MODULE_21__["checkIntersectionObserver"] && edge) {
          edgeThumbnailsObserver.observe(e);
        }
      });
    }
    /**
     *
     * Exported function for defualt caousel to preform when thumbnail it cliked on
     * move slider forward or backwards
     *
     * @param {event} user event - onlcik event on thumbnail
     * @param {number} thumbnail index -
     */

  }, {
    key: "onClickThunbnail",
    value: function onClickThunbnail(thumbnail, thumbindex) {
      if (thumbindex > this.i) {
        this.i = thumbindex;
        this.next(thumbnail);
      } else if (thumbindex < this.i) {
        this.i = thumbindex;
        this.previous(thumbnail);
      }

      this.activeThumbnail(thumbindex, thumbnail);
    }
    /**
     *
     * Set click on thumbnail to be active
     *
     * @param {number} thumbnail index -
     * @param {event} user event - onlcik event on thumbnail
     */

  }, {
    key: "activeThumbnail",
    value: function activeThumbnail(thumbindex, e) {
      var thumbnail = this.checkEventType(e),
          currentThumbnailSpan = document.createElement('span'),
          listThumbnail = thumbnail.querySelector('.galleria-thumbnails-list').getElementsByTagName('li');
      currentThumbnailSpan.innerText = 'Current thumbnail';
      currentThumbnailSpan.className = 'galleria-thumbnail__current-thumbnail';

      var _iterator = _createForOfIteratorHelper(listThumbnail),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var li = _step.value;
          li.classList.remove('active');

          if (li.querySelector('.galleria-thumbnail__current-thumbnail')) {
            li.querySelector('.galleria-thumbnail__current-thumbnail').remove();
          }
        }
        /*slider === 1
         ? listThumbnail[thumbindex + 3].classList.add('fade')
         : slider > lastTwoSlider
         ? null
         : listThumbnail[thumbindex + 2].classList.add('fade');*/

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      listThumbnail[thumbindex].classList.add('active');
      listThumbnail[thumbindex].appendChild(currentThumbnailSpan);
      this.translateThumbnails(thumbindex, e);
    }
    /**
     *
     * Move thumbnail
     *
     * @param {number} thumbnail index -
     * @param {event} user event - onlcik event on thumbnail
     */

  }, {
    key: "translateThumbnails",
    value: function translateThumbnails(thumbindex, e) {
      var thumbnailLi = this.checkEventType(e).querySelector('.galleria-thumbnails-list'),
          thumbnailLength = thumbnailLi.getElementsByTagName('li').length,
          translate = 0;

      if (thumbindex !== 0 && thumbnailLength > 4) {
        var galleria = thumbnailLi.getElementsByTagName('li');
        Array.from(galleria).forEach(function (e, i) {
          if (i < thumbindex - 1) {
            var style = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle;
            var width = parseInt(style.width) + parseInt(style.marginRight);
            translate += width;
          }
        });

        if (thumbindex >= 2) {
          thumbnailLi.style.setProperty('transform', 'translate(-' + translate + 'px)');
        } else {
          thumbnailLi.style.setProperty('transform', 'translate(0px)');
        }
      }
    }
  }]);

  return Defaultcarousel;
}(_carousel_constructor__WEBPACK_IMPORTED_MODULE_22__["default"]);



/***/ }),

/***/ "./src/patterns/image-carousel/default-carousel/default-carousel.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/image-carousel/default-carousel/default-carousel.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_carousel_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-carousel-constructor */ "./src/patterns/image-carousel/default-carousel/default-carousel-constructor.js");



var className = 'carousel-gallery';
/**
 *
 * Init the defualt gallery
 *
 *
 *
 * HTML e.g.
 *
 *  <div class="carousel-gallery-default">
 *      <div class="carousel-gallery">
 *          <h3>Gallery title</h3>
 *          <ul class="swiper-wrapper">
 *              <li class="swiper-slide">
 *                  <div class="swiper-slide__image-wrapper">
 *                      <img src="centre-healthcare-innovation-research.jpg" alt="Banner depicting ">
 *                  </div>
 *              </li>
 *              <li class="swiper-slide">
 *                  <div class="swiper-slide__image-wrapper">
 *                      <img class="lazy" src="centre-healthcare-innovation-research.jpg" alt="Banner depicting ">
 *                  </div>
 *              </li>
 *              <li class="swiper-slide">
 *                  <div class="swiper-slide__image-wrapper">
 *                      <img class="lazy" src="centre-healthcare-innovation-research.jpg" alt="Banner depicting ">
 *                      <noscript>
 *                          <img class="lazy" src="https://web2020.city.ac.uk/__data/assets/image/0019/341236/Phonetics-lab.jpg" alt="Woman using the phonetics lab">
 *                      </noscript>
 *                  </div>
 *              </li>
 *          </ul>
 *          <div class="galleria-thumbnails-wrap">
 *              <ul class="galleria-thumbnails-list">
 *                  <li class="galleria-thumbnail">
 *                      <img src="big_thumbnail.jpg" alt="Banner depicting "/>
 *                  </li>
 *                  <li class="galleria-thumbnail">
 *                      <img src="big_thumbnail.jpg" alt="Banner depicting "/>
 *                  </li>
 *                  <li class="galleria-thumbnail">
 *                      <img src="big_thumbnail.jpg" alt="Banner depicting "/>
 *                  </li>
 *              </ul>
 *          </div>
 *      </div>
 *  </div>
 *
 * @param {HTMLElement} elem - The element to carousel.
 */

function carouselGallery(elem) {
  var dc = new _default_carousel_constructor__WEBPACK_IMPORTED_MODULE_0__["default"](elem, {
    defaultCarousel: true,
    hidNumInd: true
  });
  dc.inital();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: carouselGallery,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/image-carousel/image-carousel.js":
/*!*******************************************************!*\
  !*** ./src/patterns/image-carousel/image-carousel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-constructor */ "./src/patterns/image-carousel/carousel-constructor.js");



var className = 'swiper-container';

function init(elem) {
  var c = new _carousel_constructor__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
  c.init();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: init,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/key-information/key-information--lifelong-learning.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/key-information/key-information--lifelong-learning.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_10__);













/**
 * Short courses/CPD key information
 *
 * @module patterns/key-information/key-information--lifelong-learning
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */

var className = 'key-information--lifelong-learning',
    loadMoreBatch = 3,
    arrowLeft = 'ArrowLeft',
    arrowRight = 'ArrowRight',
    oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_8__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = true;
/**
 * Initialise data atributes on the start dates.
 *
 * @param  {HTMLLIElement[]} startDates - The start dates.
 */

function prepareStartDates(startDates) {
  startDates.forEach(function (startDate, i) {
    startDate.setAttribute('tabindex', -1);
    startDate.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].label, "Start date ".concat(i + 1, " of ").concat(startDates.length));

    if (i < 1) {
      startDate.dataset.sliderposition = 0;
      startDate.dataset.loadmorevisible = true;
      startDate.dataset.hidden = false;
    } else if (i < loadMoreBatch) {
      startDate.dataset.sliderposition = 1;
      startDate.dataset.loadmorevisible = true;
      startDate.dataset.hidden = true;
    } else {
      startDate.dataset.sliderposition = 1;
      startDate.dataset.loadmorevisible = false;
      startDate.dataset.hidden = true;
    }
  });
}
/**
 * @param  {HTMLElement} keyInformation - The key information element.
 */


function updateButtonState(keyInformation) {
  var nextButton = keyInformation.querySelector(".".concat(className, "__controls__next")),
      prevButton = keyInformation.querySelector(".".concat(className, "__controls__prev")),
      loadMoreButton = keyInformation.querySelector(".".concat(className, "__controls__loadmore"));
  keyInformation.querySelector('[data-sliderposition="-1"]') ? prevButton.removeAttribute('disabled') : prevButton.setAttribute('disabled', true);
  keyInformation.querySelector('[data-sliderposition="1"]') ? nextButton.removeAttribute('disabled') : nextButton.setAttribute('disabled', true);

  if (loadMoreButton && !keyInformation.querySelector('[data-loadmorevisible="false"]')) {
    loadMoreButton.parentNode.removeChild(loadMoreButton);
  }
}
/**
 * Handle clicks on the next/previous buttons.
 *
 * @param  {HTMLElement} keyInformation - The keyInformation element.
 * @param  {Number} direction - The scroll direction, 1 = next, -1 = previous.
 */


function handleNextPrevClick(keyInformation, direction) {
  var startDates = Array.from(keyInformation.querySelectorAll(".".concat(className, "__dates > li"))),
      current = keyInformation.querySelector('[data-sliderposition="0"]'),
      currentPage = keyInformation.querySelector(".".concat(className, "__indicator__current")),
      nextButton = keyInformation.querySelector(".".concat(className, "__controls__next")),
      prevButton = keyInformation.querySelector(".".concat(className, "__controls__prev"));

  if (direction === 1) {
    var next = current.nextElementSibling;

    if (next) {
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true);
      next.addEventListener('transitionend', function focusNext() {
        next.removeEventListener('transitionend', focusNext, true);
        next.focus();
        updateButtonState(keyInformation);
      }, true);
      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
      }, true);
      current.dataset.sliderposition = -1;
      next.dataset.hidden = false;
      next.dataset.sliderposition = 0;
      next.dataset.loadmorevisible = true;
      currentPage.innerText = startDates.indexOf(next) + 1;
    }
  } else {
    var previous = current.previousElementSibling;

    if (previous) {
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true);
      previous.addEventListener('transitionend', function focusPrevious() {
        previous.removeEventListener('transitionend', focusPrevious, true);
        previous.focus();
        updateButtonState(keyInformation);
      }, true);
      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
      }, true);
      current.dataset.sliderposition = 1;
      previous.dataset.hidden = false;
      previous.dataset.sliderposition = 0;
      currentPage.innerText = startDates.indexOf(previous) + 1;
    }
  }
}
/**
 * Load another batch of start dates, remove the button if we're done.
 *
 * @param  {HTMLElement} keyInformation - The key information element.
 */


function handleLoadMoreClick(startDateList) {
  var hiddenDates = Array.from(startDateList.querySelectorAll(".".concat(className, "__dates > [data-loadmorevisible=\"false\"]"))),
      loadMoreButton = startDateList.querySelector(".".concat(className, "__controls__loadmore"));

  if (loadMoreBatch >= hiddenDates.length) {
    loadMoreButton.parentNode.removeChild(loadMoreButton);
    var registerInterestWrapper = document.createElement('div'),
        registerInterest = document.createElement('div'),
        registerInterestPromptText = document.createElement('strong'),
        registerInterestPromptParagraph = document.createElement('p'),
        registerInterestCtaBlock = document.createElement('ul'),
        registerInterestCta = document.createElement('li'),
        registerInterestCtaAnchor = document.createElement('a'),
        registerInterestCtaSpan = document.createElement('span');
    registerInterestWrapper.className = 'wrapper--key-information--lifelong-learning__register-interest', registerInterestWrapper.setAttribute('data-desktop-only', 'yes'), registerInterest.className = 'key-information--lifelong-learning__register-interest', registerInterestCtaBlock.className = 'cta-block key-information--lifelong-learning__register-interest', registerInterestCta.className = 'cta-block__cta', registerInterestCtaAnchor.setAttribute('href', 'https://forms.student-crm.com/Forms/view/04e49433-ebf1-4fae-8122-e768c03d5b2c'), registerInterestCtaAnchor.className = 'outline-cta--bright', registerInterestCtaSpan.appendChild(document.createTextNode('Register your interest')), registerInterestPromptText.appendChild(document.createTextNode('Want to find out more?')), registerInterestPromptParagraph.appendChild(registerInterestPromptText), registerInterest.appendChild(registerInterestPromptParagraph), registerInterest.appendChild(registerInterestCtaBlock), registerInterestCtaBlock.appendChild(registerInterestCta), registerInterestCta.appendChild(registerInterestCtaAnchor), registerInterestCtaAnchor.appendChild(registerInterestCtaSpan), registerInterestWrapper.appendChild(registerInterest);
    startDateList.after(registerInterestWrapper);
  }

  hiddenDates.slice(0, loadMoreBatch).forEach(function (date) {
    date.dataset.loadmorevisible = true;
  });
  var firstElement = hiddenDates.shift();

  if (firstElement && scrollTo && !Object(_util__WEBPACK_IMPORTED_MODULE_8__["verticallyInWindow"])(firstElement)) {
    zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(firstElement, scrollDuration);
  }

  firstElement && firstElement.focus();
}

function init(keyInformation) {
  var courses = keyInformation.querySelectorAll(".".concat(className, "-group"));
  courses.forEach(function (course) {
    launchKeyInformation(course);
  });
}
/**
 * Adds a slider and load more functionality to a short course key information section.
 *
 * @param  {HTMLElement} keyInformation - The key information element.
 */


function launchKeyInformation(startDateList) {
  var startDates = Array.from(startDateList.querySelectorAll(':scope .key-information--lifelong-learning__dates > li'));

  if (startDates.length < 2) {
    return;
  } else {
    startDateList.classList.add("".concat(className, "__dates--controllable"));
    startDateList.setAttribute('role', 'presentation');
  }

  var controlsWrapper = document.createElement('nav'),
      nextButton = document.createElement('button'),
      nextButtonSpan = document.createElement('span'),
      prevButton = document.createElement('button'),
      prevButtonSpan = document.createElement('span'),
      indicator = document.createElement('div'),
      currentPage = document.createElement('span'),
      totalPages = document.createElement('span'),
      divider = document.createElement('span'),
      dividerVisible = document.createElement('span'),
      dividerScreenReader = document.createElement('span'),
      loadMoreButton = document.createElement('button'),
      loadMoreButtonSpan = document.createElement('span');
  nextButtonSpan.appendChild(document.createTextNode('Next start date'));
  nextButton.appendChild(nextButtonSpan);
  nextButton.setAttribute('type', 'button');
  nextButton.className = className + '__controls__next';
  nextButton.addEventListener('click', function () {
    return handleNextPrevClick(startDateList, 1);
  }, true);
  prevButtonSpan.appendChild(document.createTextNode('Previous start date'));
  prevButton.appendChild(prevButtonSpan);
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('disabled', 'true');
  prevButton.className = className + '__controls__prev';
  prevButton.addEventListener('click', function () {
    return handleNextPrevClick(startDateList, -1);
  }, true);
  startDateList.addEventListener('keydown', function (e) {
    switch (e.key) {
      case arrowLeft:
        prevButton.click();
        break;

      case arrowRight:
        nextButton.click();
        break;

      default:
        break;
    }
  }, true);

  if (startDates.length > loadMoreBatch) {
    loadMoreButtonSpan.appendChild(document.createTextNode('Load more start dates'));
    loadMoreButton.appendChild(loadMoreButtonSpan);
    loadMoreButton.setAttribute('type', 'button');
    loadMoreButton.className = className + '__controls__loadmore';
    loadMoreButton.addEventListener('click', function () {
      return handleLoadMoreClick(startDateList);
    }, true);
  }

  currentPage.appendChild(document.createTextNode(1));
  currentPage.className = className + '__indicator__current';
  dividerVisible.appendChild(document.createTextNode('/'));
  dividerVisible.className = className + '__indicator__divider--visible';
  dividerVisible.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].hidden, 'true');
  dividerScreenReader.appendChild(document.createTextNode(' of '));
  dividerScreenReader.className = className + '__indicator__divider--sr';
  divider.appendChild(dividerVisible);
  divider.appendChild(dividerScreenReader);
  divider.className = className + '__indicator__divider';
  totalPages.appendChild(document.createTextNode(startDates.length));
  totalPages.className = className + '__indicator__total';
  indicator.appendChild(currentPage);
  indicator.appendChild(divider);
  indicator.appendChild(totalPages);
  indicator.className = className + '__indicator';
  controlsWrapper.appendChild(indicator);
  controlsWrapper.appendChild(prevButton);
  controlsWrapper.appendChild(nextButton);

  if (startDates.length > loadMoreBatch) {
    controlsWrapper.appendChild(loadMoreButton);
  }

  controlsWrapper.className = className + '__controls';
  controlsWrapper.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].label, 'Course start dates navigation');
  prepareStartDates(startDates);
  startDateList.appendChild(controlsWrapper);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: init,
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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");









/**
 * Link Finder
 *
 * @module patterns/link-finder/link-finder
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */

var className = 'link-finder';
/**
 * Prepends icon to anchor element.
 *
 * @param {HTMLElement} anchor - HTML element to prepend icon to
 * @param {string} className - class name to specify FA icon
 */

function prependIcon(anchor, className) {
  var node = document.createElement('span');
  node.className = 'fas ' + className + '  link-decorator';
  node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].hidden, true);
  anchor.parentNode.insertBefore(node, anchor);
}
/**
 * Adds icon inside anchor element.
 *
 * 1. Capture CTA text
 * 2. Clear CTA text
 * 3. Add data-theme attribute to anchor for icon styling
 * 4. Render CTA with sibling spans for icon type and CTA text
 *
 * @param {HTMLElement} anchor - HTML element to insert icon inside
 * @param {string} className - class name to specify FA icon
 */


function insertIcon(anchor, className) {
  var ctaText = anchor.textContent;
  anchor.textContent = '';
  anchor.setAttribute('data-theme', 'color');
  var spanNodeIcon = document.createElement('span');
  spanNodeIcon.className = 'link-decorator fas ' + className;
  var spanNodeText = document.createElement('span');
  var spanNodeTextContent = document.createTextNode(ctaText);
  spanNodeText.appendChild(spanNodeTextContent);
  anchor.appendChild(spanNodeIcon);
  anchor.appendChild(spanNodeText);
}
/**
 * Checks if anchor has to have external URL icon
 *
 * @param {HTMLElement} anchor - an anchor HTML element
 */


function findExternalLink(anchor) {
  if (anchor.origin !== window.location.origin && anchor.querySelectorAll('img').length < 1 && anchor.querySelectorAll('.fa-external-link').length < 1 && !anchor.parentElement.className.includes('cta-like-anchor') && anchor.className !== 'social-icon' && !anchor.className.includes('cta') && !anchor.parentElement.className.includes('cta-block') && !anchor.parentElement.className.includes('sc-content') && !anchor.parentElement.className.includes('card') && anchor.href.indexOf('mailto:') !== 0 && anchor.href.indexOf('tel:') !== 0 && anchor.href.indexOf('javascript:') !== 0 && anchor.origin) {
    var node = document.createElement('span');
    node.className = 'far fa-sharp fa-external-link inline-external-link';
    node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].label, '(external link)');
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
    if (anchor.href.indexOf('.' + key) !== -1) {
      var anchorText = anchor.textContent;
      anchorText += ' [' + key.toUpperCase() + ']';
      anchor.textContent = null;
      anchor.textContent = anchorText;

      if (anchor.parentElement.className.includes('cta-block')) {
        insertIcon(anchor, 'fa-file-' + fileTypes[key]);
      } else {
        prependIcon(anchor, 'fa-file-' + fileTypes[key]);
        break; // Ensures only one icon is prepended when duplicate file types exist, e.g. doc and docx
      }
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

/***/ "./src/patterns/menu/menu-formatters.js":
/*!**********************************************!*\
  !*** ./src/patterns/menu/menu-formatters.js ***!
  \**********************************************/
/*! exports provided: prepareNavigation, prepareSideNavigation, listenForNavigationToggles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareNavigation", function() { return prepareNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareSideNavigation", function() { return prepareSideNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenForNavigationToggles", function() { return listenForNavigationToggles; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");










/**
 * Generic navigation functions for menu and secondary navigation.
 *
 * @module menu-formatters
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */



var oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_8__["reduceMotion"])() ? 0 : oneSecond;
/**
 * Set sub-menu button attributes for the open/closed state.
 *
 * @param {HTMLButtonElement} button - The button to decorate.
 * @param {boolean} open - Should it be open?
 * @param {string} buttonTextClassName - The class of the text span.
 */

function setNavigationItemButtonDetails(button, open, rootClass) {
  var navigationItem = button.closest('li'),
      sectionText = navigationItem.dataset.title + ' section',
      buttonClassName = rootClass + '__button',
      buttonTextClassName = buttonClassName + '__text',
      textSpan = button.querySelector(".".concat(buttonTextClassName)),
      text = open ? 'Close ' : 'Open ';
  open && Array.from(button.closest('ul').querySelectorAll('button')).forEach(function (button) {
    return setNavigationItemButtonDetails(button, false, rootClass);
  });
  navigationItem.dataset.open = open;
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
/**
 * Toggle a sub-navigation open or closed.
 */


function toggleSubNavigation(button, rootClass) {
  var expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded); // Menu slide open/close animation for mobile menu

  if (expanded === 'true') {
    button.parentNode.parentNode.classList.remove('menu-animation__slideOpen');
    button.parentNode.parentNode.classList.add('menu-animation__slideClose');
    setTimeout(function () {
      button.parentNode.parentNode.classList.remove('menu-animation__slideClose');
    }, 1000); // fixes a bug with sub menu, when opening and closing burger bun after interaction already took place inside the menu
  } else {
    button.parentNode.parentNode.classList.remove('menu-animation__slideClose');
    button.parentNode.parentNode.classList.add('menu-animation__slideOpen');
  }

  Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(expanded) ? setNavigationItemButtonDetails(button, false, rootClass) : setNavigationItemButtonDetails(button, true, rootClass);
  zenscroll__WEBPACK_IMPORTED_MODULE_7___default.a.intoView(button.closest('li'), scrollDuration);
}
/**
 * Decorate sub-navigation element with the appropriate attributes.
 *
 * @param {HTMLLIElement} navigationItem - The list item representing button navigation item.
 * @param {string} rootClass - The class of the navigation element.
 */


function prepareSubNavigation(navigationItem, rootClass) {
  var navigationItemBtn = document.createElement('button'),
      iconSpan = document.createElement('span'),
      textSpan = document.createElement('span'),
      controlsClassName = rootClass + '__controls',
      buttonClassName = rootClass + '__button',
      buttonTextClassName = buttonClassName + '__text',
      buttonIconClassName = buttonClassName + '__icon',
      currentClassName = rootClass + '__current',
      hierarchyClassName = rootClass + '__hierarchy',
      controlsWrapper = navigationItem.querySelector(".".concat(controlsClassName));
  navigationItemBtn.setAttribute('type', 'button');
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].hidden, 'true');
  iconSpan.className = "".concat(buttonIconClassName, " fal fa-sharp fa-fw");
  textSpan.className = "".concat(buttonTextClassName);
  Object(_util__WEBPACK_IMPORTED_MODULE_8__["appendAll"])(navigationItemBtn, [iconSpan, textSpan]);
  controlsWrapper.appendChild(navigationItemBtn);

  if (navigationItem.className.indexOf(currentClassName) >= 0 || navigationItem.className.indexOf(hierarchyClassName) >= 0) {
    setNavigationItemButtonDetails(navigationItemBtn, true, rootClass);
  } else {
    setNavigationItemButtonDetails(navigationItemBtn, false, rootClass);
  }
}
/**
 * Iterate over the navigation lists, transforming them into the initial
 * navigation with the current asset lineage open.
 *
 * @param {HTMLElement} navigation - The navigation container.
 * @param {string} rootClass - The class of the navigation element.
 */


function prepareNavigation(navigation, rootClass) {
  Array.from(navigation.querySelectorAll('li')).forEach(function (navigationItem) {
    var subNavigation = navigationItem.querySelector('ul');
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
/**
 * Iterate over the navigation lists, transforming them into the initial
 * navigation with the current asset lineage open. When side navigation it creates extra control elements.
 *
 * @param {HTMLElement} navigation - The navigation container.
 * @param {string} rootClass - The class of the navigation element.
 */

function prepareSideNavigation(navigation, rootClass) {
  var controlsClassName = rootClass + '__controls';
  Array.from(navigation.querySelectorAll('li')).forEach(function (navigationItem) {
    var link = navigationItem.querySelector('a'),
        subNavigation = navigationItem.querySelector('ul'),
        linkText = 'Visit ' + navigationItem.dataset.title,
        textWrapper = document.createElement('span'),
        controlsWrapper = document.createElement('div');
    controlsWrapper.className = controlsClassName;
    textWrapper.appendChild(link.firstChild.cloneNode(true));
    link.replaceChild(textWrapper, link.firstChild);
    link.title = linkText;
    navigationItem.replaceChild(controlsWrapper, link);
    controlsWrapper.appendChild(link);
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
/**
 * Open/close the sub-menu when its button is clicked.
 *
 * @param {HTMLUListElement} subNavigation - Toggle the sub-navigation when its button is clicked.
 * @param {string} rootClass - The class of the navigation element.
 */

function listenForNavigationToggles(subNavigation, rootClass) {
  Array.from(subNavigation.querySelectorAll('button')).forEach(function (button) {
    return button.addEventListener('click', function () {
      return toggleSubNavigation(button, rootClass);
    }, true);
  });
}

/***/ }),

/***/ "./src/patterns/menu/menu.js":
/*!***********************************!*\
  !*** ./src/patterns/menu/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _menu_formatters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-formatters */ "./src/patterns/menu/menu-formatters.js");










/**
 * Global menu
 *
 * @module patterns/menu/menu
 * @author Web Development
 * @copyright City St George's, University of London 2018-2020
 */




var className = 'menu',
    hierarchyClassName = className + '__hierarchy',
    currentClassName = className + '__current',
    veilClassName = className + '__veil',
    contentClassName = className + '__content',
    contentHeaderClassName = contentClassName + '__header',
    currentPage = contentHeaderClassName + '--current',
    controlsClassName = className + '__controls',
    buttonDisplayClassName = className + '__display__button',
    buttonClassName = className + '__button',
    level1ClassName = className + '__level1',
    buttonTextClassName = buttonClassName + '__text';
/**
 * Creates a function for setting a menu to be open or closed.
 *
 * @param {HTMLElement} menu - The menu container.
 * @param {HTMLButtonElement} button - The button that toggles the menu.
 * @returns {Function} A function that will set the menu to be open/closed.
 */

function menuSetter(menu, button) {
  /**
   * @param {boolean} open - Set the menu to be open?
   */
  var setMenu = function setMenu(open) {
    var buttonText = button.querySelector(".".concat(buttonTextClassName));
    menu.dataset.open = open;
    buttonText.innerText = open ? 'Close' : 'Menu';
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded, open);
  };

  return setMenu;
}
/**
 * Opens or closes the menu, (de)activates the focus trap if provided, and
 * scrolls the sub-menus so that the current page lineage or open menus are in
 * view.
 *
 * @param {HTMLButtonElement} button - The button for toggling the menu.
 * @param {Function} setMenu - A function for setting menu attributes to be open/closed.
 * @param {object} trap - The focus trap object.
 * @param {HTMLElement} veil - The veiling element.
 */


function toggleMenu(button, setMenu, trap, veil) {
  var expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].expanded);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["toBool"])(expanded)) {
    trap.deactivate();
    veil.dataset.on = 'false';
    setMenu(false);
  } else {
    setMenu(true);
    veil.dataset.on = 'true';
    trap.activate();
  }
}
/**
 * Turn the menu label into a button to toggle the menu open and closed.
 *
 * While the menu is open, a focus trap should limit tab indexing to the menu
 * and its button.
 *
 * @param {HTMLElement} label - The menu label.
 * @param {HTMLButtonElement} button - A button element.
 * @param {Function} setMenu - A function to open/close the menu.
 * @param {HTMLElement} veil - The veiling element.
 */


function createMenuToggle(label, button, setMenu, veil) {
  var buttonWrapper = document.createElement('div'),
      menu = label.closest(".".concat(className));
  button.className = 'menu__display__button__button';
  buttonWrapper.className = 'menu__display__button__button__wrapper';
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].hasPopup, 'menu');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].label, 'Toggle menu');
  Array.from(label.childNodes).forEach(function (child) {
    return buttonWrapper.appendChild(child);
  });
  button.appendChild(buttonWrapper);
  var trap = focus_trap__WEBPACK_IMPORTED_MODULE_7___default()(menu, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: function initialFocus() {
      var open = Array.from(menu.querySelectorAll([".".concat(contentHeaderClassName, " span"), ".".concat(currentClassName, " > .").concat(controlsClassName, " > a"), ".".concat(hierarchyClassName, " > .").concat(controlsClassName, " > a"), ".".concat(level1ClassName, " > ul > li:first-of-type > .").concat(controlsClassName, " > a"), ".".concat(currentPage, " > a")].join(','))).filter(function (elem) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_8__["isVisible"])(elem);
      });
      return open[open.length - 1];
    },
    onDeactivate: function onDeactivate() {
      return toggleMenu(button, setMenu, trap, veil);
    },
    clickOutsideDeactivates: true
  });
  button.addEventListener('click', function () {
    return toggleMenu(button, setMenu, trap, veil);
  }, true);
}
/**
 * Transform the Matrix-generated menu lists into an interactive menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function launchMenu(menu) {
  // During testing only: remove 'under construction' indicators globally
  //     menu.innerHTML = menu.innerHTML.replace(/\(\( /g, '').replace(/ \)\)/g, '');
  var label = menu.querySelector(".".concat(buttonDisplayClassName)),
      button = document.createElement('button'),
      veil = document.createElement('div'),
      setMenu = menuSetter(menu, button);
  veil.className = veilClassName;
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  createMenuToggle(label, button, setMenu, veil);
  label.appendChild(button);
  setMenu(false);
  Object(_menu_formatters__WEBPACK_IMPORTED_MODULE_10__["prepareNavigation"])(menu.querySelector(".".concat(level1ClassName)), className);
  Object(_menu_formatters__WEBPACK_IMPORTED_MODULE_10__["listenForNavigationToggles"])(menu.querySelector(".".concat(level1ClassName)), className);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchMenu,
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_9__);









/**
 * modal
 *
 * @module patterns/pagination/pagination
 * @author Web Development
 * @copyright City St George's, University of London 2018
 *
 */




var className = 'modal',
    bodyClassName = className + '__body',
    escapeKey = 'Escape',
    oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_6__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = true;
var trap;
/**
 * launch function
 *
 * @param {HTMLElement} modal - an HTML element with the modal class.
 */

function launchModal(modal) {
  var dialogArray = [];
  var dialogTopic = modal.getAttribute('data-topic');
  Array.from(modal.children).forEach(function (list, i) {
    if (!list.dataset.modalcontent || list.dataset.modalcontent === 'true') {
      var wrapper = document.createElement('div'),
          listButton = document.createElement('button'),
          listButtonSpan = document.createElement('span'),
          listBody = Array.from(list.childNodes),
          listHeader = list.firstElementChild,
          listLabel = list.getAttribute('data-label'),
          customHeader = list.getAttribute('data-header'),
          format = list.getAttribute('data-keepformat'),
          header = document.createElement('div');
      var title,
          keepFormat = Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(format),
          shortName = list.getAttribute('data-shortname'),
          label = listLabel || false;
      listButton.classList.add('modal__button');
      listButton.setAttribute('type', 'button');
      listButton.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].label, 'Open dialog');
      listButtonSpan.classList.add('inline-text');
      listButton.appendChild(listButtonSpan);
      list.appendChild(wrapper);
      Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(wrapper, listBody);
      wrapper.classList.add("".concat(bodyClassName));

      if (customHeader) {
        title = customHeader;
      } else {
        title = listHeader.innerText;
      }

      if (shortName === null) {
        shortName = listHeader.innerText;
      }

      if (keepFormat) {
        list.insertBefore(listHeader, wrapper);
        listHeader.addEventListener('click', function () {
          createDialog(modal, "".concat(i), dialogArray);
        });
      } else {
        listButtonSpan.textContent = listHeader.textContent;
        header.appendChild(listHeader);
        list.insertBefore(listButton, wrapper);
        listButton.addEventListener('click', function () {
          createDialog(modal, "".concat(i), dialogArray);
        });
      }

      dialogArray.push({
        title: title,
        body: wrapper.innerHTML,
        topic: dialogTopic,
        shortname: shortName,
        label: label
      });
    }
  });
}
/**
 * function that creates a pop-up dialog, linked to click event in launchModal(modal)
 *
 * @param {HTMLElement} parent - an HTML element with the modal class.
 * @param {number} position - position of the <li> in the <ul>
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 *
 */


function createDialog(parent, position, dialogArray) {
  var slider = Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(parent.getAttribute('data-slider')),
      type = parent.dataset.type;
  var closeBtn = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('button', [{
    label: 'class',
    val: 'dialog__close fa-sharp fa-solid fa-xmark icon'
  }, {
    label: 'aria-label',
    val: 'Close modal'
  }]);
  var dialog = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog'
  }, {
    label: 'data-position',
    val: "".concat(position)
  }, {
    label: 'data-type',
    val: "".concat(type)
  }]);
  var bodyWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__content'
  }]);
  var wrapperWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__inner'
  }, {
    label: 'role',
    val: 'role'
  }]);
  var dialogStrapline = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('p', [{
    label: 'class',
    val: 'dialog__strapline'
  }]);
  var dialogTitle = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('p', [{
    label: 'class',
    val: 'dialog__heading'
  }]);
  var dialogBody = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__body-copy'
  }]);
  var dialogLabel = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('p', [{
    label: 'class',
    val: 'dialog__label'
  }]);
  dialogTitle.innerText = dialogArray[position].title;
  dialogBody.innerHTML = dialogArray[position].body;
  dialogStrapline.innerHTML = dialogArray[position].topic;
  dialogArray[position].label ? dialogLabel.innerHTML = dialogArray[position].label : null;
  bodyWrapper.appendChild(closeBtn);
  bodyWrapper.appendChild(dialogStrapline);
  bodyWrapper.appendChild(dialogTitle);
  bodyWrapper.appendChild(dialogLabel);
  bodyWrapper.appendChild(dialogBody);
  wrapperWrapper.appendChild(bodyWrapper);
  dialog.appendChild(wrapperWrapper);
  var main = document.querySelector('main');
  main.appendChild(dialog);
  dialog.addEventListener('keydown', function (e) {
    if (e.key === escapeKey) {
      e.preventDefault();
      Object(_util__WEBPACK_IMPORTED_MODULE_6__["enableBodyScroll"])();
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  dialog.addEventListener('click', function (e) {
    if (e.target.classList.contains('dialog')) {
      e.preventDefault();
      e.stopPropagation();
      Object(_util__WEBPACK_IMPORTED_MODULE_6__["enableBodyScroll"])();
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeDialog(dialog, parent);
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["enableBodyScroll"])();
    trap.deactivate();
  });
  trapFocus(dialog);
  Object(_util__WEBPACK_IMPORTED_MODULE_6__["disableBodyScroll"])();

  if (slider && dialogArray.length > 1) {
    createControl(dialog, dialogArray);
  }
}
/**
 * function that creates pager button on dialog box
 * this function is triggered by createDialog() if the HTML element with classname modal has data[slider] set to true
 *
 * @param {HTMLElement} dialog - an HTML element created by createDialog()
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 *
 */


function createControl(dialog, dialogArray) {
  var position = parseInt(dialog.getAttribute('data-position'));
  var buttonWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__slider-control'
  }]);
  var buttonPrev = controlButton(dialogArray, position, 'left');
  var buttonNext = controlButton(dialogArray, position, 'right');
  buttonNext.addEventListener('click', function (e) {
    e.preventDefault();
    var pos = buttonNext.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonPrev.addEventListener('click', function (e) {
    e.preventDefault();
    var pos = buttonPrev.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonWrapper.appendChild(buttonPrev);
  buttonWrapper.appendChild(buttonNext);
  var dialogContent = dialog.querySelector('.dialog__content');
  dialogContent.appendChild(buttonWrapper);
}
/**
 * function attached to control button (created by function 'createControl()') click event
 * it rerenders title, body, button labels of dialog
 *
 * @param {HTMLElement} dialog - an HTML element created by createDialog()
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} nextState - position of object in dialogArray that will be used to update dialog title, body, and button labels
 *
 */


function addDialogEvent(dialog, dialogArray, nextState) {
  nextState = parseInt(nextState);
  dialog.querySelector('.dialog__heading').innerText = dialogArray[nextState].title;
  dialogArray[nextState].label ? dialog.querySelector('.dialog__label').innerHTML = dialogArray[nextState].label : dialog.querySelector('.dialog__label') ? dialog.querySelector('.dialog__label').innerHTML = '' : null;
  dialog.querySelector('.dialog__body-copy').innerHTML = dialogArray[nextState].body;

  if (nextState === 0) {
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', "".concat(dialogArray.length - 1));
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[dialogArray.length - 1].shortname;
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', "".concat(nextState + 1));
  } else if (nextState === dialogArray.length - 1) {
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', "".concat(nextState - 1));
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[0].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', '0');
  } else {
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', "".concat(nextState - 1));
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', "".concat(nextState + 1));
  }
}
/**
 * function that creates HTML structure of dialog control buttons
 *
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} position - position of the <li> in the <ul>, used to calculate nextState
 * @param {string} direction - either "left" or "right", this will determine the type of icon being attached to the button
 *
 */


function controlButton(dialogArray, position, direction) {
  var button = document.createElement('button');
  var buttonLabel = document.createElement('span');
  buttonLabel.classList.add('dialog__underline-transition');
  var nextState = checkNextState(dialogArray, position, direction);
  button.setAttribute('data-nextstate', "".concat(nextState));

  if (dialogArray[nextState].shortname) {
    buttonLabel.innerText = dialogArray[nextState].shortname;
  } else {
    buttonLabel.innerText = dialogArray[nextState].title;
  }

  var buttonIcon = Object(_util__WEBPACK_IMPORTED_MODULE_6__["createHTMLElement"])('span', [{
    label: 'class',
    val: "icon far fa-sharp fa-long-arrow-".concat(direction)
  }]);

  if (direction === 'left') {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].label, 'previous item');
  } else {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].label, 'next item');
  }

  var buttonLabelWrapper = document.createElement('div');
  buttonLabelWrapper.appendChild(buttonLabel);
  button.appendChild(buttonIcon);
  button.appendChild(buttonLabelWrapper);
  return button;
}
/**
 * function calculates and returns nextState
 * it will be used to create click event of control button
 *
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} position - position of the <li> in the <ul>, used to calculate nextState
 * @param {string} direction - either "left" or "right"
 *
 */


function checkNextState(dialogArray, position, direction) {
  var pos = parseInt("".concat(position));
  var nextState;

  if (pos === 0) {
    if (direction === 'left') {
      nextState = dialogArray.length - 1;
    } else {
      nextState = pos + 1;
    }
  } else if (pos === dialogArray.length - 1) {
    if (direction === 'left') {
      nextState = pos - 1;
    } else {
      nextState = 0;
    }
  } else {
    if (direction === 'left') {
      nextState = pos - 1;
    } else {
      nextState = pos + 1;
    }
  }

  return nextState;
}
/**
 * removes dialog from document
 *
 * @param {HTMLElement} dialog - HTML element created by created by function createDialog()
 * @param {HTMLElement} background - background of dialog
 *
 */


function closeDialog(dialog, modal) {
  var parent = dialog.parentNode;
  parent.removeChild(dialog);

  if (scrollTo && !Object(_util__WEBPACK_IMPORTED_MODULE_6__["verticallyInWindow"])(modal)) {
    zenscroll__WEBPACK_IMPORTED_MODULE_9___default.a.to(modal, scrollDuration);
  }
}

function trapFocus(modal) {
  var modalInner = modal.querySelector('.dialog__inner');
  trap = focus_trap__WEBPACK_IMPORTED_MODULE_8___default()(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchModal,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/mouseover-gallery/mouseover-gallery.js":
/*!*************************************************************!*\
  !*** ./src/patterns/mouseover-gallery/mouseover-gallery.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);


















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Rollover gallery
 *
 * @module patterns/mouseover-gallery/mouseover-gallery
 * @author Web Development
 * @copyright City St George's, University of London 2023
 */
var className = 'mouseover-gallery';
/**
 * Makes a series of links change a media container's visibility, displaying a corresponding image if there is a matched ID.
 *
 * @param {HTMLHeadingElement} mouseoverGallery - A mouseover gallery.
 */

function launchMouseoverGallery(mouseoverGallery) {
  var mediaElementsWrap = mouseoverGallery.querySelector('.wrap--research__media'),
      mediaElements = mediaElementsWrap.querySelectorAll('.media__container'),
      pictureElements = mediaElementsWrap.querySelectorAll('picture'),
      mediaBaseElement = mediaElementsWrap.querySelector('.base'),
      links = mouseoverGallery.querySelectorAll('a'),
      resetMediaDelay = 200;
  var allImages,
      resetMediaTimeout = null;
  /**
   * Example HTML for pattern. Ensure data-id is the same on the picture and anchor elements.
   *
   *  <div class="mouseover-gallery">
   *      <div class="wrap--research__media">
   *          <picture data-id="[shared ID]" class="media__container out">
   *              <source srcset="[image path]">
   *              <img srcset="[image path]" class="media__container__img" alt="[image description]">
   *          </picture>
   *      </div>
   *      <div class="wrap--research__links">
   *          <ul>
   *              <li class="research__link">
   *                  <a href="https://www.city.ac.uk/about/schools" class="linked-heading" data-id="[shared ID]" data-image="[image-path]"></a>
   *              </li>
   *          </ul>
   *      </div>
   *  </div>
   */

  mediaElements.length === pictureElements.length ? allImages = true : allImages = false; // Only run mouseover behaviour if all media assets are images
  // Only run mouseover behaviour if all media assets are images

  if (allImages) {
    var _iterator = _createForOfIteratorHelper(links),
        _step;

    try {
      var _loop = function _loop() {
        var link = _step.value;
        link.addEventListener('mouseenter', function () {
          clearTimeout(resetMediaTimeout);
          mediaBaseElement.classList.replace('in', 'out');
          mediaElements.forEach(function (media) {
            if (media.dataset.id === link.dataset.id) {
              media.classList.replace('out', 'in');
            } else {
              media.classList.replace('in', 'out');
            }
          });
        });
        link.addEventListener('mouseleave', function () {
          var mediaElem = mouseoverGallery.querySelector("[data-id='".concat(link.dataset.id, "']"));
          resetMediaTimeout = setTimeout(function () {
            mediaElem.classList.replace('in', 'out');
            mediaBaseElement.classList.replace('out', 'in');
          }, resetMediaDelay);
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchMouseoverGallery,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/navigation/navigation-primary.js":
/*!*******************************************************!*\
  !*** ./src/patterns/navigation/navigation-primary.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");









/**
 * Secondary navigation
 *
 * @module patterns/navigation/navigation-primary
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */


var className = 'navigation',
    classNameSpecific = className + '--primary',
    topLevelClassName = classNameSpecific + '__section-text',
    buttonClassName = className + '__button',
    openCloseTextClassName = buttonClassName + '__open-close',
    navigationTextClassName = buttonClassName + '__navigation',
    headerClassName = classNameSpecific + '__menu__header',
    veilClassName = className + '__veil',
    openText = 'Open',
    closeText = 'Close',
    navigationText = 'navigation section',
    tabKey = 'Tab',
    escapeKey = 'Escape';
/**
 * Return a function to toggle everything closed.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 * @param {HTMLElement} veil - The veiling element.
 * @returns {function} - A function for toggling all the menus closed.
 */

function createCloseAll(navigation, veil) {
  return function () {
    var buttons = Array.from(navigation.querySelectorAll('.navigation--primary__level1 > .navigation__button'));
    buttons.forEach(function (button) {
      var open = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded);

      if (open === 'true') {
        button.classList.remove('menu-animation__slideOpen');
        button.classList.add('menu-animation__slideClose');
      }

      button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded, 'false');
      button.querySelector(".".concat(openCloseTextClassName)).replaceChild(document.createTextNode(openText), button.querySelector(".".concat(openCloseTextClassName)).firstChild);
    });
    veil.dataset.on = 'false';
  };
}
/**
 * Return a function to toggle whether a navigation section is open.
 * @param {HTMLElement} button - The button to toggle.
 * @param {function} closeAll - A function for closing all menus.
 * @param {HTMLElement} veil - The veiling element.
 * @returns {function} - A function for toggling a menu open or closed.
 */


function createSectionToggle(button, closeAll, veil) {
  return function () {
    var open = !Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded));
    closeAll();

    if (open) {
      button.closest(".".concat(classNameSpecific)).dataset.open = 'true';
      button.classList.remove('menu-animation__slideClose');
      button.classList.add('menu-animation__slideOpen');
      veil.dataset.on = 'true';
      button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded, open);
      button.querySelector(".".concat(openCloseTextClassName)).replaceChild(document.createTextNode(closeText), button.querySelector(".".concat(openCloseTextClassName)).firstChild);
    }
  };
}
/**
 * Create toggle buttons from the top level anchors.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 * @param {HTMLElement} veil - The veiling element.
 * @param {function} closeAll - A function for closing all menus.
 */


function prepareTopLevel(navigation, veil, closeAll) {
  var topLevels = Array.from(navigation.querySelectorAll(".".concat(topLevelClassName)));
  topLevels.forEach(function (el) {
    var listItem = el.parentNode,
        button = document.createElement('button'),
        buttonDiv = document.createElement('div'),
        srOpenCloseSpan = document.createElement('span'),
        srNavigationSpan = document.createElement('span'),
        toggleSection = createSectionToggle(button, closeAll, veil); // LIs have tabindex so they're accessible with no JS, remove it

    el.removeAttribute('tabindex');
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded, 'false');
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].owns, el.nextElementSibling.id);
    button.setAttribute('type', 'button');
    button.id = el.nextElementSibling.id + '-button';
    button.className = buttonClassName;
    srOpenCloseSpan.className = openCloseTextClassName;
    srOpenCloseSpan.appendChild(document.createTextNode(openText));
    srNavigationSpan.className = navigationTextClassName;
    srNavigationSpan.appendChild(document.createTextNode(navigationText));
    button.addEventListener('click', function () {
      return toggleSection();
    }, true);
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(buttonDiv, [srOpenCloseSpan, document.createTextNode(' '), el, document.createTextNode(' '), srNavigationSpan]);
    button.append(buttonDiv);
    listItem.prepend(button);
  });
}
/**
 * Add event listeners to top level buttons enabling shift-tabbing into the previous
 * section.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 * @param {function} closeAll - A function for closing all menus.
 * @param {HTMLElement} veil - The veiling element.
 */


function setupTabPrevious(navigation, closeAll, veil) {
  var firstButton = navigation.querySelector('.navigation--primary__level1:first-of-type > .navigation__button'),
      restButtons = Array.from(navigation.querySelectorAll('.navigation--primary__level1:not(:first-of-type) > .navigation__button')); // If we tab out of the open, first menu into the other header content, close the menu.

  firstButton.addEventListener('keydown', function (e) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(firstButton.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded)) && tabKey === e.key && e.shiftKey) {
      closeAll();
    }
  });
  restButtons.forEach(function (thisSectionButton) {
    var previousSection = thisSectionButton.parentElement.previousElementSibling,
        previousSectionButton = previousSection.querySelector('button'),
        lastNavigationAnchor = previousSection.querySelector('.navigation__level2 > li:last-of-type > a') ? previousSection.querySelector('.navigation__level2 > li:last-of-type > a') : previousSection.querySelector('.navigation__level2 > li:last-of-type').previousElementSibling.querySelector('a'),
        togglePreviousSection = createSectionToggle(previousSectionButton, closeAll, veil);
    thisSectionButton.addEventListener('keydown', function (e) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(thisSectionButton.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded)) && tabKey === e.key && e.shiftKey) {
        e.preventDefault();
        togglePreviousSection();
        lastNavigationAnchor.focus();
      }
    }, true);
  });
}
/**
 * Add event listeners to the final anchor in each section allowing tabbing into
 * the next navigation section.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 * @param {function} closeAll - A function to close the entire menu.
 * @param {HTMLElement} veil - The veiling element.
 */


function setupTabNext(navigation, closeAll, veil) {
  var closeButton = navigation.querySelector('.navigation--primary__level1:last-of-type .wrapper--navigation--primary__menu__close button'),
      restSectionsCloseButtons = Array.from(navigation.querySelectorAll('.navigation--primary__level1:not(:last-of-type) .wrapper--navigation--primary__menu__close button')); // If we tab out of the open, first menu into the other header content, close the menu.

  closeButton.addEventListener('keydown', function (e) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["toBool"])(closeButton.closest('.navigation--primary__level1').querySelector('button').getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].expanded)) && tabKey === e.key && !e.shiftKey) {
      closeAll();
    }
  });
  restSectionsCloseButtons.forEach(function (closeButton) {
    var nextSectionButton = closeButton.closest('.navigation--primary__level1').nextElementSibling.querySelector('button'),
        toggleNextSection = createSectionToggle(nextSectionButton, closeAll, veil);
    closeButton.addEventListener('keydown', function (e) {
      if (tabKey === e.key && !e.shiftKey) {
        e.preventDefault();
        toggleNextSection();
        nextSectionButton.closest('.navigation--primary__level1').querySelector(".".concat(headerClassName, " a")).focus();
      }
    }, true);
  });
}
/**
 * Wrap anchor text in spans for styling.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 */


function prepareLowerLevels(navigation) {
  Array.from(navigation.querySelectorAll('.navigation__level2 li')).forEach(function (navigationItem) {
    var link = navigationItem.querySelector('a'),
        textWrapper = document.createElement('span');
    textWrapper.appendChild(link.firstChild.cloneNode(true));
    link.replaceChild(textWrapper, link.firstChild);
  });
}
/**
 * Wrap header text in spans for styling.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 */


function prepareHeaders(navigation) {
  Array.from(navigation.querySelectorAll('.navigation--primary__level1')).forEach(function (headertop) {
    Array.from(headertop.querySelectorAll(".".concat(headerClassName))).forEach(function (header) {
      var link = header.querySelector('a'),
          textWrapper = document.createElement('span');

      if (!link) {
        var currentPageWrapper = document.createElement('span'),
            linkText = header.firstChild.wholeText.trim() + ' overview';
        textWrapper.appendChild(document.createTextNode(linkText));
        currentPageWrapper.appendChild(textWrapper);
        header.replaceChild(currentPageWrapper, header.firstChild);
      } else {
        textWrapper.innerText = headertop.getAttribute('data-title') + ' overview';
        link.replaceChild(textWrapper, link.firstChild);
      }
    });
  });
}
/**
 * Add close buttons to menu sections.
 *
 * @param {HTMLElement} navigation
 */


function addCloseButtons(navigation, closeAll) {
  Array.from(navigation.querySelectorAll('.navigation--primary__menu__content')).forEach(function (menu) {
    var header = menu.querySelector(".".concat(headerClassName)),
        closeButtonWrapper = document.createElement('div'),
        closeButton = document.createElement('button'),
        closeButtonDiv = document.createElement('div'),
        closeButtonText = document.createElement('span'),
        closeButtonIcon = document.createElement('span'),
        text = 'Close ' + header.innerText.trim() + ' menu';
    closeButtonText.appendChild(document.createTextNode(text));
    closeButtonText.className = 'navigation--primary__menu__close__text';
    closeButtonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].hidden, 'true');
    closeButtonIcon.className = 'fa-sharp fa-solid fa-xmark icon navigation--primary__menu__close__icon';
    closeButtonWrapper.className = 'wrapper--navigation--primary__menu__close';
    closeButton.className = 'navigation--primary__menu__close';
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["appendAll"])(closeButtonDiv, [closeButtonText, closeButtonIcon]);
    closeButton.appendChild(closeButtonDiv);
    closeButton.setAttribute('type', 'button');
    closeButton.title = text;
    closeButton.addEventListener('click', function () {
      return closeAll();
    }, true);
    closeButtonWrapper.appendChild(closeButton);
    menu.appendChild(closeButtonWrapper);
  });
}
/**
 * Transform the Matrix-generated navigation lists into an interactive menu.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 */


function launchPrimaryNavigation(navigation) {
  // During testing only: remove 'under construction' indicators globally
  //     navigation.innerHTML = navigation.innerHTML
  //         .replace(/\(\( /g, '')
  //         .replace(/ \)\)/g, '');
  var veil = document.createElement('div'),
      closeAll = createCloseAll(navigation, veil);
  veil.className = veilClassName;
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  prepareTopLevel(navigation, veil, closeAll);
  prepareLowerLevels(navigation, veil);
  prepareHeaders(navigation);
  addCloseButtons(navigation, closeAll); // Allow tabbing from one section to another,
  // and close when tabbing out of the navigation

  setupTabPrevious(navigation, closeAll, veil);
  setupTabNext(navigation, closeAll, veil); // If the navigation is open, close on escape.

  navigation.addEventListener('keydown', function (e) {
    if (navigation.querySelector(".".concat(buttonClassName, "[aria-expanded='true']")) && escapeKey === e.key) {
      e.preventDefault();
      closeAll();
    }
  }, true); // If the navigation is open, close it on click outside it.

  window.addEventListener('click', function (e) {
    if (navigation.querySelector(".".concat(buttonClassName, "[aria-expanded='true']")) && !e.target.closest(".".concat(classNameSpecific))) {
      closeAll();
    }
  }, true);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchPrimaryNavigation,
  launchQuery: ".".concat(classNameSpecific)
});

/***/ }),

/***/ "./src/patterns/navigation/navigation-secondary.js":
/*!*********************************************************!*\
  !*** ./src/patterns/navigation/navigation-secondary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_menu_formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu-formatters */ "./src/patterns/menu/menu-formatters.js");


/**
 * Secondary navigation
 *
 * @module patterns/navigation/navigation-secondary
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */

var className = 'navigation',
    classNameSpecific = className + '--secondary';
/**
 * Transform the Matrix-generated navigation lists into an interactive menu.
 *
 * @param {HTMLElement} navigation - The secondary navigation element.
 */

function launchSecondaryNavigation(navigation) {
  // During testing only: remove 'under construction' indicators globally
  //     navigation.innerHTML = navigation.innerHTML
  //         .replace(/\(\( /g, '')
  //         .replace(/ \)\)/g, '');
  Object(_menu_menu_formatters__WEBPACK_IMPORTED_MODULE_0__["prepareSideNavigation"])(navigation, className);
  Object(_menu_menu_formatters__WEBPACK_IMPORTED_MODULE_0__["listenForNavigationToggles"])(navigation, className);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchSecondaryNavigation,
  launchQuery: ".".concat(classNameSpecific)
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
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pagination/pagination.js */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../aria-attributes.js */ "./src/aria-attributes.js");











/**
 * Paginated list
 *
 * @module patterns/paginated-list/paginated-list
 * @author Web Development
 * @copyright City St George's, University of London 2018
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
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeClass"])(list, className, false);
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
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["removeClass"])(list, className, false);
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
    page.className = _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_8__["pageClassName"];
    page.setAttribute('tabindex', -1);
    page.setAttribute(_aria_attributes_js__WEBPACK_IMPORTED_MODULE_10__["default"].label, "Page ".concat(pageNumber + 1));
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
  Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_8__["addPagination"])(list, listItems.length);
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");













/**
 * Pagination
 *
 * @module patterns/pagination/pagination
 * @author Web Development
 * @copyright City St George's, University of London 2018
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
    oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_11__["reduceMotion"])() ? 0 : oneSecond,
    minimumPagesRequiringEllipsis = 2;
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].expanded, selected);
  selected ? button.setAttribute('disabled', 'true') : button.removeAttribute('disabled');
  selected ? button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].current, 'page') : button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].current);
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
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_10___default.a.to(page, scrollDuration);
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
    var currentPage = Number.parseInt(controls.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].expanded, "=\"true\"]")).dataset.page);
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
    "class": buttonClassName + '--next',
    text: 'Next page',
    newPageFn: function newPageFn(pageNumber) {
      return pageNumber < pageCount && pageNumber + 1;
    }
  }, {
    button: prev,
    "class": buttonClassName + '--prev',
    text: 'Previous page',
    newPageFn: function newPageFn(pageNumber) {
      return pageNumber > 1 && pageNumber - 1;
    }
  }].forEach(function (button) {
    var btn = button.button,
        btnSpan = document.createElement('span');
    btn.className = button["class"];
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].label, "Open page ".concat(pageNumber));

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
    Object(_util__WEBPACK_IMPORTED_MODULE_11__["removeClass"])(elem, className, false);
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

    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === pages.length) {
      pageButtons.push(ellipsisLast);
    }

    pageButtons.push(pageButton);

    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === 1) {
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
  controls.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_12__["default"].label, 'Pagination');
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Show-more
 *
 * @module patterns/show-more/show-more
 * @author Web Development
 * @copyright City St George's, University of London 2018-2019
 */


var className = 'show-more',
    oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_3__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = true;
/**
 * Open or close the show-more element.
 *
 * @param {object} showMore - The show-more element
 */

function toggleShowMore(showMore) {
  var firstHeadingElement = showMore.querySelector('.show-more__heading, h2, h3, h4, h5, h6'),
      contentElement = showMore.querySelector('.show-more__content'),
      showMoreAnchorLinkText = showMore.querySelector('.show-more__link-text'),
      hiddenElement = Object(_util__WEBPACK_IMPORTED_MODULE_3__["toBool"])(contentElement.dataset.hidden);

  if (hiddenElement) {
    showMore.dataset.open = true;
    contentElement.dataset.hidden = false;
    showMoreAnchorLinkText.textContent = 'Show less';
  } else {
    showMore.dataset.open = false;
    contentElement.dataset.hidden = true;
    showMoreAnchorLinkText.textContent = 'Show more';
  }

  if (firstHeadingElement && !Object(_util__WEBPACK_IMPORTED_MODULE_3__["verticallyInWindow"])(firstHeadingElement)) {
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_5___default.a.to(firstHeadingElement, scrollDuration);
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
 * @param {HTMLElement} showMoreElement - HTML parent element with classname 'show-more'
 */


function createShowMoreButton(showMoreElement) {
  var showMoreButtonDiv = document.createElement('div'),
      showMoreButtonSpan = document.createElement('span'),
      showMoreButton = document.createElement('button'),
      icon = document.createElement('span'),
      showMoreText = document.createElement('span'),
      dataTitle = showMoreElement.getAttribute('data-title'),
      srTextElement = document.createElement('span');
  showMoreButtonDiv.classList.add('show-more__button__container');
  showMoreButtonSpan.classList.add('show-more__button');
  showMoreButtonDiv.appendChild(showMoreButtonSpan);
  showMoreButton.setAttribute('type', 'button');
  showMoreButton.addEventListener('click', function () {
    return toggleShowMore(showMoreElement);
  });
  showMoreButtonSpan.appendChild(showMoreButton);
  icon.classList.add('icon');
  icon.classList.add('fal');
  icon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hidden, true);
  showMoreText.classList.add('show-more__link-text');
  showMoreText.appendChild(document.createTextNode('Show more'));
  srTextElement.appendChild(document.createTextNode('about ' + dataTitle));
  srTextElement.classList.add('sr-only');
  showMoreButton.appendChild(icon);
  showMoreButton.appendChild(showMoreText);
  showMoreButton.appendChild(srTextElement);
  showMoreElement.appendChild(showMoreButtonDiv);
}
/**
 * Initial function on page load; it hides text container of 'show-more' DOM
 * element, and creates the controlling button.
 *
 * @param {HTMLElement} showMoreElement - HTML parent element with classname 'show-more'
 */


function showMore(showMoreElement) {
  var showMoreTextElements = showMoreElement.querySelectorAll('.show-more__content');
  showMoreTextElements.forEach(function (element) {
    element.dataset.hidden = true;
  });
  createShowMoreButton(showMoreElement);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.small.js */ "./node_modules/core-js/modules/es.string.small.js");
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















/**
 * Slider
 *
 * @module patterns/slider/slider
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */



var className = 'slider',
    defaultStyle = 'arrows',
    defaultCardsPerRow = 1,
    arrowLeft = 'ArrowLeft',
    arrowRight = 'ArrowRight';
/**
 * This adds a few swipe related events listeners to the "ul" element of sliders
 *
 * @param  {HTMLElement} slider - The slider ul element.
 * @param  {HTMLElement} controlsWrapper - The nav element containing the slider controls
 */

function addSwipeEvents(slider, controlsWrapper) {
  slider.addEventListener('mousedown', function (e) {
    lock(e, slider);
  });
  slider.addEventListener('touchstart', function (e) {
    lock(e, slider);
  });
  slider.addEventListener('mouseup', function (e) {
    move(e, slider, controlsWrapper);
  });
  slider.addEventListener('touchend', function (e) {
    move(e, slider, controlsWrapper);
  });
}
/**
 * For arrow responsive slider. Opimises slide elements for responsive slider on
 * bigger screens by creating a new "ul li" structure containing the slides
 *
 * @param  {HTMLElement} slider - The slider "ul" element.
 * @param  {Array} slides - an array containing the individual slides as li elements.
 * @param  {HTMLElement} controls - The "nav" element containing the controls
 *
 */


function responsiveOptimisation(slides, slider, controls, direction) {
  var responsiveNum = 2; // number of items per slide to display

  var i;
  var d;
  var currentSlide; // This cycles through all the current slides and re-structure the list by creating a "new" which list contains
  // the number of items per slide, as set above (responsiveNum)
  //i.e.
  //  <ul>
  //      <li> slide 1
  //          <ul>
  //              <li>item 1</li>
  //              <li>item 2</li>
  //          </ul>
  //      </li>
  //
  //      <li> slide 2...item 3 & 4</li>
  //      <li> slide 3...item 5 & 6</li>
  //  </ul>

  for (i = 0; i < slides.length; i += responsiveNum) {
    var liElement = document.createElement('li');
    var ulElement = document.createElement('ul');
    liElement.appendChild(ulElement);

    for (d = 0; d < responsiveNum; d++) {
      if (slides[i + d]) {
        ulElement.appendChild(slides[i + d]);
        var sliderposition = slides[i + d].getAttribute('data-sliderposition');

        if (sliderposition === '0') {
          currentSlide = i + d;
        }

        slides[i + d].classList.remove('slide');
        slides[i + d].removeAttribute('data-sliderposition');
      }
    }

    slider.appendChild(liElement);
  } // Re-map slide items after re-structure


  slides = Array.from(slider.children); // Adds appropriate data attributes to slides

  prepareSlides(slides, Math.floor((currentSlide + direction) / 2));
  slider.setAttribute('data-optimised', 'true'); // Resets pagination during screensize change - not during launch

  if (controls) {
    slides[Math.floor((currentSlide + direction) / 2)].focus();
    controls.querySelector('.slider__indicator__total').innerText = slides.length; //slides.length == 1? controls.querySelector('.slider__indicator__total').innerText=9 : controls.querySelector('.slider__indicator__total').innerText=slides.length;

    controls.querySelector('.slider__indicator__current').innerText = Math.floor((currentSlide + direction) / 2) + 1;
    updateButtonState(slider, controls);
  }

  slider.setAttribute('data-count', slides.length);
  return slides;
}
/**
 * For arrow responsive slider.This reverses the optimasation (re-structure) that was done in
 * the function (responsiveOptimisation) above by creating a "normal" single structure ul list
 *
 * @param  {HTMLElement} slider - The slider "ul" element.
 * @param  {HTMLElement} controls - The "nav" element containing the controls
 */


function reverseOptimisation(slider, controls, direction) {
  //formula for reverse is working
  var slides = Array.from(slider.children);
  var i;
  var currentSlide;
  var adjustment = 0;

  for (i = 0; i < slides.length; i++) {
    var sliderposition = slides[i].getAttribute('data-sliderposition');

    if (sliderposition === '0') {
      currentSlide = i;
    }

    var slidesChildren = Array.from(slides[i].querySelector('ul').children);
    slidesChildren.forEach(function (slide) {
      slider.appendChild(slide);
    });
    slides[i].remove();
  } // Re-map slide items after re-structure


  slides = Array.from(slider.children); // Edge case for responsive sliders with only 2 items to avoid 'over scroll' in screen size switch over

  if (currentSlide * 2 + (Math.round(direction / 2) + direction) >= slides.length) {
    adjustment = -1;
  } // Assigns data attributes and positioning to slides


  prepareSlides(slides, currentSlide * 2 + Math.round(direction / 2) + direction + adjustment);
  slider.setAttribute('data-optimised', 'false'); // Resets pagination and places focus on first slide

  slides[currentSlide * 2 + (Math.round(direction / 2) + direction) + adjustment].focus();
  controls.querySelector('.slider__indicator__total').innerText = slides.length;
  controls.querySelector('.slider__indicator__current').innerText = currentSlide * 2 + (Math.round(direction / 2) + direction + 1) + adjustment;
  slider.setAttribute('data-count', slides.length);
  updateButtonState(slider, controls);
  return slides;
}
/**
 * Updates buttons for arrow slider
 *
 * @param  {HTMLElement} slider - The slider element.
 * @param  {HTMLElement} controls - The slider controls element.
 */


function updateButtonState(slider, controls) {
  // Disables "next" or "prev" buttons if on first or last slide
  var nextButton = controls.querySelector(".".concat(className, "__controls__next")),
      prevButton = controls.querySelector(".".concat(className, "__controls__prev"));
  slider.querySelector('[data-sliderposition="-1"]') ? prevButton.removeAttribute('disabled') : prevButton.setAttribute('disabled', true);
  slider.querySelector('[data-sliderposition="1"]') ? nextButton.removeAttribute('disabled') : nextButton.setAttribute('disabled', true);
  slider.removeAttribute('disabled'); // Responsive slider edge case for when 2 items to allow next arrow to be clicable to allow switch over

  var responsive = slider.getAttribute('data-style');
  var slides = Array.from(slider.children);
  responsive && slides.length === 1 ? nextButton.removeAttribute('disabled') : null;
}
/**
 * Handle clicks on the next/previous buttons for arrow slider.
 *
 * @param  {HTMLElement} slider - The slider element.
 * @param  {Number} direction - The scroll direction, 1 = next, -1 = previous.
 */


function handleNextPrevClick(slider, controls, direction) {
  var slides = Array.from(slider.children);
  var responsive = slider.getAttribute('data-style');
  var optimised = slider.getAttribute('data-optimised');
  var screenSize = window.innerWidth; // This is for responsive slider only, checking if re-structuring is necesssary in case the viewport size changed.

  if (responsive === 'responsive' && screenSize < 768 && optimised === 'true') {
    reverseOptimisation(slider, controls, direction, true);
    return;
  } else if (responsive === 'responsive' && screenSize >= 768 && optimised !== 'true') {
    responsiveOptimisation(slides, slider, controls, direction);
    return;
  }

  var current = slider.querySelector('[data-sliderposition="0"]'),
      currentPage = controls.querySelector(".".concat(className, "__indicator__current")),
      nextButton = controls.querySelector(".".concat(className, "__controls__next")),
      prevButton = controls.querySelector(".".concat(className, "__controls__prev")); // Next arrow clicked

  if (direction === 1) {
    var next = current.nextElementSibling;

    if (next) {
      // Disables buttons during slide animation from current to next
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true); // Move focus to next slide, wait for transition to finish

      next.addEventListener('transitionend', function focusNext() {
        next.removeEventListener('transitionend', focusNext, true);
        next.focus();
        updateButtonState(slider, controls);
      }, true); // Hide current slide once transition has finished

      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true); // Updates position of slides
      // Moves current slide to back to previous position

      current.dataset.sliderposition = -1;
      current.dataset.smallposition = -1; // Sets 'active' current slide

      next.dataset.hidden = false;
      next.dataset.smallhidden = false;
      next.dataset.sliderposition = 0;
      next.dataset.smallposition = 0; // Updates pagination to current slide position

      currentPage.innerText = slides.indexOf(next) + 1;
    }
  } else {
    // Previous arrow clicked
    var previous = current.previousElementSibling;

    if (previous) {
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true);
      previous.addEventListener('transitionend', function focusPrevious() {
        previous.removeEventListener('transitionend', focusPrevious, true);
        previous.focus();
        updateButtonState(slider, controls);
      }, true);
      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true); // Updates position of slides
      // Moves current slide forward to next position

      current.dataset.sliderposition = 1;
      current.dataset.smallposition = 1; // Sets current / active slide

      previous.dataset.hidden = false;
      previous.dataset.smallhidden = false;
      previous.dataset.sliderposition = 0;
      previous.dataset.smallposition = 0; // Updates pagination to current slide

      currentPage.innerText = slides.indexOf(previous) + 1;
    }
  } // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);

}
/**
 * This is for arrow slider only. It applies the necessary data attribues needed
 *  for the functionality of the slider which positions the slides into their starting positions
 *
 * @param  {Array} slides - an array containing the individual slides as li elements
 */


function prepareSlides(slides, current) {
  slides.forEach(function (slide, i) {
    slide.setAttribute('tabindex', -1); // Remove inactive

    slide.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].label, "Slide ".concat(i + 1, " of ").concat(slides.length)); // Accesiblity

    slide.classList.add('slide'); // Add slide class of slide
    // 0 = active / first slide

    if (i === current) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else if (i > current) {
      // 1 = next slide
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = 'true';
      slide.dataset.smallhidden = 'true';
    } else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    }
  });
  return slides;
}
/**
 * Transform an element with the slider class name into a slider section controlled by arrows.
 *
 * @param {HTMLElement} slider - An element with the slider class
 *
 */


function launchArrow(slider) {
  // creates elements for pagination and controls
  var slides = Array.from(slider.children);
  var controlsWrapper = document.createElement('nav'),
      nextButton = document.createElement('button'),
      nextButtonSpan = document.createElement('span'),
      prevButton = document.createElement('button'),
      prevButtonSpan = document.createElement('span'),
      indicator = document.createElement('div'),
      currentPage = document.createElement('span'),
      totalPages = document.createElement('span'),
      divider = document.createElement('span'),
      dividerVisible = document.createElement('span'),
      dividerScreenReader = document.createElement('span'); // If not enough slides, don't create it.

  if (1 >= slides.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slider, className, false);
    return;
  } // Reconstructs slides for responsive slider


  var responsive = slider.getAttribute('data-style');
  var screenSize = window.innerWidth;

  if (responsive === 'responsive' && screenSize >= 768) {
    responsiveOptimisation(slides, slider); // Re-map slide items after re-structure

    slides = Array.from(slider.children);
  } // Sets up the positions of the cards / slides


  prepareSlides(slides, 0); // Build the next button

  nextButtonSpan.appendChild(document.createTextNode('Next slide'));
  nextButton.appendChild(nextButtonSpan);
  nextButton.setAttribute('type', 'button');
  nextButton.className = className + '__controls__next'; // Wait for Click on next button

  nextButton.addEventListener('click', function () {
    return handleNextPrevClick(slider, controlsWrapper, 1);
  }, true); // Build the previous button

  prevButtonSpan.appendChild(document.createTextNode('Previous slide'));
  prevButton.appendChild(prevButtonSpan);
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('disabled', 'true');
  prevButton.className = className + '__controls__prev'; // Wait for Click on previous button

  prevButton.addEventListener('click', function () {
    return handleNextPrevClick(slider, controlsWrapper, -1);
  }, true); // Accessiblity wait for key press anywhere within slider

  slider.addEventListener('keydown', function (e) {
    switch (e.key) {
      case arrowLeft:
        prevButton.click();
        break;

      case arrowRight:
        nextButton.click();
        break;

      default:
        break;
    }
  }, true); // apply CSS to card which is currently visible

  currentPage.appendChild(document.createTextNode(1)); // default is 1 when page loads

  currentPage.className = className + '__indicator__current'; // Divider between 1 / 4 etc.

  dividerVisible.appendChild(document.createTextNode('/'));
  dividerVisible.className = className + '__indicator__divider--visible';
  dividerVisible.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].hidden, 'true');
  dividerScreenReader.appendChild(document.createTextNode(' of '));
  dividerScreenReader.className = className + '__indicator__divider--sr';
  divider.appendChild(dividerVisible);
  divider.appendChild(dividerScreenReader);
  divider.className = className + '__indicator__divider'; // Total pages

  totalPages.className = className + '__indicator__total';
  totalPages.appendChild(document.createTextNode(slides.length)); // Add to page

  indicator.appendChild(currentPage);
  indicator.appendChild(divider);
  indicator.appendChild(totalPages);
  indicator.className = className + '__indicator'; // Wrap element around slider__controls

  controlsWrapper.appendChild(indicator);
  controlsWrapper.appendChild(prevButton);
  controlsWrapper.appendChild(nextButton);
  controlsWrapper.className = className + '__controls';
  controlsWrapper.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].label, 'Slider navigation'); // Places controls directly after 'ul' containing the slides

  slider.nextElementSibling ? slider.parentElement.insertBefore(controlsWrapper, slider.nextElementSibling) : slider.parentElement.appendChild(controlsWrapper); // Add event listeners

  addSwipeEvents(slider, controlsWrapper); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}
/**
 * Transform an element with the slider class name into a slider section controlled by dots.
 * This is to be launched on smaller screens only.
 *
 * @param {HTMLElement} slider - An element with the slider class
 *
 */


function launchDot(slider) {
  // Creates pagination and control elements
  var slides = Array.from(slider.children),
      controlsWrapper = document.createElement('nav'); // If not enough slides, don't create it.

  if (1 >= slides.length) {
    Object(_util__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slider, className, false);
    return;
  }

  slides.forEach(function (slide, i) {
    slide.setAttribute('tabindex', -1); // Remove inactive

    slide.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].label, "Slide ".concat(i + 1, " of ").concat(slides.length)); // Accesiblity

    slide.classList.add('slide'); // Add slide class of slide
    // Sets data attributes for slides which controls their position within slide collection

    if (i === 0) {
      slide.dataset.sliderposition = 0; // 0 for active slide

      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else {
      slide.dataset.sliderposition = 1; // 1 for 'next' slide

      slide.dataset.smallposition = 1;
      slide.dataset.hidden = 'true';
      slide.dataset.smallhidden = 'true';
    } // Creates dot buttons for each slide


    var dot = Object(_util__WEBPACK_IMPORTED_MODULE_18__["createHTMLElement"])('button', [{
      label: 'data-page',
      val: i
    }, {
      label: 'aria-label',
      val: "Open slide ".concat(i + 1)
    }, {
      label: 'type',
      val: 'button'
    }]);

    if (i === 0) {
      // Active slide
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].current, 'slide');
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].expanded, 'true');
      dot.setAttribute('disabled', 'true');
    } else {
      // All other slides
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].expanded, 'false');
    }

    dot.addEventListener('click', function () {
      return handleDotClick(slider, controlsWrapper, i);
    }, true);
    controlsWrapper.appendChild(dot);
  }); // Accessiblity wait for key press anywhere within slider

  slider.addEventListener('keydown', function (e) {
    var current = slider.querySelector('[data-sliderposition="0"]');
    var next = current.nextElementSibling;
    var previous = current.previousElementSibling;
    var pos = slides.indexOf(current);
    var buttons = Array.from(controlsWrapper.children);

    switch (e.key) {
      case arrowLeft:
        if (previous) {
          buttons[pos - 1].click();
        }

        break;

      case arrowRight:
        if (next) {
          buttons[pos + 1].click();
        }

        break;

      default:
        break;
    }
  }, true); // Wrap element around slider__controls

  controlsWrapper.className = className + '__controls';
  controlsWrapper.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_19__["default"].label, 'Slider navigation'); // Places controls directly after 'ul' containing the slides

  slider.nextElementSibling ? slider.parentElement.insertBefore(controlsWrapper, slider.nextElementSibling) : slider.parentElement.appendChild(controlsWrapper); //add event listeners

  addSwipeEvents(slider, controlsWrapper); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}
/**
 * Handle clicks for dot slider
 *
 * @param  {HTMLElement} slider - The slider element.
 * @param  {Number} selection - pass the paramaetr of selected slide as a number
 * @param  {HTMLElement} controlsWrapper - Element containing the control buttons
 */


function handleDotClick(slider, controlsWrapper, selection) {
  var slides = Array.from(slider.children),
      dotButtons = Array.from(controlsWrapper.children); // Disables all buttons after click to avoid multiple clicks

  dotButtons.forEach(function (dot) {
    dot.setAttribute('disabled', true);
  }); // Re-arranges the positions of the slides

  slides.forEach(function (slide, i) {
    // Cycles through slides and makes active the one 'selected'
    if (i === selection) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
      slide.addEventListener('transitionend', function focusNext() {
        slide.removeEventListener('transitionend', focusNext, true);
        slide.focus();
        updateDotButtonState(i, dotButtons, slider);
      }, true);
    } // Places slides 'after' current slide in next position
    else if (i > selection) {
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    } // Places slides 'before' current slide in previous position
    else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    }
  }); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}
/**
 * @param  {number} active - This is the number/index of the 'active' slide.
 * @param  {array} dotButtons - An array of all the dot buttons.
 */


function updateDotButtonState(active, dotButtons, slider) {
  dotButtons.forEach(function (dot, i) {
    if (i === active) {
      dot.setAttribute('disabled', true);
      dot.setAttribute('aria-expanded', true);
    } else {
      dot.removeAttribute('disabled');
      dot.setAttribute('aria-expanded', false);
    }
  });
  slider.removeAttribute('disabled');
}
/**
 * This function creates a fix height for the slider container so the height don't change depending on each
 * slides individual height which would cause the navigation arrows to move up and down when adjusting to the
 * height of the current slide
 * @param  {HTMLElement} slider - The slider element.
 */
// function slideHeightFix(slider){
//     let slides = Array.from(slider.children);
//     let sliderSetHeight = 0;
//     slider.style.minHeight = '0px';
//     slides.forEach((slide) => {
//         let slideHeight = slide.offsetHeight;
//         slideHeight > sliderSetHeight ? sliderSetHeight = slideHeight: null;
//     })
//     slider.style.minHeight = sliderSetHeight+'px';
// };

/**
 * 3 Swipe functions below. Unify records touch coordinates to determine left or right swipe.
 * Lock function locks the ul element to prevent too many additional touches interfering with the sliding
 * functionality. I.e. when a slide is in progress it locks it not to register additional touches.
 * Move function monitors the 'end' of the swipe action to determine the direction of the swipe i.e. left / right.
 * The "dx" parameter can be used to adjust the sensitivity of the swiping. The larger the number the longer the swipe needs
 * to be to register as an actual swipe.
 *
 * @param {event} e - Touch event
 * @param {HTMLElement} Slider - The ul element containing the "li" slides
 * @param {HTMLElement} ControlsWrapper - The nav element containing the slider controls
 */


var x0;

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e, slider) {
  var locked = slider.getAttribute('disabled');

  if (!locked) {
    x0 = unify(e).clientX; //set mousedown clientX value
    //e.target.classList.toggle('smooth', !(this.locked = true));
  }
}

function move(e, slider, controlsWrapper) {
  var locked = slider.getAttribute('disabled');
  var currentSlide = slider.querySelector('li[data-hidden=false]');
  var sliderType = slider.getAttribute('data-style');

  function getElementIndex(element) {
    return _toConsumableArray(element.parentNode.children).indexOf(element);
  }

  if (!locked) {
    var dx = unify(e).clientX - x0,
        //dx is value calculate by using clientX mousedown and after value
    s = Math.sign(dx); //check if swipe is left or right by checking value is negative or positive
    // tx = getComputedStyle(e.target).getPropertyValue('--tx');
    // p = parseInt(tx.replace(/\D/g, '')); // May use the drag length as a condition to move slider
    // Next slide

    if (s === -1 && currentSlide.nextElementSibling && dx < -25) {
      // Checks which type of slider you are using and handles slide
      slider.setAttribute('disabled', true);
      sliderType === 'arrows' || sliderType === 'responsive' ? handleNextPrevClick(slider, controlsWrapper, 1) : handleDotClick(slider, controlsWrapper, getElementIndex(currentSlide) + 1);
    } // Previous slide
    else if (s === 1 && currentSlide.previousElementSibling && dx > 25) {
      // Checks which type of slider you are using and handles slide
      slider.setAttribute('disabled', true);
      sliderType === 'arrows' || sliderType === 'responsive' ? handleNextPrevClick(slider, controlsWrapper, -1) : handleDotClick(slider, controlsWrapper, getElementIndex(currentSlide) - 1);
    }
  }
} // End of swipe functions

/**
 * Transform an element with the slider class name into a slider section.
 *
 * @param {HTMLElement} slider - An element with the slider class
 */


function launchSlider(slider) {
  var style = slider.dataset.style || defaultStyle,
      cardsPerRow = parseInt(slider.dataset.cardsperrow) || defaultCardsPerRow; // CardsPerRow not currently in use. Tom's old code.
  // Might have use case for bigger screen which have capacity to have more than 1 item per slide.

  if (cardsPerRow > 1 && style === 'arrows' && slider.dataset.small === 'false') {
    // If arrows for desktop has cardsPerRow set to more than 1, we set the style to responsive so it can handle multiple items per slide.
    style = 'responsive';
    cardsPerRow = 1;
    slider.dataset.style = style;
    slider.dataset.cardsperrow = cardsPerRow;
  }

  switch (style) {
    case 'arrows':
      launchArrow(slider, cardsPerRow);
      break;

    case 'responsive':
      launchArrow(slider, cardsPerRow);
      break;

    case 'dots':
      launchDot(slider, cardsPerRow);
      break;

    default:
      launchArrow(slider, cardsPerRow);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchSlider,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/tabs/prepareAccordionTabs.js":
/*!***************************************************!*\
  !*** ./src/patterns/tabs/prepareAccordionTabs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util */ "./src/util.js");












/**
 * prepareAccordionTabs
 *
 * @module patterns/tabs/prepareAccordionTabs
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */


var className = 'tabs',
    panelClassName = className + '__panel',
    linksClassName = className + '__links';
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
  Array.from(tabs.parentNode.querySelectorAll("#".concat(tabs.id, " > .").concat(panelClassName))).forEach(function (panel) {
    var heading = panel.querySelector(".".concat(panelClassName, "__heading")),
        body = panel.querySelector(".".concat(panelClassName, "__body")),
        accordionHeading = document.createElement("h".concat(accordion.dataset.level)),
        accordionSection = document.createElement('div'),
        accordionWrapper = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = "accordion".concat(tabs.dataset.assetid, "-header").concat(panel.dataset.assetid);
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_9__["default"].labelledBy);
    var accordionHeadingNode = heading.childNodes[0].nodeType;
    accordionHeadingNode === 3 ? accordionHeading.innerText = heading.childNodes[0].nodeValue.trim() : accordionHeading.innerText = heading.childNodes[1].nodeValue.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = "accordion".concat(tabs.dataset.assetid, "-body").concat(panel.dataset.assetid);
    accordionWrapper.className = 'wrapper--accordion__body__content';
    accordionWrapper.innerHTML = body.innerHTML;
    accordionSection.appendChild(accordionWrapper);
    Object(_util__WEBPACK_IMPORTED_MODULE_10__["appendAll"])(accordion, [accordionHeading, accordionSection]);
  });
  tabs.parentNode.insertBefore(wrapper, tabs);
  wrapper.appendChild(tabs);
  wrapper.appendChild(accordion);
  return accordion;
}

function prepareAccordionTabs(tabs) {
  var controls = tabs.querySelector(".".concat(linksClassName)),
      linkItems = Array.from(controls.querySelectorAll('li')),
      numberOfTabs = Number.parseInt(tabs.dataset.mobiletabs);

  if (linkItems.length > numberOfTabs && (!tabs.dataset.neveraccordion || !tabs.dataset.neveraccordion === 'true')) {
    return accordionize(tabs);
  } else {
    return null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (prepareAccordionTabs);

/***/ }),

/***/ "./src/patterns/tabs/tabs.js":
/*!***********************************!*\
  !*** ./src/patterns/tabs/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");









/**
 * Tabs
 *
 * @module patterns/tabs/tabs
 * @author Web Development
 * @copyright City St George's, University of London 2018-2019
 */



var className = 'tabs',
    panelClassName = className + '__panel',
    contentClassName = panelClassName + '__content',
    linksClassName = className + '__links',
    endKey = 'End',
    homeKey = 'Home',
    arrowLeft = 'ArrowLeft',
    arrowUp = 'ArrowUp',
    arrowRight = 'ArrowRight',
    arrowDown = 'ArrowDown',
    oneSecond = 1000,
    scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_7__["reduceMotion"])() ? 0 : oneSecond,
    scrollTo = false;
/**
 * Set the attributes of a tab to be selected or not selected.
 *
 * Unselected tabs are removed from the tab order.
 *
 * @param {HTMLButtonElement} button - The anchor element to toggle.
 * @param {boolean} selected - Set the element to be selected?
 */

function toggleButton(button, selected) {
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].selected, selected);

  if (selected) {
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].current, true);
  } else {
    button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].current);
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
      panels = Array.from(tabs.childNodes).filter(function (node) {
    return node.className && node.className === panelClassName;
  });
  /**
   * Unselect every tab and related panel.
   */

  linkItems.forEach(function (linkItem) {
    toggleButton(linkItem.firstElementChild, false);
  });
  panels.forEach(function (panel) {
    return panel.setAttribute('hidden', 'true');
  });
  /**
   * Select the requested tab.
   */

  toggleButton(newTab, true);
  tabs.querySelector(newTab.dataset.hash).removeAttribute('hidden');
  /**
   * Move focus to the section and optionally scroll it into view.
   */

  newTab.focus();
  scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_6___default.a.to(tabs, scrollDuration);
  /**
   * Updates URL to include selected tab's ID address
   */
  //window.location.hash = newTab.dataset.hash; 

  window.location.hash = newTab.id;
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
  var currentTab = tabs.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_8__["default"].selected, "=\"true\"]")),
      currentTabLI = currentTab.parentNode;
  var newTab = null;

  switch (e.key) {
    case arrowLeft:
      /**
       * Previous tab has been requested - if we're already at the beginning,
       * we need to wrap around to the last tab.
       */
      currentTabLI.previousElementSibling ? newTab = currentTabLI.previousElementSibling.firstElementChild : newTab = tabs.querySelector('li:last-of-type a');
      break;

    case arrowRight:
      /**
       * Next tab has been requested - if we're already at the end, we need
       * to wrap around to the first tab.
       */
      currentTabLI.nextElementSibling ? newTab = currentTabLI.nextElementSibling.firstElementChild : newTab = tabs.querySelector('li:first-of-type a');
      break;

    case arrowDown:
      /**
       * Move focus into the tab content.
       */
      tabs.querySelector(currentTab.dataset.hash).focus();
      break;

    case arrowUp:
      /**
       * Move focus to the currently selected tab control.
       */
      currentTab.focus();
      break;

    case homeKey:
      /**
       * First tab
       */
      newTab = tabs.querySelector('li:first-of-type a');
      break;

    case endKey:
      /**
       * Last tab
       */
      newTab = tabs.querySelector('li:last-of-type a');
      break;

    default:
      break;
  }

  newTab && selectTabEvent(e, newTab);
}
/**
 * Set attributes and listeners for the tabbed section controls.
 *
 * @param {HTMLLIElement[]} linkItems - An array of list items containing the tab anchors.
 */


function prepareLinks(linkItems) {
  linkItems.forEach(function (linkItem) {
    var link = linkItem.firstElementChild,
        button = document.createElement('button');
    linkItem.setAttribute('role', 'presentation');
    button.setAttribute('role', 'tab');
    button.appendChild(link.firstElementChild);
    button.dataset.hash = link.hash;
    button.id = link.id;
    linkItem.replaceChild(button, link);
    toggleButton(button, false);
    button.addEventListener('click', function (e) {
      return selectTabEvent(e, button);
    }, true);
  });
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
    panel.setAttribute('tabindex', -1);
    panel.setAttribute('hidden', 'true');
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
      panels = Array.from(tabs.childNodes).filter(function (node) {
    return node.className && node.className === panelClassName;
  });

  if (linkItems.length === 1) {
    /**
     * don't make one tab into a tabbed section, makes no sense
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_7__["removeClass"])(tabs, className, false);
    return;
  }

  controls.setAttribute('role', 'tablist');
  preparePanels(panels);
  prepareLinks(linkItems);
  toggleButton(linkItems[0].firstElementChild, true);
  panels[0].removeAttribute('hidden');
  /**
   * Enable keyboard access to tabs with the cursor keys.
   */

  tabs.addEventListener('keydown', function (e) {
    return keyEvents(e, tabs);
  }, true);
  /**
   * Checks if hash ID is present in the URL then on page load it will open the corresponding tab
   */

  if (window.location.hash) {
    //finds accordion heading in URL
    var urlHash = window.location.hash; // checks if button in Hash is found inside this tabs pattern

    var button = tabs.querySelector('' + urlHash + '');

    if (button) {
      // determines if the tabs pattern is 'tabs only' or tabs turning into accordions on smaller viewports
      var isTabAccordion;
      var viewportWidth = window.innerWidth;
      tabs.parentElement.className == 'tabs--accordion' ? isTabAccordion = true : isTabAccordion = false; // condition 1, when hash in URL is of a 'tab /accordion'. On bigger viewports tabs are present.

      if (isTabAccordion && Object(_util__WEBPACK_IMPORTED_MODULE_7__["screenWidth"])('tablet') < viewportWidth) {
        // Wait for DOM to load before accessing selected tab
        window.onload = function () {
          selectTab(button);
        };
      } // condition when hash in URL is of a 'always' tabs, regardless of viewport width
      else if (!isTabAccordion) {
        // Wait for DOM to load before accessing selected tab
        window.onload = function () {
          selectTab(button);
        };
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchTabs,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/patterns/tooltip/image-credit/image-credit.js":
/*!***********************************************************!*\
  !*** ./src/patterns/tooltip/image-credit/image-credit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





/**
 * Image credit tooltip
 *
 * @module patterns/tooltip/image-credit
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */


var className = 'picture[data-authorname], picture[data-sourcename]',
    openText = 'Show image credit',
    closeText = 'Hide image credit';
/**
 * Recursively checks the parent nodes of a given DOM node to determine if it belongs to a specific card type.
 *
 * @param {HTMLElement} node - The DOM node to start the search from.
 * @returns {HTMLElement|null} The parent node of the given node that matches the specified card types, or null if no match is found.
 */

function walkDOMCheckClassName(node) {
  var cardsType = ['card--pathway', 'card--news'];
  var checkClassName = cardsType.some(function (e) {
    return node.parentElement.classList.contains(e);
  });

  if (node.tagName === 'BODY') {
    return null;
  }

  if (checkClassName) {
    return node.parentElement;
  }

  if (node.parentElement) {
    return walkDOMCheckClassName(node.parentElement);
  }

  return null;
}
/**
 * Toggle the image credit open or closed.
 *
 * @param  {HTMLElement} wrapper - The image credit container
 */


function toggleImageCredit(wrapper) {
  var button = wrapper.querySelector('button'),
      buttonText = button.querySelector('.sr-only'),
      label = wrapper.querySelector('.tooltip__label'),
      icon = button.querySelector('.tooltip__icon');

  if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["toBool"])(wrapper.dataset.open)) {
    wrapper.dataset.open = false;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, 'false');
    buttonText.innerText = openText;
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-subtitles');
    button.focus();
  } else {
    wrapper.dataset.open = true;
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, 'true');
    buttonText.innerText = closeText;
    icon.classList.remove('fa-subtitles');
    icon.classList.add('fa-xmark');
    label.focus();
  }
}
/**
 * Render the credit label.
 *
 * @param  {string} text - The entity to credit
 * @param  {string} url - Optional URL for the entity
 * @returns {HTMLElement} A span or anchor.
 */


function createLabel(text, url) {
  // If URL; create hyperlink
  if (url) {
    var element = document.createElement('a');
    element.href = url;
    element.appendChild(document.createTextNode(text));
    return element; // No URL; create span
  } else {
    var _element = document.createElement('span');

    _element.appendChild(document.createTextNode(text));

    return _element;
  }
}
/**
 * Create an image credit tooltip from the data attributes of an image.
 *
 * @param {HTMLElement} picture - A picture element with credit data attributes.
 */


function launchImageCredit(picture) {
  var display = Object(_util__WEBPACK_IMPORTED_MODULE_3__["toBool"])(picture.dataset.tooltipdisplay),
      authorText = picture.dataset.authorname,
      sourceText = picture.dataset.sourcename,
      sourceUrl = picture.dataset.sourceurl,
      licenceText = picture.dataset.licencetype; // Pattern only launches if set to display and has either an author/source name

  if (!display || !(authorText || sourceText)) {
    return;
  }

  var wrapper = document.createElement('figure'),
      button = document.createElement('button'),
      spanIcon = document.createElement('span'),
      spanText = document.createElement('span'),
      label = document.createElement('figcaption'),
      author = authorText ? createLabel(authorText) : null,
      source = sourceText ? createLabel(sourceText, sourceUrl) : null,
      licence = licenceText ? createLabel(licenceText) : null;
  wrapper.className = 'wrapper--tooltip__label';
  wrapper.dataset.open = false;
  button.className = 'tooltip tooltip--image-credit';
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, false);
  button.addEventListener('click', function () {
    return toggleImageCredit(wrapper);
  }, true);
  spanIcon.className = 'tooltip__icon icon fa-sharp fa-light fa-subtitles';
  spanIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hidden, true);
  spanText.className = 'sr-only';
  spanText.appendChild(document.createTextNode(openText));
  button.appendChild(spanIcon);
  button.appendChild(spanText);
  label.className = 'tooltip__label';
  label.setAttribute('tabindex', -1);
  author && label.appendChild(author);
  author && source && label.appendChild(document.createTextNode(', '));
  source && label.appendChild(source);
  source && licence && label.appendChild(document.createTextNode(' | '));
  licence ? licence.className = 'tooltip__label__licence' : null;
  licence && label.appendChild(licence);
  wrapper.appendChild(button);
  wrapper.appendChild(label);
  var cardType = walkDOMCheckClassName(picture);

  if (cardType) {
    (author || source) && cardType.querySelector('a').parentElement.prepend(wrapper);
  } else {
    (author || source) && picture.appendChild(wrapper);
    picture.querySelector('img').classList.add('tooltip__overlay');
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchImageCredit,
  launchQuery: "".concat(className)
});

/***/ }),

/***/ "./src/patterns/tooltip/social-share/social-share.js":
/*!***********************************************************!*\
  !*** ./src/patterns/tooltip/social-share/social-share.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var className = 'copy-link';

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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest, formatTime, formatReactDate, arraySlicer, screenWidth, flattenObj, getVerticalScrollbarWidth, enableBodyScroll, disableBodyScroll, decodeHtml */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFromString", function() { return numberFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectIE", function() { return detectIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIntersectionObserver", function() { return checkIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHTMLElement", function() { return createHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercaseFirstLetterLowercaseRest", function() { return uppercaseFirstLetterLowercaseRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosRequest", function() { return axiosRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatReactDate", function() { return formatReactDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraySlicer", function() { return arraySlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenWidth", function() { return screenWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenObj", function() { return flattenObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalScrollbarWidth", function() { return getVerticalScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeHtml", function() { return decodeHtml; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























/**
 * Useful utility functions
 *
 * @module util
 * @author Web Development
 * @copyright City St George's, University of London 2018-2020
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
  var reducedMotionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : false;
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
 * Check browser user agent is IE or edge and return version number
 */

function detectIE() {
  var ua = window.navigator.userAgent,
      versionLength = 10,
      msie = ua.indexOf('MSIE '),
      msieVersionOffset = 5;

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + msieVersionOffset, ua.indexOf('.', msie)), versionLength);
  }

  var trident = ua.indexOf('Trident/'),
      tridentVersionOffset = 3;

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + tridentVersionOffset, ua.indexOf('.', rv)), versionLength);
  }

  var edge = ua.indexOf('Edge/'),
      edgeVersionOffset = 5;

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + edgeVersionOffset, ua.indexOf('.', edge)), versionLength);
  } // other browser


  return false;
}
/**
 * Check if browser supports IntersectionObserver API
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
  var el = document.createElement(type);
  attributes.map(function (att) {
    att.label === 'content' ? el.appendChild(document.createTextNode(att.val)) : att.label === 'html' ? el.innerHTML = att.val : el.setAttribute(att.label, att.val);
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
  var httpOK = 200;
  return axios__WEBPACK_IMPORTED_MODULE_25___default()(config).then(function (response) {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  })["catch"](function (e) {
    if (!axios__WEBPACK_IMPORTED_MODULE_25___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
    }
  });
}
/**
 * Returns a react fragment formatted time
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted time to local time.
 */

function formatTime(timeString, timeZone) {
  var time = new Date(timeString);
  var timeLabel;

  if (timeZone) {
    var timeOffset = time.getTimezoneOffset() / -60;
    timeLabel = timeOffset === 0 ? '(GMT)' : '(BST)';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("time", {
    dateTime: "".concat(time.getHours() ? time.getHours() : '00', ":").concat(time.getMinutes() ? time.getMinutes() : '00')
  }, time.getHours() ? time.getHours() : '00', ":", time.getMinutes() ? time.getMinutes() : '00', " ", timeLabel);
}
/**
 * Returns the correct English suffix for a number.
 *
 * @param  {number} day - The day of the month.
 * @returns {string} The correct suffix.
 */

function daySuffix(day) {
  var eleventh = 11,
      thirteenth = 13,
      lastDigit = day.toString().slice(-1);
  return day >= eleventh && day <= thirteenth ? 'th' : lastDigit === '1' ? 'st' : lastDigit === '2' ? 'nd' : lastDigit === '3' ? 'rd' : 'th';
}
/**
 * Format a date for React.
 *
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted date.
 */


function formatReactDate(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
}
/**
 * Array slicer
 *
 * @param {array} arr - array to be split up into subarrays
 * @param {number} len - max number items that goes into each subarray
 */

function arraySlicer(arr, len) {
  var newArray = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    newArray.push(arr.slice(i, i += len));
  }

  return newArray;
}
/**
 * Screen width
 *
 * @param {size} string - variable name for sreensize value. To be consistent with values stored in _variables.scss
 */

function screenWidth(size) {
  switch (size) {
    case 'tiny':
      return 375;

    case 'mobile':
      return 432;

    case 'tablet':
      return 768;

    case 'between':
      return 900;

    case 'small':
      return 1024;

    case 'desktop':
      return 1280;

    case 'large':
      return 1440;

    case '1080':
      return 1920;

    case '4k':
      return 3840;

    case '8k':
      return 7680;

    default:
      return 1280;
  }
}
/**
 * Flatten object to one level that contains array of objects and 2 level objects
 *
 * @param {object} - a object to flatten
 * @returns {object} - return a flatten object
 */

function flattenObj(ob) {
  // The object which contains the
  // final result
  var result = {}; // loop through the object "ob"

  var _loop = function _loop(i) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (_typeof(ob[i]) === 'object' && !Array.isArray(ob[i])) {
      var temp = flattenObj(ob[i]);

      for (var j in temp) {
        if (i === 'parameters') {
          result["".concat(i, "-").concat(j)] = temp[j];
        } else {
          result[j] = temp[j];
        } // Store temp in result

      }
    } else if (Array.isArray(ob[i])) {
      ob[i].forEach(function (val) {
        if (i === 'fixedFacets') {
          result["".concat(i, "-").concat(val.meta)] = val.value;
        } else {
          result["".concat(i, "-").concat(val.name)] = val.value;
        }
      });
    } // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  };

  for (var i in ob) {
    _loop(i);
  }

  return result;
}
/**
 * function that calculates the scrollbar width
 */

function getVerticalScrollbarWidth() {
  // Creating a div element for helping to calculate scrollbar width
  var scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'; // Appending the div to the body to measure scrollbar width

  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Remove the div from the body

  document.body.removeChild(scrollDiv); // adds scrollbar width as variable to root so can be used by CSS styles

  var root = document.documentElement;
  root.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
  return scrollbarWidth;
}
/**
 * function that enables / disables body scroll when modal opens or closes. As the scrollbar disappears
 * to lock scrolling, a margin gets added in place of where the scrollbar use to be
 * to prevent content from jumping
 *
 */

function enableBodyScroll() {
  document.documentElement.classList.remove('no-scroll');
  document.querySelector('.back-to-top').setAttribute('hidden', 'false');
}
function disableBodyScroll() {
  getVerticalScrollbarWidth();
  document.querySelector('.back-to-top').setAttribute('hidden', 'true');
  document.documentElement.classList.add('no-scroll');
}
/**
 * function that decodes strings with HTML entities
 *
 */

function decodeHtml() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

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