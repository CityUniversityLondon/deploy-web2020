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
/******/ 		"events": 0
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
/******/ 	deferredModules.push([8,"vendor-dependencies","core","react","vendor-direct","axios"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns_events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/events/events */ "./src/patterns/events/events.js");
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
    const events = document.querySelector('.wrapper--events');
    events && Object(_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__["finderConfig"])(events.dataset.config).then(config => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patterns_events_events__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: config,
        element: events
      }), events);
    });
  }
});

/***/ }),

/***/ "./src/patterns/events/components/filters/events__checkbox__allevents.js":
/*!*******************************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__checkbox__allevents.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Events__Checkbox(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset),
        pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.summary && props.pastEventsResponse.summary.fullyMatching,
        pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.summary && props.pastEventsResponse.summary.partiallyMatching,
        url = props.responseParameter && props.responseParameter.REQUEST_URL && new URL(props.responseParameter.REQUEST_URL),
        params = props.responseParameter && props.responseParameter.REQUEST_URL && new URLSearchParams(url.search.slice(1)),
        toggleChecked = params && params.get('events') === 'past' ? true : false,
        totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;

  const toggleFacet = () => {
    const newQuery = props.query;
    toggleChecked ? newQuery.events = '' : newQuery.events = 'past';
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "finder__filter finder__checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "checkbox",
    id: "past_events--".concat(randomNumber),
    name: "events",
    value: "past",
    onChange: () => toggleFacet(),
    checked: toggleChecked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "finder__checkbox__indicator finder__checkbox__indicator",
    "aria-hidden": "true",
    onClick: () => toggleFacet()
  }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "fa fa-fw fas fa-check icon"
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
    className: "finder__filters__label--always",
    htmlFor: "past_events--".concat(randomNumber)
  }, "Past events", !toggleChecked && totalText && ' (' + totalText + ')'));
}

Events__Checkbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  responseParameter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  pastEventsResponse: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Events__Checkbox);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__filters.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__filters.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events__select */ "./src/patterns/events/components/filters/events__select.js");
/* harmony import */ var _finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../finder/components/filters/finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../finder/components/filters/finder__tag */ "./src/patterns/finder/components/filters/finder__tag.js");
/* harmony import */ var _finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../finder/components/filters/finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../finder/components/filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _events_checkbox_allevents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events__checkbox__allevents */ "./src/patterns/events/components/filters/events__checkbox__allevents.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const pastEventsFullyMatching = props.pastEventsResponse && props.pastEventsResponse.summary && props.pastEventsResponse.summary.fullyMatching ? props.pastEventsResponse.summary.fullyMatching : false;
  const pastEventsPartiallyMatching = props.pastEventsResponse && props.pastEventsResponse.summary && props.pastEventsResponse.summary.partiallyMatching ? props.pastEventsResponse.summary.partiallyMatching : false;
  const pastFullyOrPartiallyMatching = pastEventsFullyMatching ? pastEventsFullyMatching : pastEventsPartiallyMatching ? pastEventsPartiallyMatching : false;
  const clearFiltersDesktop = Object.keys(props.query.facets).length > 0 || props.query.events !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__reset finder__filters__reset--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: props.clear,
    resetSort: false
  })) : null,
        clearFiltersMobile = Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: props.clear,
    resetSort: true
  }) : null;
  const sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_6__["default"], {
    config: props.config,
    query: props.query,
    update: props.update,
    pastEventsUpdate: props.pastEventsUpdate
  })) : null;
  const pastEventsCheckBox = pastFullyOrPartiallyMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_checkbox_allevents__WEBPACK_IMPORTED_MODULE_7__["default"], {
    query: props.query,
    update: props.update,
    responseParameter: props.response.inputParameters,
    pastEventsResponse: props.pastEventsResponse
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', "Filter ".concat(props.config.summariseAs.plural)), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'select':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            pastEventsQuery: props.pastEventsQuery,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            pastEventsUpdate: props.pastEventsUpdate,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        case 'checkbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            pastEventsQuery: props.pastEventsQuery,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            pastEventsUpdate: props.pastEventsUpdate,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        case 'tag':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            pastEventsQuery: props.pastEventsQuery,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            pastEventsUpdate: props.pastEventsUpdate,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        default:
          Object(_util__WEBPACK_IMPORTED_MODULE_8__["gaEvent"])('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), pastEventsCheckBox, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort)));
}

Finder__Filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pastEventsQuery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pastEventsResponse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pastEventsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__filtersmobile.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__filtersmobile.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events__filters */ "./src/patterns/events/components/filters/events__filters.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");





