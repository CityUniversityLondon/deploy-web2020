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


/**
 *
 * actionOnScroll use the IntersectionObserver API to check if element is intersceting
 *
 * @param {HTMLElement} element - element to observer
 * @param {Action} Function/String - To either excute provided function on element or add the string as a class name
 * @param {Boolean} defualt false - pass true if you want the function to run every time element is Intersecting
 * @param {Object} Object - Pass options to customise IntersectionObserver see docs
 */
function actionOnScroll(element, action, repeat = false, options = {
  threshold: [0, 0.1, 1]
}) {
  if (element && typeof element !== 'undefined' && element !== null) {
    let actionOnScrollAction = function (entries) {
      entries.forEach(entry => {
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


    let observer = new IntersectionObserver(actionOnScrollAction, options);
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
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");
/* harmony import */ var _patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/tabs/prepareAccordionTabs */ "./src/patterns/tabs/prepareAccordionTabs.js");


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
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["gaEvent"])('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "Pattern launch ".concat(e.fileName, " (").concat(window.location, ")"), true);
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
/**
 * Recursively generate accordion--tabs HTML for tabs.
 *
 * @param {HTMLElement} root
 */


function accordionizeTabs(root) {
  Array.from(root.querySelectorAll('.tabs')).filter(elem => elem.className.indexOf('.tabs-no-js')).forEach(elem => {
    const potential = tryCatch(() => Object(_patterns_tabs_prepareAccordionTabs__WEBPACK_IMPORTED_MODULE_3__["default"])(elem));
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
      let ie = Object(_util__WEBPACK_IMPORTED_MODULE_1__["detectIE"])();
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(html, 'no-js', false);

      if (ie >= edgeVersion) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    accordionizeTabs(document);
    _patterns__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(launchPattern);
    const parameters = Object(_util__WEBPACK_IMPORTED_MODULE_1__["parametersToObject"])(location.search);
    parameters['dev'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__["devcorate"])(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && Object(_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__["devcorate"])(document.querySelector('body'), 'rel', parameters['rel']);
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
/* harmony import */ var _patterns_back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/back-to-top/back-to-top */ "./src/patterns/back-to-top/back-to-top.js");
/* harmony import */ var _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/image-carousel/image-carousel */ "./src/patterns/image-carousel/image-carousel.js");
/* harmony import */ var _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/cms-editor-warning/cms-editor-warning */ "./src/patterns/cms-editor-warning/cms-editor-warning.js");
/* harmony import */ var _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/animation/content-fade-in/content-fade-in */ "./src/patterns/animation/content-fade-in/content-fade-in.js");
/* harmony import */ var _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/animation/content-separator/content-separator */ "./src/patterns/animation/content-separator/content-separator.js");
/* harmony import */ var _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/animation/content-slide-up/content-slide-up */ "./src/patterns/animation/content-slide-up/content-slide-up.js");
/* harmony import */ var _patterns_animation_svg_path_animation_svg_path_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/animation/svg-path-animation/svg-path-animation */ "./src/patterns/animation/svg-path-animation/svg-path-animation.js");
/* harmony import */ var _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/feedback/feedback */ "./src/patterns/feedback/feedback.js");
/* harmony import */ var _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/finder/finder */ "./src/patterns/finder/finder.js");
/* harmony import */ var _patterns_finder_finder_mini__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/finder/finder-mini */ "./src/patterns/finder/finder-mini.js");
/* harmony import */ var _patterns_image_carousel_default_carousel_default_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/image-carousel/default-carousel/default-carousel */ "./src/patterns/image-carousel/default-carousel/default-carousel.js");
/* harmony import */ var _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patterns/animation/image-expand/image-expand */ "./src/patterns/animation/image-expand/image-expand.js");
/* harmony import */ var _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patterns/key-info-box/key-info-slider */ "./src/patterns/key-info-box/key-info-slider.js");
/* harmony import */ var _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patterns/link-finder/link-finder */ "./src/patterns/link-finder/link-finder.js");
/* harmony import */ var _patterns_load_more_load_more__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patterns/load-more/load-more */ "./src/patterns/load-more/load-more.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");
/* harmony import */ var _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patterns/modal/modal */ "./src/patterns/modal/modal.js");
/* harmony import */ var _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patterns/animation/number-animation/number-animation */ "./src/patterns/animation/number-animation/number-animation.js");
/* harmony import */ var _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patterns/paginated-list/paginated-list */ "./src/patterns/paginated-list/paginated-list.js");
/* harmony import */ var _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patterns/pagination/pagination */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _patterns_navigation_navigation_primary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./patterns/navigation/navigation-primary */ "./src/patterns/navigation/navigation-primary.js");
/* harmony import */ var _patterns_navigation_navigation_secondary__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patterns/navigation/navigation-secondary */ "./src/patterns/navigation/navigation-secondary.js");
/* harmony import */ var _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./patterns/show-more/show-more */ "./src/patterns/show-more/show-more.js");
/* harmony import */ var _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./patterns/slider/slider */ "./src/patterns/slider/slider.js");
/* harmony import */ var _patterns_slider_responsive_slider_responsive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./patterns/slider-responsive/slider-responsive */ "./src/patterns/slider-responsive/slider-responsive.js");
/* harmony import */ var _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./patterns/social-icon/social-icon */ "./src/patterns/social-icon/social-icon.js");
/* harmony import */ var _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./patterns/tabs/tabs */ "./src/patterns/tabs/tabs.js");
/* harmony import */ var _patterns_dropdown_filter_dropdown_filter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./patterns/dropdown-filter/dropdown-filter */ "./src/patterns/dropdown-filter/dropdown-filter.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City, University of London 2018
 */





























/* harmony default export */ __webpack_exports__["default"] = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_feedback_feedback__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_finder_finder_mini__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_key_info_box_key_info_slider__WEBPACK_IMPORTED_MODULE_13__["default"], _patterns_load_more_load_more__WEBPACK_IMPORTED_MODULE_15__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_16__["default"], _patterns_navigation_navigation_primary__WEBPACK_IMPORTED_MODULE_21__["default"], _patterns_navigation_navigation_secondary__WEBPACK_IMPORTED_MODULE_22__["default"], _patterns_paginated_list_paginated_list__WEBPACK_IMPORTED_MODULE_19__["default"], _patterns_pagination_pagination__WEBPACK_IMPORTED_MODULE_20__["default"], _patterns_tabs_tabs__WEBPACK_IMPORTED_MODULE_27__["default"], _patterns_link_finder_link_finder__WEBPACK_IMPORTED_MODULE_14__["default"], _patterns_animation_content_separator_content_separator__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_animation_image_expand_image_expand__WEBPACK_IMPORTED_MODULE_12__["default"], _patterns_animation_content_fade_in_content_fade_in__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_animation_content_slide_up_content_slide_up__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_17__["default"], _patterns_social_icon_social_icon__WEBPACK_IMPORTED_MODULE_26__["default"], _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_24__["default"], _patterns_slider_responsive_slider_responsive__WEBPACK_IMPORTED_MODULE_25__["default"], _patterns_image_carousel_image_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_animation_number_animation_number_animation__WEBPACK_IMPORTED_MODULE_18__["default"], _patterns_show_more_show_more__WEBPACK_IMPORTED_MODULE_23__["default"], _patterns_image_carousel_default_carousel_default_carousel__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_animation_svg_path_animation_svg_path_animation__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_back_to_top_back_to_top__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_dropdown_filter_dropdown_filter__WEBPACK_IMPORTED_MODULE_28__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Accordion
 *
 * @module patterns/accordion/accordion
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */



const className = 'accordion',
      headingClassName = className + '__heading',
      headingTextClassName = headingClassName + '__text',
      headingIconClassName = headingClassName + '__indicator fal',
      bodyClassName = className + '__body',
      oneSecond = 1000,
      tenthOfASecond = 100,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_2__["reduceMotion"])() ? 0 : oneSecond,
      scrollTo = true;
/**
 * Sets a heading and the button nested within to be open or closed.
 *
 * @param {HTMLHeadingElement} heading - An accordion heading.
 * @param {boolean} open - Set this section to be open?
 */

