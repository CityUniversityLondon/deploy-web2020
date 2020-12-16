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
    // console.log(props.data);
    return props.data.map((d, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index,
        className: "apply"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: d['options']['apply']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.btnText ? props.btnText : d.header), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "far fa-external-link",
        "aria-label": "(external link)"
      })));
    });
  }
}

/***/ }),

/***/ "./src/patterns/how-to-apply/buttons/date.js":
/*!***************************************************!*\
  !*** ./src/patterns/how-to-apply/buttons/date.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartDates; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons_apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/apply */ "./src/patterns/how-to-apply/buttons/apply.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);






const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function StartDates(props) {
  if (props.data) {
    // console.log('SD: ' + props.data + props.data.length);
    // Format date so it's possible to filter on based on button text value
    let data = props.data;
    let formattedDate;

    for (const d of data) {
      formattedDate = new Date(d.header);
      d.header = "".concat(months[formattedDate.getUTCMonth()], " ").concat(formattedDate.getUTCFullYear());
    }

    return props.data.map((d, index) => {
      if (d['options'][0]['options'].length > 1) {
        // console.log('load methods screen');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Choose the entry point you wish to apply for:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
          onClick: e => {
            // Target selected date button's text value, e.g. 'September 2021'
            let dateBtn = e.target.querySelector('span');
            let dateVal = dateBtn.textContent; // Filter entry points data on selected qualification

            let filteredDateData = props.data.filter(e => e.header === dateVal); // Multiple methods of study? (Skipping Location for now)

            for (const f of filteredDateData) {
              if (f['options'][0]['options'].length > 1) {// Open method of study selection
              } else {
                /*#__PURE__*/
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
                  className: "how-to-apply--pgt--js__options"
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  btnText: 'abc',
                  data: f['options'][0]['options'][0]['options']
                }));
              }
            }
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, d.header))));
      } else {
        // console.log([d['options'][0]['options'][0]]);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_2__["default"], {
          btnText: d.header,
          data: [d['options'][0]['options'][0]]
        });
      }
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
/* harmony import */ var _buttons_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/date */ "./src/patterns/how-to-apply/buttons/date.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_7__);





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
  let entryPoints = props.config,
      initialModalDisplay;
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
  [windowPrompt, setWindowPrompt] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Choose the qualification you wish to apply for:');
  let [selection, setSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let [initialSelection, setInitialSelection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  let options = document.querySelector('.how-to-apply--pgt--js__options'),
      // promptQualification = 'Choose the qualification you wish to apply for:',
  promptRoute = 'Choose the route you wish to apply for:',
      promptEntryPoint = 'Choose the entry point you wish to apply for:'; // Test logs
  // console.log('subject: '  + entryPoints[0]['options'].length); // subject
  // console.log('date: '     + entryPoints[0]['options'][0]['options'].length); // date
  // console.log('location: ' + entryPoints[0]['options'][0]['options'][0]['options'].length); // location
  // console.log('method: '   + entryPoints[0]['options'][0]['options'][0]['options'][0]['options'].length); // subjects

  function modalJourney(singleQualData) {
    // If reset option has been used, remove buttons from DOM to avoid unwanted buttons rendering.
    setInitialSelection();
    let filteredSubjData; // function filterMethods(methods) {
    //     // Loop methods; see if they can
    //     (options = (
    //         <ApplyLinks
    //             data={methods}
    //         />
    //     ));
    //     setSelection(
    //         <ul className="how-to-apply--pgt--js__options">
    //             {options}
    //         </ul>
    //     );
    // }

    function filterDatesData(filterDatesData) {
      // Loop dates; see if they can be direct links
      filterDatesData.map(s => {
        let dates = s['options'];
        dates.map(d => {
          let locations = d['options'];
          locations.map(l => {
            let methods = l['options'];
            methods.map(() => {
              if (dates.length > 1 && (locations.length > 1 || methods.length > 1)) {// Multiple locations and/or methods exist. Render Regular buttons. Next window content decided in filterLocationsData function.
              } else {
                // Display dates as links
                options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
                  className: "how-to-apply--pgt--js__options"
                }, filterDatesData[0]['options'].map(d => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    key: d,
                    data: d['options'][0]['options'],
                    btnText: formatDate(d.header)
                  });
                }));
                setWindowPrompt(promptEntryPoint);
                setSelection(options);
              }
            });
          });
        });
      });
    } // See if we can perform data filter on click; don't think we need separate function for this.


    function filterSubjData(subject) {
      let subjData = singleQualData[0]['options'];
      filteredSubjData = subjData.filter(s => s.header === subject);
      filterDatesData(filteredSubjData);
    }

    function filterSubjectData() {
      singleQualData.map(s => {
        let subjectNames = s['options'];
        filterSubjData(subjectNames);
        subjectNames.map(s => {
          let dates = s['options'];
          dates.map(d => {
            let locations = d['options'];
            locations.map(l => {
              let methods = l['options'];

              if (subjectNames.length > 1 && (dates.length || locations.length || methods.length > 1)) {
                // Multiple dates, locations and/or methods exist. Render Regular buttons. Next window content decided in filterDatesData function.
                options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
                  className: "how-to-apply--pgt--js__options"
                }, subjectNames.map(s => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                    key: s
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
                    onClick: e => {
                      let subjBtn = e.target.querySelector('span');
                      let subjVal = subjBtn.textContent;
                      let filteredSubjData = subjectNames.filter(s => s.header === subjVal);
                      filterDatesData(filteredSubjData);
                    }
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
                    onClick: e => {
                      let spanText = e.target.textContent;
                      let filteredSubjData = subjectNames.filter(s => s.header === spanText);
                      filterDatesData(filteredSubjData);
                    }
                  }, s.header)));
                }));
                setWindowPrompt(promptRoute);
                setSelection(options);
              } else {// Display subjects as links
              }
            });
          });
        });
      });
    }

    if (singleQualData[0]['options'].length > 1) {
      // Multiple subjects - can't use (not filtered)
      let subjects = singleQualData[0]['options'];
      let dates = singleQualData[0]['options'][0]['options'];
      let methods = singleQualData[0]['options'][0]['options'][0]['options'][0]['options'];

      if (subjects.length > 1) {
        if (options.firstChild) {
          while (options.firstChild) {
            options.removeChild(options.firstChild);
          }
        }

        setWindowPrompt('Choose the route you wish to apply for:');
        filterSubjectData();
        options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
          className: "how-to-apply--pgt--js__options"
        }, subjects.map(d => {
          return (// Multiple subjects > Multiple dates
            dates.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
              key: d
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
              // subject button
              onClick: e => {
                // Target clicked qualification button and its text value, e.g. 'MSc'
                let subjBtn = e.target.querySelector('span');
                let subjVal = subjBtn.textContent;
                filterSubjData(subjVal);
                setFirstStep(false); // Multiple subjects > Multiple dates > Multiple methods
                // methods.length > 1 ? (
                //     <ApplyLinks
                //         key={d}
                //         data={methods}
                //         btnText={d.header}
                //     />
                // ) : (
                //     // Multiple subjects > Multiple dates > Single methods. Date is link.
                //     (options = dates.map(
                //         (d) => {
                //             return (
                //                 <ApplyLinks
                //                     key={d}
                //                     data={
                //                         methods
                //                     }
                //                     btnText={formatDate(
                //                         d.header
                //                     )}
                //                 />
                //             );
                //         }
                //     ))
                // );

                setSelection( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
                  className: "how-to-apply--pgt--js__options"
                }, options));
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, d.header))) : // Multiple subjects > Single date
            // Multiple subjects > Single date > Multiple methods
            methods.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
              key: d
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
              onClick: () => {
                setFirstStep(false); // console.log('methods screen');
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, d.header))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "placeholder") // Filter links data and pass as props
            // Multiple subjects > Single date > Single method. Subject is link.
            // dates.map((date) => {
            // console.log('2: ' + singleQualData)
            // return (
            // ***
            //         <ApplyLinks
            //             key={date}
            //             data={methods}
            //             btnText={d.header}
            //         />
            //     );
            // })

          );
        }));
        setSelection(options);
      }
    } else {
      // Are there multiple subject routes?
      if (singleQualData[0]['options'].length > 1) {// console.log('Open subjects window');
        // Begin multiple subjects route
      } else {
        // Are there multiple entry dates?
        if (singleQualData[0]['options'][0]['options'].length > 1) {
          setWindowPrompt('Choose the entry point you wish to apply for:'); // Remove existing options buttons

          if (options.firstChild) {
            while (options.firstChild) {
              options.removeChild(options.firstChild);
            }
          } // Extract dates data


          let dateButtons = singleQualData[0]['options'][0]['options'];
          let methods = dateButtons[0]['options'][0]['options'];

          if (methods.length > 1) {
            // Single method of study; date button(s) will open methods selection
            setWindowPrompt('Choose the entry point you wish to apply for:');
            options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
              className: "how-to-apply--pgt--js__options"
            }, dateButtons.map(d => {
              let methodsData = d['options'][0]['options'];
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
                key: d
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
                onClick: () => {
                  setFirstStep(false); // Open methods select as direct links

                  options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    data: methodsData
                  });
                  setSelection( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
                    className: "how-to-apply--pgt--js__options"
                  }, options));
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, formatDate(d.header))));
            }));
          } else {
            // Single method of study; date button(s) are apply link(s)
            setWindowPrompt('Choose the entry point you wish to apply for:');
            options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
              className: "how-to-apply--pgt--js__options"
            }, dateButtons.map(d => {
              let methodsData = d['options'][0]['options'];
              return options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                key: d,
                btnText: formatDate(d.header),
                data: methodsData
              });
            }));
          } // Make revised options markup available in the state


          setSelection(options);
        } else {
          // console.log('multiple subjects, single date')
          setMultipleSubjects(false); // Are there multiple methods of study, e.g. 'full-time', 'part-time'?
          // console.log('Dont open dates window');
          // console.log(filteredQualData[0]['options'][0]['options'][0]['options']);

          if (singleQualData[0]['options'][0]['options'][0]['options'][0]['options'].length > 1) {
            setWindowPrompt('Apply online now:'); // Remove existing options buttons
            // options.removeChild();

            if (options.firstChild) {
              while (options.firstChild) {
                options.removeChild(options.firstChild);
              }
            } // Extract apply links data


            let applyLinks = singleQualData[0]['options'][0]['options'][0]['options'][0]['options']; // Update options block to apply links JSX

            options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
              className: "how-to-apply--pgt--js__options"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
              data: applyLinks
            })); // Make revised options markup available in the state

            setSelection(options);
          } else {// console.log('Qualification buttons should be apply links. Should do top-level check to see if direct link and output accordingly.');
          }
        } // End multiple dates check

      }
    }
  }
  /**
   * Launch the how to apply modal from a button click.
   *
   * @param {event} e The button click event.
   */


  function journeyFromButton(e) {
    // Target clicked qualification button and its text value, e.g. 'MSc'
    let qualBtn = e.target.querySelector('span');
    let qualVal = qualBtn.textContent; // Filter entry points data on selected qualification

    let filteredQualData = entryPoints.filter(e => e.header === qualVal);
    modalJourney(filteredQualData);
  }
  /**
   * Launch the how to apply modal from a button's child span click.
   *
   * @param {event} e The span click event.
   */


  function journeyFromSpan(e) {
    let spanText = e.target.textContent; // Filter entry points data on selected qualification

    let filteredQualData = entryPoints.filter(e => e.header === spanText);
    modalJourney(filteredQualData);
  }

  const question = 'qualification',
        [multipleSubjects, setMultipleSubjects] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        // [multipleEntryPoints, setMultipleEntryPoints] = useState(true),
  // [multipleLocations, setMultipleLocations] = useState(true),
  qualificationQuestion = question === 'qualification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, windowPrompt), selection, initialSelection), initialModalDisplay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, entryPoints.map((qualification, i) => // Create top-level link to apply, or button creating next step in modal
  entryPoints.length > 1 && qualification['options'].length === 1 && qualification['options'][0]['options'].length === 1 && qualification['options'][0]['options'][0]['options'].length === 1 && qualification['options'][0]['options'][0]['options'][0]['options'].length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'qualification' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: qualification['options'][0]['options'][0]['options'][0]['options'][0]['options']['apply']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, qualification.header), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "far fa-external-link",
    "aria-label": "(external link)"
  }))) : entryPoints.length === 1 ? entryPoints[0]['options'].length > 1 ?
  /*#__PURE__*/
  // Multiple subjects
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Load subject select") : entryPoints[0]['options'][0]['options'].length > 1 ?
  /*#__PURE__*/
  // Single subject => Multiple dates
  // Update options block to apply links JSX
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_date__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: entryPoints[0]['options'][0]['options']
  })) :
  /** Single qualification logic; logic to work out which modal screen to show on CTA click
  *  Top-level, initial modal render required. Look through entry points object and see which
  *  options to provide user. Once determined, run modalJourney function.
  *
  * NOT YET DONE => when multiple subjects, dates or locations exist:
  *
  * - map relevant level array
  * - print buttons {d.header}
  * - on button click, run modalJourney but enter at one level below default to avoid extra click
  **/
  entryPoints[0]['options'].length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Subject select") : entryPoints[0]['options'][0]['options'].length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Date select") : entryPoints[0]['options'][0]['options'][0]['options'].length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Location select") : entryPoints[0]['options'][0]['options'][0]['options'][0]['options'].length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: entryPoints[0]['options'][0]['options'][0]['options'][0]['options']
  })) : null // Single subject => Single date
  :
  /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: 'qualification' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: e => {
      setFirstStep(false);
      journeyFromButton(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    onClick: e => {
      setFirstStep(false);
      journeyFromSpan(e);
    }
  }, qualification.header)))))),
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
        subjectsProgress = multipleSubjects ? question === 'subject' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-circle icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Route"))) : preferences.subject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__previous"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper",
    onClick: () => {
      const newPreferences = preferences;
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
    "aria-label": "Back to choose study route"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, preferences.subject))) : null : null,
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
        subjectsProgressMobile = multipleSubjects && (question === 'subject' || preferences.subject) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'subject' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'subject' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'subject' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Subject"))) : null,
        entryPointsProgressMobile = // multipleEntryPoints &&
  question === 'entry' || preferences.entry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: question === 'entry' ? 'how-to-apply--pgt--js__modal__progress__current' : 'how-to-apply--pgt--js__modal__progress__previous'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: question === 'entry' ? 'fas fa-circle icon' : 'fas fa-check icon'
  })), question === 'entry' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__text"
  }, "Entry point"))) : null,
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
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_7___default()(getModalContent(), {
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
      setSelection();
      setInitialSelection(initialModalDisplay);
      setFirstStep(true);
      setWindowPrompt('Original prompt');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "fas fa-redo"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Start again"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress"
  }, qualificationsProgress, subjectsProgress, entryPointsProgress, nextStep), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress--mobile"
  }, qualificationsProgressMobile, subjectsProgressMobile, entryPointsProgressMobile, nextStepMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Start in ", props.element.dataset.year)), qualificationQuestion, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, alternative))));
} // const nextLevel = (arr, k) => arr.filter((i) => Object.keys(i)[0] === k)[0][k];
// function nextQuestion(preferences) {
//     const question =
//         preferences.qualification === null
//             ? 'qualification'
//             : preferences.subject === null
//             ? 'subject'
//             : preferences.entry === null
//             ? 'entry'
//             : preferences.location === null
//             ? 'location'
//             : 'apply';
//     return question;
// }


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