/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City, University of London 2019
 */



 // seems to fix most issues with old iPhones and position: fixed
// may not be necessary long-term, but I was in a hurry


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
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}); // trap tab focus when the filters are open

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_5___default()(getFilters(), {
        initialFocus: getFilters().querySelector('.wrapper--finder__filters--mobile__apply'),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }

    if (display) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__["disableBodyScroll"])(getFilters().querySelector('.wrapper--finder__filters--mobile__filters'));
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__["enableBodyScroll"])(getFilters().querySelector('.wrapper--finder__filters--mobile__filters'));
    }
  }, [display, focusTrap]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const result = totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  const totalMatchingMessage = totalMatching ? "Show ".concat(totalMatching, " ").concat(result) : 'Close';
  const filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Filter");
  const toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "wrapper--finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType ? true : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile",
    "data-open": display,
    ref: mobilefilters => filters = mobilefilters
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_events_filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: props.config,
    query: props.query,
    pastEventsQuery: props.pastEventsQuery,
    response: props.response,
    pastEventsResponse: props.pastEventsResponse,
    update: props.update,
    pastEventsUpdate: props.pastEventsUpdate,
    clear: props.clear
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper--finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, "Updating ", props.summariseAs.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage))))));
}

Finder__FiltersMobile.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pastEventsQuery: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pastEventsResponse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pastEventsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__select.js":
/*!******************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__select.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







/**<
 * @module patterns/finder/components/finder__select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Events__Select(props) {
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
          pastEventsNewQuery = props.pastEventsQuery;
    props.dependencies.map(facet => {
      delete newQuery.facets[facet.meta];
    });

    if (value) {
      newQuery.facets[props.facet.meta] = value;
      pastEventsNewQuery.facets[props.facet.meta] = value;
    } else {
      delete newQuery.facets[props.facet.meta];
      delete pastEventsNewQuery.facets[props.facet.meta];
    }

    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    pastEventsNewQuery.startRank = 1;
    pastEventsNewQuery.misspelling = null;
    pastEventsNewQuery.interacted = true;
    props.update.query(newQuery);
    props.pastEventsUpdate.query(pastEventsNewQuery);
    props.update.results(!props.update.updateState);
  };

  if (props.facet.values.length > hiddenFacets) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "finder__filter finder__select ".concat(currentValue && 'finder__select--selected')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
      name: props.facet.name,
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      onChange: e => setFacet(e.target.value),
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
      value: "",
      id: "meta".concat(props.facet.meta, "all"),
      name: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.noSelection), props.facet.values.map((value, i) => {
      const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());

      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
          key: i,
          value: value.data.toLowerCase()
        }, value.label, currentValue !== value.data ? responseFacetDetails[0].count > 0 && " (".concat(responseFacetDetails[0].count, ")") : '');
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}

Events__Select.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  pastEventsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Events__Select);

/***/ }),