function setSection(heading, open) {
  heading.dataset.open = open;
  heading.firstElementChild.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded, open);
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
  const section = heading.nextElementSibling;
  setSection(heading, true);
  section.dataset.closed = 'false';
  const height = section.offsetHeight + 'px';
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
  const open = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(section.previousElementSibling.dataset.open);
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
  const heading = button.parentNode,
        accordionSection = heading.nextElementSibling;
  /**
   * After we've transitioned the opening/closing, we want to revert to
   * letting the CSS size the element. Add a listener to do this that will
   * self-destruct after running.
   */

  accordionSection.addEventListener('transitionend', () => cleanupTransition(accordionSection), {
    capture: true,
    once: true
  });

  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded))) {
    // Starting height is the current height
    setupTransition(accordionSection, accordionSection.offsetHeight + 'px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(() => {
      accordionSection.style.height = '0px';
    }, tenthOfASecond);
    setSection(heading, false);
  } else {
    // Calclulate and save how big we're transitioning to
    const sectionHeight = calculateAccordionBodyHeight(heading); // Starting height is 0

    setupTransition(accordionSection, '0px'); // setTimeout lets the DOM recalculate before we continue, so the transition will fire

    setTimeout(() => {
      accordionSection.style.height = sectionHeight;
    }, tenthOfASecond);

    if (toggleOpen) {
      const sections = Array.from(heading.parentNode.parentNode.querySelectorAll("#".concat(heading.parentElement.id, " > .").concat(bodyClassName)));
      headings.forEach(heading => setSection(heading, false));
      sections.filter(section => section.id !== accordionSection.id).forEach(section => {
        section.dataset.closed = 'true';
      });
    }

    setSection(heading, true);

    if (scrollTo && !(Object(_util__WEBPACK_IMPORTED_MODULE_2__["verticallyInWindow"])(heading) && Object(_util__WEBPACK_IMPORTED_MODULE_2__["verticallyInWindow"])(accordionSection))) {
      zenscroll__WEBPACK_IMPORTED_MODULE_0___default.a.to(heading, scrollDuration);
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
  const button = document.createElement('button'),
        // Chrome can't apply grid layout to buttons, need to wrap contents
  wrapper = document.createElement('div'),
        textSpan = document.createElement('span'),
        iconSpan = document.createElement('span');
  textSpan.className = headingTextClassName;
  iconSpan.className = headingIconClassName;
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].hidden, true);
  button.setAttribute('type', 'button');
  textSpan.appendChild(document.createTextNode(heading.textContent));
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendAll"])(wrapper, [textSpan, iconSpan]);
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
  const toggleOpen = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(accordion.dataset.toggleopen),
        defaultOpen = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(accordion.dataset.defaultopen),
        allowSingle = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toBool"])(accordion.dataset.allowsingle),
        headings = Array.from(accordion.parentNode.querySelectorAll("#".concat(accordion.id, " > .").concat(headingClassName)));
  let idLinked = false;

  if (!(allowSingle || headings.length > 1)) {
    /**
     * not enough content to accordion
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(accordion, className, false);
    return;
  }

  headings.forEach(heading => {
    const content = heading.nextElementSibling,
          button = buttonFromHeading(heading);
    content.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].labelledBy, heading.id);
    content.setAttribute('role', 'region');
    heading.replaceChild(button, heading.firstChild);
    setSection(heading, false);
    heading.nextElementSibling.dataset.closed = 'true';
    button.addEventListener('click', () => buttonClick(button, headings, toggleOpen), true);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util.js");


/**
 *  Animates content section to fade in and upwards on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-section
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

const className = 'content-fade-in';

function contentFadeIn(contentFadein) {
  const viewPortHeight = window.innerHeight; // calculates viewport height

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) {
    contentFadein.classList.add('content-fade-in--start');
    window.addEventListener('scroll', function () {
      const elemOffset = contentFadein.offsetTop;
      const screenPos = window.pageYOffset; // calculates scroll position

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util.js");


/**
 * Leading separator transition
 *
 * @module paint-layouts/case-study-transition-effects/leading-separator
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

const className = 'content-separator-container';
/**
 *
 * @param {HTMLElement} contentSeparatorContainer: the separator is the
 * first child of this container
 *
 */

function contentSeparator(contentSeparatorContainer) {
  const viewPortHeight = window.innerHeight; // calculates viewport height

  let el = insertElement(contentSeparatorContainer);

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) {
    el.classList.add('content-separator--transition-start');
    window.addEventListener('scroll', function () {
      const elemOffset = el.offsetTop;
      const screenPos = window.pageYOffset; // calculates scroll position

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
  let el = document.createElement('div');
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util.js");


/**
 * Background slideup transition, Animates content to slide up on down scroll
 *
 * @module paint-layouts/case-study-transition-effects/content-slideup
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

const className = 'content-slide-up';

function contentSlideUp(contentSlideup) {
  const viewPortHeight = window.innerHeight; // calculates viewport height

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) {
    contentSlideup.classList.add('content-slideup--start');
    window.addEventListener('scroll', function () {
      const screenPos = window.pageYOffset; // calculates scroll position

      const elemOffsetTop = contentSlideup.offsetTop; // calculates element offset from top to the page

      const parentElemHeight = contentSlideup.parentElement.offsetHeight - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue('padding-bottom')) - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue('padding-top'));

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util.js");


/**
 * Image transition
 *
 * @module paint-layouts/case-study-transition-effects/banner-image
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

const className = 'image-expand';

function imageExpand(image) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) {
    const viewPortHeight = window.innerHeight; // calculates viewport height

    image.classList.add('image-expand--start');
    window.addEventListener('scroll', function () {
      const elemOffset = image.offsetTop;
      const screenPos = window.pageYOffset; // calculates scroll position

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
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../action-on-scroll */ "./src/action-on-scroll.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util */ "./src/util.js");





const className = 'animate-number',
      DURATION = 1500; // set duration variable 1500 ms increase if want longer animation

/**
 *
 * find container containing the number
 *
 * @param {HTMLElement} element - html element to be animated
 * @return {HTMLElement} element - if element to be animated is found return it else return original element
 */

function findNumberContainer(widget) {
  const nested = widget.querySelector('.animate--number__number');
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
  const startStr = widget.dataset.animationNumberStart || '0';
  const start = parseFloat(startStr);
  const numberContainer = findNumberContainer(widget);
  const numberStr = numberContainer.innerHTML.trim().replace(/,/g, '');

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
  const numberContainer = findNumberContainer(widget);
  const isFloat = widget.dataset.animationNumberFloat;
  const value = parseInt(widget.dataset.animationNumberValue);

  if (value !== 0) {
    let first = true;
    let startTime = 0;
    let startValue = parseInt(widget.dataset.animationNumberStart);
    let lastValue = 0;
    /**
     * function to run animation
     *
     * @param {timestamp} time stamp - time stamp from requestAnimationFrame API
     */

    const f = timestamp => {
      if (first) {
        startTime = timestamp;
        first = false;
      }

      const t = (timestamp - startTime) / DURATION; // difference in time between two discrete points in time divied by duration

      const finish = t >= 1;
      let k = finish ? 1 : 1 - Math.pow(1 - t, 4);
      let v = k * (value - startValue) + startValue;

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
  const lazyNumbers = [].slice.call(elm.querySelectorAll('.animate--number'));
  /**
   * check if browser support IntersectionObserver api
   */

  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["checkIntersectionObserver"])()) {
    lazyNumbers.forEach(function (lazyUnit) {
      initNumberAnimation(lazyUnit);
      /**
       * pass the element and function to actionOnScroll
       * to animate when element is intersecting
       */

      Object(_action_on_scroll__WEBPACK_IMPORTED_MODULE_1__["actionOnScroll"])(lazyUnit, runNumberAnimation);
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


/**
 * SVG path animation
 *
 * @module patterns/animation/svg path
 * @author adapted by Walter Reyneke <walter.reyneke@city.ac.uk> from CASS polaris
 * @copyright City, University of London 2019!
 */
const className = 'animate-svg';
/**
 * This animation targets SVG paths. When in scrolling distance the path will animated from a starting position of zero till the full length of the path is shown.
 *
 * @param {class} animateSvg - Selects a parent class which will contain the paths targetted for animation
 *
 */

function initSvgPathAnimation(animateSvg) {
  const viewPortHeight = window.innerHeight; // calculates viewport height

  window.addEventListener('DOMContentLoaded', () => {
    var paths = animateSvg.querySelectorAll('.animate--svg-path'); // prepares the animation

    paths.forEach(path => {
      let length = path.getTotalLength() + 'px';
      path.classList.add('animate--svg-path--jsinit');
      path.style.strokeDashoffset = length;
      path.style.strokeDasharray = "".concat(length, ", ").concat(length);
    }); // starts animation when in scrolling view

    window.addEventListener('scroll', function () {
      const elemOffset = animateSvg.offsetTop;
      const screenPos = window.pageYOffset; // calculates scroll position

      if (screenPos > elemOffset - viewPortHeight + 30) {
        paths.forEach(function (path) {
          !path.classList.contains('animate--svg-path--jsrun') ? path.classList.add('animate--svg-path--jsrun') : null;
          setTimeout(() => {
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
 * @copyright City, University of London 2019
 */

const className = 'back-to-top',
      viewPortHeight = window.innerHeight;
/**
 * Back to top anchor anchor only appears on long pages and when you have scrolled down long enough
 * Please change the parameter below to alter the behaviour of the back to top anchor.
 *
 * scrollPos - sets how many viewport heights you need to scroll down for back to top to appear. 1 = 1 viewport height
 */

const scrollPos = 4;
/**
 *
 * @param {HTMLElement} - selects back to top parent element, which is used in return to select children elements
 */

function initBacktoTop(backToTop) {
  const backToTopAnchor = backToTop.querySelectorAll('a')[0];
  window.addEventListener('load', function () {
    backToTop.querySelector('.back-to-top__button__arrow').appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createHTMLElement"])('span', [{
      label: 'content',
      val: 'top'
    }, {
      label: 'class',
      val: 'back-to-top__button__arrow__label'
    }])); // adds inner button label for if javascript enabled

    backToTop.setAttribute('hidden', 'true');
    window.addEventListener('scroll', () => {
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
  const positionOnScreen = window.pageYOffset;

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
  const progressPath = backToTopAnchor.querySelector('path'),
        pathLength = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength; // Calculate values

  const scroll = window.pageYOffset,
        height = document.documentElement.scrollHeight - window.innerHeight,
        progress = pathLength - scroll * pathLength / height; // Updates progress bar

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Warning removal
 *
 * @module patterns/cms-editor-warning/cms-editor-warning
 * @author Web Development
 * @copyright City, University of London 2018
 */

const className = 'cms-editor',
      warningClass = className + '-warning',
      buttonClass = warningClass + '-remover',
      wrapperClass = 'wrapper--' + buttonClass;
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
    const button = createButton(),
          wrapper = document.createElement('div');
    button.addEventListener('click', () => {
      warnings.forEach(w => w.parentNode.removeChild(w));
      button.parentNode.removeChild(button);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(elem, className, false);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");


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
      const parameters = anchor.search ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["parametersToObject"])(anchor.search) : {};
      parameters[param] = value;
      anchor.href = "".concat(anchor.origin).concat(anchor.pathname).concat(Object(_util__WEBPACK_IMPORTED_MODULE_0__["objectToParameters"])(parameters)).concat(anchor.hash);
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


/**
 * Dropdown filter
 *
 * @module patterns/dropdown-filter/dropdown-filter
 * @author Web Development
 * @copyright City, University of London 2019
 */
const className = 'dropdown-filter';
/**
 * Entry function: loops through and hides list items, sets up event listener on
 * child select box
 *
 * @param {HTMLElement} element: the dropdown div containing all elements
 */

function prepareDropdown(element) {
  // only get direct children
  const listItems = element.querySelectorAll('ul.data-group > li'); // hide list items

  hideListItems(listItems); // insert the select box to toggle items

  insertSelect(listItems, element);
}
/**
 * Hide list items: both functions require all list items to be hidden.
 * Ths function takes care of this
 *
 * @param {HTMLElements} items: the list of items to hide
 */


function hideListItems(items) {
  // hide list items
  items.forEach(function (item) {
    item.setAttribute('data-hidden', 'true');
  });
}
/**
 * Insert select: build and add the select box to source
 *
 * @param {HTMLElements} items: the list of content for the select options
 * @param {HTMLElement} parentElement: the element where we need to insert the select
 */


function insertSelect(items, parentElement) {
  const selectBox = document.createElement('select');
  selectBox.className = 'select-filter';
  parentElement.prepend(selectBox); // get and add default select text

  let option = document.createElement('option');
  option.text = parentElement.getAttribute('data-text');
  selectBox.appendChild(option); // iterate over each item and create/append select option

  items.forEach(function (item, i) {
    let dataValue = item.getAttribute('data-value');
    let option = document.createElement('option');
    option.value = dataValue;
    option.text = dataValue; // set first item in list as selected

    if (i === 0) {
      option.setAttribute('selected', 'selected');
    }

    selectBox.appendChild(option);
  }); // add change listner to newly created select box

  selectBox.addEventListener('change', selectChange); // dispatch event so first item is selected

  selectBox.dispatchEvent(new Event('change'));
}
/**
 * Select change: respond to select change
 *
 * @param {event} e: the event
 */


function selectChange(e) {
  // get the ul containing the list items
  const dataGroup = e.target.nextElementSibling; // get direct list items

  const listItems = dataGroup.querySelectorAll('ul.data-group > li'); // hide all items before displaying chosen item

  hideListItems(listItems); // if first option selected, return

  if (e.srcElement.selectedIndex === 0) {
    return;
  } // get the list item corresponding to the select value chosen


  const targetListItem = dataGroup.querySelector('li[data-value=' + e.target.value + ']'); // remove data-hidden

  targetListItem.removeAttribute('data-hidden');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: prepareDropdown,
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
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Feedback
 *
 * @module patterns/feedback/feedback
 * @author Web Development
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
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["gaEvent"])('pageFeedback', 'Page feedback', action, window.location.toString(), value, true);
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
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(message, [messagePrefix, link, messageSuffix]);
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].live, 'polite');
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
  message.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].live, 'polite');
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
        buttonWrapper = document.createElement('div'),
        yesButton = document.createElement('button'),
        noButton = document.createElement('button');
  yesButton.setAttribute('type', 'button');
  yesButton.appendChild(document.createTextNode('Yes'));
  yesButton.addEventListener('click', () => handleYes(directFeedbackWrapper), true);
  noButton.setAttribute('type', 'button');
  noButton.appendChild(document.createTextNode('No'));
  noButton.addEventListener('click', () => handleNo(directFeedbackWrapper), true);
  buttonWrapper.className = 'feedback__direct__buttons';
  questionLegend.appendChild(questionText);
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(buttonWrapper, [yesButton, noButton]);
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(directFeedbackFieldset, [questionLegend, buttonWrapper]);
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
    href: props.details.clickTrackingUrl
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
/* harmony import */ var _finder_results_casestudy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__results__casestudy */ "./src/patterns/finder/components/cards/finder__results__casestudy.js");
/* harmony import */ var _finder_results_centre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__results__centre */ "./src/patterns/finder/components/cards/finder__results__centre.js");
/* harmony import */ var _finder_results_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__results__contact */ "./src/patterns/finder/components/cards/finder__results__contact.js");
/* harmony import */ var _finder_results_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__course */ "./src/patterns/finder/components/cards/finder__results__course.js");
/* harmony import */ var _finder_results_funding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__funding */ "./src/patterns/finder/components/cards/finder__results__funding.js");
/* harmony import */ var _finder_results_generic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__generic */ "./src/patterns/finder/components/cards/finder__results__generic.js");
/* harmony import */ var _finder_results_news__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__results__news */ "./src/patterns/finder/components/cards/finder__results__news.js");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__results__profile */ "./src/patterns/finder/components/cards/finder__results__profile.js");


/**
 * @module patterns/finder/components/cards/finder__results__card
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
    case 'casestudy':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_casestudy__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details
      });

    case 'centre':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_centre__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details,
        query: props.query
      });

    case 'contact':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: props.details,
        query: props.query
      });

    case 'course':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_5__["default"], {
        details: props.details,
        query: props.query
      });

    case 'funding':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details,
        query: props.query
      });

    case 'news':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details
      });

    case 'profile':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

/***/ "./src/patterns/finder/components/cards/finder__results__casestudy.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__casestudy.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__casestudy
 * @author Web Development
 * @copyright City, University of London 2020
 */


/**
 * Render a Funnelback result as a case study card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__casestudy(props) {
  const subtitle = props.details.metaData.status ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.status) : props.details.metaData.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.type),
        school = props.details.metaData.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and '))),
        centre = props.details.metaData.centre && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-vial icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Research centre:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.centre.split('|').length > 2 ? props.details.metaData.centre.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.centre.split('|').slice(-1) : props.details.metaData.centre.split('|').join(', and ')));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__casestudy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), subtitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c && props.details.metaData.c), school, department, centre)));
}

finder__results__casestudy.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__casestudy);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__centre.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__centre.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/cards/finder__results__centre
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as a centre card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__centre(props) {
  const school = props.details.metaData.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and '))),
        subject = props.details.metaData.related && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.related.split('|').length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').slice(0, -1).join(', ') + ' and ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').join(' and '));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__centre"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), subject, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c && props.details.metaData.c), school, department)));
}

finder__results__centre.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__centre);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__contact.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__contact.js ***!
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
 * @module patterns/finder/components/cards/finder__results__contact
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Render a Funnelback result as a contact card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__contact(props) {
  const department = props.details.metaData.department && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), " ", props.details.metaData.department),
        jobtitle = props.details.metaData.jobtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.jobtitle),
        email = props.details.metaData.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-envelope icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'mailto:' + props.details.metaData.email
  }, props.details.metaData.email)),
        telephone = props.details.metaData.telephone && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-phone fa-rotate-90 icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Telephone:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'tel:' + props.details.metaData.telephone
  }, props.details.metaData.friendlytelephone)),
        room = props.details.metaData.room && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-door-open icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Room:"), " ", props.details.metaData.room);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.title)), jobtitle, department, room, email, telephone));
}

finder__results__contact.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__contact);

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
/* harmony import */ var _results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/finder__results__highlight__query */ "./src/patterns/finder/components/results/finder__results__highlight__query.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/cards/finder__results__course
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Render a Funnelback result as a course card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__course(props) {
  const subtitle = props.details.metaData.type || props.details.metaData.level || null,
        award = props.details.metaData.qualification && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Award", props.details.metaData.qualification.split('|').length > 1 && 's', ":"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.qualification.split('|').join(', '))),
        duration = props.details.metaData.duration && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Duration:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.duration)),
        method = props.details.metaData.method && (props.query.facets.method || props.query.query.indexOf(props.details.metaData.method) >= 0 || props.details.metaData.method.indexOf('Online') >= 0) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-book-reader icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Method", props.details.metaData.method.split('|').length > 1 && 's', ' ', "of study:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.method).split('|').join(', '))),
        location = props.details.metaData.location && props.query.facets.location && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Location:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.location)),
        school = props.details.metaData.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.school)),
        clearing = props.details.metaData.clearing === '1' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearing_label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Available in clearing")),
        external = props.details.indexUrl.indexOf('cass.city.ac.uk') >= 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-external-link icon",
    "aria-label": "(external link)"
  })),
        courseCode = props.details.metaData.code && (['Undergraduate degree', 'Foundation course', 'Postgraduate taught degree'].some(s => props.details.metaData.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.metaData.code) >= 0) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Course code", props.details.metaData.code.split('|').length > 1 && 's', ":"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.code.split('|').join('/'))) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__course"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, clearing, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.title, props.query.query) : props.details.title, external)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_2__["default"])(subtitle, props.query.query) : subtitle && subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.query.query ? Object(_results_finder_results_highlight_query__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.metaData.c, props.query.query) : props.details.metaData.c && props.details.metaData.c), school, award, duration, courseCode, method, location)));
}

