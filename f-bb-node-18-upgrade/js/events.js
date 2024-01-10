/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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
    const events = document.querySelectorAll('.wrapper--events');
    events && Array.from(events).forEach(event => {
      (0,_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__.finderConfig)(event.dataset.config).then(config => {
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patterns_events_events__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: config,
          element: event
        }), event);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/events/components/filters/events__checkbox__allevents.js":
/*!*******************************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__checkbox__allevents.js ***!
  \*******************************************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__filter finder__checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: `past_events--${randomNumber}`,
    name: "events",
    value: "past",
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
    htmlFor: `past_events--${randomNumber}`
  }, "Past events", !toggleChecked && totalText && ' (' + totalText + ')'));
}
Events__Checkbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  responseParameter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events__Checkbox);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__filters.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__filters.js ***!
  \*******************************************************************/
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
/* harmony import */ var _events_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events__select */ "./src/patterns/events/components/filters/events__select.js");
/* harmony import */ var _finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../finder/components/filters/finder__checkbox */ "./src/patterns/finder/components/filters/finder__checkbox.js");
/* harmony import */ var _finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../finder/components/filters/finder__tag */ "./src/patterns/finder/components/filters/finder__tag.js");
/* harmony import */ var _finder_components_filters_finder_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../finder/components/filters/finder__reset */ "./src/patterns/finder/components/filters/finder__reset.js");
/* harmony import */ var _finder_components_filters_finder_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../finder/components/filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");
/* harmony import */ var _events_checkbox_allevents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events__checkbox__allevents */ "./src/patterns/events/components/filters/events__checkbox__allevents.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const clearFiltersDesktop = Object.keys(props.query.facets).length > 0 || props.query.events !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    update: props.update,
    pastEventsUpdate: props.pastEventsUpdate
  })) : null;
  const pastEventsCheckBox = pastFullyOrPartiallyMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_checkbox_allevents__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: props.query,
    update: props.update,
    responseParameter: props.response.inputParameters,
    pastEventsResponse: props.pastEventsResponse
  }) : null;
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_filters_finder_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          (0,_util__WEBPACK_IMPORTED_MODULE_7__.gaEvent)('jsError', 'JavaScript error', 'finder__filters()', 'Unknown filter type in finder__filters.js', true);
      }
    } else {
      return null;
    }
  }), pastEventsCheckBox, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  pastEventsQuery: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__filtersmobile.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__filtersmobile.js ***!
  \*************************************************************************/
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
/* harmony import */ var _events_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events__filters */ "./src/patterns/events/components/filters/events__filters.js");
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
  const result = totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  const totalMatchingMessage = totalMatching ? `Show ${totalMatching} ${result}` : 'Close';
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: props.config,
    query: props.query,
    pastEventsQuery: props.pastEventsQuery,
    response: props.response,
    pastEventsResponse: props.pastEventsResponse,
    update: props.update,
    pastEventsUpdate: props.pastEventsUpdate,
    clear: props.clear
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, Object.keys(props.query.facets).length === 0 ? 'Close' : totalMatchingMessage))))));
}
Finder__FiltersMobile.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  pastEventsQuery: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/patterns/events/components/filters/events__select.js":
/*!******************************************************************!*\
  !*** ./src/patterns/events/components/filters/events__select.js ***!
  \******************************************************************/
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



function Events__Select(props) {
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
        }, value.label, currentValue !== value.data ? responseFacetDetails[0].count > 0 && ` (${responseFacetDetails[0].count})` : '');
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}
Events__Select.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events__Select);

/***/ }),