/***/ "./src/patterns/events/components/query/events__query.js":
/*!***************************************************************!*\
  !*** ./src/patterns/events/components/query/events__query.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_components_query_finder_clear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../finder/components/query/finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");






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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
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
  const [partialQuery, setPartialQuery] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.query.query || ''); // Funnelback suggestions for the currently typed text

  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]); // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    cancel: () => {}
  }); // ref for the input field, so we can .focus() it

  const stringLength = 16,
        stringOffset = -4,
        [inputId] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('finder--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset));
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        [activeSuggestionID, setActiveSuggestionID] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
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
    const pastNewQuery = props.pastEventsQuery;
    newQuery.misspelling = null;
    newQuery.query = '';
    newQuery.sortType = props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    pastNewQuery.misspelling = null;
    pastNewQuery.query = '';
    pastNewQuery.sortType = props.config.sort[0].type;
    pastNewQuery.startRank = 1;
    pastNewQuery.interacted = true;
    props.update.query(newQuery);
    props.pastEventsUpdate.query(pastNewQuery);
    props.update.results(!props.update.updateState);
  };

  const submitForm = query => {
    call.cancel();
    setSuggestions([]);
    const newQuery = props.query;
    const pastNewQuery = props.pastEventsQuery;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : '';
    newQuery.sortType = props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    pastNewQuery.misspelling = null;
    pastNewQuery.query = query ? query : partialQuery ? partialQuery : '';
    pastNewQuery.sortType = props.config.sort[0].type;
    pastNewQuery.startRank = 1;
    pastNewQuery.interacted = true;
    props.update.query(newQuery);
    props.pastEventsUpdate.query(pastNewQuery);
    props.update.results(!props.update.updateState);
  };

  const clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_finder_components_query_finder_clear__WEBPACK_IMPORTED_MODULE_6__["default"], {
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


  const suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    key: suggestion,
    role: "option",
    id: inputId + '--' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
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
  const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "finder__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "finder__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "finder__icon fal fa-search icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs.plural)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
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
        const [suggestionsPromise, newCall] = Object(_finder_funnelback__WEBPACK_IMPORTED_MODULE_5__["suggest"])(props.query.collection, e.target.value); // update our request cancel function for the new request

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", {
    className: "finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fal fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}

Finder__Query.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  pastEventsQuery: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  pastEventsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Query);

/***/ }),

/***/ "./src/patterns/events/events.js":
/*!***************************************!*\
  !*** ./src/patterns/events/events.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_events_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/query/events__query */ "./src/patterns/events/components/query/events__query.js");
/* harmony import */ var _components_filters_events_filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filters/events__filters */ "./src/patterns/events/components/filters/events__filters.js");
/* harmony import */ var _components_filters_events_filtersmobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/filters/events__filtersmobile */ "./src/patterns/events/components/filters/events__filtersmobile.js");
/* harmony import */ var _finder_components_results_finder_results__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../finder/components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../util */ "./src/util.js");












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
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_17__["reduceMotion"])() ? 0 : oneSecond,
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


