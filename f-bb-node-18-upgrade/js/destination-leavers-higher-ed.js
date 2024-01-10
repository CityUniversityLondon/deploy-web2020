/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/destination-leavers-higher-ed.js":
/*!**********************************************!*\
  !*** ./src/destination-leavers-higher-ed.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _patterns_destination_leavers_higher_ed_destinationHE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/destination-leavers-higher-ed/destinationHE */ "./src/patterns/destination-leavers-higher-ed/destinationHE.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");


/**
 * Destination leavers higher education entry
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */




document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const destinations = document.querySelectorAll('.wrapper--destination-leavers-HE');
    destinations && Array.from(destinations).forEach(destination => {
      (0,_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__.finderConfig)(destination.dataset.config).then(config => {
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patterns_destination_leavers_higher_ed_destinationHE__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: config,
          element: destination
        }), destination);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/filters.js":
/*!**********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/filters.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _select_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select__filter */ "./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js");
/* harmony import */ var _finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../finder/components/filters/finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../finder/components/filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const clearFiltersDesktop = Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__filters__reset finder__filters__reset--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_2__["default"], {
      clear: props.clear,
      resetSort: false
    })) : null,
    clearFiltersMobile = Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_2__["default"], {
      clear: props.clear,
      resetSort: true
    }) : null;
  const sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', 'Use the filter to show data that is of interest to you'), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'select':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_select_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });
        default:
          (0,_util__WEBPACK_IMPORTED_MODULE_4__.gaEvent)('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js":
/*!****************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mobile_select_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile__select-filter */ "./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");


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
  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [focusTrap, setFocusTrap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});

  // trap tab focus when the filters are open
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!focusTrap.activate) {
      setFocusTrap((0,focus_trap__WEBPACK_IMPORTED_MODULE_3__.createFocusTrap)(getFilters(), {
        initialFocus: getFilters().querySelector('.wrapper--finder__filters--mobile__apply'),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }
    if (display) {
      focusTrap.activate && focusTrap.activate();
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__.disableBodyScroll)(getFilters().querySelector('.wrapper--finder__filters--mobile__filters'));
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__.enableBodyScroll)(getFilters().querySelector('.wrapper--finder__filters--mobile__filters'));
    }
  }, [display, focusTrap]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const totalMatchingMessage = totalMatching ? 'Show Graduate Outcomes' : 'Close';
  const filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Filters", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Filter");
  const toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "wrapper--finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType ? true : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--mobile",
    "data-open": display,
    ref: mobilefilters => filters = mobilefilters
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mobile_select_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "wrapper--finder__filters--mobile__filters__content--text"
  }, "If you do not see the course you are interested in, please contact the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/prospective-students/career-development/careers-team"
  }, "careers department"), ' ', "at City for full details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "far fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, "Updating ", props.summariseAs.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, !props.query.facets.t ? 'Close' : totalMatchingMessage))))));
}
Finder__FiltersMobile.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js":
/*!************************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/mobile__select-filter.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _select_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select__filter */ "./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js");
/* harmony import */ var _finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../finder/components/filters/finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../finder/components/filters/finder__tag */ "./src/patterns/finder/components/filters/finder__tag.js");
/* harmony import */ var _finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../finder/components/filters/finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../finder/components/filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const clearFiltersDesktop = Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__filters__reset finder__filters__reset--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clear: props.clear,
      resetSort: false
    })) : null,
    clearFiltersMobile = Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clear: props.clear,
      resetSort: true
    }) : null;
  const sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), ' ', `Filter ${props.config.summariseAs.plural}`), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels.map(facet => {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'select':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_select_filter__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });
        case 'checkbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });
        case 'tag':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(funnelbackFacet => funnelbackFacet.name === facet.funnelbackName) : [],
            update: props.update,
            dependencies: props.config.facetLabels.filter(candidate => candidate.dependency === facet.meta)
          });
        default:
          (0,_util__WEBPACK_IMPORTED_MODULE_6__.gaEvent)('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js":
/*!*****************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/filters/select__filter.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  const stringLength = 16,
    stringOffset = -4,
    randomNumber = Math.random().toString(stringLength).slice(stringOffset),
    currentValue = props.query.facets[props.facet.meta] || '';

  // reduce the facet configuration to an array of all possible values for
  // the facet
  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []);

  // reduce the Funnelback response for the facet to an array of valid
  // values for the current query
  const responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : [];

  // count how many possible facets are not valid for the current query
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `finder__filter finder__select ${currentValue && 'finder__select--selected'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      name: props.facet.name,
      id: `meta_${props.facet.meta}_sand--${randomNumber}`,
      onChange: e => setFacet(e.target.value),
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: "",
      id: `meta${props.facet.meta}all`,
      name: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.noSelection), props.facet.values.map((value, i) => {
      const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(responseFacetValue => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());
      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
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
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Select);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/chart.js":
/*!********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/chart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  }

  // Total value of data segments (should be 100)
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
    let d = `M ${x0} ${y0} A 100 100  0 ${largeAngle} ${sweep} ${x1} ${y1}`;

    // If not single segment, build segments proportionately
    if (!(firstSegmentFull || secondSegmentFull) && i < 7) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d: d,
        fill: "none"
      });
    } else if (firstSegmentFull) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
        fill: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
        fill: "none"
      }));
    } else if (secondSegmentFull) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
        fill: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: "32",
        className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
        d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
        fill: "none"
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        key: key,
        strokeWidth: strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d: d,
        fill: "none",
        stroke: "url(#striped)"
      });
    }
  });

  //let scale = 100 / (100 + strokeWidth / 2);

  let legend = data.map(function (e, i) {
    let val = Math.round((e[1] + Number.EPSILON) * 100) / 100;
    let text = `${e[0]}: ${Math.round((100 * val / sum + Number.EPSILON) * 100) / 100}%`;
    let randomNum = `legend-${props.title}${e[0].replace(/\s+/g, '')}${e[1]}${props.chartId}`;
    if (i === 7) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: randomNum,
        className: "chart__legend__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "chart__legend__item__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        height: "23",
        width: "23"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
        cx: "12",
        cy: "10",
        r: "9",
        stroke: "black",
        strokeWidth: "1",
        fill: "url(#striped)"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "chart__legend__item__label"
      }, text));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: randomNum,
        className: "chart__legend__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "fa fa-circle chart__legend__item__icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "chart__legend__item__label"
      }, text));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "chart__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart__columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart--piechart animate animate-svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart--pie-chart__svg-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(100,100) scale(0.8620689655172413)"
  }, valueElements)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart__legend"
  }, legend)));
}
Finder__Chart.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  chartsLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  chartId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Chart);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/companys.js":
/*!***********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/companys.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function Company__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "company-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Company names"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "company-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
Company__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Company__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/content.js":
/*!**********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/content.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "./src/patterns/destination-leavers-higher-ed/components/results/chart.js");
/* harmony import */ var _companys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companys */ "./src/patterns/destination-leavers-higher-ed/components/results/companys.js");
/* harmony import */ var _institutions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./institutions */ "./src/patterns/destination-leavers-higher-ed/components/results/institutions.js");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job */ "./src/patterns/destination-leavers-higher-ed/components/results/job.js");
/* harmony import */ var _salary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary */ "./src/patterns/destination-leavers-higher-ed/components/results/salary.js");
/* harmony import */ var _positiveOutcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positiveOutcome */ "./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js");
/* harmony import */ var _grad_level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grad-level */ "./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js");


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
  const company = props.details.listMetadata.companys ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_companys__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: props.details.listMetadata.companys[0]
    }) : null,
    institutions = props.details.listMetadata.institutions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_institutions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: props.details.listMetadata.institutions[0]
    }) : null,
    jobT = props.details.listMetadata.jobT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_job__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: props.details.listMetadata.jobT[0]
    }) : null,
    salary = props.details.listMetadata.salary ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_salary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: props.details.listMetadata.salary[0]
    }) : null,
    gradLevel = props.details.listMetadata.gradLevel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grad_level__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: props.details.listMetadata.gradLevel[0]
    }) : null,
    positiveOutcome = props.details.listMetadata.positiveOutcome ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_positiveOutcome__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "destination-leaver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "card__heading"
  }, "Showing data for ", props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart-row chart-row--columns"
  }, charts ? charts.map((c, i) => {
    let k = `${c[0].title}${i}${c[0].id}`;
    let chartsLength = charts.length;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: k,
      data: c[0].chart,
      title: c[0].title,
      id: c[0].id,
      chartsLength: chartsLength,
      chartId: parseInt(c[0].id)
    });
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "destination-leaver-content",
    "data-length": count
  }, salary, company, institutions, jobT, gradLevel, positiveOutcome));
}
Finder__Results__Generic.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Generic);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/content__container.js":
/*!*********************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/content__container.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/patterns/destination-leavers-higher-ed/components/results/content.js");


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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    details: props.details
  });
}
Finder__Results__Card.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Card);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js":
/*!*************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/grad-level.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function GradLevel__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Graduate level employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
GradLevel__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradLevel__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/institutions.js":
/*!***************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/institutions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function Institutions__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "institutions-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Institutions of further study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "institutions-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
Institutions__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Institutions__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/job.js":
/*!******************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/job.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function Jobs__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Jobs titles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
Jobs__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jobs__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js":
/*!******************************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/positiveOutcome.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function PositiveOutcome__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Positive outcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jobs-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
PositiveOutcome__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PositiveOutcome__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/results.js":
/*!**********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/results.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content__container */ "./src/patterns/destination-leavers-higher-ed/components/results/content__container.js");


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
  const resultsClass = 'resultsVariant' in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : 'finder__results__list';
  if (props.response && props.query.facets.level && props.query.facets.t) {
    const results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      start: props.response.summary.currStart,
      className: resultsClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      bestBet: false,
      details: props.response.results[0],
      key: props.response.results[0].docNum,
      type: props.type,
      query: props.query
    })) : null;

    // render either the results, or a spinner while we wait for Funnelback
    const resultsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, results);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__results"
    });
  }
}
Finder__Results.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/components/results/salary.js":
/*!*********************************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/components/results/salary.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

function Salary__Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "salary-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Salary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "salary-list",
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
}
Salary__Container.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Salary__Container);

/***/ }),

