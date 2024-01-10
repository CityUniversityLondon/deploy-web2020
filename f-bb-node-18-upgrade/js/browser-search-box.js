/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser-search-box.js":
/*!***********************************!*\
  !*** ./src/browser-search-box.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _patterns_search_box_searchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/search-box/searchBox */ "./src/patterns/search-box/searchBox.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");


/**
 * Search box entry
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */





document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const searchBox = document.querySelector('#search-box');
    searchBox && (0,_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_3__.finderConfig)(searchBox.dataset.config).then(config => {
      (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patterns_search_box_searchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        element: searchBox,
        config: config
      }), searchBox);
    });
  }
});

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

/***/ "./src/patterns/search-box/filter/select.js":
/*!**************************************************!*\
  !*** ./src/patterns/search-box/filter/select.js ***!
  \**************************************************/
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
 * @module patterns/search-box/filter/select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Select(props) {
  const currentValue = props.query.facets[props.facet.meta] || '';
  const setFacet = value => {
    const newQuery = props.query;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `search-box__filter search-box__select ${currentValue && 'search-box__select--selected'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "sr-only",
    htmlFor: `meta_${props.facet.meta}_sand--`
  }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: `meta_${props.facet.meta}_sand`,
    id: `meta_${props.facet.meta}_sand--`,
    onChange: e => setFacet(e.target.value),
    value: currentValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "",
    id: `meta${props.facet.meta}all`,
    name: `meta_${props.facet.meta}_sand--`
  }, props.facet.noSelection), props.facet.values.map((value, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: i,
      value: value.data.toLowerCase()
    }, value.label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fas fa-sharp fa-chevron-down icon"
  }));
}
Select.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./src/patterns/search-box/query/query.js":
/*!************************************************!*\
  !*** ./src/patterns/search-box/query/query.js ***!
  \************************************************/
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
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _finder_components_query_finder_clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../finder/components/query/finder__clear */ "./src/patterns/finder/components/query/finder__clear.js");


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
    className: "search-box__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length))));
}

/**
 * Search input field and autocomplete.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Query(props) {
  // save what they're typing
  const [partialQuery, setPartialQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  // Funnelback suggestions for the currently typed text
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it
  const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cancel: () => {}
  });
  // ref for the input field, so we can .focus() it
  const [inputId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('search-box--' + props.query.collection);
  const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    [activeSuggestionID, setActiveSuggestionID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }
  const submitForm = query => {
    call.cancel();
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : '';
    newQuery.sortType = partialQuery ? '' : props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };

  // on clear, make a default request for results
  const clearQuery = () => {
    call.cancel();
    setPartialQuery('');
    setSuggestions([]);
    focusInput();

    // const newQuery = props.query;

    // newQuery.misspelling = null;
    // newQuery.query = '';
    // newQuery.sortType = props.config.sort[0].type;
    // newQuery.startRank = 1;
    // newQuery.interacted = true;

    // props.update.query(newQuery);
    // props.update.results(!props.update.updateState);
  };

  // const submitForm = (query) => {
  //     call.cancel();
  //     setSuggestions([]);

  //     const newQuery = props.query;

  //     newQuery.misspelling = null;
  //     newQuery.query = query ? query : partialQuery ? partialQuery : '';
  //     newQuery.sortType = partialQuery ? '' : props.config.sort[0].type;
  //     newQuery.startRank = 1;
  //     newQuery.interacted = true;

  //     props.update.query(newQuery);
  //     props.update.results(!props.update.updateState);
  // };

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
    className: showSuggestions ? 'search-box__query__suggestions show' : 'search-box__query__suggestions hide'
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
    className: "search-box__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, 'Search'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: "Enter course title or keyword",
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
            e.target.parentNode.querySelector('.search-box__query__suggestions button').focus();
            setActiveSuggestionID(e.target.parentNode.querySelector('.search-box__query__suggestions li').id);
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
        const [suggestionsPromise, newCall] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.suggest)('city-university~sp-web2020-courses', e.target.value);

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
    className: "search-box__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "search-box__query__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fal fa-sharp fa-search search-box__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only search-box__query__submit__text"
  }, "Find"))));
}
Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Query);

/***/ }),

/***/ "./src/patterns/search-box/searchBox.js":
/*!**********************************************!*\
  !*** ./src/patterns/search-box/searchBox.js ***!
  \**********************************************/
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
/* harmony import */ var _query_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query/query */ "./src/patterns/search-box/query/query.js");
/* harmony import */ var _filter_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/select */ "./src/patterns/search-box/filter/select.js");


/**
 * Search box
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */





function SearchBox(props) {
  //const params = new URLSearchParams(window.location.search);

  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/
  const initialQuery = {
    collection: props.config.collection,
    facets: {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: props.config.numRanks,
    query: '',
    sortType: '',
    startRank: 1
  };

  /**
   * Dummy, empty Funnelback response object for initial state.
   */
  //  const initialResponse = Object.freeze({
  //     bestBets: [],
  //     facets: [],
  //     results: [],
  //     spell: null,
  //     summary: {
  //         currEnd: 0,
  //         currStart: 0,
  //         numRanks: 0,
  //         totalMatching: 0,
  //     },
  // });

  // State objects for the Funnelback query and response
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery);
  // const [funnelbackResponse, setResponse] = useState(initialResponse);

  // Boolean to indicate when a query is in progress
  const [updating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user
  // const [call, setCall] = useState({
  //     cancel: () => {},
  // });

  // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth
  const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // update props so child components can update the query
  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  const level = props.config.facetLabels.filter(facet => facet.meta === 'level');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "https://www.city.ac.uk/prospective-students/courses"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Search for a course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filter_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: level[0].meta,
    facet: level[0],
    query: query,
    update: updater
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_query_query__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  }));
}
SearchBox.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

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
/******/ 			"browser-search-box": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["react","vendor-dependencies","axios"], () => (__webpack_require__("./src/browser-search-box.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=browser-search-box.js.map