function replaceHistory(currQuery, currStartRank, currFacets, currSort, currEvents, facetLabels, defaultSort) {
  if (window) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    currSort !== defaultSort && currSort !== '' ? params.set('sort', currSort) : params.delete('sort');
    currEvents !== '' ? params.set('events', 'past') : params.delete('events');
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


function Events(props) {
  const params = new URLSearchParams(window.location.search);
  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/

  const initialQuery = {
    collection: props.config.collection,
    facets: props.config.facetLabels.length > 0 ? getFacetParams(props.config.facetLabels, params) : {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: params.get('num_ranks') || props.config.numRanks,
    query: params.get('query') || '',
    sortType: props.config.sort[0].type,
    events: params.get('events') || '',
    startRank: params.get('start_rank') || 1
  };
  /**
   * Dummy, empty Funnelback response object for initial state.
   */

  const initialResponse = Object.freeze({
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
  });
  const pastEventsInitialQuery = {
    collection: props.config.collection,
    facets: props.config.facetLabels.length > 0 ? getFacetParams(props.config.facetLabels, params) : {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: params.get('num_ranks') || props.config.numRanks,
    query: params.get('query') || '',
    sortType: params.get('query') ? '' : params.get('sort') || props.config.sort[0].type,
    events: 'past',
    startRank: params.get('start_rank') || 1
  };
  /**
   * Dummy, empty Funnelback response object for initial state.
   */

  const pastEventsInitialResponse = Object.freeze({
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
  }); // State objects for the Funnelback query and response

  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(initialQuery);
  const [funnelbackResponse, setResponse] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(initialResponse);
  const [pastEventsQuery, setPastEventsQuery] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(pastEventsInitialQuery);
  const [pastEventsFunnelbackResponse, setPastEventsFunnelbackResponse] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(pastEventsInitialResponse); // Boolean to indicate when a query is in progress

  const [updating, setUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(true); // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user

  const [call, setCall] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    cancel: () => {}
  }); // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth

  const [update, setUpdate] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false); // Retrieve Funnelback results

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, query.sortType, query.events, props.config.facetLabels, props.config.sort[0].type); // indicate a request is in progress

    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_16___default.a.center(props.element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_finder_funnelback__WEBPACK_IMPORTED_MODULE_11__["find"])(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.events);
    const [pastEventsRequest, pastEventsRequestToken] = Object(_finder_funnelback__WEBPACK_IMPORTED_MODULE_11__["find"])(pastEventsQuery.collection, pastEventsQuery.fixedFacets, pastEventsQuery.fixedParameters, pastEventsQuery.query, pastEventsQuery.sortType, pastEventsQuery.startRank, pastEventsQuery.numRanks, pastEventsQuery.facets, pastEventsQuery.events); // save the requestToken

    setCall({
      cancel: () => {
        requestToken.cancel();
        pastEventsRequestToken.cancel();
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
      query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_16___default.a.center(props.element.querySelector('.finder__results h2'), scrollDuration);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps

    pastEventsRequest.then(data => {
      setPastEventsFunnelbackResponse(data);
    }).catch(() => {
      setPastEventsFunnelbackResponse(pastEventsInitialResponse);
      setUpdating(false);
    });
  }, [update]); // update props so child components can update the query

  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  const pastEventsUpdater = {
    query: newQuery => setPastEventsQuery(newQuery),
    updateState: update
  };
  /**
   * @param  {boolean} resetSort - Reset the sort order too?
   */

  const clear = resetSort => {
    const newQuery = query;
    const pastNewQuery = pastEventsQuery;
    call.cancel();
    newQuery.sortType = resetSort ? props.config.sort[0].type : newQuery.sortType;
    newQuery.facets = {};
    newQuery.events = '';
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    pastNewQuery.sortType = resetSort ? props.config.sort[0].type : pastNewQuery.sortType;
    pastNewQuery.facets = {};
    pastNewQuery.events = 'past';
    pastNewQuery.startRank = 1;
    pastNewQuery.misspelling = null;
    pastNewQuery.interacted = true;
    setQuery(newQuery);
    setPastEventsQuery(pastNewQuery);
    setUpdate(!update);
  };

  const queryElement = props.config.noQuery && props.config.noQuery === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_query_events_query__WEBPACK_IMPORTED_MODULE_12__["default"], {
    config: props.config,
    query: query,
    pastEventsQuery: pastEventsQuery,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    updating: updating
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, queryElement, props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_filters_events_filtersmobile__WEBPACK_IMPORTED_MODULE_14__["default"], {
    config: props.config,
    query: query,
    pastEventsQuery: pastEventsQuery,
    response: funnelbackResponse,
    pastEventsResponse: pastEventsFunnelbackResponse,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "wrapper--finder__filters--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_filters_events_filters__WEBPACK_IMPORTED_MODULE_13__["default"], {
    config: props.config,
    query: query,
    pastEventsQuery: pastEventsQuery,
    response: funnelbackResponse,
    pastEventsResponse: pastEventsFunnelbackResponse,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    clear: clear
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_finder_components_results_finder_results__WEBPACK_IMPORTED_MODULE_15__["default"], {
    clear: clear,
    config: props.config,
    query: query,
    response: funnelbackResponse,
    pastEventsReponse: pastEventsFunnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    updating: updating
  }));
}

Events.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  element: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__accommodation.js":
/*!********************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__accommodation.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");





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
        thumbnail = props.details.metaData.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.details.metaData.thumbnail,
    alt: "",
    className: "card__thumbnail"
  }),
        level = props.details.metaData.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Level:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_4__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').join(' or '))),
        features = Object.keys(props.details.metaData).filter(meta => ['accessible', 'catered', 'ensuite'].includes(meta) && props.details.metaData[meta] === 'Yes').map(meta => meta.replace(/ensuite/, 'en suite')).sort().join(', '),
        type = props.details.metaData.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Type:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.type.split('|').length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.type).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_4__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.type).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_4__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.type).split('|').join(' or '), features && ' (' + features + ')')),
        price = props.details.metaData.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-fw fa-pound-sign icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Price:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, props.details.metaData.price, " (", props.details.metaData.deposit, " deposit)")),
        transport = props.details.metaData.transport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ' ', "(", calculateTime(props.details.metaData.transport), " minutes by public transport)"),
        distance = props.details.metaData.walk && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-fw fa-walking icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Distance to Northampton Square campus:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, calculateTime(props.details.metaData.walk), " minutes walk to campus", transport));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "card card--accommodation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), distance, type, price, level)));
}

Finder__Results__Accommodation.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
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
    href: props.details.clickTrackingUrl,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_results_accommodation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__results__accommodation */ "./src/patterns/finder/components/cards/finder__results__accommodation.js");