/***/ "./src/patterns/destination-leavers-higher-ed/destinationHE.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/destination-leavers-higher-ed/destinationHE.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filters/filters */ "./src/patterns/destination-leavers-higher-ed/components/filters/filters.js");
/* harmony import */ var _components_filters_filtersmobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters/filtersmobile */ "./src/patterns/destination-leavers-higher-ed/components/filters/filtersmobile.js");
/* harmony import */ var _components_results_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/results/results */ "./src/patterns/destination-leavers-higher-ed/components/results/results.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util */ "./src/util.js");


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
  scrollDuration = (0,_util__WEBPACK_IMPORTED_MODULE_6__.reduceMotion)() ? 0 : oneSecond,
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
    if (params.get(`meta_${facet.meta}_sand`)) {
      param[facet.meta] = params.get(`meta_${facet.meta}_sand`);
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
function replaceHistory(currQuery, currStartRank, currFacets, currSort, facetLabels, defaultSort) {
  if (window) {
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
    const hasParams = params.toString().length ? '?' : '';
    window.history.replaceState({}, '', `${window.location.pathname}${hasParams}${params.toString()}`);
  }
}

/**
 * Launch the universal Finder.
 *
 * @param {object} props The JSON configuration file for the Finder.
 * @return {object} The React component to render.
 */
function DestinationLeaversHE(props) {
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
    sortType: params.get('query') ? '' : params.get('sort') || props.config.sort[0].type,
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

  // State objects for the Funnelback query and response
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery);
  const [funnelbackResponse, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialResponse);

  // Boolean to indicate when a query is in progress
  const [updating, setUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user
  const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cancel: () => {}
  });

  // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth
  const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Retrieve Funnelback results
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.facets, query.sortType, props.config.facetLabels, props.config.sort[0].type);

    // indicate a request is in progress
    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_5___default().center(props.element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);

    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */
    call.cancel();

    // make a new, asynchronous request to Funnelback
    const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.find)(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets);

    // save the requestToken
    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    });

    // when the response from Funnelback arrives,
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
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  // update props so child components can update the query
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_filters_filtersmobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_filters_filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    clear: clear
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--destination-leavers-HE__info-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you do not see the course you are interested in, please contact the", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/prospective-students/career-development/careers-team"
  }, "careers department"), ' ', "at City for full details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_results_results__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