/***/ "./src/patterns/events/components/query/events__query.js":
/*!***************************************************************!*\
  !*** ./src/patterns/events/components/query/events__query.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_components_query_finder_clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../finder/components/query/finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");


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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  const [partialQuery, setPartialQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.query.query || '');
  // Funnelback suggestions for the currently typed text
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it
  const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cancel: () => {}
  });
  // ref for the input field, so we can .focus() it
  const stringLength = 16,
    stringOffset = -4,
    [inputId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('finder--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset));
  const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    [activeSuggestionID, setActiveSuggestionID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }

  // on clear, make a default request for results
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
  const clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_query_finder_clear__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clear: () => {
      clearQuery();
    }
  });
  const submitSuggestion = suggestion => {
    setShowSuggestions(false);
    setSuggestions([]);
    focusInput();
    submitForm(suggestion);
  };

  // render suggestions
  const suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? 'finder__query__suggestions show' : 'finder__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: suggestion,
    role: "option",
    id: inputId + '--' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "finder__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__icon fal fa-sharp fa-search icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, `Search ${props.config.summariseAs.plural}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
      setSuggestions([]);
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
        const [suggestionsPromise, newCall] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.suggest)(props.query.collection, e.target.value);

        // update our request cancel function for the new request
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: "finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: () => submitForm()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}
Finder__Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  pastEventsQuery: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Query);

/***/ }),