/* harmony import */ var _finder_results_casestudy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__results__casestudy */ "./src/patterns/finder/components/cards/finder__results__casestudy.js");
/* harmony import */ var _finder_results_centre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__results__centre */ "./src/patterns/finder/components/cards/finder__results__centre.js");
/* harmony import */ var _finder_results_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__contact */ "./src/patterns/finder/components/cards/finder__results__contact.js");
/* harmony import */ var _finder_results_course__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__course */ "./src/patterns/finder/components/cards/finder__results__course.js");
/* harmony import */ var _finder_results_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__event */ "./src/patterns/finder/components/cards/finder__results__event.js");
/* harmony import */ var _finder_results_funding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__results__funding */ "./src/patterns/finder/components/cards/finder__results__funding.js");
/* harmony import */ var _finder_results_generic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__results__generic */ "./src/patterns/finder/components/cards/finder__results__generic.js");
/* harmony import */ var _finder_results_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__results__module */ "./src/patterns/finder/components/cards/finder__results__module.js");
/* harmony import */ var _finder_results_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__results__news */ "./src/patterns/finder/components/cards/finder__results__news.js");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__results__profile */ "./src/patterns/finder/components/cards/finder__results__profile.js");


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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_accommodation__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details
      });

    case 'casestudy':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_casestudy__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details
      });

    case 'centre':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_centre__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: props.details,
        query: props.query
      });

    case 'contact':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
        details: props.details,
        query: props.query
      });

    case 'course':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details,
        query: props.query
      });

    case 'event':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_event__WEBPACK_IMPORTED_MODULE_7__["default"], {
        details: props.details
      });

    case 'funding':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details,
        query: props.query
      });

    case 'module':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_module__WEBPACK_IMPORTED_MODULE_10__["default"], {
        details: props.details,
        query: props.query
      });

    case 'news':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_11__["default"], {
        details: props.details
      });

    case 'profile':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_12__["default"], {
        details: props.details,
        query: props.query
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details
      });
  }
}

Finder__Results__Card.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  const subtitle = props.details.metaData.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.status) : props.details.metaData.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.type),
        school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and '))),
        centre = props.details.metaData.centre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-vial icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Research centre:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.centre.split('|').length > 2 ? props.details.metaData.centre.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.centre.split('|').slice(-1) : props.details.metaData.centre.split('|').join(', and ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--casestudy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), subtitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), school, department, centre)));
}

Finder__Results__CaseStudy.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");




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
  const school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and '))),
        subject = props.details.metaData.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.related.split('|').length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').slice(0, -1).join(', ') + ' and ' + Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.related).split('|').join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), subject, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), school, department)));
}

Finder__Results__Centre.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
  const department = props.details.metaData.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Department:"), " ", props.details.metaData.department),
        jobtitle = props.details.metaData.jobtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.jobtitle),
        email = props.details.metaData.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-envelope icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'mailto:' + props.details.metaData.email
  }, props.details.metaData.email)),
        telephone = props.details.metaData.telephone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-phone fa-rotate-90 icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Telephone:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: 'tel:' + props.details.metaData.telephone
  }, props.details.metaData.friendlytelephone)),
        room = props.details.metaData.room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-fw fa-door-open icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Room:"), " ", props.details.metaData.room);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "card card--contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), jobtitle, department, room, email, telephone)));
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _results_formatLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results/formatLabel */ "./src/patterns/finder/components/results/formatLabel.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");




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