DestinationLeaversHE.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DestinationLeaversHE);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__checkbox.js":
/*!********************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__checkbox.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  const stringLength = 16,
    stringOffset = -4,
    randomNumber = Math.random().toString(stringLength).slice(stringOffset),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__filter finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      id: `meta_${props.facet.meta}_sand--${randomNumber}`,
      name: `meta_${props.facet.meta}_sand`,
      value: props.facet.checkedValue,
      onChange: () => toggleFacet(),
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: () => toggleFacet()
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "finder__filters__label--always",
      htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`
    }, props.facet.name, !toggleChecked && responseFacetValue && ' (' + responseFacetValue[0].count + ')'));
  } else {
    return null;
  }
}
Finder__Checkbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Checkbox);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__reset.js":
/*!*****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__reset.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "finder__reset",
    type: "button",
    onClick: () => {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__reset__text"
  }, "Reset"));
}
Finder__Reset.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  resetSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Reset);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__sort.js":
/*!****************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__sort.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  return validSorts.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `finder__select--sort finder__select${props.query.sortType !== props.config.sort[0].type ? ' finder__select--selected' : ''}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "finder__select__overline",
    htmlFor: `sort--${randomNumber}`
  }, "Sort by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "sort",
    id: `sort--${randomNumber}`,
    onChange: e => setSort(e.target.value),
    value: props.query.sortType
  }, validSorts.map((sortType, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: i,
      value: sortType.type
    }, sortType.label);
  }))) : null;
}
Finder__Sort.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Sort);

/***/ }),