finder__results__course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__course);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__funding.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__funding.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/cards/finder__results__funding
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as a funding card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__funding(props) {
  const school = props.details.metaData.school && props.query.facets.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', or ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', or '))),
        hardship = props.details.metaData.hardship === '1' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hardship-label"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hardship funding")),
        programme = props.details.metaData.level && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Funding for:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.level.split('|').length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').join(' or '))),
        feestatus = props.details.metaData.feestatus && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-fw fa-globe-europe icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Fee status:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.feestatus.split('|').length > 2 ? props.details.metaData.feestatus.split('|').slice(0, -1).join(', ') + ' or ' + props.details.metaData.feestatus.split('|').slice(-1) : props.details.metaData.feestatus.split('|').join(' or ')));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__funding"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, hardship, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c && props.details.metaData.c), programme, feestatus, school)));
}

finder__results__funding.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__funding);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__generic.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__generic.js ***!
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
 * @module patterns/finder/components/cards/finder__results__generic
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__contact(props) {
  const school = props.details.metaData.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and ')));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__generic"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c && props.details.metaData.c), school, department)));
}

finder__results__contact.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__contact);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__news.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__news.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/cards/finder__results__news
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__news(props) {
  const formattedDate = Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatReactDate"])(new Date(props.details.metaData.d)),
        dateString = props.details.metaData.d && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, formattedDate),
        hashtags = props.details.metaData.hashtagtext && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fad fa-fw fa-hashtag icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Hashtag", props.details.metaData.hashtagtext.split('|').length > 1 && 's', ":"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.metaData.hashtagtext.split('|').join(', ')));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__generic"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), dateString, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.details.metaData.c && props.details.metaData.c), hashtags)));
}

finder__results__news.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__news);

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
 * @param {object} props React props.
 * @return {object} - React component.
 */

function finder__results__profile(props) {
  const school = props.details.metaData.school && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), " ", props.details.metaData.school),
        department = props.details.metaData.department && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__tag"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), " ", props.details.metaData.department),
        headshot = props.details.metaData.thumbnail && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnail__image-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.metaData.thumbnail,
    alt: 'Photo of ' + props.details.metaData.title
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "finder__results__card finder__results__profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.clickTrackingUrl
  }, headshot, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__card__details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "finder__results__card__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "underline-transition__title"
  }, props.details.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__card__description"
  }, props.details.metaData.jobtitle), school, department)));
}

finder__results__profile.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__profile);

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
/* harmony import */ var _finder_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__select */ "./src/patterns/finder/components/filters/finder__select.js");
/* harmony import */ var _query_finder_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../query/finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");
/* harmony import */ var _finder_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__toggle */ "./src/patterns/finder/components/filters/finder__toggle.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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

  if (!facet.dependency) {
    return true;
  }

  if (setFacets.indexOf(facet.dependency) >= 0 && facetMap[facet.dependency] !== '') {
    return true;
  }

  return false;
}
/**
 * Component to update facet values in the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */


function finder__filters(props) {
  const clearFilters = Object.keys(props.query.facets).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__clear--desktop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_finder_clear__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clear: props.clear,
    query: props.query
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "finder__filters__heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__filters__heading__text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', "Filter ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_finder_clear__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clear: props.clear,
    query: props.query
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__wrapper--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'select':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        case 'toggle':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update
          });

        default:
          Object(_util__WEBPACK_IMPORTED_MODULE_5__["gaEvent"])('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), clearFilters, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."))));
}

finder__filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
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
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__);




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
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let filters = null;

  const getFilters = () => filters; // trap tab focus when the filters are open


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_4___default()(getFilters(), {
        initialFocus: getFilters().querySelector('.finder__filters--mobile__apply'),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["disableBodyScroll"])(getFilters().querySelector('.finder__filters--mobile__filters'));
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["enableBodyScroll"])(getFilters().querySelector('.finder__filters--mobile__filters'));
    }
  }, [display]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const result = totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  const totalMatchingMessage = totalMatching ? "Show ".concat(totalMatching, " ").concat(result) : 'Close';
  const filtersCount = Object.keys(props.query.facets).length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Filters", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "finder__mobilefilters__toggle__filterNo"
  }, "(", Object.keys(props.query.facets).length, ")")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Filter");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__filters--mobile",
    "data-open": display,
    ref: mobilefilters => filters = mobilefilters
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 ? true : false
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', filtersCount)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__filters--mobile__filters"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__filters--mobile__filters__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_finder_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__apply"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "finder__filters--mobile__apply",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-chevron-left"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-live": "polite"
  }, props.updating ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "finder__filters--mobile__apply__text"
  }, "Updating ", props.summariseAs.plural, "\u2026")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage))))));
}

finder__mobilefilters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__mobilefilters);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__select.js":
/*!******************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__select.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




/**<
 * @module patterns/finder/components/finder__select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__select(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset),
        currentValue = props.query.facets[props.facet.meta] || ''; // reduce the facet configuration to an array of all possible values for
  // the facet

  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []); // reduce the Funnelback response for the facet to an array of valid
  // values for the current query

  const responseFacets = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values ? props.responseFacet[0].categories[0].values.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : []; // count how many possible facets are not valid for the current query
  // and will be hidden

  const hiddenFacets = allFacets.map(facet => facet.data).filter(facet => responseFacets.indexOf(facet.toLowerCase()) < 0).length;

  const setFacet = value => {
    const newQuery = props.query,
          newValue = value;
    props.dependencies.map(facet => {
      delete newQuery.facets[facet.meta];
    });

    if (newValue) {
      newQuery.facets[props.facet.meta] = newValue;
    } else {
      delete newQuery.facets[props.facet.meta];
    }

    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  if (props.facet.values.length > hiddenFacets) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finder__filter finder__select ".concat(currentValue && 'finder__select--selected')
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "finder__select__overline",
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      name: props.facet.name,
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      onChange: e => setFacet(e.target.value),
      value: currentValue
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "",
      id: "meta".concat(props.facet.meta, "all"),
      name: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.noSelection), props.facet.values.map((value, i) => {
      const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());

      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: i,
          value: value.data,
          id: "meta".concat(props.facet.meta).concat(i),
          name: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
        }, value.label, currentValue !== value.data ? responseFacetDetails[0].count > 0 && " (".concat(responseFacetDetails[0].count, ")") : '');
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}

finder__select.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (finder__select);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__toggle.js":
/*!******************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__toggle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @module patterns/finder/components/finder__toggle
 * @author Web Development
 * @copyright City, University of London 2019
 */



function finder__toggle(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset);

  const setFacet = e => {
    const newQuery = props.query,
          newValue = e.target.value,
          checked = e.target.checked;
    checked ? newQuery.facets[props.facet.meta] = newValue : delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const idString = "".concat(props.facet.name, "-").concat(randomNumber);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
    className: "finder__filter finder__togglebox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__toggle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: idString
  }, props.facet.values[0].label, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: idString,
    name: props.facet.name,
    value: props.facet.values[0].data,
    onChange: e => setFacet(e),
    checked: props.query.facets[props.facet.meta] ? true : false
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "toggle ".concat(props.query.facets[props.facet.meta] ? 'toggle--open' : 'toggle--close')
  }))));
}

finder__toggle.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__toggle);

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
    className: "far fa-fw fa-times icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__clear__text"
  }, "Reset"));
}

finder__clear.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (finder__clear);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__query--mini.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__query--mini.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");





/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */




const maximumSuggestions = 5,
      keyCodeEscape = 27,
      keyCodeUp = 38,
      keyCodeDown = 40;

function highlightQueryTerm(suggestion, partialQuery) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
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
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.query.query); // Funnelback suggestions for the currently typed text

  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]); // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cancel: () => {}
  }); // ref for the input field, so we can .focus() it

  const stringLength = 16,
        stringOffset = -4,
        [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset)); // boolean to show or hide suggestions

  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
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
    let queryURL = '';
    let exclusions = ['Short courses', 'Professional development courses', 'City Health courses', 'In-house law courses'];
    let courseLevel = document.getElementsByClassName('finder__mini')[0].getAttribute('data-level');

    function exclusion(level) {
      return level === courseLevel;
    }

    function buildURL(level) {
      exclusions.filter(exclusion).length ? queryURL = 'meta_level_sand=Short+courses+and+professional+development&meta_type_sand=' + level : queryURL = 'meta_level_sand=' + level;
      window.location.replace("https://web2020.city.ac.uk/prospective-students/courses?".concat(queryURL, "&query=").concat(partialQuery));
    }

    buildURL(courseLevel);
  };

  const submitSuggestion = s => {
    call.cancel();
    const newQuery = props.query;
    newQuery.query = s;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const clear = partialQuery && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: () => {
      clearQuery();
    }
  }); // render suggestions
  // TODO: probably should be refactored into a separate component

  const suggestionsList = suggestions && suggestions.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map(suggestion => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: suggestion
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
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

        default:
          break;
      }
    }
  }, highlightQueryTerm(suggestion, partialQuery)))));
  const input = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__query__input"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "finder__icon fal fa-search"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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

        default:
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
        const [suggestionsPromise, newCall] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_3__["suggest"])(props.query.collection, e.target.value); // update our request cancel function for the new request

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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
    className: "finder__query"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, input, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fal fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

finder__query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (finder__query);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__query.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__query.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");




/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */




const maximumSuggestions = 5,
      keyCodeEscape = 27,
      keyCodeUp = 38,
      keyCodeDown = 40,
      keyCodeEnd = 35,
      keyCodeHome = 36;

function highlightQueryTerm(suggestion, partialQuery) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
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
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.query.query); // Funnelback suggestions for the currently typed text

  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    cancel: () => {}
  }); // ref for the input field, so we can .focus() it

  const stringLength = 16,
        stringOffset = -4,
        [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset));
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        [activeSuggestionID, setActiveSuggestionID] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    newQuery.misspelling = null;
    newQuery.query = '';
    newQuery.sortBy = props.config.sort;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const submitForm = query => {
    call.cancel();
    setSuggestions([]);
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : '';
    newQuery.sortBy = partialQuery ? null : props.config.sort;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const clear = partialQuery && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clear: () => {
      clearQuery();
    }
  });

  const submitSuggestion = suggestion => {
    setShowSuggestions(false);
    setSuggestions([]);
    focusInput();
    submitForm(suggestion);
  }; // render suggestions


  const suggestionsList = suggestions && suggestions.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    key: suggestion,
    role: "option",
    id: inputId + '--' + i
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onBlur: () => {
      setActiveSuggestionID('');
      setShowSuggestions(false);
    },
    onFocus: () => setShowSuggestions(true),
    onMouseDown: () => submitSuggestion(suggestion),
    onClick: () => submitSuggestion(suggestion),
    onKeyDown: e => {
      switch (e.keyCode) {
        case keyCodeEscape:
          e.target.parentNode.parentNode.parentNode.querySelector('input').focus();
          setSuggestions([]);
          setActiveSuggestionID('');
          break;

        case keyCodeUp:
          if (e.target.parentNode.previousElementSibling && e.target.parentNode.previousElementSibling.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.previousElementSibling.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.previousElementSibling.id);
          } else {
            e.preventDefault();
            e.target.parentNode.parentNode.parentNode.querySelector('input').focus();
            setActiveSuggestionID('');
          }

          break;

        case keyCodeDown:
          e.preventDefault();

          if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.nextElementSibling.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.nextElementSibling.id);
          }

          break;

        case keyCodeHome:
          e.preventDefault();

          if (e.target.parentNode.parentNode.firstChild && e.target.parentNode.parentNode.firstChild.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.parentNode.firstChild.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.firstChild.id);
          }

          break;

        case keyCodeEnd:
          e.preventDefault();

          if (e.target.parentNode.parentNode.lastChild && e.target.parentNode.parentNode.lastChild.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.parentNode.lastChild.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.lastChild.id);
          }

          break;

        default:
          break;
      }
    }
  }, highlightQueryTerm(suggestion, partialQuery)))));
  const input = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__query__input"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "finder__icon fal fa-search icon",
    "aria-hidden": "true"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs.plural)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
            setActiveSuggestionID(e.target.parentNode.querySelector('.finder__query__suggestions li').id);
          }

          break;

        default:
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
        const [suggestionsPromise, newCall] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_3__["suggest"])(props.query.collection, e.target.value); // update our request cancel function for the new request

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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
    className: "finder__query"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, input, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