function Finder__Results__Course(props) {
  const subtitle = props.details.metaData.type || props.details.metaData.level || null,
        award = props.details.metaData.qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-award icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Award", props.details.metaData.qualification.split('|').length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.qualification.split('|').join(', '))),
        duration = props.details.metaData.duration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fal fa-fw fa-clock icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Duration:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.duration)),
        method = props.details.metaData.method && (props.query.facets && props.query.facets.method || props.query.query.indexOf(props.details.metaData.method) >= 0 || props.details.metaData.method.indexOf('Online') >= 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-book-reader icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Method", props.details.metaData.method.split('|').length > 1 && 's', ' ', "of study:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_4__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.method).split('|').join(', '))),
        location = props.details.metaData.location && props.query.facets && props.query.facets.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.location.split('|').join(', '))),
        school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school)),
        clearing = props.details.metaData.clearing === '1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__label card--course__label--clearing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Available in clearing")),
        external = props.details.indexUrl.indexOf('cass.city.ac.uk') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-external-link icon",
    "aria-label": "(external link)"
  })),
        courseCode = props.details.metaData.code && (['Undergraduate degree', 'Foundation course', 'Postgraduate taught degree'].some(s => props.details.metaData.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.metaData.code) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Course code", props.details.metaData.code.split('|').length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.code.split('|').join('/'))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--course"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, clearing, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(props.details.title, props.query.query) : props.details.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(subtitle, props.query.query) : subtitle && subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.query.query ? Object(_results_formatLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(props.details.metaData.c, props.query.query) : props.details.metaData.c && props.details.metaData.c), school, award, duration, courseCode, method, location)));
}

Finder__Results__Course.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @module patterns/finder/components/cards/finder__results__event
 * @author Web Development
 * @copyright City, University of London 2020
 */

 // import { formatReactDate } from '../../../../util';

function formatShortDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        date = new Date(dateString),
        month = months[date.getUTCMonth()];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card--event__label--shortdate"
  }, month, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, date.getUTCDate()));
}
/**
 * Render a Funnelback result as an event card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */


function Finder__Results__Event(props) {
  const shortDate = props.details.metaData.d && formatShortDate(props.details.metaData.d.split('|')[0]),
        location = props.details.metaData.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw icon fa-map-marker-alt",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.location.split('|').join(', '))),
        audience = props.details.metaData.audience && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw icon fa-users",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Audience:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.audience)),
        thumbnail = props.details.metaData.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.details.metaData.thumbnail,
    alt: "",
    className: "card__thumbnail"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--event card--landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, thumbnail, shortDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), location, audience)));
}

Finder__Results__Event.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");




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
  const school = props.details.metaData.school && props.query.facets && props.query.facets.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', or ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', or '))),
        hardship = props.details.metaData.hardship === '1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card--funding__label--hardship"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Hardship funding")),
        programme = props.details.metaData.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-graduation-cap icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Funding for:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.level.split('|').length > 2 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').slice(0, -1).join(', ') + ' or ' + Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').slice(-1) : Object(_util__WEBPACK_IMPORTED_MODULE_3__["uppercaseFirstLetterLowercaseRest"])(props.details.metaData.level).split('|').join(' or '))),
        feestatus = props.details.metaData.feestatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-globe-europe icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Fee status:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.feestatus.split('|').length > 2 ? props.details.metaData.feestatus.split('|').slice(0, -1).join(', ') + ' or ' + props.details.metaData.feestatus.split('|').slice(-1) : props.details.metaData.feestatus.split('|').join(' or ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--funding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, hardship, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), programme, feestatus, school)));
}

Finder__Results__Funding.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  const school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        department = props.details.metaData.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.department.split('|').length > 2 ? props.details.metaData.department.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.department.split('|').slice(-1) : props.details.metaData.department.split('|').join(', and ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--generic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), school, department)));
}