/***/ "./src/patterns/events/events.js":
/*!***************************************!*\
  !*** ./src/patterns/events/events.js ***!
  \***************************************/
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
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _components_query_events_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/query/events__query */ "./src/patterns/events/components/query/events__query.js");
/* harmony import */ var _components_filters_events_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filters/events__filters */ "./src/patterns/events/components/filters/events__filters.js");
/* harmony import */ var _components_filters_events_filtersmobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filters/events__filtersmobile */ "./src/patterns/events/components/filters/events__filtersmobile.js");
/* harmony import */ var _finder_components_results_finder_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finder/components/results/finder__results */ "./src/patterns/finder/components/results/finder__results.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util */ "./src/util.js");


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
  scrollDuration = (0,_util__WEBPACK_IMPORTED_MODULE_7__.reduceMotion)() ? 0 : oneSecond,
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
function replaceHistory(currQuery, currStartRank, currFacets, currSort, currEvents, facetLabels, defaultSort) {
  if (window) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    currSort !== defaultSort && currSort !== '' ? params.set('sort', currSort) : params.delete('sort');
    currEvents !== '' ? params.set('events', 'past') : params.delete('events');
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
  });

  // State objects for the Funnelback query and response
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery);
  const [funnelbackResponse, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialResponse);
  const [pastEventsQuery, setPastEventsQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pastEventsInitialQuery);
  const [pastEventsFunnelbackResponse, setPastEventsFunnelbackResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pastEventsInitialResponse);

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
    replaceHistory(query.query, query.startRank, query.facets, query.sortType, query.events, props.config.facetLabels, props.config.sort[0].type);

    // indicate a request is in progress
    setUpdating(true);
    query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_6___default().center(props.element.querySelector('.finder__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);

    /**
     * cancel any request already in progress
     *
     * async requests can return out of order
     */
    call.cancel();

    // make a new, asynchronous request to Funnelback
    const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.find)(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.events);
    const [pastEventsRequest, pastEventsRequestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.find)(pastEventsQuery.collection, pastEventsQuery.fixedFacets, pastEventsQuery.fixedParameters, pastEventsQuery.query, pastEventsQuery.sortType, pastEventsQuery.startRank, pastEventsQuery.numRanks, pastEventsQuery.facets, pastEventsQuery.events);

    // save the requestToken
    setCall({
      cancel: () => {
        requestToken.cancel();
        pastEventsRequestToken.cancel();
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
    }).then(() => {
      query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_6___default().center(props.element.querySelector('.finder__results h2'), scrollDuration);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    pastEventsRequest.then(data => {
      setPastEventsFunnelbackResponse(data);
    }).catch(() => {
      setPastEventsFunnelbackResponse(pastEventsInitialResponse);
      setUpdating(false);
    });
  }, [update]);

  // update props so child components can update the query
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
  const queryElement = props.config.noQuery && props.config.noQuery === true ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_query_events_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: query,
    pastEventsQuery: pastEventsQuery,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    updating: updating
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: props.config.facetLabels.length > 0 ? 'finder' : 'finder finder--nofilters',
    onSubmit: e => {
      e.preventDefault();
    }
  }, queryElement, props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_filters_events_filtersmobile__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--finder__filters--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_filters_events_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: props.config,
    query: query,
    pastEventsQuery: pastEventsQuery,
    response: funnelbackResponse,
    pastEventsResponse: pastEventsFunnelbackResponse,
    update: updater,
    pastEventsUpdate: pastEventsUpdater,
    clear: clear
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_components_results_finder_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  config: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__accommodation.js":
/*!********************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__accommodation.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
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
    thumbnail = props.details.listMetadata.thumbnail[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }),
    level = props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "sr-only"
    }, "Level:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, (0,_util__WEBPACK_IMPORTED_MODULE_2__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').join(' or '))),
    features = Object.keys(props.details.listMetadata).filter(meta => ['accessible', 'catered', 'ensuite'].includes(meta) && props.details.listMetadata[meta][0] === 'Yes').map(meta => meta.replace(/ensuite/, 'en suite')).sort().join(', '),
    type = props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "sr-only"
    }, "Type:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.type.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + (0,_util__WEBPACK_IMPORTED_MODULE_2__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join('|')).split('|').slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join('|')).split('|').join(' or '), features && ' (' + features + ')')),
    price = props.details.listMetadata.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-pound-sign icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "sr-only"
    }, "Price:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.price[0], " (", props.details.listMetadata.deposit[0], " deposit)")),
    transport = props.details.listMetadata.transport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, ' ', "(", calculateTime(props.details.listMetadata.transport[0]), " minutes by public transport)"),
    distance = props.details.listMetadata.walk && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-walking icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "sr-only"
    }, "Distance to Northampton Square campus:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, calculateTime(props.details.listMetadata.walk[0]), " minutes walk to campus", transport));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "card card--accommodation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), distance, type, price, level)));
}
Finder__Results__Accommodation.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Accommodation);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__bestbet.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__bestbet.js ***!
  \**************************************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--bestbet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.description))));
}
Finder__Results__BestBet.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__BestBet);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__card.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__card.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _finder_results_research__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__results__research */ "./src/patterns/finder/components/cards/finder__results__research.js");


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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_accommodation__WEBPACK_IMPORTED_MODULE_0__["default"], {
        details: props.details
      });
    case 'casestudy':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_casestudy__WEBPACK_IMPORTED_MODULE_1__["default"], {
        details: props.details
      });
    case 'centre':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_centre__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details,
        query: props.query
      });
    case 'contact':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details,
        query: props.query
      });
    case 'course':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: props.details,
        query: props.query
      });
    case 'event':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_event__WEBPACK_IMPORTED_MODULE_5__["default"], {
        details: props.details
      });
    case 'funding':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details,
        query: props.query
      });
    case 'module':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details,
        query: props.query
      });
    case 'news':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details
      });
    case 'profile':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        details: props.details,
        query: props.query
      });
    case 'research':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_research__WEBPACK_IMPORTED_MODULE_12__["default"], {
        details: props.details,
        query: props.query
      });
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_7__["default"], {
        details: props.details
      });
  }
}
Finder__Results__Card.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Card);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__casestudy.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__casestudy.js ***!
  \****************************************************************************/
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
  const subtitle = props.details.listMetadata.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.status[0]) : props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.type[0]),
    school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
    department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
    centre = props.details.listMetadata.centre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Research centre:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.centre.length > 2 ? props.details.listMetadata.centre.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.centre.slice(-1) : props.details.listMetadata.centre.join(', and ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--casestudy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), subtitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre)));
}
Finder__Results__CaseStudy.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__CaseStudy);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__centre.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__centre.js ***!
  \*************************************************************************/
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
    department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
    subject = props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.related.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join('|')).split('|').slice(0, -1).join(', ') + ' and ' + (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join('|')).split('|').slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join('|')).split('|').join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), subject, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}
