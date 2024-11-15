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
/******/ 	deferredModules.push([2,"react","vendor-dependencies","axios","vendor-direct"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/finder.js":
/*!***********************!*\
  !*** ./src/finder.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns_finder_finder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/finder/finder */ "./src/patterns/finder/finder.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");


/**
 * Finder entry
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */




document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const finders = document.querySelectorAll('.wrapper--finder');
    finders && Array.from(finders).forEach(finder => {
      Object(_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__["finderConfig"])(finder.dataset.config).then(config => {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patterns_finder_finder__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: config,
          element: finder
        }), finder);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__accommodation.js":
/*!********************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__accommodation.js ***!
  \********************************************************************************/
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
 * @module patterns/finder/components/cards/finder__results__accommodation
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as an accommodation card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Accommodation(props) {
  const mph = 60,
        calculateTime = minutes => Math.floor(minutes / mph) > 0 ? Math.floor(minutes / mph) + ' hour ' + minutes % mph : minutes,
        thumbnail = props.details.listMetadata.thumbnail[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }),
        level = props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Level:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.level.join('|')).split('|').join(' or '))),
        features = Object.keys(props.details.listMetadata).filter(meta => ['accessible', 'catered', 'ensuite'].includes(meta) && props.details.listMetadata[meta][0] === 'Yes').map(meta => meta.replace(/ensuite/, 'en suite')).sort().join(', '),
        type = props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Type:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.type.length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.type.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.type.join('|')).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.type.join('|')).split('|').join(' or '), features && ' (' + features + ')')),
        price = props.details.listMetadata.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-pound-sign icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Price:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.price[0], " (", props.details.listMetadata.deposit[0], " deposit)")),
        transport = props.details.listMetadata.transport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', "(", calculateTime(props.details.listMetadata.transport[0]), " minutes by public transport)"),
        distance = props.details.listMetadata.walk && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-walking icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Distance to Northampton Square campus:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, calculateTime(props.details.listMetadata.walk[0]), " minutes walk to campus", transport));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--accommodation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), distance, type, price, level)));
}

Finder__Results__Accommodation.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Accommodation);

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

function Finder__Results__BestBet(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--bestbet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.description))));
}

Finder__Results__BestBet.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__BestBet);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__card.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__card.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finder_results_accommodation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finder__results__accommodation */ "./src/patterns/finder/components/cards/finder__results__accommodation.js");
/* harmony import */ var _finder_results_casestudy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finder__results__casestudy */ "./src/patterns/finder/components/cards/finder__results__casestudy.js");
/* harmony import */ var _finder_results_centre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__results__centre */ "./src/patterns/finder/components/cards/finder__results__centre.js");
/* harmony import */ var _finder_results_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__results__contact */ "./src/patterns/finder/components/cards/finder__results__contact.js");
/* harmony import */ var _finder_results_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__results__course */ "./src/patterns/finder/components/cards/finder__results__course.js");
/* harmony import */ var _finder_results_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__event */ "./src/patterns/finder/components/cards/finder__results__event.js");
/* harmony import */ var _finder_results_funding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__funding */ "./src/patterns/finder/components/cards/finder__results__funding.js");
/* harmony import */ var _finder_results_generic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__generic */ "./src/patterns/finder/components/cards/finder__results__generic.js");
/* harmony import */ var _finder_results_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__results__module */ "./src/patterns/finder/components/cards/finder__results__module.js");
/* harmony import */ var _finder_results_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__results__news */ "./src/patterns/finder/components/cards/finder__results__news.js");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__results__profile */ "./src/patterns/finder/components/cards/finder__results__profile.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _finder_results_research__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finder__results__research */ "./src/patterns/finder/components/cards/finder__results__research.js");


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

function Finder__Results__Card(props) {
  switch (props.type) {
    case 'accommodation':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_accommodation__WEBPACK_IMPORTED_MODULE_0__["default"], {
        details: props.details
      });

    case 'casestudy':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_casestudy__WEBPACK_IMPORTED_MODULE_1__["default"], {
        details: props.details
      });

    case 'centre':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_centre__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details,
        query: props.query
      });

    case 'contact':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details,
        query: props.query
      });

    case 'course':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: props.details,
        query: props.query
      });

    case 'event':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_event__WEBPACK_IMPORTED_MODULE_5__["default"], {
        details: props.details
      });

    case 'funding':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details,
        query: props.query
      });

    case 'module':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details,
        query: props.query
      });

    case 'news':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details
      });

    case 'profile':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        details: props.details,
        query: props.query
      });

    case 'research':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_research__WEBPACK_IMPORTED_MODULE_13__["default"], {
        details: props.details,
        query: props.query
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_7__["default"], {
        details: props.details
      });
  }
}

Finder__Results__Card.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Card);

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

function Finder__Results__CaseStudy(props) {
  const subtitle = props.details.listMetadata.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.status[0]) : props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.type[0]),
        school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
        department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
        centre = props.details.listMetadata.centre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-vial icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Research centre:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.centre.length > 2 ? props.details.listMetadata.centre.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.centre.slice(-1) : props.details.listMetadata.centre.join(', and ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--casestudy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), subtitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre)));
}

Finder__Results__CaseStudy.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__CaseStudy);

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

function Finder__Results__Centre(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
        department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
        subject = props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.related.length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.related.join('|')).split('|').slice(0, -1).join(', ') + ' and ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.related.join('|')).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.related.join('|')).split('|').join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), subject, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}

Finder__Results__Centre.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Centre);

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

function Finder__Results__Contact(props) {
  const department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), " ", props.details.listMetadata.department[0]),
        school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), " ", props.details.listMetadata.school[0]),
        jobtitle = props.details.listMetadata.jobtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.jobtitle[0]),
        email = props.details.listMetadata.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-envelope icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'mailto:' + props.details.listMetadata.email[0]
  }, props.details.listMetadata.email[0])),
        altemail = props.details.listMetadata.altemail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fad fa-user icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Executive Assistant:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'mailto:' + props.details.listMetadata.altemail[0]
  }, props.details.listMetadata.altemail[0])),
        telephone = props.details.listMetadata.telephone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-phone fa-rotate-90 icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Telephone:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'tel:' + props.details.listMetadata.telephone[0]
  }, props.details.listMetadata.friendlytelephone[0])),
        room = props.details.listMetadata.room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-door-open icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Room:"), " ", props.details.listMetadata.room[0]),
        enquiry = props.details.listMetadata.enquiryurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-edit icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Enquiries:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.listMetadata.enquiryurl[0]
  }, props.details.listMetadata.enquirylabel[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), jobtitle, school, department, room, email, telephone, enquiry, altemail)));
}

Finder__Results__Contact.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Contact);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__course.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__course.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _results_formatLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/formatLabel */ "./src/patterns/finder/components/results/formatLabel.js");
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

const externalSiteUrl = ['bayes.city.ac.uk', 'online.city.ac.uk'];