Finder__Results__Generic.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  const location = props.details.metaData.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-map-marker-alt icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.location)),
        title = props.details.metaData.code ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "card--module__code"
  }, props.details.metaData.code), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.title)),
        school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.school.split('|').length > 2 ? props.details.metaData.school.split('|').slice(0, -1).join(', ') + ', and ' + props.details.metaData.school.split('|').slice(-1) : props.details.metaData.school.split('|').join(', and '))),
        term = props.details.metaData.term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-calendar icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Semester:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.term.split('|').length > 2 ? 'All year' : props.details.metaData.term.split('|').join(' or '))),
        topic = props.details.metaData.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.related.split('|').sort().map((topic, i) => i > 0 ? topic.toLowerCase() : topic).join(', ')),
        specification = props.details.metaData.specification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "far fa-fw fa-file-pdf icon",
    "aria-label": "PDF"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.metaData.specification
  }, "Download module specification"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, title), topic, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c), term, school, location, specification)));
}

Finder__Results__Module.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");




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
  const formattedDate = Object(_util__WEBPACK_IMPORTED_MODULE_3__["formatReactDate"])(new Date(props.details.metaData.d)),
        dateString = props.details.metaData.d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, formattedDate),
        hashtags = props.details.metaData.hashtagtext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fad fa-fw fa-hashtag icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Hashtag", props.details.metaData.hashtagtext.split('|').length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.details.metaData.hashtagtext.split('|').join(', '))),
        thumbnail = props.details.metaData.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.details.metaData.thumbnail,
    alt: "",
    className: "card__thumbnail"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, dateString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__description"
  }, props.details.metaData.c && props.details.metaData.c), hashtags)));
}

Finder__Results__News.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  const school = props.details.metaData.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-university icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "School:"), " ", props.details.metaData.school),
        department = props.details.metaData.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-fw fa-building icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Department:"), " ", props.details.metaData.department),
        headshot = props.details.metaData.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__thumbnail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.details.metaData.thumbnail,
    alt: 'Photo of ' + props.details.title
  })),
        thumbnailExist = props.details.metaData.thumbnail && 'card--profile--thumbnailAvailable',
        country = props.query.facets && props.query.facets.country && props.details.metaData.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fad fa-fw fa-globe-europe icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Country:"), ' ', props.details.metaData.country.split('|').length > 2 ? props.details.metaData.country.split('|').slice(0, -1).join(', ') + ' and ' + props.details.metaData.country.split('|').slice(-1) : props.details.metaData.country.split('|').join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.details.clickTrackingUrl,
    className: "card__anchor card__details ".concat(thumbnailExist)
  }, headshot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card__type"
  }, props.details.metaData.jobtitle), school, department, country)));
}

Finder__Results__Profile.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Profile);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__checkbox.js":
/*!********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__checkbox.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Checkbox(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset),
        toggleChecked = (props.facet.meta in props.query.facets),
        responseFacetValue = props.responseFacet[0] && props.responseFacet[0].categories[0] && props.responseFacet[0].categories[0].values.filter(value => value.data.toLowerCase() === props.facet.checkedValue.toLowerCase());

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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "finder__filter finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "checkbox",
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      name: "meta_".concat(props.facet.meta, "_sand"),
      value: props.facet.checkedValue,
      onChange: () => toggleFacet(),
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: () => toggleFacet()
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
      className: "finder__filters__label--always",
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name, !toggleChecked && responseFacetValue && ' (' + responseFacetValue[0].count + ')'));
  } else {
    return null;
  }
}

Finder__Checkbox.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Checkbox);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "finder__reset",
    type: "button",
    onClick: () => {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-fw fa-times icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__reset__text"
  }, "Reset"));
}

Finder__Reset.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resetSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Reset);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__sort.js":
/*!****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__sort.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




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
  return validSorts.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "finder__select--sort finder__select".concat(props.query.sortType !== props.config.sort[0].type ? ' finder__select--selected' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "finder__select__overline",
    htmlFor: "sort--".concat(randomNumber)
  }, "Sort by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    name: "sort",
    id: "sort--".concat(randomNumber),
    onChange: e => setSort(e.target.value),
    value: props.query.sortType
  }, validSorts.map((sortType, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: i,
      value: sortType.type
    }, sortType.label);
  }))) : null;
}

Finder__Sort.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @module patterns/finder/components/finder__tag
 * @author Web Development
 * @copyright City, University of London 2020
 */



function Finder__Tag(props) {
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

  return props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "finder__filter finder__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => deleteFacet(),
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fa-fw far fa-times icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "finder__tag__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, "Remove filter for "), props.facet.name, ":", ' ', props.facet.values.filter(value => value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase())[0].label))) : null;
}