Finder__Results__Centre.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Centre);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__contact.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__contact.js ***!
  \**************************************************************************/
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
  const department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), " ", props.details.listMetadata.department[0]),
    school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), " ", props.details.listMetadata.school[0]),
    jobtitle = props.details.listMetadata.jobtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.jobtitle[0]),
    email = props.details.listMetadata.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-envelope icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Email:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: 'mailto:' + props.details.listMetadata.email[0]
    }, props.details.listMetadata.email[0])),
    altemail = props.details.listMetadata.altemail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fad fa-user icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Executive Assistant:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: 'mailto:' + props.details.listMetadata.altemail[0]
    }, props.details.listMetadata.altemail[0])),
    telephone = props.details.listMetadata.telephone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-phone fa-rotate-90 icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Telephone:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: 'tel:' + props.details.listMetadata.telephone[0]
    }, props.details.listMetadata.friendlytelephone[0])),
    room = props.details.listMetadata.room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-door-open icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Room:"), " ", props.details.listMetadata.room[0]),
    enquiry = props.details.listMetadata.enquiryurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-edit icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enquiries:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.details.listMetadata.enquiryurl[0]
    }, props.details.listMetadata.enquirylabel[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), jobtitle, school, department, room, email, telephone, enquiry, altemail)));
}
Finder__Results__Contact.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Contact);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__course.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__course.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
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
function Finder__Results__Course(props) {
  const subtitle = props.details.listMetadata.type && props.details.listMetadata.type[0] || props.details.listMetadata.level && props.details.listMetadata.level[0] || null,
    award = props.details.listMetadata.qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Award", props.details.listMetadata.qualification.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.qualification.join(', '))),
    duration = props.details.listMetadata.duration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fal fa-fw fa-clock icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Duration:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.duration[0])),
    method = props.details.listMetadata.method && props.details.listMetadata.level[0] !== 'Short courses and professional development' && (props.query.facets && props.query.facets.method || props.query.query.indexOf(props.details.listMetadata.method[0]) >= 0 || props.details.listMetadata.method[0].indexOf('Online') >= 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-book-reader icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Method", props.details.listMetadata.method.length > 1 && 's', " of study:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, (0,_util__WEBPACK_IMPORTED_MODULE_3__.uppercaseFirstLetterLowercaseRest)(Array.from(new Set(props.details.listMetadata.method)).join('|') // Remove any duplicates & format
    ).split('|').join(', '))),
    location = props.details.listMetadata.location && props.query.facets && props.query.facets.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.location.join('|') === 'Online|Online' ? 'Online' : props.details.listMetadata.location.join(', '))),
    school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.school.map((e, i) => i === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: i
    }, e.replace('and', '&')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: i
    }, "| ", e)))),
    // City and Business School use different metadata values; check for both
    clearing = props.details.listMetadata.clearing && ['Yes', 'yes'].includes(props.details.listMetadata.clearing[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "card__label card--course__label--clearing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__label card--course__label--clearing"
    }, "Clearing")),
    external = props.details.indexUrl.indexOf('bayes.city.ac.uk') >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })),
    courseCode = props.details.listMetadata.code && (['Undergraduate degree', 'Foundation course', 'Postgraduate taught degree'].some(s => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.code) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Course code", props.details.listMetadata.code.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.code.join('/'))) : null,
    entryYears = props.details.listMetadata.entryyears && (['Undergraduate degree'].some(s => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.entryyears) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Year", props.details.listMetadata.entryyears.length > 1 && 's', ' ', "of entry:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.details.listMetadata.entryyears.join('/'))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "card card--course"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "wrapper--card__label__details"
  }, clearing, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "card__heading"
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.title, props.query.query) : props.details.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "card__type"
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(subtitle, props.query.query) : subtitle && subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "card__description"
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(props.details.listMetadata.c[0], props.query.query) : props.details.listMetadata.c && props.details.listMetadata.c[0]), school, award, duration, courseCode, entryYears, method, location))));
}
Finder__Results__Course.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Course);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__event.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__event.js ***!
  \************************************************************************/
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