function Finder__Results__Course(props) {
  const subtitle = props.details.listMetadata.type && props.details.listMetadata.type[0] || props.details.listMetadata.level && props.details.listMetadata.level[0] || null,
        award = props.details.listMetadata.qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Award", props.details.listMetadata.qualification.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.qualification.join(', '))),
        duration = props.details.listMetadata.duration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Duration:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.duration[0])),
        method = props.details.listMetadata.method && props.details.listMetadata.level[0] !== 'Short courses and professional development' && (props.query.facets && props.query.facets.method || props.query.query.indexOf(props.details.listMetadata.method[0]) >= 0 || props.details.listMetadata.method[0].indexOf('Online') >= 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fa-solid fa-book-open-reader icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Method", props.details.listMetadata.method.length > 1 && 's', " of study:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(Array.from(new Set(props.details.listMetadata.method)).join('|') // Remove any duplicates & format
  ).split('|').join(', '))),
        location = props.details.listMetadata.location && props.query.facets && props.query.facets.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.location.join('|') === 'Online|Online' ? 'Online' : props.details.listMetadata.location.join(', '))),
        school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.school.map((e, i) => i === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: i
  }, e.replace('and', '&')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: i
  }, "| ", e)))),
        // City and Business School use different metadata values; check for both
  cityStGeorgesLabel = String(props.details.listMetadata.location).toLowerCase() === 'tooting' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__label card--course__label--citystgeorges"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "City St George's Tooting Campus")) : '',

  /**/

  /*
      cityStGeorgesLabel = String(
          props.details.listMetadata.location
      ).toLowerCase() === 'tooting' ?
      <div className="card__label card--course__label--clearing">
              <p className="card__label card--course__label--clearing">
                      City St George&apos;s Tooting Campus
                  </p>
              </div>
          : '',
          */
  clearing = props.details.title.includes('Bio') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__label card--course__label--clearing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__label card--course__label--clearing"
  }, "Clearing")) : '',

  /*
  // City and Business School use different metadata values; check for both
  clearing = props.details.listMetadata.clearing &&
      ['Yes', 'yes'].includes(props.details.listMetadata.clearing[0]) && (
          <div className="card__label card--course__label--clearing">
              <p className="card__label card--course__label--clearing">
                  Clearing
              </p>
          </div>
      ),
      */
  external = externalSiteUrl.some(s => props.details.indexUrl.indexOf(s) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-sharp fa-external-link icon",
    "aria-label": "(external link)"
  })) : null,
        courseCode = props.details.listMetadata.code && (['Undergraduate degree', 'Foundation course', 'Postgraduate taught degree'].some(s => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.code) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Course code", props.details.listMetadata.code.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.code.join('/'))) : null,
        entryYears = props.details.listMetadata.entryyears && (['Undergraduate degree'].some(s => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.entryyears) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-calendar icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Year", props.details.listMetadata.entryyears.length > 1 && 's', ' ', "of entry:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.entryyears.join('/'))) : null,
        description = props.details.listMetadata.c && props.details.listMetadata.c[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.listMetadata.c[0], props.query.query) : props.details.listMetadata.c[0]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--course"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper--card__label__details"
  }, clearing, " ", cityStGeorgesLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.title, props.query.query) : props.details.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(subtitle, props.query.query) : subtitle && subtitle), description, school, award, duration, courseCode, entryYears, method, location))));
}

Finder__Results__Course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Course);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__event.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__event.js ***!
  \************************************************************************/
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
 * @module patterns/finder/components/cards/finder__results__event
 * @author Web Development
 * @copyright City, University of London 2020
 */




function formatShortDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        date = new Date(dateString),
        month = months[date.getUTCMonth()];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card--event__label--shortdate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, date.getUTCDate()), " ", month);
}

function compareDates(startDate, endDate, showTime) {
  const sDate = new Date(startDate),
        eDate = new Date(endDate),
        noTimeSDate = new Date(sDate.setUTCHours(0, 0, 0)),
        noTimeEDate = new Date(eDate.setUTCHours(0, 0, 0)),
        time = showTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ", ", Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatTime"])(startDate), " - ", Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatTime"])(endDate, true)) : null;
  return noTimeSDate.getTime() === noTimeEDate.getTime() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type true"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatReactDate"])(sDate), time) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type false"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatReactDate"])(sDate), " - ", Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatReactDate"])(eDate), time);
}
/**
 * Render a Funnelback result as an event card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */


function Finder__Results__Event(props) {
  const shortDate = props.details.listMetadata.d && formatShortDate(props.details.listMetadata.d[0]),
        location = props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw icon fa-map-marker-alt",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.location.join(', '))),
        audience = props.details.listMetadata.audience && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw icon fa-users",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Audience:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Array.from(new Set(props.details.listMetadata.audience)).map(str => {
    let capitalized = `${str[0].toUpperCase()}${str.slice(1)}`;
    return capitalized.replace(/-/g, ' ');
  }).join('|').split('|').join('; '))),
        thumbnail = props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }),
        eventStartDate = props.details.listMetadata.d && props.details.listMetadata.d[0],
        eventEndDate = props.details.listMetadata.d && props.details.listMetadata.d[1],
        eventLabel = compareDates(eventStartDate, eventEndDate, parseInt(props.details.listMetadata.displayTime && props.details.listMetadata.displayTime[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--event card--landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, shortDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), eventLabel, location, audience)));
}

Finder__Results__Event.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Event);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__funding.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__funding.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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

function Finder__Results__Funding(props) {
  const school = props.details.listMetadata.school && props.query.facets && props.query.facets.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', or ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', or '))),
        hardship = props.details.listMetadata.hardship && props.details.listMetadata.hardship[0] === '1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card--funding__label--hardship"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Hardship funding")),
        programme = props.details.listMetadata.programme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Programme", props.details.listMetadata.programme.length > 2 ? 's' : null, ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.programme.length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.programme.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.programme.join('|')).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.programme.join('|')).split('|').join(' or '))),
        level = props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Programme level:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.level.length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.level.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.level.join('|')).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["uppercaseFirstLetterLowercaseRest"])(props.details.listMetadata.level.join('|')).split('|').join(' or '))),
        feestatus = props.details.listMetadata.feestatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-globe-europe icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Fee status:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.feestatus.length > 2 ? props.details.listMetadata.feestatus.slice(0, -1).join(', ') + ' or ' + props.details.listMetadata.feestatus.slice(-1) : props.details.listMetadata.feestatus.join(' or ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--funding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, hardship, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title.replace('&amp;', '&')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.type[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), level, programme, feestatus, school)));
}

Finder__Results__Funding.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Funding);

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

function Finder__Results__Generic(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
        department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
        title = props.details.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title.indexOf('School') >= 0 ? props.details.title.replace('&amp;', '&') : props.details.title);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--generic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}