/***/ "./src/patterns/finder/components/filters/finder__tag.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/filters/finder__tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


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
  return props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__filter finder__tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => deleteFacet(),
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__tag__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Remove filter for "), props.facet.name, ":", ' ', props.facet.values.filter(value => value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase())[0].label))) : null;
}
Finder__Tag.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Tag);

/***/ }),

/***/ "./src/patterns/finder/funnelback.js":
/*!*******************************************!*\
  !*** ./src/patterns/finder/funnelback.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   finderConfig: () => (/* binding */ finderConfig),
/* harmony export */   suggest: () => (/* binding */ suggest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util.js */ "./src/util.js");


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
function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, events) {
  const fixedParams = {};
  fixedParameters.forEach(param => {
    fixedParams[`${param.name}`] = param.value;
  });
  const fixedFacetParams = {};
  fixedFacets.forEach(facet => {
    fixedFacetParams[`meta_${facet.meta}_sand`] = facet.value;
  });
  const facetParams = {},
    facetKeys = Object.keys(facets);
  facetKeys.forEach(key => facetParams[`meta_${key}_sand`] = facets[key]);
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_2__["default"].CancelToken,
    call = CancelToken.source(),
    config = {
      baseURL: baseUrl,
      cancelToken: call.token,
      httpsAgent: new (https__WEBPACK_IMPORTED_MODULE_0___default().Agent)({
        keepAlive: true
      }),
      url: findRootUrl,
      timeout: timeout,
      params: {
        ...fixedParams,
        ...fixedFacetParams,
        ...facetParams,
        collection: collection,
        num_ranks: numRank,
        query: query,
        sort: sortType || '',
        start_rank: startRank,
        events: events || ''
      }
    };
  return [(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.axiosRequest)(config), call];
}

/**
 * Funnelback suggestion query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} partialQuery The string to make suggestions for.
 * @return {Promise} - A promise of an array of suggestion strings.
 */
function suggest(collection, partialQuery) {
  const CancelToken = axios__WEBPACK_IMPORTED_MODULE_2__["default"].CancelToken,
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
  return [(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.axiosRequest)(config), call];
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
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.axiosRequest)(config);
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendAll: () => (/* binding */ appendAll),
/* harmony export */   arraySlicer: () => (/* binding */ arraySlicer),
/* harmony export */   axiosRequest: () => (/* binding */ axiosRequest),
/* harmony export */   checkIntersectionObserver: () => (/* binding */ checkIntersectionObserver),
/* harmony export */   createHTMLElement: () => (/* binding */ createHTMLElement),
/* harmony export */   detectIE: () => (/* binding */ detectIE),
/* harmony export */   formatReactDate: () => (/* binding */ formatReactDate),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   gaEvent: () => (/* binding */ gaEvent),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   numberFromString: () => (/* binding */ numberFromString),
/* harmony export */   objectToParameters: () => (/* binding */ objectToParameters),
/* harmony export */   parametersToObject: () => (/* binding */ parametersToObject),
/* harmony export */   reduceMotion: () => (/* binding */ reduceMotion),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   screenWidth: () => (/* binding */ screenWidth),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   toBool: () => (/* binding */ toBool),
/* harmony export */   uppercaseFirstLetterLowercaseRest: () => (/* binding */ uppercaseFirstLetterLowercaseRest),
/* harmony export */   verticallyInWindow: () => (/* binding */ verticallyInWindow)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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
  let array = [];
  // iterate backwards ensuring that length is an UInt32
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
  }

  // other browser
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
  return (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw `Bad response: ${response.status}`;
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_1__["default"].isCancel(e)) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
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

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0cc0":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?aeb7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"destination-leavers-higher-ed": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb2020"] = self["webpackChunkweb2020"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["react","vendor-dependencies","axios","vendor-direct"], () => (__webpack_require__("./src/destination-leavers-higher-ed.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=destination-leavers-higher-ed.js.map