/**
 * @module patterns/finder/components/cards/finder__results__event
 * @author Web Development
 * @copyright City, University of London 2020
 */




function formatShortDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    date = new Date(dateString),
    month = months[date.getUTCMonth()];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card--event__label--shortdate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, date.getUTCDate()), " ", month);
}
function compareDates(startDate, endDate, showTime) {
  const sDate = new Date(startDate),
    eDate = new Date(endDate),
    noTimeSDate = new Date(sDate.setUTCHours(0, 0, 0)),
    noTimeEDate = new Date(eDate.setUTCHours(0, 0, 0)),
    time = showTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ", ", (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatTime)(startDate), " - ", (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatTime)(endDate)) : null;
  return noTimeSDate.getTime() === noTimeEDate.getTime() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__type true"
  }, (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatReactDate)(sDate), time) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__type false"
  }, (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatReactDate)(sDate), " - ", (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatReactDate)(eDate), time);
}

/**
 * Render a Funnelback result as an event card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Event(props) {
  const shortDate = props.details.listMetadata.d && formatShortDate(props.details.listMetadata.d[0]),
    location = props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw icon fa-map-marker-alt",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.location.join(', '))),
    audience = props.details.listMetadata.audience && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw icon fa-users",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Audience:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Array.from(new Set(props.details.listMetadata.audience)).join('|').split('|').join('; '))),
    thumbnail = props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }),
    eventStartDate = props.details.listMetadata.d && props.details.listMetadata.d[0],
    eventEndDate = props.details.listMetadata.d && props.details.listMetadata.d[1],
    eventLabel = compareDates(eventStartDate, eventEndDate, parseInt(props.details.listMetadata.displayTime[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--event card--landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, shortDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), eventLabel, location, audience)));
}
Finder__Results__Event.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Event);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__funding.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__funding.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const school = props.details.listMetadata.school && props.query.facets && props.query.facets.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', or ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', or '))),
    hardship = props.details.listMetadata.hardship && props.details.listMetadata.hardship[0] === '1' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card--funding__label--hardship"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hardship funding")),
    programme = props.details.listMetadata.programme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.level.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').join(' or '))),
    level = props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Programme level:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.level.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').slice(0, -1).join(', ') + ' or ' + (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_1__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join('|')).split('|').join(' or '))),
    feestatus = props.details.listMetadata.feestatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Fee status:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.feestatus.length > 2 ? props.details.listMetadata.feestatus.slice(0, -1).join(', ') + ' or ' + props.details.listMetadata.feestatus.slice(-1) : props.details.listMetadata.feestatus.join(' or ')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--funding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, hardship, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title.replace('&amp;', '&')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.type[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), level, programme, feestatus, school)));
}
Finder__Results__Funding.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Funding);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__generic.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__generic.js ***!
  \**************************************************************************/
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
function Finder__Results__Generic(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
    department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(', and '))),
    title = props.details.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "card__heading"
    }, props.details.title.indexOf('School') >= 0 ? props.details.title.replace('&amp;', '&') : props.details.title);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--generic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}