Finder__Results__Generic.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Generic);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__module.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__module.js ***!
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
 * @module patterns/finder/components/cards/finder__results__module
 * @author Web Development
 * @copyright City, University of London 2020
 */


/**
 * Render a Funnelback result as a module card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Module(props) {
  const location = props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.location[0])),
        title = props.details.listMetadata.code ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card--module__code"
  }, props.details.listMetadata.code[0]), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.title)),
        school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
        term = props.details.listMetadata.term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-fw fa-calendar icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Semester:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.term.length > 2 ? 'All year' : props.details.listMetadata.term.join(' or '))),
        topic = props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.related.sort().map((topic, i) => i > 0 ? topic.toLowerCase() : topic).join(', ')),
        specification = props.details.listMetadata.specification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-fw fa-file-pdf icon",
    "aria-label": "PDF"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.listMetadata.specification[0]
  }, "Download module specification"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, title), topic, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), term, school, location, specification)));
}

Finder__Results__Module.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Module);

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

function Finder__Results__News(props) {
  const formattedDate = props.details.listMetadata.d && Object(_util__WEBPACK_IMPORTED_MODULE_2__["formatReactDate"])(new Date(props.details.listMetadata.d[0])),
        dateString = props.details.listMetadata.d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, formattedDate),
        hashtags = props.details.listMetadata.hashtagtext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fad fa-fw fa-hashtag icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Hashtag", props.details.listMetadata.hashtagtext.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.details.listMetadata.hashtagtext.join(', '))),
        thumbnail = props.details.listMetadata.thumbnailTiny && props.details.listMetadata.thumbnailTiny[0] && props.details.listMetadata.thumbnailMax && props.details.listMetadata.thumbnailMax[0] && props.details.listMetadata.thumbnailMobile && props.details.listMetadata.thumbnailMobile[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: props.details.listMetadata.thumbnailTiny[0],
    media: "(max-width: 375px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: props.details.listMetadata.thumbnailMax[0],
    media: "(min-width: 3840px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.listMetadata.thumbnailMobile[0],
    alt: props.details.title
  })) : props.details.listMetadata.thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, dateString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), hashtags)));
}

Finder__Results__News.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__News);

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

function Finder__Results__Profile(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "School:"), ' ', props.details.listMetadata.school[0].replace('and', '&')),
        department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), ' ', props.details.listMetadata.department[0]),
        headshot = props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__thumbnail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: 'Photo of ' + props.details.title
  })),
        EDIAmbassadors = props.details.listMetadata.ediAmbassador && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-people-roof icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "EDI Ambassador")),
        thumbnailExist = props.details.listMetadata.thumbnail && 'card--profile--thumbnailAvailable',
        country = props.query.facets && props.query.facets.country && props.details.listMetadata.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fad fa-fw fa-globe-europe icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Country:"), ' ', props.details.listMetadata.country.length > 2 ? props.details.listMetadata.country.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.country.slice(-1) : props.details.listMetadata.country.join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.details.liveUrl,
    className: `card__anchor card__details ${thumbnailExist}`
  }, headshot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.jobtitle && props.details.listMetadata.jobtitle[0]), school, department, country, EDIAmbassadors)));
}

Finder__Results__Profile.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Profile);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__promo.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__promo.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__results__summary
 * @author Web Development
 * @copyright City, University of London
 */



function Finder__Results__Promo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--finder-promo promo-area__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "promo-area layout__left--full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "promo-area__content background--pink90"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "promo-area__heading"
  }, props.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "promo-area__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "promo-area__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, props.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.linkRef,
    className: "outline-cta-arrow--bright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.linkText))))))));
}

Finder__Results__Promo.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  body: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  linkRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  linkText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Promo);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__research.js":
/*!***************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__research.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__research
 * @author Web Development
 * @copyright City, University of London 2021
 */

 // import parse from 'html-react-parser';

/**
 * Render a Funnelback result as a PhD research project card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Research(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(' and '))),
        department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-sharp fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(' and '))),
        centre = props.details.listMetadata.researchCentre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-vial icon",
    "aria-hidden": "true"
  }), ' ', props.details.listMetadata.researchCentre.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Research centres: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Research centre: ")),
        academic = props.details.listMetadata.academic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-chalkboard-teacher icon",
    "aria-hidden": "true"
  }), ' ', props.details.listMetadata.academic.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Academics: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Academic: ")),
        student = props.details.listMetadata.student && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-users icon",
    "aria-hidden": "true"
  }), ' ', props.details.listMetadata.student.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Students: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Student: ")),
        degree = props.details.listMetadata.relatedDegree && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-diploma icon",
    "aria-hidden": "true"
  }), ' ', props.details.listMetadata.relatedDegree.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Related degrees: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Related degree: ")),
        status = props.details.listMetadata.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-hourglass icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Status:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.listMetadata.status[0], " "), props.details.listMetadata.status[0] === 'Completed project' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-check-circle icon",
    "aria-hidden": "true"
  }) : null),
        site = props.details.listMetadata.site && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-globe icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.listMetadata.site
  }, "View case study site")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--research"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card--research__title-link"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre, degree, academic, student, status, site)));
}

Finder__Results__Research.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Research);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__checkbox.js":
/*!********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__checkbox.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Checkbox(props) {
  const randomNumber = props.mobile ? 'mobile' : 'desktop',
        toggleChecked = (props.facet.meta in props.query.facets),
        responseFacetValue = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(value => value.data.toLowerCase() === props.facet.checkedValue.toLowerCase());

  if (responseFacetValue && responseFacetValue[0] && responseFacetValue[0].count > 0) {
    const toggleFacet = () => {
      const newQuery = props.query;
      props.dependencies.map(facet => {
        delete newQuery.facets[facet.meta];
      });
      toggleChecked ? delete newQuery.facets[props.facet.meta] : newQuery.facets[props.facet.meta] = props.facet.checkedValue;
      newQuery.startRank = 1;
      newQuery.misspelling = null;
      newQuery.interacted = true;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__filter finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: `meta_${props.facet.meta}_sand--${randomNumber}`,
      name: `meta_${props.facet.meta}_sand`,
      value: props.facet.checkedValue,
      onChange: () => toggleFacet(),
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: () => toggleFacet()
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "finder__filters__label--always",
      htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.name, !toggleChecked && responseFacetValue && ' (' + responseFacetValue[0].count + ')'));
  } else {
    return null;
  }
}

Finder__Checkbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Checkbox);

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
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__paramCheckbox */ "./src/patterns/finder/components/filters/finder__paramCheckbox.js");
/* harmony import */ var _finder_hiddenInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__hiddenInput */ "./src/patterns/finder/components/filters/finder__hiddenInput.js");
/* harmony import */ var _finder_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__tag */ "./src/patterns/finder/components/filters/finder__tag.js");
/* harmony import */ var _finder_reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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


