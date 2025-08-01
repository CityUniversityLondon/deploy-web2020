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
/******/ 		"destination-leavers-higher-ed": 0
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
/******/ 	deferredModules.push([7,"react","vendor-dependencies","axios","vendor-direct"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/destination-leavers-higher-ed.js":
/*!**********************************************!*\
  !*** ./src/destination-leavers-higher-ed.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns_destination_leavers_higher_ed_destinationHE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/destination-leavers-higher-ed/destinationHE */ "./src/patterns/destination-leavers-higher-ed/destinationHE.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");


/**
 * Destination leavers higher education entry
 *
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */




document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const destinations = document.querySelectorAll('.wrapper--destination-leavers-HE');
    destinations && Array.from(destinations).forEach(destination => {
      Object(_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__["finderConfig"])(destination.dataset.config).then(config => {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patterns_destination_leavers_higher_ed_destinationHE__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: config,
          element: destination
        }), destination);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js":
/*!****************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_select_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile__select-filter */ "./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City St George's, University of London 2019
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
  const totalMatchingMessage = totalMatching ? 'Show Graduate Outcomes' : 'Close';
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobile_select_filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    matrixState: props.matrixState,
    updating: props.updating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "wrapper--finder__filters--mobile__filters__content--text"
  }, "If you do not see the course you are interested in, please contact the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/prospective-students/career-development/careers-team"
  }, "careers department"), ' ', "at City for full details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, !props.query.facets.t ? 'Close' : totalMatchingMessage))))));
}

Finder__FiltersMobile.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  summariseAs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js":
/*!************************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select__filter */ "./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js");
/* harmony import */ var _finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../finder/components/filters/finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../finder/components/filters/finder__tag */ "./src/patterns/finder/components/filters/finder__tag.js");
/* harmony import */ var _finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../finder/components/filters/finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../finder/components/filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/finder__filters
 * @author Web Development
 * @copyright City St George's, University of London 2019
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
  const clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__reset finder__filters__reset--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: props.clear,
    resetSort: false,
    matrixState: props.matrixState
  })) : null,
        clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: props.clear,
    resetSort: true,
    matrixState: props.matrixState
  }) : null;
  const sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_6__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  const submit = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters__submit finder__filters__reset--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    className: "finder__query__submit"
  })) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', `Filter ${props.config.summariseAs.plural}`), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets) || props.matrixState) {
      switch (facet.type) {
        case 'select':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select_filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta),
            matrixState: props.matrixState
          });

        case 'checkbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        case 'tag':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });

        default:
          Object(_util__WEBPACK_IMPORTED_MODULE_7__["gaEvent"])('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort, submit)));
}

Finder__Filters.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  updating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js":
/*!*****************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js ***!
  \*****************************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */



function Finder__Select(props) {
  const stringLength = 16,
        stringOffset = -4,
        randomNumber = Math.random().toString(stringLength).slice(stringOffset),
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

  if (props.facet.values.length > hiddenFacets || props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `finder__filter finder__select ${currentValue && 'finder__select--selected'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: `meta_${props.facet.meta}_and--${randomNumber}`
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: `meta_${props.facet.meta}_and`,
      id: `meta_${props.facet.meta}_and--${randomNumber}`,
      onChange: e => setFacet(e.target.value),
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      id: `meta${props.facet.meta}all`,
      name: `meta_${props.facet.meta}_and--${randomNumber}`
    }, props.facet.noSelection), props.facet.values.map((value, i) => {
      const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());

      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: i,
          value: value.data.toLowerCase()
        }, value.label);
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
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Select);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/chart.js":
/*!********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/chart.js ***!
  \********************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Chart(props) {
  const data = props.data && props.data.filter(row => !!(row[0] && row[1])).map(row => [row[0], parseFloat(row[1]) || 0]);
  let firstSegmentFull = false,
      secondSegmentFull = false;

  if (data[0][1] === 100) {
    firstSegmentFull = true;
  }

  if (props.chartsLength === 2) {
    if (data[1][1] === 100) {
      secondSegmentFull = true;
    }
  } // Total value of data segments (should be 100)


  let sum = data.reduce(function (acc, row) {
    return acc + row[1];
  }, 0);
  let strokeWidth = 32;
  let arcAcc = 0;
  let valueElements = data.map(function (row, i) {
    let value = Math.min(1, row[1] / sum);
    let arc = 2 * Math.PI * value;
    let largeAngle = arc > Math.PI ? 1 : 0;
    let sweep = 1;
    let key = `${props.title}${row[0].replace(/\s+/g, '')}${row[1]}${props.chartId}`;
    let x0 = 100 * Math.sin(arcAcc);
    let y0 = -100 * Math.cos(arcAcc);
    arcAcc += arc;
    let x1 = 100 * Math.sin(arcAcc);
    let y1 = -100 * Math.cos(arcAcc);
    let d = `M ${x0} ${y0} A 100 100  0 ${largeAngle} ${sweep} ${x1} ${y1}`; // If not single segment, build segments proportionately

    if (!(firstSegmentFull || secondSegmentFull) && i < 7) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d: d,
        fill: "none"
      });
    } else if (firstSegmentFull) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
        fill: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
        fill: "none"
      }));
    } else if (secondSegmentFull) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
        fill: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
        fill: "none"
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: key,
        strokeWidth: strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d: d,
        fill: "none",
        stroke: "url(#striped)"
      });
    }
  }); //let scale = 100 / (100 + strokeWidth / 2);

  let legend = data.map(function (e, i) {
    let val = Math.round((e[1] + Number.EPSILON) * 100) / 100;
    let text = `${e[0]}: ${Math.round((100 * val / sum + Number.EPSILON) * 100) / 100}%`;
    let randomNum = `legend-${props.title}${e[0].replace(/\s+/g, '')}${e[1]}${props.chartId}`;

    if (i === 7) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: randomNum,
        className: "chart__legend__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "chart__legend__item__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        height: "23",
        width: "23"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "9",
        stroke: "black",
        strokeWidth: "1",
        fill: "url(#striped)"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "chart__legend__item__label"
      }, text));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: randomNum,
        className: "chart__legend__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-circle chart__legend__item__icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "chart__legend__item__label"
      }, text));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "chart__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart__columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart--piechart animate animate-svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart--pie-chart__svg-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(100,100) scale(0.8620689655172413)"
  }, valueElements)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart__legend"
  }, legend)));
}

Finder__Chart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  chartsLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  chartId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Chart);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/companys.js":
/*!***********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/companys.js ***!
  \***********************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Company__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "company-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Company names"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "company-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

Company__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Company__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/content.js":
/*!**********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/content.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart */ "./src/patterns/destination-leavers-higher-ed/components/results/chart.js");
/* harmony import */ var _companys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companys */ "./src/patterns/destination-leavers-higher-ed/components/results/companys.js");
/* harmony import */ var _institutions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./institutions */ "./src/patterns/destination-leavers-higher-ed/components/results/institutions.js");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job */ "./src/patterns/destination-leavers-higher-ed/components/results/job.js");
/* harmony import */ var _salary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salary */ "./src/patterns/destination-leavers-higher-ed/components/results/salary.js");
/* harmony import */ var _positiveOutcome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positiveOutcome */ "./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js");
/* harmony import */ var _grad_level__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grad-level */ "./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js");


/**
 * @module patterns/finder/components/cards/finder__results__generic
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */









/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Generic(props) {
  const company = props.details.listMetadata.companys ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_companys__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: props.details.listMetadata.companys[0]
  }) : null,
        institutions = props.details.listMetadata.institutions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_institutions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: props.details.listMetadata.institutions[0]
  }) : null,
        jobT = props.details.listMetadata.jobT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_job__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: props.details.listMetadata.jobT[0]
  }) : null,
        salary = props.details.listMetadata.salary ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_salary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: props.details.listMetadata.salary[0]
  }) : null,
        gradLevel = props.details.listMetadata.gradLevel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grad_level__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: props.details.listMetadata.gradLevel[0]
  }) : null,
        positiveOutcome = props.details.listMetadata.positiveOutcome ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_positiveOutcome__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: props.details.listMetadata.positiveOutcome[0]
  }) : null;
  const charts = props.details.listMetadata.chart ? props.details.listMetadata.chart.map(d => JSON.parse(d)) : null;
  let count = 0;
  props.details.listMetadata.companys && count++;
  props.details.listMetadata.institutions && count++;
  props.details.listMetadata.jobT && count++;
  props.details.listMetadata.salary && count++;
  props.details.listMetadata.gradLevel && count++;
  props.details.listMetadata.positiveOutcome && count++;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "destination-leaver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "card__heading"
  }, "Showing data for ", props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-row chart-row--columns"
  }, charts ? charts.map((c, i) => {
    let k = `${c[0].title}${i}${c[0].id}`;
    let chartsLength = charts.length;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: k,
      data: c[0].chart,
      title: c[0].title,
      id: c[0].id,
      chartsLength: chartsLength,
      chartId: parseInt(c[0].id)
    });
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "destination-leaver-content",
    "data-length": count
  }, salary, company, institutions, jobT, gradLevel, positiveOutcome));
}

Finder__Results__Generic.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Generic);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/content__container.js":
/*!*********************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/content__container.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/patterns/destination-leavers-higher-ed/components/results/content.js");


/**
 * @module patterns/finder/components/cards/finder__results__card
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */



/**
 * Render a Funnelback result as the appropriate card type.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    details: props.details
  });
}

Finder__Results__Card.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results__Card);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js":
/*!*************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js ***!
  \*************************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function GradLevel__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Graduate level employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

GradLevel__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GradLevel__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/institutions.js":
/*!***************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/institutions.js ***!
  \***************************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Institutions__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "institutions-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Institutions of further study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "institutions-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

Institutions__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Institutions__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/job.js":
/*!******************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/job.js ***!
  \******************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Jobs__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Jobs titles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

Jobs__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Jobs__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js":
/*!******************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js ***!
  \******************************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function PositiveOutcome__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Positive outcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

PositiveOutcome__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PositiveOutcome__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/results.js":
/*!**********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/results.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content__container */ "./src/patterns/destination-leavers-higher-ed/components/results/content__container.js");


/**
 * @module patterns/finder/components/finder__results
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */



/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results(props) {
  const resultsClass = 'resultsVariant' in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : 'finder__results__list';

  if (props.response && props.query.facets.level && props.query.facets.t) {
    const results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      start: props.response.summary.currStart,
      className: resultsClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bestBet: false,
      details: props.response.results[0],
      key: props.response.results[0].docNum,
      type: props.type,
      query: props.query
    })) : null; // render either the results, or a spinner while we wait for Funnelback

    const resultsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, results);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "finder__results"
    });
  }
}

Finder__Results.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  response: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Results);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/salary.js":
/*!*********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/salary.js ***!
  \*********************************************************************************/
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
 * @copyright City St George's, University of London 2019
 */


/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Salary__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "salary-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Salary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "salary-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}

Salary__Container.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Salary__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/destinationHE.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/destinationHE.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_filters_filtersmobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters/filtersmobile */ "./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js");
/* harmony import */ var _components_results_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/results/results */ "./src/patterns/destination-leavers-higher-ed/components/results/results.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _finder_logic_replace_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../finder/logic/replace-history */ "./src/patterns/finder/logic/replace-history.js");
/* harmony import */ var _finder_logic_url_params__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../finder/logic/url-params */ "./src/patterns/finder/logic/url-params.js");
/* harmony import */ var _finder_logic_has_mounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../finder/logic/has-mounted */ "./src/patterns/finder/logic/has-mounted.js");


/**
 * Universal finder
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City St George's, University of London 2019
 */










const oneSecond = 1000,
      scrollDuration = Object(_util__WEBPACK_IMPORTED_MODULE_6__["reduceMotion"])() ? 0 : oneSecond,
      screenOffsetRatio = 10;
/**
 * Launch the universal Finder.
 *
 * @param {object} props The JSON configuration file for the Finder.
 * @return {object} The React component to render.
 */

function DestinationLeaversHE(props) {
  /**
   * Check if react has mounted
   */
  const hasMounted = Object(_finder_logic_has_mounted__WEBPACK_IMPORTED_MODULE_9__["default"])(); // check if we in Matrix

  const matrixState = !hasMounted && props.initialQuery;
  const params = matrixState ? props.initialQuery : new URLSearchParams(window.location.search),
        initialResults = props.initialResults || {};
  const nonFBParams = props.config.facetLabels.filter(paramFacet => paramFacet.nonFBParam);
  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/

  const initialQuery = {
    collection: props.config.collection,
    dxp: props.config.dxp ? props.config.dxp : false,
    facets: props.config.facetLabels.length > 0 && params ? Object(_finder_logic_url_params__WEBPACK_IMPORTED_MODULE_8__["getFacetParams"])(props.config.facetLabels, params, matrixState) : {},
    parameters: nonFBParams.length > 0 && params ? Object(_finder_logic_url_params__WEBPACK_IMPORTED_MODULE_8__["getNonFBParams"])(props.config.facetLabels, params, matrixState) : {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: hasMounted && params.get('num_ranks') ? params.get('num_ranks') : props.config.numRanks,
    query: !matrixState && params.get('query') ? params.get('query') : params && params.query ? params.query : '',
    sortType: !matrixState && params.get('query') ? '' : !matrixState && params.get('sort') ? params.get('sort') : params && params.sort && typeof params.sort !== 'function' ? params.sort : props.config.sort,
    startRank: !matrixState && params.get('start_rank') ? params.get('start_rank') : params && params.start_rank ? params.start_rank : 1
  };
  /**
   * Dummy, empty Funnelback response object for initial state.
   */

  const initialResponse = Object.keys(initialResults).length > 0 ? Object.freeze(initialResults) : Object.freeze({
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
    Object(_finder_logic_replace_history__WEBPACK_IMPORTED_MODULE_7__["default"])(query.query, query.startRank, query.facets, query.parameters, query.sortType, props.config.facetLabels, props.config.sort[0].type, hasMounted); // indicate a request is in progress

    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_5___default.a.center(props.element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);
    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */

    call.cancel(); // make a new, asynchronous request to Funnelback

    const [request, requestToken] = Object(_finder_funnelback__WEBPACK_IMPORTED_MODULE_2__["find"])(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters, props.config.dxp ? props.config.dxp : false); // save the requestToken

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
    newQuery.sortType = resetSort ? props.config.sort[0].type : newQuery.sortType;
    newQuery.facets = {};
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    setQuery(newQuery);
    setUpdate(!update);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filters_filtersmobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear,
    matrixState: matrixState
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper--destination-leavers-HE__info-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you do not see the course you are interested in, please contact the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/prospective-students/career-development/careers-team"
  }, "careers department"), ' ', "at City for full details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_results_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clear: clear,
    config: props.config,
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    updating: updating,
    matrixState: matrixState
  }));
}

DestinationLeaversHE.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialQuery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DestinationLeaversHE);

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
 * @copyright City St George's, University of London 2019
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
      id: `meta_${props.facet.meta}_and--${randomNumber}`,
      name: `meta_${props.facet.meta}_and`,
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
      htmlFor: `meta_${props.facet.meta}_and--${randomNumber}`
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
 * @copyright City St George's, University of London 2019
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
 * @copyright City St George's, University of London 2020
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
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/patterns/finder/logic/has-mounted.js");


/**
 * @module patterns/finder/components/finder__tag
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */





function Finder__Tag(props) {
  const hasMounted = Object(_logic_has_mounted__WEBPACK_IMPORTED_MODULE_3__["default"])();
  if (!hasMounted) return null; // reduce the facet configuration to an array of all possible values for
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

  const labelText = props.query.facets[props.facet.meta] && props.facet.values.length >= hiddenFacets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "finder__tag__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Remove filter for "), props.facet.name, ":", ' ', props.facet.values.filter(value => value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase())[0].label));
  const ssrHiddenField = props.matrixState && props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: `meta_${props.facet.meta}_and`,
    value: props.query.facets[props.facet.meta]
  }) : null;

  if (props.facet.values.length >= hiddenFacets && props.query.facets[props.facet.meta]) {
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
  matrixState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Finder__Tag);

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
 * @copyright City St George's, University of London 2019
 */



/**
 * LAUNCH: change web2020.city.ac.uk to www.city.ac.uk
 */

const baseUrl = 'https://www.citystgeorges.ac.uk/web-services',
      dxpBaseUrl = 'https://www.citystgeorges.ac.uk/web-services/dxp-fb',
      findRootUrl = '/funnelback-16-find',
      dxpFindRootUrl = '/funnelback-dxp-find',
      dxpSuggestRootUrl = '/funnelback-dxp-suggest',
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

function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, parameters, dxp) {
  const fixedParams = {};
  fixedParameters.forEach(param => {
    fixedParams[`${param.name}`] = param.value;
  });
  const params = {},
        paramsKeys = Object.keys(parameters);
  paramsKeys.forEach(key => params[key] = parameters[key]);
  const fixedFacetParams = {};
  fixedFacets.forEach(facet => {
    fixedFacetParams[`meta_${facet.meta}_and`] = facet.value;
  });
  const facetParams = {},
        facetKeys = Object.keys(facets);
  facetKeys.forEach(key => facetParams[`meta_${key}_and`] = facets[key]);
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken,
        call = CancelToken.source(),
        config = {
    baseURL: dxp ? dxpBaseUrl : baseUrl,
    cancelToken: call.token,
    httpsAgent: new https__WEBPACK_IMPORTED_MODULE_1___default.a.Agent({
      keepAlive: true
    }),
    url: dxp ? dxpFindRootUrl : findRootUrl,
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

function suggest(collection, partialQuery, dxp) {
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken,
        call = CancelToken.source(),
        config = {
    baseURL: dxp ? dxpBaseUrl : baseUrl,
    cancelToken: call.token,
    url: dxp ? dxpSuggestRootUrl : suggestRootUrl,
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
 * @copyright City St George's, University of London 2019
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
      return encodeURIComponent(`meta_${param[0].substring(12)}_and`) + '=' + encodeURIComponent(param[1]);
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
        return encodeURIComponent(`meta_${param[0]}_and`) + '=' + encodeURIComponent(param[1]);
    }
  }).join('&');
}

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
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-params */ "./src/patterns/finder/logic/url-params.js");



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
    const searchURLParams = new URLSearchParams(window.location.search);
    const params = Object(_url_params__WEBPACK_IMPORTED_MODULE_0__["replaceAndDeleteKeys"])(searchURLParams, '_sand', '_and');
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    currSort !== defaultSort && currSort !== '' ? params.set('sort', currSort) : params.delete('sort');
    facetLabels.forEach(facet => {
      if (currFacets[facet.meta]) {
        params.set(`meta_${facet.meta}_and`, currFacets[facet.meta]);
      } else {
        params.delete(`meta_${facet.meta}_and`);
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
/*! exports provided: replaceAndDeleteKeys, getNonFBParams, getFacetParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAndDeleteKeys", function() { return replaceAndDeleteKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonFBParams", function() { return getNonFBParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacetParams", function() { return getFacetParams; });


/**
 * Search and replace substring in Key on URLSearchParams
 * remove when urls have been replace on Matrix
 *
 * @param {object} params URLSearchParams object for the current page.
 * @param {string} target substring to replace
 * @param {replacement} replacement substring to replace
 * @return {object} - URLSearchParams object of new replace keys.
 */
function replaceAndDeleteKeys(params, target, replacement) {
  const entries = Array.from(params.entries());

  for (const [key, value] of entries) {
    if (key.includes(target)) {
      const newKey = key.replace(target, replacement);
      params.set(newKey, value); // Add new key

      params.delete(key); // Delete old key
    }
  }

  return params;
}
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
    const updatedParams = params && replaceAndDeleteKeys(params, '_sand', '_and');
    return facets.filter(facet => facet.nonFBParam).map(facet => {
      const param = {};

      if (updatedParams.get(facet.meta)) {
        param[facet.meta] = updatedParams.get(facet.meta);
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

      if (keys.indexOf(`meta_${facet.meta}_and`) !== -1) {
        param[facet.meta] = params[`meta_${facet.meta}_and`];
      }

      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  } else {
    const updatedParams = params && replaceAndDeleteKeys(params, '_sand', '_and');
    return facets.map(facet => {
      const param = {};

      if (updatedParams.get(`meta_${facet.meta}_and`)) {
        param[facet.meta] = updatedParams.get(`meta_${facet.meta}_and`);
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

/***/ 7:
/*!****************************************************!*\
  !*** multi ./src/destination-leavers-higher-ed.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rof/src/github.com/CityUniversityLondon/web2020/src/destination-leavers-higher-ed.js */"./src/destination-leavers-higher-ed.js");


/***/ })

/******/ });
//# sourceMappingURL=destination-leavers-higher-ed.js.map