Finder__Results__Generic.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Generic);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__module.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__module.js ***!
  \*************************************************************************/
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
  const location = props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Location:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.location[0])),
    title = props.details.listMetadata.code ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "card--module__code"
    }, props.details.listMetadata.code[0]), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.title)),
    school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ', and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(', and '))),
    term = props.details.listMetadata.term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Semester:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.term.length > 2 ? 'All year' : props.details.listMetadata.term.join(' or '))),
    topic = props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.related.sort().map((topic, i) => i > 0 ? topic.toLowerCase() : topic).join(', ')),
    specification = props.details.listMetadata.specification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-file-pdf icon",
      "aria-label": "PDF"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.details.listMetadata.specification[0]
    }, "Download module specification"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, title), topic, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), term, school, location, specification)));
}
Finder__Results__Module.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Module);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__news.js":
/*!***********************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__news.js ***!
  \***********************************************************************/
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util */ "./src/util.js");


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
  const formattedDate = (0,_util__WEBPACK_IMPORTED_MODULE_1__.formatReactDate)(new Date(props.details.listMetadata.d[0])),
    dateString = props.details.listMetadata.d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, formattedDate),
    hashtags = props.details.listMetadata.hashtagtext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fad fa-fw fa-hashtag icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Hashtag", props.details.listMetadata.hashtagtext.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.hashtagtext.join(', '))),
    thumbnail = props.details.listMetadata.thumbnailTiny && props.details.listMetadata.thumbnailTiny[0] && props.details.listMetadata.thumbnailMax && props.details.listMetadata.thumbnailMax[0] && props.details.listMetadata.thumbnailMobile && props.details.listMetadata.thumbnailMobile[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      srcSet: props.details.listMetadata.thumbnailTiny[0],
      media: "(max-width: 375px)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      srcSet: props.details.listMetadata.thumbnailMax[0],
      media: "(min-width: 3840px)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: props.details.listMetadata.thumbnailMobile[0],
      alt: props.details.title
    })) : props.details.listMetadata.thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, dateString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), hashtags)));
}
Finder__Results__News.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__News);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__profile.js":
/*!**************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__profile.js ***!
  \**************************************************************************/
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
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', props.details.listMetadata.school[0].replace('and', '&')),
    department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), ' ', props.details.listMetadata.department[0]),
    headshot = props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card__thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: 'Photo of ' + props.details.title
    })),
    EDIAmbassadors = props.details.listMetadata.ediAmbassador && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-people-roof icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "EDI Ambassador")),
    thumbnailExist = props.details.listMetadata.thumbnail && 'card--profile--thumbnailAvailable',
    country = props.query.facets && props.query.facets.country && props.details.listMetadata.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fad fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Country:"), ' ', props.details.listMetadata.country.length > 2 ? props.details.listMetadata.country.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.country.slice(-1) : props.details.listMetadata.country.join(' and '));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.liveUrl,
    className: `card__anchor card__details ${thumbnailExist}`
  }, headshot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__type"
  }, props.details.listMetadata.jobtitle && props.details.listMetadata.jobtitle[0]), school, department, country, EDIAmbassadors)));
}
Finder__Results__Profile.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Profile);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__promo.js":
/*!************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__promo.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @module patterns/finder/components/finder__results__summary
 * @author Web Development
 * @copyright City, University of London
 */



function Finder__Results__Promo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--finder-promo promo-area__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area layout__left--full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__content background--pink90"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "promo-area__heading"
  }, props.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.linkRef,
    className: "outline-cta-arrow--bright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.linkText))))))));
}
Finder__Results__Promo.propTypes = {
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  linkRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  linkText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Promo);

/***/ }),

/***/ "./src/patterns/finder/components/cards/finder__results__research.js":
/*!***************************************************************************!*\
  !*** ./src/patterns/finder/components/cards/finder__results__research.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/esm/index.mjs");


/**
 * @module patterns/finder/components/cards/finder__results__research
 * @author Web Development
 * @copyright City, University of London 2021
 */