finder__query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


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
  const didyoumean = props.query.misspelling ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "No ", props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "Did you mean", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "finder__didyoumean__button",
    onClick: () => {
      const newQuery = props.query;
      newQuery.query = props.response.spell.text.split(/\|/)[0].trim();
      newQuery.startRank = 1;
      newQuery.misspelling = null;
      newQuery.interacted = true;
      newQuery.facets = {};
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    }
  }, "\u201C", props.response.spell.text.split(/\|/)[0].trim(), "\u201D"), "?");
  return didyoumean;
}

finder__didyoumean.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
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
    newQuery.misspelling = null;
    newQuery.interacted = true;
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
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Updating ", props.summariseAs.plural, "\u2026"));

  if (props.response) {
    const summary = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      clear: props.clear,
      config: props.config,
      currEnd: props.response.summary.currEnd,
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      summariseAs: props.summariseAs,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    const didYouMean = (props.query.misspelling || props.response.spell) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
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

    const resultsContent = props.updating ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, updating) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, didYouMean, summary, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
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
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);




const formatLabel = (label, value) => {
  if (value) {
    return label;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label.split(value).reduce((prev, current, i) => {
    if (!i) {
      return [current];
    }

    return prev.concat(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


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
  const result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural,
        formatter = new Intl.NumberFormat('en-GB');

  if (props.totalMatching === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results__summary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "finder__results__summary__heading"
    }, "Your search did not match any ", props.summariseAs.plural, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Suggestions:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Make sure that all words are spelled correctly"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try different keywords"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try more general keywords"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try fewer keywords"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try fewer filters"), Object.keys(props.query.facets).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        props.clear();
      }
    }, "Reset filters")), props.query.query && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        const newQuery = props.query;
        newQuery.query = '';
        newQuery.sortBy = props.config.sort;
        newQuery.misspelling = null;
        newQuery.startRank = 1;
        newQuery.interacted = true;
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      }
    }, "Reset query"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results__summary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      "aria-live": "polite",
      className: "finder__results__summary__heading"
    }, props.query.query || Object.keys(props.query.facets).length > 0 ? 'Matching' : 'All', ' ', result, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(showing", ' ', props.totalMatching > props.numRanks && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.currStart)), "\u2013", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.currEnd)), ' ', "of", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.totalMatching)), ' ', result, props.query.query && " for \u201C".concat(props.query.query, "\u201D"), ")")));
  }
}

finder__results__summary.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  currEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (finder__results__summary);

/***/ }),

/***/ "./src/patterns/finder/finder-mini.js":
/*!********************************************!*\
  !*** ./src/patterns/finder/finder-mini.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_finder_query_mini__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/query/finder__query--mini */ "./src/patterns/finder/components/query/finder__query--mini.js");





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
  const hasParams = params.toString().length ? '?' : '';
  window.history.replaceState({}, '', "".concat(window.location.pathname).concat(hasParams).concat(params.toString()));
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
  }; // State objects for the Funnelback query and response

  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialQuery); // Boolean to indicate when a query is in progress

  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true); // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false); // Retrieve Funnelback results

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, props.config.facetLabels); // indicate a request is in progress

    setUpdating(true);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_4__["find"])(query.collection, query.fixedFacets, query.query, query.sortBy, query.sortDirection, query.startRank, query.numRanks, query.facets); // save the requestToken, so

    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    }); // when the response from Funnelback arrives,
    // update the results and display them

    request.then(() => {
      setUpdating(false);
    }).catch(() => {
      setUpdating(false);
    });
  }, [update]); // update props so child components can update the query

  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_query_finder_query_mini__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  }));
}

Finder.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder);

/***/ }),

/***/ "./src/patterns/finder/finder.js":
/*!***************************************!*\
  !*** ./src/patterns/finder/finder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/query/finder__query */ "./src/patterns/finder/components/query/finder__query.js");
/* harmony import */ var _components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filters/finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var _components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filters/finder__mobilefilters */ "./src/patterns/finder/components/filters/finder__mobilefilters.js");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util */ "./src/util.js");





/**
 * Universal finder
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City, University of London 2019
 */









const oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_10__["reduceMotion"])() ? 0 : oneSecond,
      screenOffsetRatio = 10;
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

    if (params.get("meta_".concat(facet.meta, "_sand"))) {
      param[facet.meta] = params.get("meta_".concat(facet.meta, "_sand"));
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
  if (window) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    facetLabels.forEach(facet => {
      if (currFacets[facet.meta]) {
        params.set("meta_".concat(facet.meta, "_sand"), currFacets[facet.meta]);
      } else {
        params.delete("meta_".concat(facet.meta, "_sand"));
      }
    });
    const hasParams = params.toString().length ? '?' : '';
    window.history.replaceState({}, '', "".concat(window.location.pathname).concat(hasParams).concat(params.toString()));
  }
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
    facets: props.config.facetLabels.length > 0 ? getFacetParams(props.config.facetLabels, params) : {},
    fixedFacets: props.config.fixedFacets,
    interacted: false,
    misspelling: null,
    numRanks: params.get('num_ranks') || props.config.numRanks,
    query: params.get('query') || '',
    sortBy: params.get('query') ? null : params.get('sort') || props.config.sort,
    sortDirection: params.get('sortdirection') || props.config.sortDirection,
    startRank: params.get('start_rank') || 1
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

  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialQuery);
  const [funnelbackResponse, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialResponse); // Boolean to indicate when a query is in progress

  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true); // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false); // Retrieve Funnelback results

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, props.config.facetLabels); // indicate a request is in progress

    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_9___default.a.center(props.element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_4__["find"])(query.collection, query.fixedFacets, query.query, query.sortBy, query.sortDirection, query.startRank, query.numRanks, query.facets); // save the requestToken, so

    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    }); // when the response from Funnelback arrives,
    // update the results and display them

    request.then(data => {
      setResponse(data);
      setUpdating(false);

      if (data.spell && data.summary.totalMatching === 0) {
        const newQueryText = data.spell.text.split(/\|/)[0].trim(),
              newQuery = query;
        newQuery.misspelling = query.query;
        newQuery.query = newQueryText;
        newQuery.startRank = 1;
        setQuery(newQuery);
        setUpdate(!update);
      }
    }).then(() => {
      query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_9___default.a.center(props.element.querySelector('.finder__results h2'), scrollDuration);
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
    const newQuery = query;
    call.cancel();
    newQuery.facets = {};
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    setQuery(newQuery);
    setUpdate(!update);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  }), props.config.facetLabels.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_filters_finder_mobilefilters__WEBPACK_IMPORTED_MODULE_7__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__filters--desktop"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_filters_finder_filters__WEBPACK_IMPORTED_MODULE_6__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    clear: clear
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clear: clear,
    config: props.config,
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    updating: updating
  }));
}

Finder.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  element: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util.js */ "./src/util.js");


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
      timeout = 30000;
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
    fixedFacetParams["meta_".concat(facet.meta, "_sand")] = facet.value;
  });
  const facetParams = {},
        facetKeys = Object.keys(facets);
  facetKeys.forEach(key => facetParams["meta_".concat(key, "_sand")] = facets[key]);
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken,
        call = CancelToken.source(),
        config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    httpsAgent: new https__WEBPACK_IMPORTED_MODULE_1___default.a.Agent({
      keepAlive: true
    }),
    url: findRootUrl,
    timeout: timeout,
    params: { ...fixedFacetParams,
      ...facetParams,
      collection: collection,
      num_ranks: numRank,
      query: query,
      sort: sortBy ? "".concat('desc' === sortDirection ? 'd' : '').concat(sortBy) : null,
      start_rank: startRank
    }
  };
  return [Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["axiosRequest"])(config), call];
}
/**
 * Funnelback suggestion query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} partialQuery The string to make suggestions for.
 * @return {Promise} - A promise of an array of suggestion strings.
 */

function suggest(collection, partialQuery) {
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken,
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
  return [Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["axiosRequest"])(config), call];
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
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["axiosRequest"])(config);
}

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
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