function Finder__Filters(props) {
  const totalMatching = props.response && props.response.summary && props.response.summary.fullyMatching;
  const clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__reset finder__filters__reset--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    clear: props.clear,
    resetSort: false,
    matrixState: props.matrixState
  })) : null,
        clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    clear: props.clear,
    resetSort: true,
    matrixState: props.matrixState
  }) : null;
  const sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_sort__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: props.mobile ? 'sort-mobile' : 'sort-desktop',
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  const submitSSR = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit finder__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', `Filter ${props.config.summariseAs.plural}`), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, !props.hasMounted && props.query.fixedParameters ? props.query.fixedParameters.map(param => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_hiddenInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: param.name,
      name: param.name,
      value: param.value
    });
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'paramCheckBox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            responseParameter: props.response.inputParameters,
            pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response,
            hasMounted: props.hasMounted,
            matrixStat: props.matrixState
          });

        case 'select':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta),
            mobile: props.mobile
          });

        case 'checkbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta),
            mobile: props.mobile
          });

        case 'tag':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_tag__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta),
            mobile: props.mobile,
            hasMounted: props.hasMounted,
            matrixState: props.matrixState
          });

        default:
          Object(_util__WEBPACK_IMPORTED_MODULE_9__["gaEvent"])('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort, submitSSR)));
}

Finder__Filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hasMounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__filtersmobile.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__filtersmobile.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__filters */ "./src/patterns/finder/components/filters/finder__filters.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City, University of London 2019
 */





let filters = null;

const getFilters = () => filters;
/**
 * Render the mobile version of the filters.
 *
 * TODO: this is a bit flaky on old iPhones with long facets (i.e. longer than
 * the main body of the page)
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */


function Finder__FiltersMobile(props) {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}); // trap tab focus when the filters are open

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_3___default()(getFilters(), {
        initialFocus: getFilters().querySelector('.wrapper--finder__filters--mobile__apply'),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(_util__WEBPACK_IMPORTED_MODULE_4__["disableBodyScroll"])();
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(_util__WEBPACK_IMPORTED_MODULE_4__["enableBodyScroll"])();
    }
  }, [display, focusTrap]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const result = totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  const totalMatchingMessage = totalMatching ? `Show ${totalMatching} ${result}` : 'Close';
  const filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Filter");
  const toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "wrapper--finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType ? true : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__filters",
    "data-open": display,
    ref: mobilefilters => filters = mobilefilters
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: props.mobile,
    hasMounted: props.hasMounted,
    matrixState: props.matrixState,
    updating: props.updating
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, "Updating ", props.summariseAs.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage))))));
}

Finder__FiltersMobile.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hasMounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__hiddenInput.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__hiddenInput.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__hiddenInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    id: props.name,
    name: props.name,
    value: props.value
  });
}

Finder__hiddenInput.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__hiddenInput);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__paramCheckbox.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__paramCheckbox.js ***!
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
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__paramCheckbox(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset),
        pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.fullyMatching,
        pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.partiallyMatching,
        toggleChecked = (props.facet.meta in props.query.parameters),
        totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;

  const toggleFacet = () => {
    let newQuery = props.query;
    toggleChecked ? delete newQuery.parameters[props.facet.meta] : newQuery.parameters[props.facet.meta] = props.facet.checkedValue;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  if (totalText > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__filter finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: `${props.facet.funnelbackName}--${randomNumber}`,
      name: props.facet.meta,
      value: props.facet.checkedValue,
      onChange: () => toggleFacet(),
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: () => toggleFacet()
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "finder__filters__label--always",
      htmlFor: `${props.facet.funnelbackName}--${randomNumber}`
    }, props.facet.name, !toggleChecked && totalText && ' (' + totalText + ')'));
  } else {
    return null;
  }
}

Finder__paramCheckbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  responseParameter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pastEventsResponse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  hasMounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__paramCheckbox);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__reset.js":
/*!*****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__reset.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/filters/finder__reset
 * @author Web Development
 * @copyright City, University of London 2019
 */


/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Reset(props) {
  if (props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "?",
      className: "finder__reset",
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fa-sharp fa-solid fa-xmark icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "finder__reset__text"
    }, "Reset"));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "finder__reset",
      type: "button",
      onClick: () => {
        props.clear(props.resetSort);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fa-sharp fa-solid fa-xmark icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "finder__reset__text"
    }, "Reset"));
  }
}

Finder__Reset.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resetSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Reset);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__select.js":
/*!******************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__select.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**<
 * @module patterns/finder/components/finder__select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Select(props) {
  const randomNumber = props.mobile ? 'mobile' : 'desktop',
        currentValue = props.query.facets[props.facet.meta] || ''; // reduce the facet configuration to an array of all possible values for
  // the facet

  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []); // reduce the Funnelback response for the facet to an array of valid
  // values for the current query

  const responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : []; // count how many possible facets are not valid for the current query
  // and will be hidden

  const hiddenFacets = allFacets.map(facet => facet.data).filter(facet => responseFacets.indexOf(facet.toLowerCase()) < 0).length;

  const setFacet = value => {
    const newQuery = props.query;
    props.dependencies.map(facet => {
      delete newQuery.facets[facet.meta];
    });

    if (value) {
      newQuery.facets[props.facet.meta] = value;
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `finder__filter finder__select ${currentValue && 'finder__select--selected'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: `meta_${props.facet.meta}_sand`,
      id: `meta_${props.facet.meta}_sand--${randomNumber}`,
      onChange: e => setFacet(e.target.value),
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      id: `meta${props.facet.meta}all--${randomNumber}`,
      name: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.noSelection), props.facet.values.map((value, i) => {
      const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());

      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: i,
          value: value.data.toLowerCase()
        }, value.label, currentValue !== value.data && responseFacetDetails[0] && responseFacetDetails[0].count > 0 ? ` (${responseFacetDetails[0].count})` : '');
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}

Finder__Select.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Select);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__sort.js":
/*!****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__sort.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__sort
 * @author Web Development
 * @copyright City, University of London 2020
 */


/**
 * Component to change the sort order of the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */

function Finder__Sort(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset);

  const setSort = type => {
    const newQuery = props.query;
    newQuery.sortType = type;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const validSorts = props.config.sort.filter(sortType => sortType.type === '' ? props.query.query !== '' || Object.keys(props.query.facets).length > 0 || props.query.sortType === '' ? true : false : true);
  return validSorts.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `finder__select--sort finder__select${props.query.sortType !== props.config.sort[0].type ? ' finder__select--selected' : ''}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "finder__select__overline",
    htmlFor: `sort--${randomNumber}`
  }, "Sort by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "sort",
    id: `sort--${randomNumber}`,
    onChange: e => setSort(e.target.value),
    value: props.query.sortType
  }, validSorts.map((sortType, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: sortType.type
    }, sortType.label);
  }))) : null;
}

Finder__Sort.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Sort);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__tag.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__tag.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/hyper-link */ "./src/patterns/finder/logic/hyper-link.js");


/**
 * @module patterns/finder/components/finder__tag
 * @author Web Development
 * @copyright City, University of London 2020
 */




function Finder__Tag(props) {
  // reduce the facet configuration to an array of all possible values for
  // the facet
  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []); // reduce the Funnelback response for the facet to an array of valid
  // values for the current query

  const responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : []; // count how many possible facets are not valid for the current query
  // and will be hidden

  const hiddenFacets = allFacets.map(facet => facet.data).filter(facet => responseFacets.indexOf(facet.toLowerCase()) < 0).length;

  const deleteFacet = () => {
    const newQuery = props.query;
    props.dependencies.map(facet => {
      delete newQuery.facets[facet.meta];
    });
    delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const labelText = props.query.facets[props.facet.meta] && props.facet.values.length > hiddenFacets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__tag__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Remove filter for "), props.facet.name, ":", ' ', props.facet.values.filter(value => value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase())[0].label));
  const ssrHiddenField = props.matrixState && props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: `meta_${props.facet.meta}_sand`,
    value: props.query.facets[props.facet.meta]
  }) : null;

  if (props.facet.values.length > hiddenFacets && props.query.facets[props.facet.meta]) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__filter finder__tag"
    }, ssrHiddenField, props.matrixState && props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: Object(_logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__["hyperLink"])(props.query, props.facet)
    }, labelText) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => deleteFacet(),
      type: "button"
    }, labelText));
  } else {
    return null;
  }
}

Finder__Tag.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hasMounted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Tag);

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

function Finder__Clear(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "finder__clear",
    type: "button",
    onClick: () => {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__clear__text"
  }, "Clear query"));
}

Finder__Clear.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resetSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Clear);

/***/ }),

/***/ "./src/patterns/finder/components/query/finder__query.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__query.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");


/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */




const maximumSuggestions = 5,
      escapeKey = 'Escape',
      endKey = 'End',
      homeKey = 'Home',
      arrowUp = 'ArrowUp',
      arrowDown = 'ArrowDown';

function highlightQueryTerm(suggestion, partialQuery) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length))));
}
/**
 * Search input field and autocomplete.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */


function Finder__Query(props) {
  // save what they're typing
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.query.query || ''); // Funnelback suggestions for the currently typed text

  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    cancel: () => {}
  }); // ref for the input field, so we can .focus() it

  const [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('finder--' + props.query.collection);
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        [activeSuggestionID, setActiveSuggestionID] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
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
    newQuery.sortType = props.config.sort[0].type;
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
    newQuery.sortType = partialQuery ? '' : props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  const clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_3__["default"], {
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


  const suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: suggestion,
    role: "option",
    id: inputId + '--' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onBlur: () => {
      setActiveSuggestionID('');
      setShowSuggestions(false);
    },
    onFocus: () => setShowSuggestions(true),
    onMouseDown: () => submitSuggestion(suggestion),
    onClick: () => submitSuggestion(suggestion),
    onKeyDown: e => {
      switch (e.key) {
        case escapeKey:
          e.target.parentNode.parentNode.parentNode.querySelector('input').focus();
          setSuggestions([]);
          setActiveSuggestionID('');
          break;

        case arrowUp:
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

        case arrowDown:
          e.preventDefault();

          if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.nextElementSibling.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.nextElementSibling.id);
          }

          break;

        case homeKey:
          e.preventDefault();

          if (e.target.parentNode.parentNode.firstChild && e.target.parentNode.parentNode.firstChild.querySelector('button')) {
            e.preventDefault();
            e.target.parentNode.parentNode.firstChild.querySelector('button').focus();
            setActiveSuggestionID(e.target.parentNode.firstChild.id);
          }

          break;

        case endKey:
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
  const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__icon fal fa-sharp fa-search icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, `Search ${props.config.summariseAs.plural}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
      switch (e.key) {
        case escapeKey:
          clearQuery();
          break;

        case arrowDown:
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
        const [suggestionsPromise, newCall] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_2__["suggest"])(props.query.collection, e.target.value); // update our request cancel function for the new request

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: "finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

Finder__Query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Query);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__announcement.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__announcement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_2__);


/**
 * @module patterns/finder/components/results/finder__announcement
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Renders the announcement box
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */

function Finder__Announcement(props) {
  const clean = dompurify__WEBPACK_IMPORTED_MODULE_2___default.a.sanitize(props.announcement, {
    allowedTags: ['strong', 'p', 'h2', 'h3', 'a'],
    allowedAttributes: {
      a: ['href']
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__results__announcement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: clean
    }
  }));
}

Finder__Announcement.propTypes = {
  announcement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Announcement);

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

function Finder__DidYouMean(props) {
  const didyoumean = props.query.misspelling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "No ", props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "Did you mean", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

Finder__DidYouMean.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__DidYouMean);

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
/* harmony import */ var _logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/hyper-link */ "./src/patterns/finder/logic/hyper-link.js");


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

function Finder__Pagination(props) {
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

  pages.push(currentPage === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    key: "previousPage",
    className: "pagination__controls__button--prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Previous page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "pagination__controls__button--prev",
    key: "prev",
    onClick: e => {
      e.preventDefault();
      changePage(currentPage - 1);
    },
    href: Object(_logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__["hyperLink"])(props.query, null, currentPage - 1, props.numRanks)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Previous page ", currentPage)));

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

    pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "aria-current": page === currentPage ? 'page' : null,
      "aria-expanded": page === currentPage ? true : false,
      "aria-label": `Open page ${page}`,
      className: className,
      "data-page": page,
      "data-proximity": Math.abs(page - currentPage),
      disabled: page === currentPage ? true : false,
      key: page,
      onClick: e => {
        e.preventDefault();
        changePage(page);
      },
      href: Object(_logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__["hyperLink"])(props.query, null, page, props.numRanks)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, page)));

    if (page === 1) {
      pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: "firstEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2026")));
    } else if (page === numberOfPages - 1) {
      pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: "lastEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2026")));
    }
  }

  pages.push(currentPage === numberOfPages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    key: "nextPage",
    className: "pagination__controls__button--next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Next page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "pagination__controls__button--next",
    key: "next",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: e => {
      e.preventDefault();
      changePage(currentPage + 1);
    },
    href: Object(_logic_hyper_link__WEBPACK_IMPORTED_MODULE_2__["hyperLink"])(props.query, null, currentPage + 1, props.numRanks)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Next page")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "pagination__controls",
    "data-pagecount": numberOfPages
  }, pages));
}

Finder__Pagination.propTypes = {
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Pagination);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/patterns/finder/components/cards/finder__results__bestbet.js");
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/patterns/finder/components/results/finder__didyoumean.js");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__pagination */ "./src/patterns/finder/components/results/finder__pagination.js");
/* harmony import */ var _cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/finder__results__promo */ "./src/patterns/finder/components/cards/finder__results__promo.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");
/* harmony import */ var _finder_announcement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__announcement */ "./src/patterns/finder/components/results/finder__announcement.js");