Finder__Tag.propTypes = {
  facet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
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
    className: "fad fa-fw fa-times-circle icon "
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

/***/ "./src/patterns/finder/components/results/finder__didyoumean.js":
/*!**********************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__didyoumean.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
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

function Finder__DidYouMean(props) {
  const didyoumean = props.query.misspelling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "No ", props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "finder__results__didyoumean"
  }, "Did you mean", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
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
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
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

  pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__controls__button--prev",
    key: "prev",
    type: "button",
    disabled: currentPage === 1 ? true : false,
    onClick: () => {
      changePage(currentPage - 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Previous page")));

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

    pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

  pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__controls__button--next",
    key: "next",
    type: "button",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: () => {
      changePage(currentPage + 1);
    }
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

function Finder__Results(props) {
  const updating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Updating ", props.summariseAs.plural, "\u2026"));
  const resultsClass = 'resultsVariant' in props.config ? "finder__results__list finder__results__list--".concat(props.config.resultsVariant) : 'finder__results__list';

  if (props.response) {
    const summary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    const didYouMean = (props.query.misspelling || props.response.spell) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    }); // if we have more results than will fit on a single page, we need
    // pagination

    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    const results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      start: props.response.summary.currStart,
      className: resultsClass
    }, props.response.bestBets.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      details: card,
      key: card.docNum
    })), props.response.results.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bestBet: false,
      details: card,
      key: card.docNum,
      type: props.type,
      query: props.query
    }))) : null; // render either the results, or a spinner while we wait for Funnelback

    const resultsContent = props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, updating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, didYouMean, summary, results, pagination);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    }, updating);
  }
}

Finder__Results.propTypes = {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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
        sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__select--sort--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filters_finder_sort__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;

  if (props.totalMatching === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results__summary finder__results__summary--noresults"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "finder__results__summary__heading"
    }, "Your search did not match any ", props.summariseAs.plural, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Suggestions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Make sure that all words are spelled correctly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try different keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try more general keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try fewer keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Try fewer filters"), Object.keys(props.query.facets).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        props.clear(true);
      }
    }, "Reset filters")), props.query.query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results__summary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      "aria-live": "polite",
      className: "finder__results__summary__heading"
    }, props.query.query || Object.keys(props.query.facets).length > 0 ? 'Matching' : 'All', ' ', result, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(showing", ' ', props.totalMatching > props.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.currStart)), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.currEnd)), ' ', "of", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatter.format(props.totalMatching)), ' ', result, props.query.query && " for \u201C".concat(props.query.query, "\u201D"), ")")), sort);
  }
}

Finder__Results__Summary.propTypes = {
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
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);






const formatLabel = (label, value) => {
  if (value) {
    return label;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, label.split(value).reduce((prev, current, i) => {
      if (!i) {
        return [current];
      }

      return prev.concat( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "highlightText",
        key: value + current
      }, value), current);
    }, []));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formatLabel);

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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

const baseUrl = 'https://www.city.ac.uk/web-services',
      findRootUrl = '/funnelback-find',
      suggestRootUrl = '/funnelback-suggest',
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

function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, events) {
  const fixedParams = {};
  fixedParameters.forEach(param => {
    fixedParams["".concat(param.name)] = param.value;
  });
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
    params: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, fixedParams), fixedFacetParams), facetParams), {}, {
      collection: collection,
      num_ranks: numRank,
      query: query,
      sort: sortType || '',
      start_rank: startRank,
      events: events || ''
    })
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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: toBool, removeClass, reduceMotion, isVisible, verticallyInWindow, parametersToObject, objectToParameters, gaEvent, appendAll, numberFromString, isMobile, toArray, detectIE, checkIntersectionObserver, createHTMLElement, uppercaseFirstLetterLowercaseRest, axiosRequest, formatReactDate, arraySlicer */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraySlicer", function() { return arraySlicer; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
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

/***/ }),

/***/ 8:
/*!*****************************!*\
  !*** multi ./src/events.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/events.js */"./src/events.js");


/***/ })

/******/ });
//# sourceMappingURL=events.js.map