const ie = Object(_util__WEBPACK_IMPORTED_MODULE_1__["detectIE"])();
class Carousel {
  constructor(elem, options) {
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


  numIndicator(index, e) {
    e.querySelector('.swiper-indicator__active-slider').innerText = index + 1;
  }
  /**
   *
   * Set active slider
   *
   * @param {number} carousel index - current carousel index
   * @param {HTMLelement} sliders html - pass HTML containing the sliders
   */


  activeSlider(index, sliders) {
    let a = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toArray"])(sliders.querySelectorAll('.swiper-slide'));
    a.forEach(e => {
      e.classList.remove('active');
      e.querySelectorAll('a').forEach(a => a.tabIndex = -1); // disable focus on non active slider with hyperlinks

      e.setAttribute('aria-hidden', 'true');
    });
    a[index].classList.toggle('active');
    a[index].querySelectorAll('a').forEach(a => a.tabIndex = 0);
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


  toogleNextBtn(index, length, e) {
    let nextBtn = this.checkEventType(e);

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


  tooglePrevBtn(index, length, e) {
    let prevBtn = this.checkEventType(e);

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


  moveSlide(e, t) {
    const sl = this.checkEventType(e).querySelector('.swiper-wrapper');

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
      let sliderWidthIndex = this.totalSliderWidth(e) / sl.children.length * this.i,
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


  next(e) {
    e.preventDefault();
    this.moveSlide(e, true);
  }
  /**
   *
   * Prvious slide
   *
   * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
   */


  previous(e) {
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


  unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }
  /**
   *
   * Start of slider move Set mousedown value to global and toggle smooth class for css transition on mouse down or touch start
   *
   * @param {event} user event - user action either mosuedown or touch start
   */


  lock(e) {
    this.x0 = this.unify(e).clientX; //set mousedown clientX value

    e.target.classList.toggle('smooth', !(this.locked = true));
  }
  /**
   *
   * Moving the slider - moving the slider trigger by mouse move or touch move
   *
   * @param {event} user event - mousetouch or touchmove
   */


  drag(e) {
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


  move(e) {
    if (this.locked) {
      let dx = this.unify(e).clientX - this.x0,
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


  stopDrag(e) {
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


  checkEventType(e) {
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


  totalSliderWidth(e) {
    const sliders = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toArray"])(this.checkEventType(e).querySelectorAll('.swiper-slide'));
    let totalWidth = 0;
    sliders.forEach(s => {
      let style = window.getComputedStyle ? getComputedStyle(s, null) : s.currentStyle;
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


  animateSlider(e, lr) {
    let sliderWidth = this.totalSliderWidth(e) / e.target.children.length;
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
   *                      <img src="https://web2020.city.ac.uk/documentation/patterns/carousel/_DP57645_1920x1080.jpg" alt="Image">
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


  init() {
    const lazyImages = [].slice.call(this.elem.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      let lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (i === 0) {
            entry.target.firstElementChild.classList.remove('lazy');
          }

          if (entry.isIntersecting) {
            let lazyImage = entry.target.parentNode.nextSibling.firstElementChild.firstElementChild;
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
    }

    const _C = this.elem.querySelector('.swiper-wrapper'),
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

}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util */ "./src/util.js");
/* harmony import */ var _carousel_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel-constructor */ "./src/patterns/image-carousel/carousel-constructor.js");





const keyCodeTab = 9,
      keyCodeEnter = 13;
class Defaultcarousel extends _carousel_constructor__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(elem, options) {
    super(elem, options);
  }

  inital() {
    super.init();
    let self = this;
    let thumbnails = [].slice.call(this.elem.querySelector('.galleria-thumbnails-list').querySelectorAll('li')); //edge work around intersectionObserver not triggering using isIntersecting

    let options = {
      rootMargin: '0px',
      threshold: [0, 1]
    },
        edge = document.documentElement.classList.contains('edge');
    let edgeThumbnailsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio === 1) {
          entry.target.setAttribute('aria-hidden', 'false');
        } else {
          entry.target.setAttribute('aria-hidden', 'true');
        }
      });
    }, options);
    let thumbnailsObserver = new IntersectionObserver(function (entries) {
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

      if (_util__WEBPACK_IMPORTED_MODULE_1__["checkIntersectionObserver"] && !edge) {
        thumbnailsObserver.observe(e);
      } else if (_util__WEBPACK_IMPORTED_MODULE_1__["checkIntersectionObserver"] && edge) {
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


  onClickThunbnail(thumbnail, thumbindex) {
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


  activeThumbnail(thumbindex, e) {
    let thumbnail = this.checkEventType(e),
        currentThumbnailSpan = document.createElement('span'),
        listThumbnail = thumbnail.querySelector('.galleria-thumbnails-list').getElementsByTagName('li');
    currentThumbnailSpan.innerText = 'Current thumbnail';
    currentThumbnailSpan.className = 'galleria-thumbnail__current-thumbnail';

    for (const li of listThumbnail) {
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


  translateThumbnails(thumbindex, e) {
    let thumbnailLi = this.checkEventType(e).querySelector('.galleria-thumbnails-list'),
        thumbnailLength = thumbnailLi.getElementsByTagName('li').length,
        translate = 0;

    if (thumbindex !== 0 && thumbnailLength > 4) {
      let galleria = thumbnailLi.getElementsByTagName('li');
      galleria.forEach((e, i) => {
        if (i < thumbindex - 1) {
          let style = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle;
          let width = parseInt(style.width) + parseInt(style.marginRight);
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

}

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



const className = 'carousel-gallery';
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
  let dc = new _default_carousel_constructor__WEBPACK_IMPORTED_MODULE_0__["default"](elem, {
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



const className = 'swiper-container';

function init(elem) {
  const c = new _carousel_constructor__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
  c.init();
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
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);





/**
 * Key information box
 *
 * @module patterns/key-info-box/key-info-box
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */

const className = 'key-information--lifelong-learning';
let listings = document.querySelector('.key-information--lifelong-learning > ul'),
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

zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.setup(defaultDuration, edgeOffset); // Add '-1' tabindex to all listing dates. Will give screenreaders context

function dateTabIndex() {
  for (const listingDate of listingDates) {
    listingDate.setAttribute('tabindex', '-1');
  }
} // Visible listings: needed to decide if more content still to be loaded.


function calculateVisibleListings() {
  listingsVisible = [];
  Array.from(listings.children).forEach(elem => {
    if (!elem.classList.contains('hide')) {
      listingsVisible.push(elem);
    }
  });
} // Initial listings display


function defaultListingsDisplay() {
  const listElements = Array.from(listings.children);
  listElements.forEach((elem, i) => {
    i > batchQuantity - 1 ? elem.classList.add('hide') : elem.style.display = 'grid';
  });
}
/**
 * Launches Key Info slider pattern. Pass in how many listings should display per batch,
 * i.e. each time user selects 'Load more'.
 *  */


function launchKeyInfo(batchQuantity) {
  const digit = document.querySelector('.key-information--lifelong-learning__current__digit');
  let counter = 0; // Mobile: Show listing entry based on navigation button clicks

  function listingDisplay() {
    Array.from(listings.children).forEach((listing, i) => {
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
      contentToggles.forEach(contentToggle => {
        contentToggle.addEventListener('click', e => {
          // This will increase with each 'Load more' click, so visible listings
          // must be captured before any further listings are made visible
          let preExpandListingsVisible = listingsVisible.length;
          e.preventDefault();

          if (preExpandListingsVisible < Array.from(listings.children).length) {
            Array.from(listings.children).forEach((elem, i) => {
              let targetListing = document.querySelector("[data-id='listing-".concat(preExpandListingsVisible, "']"));
              let listingsVisibleLength = parseInt(listingsVisible.length) + batchQuantity;
              const listingsLength = Array.from(listings.children).length;
              let remainingItems = parseInt(listingsLength - listingsVisibleLength); // Zen scroll to first listing of newly visible listings and focus on date

              zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(targetListing, 200);
              targetListing.focus(); // let targetListingDate = targetListing.querySelectorAll(
              //     '.key-info__date'
              // );
              // Final batch of listings, zen scroll to 'load more' button and offset

              if (remainingItems <= 0) {
                zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(contentToggle, 200);
                contentToggle.style.display = 'none';
              } // targetListingDate[0].focus();
              // Bring in newly visible listings in two phases to allow for opacity transition


              if (i < preExpandListingsVisible + batchQuantity) {
                const promise = new Promise(resolve => {
                  resolve(elem.style.display = 'grid');
                });
                promise.then(() => {
                  elem.classList.remove('hide');
                }); // Calculating visible listings must run here after display properties are updated

                promise.then(() => {
                  calculateVisibleListings();
                });
              }
            });
          }
        }, false);
      });
    } else {
      contentToggles.forEach(elem => {
        elem.style.display = 'none';
      });
    } // Mobile: one listing visible at a time

  } else if (browserWidth < 768 && Array.from(listings.children).length > 1) {
    Array.from(listings.children).forEach((listing, i) => {
      // Capture listing height and set to data attribute
      listing.style.display = 'block';
      listing.dataset.height = listing.offsetHeight;
      listing.style.display = 'none'; // On load, set mobile navigation buttons at correct height
      // counter === 0 && i === 0 ? navBtnPosition() : null;

      i > 0 ? listing.style.display = 'none' : listing.style.display = 'block';
    });
    Array.from(contentSliders).forEach(contentSlider => {
      contentSlider.removeAttribute('hidden');
    });
    navBtnState();
    prevBtn.addEventListener('click', () => {
      counter = counter - 1;
      navBtnState(); // navBtnPosition();

      listingDisplay();
      digit.innerText = counter + 1;
    });
    nextBtn.addEventListener('click', () => {
      counter = counter + 1;
      navBtnState(); // navBtnPosition();

      listingDisplay();
      digit.innerText = counter + 1;
    });
  } else if (browserWidth < 768 && Array.from(listings.children).length === 1) {
    Array.from(listings.children).forEach((listing, i) => {
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
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Link Finder
 *
 * @module patterns/link-finder/link-finder
 * @author Web Development
 * @copyright City, University of London 2019
 */

const className = 'link-finder';
/**
 * Function that prepends icon to anchor paramater
 *
 * @param {HTMLElement} anchor - HTML element to prepend icon to
 * @param {string} className - class name to specify FA icon
 */

function prependIcon(anchor, className) {
  let node = document.createElement('span');
  node.className = 'fas ' + className + '  link-decorator';
  node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].hidden, true);
  anchor.parentNode.insertBefore(node, anchor);
}
/**
 * Checks if anchor has to have external URL icon
 *
 * @param {HTMLElement} anchor - an anchor HTML element
 */


function findExternalLink(anchor) {
  if (anchor.origin !== window.location.origin && anchor.querySelectorAll('img').length < 1 && anchor.querySelectorAll('.fa-external-link').length < 1 && !anchor.parentElement.className.includes('cta-like-anchor') && anchor.className !== 'social-icon' && !anchor.className.includes('cta') && !anchor.parentElement.className.includes('cta-block') && anchor.href.indexOf('mailto:') !== 0 && anchor.href.indexOf('tel:') !== 0 && anchor.origin) {
    let node = document.createElement('span');
    node.className = 'far fa-external-link inline-external-link';
    node.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].label, '(external link)');
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
  const fileTypes = {
    pdf: 'pdf',
    docx: 'word',
    doc: 'word',
    xlsx: 'excel',
    xls: 'excel'
  };

  for (let key in fileTypes) {
    if (anchor.href.indexOf('.' + key) !== -1) {
      prependIcon(anchor, 'fa-file-' + fileTypes[key]);
      let anchorText = anchor.textContent;
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
  const anchors = e.querySelectorAll('a');
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
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_2__);




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
    if (item[0] === targetItem) {
      item[1].focus();
      zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(item[1]);
    } else if (visibleItems === itemsIncrement) {
      if (item[0] === 0) {
        item[1].focus();
        zenscroll__WEBPACK_IMPORTED_MODULE_2___default.a.to(item[1]);
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
    let activeItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_1__["numberFromString"])(hashedUrlParts[1]));
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
      let currentItem = parseInt(Object(_util__WEBPACK_IMPORTED_MODULE_1__["numberFromString"])(updatedUrlParts[1]));
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

/***/ "./src/patterns/menu/menu-formatters.js":
/*!**********************************************!*\
  !*** ./src/patterns/menu/menu-formatters.js ***!
  \**********************************************/
/*! exports provided: prepareNavigation, listenForNavigationToggles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareNavigation", function() { return prepareNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenForNavigationToggles", function() { return listenForNavigationToggles; });
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Generic navigation functions for menu and secondary navigation.
 *
 * @module menu-formatters
 * @author Web Development
 * @copyright City, University of London 2020
 */



const oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_1__["reduceMotion"])() ? 0 : oneSecond;
/**
 * Set sub-menu button attributes for the open/closed state.
 *
 * @param {HTMLButtonElement} button - The button to decorate.
 * @param {boolean} open - Should it be open?
 * @param {string} buttonTextClassName - The class of the text span.
 */

function setNavigationItemButtonDetails(button, open, rootClass) {
  const navigationItem = button.closest('li'),
        sectionText = navigationItem.dataset.title + ' section',
        buttonClassName = rootClass + '__button',
        buttonTextClassName = buttonClassName + '__text',
        textSpan = button.querySelector(".".concat(buttonTextClassName)),
        text = open ? 'Close ' : 'Open ';
  open && Array.from(button.closest('ul').querySelectorAll('button')).forEach(button => setNavigationItemButtonDetails(button, false, rootClass));
  navigationItem.dataset.open = open;
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
/**
 * Toggle a sub-navigation open or closed.
 */


function toggleSubNavigation(button, rootClass) {
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded);
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["toBool"])(expanded) ? setNavigationItemButtonDetails(button, false, rootClass) : setNavigationItemButtonDetails(button, true, rootClass);
  zenscroll__WEBPACK_IMPORTED_MODULE_0___default.a.intoView(button.closest('li'), scrollDuration);
}
/**
 * Decorate sub-navigation element with the appropriate attributes.
 *
 * @param {HTMLLIElement} navigationItem - The list item representing button navigation item.
 * @param {string} rootClass - The class of the navigation element.
 */


function prepareSubNavigation(navigationItem, rootClass) {
  const navigationItemBtn = document.createElement('button'),
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
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hidden, 'true');
  iconSpan.className = "".concat(buttonIconClassName, " fal fa-fw");
  textSpan.className = "".concat(buttonTextClassName);
  Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(navigationItemBtn, [iconSpan, textSpan]);
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
  const controlsClassName = rootClass + '__controls';
  Array.from(navigation.querySelectorAll('li')).forEach(navigationItem => {
    const link = navigationItem.querySelector('a'),
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
  Array.from(subNavigation.querySelectorAll('button')).forEach(button => button.addEventListener('click', () => toggleSubNavigation(button, rootClass), true));
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
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _menu_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-formatters */ "./src/patterns/menu/menu-formatters.js");


/**
 * Global menu
 *
 * @module patterns/menu/menu
 * @author Web Development
 * @copyright City, University of London 2018-2020
 */




const className = 'menu',
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
  const setMenu = open => {
    const buttonText = button.querySelector(".".concat(buttonTextClassName));
    menu.dataset.open = open;
    buttonText.innerText = open ? 'Close' : 'Menu';
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, open);
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
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded);

  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["toBool"])(expanded)) {
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
  const buttonWrapper = document.createElement('div'),
        menu = label.closest(".".concat(className));
  button.className = 'menu__display__button__button';
  buttonWrapper.className = 'menu__display__button__button__wrapper';
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hasPopup, 'menu');
  Array.from(label.childNodes).forEach(child => buttonWrapper.appendChild(child));
  button.appendChild(buttonWrapper);
  const trap = focus_trap__WEBPACK_IMPORTED_MODULE_0___default()(menu, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: () => {
      const open = Array.from(menu.querySelectorAll([".".concat(contentHeaderClassName, " > span"), ".".concat(currentClassName, " > .").concat(controlsClassName, " > a"), ".".concat(hierarchyClassName, " > .").concat(controlsClassName, " > a"), ".".concat(level1ClassName, " > ul > li:first-of-type > .").concat(controlsClassName, " > a"), ".".concat(currentPage, " > a")].join(','))).filter(elem => Object(_util__WEBPACK_IMPORTED_MODULE_1__["isVisible"])(elem));
      return open[open.length - 1];
    },
    onDeactivate: () => toggleMenu(button, setMenu, trap, veil),
    clickOutsideDeactivates: true
  });
  button.addEventListener('click', () => toggleMenu(button, setMenu, trap, veil), true);
}
/**
 * Transform the Matrix-generated menu lists into an interactive menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function launchMenu(menu) {
  // During testing only: remove 'under construction' indicators globally
  // menu.innerHTML = menu.innerHTML.replace(/\(\( /g, '').replace(/ \)\)/g, '');
  const label = menu.querySelector(".".concat(buttonDisplayClassName)),
        button = document.createElement('button'),
        veil = document.createElement('div'),
        setMenu = menuSetter(menu, button);
  veil.className = veilClassName;
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  createMenuToggle(label, button, setMenu, veil);
  label.appendChild(button);
  setMenu(false);
  Object(_menu_formatters__WEBPACK_IMPORTED_MODULE_3__["prepareNavigation"])(menu.querySelector(".".concat(level1ClassName)), className);
  Object(_menu_formatters__WEBPACK_IMPORTED_MODULE_3__["listenForNavigationToggles"])(menu.querySelector(".".concat(level1ClassName)), className);
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
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_3__);


/**
 * modal
 *
 * @module patterns/pagination/pagination
 * @author Web Development
 * @copyright City, University of London 2018
 *
 */




const className = 'modal',
      bodyClassName = className + '__body',
      keyCodeEscape = 27,
      oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_1__["reduceMotion"])() ? 0 : oneSecond,
      scrollTo = true;
let trap;
/**
 * launch function
 *
 * @param {HTMLElement} modal - an HTML element with the modal class.
 */

function launchModal(modal) {
  let dialogArray = [];
  const dialogTopic = modal.getAttribute('data-topic');
  Array.from(modal.getElementsByTagName('li')).forEach((list, i) => {
    const wrapper = document.createElement('div'),
          listButton = document.createElement('button'),
          listBody = Array.from(list.childNodes),
          listHeader = list.firstElementChild,
          customHeader = list.getAttribute('data-header'),
          format = list.getAttribute('data-keepformat'),
          header = document.createElement('div');
    let title,
        keepFormat = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toBool"])(format),
        shortName = list.getAttribute('data-shortname');
    listButton.classList.add('modal__button');
    listButton.setAttribute('type', 'button');
    listButton.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, 'open dialog');
    list.appendChild(wrapper);
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["appendAll"])(wrapper, listBody);
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
      listButton.textContent = listHeader.textContent;
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
      shortname: shortName
    });
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
  const slider = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toBool"])(parent.getAttribute('data-slider'));
  const closeBtn = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
    label: 'class',
    val: 'dialog__close fas fa-times'
  }, {
    label: 'aria-label',
    val: 'Close modal'
  }]);
  const dialog = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog'
  }, {
    label: 'data-position',
    val: "".concat(position)
  }]);
  const bodyWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__content'
  }]);
  const wrapperWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__inner'
  }, {
    label: 'role',
    val: 'role'
  }]);
  const dialogStrapline = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('p', [{
    label: 'class',
    val: 'dialog__strapline'
  }]);
  const dialogTitle = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('p', [{
    label: 'class',
    val: 'dialog__heading'
  }]);
  const dialogBody = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__body-copy'
  }]);
  dialogTitle.innerText = dialogArray[position].title;
  dialogBody.innerHTML = dialogArray[position].body;
  dialogStrapline.innerHTML = dialogArray[position].topic;
  bodyWrapper.appendChild(closeBtn);
  bodyWrapper.appendChild(dialogStrapline);
  bodyWrapper.appendChild(dialogTitle);
  bodyWrapper.appendChild(dialogBody);
  wrapperWrapper.appendChild(bodyWrapper);
  dialog.appendChild(wrapperWrapper);
  const main = document.querySelector('main');
  main.appendChild(dialog);
  dialog.addEventListener('keydown', e => {
    if (e.keyCode === keyCodeEscape) {
      e.preventDefault();
      closeDialog(dialog, parent);
    }
  });
  dialog.addEventListener('click', e => {
    if (e.target.classList.contains('dialog')) {
      e.preventDefault();
      e.stopPropagation();
      closeDialog(dialog, parent);
    }
  });
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    closeDialog(dialog, parent);
  });
  trapFocus(dialog);
  document.body.classList.add('dialog-in', 'no-scroll');

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
  let position = parseInt(dialog.getAttribute('data-position'));
  const buttonWrapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'dialog__slider-control'
  }]);
  let buttonPrev = controlButton(dialogArray, position, 'left');
  let buttonNext = controlButton(dialogArray, position, 'right');
  buttonNext.addEventListener('click', e => {
    e.preventDefault();
    let pos = buttonNext.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonPrev.addEventListener('click', e => {
    e.preventDefault();
    let pos = buttonPrev.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonWrapper.appendChild(buttonPrev);
  buttonWrapper.appendChild(buttonNext);
  const dialogContent = dialog.querySelector('.dialog__content');
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
  const button = document.createElement('button');
  const buttonLabel = document.createElement('span');
  buttonLabel.classList.add('dialog__underline-transition');
  let nextState = checkNextState(dialogArray, position, direction);
  button.setAttribute('data-nextstate', "".concat(nextState));

  if (dialogArray[nextState].shortname) {
    buttonLabel.innerText = dialogArray[nextState].shortname;
  } else {
    buttonLabel.innerText = dialogArray[nextState].title;
  }

  const buttonIcon = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
    label: 'class',
    val: "icon far fa-long-arrow-".concat(direction)
  }]);

  if (direction === 'left') {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, 'previous item');
  } else {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, 'next item');
  }

  const buttonLabelWrapper = document.createElement('div');
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
  const pos = parseInt("".concat(position));
  let nextState;

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
  const parent = dialog.parentNode;
  parent.removeChild(dialog);
  document.body.classList.remove('dialog-in', 'no-scroll');
  trap.deactivate();

  if (scrollTo && !Object(_util__WEBPACK_IMPORTED_MODULE_1__["verticallyInWindow"])(modal)) {
    zenscroll__WEBPACK_IMPORTED_MODULE_3___default.a.to(modal, scrollDuration);
  }
}