/**
 * @module patterns/finder/components/finder__results
 * @author Web Development
 * @copyright City, University of London 2021
 */









/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results(props) {
  const updating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Updating ", props.summariseAs.plural, "\u2026"));
  /**
   * Display promo card based on user search/filter input.
   *
   * Props passed from finder. If conditions are met, promo card will display between first
   * result card and the rest of the returned results.
   */

  let promoCardConditionMet = false,
      // Are conditions met to render promo card?
  matchedPromoGroup = [],
      // Matching promo group based on query parameters
  matchedPromoGroupDetails; // Matched promo group data to render to card

  if (props.promo) {
    let promoConditions = props.promo[0]['conditions'],
        // Conditions to render promo card
    promoDetails = props.promo[0]['details'],
        // Details rendered to promo card
    filterFacets = props.query.facets,
        // User-defined filter/search values
    searchFacets = props.query.query.toLowerCase(),
        // User-input search value
    promoCardConditionGroup,
        // Group-specific data to render in promo card
    queryFacetsAll = { ...filterFacets,
      searchFacets
    }; // Combine filter and search inputs
    // Promo condition check and define group

    let queryFacetsArray = [];
    let queries = Object.values(queryFacetsAll);

    for (const query of queries) {
      queryFacetsArray.push(query);
    } // Remove empty array items


    queries = queries.filter(item => item); // Loop query parameters and check if they match any of the promo card conditions

    for (const q of queries) {
      matchedPromoGroup = promoConditions.filter(el => el.school === q || el.level === q || el.related === q || el.subject === q || el.type === q || el.searchQuery1 === q);
    } // Assign promo group value and define if promo card conditions are met


    matchedPromoGroup.length > 0 ? (promoCardConditionGroup = matchedPromoGroup[0]['promoGroup']) && (promoCardConditionMet = true) : promoCardConditionMet = false; // Filter promo card details to match correct group of data

    matchedPromoGroupDetails = promoDetails.filter(el => el.promoGroup === promoCardConditionGroup);
  }

  const resultsClass = 'resultsVariant' in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : 'finder__results__list';

  if (props.response) {
    const summary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    const announcement = props.config.announcement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_finder_announcement__WEBPACK_IMPORTED_MODULE_8__["default"], {
      announcement: props.config.announcement
    });
    const didYouMean = (props.query.misspelling || props.response.spell) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_2__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    }); // if we have more results than will fit on a single page, we need
    // pagination

    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    let results,
        secondItemOnwards = props.response.results;

    if (promoCardConditionMet && (props.response.bestBets.length > 0 || props.response.results.length > 0)) {
      if (props.query.startRank === 1) {
        const firstItemData = props.response.results[0];
        const secondItemOnwardsData = Array.from(secondItemOnwards.slice(1));
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: firstItemData,
          type: props.type,
          query: props.query
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          heading: matchedPromoGroupDetails[0]['heading'],
          body: matchedPromoGroupDetails[0]['body'],
          linkRef: matchedPromoGroupDetails[0]['linkRef'],
          linkText: matchedPromoGroupDetails[0]['linkText']
        }), secondItemOnwardsData.map(s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: s,
          key: s.docNum,
          type: props.type,
          query: props.query
        })));
      } else {
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, props.response.results.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: card,
          key: card.docNum,
          type: props.type,
          query: props.query
        })));
      }
    }

    if (props.response.results && !promoCardConditionMet) {
      results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
        start: props.response.summary.currStart,
        className: resultsClass
      }, props.response.bestBets.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_0__["default"], {
        details: card,
        key: card.docNum
      })), props.response.results.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bestBet: false,
        details: card,
        key: card.docNum,
        type: props.type,
        query: props.query
      }))) : null;
    } // render either the results, or a spinner while we wait for Funnelback


    const resultsContent = props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, updating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, didYouMean, announcement, summary, results, pagination);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "finder__results"
    }, updating);
  }
}

Finder__Results.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  promo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  pastEventsQuery: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  pastEventsResponse: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  pastEventsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results__summary.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results__summary.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filters_finder_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");


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

function Finder__Results__Summary(props) {
  const result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural,
        formatter = new Intl.NumberFormat('en-GB'),
        sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper--finder__select--sort--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_filters_finder_sort__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;

  if (props.totalMatching === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finder__results__summary finder__results__summary--noresults"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "finder__results__summary__heading"
    }, "Your search did not match any ", props.summariseAs.plural, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Suggestions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Make sure that all words are spelled correctly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try different keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try more general keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try fewer keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Try fewer filters"), Object.keys(props.query.facets).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        props.clear(true);
      }
    }, "Reset filters")), props.query.query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        const newQuery = props.query;
        newQuery.query = '';
        newQuery.sortType = props.config.sort[0].type;
        newQuery.misspelling = null;
        newQuery.startRank = 1;
        newQuery.interacted = true;
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      }
    }, "Reset query"))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "finder__results__summary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      "aria-live": "polite",
      className: "finder__results__summary__heading"
    }, props.query.query || Object.keys(props.query.facets).length > 0 ? 'Matching' : 'All', ' ', result, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "(showing", ' ', props.totalMatching > props.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, formatter.format(props.currStart)), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, formatter.format(props.currEnd)), ' ', "of", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, formatter.format(props.totalMatching)), ' ', result, props.query.query && ` for “${props.query.query}”`, ")")), sort);
  }
}

Finder__Results__Summary.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  config: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  currEnd: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  currStart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  numRanks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  totalMatching: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  update: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Summary);

/***/ }),

/***/ "./src/patterns/finder/components/results/formatLabel.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/results/formatLabel.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);




const formatLabel = (label, value) => {
  if (value) {
    return label;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label.split(value).reduce((prev, current, i) => {
      if (!i) {
        return [current];
      }

      return prev.concat( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "highlightText",
        key: value + current
      }, value), current);
    }, []));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formatLabel);

/***/ }),

/***/ "./src/patterns/finder/finder.js":
/*!***************************************!*\
  !*** ./src/patterns/finder/finder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/query/finder__query */ "./src/patterns/finder/components/query/finder__query.js");
/* harmony import */ var _components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters/finder__filtersmobile */ "./src/patterns/finder/components/filters/finder__filtersmobile.js");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");
/* harmony import */ var _logic_logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/logic */ "./src/patterns/finder/logic/logic.js");


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
 * Launch the universal Finder.
 *
 * @param {object} props The JSON configuration file for the Finder.
 * @return {object} The React component to render.
 */

