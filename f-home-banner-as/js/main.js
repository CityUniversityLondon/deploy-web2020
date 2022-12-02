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
/******/ 	deferredModules.push([0,"vendor-dependencies","core","react","axios"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
 * @author Web Development
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patterns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");
/* harmony import */ var _patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/tabs/prepareAccordionTabs */ "./src/patterns/tabs/prepareAccordionTabs.js");




/**
 * Main entry
 *
 * @author Web Development
 * @copyright City, University of London 2018
 */




const edgeVersion = 12;
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
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `Pattern launch ${e.fileName} (${window.location})`, true);
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
    Array.from(document.querySelectorAll(launchQuery)).filter(elem => elem.className.indexOf(`${launchQuery}-no-js`)).forEach(elem => tryCatch(() => launchFn(elem)));
  }
}
/**
 * Recursively generate accordion--tabs HTML for tabs.
 *
 * @param {HTMLElement} root
 */


function accordionizeTabs(root) {
  Array.from(root.querySelectorAll('.tabs')).filter(elem => elem.className.indexOf('.tabs-no-js')).forEach(elem => {
    const potential = tryCatch(() => Object(_patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_4__["default"])(elem));
    potential && accordionizeTabs(potential);
  });
}

document.addEventListener('DOMContentLoaded', () => {
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
    Array.from(document.getElementsByTagName('html')).forEach(html => {
      let ie = Object(_util__WEBPACK_IMPORTED_MODULE_2__["detectIE"])();
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(html, 'no-js', false);

      if (ie >= edgeVersion) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    accordionizeTabs(document);
    _patterns__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(launchPattern);
    const parameters = Object(_util__WEBPACK_IMPORTED_MODULE_2__["parametersToObject"])(location.search);
    parameters['dev'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__["devcorate"])(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__["devcorate"])(document.querySelector('body'), 'rel', parameters['rel']);
  }
}, false);

/***/ }),

/***/ "./src/patterns.js":
/*!*************************!*\
  !*** ./src/patterns.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/rof/src/github.com/CityUniversityLondon/web2020/src/patterns.js: Identifier 'particle' has already been declared. (42:7)\n\n\u001b[0m \u001b[90m 40 |\u001b[39m \u001b[36mimport\u001b[39m tooltipSocialShare \u001b[36mfrom\u001b[39m \u001b[32m'./patterns/tooltip/social-share/social-share'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m \u001b[36mimport\u001b[39m video \u001b[36mfrom\u001b[39m \u001b[32m'./patterns/video/video'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 42 |\u001b[39m \u001b[36mimport\u001b[39m particle \u001b[36mfrom\u001b[39m \u001b[32m'./patterns/animation/fade-out-scroll/fade-out-scroll'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 |\u001b[39m \u001b[36mimport\u001b[39m addEventFadeOutScroll \u001b[36mfrom\u001b[39m \u001b[32m'./patterns/animation/fade-out-scroll/fade-out-scroll'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m [\u001b[0m\n    at Object._raise (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/error.js:147:45)\n    at Object.raiseWithData (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/error.js:142:17)\n    at Object.raise (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/error.js:91:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/util/scope.js:152:12)\n    at ScopeHandler.declareName (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/util/scope.js:113:12)\n    at Object.checkLVal (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/lval.js:482:22)\n    at Object.parseImportSpecifierLocal (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/statement.js:2288:10)\n    at Object.maybeParseDefaultImportSpecifier (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/statement.js:2415:12)\n    at Object.parseImport (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/statement.js:2237:31)\n    at Object.parseStatementContent (/home/rof/src/github.com/CityUniversityLondon/web2020/node_modules/@babel/parser/src/parser/statement.js:332:25)");

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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




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
  Array.from(elem.querySelectorAll('a')).forEach(anchor => {
    if (anchor.origin === window.location.origin) {
      const parameters = anchor.search ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["parametersToObject"])(anchor.search) : {};
      parameters[param] = value;
      anchor.href = `${anchor.origin}${anchor.pathname}${Object(_util__WEBPACK_IMPORTED_MODULE_1__["objectToParameters"])(parameters)}${anchor.hash}`;
    }
  });
}

/***/ }),

/***/ "./src/patterns/tabs/prepareAccordionTabs.js":
/*!***************************************************!*\
  !*** ./src/patterns/tabs/prepareAccordionTabs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * prepareAccordionTabs
 *
 * @module patterns/tabs/prepareAccordionTabs
 * @author Web Development
 * @copyright City, University of London 2019
 */