function trapFocus(modal) {
  let modalInner = modal.querySelector('.dialog__inner');
  trap = focus_trap__WEBPACK_IMPORTED_MODULE_0___default()(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchModal,
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Secondary navigation
 *
 * @module patterns/navigation/navigation-primary
 * @author Web Development
 * @copyright City, University of London 2019
 */


const className = 'navigation',
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
      keyCodeTab = 9,
      keyCodeEscape = 27;
/**
 * Return a function to toggle everything closed.
 *
 * @param {HTMLElement} navigation - The primary navigation element.
 * @param {HTMLElement} veil - The veiling element.
 * @returns {function} - A function for toggling all the menus closed.
 */

function createCloseAll(navigation, veil) {
  return () => {
    const buttons = Array.from(navigation.querySelectorAll('.navigation--primary__level1 > .navigation__button'));
    buttons.forEach(button => {
      button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded, 'false');
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
  return () => {
    const open = !Object(_util__WEBPACK_IMPORTED_MODULE_0__["toBool"])(button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded));
    closeAll();

    if (open) {
      button.closest(".".concat(classNameSpecific)).dataset.open = 'true';
      veil.dataset.on = 'true';
      button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded, open);
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
  const topLevels = Array.from(navigation.querySelectorAll(".".concat(topLevelClassName)));
  topLevels.forEach(el => {
    const listItem = el.parentNode,
          button = document.createElement('button'),
          buttonDiv = document.createElement('div'),
          srOpenCloseSpan = document.createElement('span'),
          srNavigationSpan = document.createElement('span'),
          toggleSection = createSectionToggle(button, closeAll, veil); // LIs have tabindex so they're accessible with no JS, remove it

    el.removeAttribute('tabindex');
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded, 'false');
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].owns, el.nextElementSibling.id);
    button.setAttribute('type', 'button');
    button.id = el.nextElementSibling.id + '-button';
    button.className = buttonClassName;
    srOpenCloseSpan.className = openCloseTextClassName;
    srOpenCloseSpan.appendChild(document.createTextNode(openText));
    srNavigationSpan.className = navigationTextClassName;
    srNavigationSpan.appendChild(document.createTextNode(navigationText));
    button.addEventListener('click', () => toggleSection(), true);
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendAll"])(buttonDiv, [srOpenCloseSpan, document.createTextNode(' '), el, document.createTextNode(' '), srNavigationSpan]);
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
  const firstButton = navigation.querySelector('.navigation--primary__level1:first-of-type > .navigation__button'),
        restButtons = Array.from(navigation.querySelectorAll('.navigation--primary__level1:not(:first-of-type) > .navigation__button')); // If we tab out of the open, first menu into the other header content, close the menu.

  firstButton.addEventListener('keydown', e => {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["toBool"])(firstButton.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded)) && keyCodeTab === e.keyCode && e.shiftKey) {
      closeAll();
    }
  });
  restButtons.forEach(thisSectionButton => {
    const previousSection = thisSectionButton.parentElement.previousElementSibling,
          previousSectionButton = previousSection.querySelector('button'),
          lastNavigationAnchor = previousSection.querySelector('.navigation__level2 > li:last-of-type > a') ? previousSection.querySelector('.navigation__level2 > li:last-of-type > a') : previousSection.querySelector('.navigation__level2 > li:last-of-type').previousElementSibling.querySelector('a'),
          togglePreviousSection = createSectionToggle(previousSectionButton, closeAll, veil);
    thisSectionButton.addEventListener('keydown', e => {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["toBool"])(thisSectionButton.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded)) && keyCodeTab === e.keyCode && e.shiftKey) {
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
  const closeButton = navigation.querySelector('.navigation--primary__level1:last-of-type .wrapper--navigation--primary__menu__close button'),
        restSectionsCloseButtons = Array.from(navigation.querySelectorAll('.navigation--primary__level1:not(:last-of-type) .wrapper--navigation--primary__menu__close button')); // If we tab out of the open, first menu into the other header content, close the menu.

  closeButton.addEventListener('keydown', e => {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["toBool"])(closeButton.closest('.navigation--primary__level1').querySelector('button').getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].expanded)) && keyCodeTab === e.keyCode && !e.shiftKey) {
      closeAll();
    }
  });
  restSectionsCloseButtons.forEach(closeButton => {
    const nextSectionButton = closeButton.closest('.navigation--primary__level1').nextElementSibling.querySelector('button'),
          toggleNextSection = createSectionToggle(nextSectionButton, closeAll, veil);
    closeButton.addEventListener('keydown', e => {
      if (keyCodeTab === e.keyCode && !e.shiftKey) {
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
  Array.from(navigation.querySelectorAll('.navigation__level2 li')).forEach(navigationItem => {
    const link = navigationItem.querySelector('a'),
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
  Array.from(navigation.querySelectorAll(".".concat(headerClassName))).forEach(header => {
    const link = header.querySelector('a'),
          textWrapper = document.createElement('span');

    if (!link) {
      const currentPageWrapper = document.createElement('span'),
            linkText = header.firstChild.wholeText.trim() + ' overview';
      textWrapper.appendChild(document.createTextNode(linkText));
      currentPageWrapper.appendChild(textWrapper);
      header.replaceChild(currentPageWrapper, header.firstChild);
    } else {
      textWrapper.innerText = link.innerText + ' overview';
      link.replaceChild(textWrapper, link.firstChild);
    }
  });
}
/**
 * Add close buttons to menu sections.
 *
 * @param {HTMLElement} navigation
 */


function addCloseButtons(navigation, closeAll) {
  Array.from(navigation.querySelectorAll('.navigation--primary__menu__content')).forEach(menu => {
    const header = menu.querySelector(".".concat(headerClassName)),
          closeButtonWrapper = document.createElement('div'),
          closeButton = document.createElement('button'),
          closeButtonDiv = document.createElement('div'),
          closeButtonText = document.createElement('span'),
          closeButtonIcon = document.createElement('span'),
          text = 'Close ' + header.innerText.trim() + ' menu';
    closeButtonText.appendChild(document.createTextNode(text));
    closeButtonText.className = 'navigation--primary__menu__close__text';
    closeButtonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].hidden, 'true');
    closeButtonIcon.className = 'fas fa-fw fa-times navigation--primary__menu__close__icon';
    closeButtonWrapper.className = 'wrapper--navigation--primary__menu__close';
    closeButton.className = 'navigation--primary__menu__close';
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendAll"])(closeButtonDiv, [closeButtonText, closeButtonIcon]);
    closeButton.appendChild(closeButtonDiv);
    closeButton.setAttribute('type', 'button');
    closeButton.title = text;
    closeButton.addEventListener('click', () => closeAll(), true);
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
  // navigation.innerHTML = navigation.innerHTML
  //     .replace(/\(\( /g, '')
  //     .replace(/ \)\)/g, '');
  const veil = document.createElement('div'),
        closeAll = createCloseAll(navigation, veil);
  veil.className = veilClassName;
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  prepareTopLevel(navigation, veil, closeAll);
  prepareLowerLevels(navigation, veil);
  prepareHeaders(navigation);
  addCloseButtons(navigation, closeAll); // Allow tabbing from one section to another,
  // and close when tabbing out of the navigation

  setupTabPrevious(navigation, closeAll, veil);
  setupTabNext(navigation, closeAll, veil); // If the navigation is open, close on escape.

  navigation.addEventListener('keydown', e => {
    if (navigation.querySelector(".".concat(buttonClassName, "[aria-expanded='true']")) && keyCodeEscape === e.keyCode) {
      e.preventDefault();
      closeAll();
    }
  }, true); // If the navigation is open, close it on click outside it.

  window.addEventListener('click', e => {
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
 * @copyright City, University of London 2019
 */

const className = 'navigation',
      classNameSpecific = className + '--secondary';
/**
 * Transform the Matrix-generated navigation lists into an interactive menu.
 *
 * @param {HTMLElement} navigation - The secondary navigation element.
 */

function launchSecondaryNavigation(navigation) {
  // During testing only: remove 'under construction' indicators globally
  // navigation.innerHTML = navigation.innerHTML
  //     .replace(/\(\( /g, '')
  //     .replace(/ \)\)/g, '');
  Object(_menu_menu_formatters__WEBPACK_IMPORTED_MODULE_0__["prepareNavigation"])(navigation, className);
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
/* harmony import */ var _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination/pagination.js */ "./src/patterns/pagination/pagination.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes.js */ "./src/aria-attributes.js");


/**
 * Paginated list
 *
 * @module patterns/paginated-list/paginated-list
 * @author Web Development
 * @copyright City, University of London 2018
 */



const className = 'paginated-list',
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
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(list, className, false);
    return;
  }

  const pageSizeSetting = Number.parseInt(list.dataset.pagesize) ? Number.parseInt(list.dataset.pagesize) : defaultPage,
        listItems = Array.from(list.children),
        pageSize = setPageSize(pageSizeSetting);

  if (listItems.length <= pageSize) {
    /**
     * list too short, doesn’t need pagination.
     * remove the classname to avoid conflicting
     * styles then bail
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(list, className, false);
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
        newList.setAttribute('reversed', 'true');
      }
    }
    /* move this page of items into the page and inner list */


    pageItems.forEach(listItem => newList.appendChild(listItem));
    page.appendChild(newList);
    page.className = _pagination_pagination_js__WEBPACK_IMPORTED_MODULE_0__["pageClassName"];
    page.setAttribute('tabindex', -1);
    page.setAttribute(_aria_attributes_js__WEBPACK_IMPORTED_MODULE_2__["default"].label, "Page ".concat(pageNumber + 1));
    pages.push(page);
    /* try to fetch another page */

    ++pageNumber;
    pageItems = listItems.slice(pageSize * pageNumber, pageSize * pageNumber + pageSize);
  }
  /* add the pages to the original list in bulk */


  pages.forEach(page => list.appendChild(page));
  Object(_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_0__["addPagination"])(list, listItems.length);
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
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Pagination
 *
 * @module patterns/pagination/pagination
 * @author Web Development
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
      oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_1__["reduceMotion"])() ? 0 : oneSecond,
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
  const toggleNextPrev = pageNumber => {
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, selected);
  selected ? button.setAttribute('disabled', 'true') : button.removeAttribute('disabled');
  selected ? button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].current, 'page') : button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].current);
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
    scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_0___default.a.to(page, scrollDuration);
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
    const currentPage = Number.parseInt(controls.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, "=\"true\"]")).dataset.page);
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, "Open page ".concat(pageNumber));

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
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(elem, className, false);
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

    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === pages.length) {
      pageButtons.push(ellipsisLast);
    }

    pageButtons.push(pageButton);

    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === 1) {
      pageButtons.push(ellipsisFirst);
    }
  }

  pageButtons.push(next);
  wrapper.className = wrapperClassName;
  controls.className = controlsClassName;
  controls.dataset.pagecount = pages.length;
  controls.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, 'Pagination');
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