function Finder(props) {
  const {
    query,
    funnelbackResponse,
    updating,
    updater,
    clear,
    hasMounted,
    matrixState
  } = Object(_logic_logic__WEBPACK_IMPORTED_MODULE_5__["default"])(props.config, props.initialResults || {}, props.initialQuery, props.element);
  const queryElement = props.config.noQuery && props.config.noQuery === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, queryElement, props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear,
    mobile: true,
    hasMounted: hasMounted,
    matrixState: matrixState
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialQuery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
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

const baseUrl = 'https://www.city.ac.uk/web-services',
      findRootUrl = '/funnelback-16-find',
      suggestRootUrl = '/funnelback-16-suggest',
      maximumSuggestions = 100,
      timeout = 30000;
/**
 * Funnelback search query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} [query] The query string.
 * @param {string} [sortType] The field to sort by.
 * @param {integer} startRank The first result to return.
 * @param {integer} numRank The number of results to return.
 * @param {object} [facets] A map of facets to query strings.
 * @return {Promise} - A promise of search results.
 */

function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, parameters) {
  const fixedParams = {};
  fixedParameters.forEach(param => {
    fixedParams[`${param.name}`] = param.value;
  });
  const params = {},
        paramsKeys = Object.keys(parameters);
  paramsKeys.forEach(key => params[key] = parameters[key]);
  const fixedFacetParams = {};
  fixedFacets.forEach(facet => {
    fixedFacetParams[`meta_${facet.meta}_sand`] = facet.value;
  });
  const facetParams = {},
        facetKeys = Object.keys(facets);
  facetKeys.forEach(key => facetParams[`meta_${key}_sand`] = facets[key]);
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
    params: { ...fixedParams,
      ...fixedFacetParams,
      ...facetParams,
      ...params,
      collection: collection,
      num_ranks: numRank,
      query: query,
      sort: sortType || '',
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
      partial_query: partialQuery,
      show: maximumSuggestions
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

/***/ "./src/patterns/finder/logic/has-mounted.js":
/*!**************************************************!*\
  !*** ./src/patterns/finder/logic/has-mounted.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * custom hook to check if react has mounted
 *
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City, University of London 2019
 */


function useHasMounted() {
  const [hasMounted, setHasMounted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

/* harmony default export */ __webpack_exports__["default"] = (useHasMounted);

/***/ }),

/***/ "./src/patterns/finder/logic/hyper-link.js":
/*!*************************************************!*\
  !*** ./src/patterns/finder/logic/hyper-link.js ***!
  \*************************************************/
/*! exports provided: hyperLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyperLink", function() { return hyperLink; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util */ "./src/util.js");




function remove(obj, key) {
  for (let k in obj) {
    if (k === key) {
      delete obj[k];
    } else if (typeof obj[k] === 'object') {
      remove(obj[k], key);
    }
  }
}

function hyperLink(query, facet, pageNumber, numberRank) {
  const newStartRank = pageNumber && 1 + (pageNumber - 1) * numberRank;
  let newQuery = JSON.parse(JSON.stringify(query)); //deep clone

  facet && facet.type === 'tag' && remove(newQuery, facet.meta);
  const flattenQuery = Object(_util__WEBPACK_IMPORTED_MODULE_0__["flattenObj"])(newQuery);
  return '?' + Object.entries(flattenQuery).filter(key => {
    let param = Object.values(key);

    if (param[1] === '') {
      return false;
    } else {
      switch (param[0]) {
        case 'interacted':
          return false;

        case 'num_rank':
          return false;

        case 'start_rank':
          return false;

        default:
          return true;
      }
    }
  }).map(key => {
    let param = Object.values(key);

    if (/fixedParameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(16)) + '=' + encodeURIComponent(param[1]);
    } else if (/fixedFacets/.test(param[0])) {
      return encodeURIComponent(`meta_${param[0].substring(12)}_sand`) + '=' + encodeURIComponent(param[1]);
    } else if (/parameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(11)) + '=' + encodeURIComponent(param[1]);
    }

    switch (param[0]) {
      case 'collection':
        return encodeURIComponent(param[0]) + '=' + encodeURIComponent(param[1]);

      case 'query':
        return encodeURIComponent(param[0]) + '=' + encodeURIComponent(param[1]);

      case 'sortType':
        return encodeURIComponent('sort') + '=' + encodeURIComponent(param[1]);

      case 'startRank':
        return encodeURIComponent('start_rank') + '=' + encodeURIComponent(facet ? param[1] : newStartRank);

      case 'numRanks':
        return encodeURIComponent('num_rank') + '=' + encodeURIComponent(param[1]);

      default:
        return encodeURIComponent(`meta_${param[0]}_sand`) + '=' + encodeURIComponent(param[1]);
    }
  }).join('&');
}

/***/ }),

/***/ "./src/patterns/finder/logic/logic.js":
/*!********************************************!*\
  !*** ./src/patterns/finder/logic/logic.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _has_mounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-mounted */ "./src/patterns/finder/logic/has-mounted.js");
/* harmony import */ var _replace_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace-history */ "./src/patterns/finder/logic/replace-history.js");
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url-params */ "./src/patterns/finder/logic/url-params.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util */ "./src/util.js");
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_6__);


/**
 * custom hook to check if react has mounted
 *
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City, University of London 2019
 */








function useLogicWrapper(config, results, matrixQuery, element) {
  const oneSecond = 1000,
        scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_4__["reduceMotion"])() ? 0 : oneSecond,
        screenOffsetRatio = 10;
  /**
   * Check if react has mounted
   */

  const hasMounted = Object(_has_mounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // check if we in Matrix

  const matrixState = !hasMounted && matrixQuery ? true : false;
  const params = matrixState ? matrixQuery : new URLSearchParams(window.location.search),
        initialResults = results || {};
  const nonFBParams = config.facetLabels.filter(paramFacet => paramFacet.nonFBParam);
  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/

  const initialQuery = {
    collection: config.collection,
    facets: config.facetLabels.length > 0 && params ? Object(_url_params__WEBPACK_IMPORTED_MODULE_3__["getFacetParams"])(config.facetLabels, params, matrixState) : {},
    parameters: nonFBParams.length > 0 && params ? Object(_url_params__WEBPACK_IMPORTED_MODULE_3__["getNonFBParams"])(config.facetLabels, params, matrixState) : {},
    fixedFacets: config.fixedFacets,
    fixedParameters: config.fixParameters ? config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: hasMounted && params.get('num_ranks') ? params.get('num_ranks') : config.numRanks,
    query: !matrixState && params.get('query') ? params.get('query') : params && params.query ? params.query : '',
    sortType: !matrixState && params.get('query') ? '' : !matrixState && params.get('sort') ? params.get('sort') : config.sort[0].type,
    startRank: !matrixState && params.get('start_rank') ? params.get('start_rank') : params && params.start_rank ? params.start_rank : 1
  };
  /**
   * Dummy, empty Funnelback response object for initial state.
   */

  const initialResponse = Object.keys(initialResults).length > 0 ? Object.freeze(results) : Object.freeze({
    bestBets: [],
    extraSearches: {},
    facets: [],
    results: [],
    spell: null,
    summary: {
      currEnd: 0,
      currStart: 0,
      numRanks: 0,
      totalMatching: 0
    }
  }); // State objects for the Funnelback query and response

  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialQuery);
  const [funnelbackResponse, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialResponse); // Boolean to indicate when a query is in progress

  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.keys(initialResults).length > 0 ? false : true); // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Retrieve Funnelback results

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // preserve the state
    Object(_replace_history__WEBPACK_IMPORTED_MODULE_2__["default"])(query.query, query.startRank, query.facets, query.parameters, query.sortType, config.facetLabels, config.sort[0].type, hasMounted); // indicate a request is in progress

    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_6___default.a.center(element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_funnelback__WEBPACK_IMPORTED_MODULE_5__["find"])(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters); // save the requestToken

    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    }); // when the response from Funnelback arrives,
    // update the results and display them

    request.then(data => {
      setResponse(data);
      setUpdating(false);
    }).then(() => {
      query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_6___default.a.center(element.querySelector('.finder__results h2'), scrollDuration);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]); // update props so child components can update the query

  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  /**
   * @param  {boolean} resetSort - Reset the sort order too?
   */

  const clear = resetSort => {
    const newQuery = query;
    call.cancel();
    newQuery.sortType = resetSort ? config.sort[0].type : newQuery.sortType;
    newQuery.facets = {};
    newQuery.parameters = {};
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    setQuery(newQuery);
    setUpdate(!update);
  };

  return {
    query,
    funnelbackResponse,
    updating,
    updater,
    clear,
    hasMounted,
    matrixState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useLogicWrapper);