const className = 'tabs',
      panelClassName = className + '__panel',
      linksClassName = className + '__links';
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
  Array.from(tabs.parentNode.querySelectorAll(`#${tabs.id} > .${panelClassName}`)).forEach(panel => {
    const heading = panel.querySelector(`.${panelClassName}__heading`),
          body = panel.querySelector(`.${panelClassName}__body`),
          accordionHeading = document.createElement(`h${accordion.dataset.level}`),
          accordionSection = document.createElement('div'),
          accordionWrapper = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = `accordion${tabs.dataset.assetid}-header${panel.dataset.assetid}`;
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].labelledBy);
    const accordionHeadingNode = heading.childNodes[0].nodeType;
    accordionHeadingNode === 3 ? accordionHeading.innerText = heading.childNodes[0].nodeValue.trim() : accordionHeading.innerText = heading.childNodes[1].nodeValue.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = `accordion${tabs.dataset.assetid}-body${panel.dataset.assetid}`;
    accordionWrapper.className = 'wrapper--accordion__body__content';
    accordionWrapper.innerHTML = body.innerHTML;
    accordionSection.appendChild(accordionWrapper);
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(accordion, [accordionHeading, accordionSection]);
  });
  tabs.parentNode.insertBefore(wrapper, tabs);
  wrapper.appendChild(tabs);
  wrapper.appendChild(accordion);
  return accordion;
}

function prepareAccordionTabs(tabs) {
  const controls = tabs.querySelector(`.${linksClassName}`),
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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest, formatTime, formatReactDate, arraySlicer, screenWidth */
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Useful utility functions
 *
 * @module util
 * @author Web Development
 * @copyright City, University of London 2018-2020
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
 * Check browser user agent is IE or edge and return version number
 */

function detectIE() {
  const ua = window.navigator.userAgent,
        versionLength = 10,
        msie = ua.indexOf('MSIE '),
        msieVersionOffset = 5;

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + msieVersionOffset, ua.indexOf('.', msie)), versionLength);
  }

  const trident = ua.indexOf('Trident/'),
        tridentVersionOffset = 3;

  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + tridentVersionOffset, ua.indexOf('.', rv)), versionLength);
  }

  const edge = ua.indexOf('Edge/'),
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
  let el = document.createElement(type);
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
  const httpOK = 200;
  return axios__WEBPACK_IMPORTED_MODULE_3___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw `Bad response: ${response.status}`;
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_3___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `axiosRequest ${e.fileName} (${window.location})`, true);
    }
  });
}
/**
 * Returns a react fragment formatted time
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted time to local time.
 */

function formatTime(timeString) {
  const time = new Date(timeString);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("time", {
    dateTime: `${time.getHours() ? time.getHours() : '00'}:${time.getMinutes() ? time.getMinutes() : '00'}`
  }, time.getHours() ? time.getHours() : '00', ":", time.getMinutes() ? time.getMinutes() : '00');
}
/**
 * Returns the correct English suffix for a number.
 *
 * @param  {number} day - The day of the month.
 * @returns {string} The correct suffix.
 */

function daySuffix(day) {
  const eleventh = 11,
        thirteenth = 13,
        lastDigit = day.toString().slice(-1);
  return day >= eleventh || day <= thirteenth ? 'th' : lastDigit === '1' ? 'st' : lastDigit === '2' ? 'nd' : lastDigit === '3' ? 'rd' : 'th';
}
/**
 * Format a date for React.
 *
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted date.
 */


function formatReactDate(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
}
/**
 * Array slicer
 *
 * @param {array} arr - array to be split up into subarrays
 * @param {number} len - max number items that goes into each subarray
 */

function arraySlicer(arr, len) {
  let newArray = [],
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
      break;

    case 'mobile':
      return 432;
      break;

    case 'tablet':
      return 768;
      break;

    case 'between':
      return 900;
      break;

    case 'small':
      return 1024;
      break;

    case 'desktop':
      return 1280;
      break;

    case 'large':
      return 1440;
      break;

    case '1080':
      return 1920;
      break;

    case '4k':
      return 3840;
      break;

    case '8k':
      return 7680;
      break;

    default:
      return 1280;
      break;
  }
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