/***/ "./src/patterns/show-more/show-more.js":
/*!*********************************************!*\
  !*** ./src/patterns/show-more/show-more.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Show-more
 *
 * @module patterns/show-more/show-more
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */


const className = 'show-more';
/**
 * innitial function on page load; it hides text container of 'show-more' DOM element, and calles
 * createShowMoreButton(element) function to create a control button
 *
 * @param {HTMLElement} element - HTML parent element with classname 'show-more'
 */

function showMore(element) {
  let showMoreTextElements = document.querySelectorAll('.show-more__text');
  showMoreTextElements.forEach(element => {
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
  let parent = e.currentTarget.parentNode.parentNode.parentNode;
  let showMoreText = parent.querySelector('.show-more__text');
  let showMoreAnchorLinkText = parent.querySelector('.show-more__link-text');
  let hiddenElement = Object(_util__WEBPACK_IMPORTED_MODULE_1__["toBool"])(showMoreText.dataset.hidden);

  if (hiddenElement) {
    e.currentTarget.setAttribute('data-open', 'true');
    showMoreText.setAttribute('data-hidden', 'false');
    showMoreAnchorLinkText.textContent = 'Show less';
    showMoreText.style.maxHeight = '100%';
    let headingElement = parent.querySelector('h2');
    headingElement.scrollIntoView();
  } else {
    e.currentTarget.setAttribute('data-open', 'false');
    showMoreText.setAttribute('data-hidden', 'true');
    showMoreAnchorLinkText.textContent = 'Show more';
    showMoreText.style.maxHeight = null;
    let headingElement = parent.querySelector('h2');
    headingElement.scrollIntoView();
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
  let showMoreButtonDiv = document.createElement('div');
  showMoreButtonDiv.classList.add('show-more__button__container');
  let showMoreButton = document.createElement('span');
  showMoreButton.classList.add('show-more__button');
  showMoreButtonDiv.appendChild(showMoreButton);
  let showMoreAnchor = document.createElement('a');
  showMoreAnchor.setAttribute('href', '');
  showMoreAnchor.addEventListener('click', handleShowMoreClick);
  showMoreButton.appendChild(showMoreAnchor);
  element.appendChild(showMoreButtonDiv);
  let plusIcon = document.createElement('span');
  plusIcon.classList.add('icon');
  plusIcon.classList.add('fal');
  plusIcon.classList.add('fa-plus-circle');
  plusIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].hidden, true);
  let minusIcon = document.createElement('span');
  minusIcon.classList.add('icon');
  minusIcon.classList.add('fal');
  minusIcon.classList.add('fa-minus-circle');
  minusIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].hidden, true);
  let showMoreText = document.createElement('span');
  showMoreText.classList.add('show-more__link-text');
  showMoreText.appendChild(document.createTextNode('Show more'));
  let dataTitle = element.getAttribute('data-title');
  let srTextElement = document.createElement('span');
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

/***/ "./src/patterns/slider-responsive/slider-responsive.js":
/*!*************************************************************!*\
  !*** ./src/patterns/slider-responsive/slider-responsive.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Responsive Slider
 *
 * @module patterns/slider-responsive/slider-responsive
 * @author Mark Skinsley <mark.skinsley@city.ac.uk>
 * @copyright City, University of London 2019
 */

const className = 'slider-responsive';
let sliderChildren, sliderChildrenLength, updatedPosition;
/**
 * The number of items to display on each slide.
 *
 * @param {Number} sliderIncrement - Amount to increase/decrease visible listing index number.
 * @param {Number} currentPosition - Index number of first item to be visible.
 * @param {String} sliderDirection - Increase or decrease visible index number.
 * @param {Element} slider - The slider.
 */

function itemsDisplay(sliderIncrement, currentPosition, sliderDirection, slider) {
  // Show next, or previous, group of listings based on button's slider direction
  sliderDirection === 'forward' ? updatedPosition = parseInt(currentPosition + sliderIncrement) : updatedPosition = parseInt(currentPosition - sliderIncrement); // Prevent updated index position dropping below 1

  updatedPosition < 1 ? updatedPosition = 1 : null;
  let items = slider.querySelectorAll('li');
  /**
   * Loop through all slides, adding data-device attributes to items based on their
   * position within the list. The CSS will target what to show/hide at different breakpoints.
   * You will end up with HTML similar to the following:
   *
   * <li data-device="mobile"></li>
   * <li data-device="tablet"></li>
   * <li data-device="desktop"></li>
   */

  for (let i = 0; i < items.length; i++) {
    // Check item exists before adding data attribute to prevent errors
    items[i].getAttribute('data-device') ? items[i].removeAttribute('data-device') : null;
    items[updatedPosition - 1] ? items[updatedPosition - 1].setAttribute('data-device', 'mobile') : null;
    items[updatedPosition] ? items[updatedPosition].setAttribute('data-device', 'tablet') : null;
    items[updatedPosition + 1] ? items[updatedPosition + 1].setAttribute('data-device', 'desktop') : null;
  }
}
/**
 * Determines controller's behaviour, i.e. what slide the user is currently at within the
 * items list. Depending on the slider increment and the total number of items, the total
 * slides number adjusts too.
 *
 * For example, by default a grouping with 5 items will show as '1/2' on desktop, as this
 * viewport has an increment of 3 and there are effectively 2 slides at this point. However,
 * if user is at position 2, this will update to read '2/3'.
 *
 * This function updates all 3 controllers concurrently, updating their values indepenently.
 *
 * @param {Number} sliderIncrement - Amount to increase/decrease visible listing index number.
 * @param {Number} currentPosition - Index number of first item to be visible.
 * @param {String} sliderDirection - Increase or decrease visible index number.
 * @param {Element} slider - The slider.
 */


function progressUpdate(sliderIncrement, currentPosition, sliderDirection, slider) {
  let controlWraps = slider.querySelectorAll('.slider__controls__wrap');

  for (const controlWrap of controlWraps) {
    // Increase/decrease progrees indicator based on button click.
    if (sliderDirection === 'forward') {
      updatedPosition = currentPosition + sliderIncrement;
    }

    if (sliderDirection === 'back' && currentPosition - sliderIncrement >= 1) {
      updatedPosition = currentPosition - sliderIncrement;
    }

    if (sliderDirection === 'back' && currentPosition - sliderIncrement < 1) {
      updatedPosition = 1;
    }

    controlWrap.setAttribute('data-currentposition', updatedPosition);
  } // Update properties on all controls, not just the active control


  for (const control of controlWraps) {
    control.setAttribute('data-currentposition', updatedPosition);
    sliderIncrement = control.getAttribute('data-increment');
    let currentGroup = updatedPosition / sliderIncrement;
    let progressIndicator = control.querySelector('.slide__controls__progress__active');
    let totalSlides = parseInt(control.getAttribute('data-slides'));
    let totalSlidesDisplay = control.querySelector('.slide__controls__progress__total');
    /**
     * Check if there is a remainder when dividing the current listing position by it's controller's
     * increment. If there is, increase progress indicator and total slides by 1.
     */

    let firstInGroup = false;

    if ((updatedPosition - 1) % sliderIncrement === 0) {
      firstInGroup = true;
    } // If index position not first in group


    if (!firstInGroup) {
      // Increase group position by 1 to account for extra slide
      currentGroup += 1; // Not within final group of items and has a remainder -> add slide

      if (sliderChildrenLength - updatedPosition >= sliderIncrement && updatedPosition < sliderChildrenLength && (sliderChildrenLength - 1) % sliderIncrement !== 0) {
        totalSlides += 1;
        totalSlidesDisplay.textContent = totalSlides; // Not within final group of items and has no remainder -> don't add slide
      } else if (sliderChildrenLength - updatedPosition >= sliderIncrement && updatedPosition < sliderChildrenLength && (sliderChildrenLength - 1) % sliderIncrement === 0) {
        totalSlidesDisplay.textContent = totalSlides; // Within final group and only one slide in group -> add slide
      } else if (sliderChildrenLength - updatedPosition < sliderIncrement && totalSlides === 1) {
        totalSlides += 1;
        totalSlidesDisplay.textContent = totalSlides;
        currentGroup = totalSlides;
      } // First in group and ndex position is 1 -> don't add slide

    } else if (sliderChildrenLength === sliderIncrement && updatedPosition === 1) {
      totalSlidesDisplay.textContent = totalSlides;
    }
    /**
     * If increment increase exceeds total slides' length, limit the current
     * position value to the total slides' length. This can happen when
     * clicking on desktop viewport and reducing screen size to tablet or
     * mobile.
     */


    if (currentGroup > totalSlides) {
      control.setAttribute('data-currentposition', totalSlides);
    } else {
      progressIndicator.textContent = Math.ceil(currentGroup);
    } // Disable control buttons if at start or end of items in slider.


    if (Math.ceil(currentGroup) >= totalSlides) {
      control.querySelector('.slider__controls__buttons__next').setAttribute('disabled', true);
    } else {
      control.querySelector('.slider__controls__buttons__next').removeAttribute('disabled');
    }

    if (Math.ceil(currentGroup) <= 1) {
      control.querySelector('.slider__controls__buttons__prev').setAttribute('disabled', true);
    } else {
      control.querySelector('.slider__controls__buttons__prev').removeAttribute('disabled');
    }
  }
}
/**
 * Turn a group of list items into a responsive slider where, depending on viewport, the number of visible items
 * at any one time, varies. This pattern is designed to accommodate up to three items per slide.
 *
 * @param {HTMLElement} slider - The slider.
 */