/**
 * Render a Funnelback result as a PhD research project card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Research(props) {
  const school = props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(' and '))),
    department = props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(' and '))),
    centre = props.details.listMetadata.researchCentre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), ' ', props.details.listMetadata.researchCentre.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Research centres: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Research centre: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.researchCentre.length > 2 ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.researchCentre.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.researchCentre.slice(-1)) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.researchCentre.join(' and ')))),
    academic = props.details.listMetadata.academic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-chalkboard-teacher icon",
      "aria-hidden": "true"
    }), ' ', props.details.listMetadata.academic.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Academics: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Academic: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.academic.length > 2 ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.academic.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.academic.slice(-1)) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.academic.join(' and ')))),
    student = props.details.listMetadata.student && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-users icon",
      "aria-hidden": "true"
    }), ' ', props.details.listMetadata.student.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Students: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Student: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.student.length > 2 ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.student.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.student.slice(-1)) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.student.join(' and ')))),
    degree = props.details.listMetadata.relatedDegree && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-diploma icon",
      "aria-hidden": "true"
    }), ' ', props.details.listMetadata.relatedDegree.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Related degrees: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Related degree: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.relatedDegree.length > 2 ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.relatedDegree.slice(0, -1).join(', ') + ' and ' + props.details.listMetadata.relatedDegree.slice(-1)) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(props.details.listMetadata.relatedDegree.join(' and ')))),
    status = props.details.listMetadata.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-hourglass icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Status:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.details.listMetadata.status[0], " "), props.details.listMetadata.status[0] === 'Completed project' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-check-circle icon",
      "aria-hidden": "true"
    }) : null),
    site = props.details.listMetadata.site && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "far fa-fw fa-globe icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.details.listMetadata.site
    }, "View case study site")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--research"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card--research__title-link"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre, degree, academic, student, status, site)));
}
Finder__Results__Research.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Research);

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

/***/ "./src/patterns/finder/components/query/finder__clear.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/query/finder__clear.js ***!
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "finder__clear",
    type: "button",
    onClick: () => {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__clear__text"
  }, "Clear query"));
}
Finder__Clear.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  resetSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Clear);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__didyoumean.js":
/*!**********************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__didyoumean.js ***!
  \**********************************************************************/
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
  const didyoumean = props.query.misspelling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "finder__results__didyoumean"
  }, "No ", props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "finder__results__didyoumean"
  }, "Did you mean", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__DidYouMean);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__pagination.js":
/*!**********************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__pagination.js ***!
  \**********************************************************************/
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
  pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "pagination__controls__button--prev",
    key: "prev",
    type: "button",
    disabled: currentPage === 1 ? true : false,
    onClick: () => {
      changePage(currentPage - 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Previous page")));
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
    pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      "aria-current": page === currentPage ? 'page' : null,
      "aria-expanded": page === currentPage ? true : false,
      "aria-label": `Open page ${page}`,
      className: className,
      "data-page": page,
      "data-proximity": Math.abs(page - currentPage),
      disabled: page === currentPage ? true : false,
      key: page,
      type: "button",
      onClick: () => {
        changePage(page);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, page)));
    if (page === 1) {
      pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "firstEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    } else if (page === numberOfPages - 1) {
      pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "lastEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    }
  }
  pages.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "pagination__controls__button--next",
    key: "next",
    type: "button",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: () => {
      changePage(currentPage + 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Next page")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "pagination__controls",
    "data-pagecount": numberOfPages
  }, pages));
}
Finder__Pagination.propTypes = {
  currStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  numRanks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  totalMatching: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Pagination);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results.js":
