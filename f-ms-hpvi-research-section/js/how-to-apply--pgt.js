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
/******/ 	deferredModules.push([6,"vendor-dependencies","core","react","vendor-direct","axios"]);
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/how-to-apply/how-to-apply--pgt */ "./src/patterns/how-to-apply/how-to-apply--pgt.js");
/* harmony import */ var _patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/how-to-apply/pgt-data */ "./src/patterns/how-to-apply/pgt-data.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! edn-to-js */ "./node_modules/edn-to-js/dist/main.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(edn_to_js__WEBPACK_IMPORTED_MODULE_5__);




/**
 * How to apply PGT entry
 *
 * @author Web Development
 * @copyright City, University of London 2020
 */





document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const howToApplyCTAs = document.querySelectorAll('.how-to-apply--pgt--js');
    howToApplyCTAs && Array.from(howToApplyCTAs).forEach(howToApply => {
      Object(_patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_4__["howToApplyConfig"])(howToApply.dataset.config).then(config => {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_3__["default"], {
          config: edn_to_js__WEBPACK_IMPORTED_MODULE_5___default()(config),
          element: howToApply
        }), howToApply);
      });
    });
  }
});

/***/ }),

/***/ "./src/patterns/how-to-apply/buttons/apply.js":
/*!****************************************************!*\
  !*** ./src/patterns/how-to-apply/buttons/apply.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplyLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function ApplyLinks(props) {
  if (props.data) {
    return props.data.map((d, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index,
        className: "apply"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: d['link']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, d.text), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "far fa-external-link",
        "aria-label": "(external link)"
      })));
    });
  }
}

/***/ }),

/***/ "./src/patterns/how-to-apply/how-to-apply--pgt.js":
/*!********************************************************!*\
  !*** ./src/patterns/how-to-apply/how-to-apply--pgt.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
/* harmony import */ var _buttons_apply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/apply */ "./src/patterns/how-to-apply/buttons/apply.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_5__);




/**
 * How to apply for postgraduate taught degrees
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/how-to-apply/how-to-apply--pgt
 * @author Web Development
 * @copyright City, University of London 2020
 */





/**
 * Launch the How to apply modal.
 *
 * @param {object} props The JSON configuration file for the modal.
 * @return {object} The React component to render.
 */

