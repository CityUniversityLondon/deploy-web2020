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
/******/ 	deferredModules.push([6,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/how-to-apply/pgt-data */ "./src/patterns/how-to-apply/pgt-data.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! edn-to-js */ "./node_modules/edn-to-js/dist/main.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(edn_to_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * How to apply PGT entry
 *
 * @author Web Development
 * @copyright City, University of London 2020
 */
// import React from 'react';
// import { render } from 'react-dom';
// import HowToApply from './patterns/how-to-apply/how-to-apply--pgt';


document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const howToApplyCTAs = document.querySelectorAll('.how-to-apply--pgt.how-to-apply--pgt--js');
    howToApplyCTAs && Array.from(howToApplyCTAs).forEach(howToApply => {
      Object(_patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_1__["howToApplyConfig"])(howToApply.dataset.config).then(config => {
        console.log(edn_to_js__WEBPACK_IMPORTED_MODULE_2___default()(config)); // render(
        //     <HowToApply
        //         config={edn(config)}
        //         element={howToApply}
        //     />,
        //     howToApply
        // );
      });
    });
  }
});

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