/*!*******************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/patterns/finder/components/cards/finder__results__bestbet.js");
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/patterns/finder/components/results/finder__didyoumean.js");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__pagination */ "./src/patterns/finder/components/results/finder__pagination.js");
/* harmony import */ var _cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/finder__results__promo */ "./src/patterns/finder/components/cards/finder__results__promo.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__summary */ "./src/patterns/finder/components/results/finder__results__summary.js");


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
  const updating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "Updating ", props.summariseAs.plural, "\u2026"));

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
      queryFacetsAll = {
        ...filterFacets,
        searchFacets
      }; // Combine filter and search inputs

    // Promo condition check and define group
    let queryFacetsArray = [];
    let queries = Object.values(queryFacetsAll);
    for (const query of queries) {
      queryFacetsArray.push(query);
    }

    // Remove empty array items
    queries = queries.filter(item => item);

    // Loop query parameters and check if they match any of the promo card conditions
    for (const q of queries) {
      matchedPromoGroup = promoConditions.filter(el => el.school === q || el.level === q || el.related === q || el.subject === q || el.type === q || el.searchQuery1 === q);
    }

    // Assign promo group value and define if promo card conditions are met
    matchedPromoGroup.length > 0 ? (promoCardConditionGroup = matchedPromoGroup[0]['promoGroup']) && (promoCardConditionMet = true) : promoCardConditionMet = false;

    // Filter promo card details to match correct group of data
    matchedPromoGroupDetails = promoDetails.filter(el => el.promoGroup === promoCardConditionGroup);
  }
  const resultsClass = 'resultsVariant' in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : 'finder__results__list';
  if (props.response) {
    const summary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    const didYouMean = (props.query.misspelling || props.response.spell) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_2__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    });

    // if we have more results than will fit on a single page, we need
    // pagination
    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: firstItemData,
          type: props.type,
          query: props.query
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          heading: matchedPromoGroupDetails[0]['heading'],
          body: matchedPromoGroupDetails[0]['body'],
          linkRef: matchedPromoGroupDetails[0]['linkRef'],
          linkText: matchedPromoGroupDetails[0]['linkText']
        }), secondItemOnwardsData.map(s => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: s,
          key: s.docNum,
          type: props.type,
          query: props.query
        })));
      } else {
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, props.response.results.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          bestBet: false,
          details: card,
          key: card.docNum,
          type: props.type,
          query: props.query
        })));
      }
    }
    if (props.response.results && !promoCardConditionMet) {
      results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ol", {
        start: props.response.summary.currStart,
        className: resultsClass
      }, props.response.bestBets.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_0__["default"], {
        details: card,
        key: card.docNum
      })), props.response.results.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bestBet: false,
        details: card,
        key: card.docNum,
        type: props.type,
        query: props.query
      }))) : null;
    }

    // render either the results, or a spinner while we wait for Funnelback
    const resultsContent = props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, updating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, didYouMean, summary, results, pagination);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "finder__results"
    }, updating);
  }
}
Finder__Results.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results);

/***/ }),

/***/ "./src/patterns/finder/components/results/finder__results__summary.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/finder/components/results/finder__results__summary.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_finder_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filters/finder__sort */ "./src/patterns/finder/components/filters/finder__sort.js");


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
    sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "wrapper--finder__select--sort--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filters_finder_sort__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: props.config,
      query: props.query,
      update: props.update
    })) : null;
  if (props.totalMatching === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__results__summary finder__results__summary--noresults"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "finder__results__summary__heading"
    }, "Your search did not match any ", props.summariseAs.plural, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Suggestions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Make sure that all words are spelled correctly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Try different keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Try more general keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Try fewer keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Try fewer filters"), Object.keys(props.query.facets).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      onClick: () => {
        props.clear(true);
      }
    }, "Reset filters")), props.query.query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "finder__results__summary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      "aria-live": "polite",
      className: "finder__results__summary__heading"
    }, props.query.query || Object.keys(props.query.facets).length > 0 ? 'Matching' : 'All', ' ', result, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(showing", ' ', props.totalMatching > props.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, formatter.format(props.currStart)), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, formatter.format(props.currEnd)), ' ', "of", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, formatter.format(props.totalMatching)), ' ', result, props.query.query && ` for “${props.query.query}”`, ")")), sort);
  }
}
Finder__Results__Summary.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  currEnd: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  currStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  numRanks: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  totalMatching: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Summary);

/***/ }),

/***/ "./src/patterns/finder/components/results/formatLabel.js":
/*!***************************************************************!*\
  !*** ./src/patterns/finder/components/results/formatLabel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



const formatLabel = (label, value) => {
  if (value) {
    return label;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, label.split(value).reduce((prev, current, i) => {
      if (!i) {
        return [current];
      }
      return prev.concat( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "highlightText",
        key: value + current
      }, value), current);
    }, []));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLabel);

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
/******/ 			"events": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["react","vendor-dependencies","axios","vendor-direct","core"], () => (__webpack_require__("./src/events.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=events.js.map