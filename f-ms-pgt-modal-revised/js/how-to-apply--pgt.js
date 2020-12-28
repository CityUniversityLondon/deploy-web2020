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
/******/ 	deferredModules.push([6,"vendor-dependencies","core","react","axios","vendor-direct"]);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/how-to-apply/how-to-apply--pgt */ "./src/patterns/how-to-apply/how-to-apply--pgt.js");
/* harmony import */ var _patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/how-to-apply/pgt-data */ "./src/patterns/how-to-apply/pgt-data.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! edn-to-js */ "./node_modules/edn-to-js/dist/main.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(edn_to_js__WEBPACK_IMPORTED_MODULE_4__);


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
      Object(_patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_3__["howToApplyConfig"])(howToApply.dataset.config).then(config => {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_2__["default"], {
          config: edn_to_js__WEBPACK_IMPORTED_MODULE_4___default()(config),
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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
/* harmony import */ var _buttons_apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/apply */ "./src/patterns/how-to-apply/buttons/apply.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_6__);





/**
 * How to apply for postgraduate taught degrees
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/how-to-apply/how-to-apply--pgt
 * @author Web Development
 * @copyright City, University of London 2020
 */





const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(sourceDate) {
  let formattedDate = new Date(sourceDate);
  return "".concat(months[formattedDate.getUTCMonth()], " ").concat(formattedDate.getUTCFullYear());
}
/**
 * Launch the how to apply modal.
 *
 * @param {object} props The JSON configuration file for the modal.
 * @return {object} The React component to render.
 */


function HowToApply(props) {
  let entryPoints = props.config;
  const initialPreferences = {
    qualification: Object.keys(entryPoints).length === 1 ? Object.keys(entryPoints[0])[0] : null,
    subject: null,
    entry: null,
    location: null
  },
        [modalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        [preferences, setPreferences] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialPreferences),
        [firstStep, setFirstStep] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        // Controls 'Start again' visibility
  [windowPrompt, setWindowPrompt] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Choose the qualification you wish to apply for:'); // let [selection, setSelection] = useState();

  let [btnSelection, setBtnSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [dateSelection, setDateSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [linkSelection, setLinkSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [methodSelection, setMethodSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationOneHeading, setLocationOneHeading] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationOneDateSelectionButton, setLocationOneDateSelectionButton] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationOneDateSelectionLink, setLocationOneDateSelectionLink] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationTwoHeading, setLocationTwoHeading] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationTwoDateSelectionButton, setLocationTwoDateSelectionButton] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [locationTwoDateSelectionLink, setLocationTwoDateSelectionLink] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(); // let [initialSelection, setInitialSelection] = useState();
  // let [qualificationSelect, setQualificationSelect] = useState(false);
  // let options = document.querySelector('.how-to-apply--pgt--js__options'),

  let promptQualification = 'Choose the qualification you wish to apply for:',
      promptRoute = 'Choose the route you wish to apply for:',
      promptEntryPoint = 'Choose the entry point you wish to apply for:',
      promptMethod = 'Apply online now:';

  function filterMethodsData(methods) {
    setWindowPrompt(promptMethod);
    setDateSelection();
    setBtnSelection();
    setLinkSelection();
    setFirstStep(false);
    let methodLinks = [];
    let linkOptions;
    methods.map(m => {
      const methodLink = {
        text: m.header,
        link: m.options.apply
      };
      methodLinks.push(methodLink);
      linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: methodLinks
      });
      setMethodSelection(linkOptions);
    });
  }
  /**
   * Completed programme and subject filter. Analyse dates data.
   *
   * @param {object} data The filtered data record data, where dates are at the top level.
   */


  function filterDatesData(data) {
    setWindowPrompt(promptEntryPoint);
    setBtnSelection();
    setLinkSelection();
    setFirstStep(false);
    let buttonOptions;
    let linkOptions;
    let dateButtons = [];
    let dateLinks = [];
    let locationOneDateLinks = [];
    let locationTwoDateLinks = [];
    let locationOptions = [];
    let locationOneDateAsButton = false;
    let locationOneDateAsLink = false;
    let locationTwoDateAsButton = false;
    let locationTwoDateAsLink = false;
    data.map(d => {
      let locations = d['options'];
      locations.map(l => {
        let methods = l['options'];
        methods.map(m => {
          // Multiple dates; print buttons
          if (data.length > 1) {
            // Calculate number of locations
            locations.map(lo => {
              locationOptions.push(lo.header);
            });
            locationOptions = locationOptions.reduce(function (a, i) {
              a.indexOf(i) === -1 ? a.push(i) : null;
              return a;
            }, []); // Multiple locations, multiple dates => create array of objects per location

            if (locationOptions.length > 1) {
              let locationsAll = [];
              locationOptions.map(lo => {
                let filteredData = data.filter(fd => fd['options'][0]['header'] === lo);
                locationsAll.push(filteredData);
              }); // Location 1 output

              locationsAll[0].map(fd => {
                let methods = fd['options'][0]['options'];

                if (methods.length > 1) {
                  // Dates as buttons
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                    key: fd
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, fd.header)));
                } else {
                  // Dates as links
                  const dateLink = {
                    text: formatDate(fd.header),
                    link: fd['options'][0]['options'][0]['options']['apply']
                  };
                  locationOneDateLinks.push(dateLink);
                  locationOneDateLinks = Array.from(new Set(locationOneDateLinks.map(a => a.text))).map(text => {
                    return locationOneDateLinks.find(a => a.text === text);
                  });
                  locationOneDateAsLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    data: locationOneDateLinks
                  });
                }
              }); // Location 2 output

              locationsAll[1].map(fd => {
                let methods = fd['options'][0]['options'];

                if (methods.length > 1) {
                  // Dates as buttons
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                    key: fd
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, fd.header)));
                } else {
                  // Dates as links
                  const dateLink = {
                    text: formatDate(fd.header),
                    link: fd['options'][0]['options'][0]['options']['apply']
                  };
                  locationTwoDateLinks.push(dateLink);
                  locationTwoDateLinks = Array.from(new Set(locationTwoDateLinks.map(a => a.text))).map(text => {
                    return locationTwoDateLinks.find(a => a.text === text);
                  });
                  locationTwoDateAsLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    data: locationTwoDateLinks
                  });
                }
              });
              setLocationOneHeading( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, locationsAll[0][0]['options'][0]['header']));
              setLocationOneDateSelectionButton(locationOneDateAsButton);
              setLocationOneDateSelectionLink(locationOneDateAsLink);
              setLocationTwoHeading( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, locationsAll[1][0]['options'][0]['header']));
              setLocationTwoDateSelectionButton(locationTwoDateAsButton);
              setLocationTwoDateSelectionLink(locationTwoDateAsLink); // End multiple locations
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
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                    key: db
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
                    "data-date-src": db,
                    onClick: e => {
                      let dateSrc = e.target.getAttribute('data-date-src');
                      let filteredData = data.filter(fd => fd.header === dateSrc);
                      filterMethodsData(filteredData[0]['options'][0]['options']);
                    }
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
                    "data-date-src": db,
                    onClick: e => {
                      let dateSrc = e.target.getAttribute('data-date-src');
                      let filteredData = data.filter(fd => fd.header === dateSrc);
                      filterMethodsData(filteredData[0]['options'][0]['options']);
                    }
                  }, formatDate(db))));
                });
                setDateSelection(buttonOptions);
              } else {
                // Single location, multiple dates, single method => Dates as links
                const dateLink = {
                  text: formatDate(d.header),
                  link: m.options.apply
                };
                dateLinks.push(dateLink);
                linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  data: dateLinks
                });
              }
            }
          } else {
            // Single date; move to methods function
            filterMethodsData(data[0]['options'][0]['options']);
          }
        });
      });
    });
    setLinkSelection(linkOptions);
    setBtnSelection(buttonOptions);
  }

  function filterSubjectData(data) {
    setBtnSelection();
    setLinkSelection();
    setFirstStep(false);
    let buttonQuals = [];
    let linkQuals = [];
    let buttonOptions;
    let linkOptions;
    let locationOptions = [];
    data.map(s => {
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
              if (dates.length > 1 || locationOptions.length > 1 || methods.length > 1) {
                // Standard subject button
                buttonQuals.push(s.header);
                buttonQuals = buttonQuals.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []);
                buttonOptions = buttonQuals.map(bq => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                    key: bq
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
                    onClick: e => {
                      let btnEl = e.target.querySelector('span');
                      let subjectVal = btnEl.textContent;
                      let filteredData = data.filter(subj => subj.header === subjectVal);
                      filterDatesData(filteredData[0]['options']);
                    }
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
                    onClick: e => {
                      let subjectVal = e.target.textContent;
                      let filteredData = data.filter(subj => subj.header === subjectVal);
                      filterDatesData(filteredData[0]['options']);
                    }
                  }, bq)));
                });
                setBtnSelection(buttonOptions);
              } else {
                // Route as link
                linkQuals.push(s.header);
                linkQuals = linkQuals.reduce(function (a, i) {
                  a.indexOf(i) === -1 ? a.push(i) : null;
                  return a;
                }, []);
                linkOptions = linkQuals.map(lq => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    key: lq,
                    data: methods,
                    btnText: lq
                  });
                });
                setLinkSelection(linkOptions);
              }
            } else {
              // Move to dates function
              filterDatesData(data[0]['options']);
            }
          });
        });
      });
    });
    setBtnSelection(buttonOptions);
    setLinkSelection(linkOptions);
  }

  function filterQualificationData(data) {
    setWindowPrompt(promptQualification);
    setDateSelection();
    setMethodSelection();
    setBtnSelection();
    setLinkSelection();
    setFirstStep(true);
    let buttonQuals = [];
    let linkQuals = [];
    let buttonOptions;
    let linkOptions;
    let locationOptions = [];
    data.length > 1 ? data.map(e => {
      let subjectNames = e['options'];
      subjectNames.map(s => {
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
                if (subjectNames.length > 1 || dates.length > 1 || locationOptions.length > 1 || methods.length > 1) {
                  buttonQuals.push(e.header);
                  buttonQuals = buttonQuals.reduce(function (a, i) {
                    a.indexOf(i) === -1 ? a.push(i) : null;
                    return a;
                  }, []);
                  buttonOptions = buttonQuals.map(bq => {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                      key: bq
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
                      onClick: e => {
                        let qualBtn = e.target.querySelector('span');
                        let qualVal = qualBtn.textContent;
                        let filteredQualData = data.filter(qual => qual.header === qualVal);
                        filterSubjectData(filteredQualData[0]['options']);
                      }
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
                      onClick: e => {
                        let qualVal = e.target.textContent;
                        let filteredQualData = data.filter(qual => qual.header === qualVal);
                        filterSubjectData(filteredQualData[0]['options']);
                      }
                    }, bq)));
                  });
                  setBtnSelection(buttonOptions);
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
                  linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    data: methodLinks
                  });
                  setLinkSelection(linkOptions);
                }
              }
            });
          });
        });
      });
    }) : // One qualification; move to subjects function
    filterSubjectData(entryPoints[0]['options']);
  }

  const question = 'qualification',
        // [multipleSubjects, setMultipleSubjects] = useState(true),
  // [multipleEntryPoints, setMultipleEntryPoints] = useState(true),
  // [multipleLocations, setMultipleLocations] = useState(true),
  qualificationQuestion = question === 'qualification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, windowPrompt), !(locationOneHeading || locationOneDateSelectionButton || locationOneDateSelectionLink || locationTwoHeading || locationTwoDateSelectionButton || locationTwoDateSelectionLink) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, dateSelection, methodSelection, btnSelection, linkSelection) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, locationOneHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, locationOneDateSelectionButton, locationOneDateSelectionLink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, locationTwoHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, locationTwoDateSelectionButton, locationTwoDateSelectionLink)))),
        qualificationsProgress = Object.keys(entryPoints).length > 1 ? question === 'qualification' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Qualification"))) : preferences.qualification ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.qualification = null;
      newPreferences.subject = null;
      newPreferences.entry = null;
      newPreferences.location = null;
      setPreferences(newPreferences); // setQuestion(
      //     nextQuestion(newPreferences, entryPoints)
      // );
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose qualification"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, preferences.qualification))) : null : null,
        // subjectsProgress = multipleSubjects ? (
  //     question === 'subject' ? (
  //         <li className="how-to-apply--pgt--js__modal__progress__current">
  //             <span className="how-to-apply--pgt--js__modal__progress__wrapper">
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span className="fas fa-circle icon"></span>
  //                 </span>
  //                 <span className="how-to-apply--pgt--js__modal__progress__text">
  //                     Route
  //                 </span>
  //             </span>
  //         </li>
  //     ) : preferences.subject ? (
  //         <li className="how-to-apply--pgt--js__modal__progress__previous">
  //             <button
  //                 className="how-to-apply--pgt--js__modal__progress__wrapper"
  //                 onClick={() => {
  //                     const newPreferences = preferences;
  //                     newPreferences.subject = null;
  //                     newPreferences.entry = null;
  //                     newPreferences.location = null;
  //                     setPreferences(newPreferences);
  //                     // setQuestion(
  //                     //     nextQuestion(newPreferences, entryPoints)
  //                     // );
  //                 }}
  //             >
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span
  //                         className="fas fa-check icon"
  //                         aria-label="Back to choose study route"
  //                     ></span>
  //                 </span>
  //                 <span className="how-to-apply--pgt--js__modal__progress__text">
  //                     {preferences.subject}
  //                 </span>
  //             </button>
  //         </li>
  //     ) : null
  // ) : null,
  entryPointsProgress = // multipleEntryPoints ? (
  question === 'entry' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Entry point"))) : preferences.entry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
      newPreferences.entry = null;
      newPreferences.location = null;
      setPreferences(newPreferences); // setQuestion(
      //     nextQuestion(newPreferences, entryPoints)
      // );
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-check icon",
    "aria-label": "Back to choose entry point"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, months[new Date(preferences.entry).getUTCMonth()], ' ', new Date(preferences.entry).getUTCFullYear()))) : // ) : null
  null,
        // locationsProgress = multipleLocations ? (
  //     question === 'location' ? (
  //         <li className="how-to-apply--pgt--js__modal__progress__current">
  //             <span className="how-to-apply--pgt--js__modal__progress__wrapper">
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span className="fas fa-circle icon"></span>
  //                 </span>
  //                 <span className="how-to-apply--pgt--js__modal__progress__text">
  //                     Location
  //                 </span>
  //             </span>
  //         </li>
  //     ) : preferences.location ? (
  //         <li className="how-to-apply--pgt--js__modal__progress__previous">
  //             <button
  //                 className="how-to-apply--pgt--js__modal__progress__wrapper"
  //                 onClick={() => {
  //                     const newPreferences = preferences;
  //                     newPreferences.location = null;
  //                     setPreferences(newPreferences);
  //                     // setQuestion(
  //                     //     nextQuestion(newPreferences, entryPoints)
  //                     // );
  //                 }}
  //             >
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span
  //                         className="fas fa-check icon"
  //                         aria-label="Back to choose location"
  //                     ></span>
  //                 </span>
  //                 <span className="how-to-apply--pgt--js__modal__progress__text">
  //                     {preferences.location}
  //                 </span>
  //             </button>
  //         </li>
  //     ) : null
  // ) : null,
  nextStep = question !== 'apply' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon",
    "aria-hidden": "true"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Method of study"))),
        qualificationsProgressMobile = Object.keys(entryPoints).length > 1 && (question === 'qualification' || preferences.qualification) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'qualification' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'qualification' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'qualification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Qualification"))) : null,
        // subjectsProgressMobile =
  //     multipleSubjects &&
  //     (question === 'subject' || preferences.subject) ? (
  //         <li
  //             className={
  //                 question === 'subject'
  //                     ? 'how-to-apply--pgt--js__modal__progress__current'
  //                     : 'how-to-apply--pgt--js__modal__progress__previous'
  //             }
  //         >
  //             <span className="how-to-apply--pgt--js__modal__progress__wrapper">
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span
  //                         className={
  //                             question === 'subject'
  //                                 ? 'fas fa-circle icon'
  //                                 : 'fas fa-check icon'
  //                         }
  //                     ></span>
  //                 </span>
  //                 {question === 'subject' && (
  //                     <span className="how-to-apply--pgt--js__modal__progress__text">
  //                         Subject
  //                     </span>
  //                 )}
  //             </span>
  //         </li>
  //     ) : null,
  // entryPointsProgressMobile =
  // multipleEntryPoints &&
  // question === 'entry' || preferences.entry ? (
  //     <li
  //         className={
  //             question === 'entry'
  //                 ? 'how-to-apply--pgt--js__modal__progress__current'
  //                 : 'how-to-apply--pgt--js__modal__progress__previous'
  //         }
  //     >
  //         <span className="how-to-apply--pgt--js__modal__progress__wrapper">
  //             <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                 <span
  //                     className={
  //                         question === 'entry'
  //                             ? 'fas fa-circle icon'
  //                             : 'fas fa-check icon'
  //                     }
  //                 ></span>
  //             </span>
  //             {question === 'entry' && (
  //                 <span className="how-to-apply--pgt--js__modal__progress__text">
  //                     Entry point
  //                 </span>
  //             )}
  //         </span>
  //     </li>
  // ) : null,
  // locationsProgressMobile =
  //     multipleLocations &&
  //     (question === 'location' || preferences.location) ? (
  //         <li
  //             className={
  //                 question === 'location'
  //                     ? 'how-to-apply--pgt--js__modal__progress__current'
  //                     : 'how-to-apply--pgt--js__modal__progress__previous'
  //             }
  //         >
  //             <span className="how-to-apply--pgt--js__modal__progress__wrapper">
  //                 <span className="how-to-apply--pgt--js__modal__progress__circle">
  //                     <span
  //                         className={
  //                             question === 'location'
  //                                 ? 'fas fa-circle icon'
  //                                 : 'fas fa-check icon'
  //                         }
  //                     ></span>
  //                 </span>
  //                 {question === 'location' && (
  //                     <span className="how-to-apply--pgt--js__modal__progress__text">
  //                         Location
  //                     </span>
  //                 )}
  //             </span>
  //         </li>
  //     ) : null,
  nextStepMobile = question !== 'apply' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current how-to-apply--pgt--js__modal__progress__last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Method of study"))),
        alternative = props.element.dataset.otheryear && props.element.dataset.otherurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "how-to-apply--pgt--js__modal__alternative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: props.element.dataset.otherurl
  }, props.element.dataset.otheryear, " entry is also available."));
  const [focusTrap, setFocusTrap] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  let modalRef = null,
      modalContentRef = null;

  const getModal = () => modalRef,
        getModalContent = () => modalContentRef;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_6___default()(getModalContent(), {
        initialFocus: getModalContent().querySelector('.how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a'),
        onDeactivate: () => setModalVisible(false),
        clickOutsideDeactivates: true
      }));
    }

    if (modalVisible) {
      focusTrap.activate && focusTrap.activate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(getModal());
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["enableBodyScroll"])(getModal());
    }
  }, [modalVisible]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "cta-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "primary-cta-arrow--bright",
    onClick: () => {
      setModalVisible(true);
      setFirstStep(true);
      setDateSelection();
      setMethodSelection();
      setBtnSelection();
      setLinkSelection();
      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Apply now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal",
    "data-open": modalVisible,
    ref: modal => modalRef = modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content",
    ref: modalContent => modalContentRef = modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__close",
    onClick: () => {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["enableBodyScroll"])(getModal());
      setModalVisible(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-times icon",
    "aria-label": "Close"
  })), !firstStep ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__reset",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: () => {
      // Clear options display and render what user would see if modal first opened
      setFirstStep(true);
      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-redo"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Start again"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress"
  }, qualificationsProgress, entryPointsProgress, nextStep), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress--mobile"
  }, qualificationsProgressMobile, nextStepMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Start in ", props.element.dataset.year)), qualificationQuestion, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, alternative))));
}

HowToApply.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  element: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
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