function HowToApply(props) {
  let entryPoints = props.config;
  const [modalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        [firstStep, setFirstStep] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        // Controls 'Start again' visibility
  [progressQualification, setProgressQualification] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        [progressRoute, setProgressRoute] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        [progressDate, setProgressDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        [progressMethod, setProgressMethod] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        [furtherStepsPendingIndicator, setFurtherStepsPendingIndicator] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        [windowPrompt, setWindowPrompt] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Choose the qualification you wish to apply for:'),
        promptQualification = 'Choose the qualification you wish to apply for:',
        promptRoute = 'Choose the route you wish to apply for:',
        promptEntryPoint = 'Choose the entry point you wish to apply for:',
        furtherStepsPending = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-circle icon",
    "aria-hidden": "true"
  }))));
  let [selectionButtonQualification, setSelectionButtonQualification] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionLinkQualification, setSelectionLinkQualification] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionButtonRoute, setSelectionButtonRoute] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionLinkRoute, setSelectionLinkRoute] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionButtonDate, setSelectionButtonDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionLinkDate, setSelectionLinkDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionHeadingLocationOne, setSelectionHeadingLocationOne] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionButtonLocationOneDate, setSelectionButtonLocationOneDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      [selectionLinkLocationOneDate, setSelectionLinkLocationOneDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      [selectionHeadingLocationTwo, setSelectionHeadingLocationTwo] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      [selectionButtonLocationTwoDate, setSelectionButtonLocationTwoDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      [selectionLinkLocationTwoDate, setSelectionLinkLocationTwoDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      [selectionLinkMethod, setSelectionLinkMethod] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedQualificationData,
      selectedQualificationValue,
      selectedRouteData,
      selectedRouteValue,
      selectedDateData,
      selectedDateValue;
  /**
   * Clear any previously rendered selection buttons/links from the state to prevent superfluous button/link rendering
   */

  function clearSelectionOptions() {
    setSelectionButtonQualification();
    setSelectionLinkQualification();
    setSelectionButtonRoute();
    setSelectionLinkRoute();
    setSelectionHeadingLocationOne();
    setSelectionButtonLocationOneDate();
    setSelectionLinkLocationOneDate();
    setSelectionHeadingLocationTwo();
    setSelectionButtonLocationTwoDate();
    setSelectionLinkLocationTwoDate();
    setSelectionButtonDate();
    setSelectionLinkDate();
    setSelectionLinkMethod();
  }
  /**
   * Convert raw date values to full month/year for rendering to buttons.
   *
   * @param {string} sourceDate The unformatted date string.
   */


  function formatDate(sourceDate) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let formattedDate = new Date(sourceDate);
    return `${months[formattedDate.getUTCMonth()]} ${formattedDate.getUTCFullYear()}`;
  }
  /**
   * Completed programme, route and dates filter. Analyse methods data.
   *
   * @param {object} data The filtered data record data, where methods are at the top level.
   */


  function filterMethodsData(methods, dateSpecificPrompt) {
    // Methods of study pre-selection prompt text. If one date exist, this will display in the prompt text; if multiple dates these will render as buttons
    dateSpecificPrompt ? setWindowPrompt(dateSpecificPrompt) : null; // Clear any previously rendered selection buttons/links from the state to prevent superfluous button/link rendering

    clearSelectionOptions(); // Variables scoped to this function

    let qualNav, routeNav, dateNav, methodNav;
    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        // Load qualification select; clear route, date and method from progress navigation
        filterQualificationData(entryPoints);
        setProgressRoute();
        setProgressDate();
        setProgressMethod();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    selectedRouteData ? routeNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        // Load route select; clear date and method from progress navigation
        setProgressDate();
        setProgressMethod();

        if (selectedQualificationData) {
          filterRouteData(selectedQualificationData[0]['options']);
        } else {
          filterQualificationData(entryPoints);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Route"))) : routeNav = null;
    setProgressRoute(routeNav);
    selectedDateData ? dateNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        // Load date select; clear method from progress navigation
        setProgressMethod();

        if (selectedRouteData) {
          filterDatesData(selectedRouteData[0]['options']);
        } else if (selectedQualificationData) {
          filterRouteData(selectedQualificationData[0]['options']);
        } else {
          filterQualificationData(entryPoints);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Entry point"))) : dateNav = null;
    setProgressDate(dateNav); // Method loads apply links and, if present, will always be the last step, therefore progress icon does nothing on click

    methodNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__current"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-circle icon"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Method of study")));
    setProgressMethod(methodNav); // Final modal step; remove further steps pending indicator

    setFurtherStepsPendingIndicator();
    let methodLinks = [];
    let linkOptions;
    methods.map(m => {
      const methodLink = {
        text: m.header,
        link: m.options.apply
      };
      methodLinks.push(methodLink);
      linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: methodLinks
      });
      setSelectionLinkMethod(linkOptions);
    });
  }

  function filterLocation(data, location, heading) {
    let uniqueLocationDataArray = [];
    data.map(d => {
      let uniqueLocationData = { ...d,
        options: d.options.filter(e => e.header === location)
      };
      uniqueLocationDataArray.push(uniqueLocationData);
    }); // Gather location information for header

    let locations = [];
    uniqueLocationDataArray.map(fd => {
      fd['options'][0] ? locations.push(fd['options'][0]['header']) : null;
    }); // Remove duplicate locations

    locations = locations.filter((v, i, a) => a.indexOf(v) === i); // Create heading

    let headingVal = locations.map(l => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: l
    }, l)); // Create buttons

    let buttonVal = uniqueLocationDataArray.map(fd => {
      if (fd['options'].length > 0) {
        if (fd['options'][0]['options'].length > 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            key: fd
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            "data-date-src": fd['header'],
            onClick: e => {
              let dateSrc = e.target.getAttribute('data-date-src');
              selectedDateValue = formatDate(dateSrc);
              selectedDateData = data.filter(fd => fd.header === dateSrc);
              filterMethodsData(selectedDateData[0]['options'][0]['options'], 'Apply online now:');
              setFirstStep(false);
            }
          }, formatDate(fd['header']))));
        } else {
          const dateLink = {
            text: formatDate(fd.header),
            link: fd['options'][0]['options'][0]['options']['apply']
          };
          let locationDateLinks = [];
          locationDateLinks.push(dateLink);
          locationDateLinks = Array.from(new Set(locationDateLinks.map(a => a.text))).map(text => {
            return locationDateLinks.find(a => a.text === text);
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_3__["default"], {
            data: locationDateLinks
          });
        }
      }
    });
    uniqueLocationDataArray.map(() => {
      if (heading === '#location-1') {
        setSelectionHeadingLocationOne(headingVal);
        setSelectionButtonLocationOneDate(buttonVal);
      } else if (heading === '#location-2') {
        setSelectionHeadingLocationTwo(headingVal);
        setSelectionButtonLocationTwoDate(buttonVal);
      }
    });
  }
  /**
   * Completed programme and route filter. Analyse dates data.
   *
   * @param {object} data The filtered data record data, where dates are at the top level.
   */


  function filterDatesData(data) {
    // Date pre-selection prompt text
    setWindowPrompt(promptEntryPoint); // data.length === 1 ? setPromptMethod('single') : setPromptMethod('multiple');
    // setDatesData(data[0]['header']);
    // Clear any previously rendered selection buttons/links from the state to prevent superfluous button/link rendering

    clearSelectionOptions(); // Empty relevant state variables to remove superfluous progress navigation rendering

    setProgressMethod(); // Clear data stored from previous selections

    selectedDateData = null; // Variables scoped to this function

    let buttonOptions,
        linkOptions,
        dateButtons = [],
        dateLinks = [],
        locationOptions = [],
        locationsAll = [],
        qualNav,
        routeNav,
        dateNav,
        dateLink; // Progress indicator; display selected qualification and route values

    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    selectedRouteData ? routeNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Route"))) : routeNav = null;
    setProgressRoute(routeNav); // Method loads apply links and, if present, will always be the last step, therefore progress icon does nothing on click

    if (selectedDateData) {
      dateNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "how-to-apply--pgt--js__modal__progress__current"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "fas fa-circle icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__text"
      }, "Entry point")));
    } else {
      dateNav = null;
    }

    setProgressDate(dateNav);
    data.map(d => {
      let locations = d['options'];
      locations.map(l => {
        let methods = l['options'];
        methods.map(() => {
          // Multiple dates; print buttons
          if (data.length > 1 || data[0]['options'].length > 1) {
            // Date selection required: set progress indicator to route and remove methods
            selectedDateValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
              className: "how-to-apply--pgt--js__modal__progress__current"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__wrapper"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__circle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "fas fa-circle icon"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__text"
            }, "Entry point")));
            setProgressDate(selectedDateValue);
            setProgressMethod(); // Calculate number of locations

            locations.map(lo => {
              locationOptions.push(lo.header);
            });
            locationOptions = locationOptions.reduce(function (a, i) {
              a.indexOf(i) === -1 ? a.push(i) : null;
              return a;
            }, []); // Multiple locations, multiple dates => create array of objects per location

            if (locationOptions.length > 1) {
              locationOptions.map(lo => {
                let filteredData = data.filter(fd => fd['options'][0]['header'] === lo);
                locationsAll.push(filteredData);
              });
              let uniqueLocations = [];
              data.map(d => {
                let dates = d['options'];
                dates.map(date => {
                  uniqueLocations.push(date.header);
                });
              }); // Remove duplicate locations

              uniqueLocations = uniqueLocations.filter((v, i, a) => a.indexOf(v) === i);

              for (let i = 1; i <= uniqueLocations.length; i++) {
                filterLocation(data, uniqueLocations[i - 1], `#location-${i}`, `#location-${i}__buttons`);
              } // End multiple locations

            } else {
              // Single location, multiple dates
              if (locations.length > 1 || methods.length > 1) {
                // Single location, multiple dates, multiple methods => Dates as standard button; further options to follow
                dateButtons.push(d.header);
                dateButtons = dateButtons.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []);
                buttonOptions = dateButtons.map(db => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                    key: db
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                    "data-date-src": db,
                    onClick: e => {
                      let dateSrc = e.target.getAttribute('data-date-src');
                      selectedDateValue = formatDate(dateSrc);
                      selectedDateData = data.filter(fd => fd.header === dateSrc);
                      filterMethodsData(selectedDateData[0]['options'][0]['options'], 'Apply now for ' + formatDate(selectedDateData[0]['header']) + ' entry:');
                      setFirstStep(false);
                    }
                  }, formatDate(db))));
                }); // Modal journey incomplete; display further steps pending indicator

                setFurtherStepsPendingIndicator(furtherStepsPending);
              } else {
                // Single location, multiple dates, single method => Dates as links
                dateLinks.push(d.header);
                dateLinks = dateLinks.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []); // Map each unique date and filter data to extract correct apply links

                const dateLinksData = [];
                dateLinks.map(lq => {
                  let filteredDateData = data.filter(q => q.header === lq);
                  dateLink = {
                    text: formatDate(lq),
                    link: filteredDateData[0]['options'][0]['options'][0]['options']['apply']
                  };
                  dateLinksData.push(dateLink);
                });
                linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  data: dateLinksData
                }); // Final modal step; remove further steps indicator

                setFurtherStepsPendingIndicator();
              }
            }
          } else {
            // Single date; pass date value to methods function
            filterMethodsData(data[0]['options'][0]['options'], 'Apply for ' + formatDate(data[0]['header']) + ' entry:');
          }
        });
      });
    });
    linkOptions ? setSelectionLinkDate(linkOptions) : null;
    buttonOptions ? setSelectionButtonDate(buttonOptions) : null;
  }
  /**
   * Completed programme filter. Analyse routes data.
   *
   * @param {object} data The filtered data record data, where routes are at the top level.
   */


  function filterRouteData(data) {
    // Clear any previously rendered selection buttons/links from the state to prevent superfluous button/link rendering
    clearSelectionOptions(); // Empty relevant state variables to remove superfluous progress navigation rendering

    setProgressDate();
    setProgressMethod(); // Clear data stored from previous selections

    selectedRouteData = null;
    selectedDateData = null; // Variables scoped to this function

    let buttonQuals = [],
        linkRoutes = [],
        routeLink,
        buttonOptions,
        linkOptions,
        locationOptions = [],
        qualNav; // Progress indicator; display selected qualification value

    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: () => {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    data.map(s => {
      // Routes pre-selection prompt text
      setWindowPrompt(promptRoute);
      let dates = s['options'];
      dates.map(d => {
        let locations = d['options'];
        locations.map(l => {
          let methods = l['options'];
          methods.map(() => {
            // Store each unique location value in an array
            locations.map(lo => {
              locationOptions.push(lo.header);
            });
            locationOptions = locationOptions.reduce(function (a, i) {
              a.indexOf(i) === -1 ? a.push(i) : null;
              return a;
            }, []);

            if (data.length > 1) {
              // Route selection required: set progress indicator to route and remove dates/methods
              selectedRouteValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                className: "how-to-apply--pgt--js__modal__progress__current"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                className: "how-to-apply--pgt--js__modal__progress__wrapper"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                className: "how-to-apply--pgt--js__modal__progress__circle"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                className: "fas fa-circle icon"
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                className: "how-to-apply--pgt--js__modal__progress__text"
              }, "Route")));
              setProgressRoute(selectedRouteValue);
              setProgressDate();
              setProgressMethod();

              if (dates.length > 1 || locationOptions.length > 1 || methods.length > 1) {
                // Standard route button
                buttonQuals.push(s.header);
                buttonQuals = buttonQuals.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []);
                buttonOptions = buttonQuals.map(bq => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                    key: bq
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                    onClick: e => {
                      selectedRouteValue = e.target.textContent;
                      selectedRouteData = data.filter(sr => sr.header === selectedRouteValue);
                      filterDatesData(selectedRouteData[0]['options']);
                      setFirstStep(false);
                    }
                  }, bq)));
                }); // Modal journey incomplete; display further steps pending indicator

                setFurtherStepsPendingIndicator(furtherStepsPending);
              } else {
                // Route as link
                linkRoutes.push(s.header);
                linkRoutes = linkRoutes.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []); // Map each unique route and filter data to extract correct apply links

                const routeLinksData = [];
                linkRoutes.map(lr => {
                  let filteredRouteData = data.filter(q => q.header === lr);
                  routeLink = {
                    text: lr,
                    link: filteredRouteData[0]['options'][0]['options'][0]['options'][0]['options']['apply']
                  };
                  routeLinksData.push(routeLink);
                });
                linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  data: routeLinksData
                }); // Final modal step; remove further steps indicator

                setFurtherStepsPendingIndicator();
              }
            } else {
              // Move to dates function
              filterDatesData(data[0]['options']);
            }
          });
        });
      });
    }); // If route options and/or links exist, update state to render relevant JSX

    buttonOptions ? setSelectionButtonRoute(buttonOptions) : null;
    linkOptions ? setSelectionLinkRoute(linkOptions) : null;
  }
  /**
   * Analyse programme data record data.
   *
   * @param {object} data The original data record data, where programmes are at the top level.
   */


  function filterQualificationData(data) {
    // If qualification select exists, it will be the first step in the modal; disable 'Start again' option
    setFirstStep(true); // Qualification pre-selection prompt text

    setWindowPrompt(promptQualification); // Clear any previously rendered selection buttons/links from the state to prevent superfluous button/link rendering

    clearSelectionOptions(); // Empty relevant state variables to remove superfluous progress navigation rendering

    setProgressRoute();
    setProgressDate();
    setProgressMethod(); // Clear data stored from previous selections

    selectedQualificationData = null;
    selectedRouteData = null;
    selectedDateData = null; // Variables scoped to this function

    let buttonQuals = [],
        linkQuals = [],
        buttonOptions,
        linkOptions,
        locationOptions = [];

    if (data.length > 1) {
      // Qualification selection required: set progress indicator to qualification and remove routes/dates/methods
      selectedQualificationValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "how-to-apply--pgt--js__modal__progress__current"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "fas fa-circle icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__text"
      }, "Qualification")));
      setProgressQualification(selectedQualificationValue);
    }

    data.length > 1 ? data.map(e => {
      let routeNames = e['options'];
      routeNames.map(s => {
        let dates = s['options'];
        dates.map(d => {
          let locations = d['options'];
          locations.map(l => {
            let methods = l['options'];
            methods.map(() => {
              // Store each unique location value in an array
              locations.map(lo => {
                locationOptions.push(lo.header);
              });
              locationOptions = locationOptions.reduce(function (a, i) {
                a.indexOf(i) === -1 ? a.push(i) : null;
                return a;
              }, []);

              if (data.length > 1) {
                if (routeNames.length > 1 || dates.length > 1 || locationOptions.length > 1 || methods.length > 1) {
                  buttonQuals.push(e.header);
                  buttonQuals = buttonQuals.reduce(function (a, i) {
                    a.indexOf(i) === -1 ? a.push(i) : null;
                    return a;
                  }, []);
                  buttonOptions = buttonQuals.map(bq => {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                      key: bq
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                      onClick: e => {
                        selectedQualificationValue = e.target.innerText;
                        selectedQualificationData = data.filter(qual => qual.header === selectedQualificationValue);
                        filterRouteData(selectedQualificationData[0]['options']);
                        setFirstStep(false);
                      }
                    }, bq)));
                  }); // Modal journey incomplete; display further steps pending indicator

                  setFurtherStepsPendingIndicator(furtherStepsPending);
                } else {
                  linkQuals.push(e.header);
                  linkQuals = linkQuals.reduce(function (a, i) {
                    a.indexOf(i) === -1 ? a.push(i) : null;
                    return a;
                  }, []); // Map each unique qualification and filter data to extract correct apply links

                  const methodLinks = [];
                  linkQuals.map(lq => {
                    let filteredQualData = data.filter(q => q.header === lq);
                    const methodLink = {
                      text: lq,
                      link: filteredQualData[0]['options'][0]['options'][0]['options'][0]['options'][0]['options']['apply']
                    };
                    methodLinks.push(methodLink);
                  });
                  linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    data: methodLinks
                  }); // Move to end of function and use qualification variable? Similar approach to ternary operator used at end of dates function
                }
              }
            });
          });
        });
      });
    }) : // One qualification; move to routes function
    filterRouteData(entryPoints[0]['options']);
    buttonOptions ? setSelectionButtonQualification(buttonOptions) : null;
    linkOptions ? setSelectionLinkQualification(linkOptions) : null;
  } // Modal wrapper render


  const question = 'qualification',
        qualificationQuestion = question === 'qualification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, windowPrompt), !(selectionHeadingLocationOne || selectionButtonLocationOneDate || selectionLinkLocationOneDate || selectionHeadingLocationTwo || selectionButtonLocationTwoDate || selectionLinkLocationTwoDate) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, selectionButtonQualification, selectionLinkQualification, selectionButtonRoute, selectionLinkRoute, selectionButtonDate, selectionLinkDate, selectionLinkMethod) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, selectionHeadingLocationOne, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"
  }, selectionButtonLocationOneDate, selectionLinkLocationOneDate), selectionHeadingLocationTwo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"
  }, selectionButtonLocationTwoDate, selectionLinkLocationTwoDate)))),
        alternative = props.element.dataset.otheryear && props.element.dataset.otherurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "how-to-apply--pgt--js__modal__alternative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.element.dataset.otherurl
  }, props.element.dataset.otheryear, " entry is also available.")); // End modal wrapper render
  // Focus trap

  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let modalRef = null,
      modalContentRef = null;

  const getModal = () => modalRef,
        getModalContent = () => modalContentRef;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_5___default()(getModalContent(), {
        initialFocus: getModalContent().querySelector('.how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a'),
        onDeactivate: () => setModalVisible(false),
        clickOutsideDeactivates: true
      }));
    }

    if (modalVisible) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["disableBodyScroll"])(getModal());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])(getModal());
    }
  }, [modalVisible]); // End focus trap
  // Render the 'Apply now' CTA which launches the modal

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "cta-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "primary-cta-arrow--bright",
    onClick: () => {
      setModalVisible(true);
      setFirstStep(true); // Don't show 'Start again' option on initial modal load

      clearSelectionOptions(); // Clear any previously rendered selection buttons/links from the state

      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Apply now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal",
    "data-open": modalVisible,
    ref: modal => modalRef = modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content",
    ref: modalContent => modalContentRef = modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__close",
    onClick: () => {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])(getModal());
      setModalVisible(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-times icon",
    "aria-label": "Close"
  })), !firstStep ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__reset" // style={{ display: 'block' }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: () => {
      // Clear options display and render what user would see when modal is first opened
      setFirstStep(true);
      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fas fa-redo"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Start again"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress"
  }, progressQualification, progressRoute, progressDate, progressMethod, furtherStepsPendingIndicator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Start in ", props.element.dataset.year)), qualificationQuestion, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, alternative))));
}

HowToApply.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  element: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HowToApply);

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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
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
  return axios__WEBPACK_IMPORTED_MODULE_2___default()(config).then(response => {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw `Bad response: ${response.status}`;
    }
  }).catch(e => {
    if (!axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(e)) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("time", {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
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