/***/ }),

/***/ "./src/patterns/finder/logic/replace-history.js":
/*!******************************************************!*\
  !*** ./src/patterns/finder/logic/replace-history.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return replaceHistory; });


/**
 * Preserve the search state in the URL parameters.
 *
 * @param {string} currQuery The search query.
 * @param {integer} currStartRank The start rank.
 * @param {object[]} currFacets A map of facet meta labels to their values.
 * @param {*} facetLabels Array of facet definitions.
 */
function replaceHistory(currQuery, currStartRank, currFacets, currParameters, currSort, facetLabels, defaultSort, hasMounted) {
  if (hasMounted) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    currSort !== defaultSort && currSort !== '' ? params.set('sort', currSort) : params.delete('sort');
    facetLabels.forEach(facet => {
      if (currFacets[facet.meta]) {
        params.set(`meta_${facet.meta}_sand`, currFacets[facet.meta]);
      } else {
        params.delete(`meta_${facet.meta}_sand`);
      }
    });
    facetLabels.forEach(facet => {
      if (currParameters[facet.meta]) {
        params.set(facet.meta, currParameters[facet.meta]);
      } else {
        params.delete(facet.meta);
      }
    });
    const hasParams = params.toString().length ? '?' : '';
    window.history.replaceState({}, '', `${window.location.pathname}${hasParams}${params.toString()}`);
  }
}

/***/ }),

/***/ "./src/patterns/finder/logic/url-params.js":
/*!*************************************************!*\
  !*** ./src/patterns/finder/logic/url-params.js ***!
  \*************************************************/
/*! exports provided: getNonFBParams, getFacetParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonFBParams", function() { return getNonFBParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacetParams", function() { return getFacetParams; });


/**
 * Retrieve non FB parameters from the URL parameters
 *
 * @param {object[]} facets Array of facet definitions.
 * @param {object} params URLSearchParams object for the current page.
 * @return {object} - Map of facet meta labels to their current value from the URL.
 */
function getNonFBParams(facets, params, matrixState) {
  if (matrixState) {
    return facets.map(facet => {
      const keys = Object.keys(params);
      const param = {};

      if (keys.indexOf(facet.meta) !== -1) {
        param[facet.meta] = params[facet.meta];
      }

      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  } else {
    return facets.filter(facet => facet.nonFBParam).map(facet => {
      const param = {};

      if (params.get(facet.meta)) {
        param[facet.meta] = params.get(facet.meta);
      }

      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  }
}
/**
 * Retrieve current values for facets from the URL parameters.
 *
 * @param {object[]} facets Array of facet definitions.
 * @param {object} params URLSearchParams object for the current page.
 * @return {object} - Map of facet meta labels to their current value from the URL.
 */

function getFacetParams(facets, params, matrixState) {
  if (matrixState) {
    return facets.map(facet => {
      const keys = Object.keys(params);
      const param = {};

      if (keys.indexOf(`meta_${facet.meta}_sand`) !== -1) {
        param[facet.meta] = params[`meta_${facet.meta}_sand`];
      }

      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  } else {
    return facets.map(facet => {
      const param = {};

      if (params.get(`meta_${facet.meta}_sand`)) {
        param[facet.meta] = params.get(`meta_${facet.meta}_sand`);
      }

      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  }
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest, formatTime, formatReactDate, arraySlicer, screenWidth, flattenObj, getVerticalScrollbarWidth, enableBodyScroll, disableBodyScroll */
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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
  const reducedMotionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : false;
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw `Bad response: ${response.status}`;
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_0___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `axiosRequest ${e.fileName} (${window.location})`, true);
    }
  });
}
/**
 * Returns a react fragment formatted time
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted time to local time.
 */

function formatTime(timeString, timeZone) {
  const time = new Date(timeString);
  let timeLabel;

  if (timeZone) {
    let timeOffset = time.getTimezoneOffset() / -60;
    timeLabel = timeOffset === 0 ? '(GMT)' : '(BST)';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", {
    dateTime: `${time.getHours() ? time.getHours() : '00'}:${time.getMinutes() ? time.getMinutes() : '00'}`
  }, time.getHours() ? time.getHours() : '00', ":", time.getMinutes() ? time.getMinutes() : '00', " ", timeLabel);
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
  return day >= eleventh && day <= thirteenth ? 'th' : lastDigit === '1' ? 'st' : lastDigit === '2' ? 'nd' : lastDigit === '3' ? 'rd' : 'th';
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
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
  let result = {}; // loop through the object "ob"

  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);

      for (const j in temp) {
        if (i === 'parameters') {
          result[`${i}-${j}`] = temp[j];
        } else {
          result[j] = temp[j];
        } // Store temp in result

      }
    } else if (Array.isArray(ob[i])) {
      ob[i].forEach(val => {
        if (i === 'fixedFacets') {
          result[`${i}-${val.meta}`] = val.value;
        } else {
          result[`${i}-${val.name}`] = val.value;
        }
      });
    } // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }

  return result;
}
/**
 * function that calculates the scrollbar width
 */

function getVerticalScrollbarWidth() {
  // Creating a div element for helping to calculate scrollbar width
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'; // Appending the div to the body to measure scrollbar width

  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Remove the div from the body

  document.body.removeChild(scrollDiv); // adds scrollbar width as variable to root so can be used by CSS styles

  let root = document.documentElement;
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

/***/ }),

/***/ 2:
/*!*****************************!*\
  !*** multi ./src/finder.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/finder.js */"./src/finder.js");


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=finder.js.map