function launchResponsiveSlider(slider) {
  // Slider items count
  sliderChildren = [...slider.children];
  sliderChildrenLength = sliderChildren.length; // Disable responsive slider if less than 2 items exists

  if (sliderChildrenLength < 2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(slider, className, false);
    return;
  }

  for (const sliderChild of sliderChildren.entries()) {
    sliderChild[1].classList.add('slider__slide');
    let items = slider.querySelectorAll('li');
    /**
     * Add data attribute to first three listings. This will control what is visible on load,
     * depending on device type.
     **/

    for (let i = 0; i <= 2 || i < sliderChildrenLength; i++) {
      items[0] ? items[0].setAttribute('data-device', 'mobile') : null;
      items[1] ? items[1].setAttribute('data-device', 'tablet') : null;
      items[2] ? items[2].setAttribute('data-device', 'desktop') : null;
    }
  }
  /**
   * Builds slider controls.
   * @param {String} deviceType
   * @param {Number} increment
   * @param {Number} currentPosition
   */


  function buildControls(deviceType, increment, currentPosition) {
    let slides = Math.ceil(sliderChildrenLength / increment);
    let sliderControlsWrap = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
      label: 'class',
      val: 'slider__controls__wrap'
    }, {
      label: 'data-device',
      val: deviceType
    }, {
      label: 'data-increment',
      val: increment
    }, {
      label: 'data-currentPosition',
      val: currentPosition
    }, {
      label: 'data-length',
      val: sliderChildrenLength
    }, {
      label: 'data-slides',
      val: slides
    }]);
    let sliderControls = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
      label: 'class',
      val: 'slider__controls'
    }]);
    let sliderProgress = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
      label: 'class',
      val: 'slider__controls__progress'
    }]);
    let sliderButtons = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
      label: 'class',
      val: 'slider__controls__buttons'
    }]); // Slider progress

    sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
      label: 'content',
      val: '1'
    }, {
      label: 'class',
      val: 'slide__controls__progress__active'
    }]));
    sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
      label: 'content',
      val: '/'
    }, {
      label: 'class',
      val: 'slide__controls__progress__separator'
    }])); // Total slides display

    sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
      label: 'content',
      val: Math.ceil(sliderChildrenLength / increment)
    }, {
      label: 'class',
      val: 'slide__controls__progress__total'
    }])); // Next / previous buttons

    sliderButtons.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
      label: 'aria-label',
      val: 'Previous item'
    }, {
      label: 'disabled',
      val: true
    }, {
      label: 'class',
      val: 'fas fa-arrow-left slider__controls__buttons__prev swiper-slider-arrow arrow-left--btn-prev'
    }])); // If slider children items is equal to slider increment, disable next button by default.

    if (sliderChildrenLength === increment) {
      sliderButtons.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
        label: 'aria-label',
        val: 'Next item'
      }, {
        label: 'class',
        val: 'fas fa-arrow-right slider__controls__buttons__next swiper-slider-arrow arrow-left--btn-next'
      }, {
        label: 'disabled',
        val: true
      }]));
    } else {
      sliderButtons.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
        label: 'aria-label',
        val: 'Next item'
      }, {
        label: 'class',
        val: 'fas fa-arrow-right slider__controls__buttons__next swiper-slider-arrow arrow-left--btn-next'
      }]));
    }

    sliderControlsWrap.appendChild(sliderControls).appendChild(sliderProgress);
    slider.appendChild(sliderControlsWrap);
    sliderControls.appendChild(sliderButtons);
    slider.querySelectorAll('.slider__controls__buttons__prev')[0].classList.add('slider__controls__buttons__disabled');
  } // Build each type of controller (mobile, tablet, desktop)


  sliderChildrenLength > 1 ? buildControls('mobile', 1, 1, false) : null;
  sliderChildrenLength >= 2 ? buildControls('tablet', 2, 1, false) : null;
  sliderChildrenLength >= 3 ? buildControls('desktop', 3, 1, false) : null;
  let controlWraps = slider.querySelectorAll('.slider__controls__wrap');
  /**
   * For each instance of the controls, update the current position data attribute when next previous/buttons
   * are selected. This means if the viewport changes, the correct value is passed to each control.
   */

  for (const controlWrap of controlWraps) {
    let nextBtn = controlWrap.querySelector('.slider__controls__buttons__next');
    /**
     * Slide content display. Isolate event listener to specific controller clicked. This is needed
     * to apply data attributes to the correct listings regardless of which controller is clicked.
     */

    nextBtn.addEventListener('click', () => {
      //Get data attribute values from specific controller clicked.
      let parentWrapper = nextBtn.closest('.slider__controls__wrap');
      let sliderIncrement = parseInt(parentWrapper.getAttribute('data-increment'));
      let currentPosition = parseInt(parentWrapper.getAttribute('data-currentposition'));
      let sliderDirection = 'forward';
      itemsDisplay(sliderIncrement, currentPosition, sliderDirection, slider);
    }); // Controller display. When user clicks, update each slider's progress indicator.

    controlWrap.querySelector('.slider__controls__buttons__next').addEventListener('click', () => {
      let currentPosition = parseInt(controlWrap.getAttribute('data-currentposition'));
      let sliderIncrement = parseInt(controlWrap.getAttribute('data-increment'));
      progressUpdate(sliderIncrement, currentPosition, 'forward', slider);
    });
    let prevBtn = controlWrap.querySelector('.slider__controls__buttons__prev');
    /**
     * Slide content display. Isolate event listener to specific controller clicked. This is needed
     * to apply data attributes to the correct listings regardless of which controller is clicked.
     */

    prevBtn.addEventListener('click', () => {
      //Get data attribute values from specific controller clicked.
      let parentWrapper = prevBtn.closest('.slider__controls__wrap');
      let sliderIncrement = parseInt(parentWrapper.getAttribute('data-increment'));
      let currentPosition = parseInt(parentWrapper.getAttribute('data-currentposition'));
      let sliderDirection = 'back';
      itemsDisplay(sliderIncrement, currentPosition, sliderDirection, slider);
    }); // Update all controllers' values accordingly

    controlWrap.querySelector('.slider__controls__buttons__prev').addEventListener('click', () => {
      let currentPosition = parseInt(controlWrap.getAttribute('data-currentposition'));
      let sliderIncrement = parseInt(controlWrap.getAttribute('data-increment'));
      progressUpdate(sliderIncrement, currentPosition, 'back', slider);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchResponsiveSlider,
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
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




/**
 * Slider
 *
 * @module patterns/slider/slider
 * @author Walter Reyneke <walter.reyneke@city.ac.uk>
 * @copyright City, University of London 2019!
 */

const className = 'slider';
/**
 * Creates a slider when adding slider class to an ul element. The li elements are the slides.
 *
 * @param {className} slider - class name of Ul element containing li (slides).
 */

function initSlider(slider) {
  // slider items count
  let sliderChildren = [...slider.children];
  let sliderChildrenLength = sliderChildren.length;

  if (sliderChildrenLength < 2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(slider, className, false);
    return;
  }

  for (const sliderChild of sliderChildren.entries()) {
    if (sliderChild[0] < 1) {
      sliderChild[1].classList.add('slider__active-slide');
    } else {
      // only displays first slide and hides rest
      sliderChild[1].classList.add('slider__slide');
    }
  }
  /* generates controls */


  let sliderControlsWrap = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'slider__controls__wrap'
  }]);
  let sliderControls = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'slider__controls'
  }]);
  let sliderProgress = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'slider__controls__progress'
  }]);
  let sliderButtons = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('div', [{
    label: 'class',
    val: 'slider__controls__buttons'
  }]); // generates progress

  sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
    label: 'content',
    val: '1'
  }, {
    label: 'class',
    val: 'slide__controls__progress__active'
  }]));
  sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
    label: 'content',
    val: ' /'
  }, {
    label: 'class',
    val: 'slide__controls__progress__separator'
  }]));
  sliderProgress.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('span', [{
    label: 'content',
    val: sliderChildrenLength
  }, {
    label: 'class',
    val: 'slide__controls__progress__total'
  }]));
  sliderControlsWrap.appendChild(sliderControls).appendChild(sliderProgress);
  slider.appendChild(sliderControlsWrap); // generates buttons

  sliderButtons.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
    label: 'aria-label',
    val: 'Previous item'
  }, {
    label: 'disabled',
    val: 'true'
  }, {
    label: 'class',
    val: 'fas fa-arrow-left slider__controls__buttons__prev swiper-slider-arrow arrow-left--btn-prev'
  }]));
  sliderButtons.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_1__["createHTMLElement"])('button', [{
    label: 'aria-label',
    val: 'Next item'
  }, {
    label: 'class',
    val: 'fas fa-arrow-right slider__controls__buttons__next swiper-slider-arrow arrow-right--btn-next'
  }]));
  sliderControls.appendChild(sliderButtons);
  slider.querySelector('.slider__controls__buttons__prev').classList.add('slider__controls__buttons__disabled'); // Adds event listener to buttons

  slider.querySelector('.slider__controls__buttons__prev').addEventListener('click', function () {
    handleSlideChange(-1, slider, sliderChildrenLength, sliderChildren);
  });
  slider.querySelector('.slider__controls__buttons__next').addEventListener('click', function () {
    handleSlideChange(1, slider, sliderChildrenLength, sliderChildren);
  });
}
/**
 * Handles direction of slide when sliding left or right
 *
 * @param {number} direction - either 1 (next) or -1 (prev)
 * @param {className} slider - class name of Ul element containing li (slides).
 * * @param {number} sliderChildrenLength - number of element children of class name above.
 * * @param {Element} sliderChildren - the slides / li  elements.
 */


function handleSlideChange(direction, slider, sliderChildrenLength, sliderChildren) {
  // gets position of active slide
  let activeSlide = parseInt(slider.querySelector('.slide__controls__progress__active').innerText);
  let newSlide = activeSlide + direction; // ensures you don't slide past first and last slide

  if (newSlide !== 0 && !(newSlide > sliderChildrenLength)) {
    // udpates progress
    slider.querySelector('.slide__controls__progress__active').innerHTML = newSlide;
    sliderChildren.forEach(function (item, i) {
      //displays new slide
      if (i === newSlide - 1) {
        item.classList.remove('slider__slide');
        item.classList.add('slider__active-slide');
      } else {
        item.classList.remove('slider__active-slide');
        item.classList.add('slider__slide');
      }
    }); // disables next & prev buttons when reaching beginning or end of slides

    if (newSlide === 1) {
      slider.querySelector('.slider__controls__buttons__prev').classList.add('slider__controls__buttons__disabled');
      slider.querySelector('.slider__controls__buttons__prev').setAttribute('disabled', true);
    } else {
      slider.querySelector('.slider__controls__buttons__prev').classList.remove('slider__controls__buttons__disabled');
      slider.querySelector('.slider__controls__buttons__prev').removeAttribute('disabled');
    }

    if (newSlide === sliderChildrenLength) {
      slider.querySelector('.slider__controls__buttons__next').classList.add('slider__controls__buttons__disabled');
      slider.querySelector('.slider__controls__buttons__next').setAttribute('disabled', true);
    } else {
      slider.querySelector('.slider__controls__buttons__next').classList.remove('slider__controls__buttons__disabled');
      slider.querySelector('.slider__controls__buttons__next').removeAttribute('disabled');
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


const className = 'fa-link';

function copyIconToClipboard(elem) {
  const copy = elem;
  copy.parentNode.parentNode.style.position = 'relative';
  copy.addEventListener('mouseover', e => {
    let t = document.createElement('div');
    let link = document.createElement('span');
    let url = window.location.href;
    t.className = 'tooltip';
    link.className = 'link-copy';
    let textlink = document.createTextNode(url);
    let textnode = document.createTextNode('Copy link');
    t.appendChild(textnode);
    link.appendChild(textlink);
    t.appendChild(link);
    e.target.parentElement.parentElement.appendChild(t);
    e.target.parentElement.parentElement.classList.add('copyLink');
  });
  copy.addEventListener('click', e => {
    e.preventDefault();
    let text = e.target.parentElement.parentElement.querySelector('.link-copy');
    let range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      e.target.parentElement.parentElement.querySelector('.tooltip').textContent = 'Link Copied';
      e.target.parentElement.parentElement.querySelector('.tooltip').classList.add(msg);
    } catch (err) {
      throw new Error(e);
    } // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported


    window.getSelection().removeAllRanges();
  });
  copy.addEventListener('mouseout', e => {
    //remove element from mouseover
    e.target.parentElement.parentElement.querySelector('.tooltip').remove();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: copyIconToClipboard,
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
  accordion.id = "accordion".concat(tabs.dataset.assetid);
  accordion.dataset.allowsingle = 'false';
  accordion.dataset.defaultopen = 'true';
  accordion.dataset.level = tabs.dataset.level;
  accordion.dataset.tabs = tabs.dataset.tabs;
  accordion.dataset.toggleopen = 'true';
  Array.from(tabs.parentNode.querySelectorAll("#".concat(tabs.id, " > .").concat(panelClassName))).forEach(panel => {
    const heading = panel.querySelector(".".concat(panelClassName, "__heading")),
          body = panel.querySelector(".".concat(panelClassName, "__body")),
          accordionHeading = document.createElement("h".concat(accordion.dataset.level)),
          accordionSection = document.createElement('div'),
          accordionWrapper = document.createElement('div');
    accordionHeading.className = 'accordion__heading';
    accordionHeading.id = "accordion".concat(tabs.dataset.assetid, "-header").concat(panel.dataset.assetid);
    accordionHeading.dataset.tabid = panel.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_0__["default"].labelledBy);
    accordionHeading.innerText = heading.innerText.trim();
    accordionSection.className = 'accordion__body';
    accordionSection.id = "accordion".concat(tabs.dataset.assetid, "-body").concat(panel.dataset.assetid);
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
  const controls = tabs.querySelector(".".concat(linksClassName)),
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
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Tabs
 *
 * @module patterns/tabs/tabs
 * @author Web Development
 * @copyright City, University of London 2018-2019
 */



const className = 'tabs',
      panelClassName = className + '__panel',
      contentClassName = panelClassName + '__content',
      linksClassName = className + '__links',
      endKey = 35,
      homeKey = 36,
      arrowLeft = 37,
      arrowUp = 38,
      arrowRight = 39,
      arrowDown = 40,
      oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_1__["reduceMotion"])() ? 0 : oneSecond,
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
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].selected, selected);

  if (selected) {
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].current, true);
  } else {
    button.removeAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].current);
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
        panels = Array.from(tabs.childNodes).filter(node => node.className && node.className === panelClassName);
  /**
   * Unselect every tab and related panel.
   */

  linkItems.forEach(linkItem => {
    toggleButton(linkItem.firstElementChild, false);
  });
  panels.forEach(panel => panel.setAttribute('hidden', 'true'));
  /**
   * Select the requested tab.
   */

  toggleButton(newTab, true);
  tabs.querySelector(newTab.dataset.hash).removeAttribute('hidden');
  /**
   * Move focus to the section and optionally scroll it into view.
   */

  newTab.focus();
  scrollTo && zenscroll__WEBPACK_IMPORTED_MODULE_0___default.a.to(tabs, scrollDuration);
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
  const currentTab = tabs.querySelector("[".concat(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].selected, "=\"true\"]")),
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
    tabs.querySelector(currentTab.dataset.hash).focus();
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
 */


function prepareLinks(linkItems) {
  linkItems.forEach(linkItem => {
    const link = linkItem.firstElementChild,
          button = document.createElement('button');
    linkItem.setAttribute('role', 'presentation');
    button.setAttribute('role', 'tab');
    button.appendChild(link.firstElementChild);
    button.dataset.hash = link.hash;
    button.id = link.id;
    linkItem.replaceChild(button, link);
    toggleButton(button, false);
    button.addEventListener('click', e => selectTabEvent(e, button), true);
  });
}
/**
 * Set attributes for the tabbed section panels.
 *
 * @param {HTMLElement[]} panels - An array of tab panels.
 */


function preparePanels(panels) {
  panels.forEach(panel => {
    const wrapper = document.createElement('div'),
          panelElements = Array.from(panel.children);
    wrapper.className = contentClassName;
    panelElements.forEach(element => wrapper.appendChild(element));
    panel.appendChild(wrapper);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', 0);
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
  const controls = tabs.querySelector(".".concat(linksClassName)),
        linkItems = Array.from(controls.querySelectorAll('li')),
        panels = Array.from(tabs.childNodes).filter(node => node.className && node.className === panelClassName);

  if (linkItems.length === 1) {
    /**
     * don't make one tab into a tabbed section, makes no sense
     */
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(tabs, className, false);
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

  tabs.addEventListener('keydown', e => keyEvents(e, tabs), true);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchTabs,
  launchQuery: ".".concat(className)
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest, formatReactDate */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatReactDate", function() { return formatReactDate; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





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

function isMobile(screen = 432) {
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
  return axios__WEBPACK_IMPORTED_MODULE_2___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
    }
  });
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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
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