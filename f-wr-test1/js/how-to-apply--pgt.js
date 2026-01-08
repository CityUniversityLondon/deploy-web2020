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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/how-to-apply/how-to-apply--pgt */ "./src/patterns/how-to-apply/how-to-apply--pgt.js");
/* harmony import */ var _patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/how-to-apply/pgt-data */ "./src/patterns/how-to-apply/pgt-data.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! edn-to-js */ "./node_modules/edn-to-js/dist/main.js");
/* harmony import */ var edn_to_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(edn_to_js__WEBPACK_IMPORTED_MODULE_10__);









/**
 * How to apply PGT entry
 *
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */





document.addEventListener('DOMContentLoaded', function () {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    var howToApplyCTAs = document.querySelectorAll('.how-to-apply--pgt--js');
    howToApplyCTAs && Array.from(howToApplyCTAs).forEach(function (howToApply) {
      Object(_patterns_how_to_apply_pgt_data__WEBPACK_IMPORTED_MODULE_9__["howToApplyConfig"])(howToApply.dataset.config).then(function (config) {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patterns_how_to_apply_how_to_apply_pgt__WEBPACK_IMPORTED_MODULE_8__["default"], {
          config: edn_to_js__WEBPACK_IMPORTED_MODULE_10___default()(config),
          element: howToApply
        }), howToApply);
      });
    });
  }
}); //
//

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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





function ApplyLinks(props) {
  if (props.data) {
    return props.data.map(function (d, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: index,
        className: "apply"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: d['link']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, d.text), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "far fa-sharp fa-external-link",
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _buttons_apply__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./buttons/apply */ "./src/patterns/how-to-apply/buttons/apply.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../util */ "./src/util.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * How to apply for postgraduate taught degrees
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/how-to-apply/how-to-apply--pgt
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */





/**
 * Launch the How to apply modal.
 *
 * @param {object} props The JSON configuration file for the modal.
 * @return {object} The React component to render.
 */

function HowToApply(props) {
  var entryPoints = props.config;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1],
      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      firstStep = _useState4[0],
      setFirstStep = _useState4[1],
      _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      progressQualification = _useState6[0],
      setProgressQualification = _useState6[1],
      _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      progressRoute = _useState8[0],
      setProgressRoute = _useState8[1],
      _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      progressDate = _useState10[0],
      setProgressDate = _useState10[1],
      _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState12 = _slicedToArray(_useState11, 2),
      progressMethod = _useState12[0],
      setProgressMethod = _useState12[1],
      _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState14 = _slicedToArray(_useState13, 2),
      furtherStepsPendingIndicator = _useState14[0],
      setFurtherStepsPendingIndicator = _useState14[1],
      _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])('Choose the qualification you wish to apply for:'),
      _useState16 = _slicedToArray(_useState15, 2),
      windowPrompt = _useState16[0],
      setWindowPrompt = _useState16[1],
      promptQualification = 'Choose the qualification you wish to apply for:',
      promptRoute = 'Choose the route you wish to apply for:',
      promptEntryPoint = 'Choose the entry point you wish to apply for:',
      furtherStepsPending = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
    className: "how-to-apply--pgt--js__modal__progress__next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    className: "how-to-apply--pgt--js__modal__progress__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    className: "fas fa-circle icon",
    "aria-hidden": "true"
  }))));

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState18 = _slicedToArray(_useState17, 2),
      selectionButtonQualification = _useState18[0],
      setSelectionButtonQualification = _useState18[1],
      _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState20 = _slicedToArray(_useState19, 2),
      selectionLinkQualification = _useState20[0],
      setSelectionLinkQualification = _useState20[1],
      _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState22 = _slicedToArray(_useState21, 2),
      selectionButtonRoute = _useState22[0],
      setSelectionButtonRoute = _useState22[1],
      _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState24 = _slicedToArray(_useState23, 2),
      selectionLinkRoute = _useState24[0],
      setSelectionLinkRoute = _useState24[1],
      _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState26 = _slicedToArray(_useState25, 2),
      selectionButtonDate = _useState26[0],
      setSelectionButtonDate = _useState26[1],
      _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState28 = _slicedToArray(_useState27, 2),
      selectionLinkDate = _useState28[0],
      setSelectionLinkDate = _useState28[1],
      _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState30 = _slicedToArray(_useState29, 2),
      selectionHeadingLocationOne = _useState30[0],
      setSelectionHeadingLocationOne = _useState30[1],
      _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState32 = _slicedToArray(_useState31, 2),
      selectionButtonLocationOneDate = _useState32[0],
      setSelectionButtonLocationOneDate = _useState32[1],
      _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState34 = _slicedToArray(_useState33, 2),
      selectionLinkLocationOneDate = _useState34[0],
      setSelectionLinkLocationOneDate = _useState34[1],
      _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState36 = _slicedToArray(_useState35, 2),
      selectionHeadingLocationTwo = _useState36[0],
      setSelectionHeadingLocationTwo = _useState36[1],
      _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState38 = _slicedToArray(_useState37, 2),
      selectionButtonLocationTwoDate = _useState38[0],
      setSelectionButtonLocationTwoDate = _useState38[1],
      _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(false),
      _useState40 = _slicedToArray(_useState39, 2),
      selectionLinkLocationTwoDate = _useState40[0],
      setSelectionLinkLocationTwoDate = _useState40[1],
      _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])(),
      _useState42 = _slicedToArray(_useState41, 2),
      selectionLinkMethod = _useState42[0],
      setSelectionLinkMethod = _useState42[1],
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
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = new Date(sourceDate);
    return "".concat(months[formattedDate.getUTCMonth()], " ").concat(formattedDate.getUTCFullYear());
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

    var qualNav, routeNav, dateNav, methodNav;
    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
        // Load qualification select; clear route, date and method from progress navigation
        filterQualificationData(entryPoints);
        setProgressRoute();
        setProgressDate();
        setProgressMethod();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    selectedRouteData ? routeNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
        // Load route select; clear date and method from progress navigation
        setProgressDate();
        setProgressMethod();

        if (selectedQualificationData) {
          filterRouteData(selectedQualificationData[0]['options']);
        } else {
          filterQualificationData(entryPoints);
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Route"))) : routeNav = null;
    setProgressRoute(routeNav);
    selectedDateData ? dateNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Entry point"))) : dateNav = null;
    setProgressDate(dateNav); // Method loads apply links and, if present, will always be the last step, therefore progress icon does nothing on click

    methodNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__current"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-circle icon"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Method of study")));
    setProgressMethod(methodNav); // Final modal step; remove further steps pending indicator

    setFurtherStepsPendingIndicator();
    var methodLinks = [];
    var linkOptions;
    methods.map(function (m) {
      var methodLink = {
        text: m.header,
        link: m.options.apply
      };
      methodLinks.push(methodLink);
      linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_27__["default"], {
        data: methodLinks
      });
      setSelectionLinkMethod(linkOptions);
    });
  }

  function filterLocation(data, location, heading) {
    var uniqueLocationDataArray = [];
    data.map(function (d) {
      var uniqueLocationData = _objectSpread(_objectSpread({}, d), {}, {
        options: d.options.filter(function (e) {
          return e.header === location;
        })
      });

      uniqueLocationDataArray.push(uniqueLocationData);
    }); // Gather location information for header

    var locations = [];
    uniqueLocationDataArray.map(function (fd) {
      fd['options'][0] ? locations.push(fd['options'][0]['header']) : null;
    }); // Remove duplicate locations

    locations = locations.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    }); // Create heading

    var headingVal = locations.map(function (l) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("h3", {
        key: l
      }, l);
    }); // Create buttons

    var buttonVal = uniqueLocationDataArray.map(function (fd) {
      if (fd['options'].length > 0) {
        if (fd['options'][0]['options'].length > 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
            key: fd
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
            "data-date-src": fd['header'],
            onClick: function onClick(e) {
              var dateSrc = e.target.getAttribute('data-date-src');
              selectedDateValue = formatDate(dateSrc);
              selectedDateData = data.filter(function (fd) {
                return fd.header === dateSrc;
              });
              filterMethodsData(selectedDateData[0]['options'][0]['options'], 'Apply online now:');
              setFirstStep(false);
            }
          }, formatDate(fd['header']))));
        } else {
          var dateLink = {
            text: formatDate(fd.header),
            link: fd['options'][0]['options'][0]['options']['apply']
          };
          var locationDateLinks = [];
          locationDateLinks.push(dateLink);
          locationDateLinks = Array.from(new Set(locationDateLinks.map(function (a) {
            return a.text;
          }))).map(function (text) {
            return locationDateLinks.find(function (a) {
              return a.text === text;
            });
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_27__["default"], {
            data: locationDateLinks
          });
        }
      }
    });
    uniqueLocationDataArray.map(function () {
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

    var buttonOptions,
        linkOptions,
        dateButtons = [],
        dateLinks = [],
        locationOptions = [],
        locationsAll = [],
        qualNav,
        routeNav,
        dateNav,
        dateLink; // Progress indicator; display selected qualification and route values

    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    selectedRouteData ? routeNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose route"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Route"))) : routeNav = null;
    setProgressRoute(routeNav); // Method loads apply links and, if present, will always be the last step, therefore progress icon does nothing on click

    if (selectedDateData) {
      dateNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
        className: "how-to-apply--pgt--js__modal__progress__current"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "fas fa-circle icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__text"
      }, "Entry point")));
    } else {
      dateNav = null;
    }

    setProgressDate(dateNav);
    data.map(function (d) {
      var locations = d['options'];
      locations.map(function (l) {
        var methods = l['options'];
        methods.map(function () {
          // Multiple dates; print buttons
          if (data.length > 1 || data[0]['options'].length > 1) {
            // Date selection required: set progress indicator to route and remove methods
            selectedDateValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
              className: "how-to-apply--pgt--js__modal__progress__current"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__wrapper"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__circle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
              className: "fas fa-circle icon"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
              className: "how-to-apply--pgt--js__modal__progress__text"
            }, "Entry point")));
            setProgressDate(selectedDateValue);
            setProgressMethod(); // Calculate number of locations

            locations.map(function (lo) {
              locationOptions.push(lo.header);
            });
            locationOptions = locationOptions.reduce(function (a, i) {
              a.indexOf(i) === -1 ? a.push(i) : null;
              return a;
            }, []); // Multiple locations, multiple dates => create array of objects per location

            if (locationOptions.length > 1) {
              locationOptions.map(function (lo) {
                var filteredData = data.filter(function (fd) {
                  return fd['options'][0]['header'] === lo;
                });
                locationsAll.push(filteredData);
              });
              var uniqueLocations = [];
              data.map(function (d) {
                var dates = d['options'];
                dates.map(function (date) {
                  uniqueLocations.push(date.header);
                });
              }); // Remove duplicate locations

              uniqueLocations = uniqueLocations.filter(function (v, i, a) {
                return a.indexOf(v) === i;
              });

              for (var i = 1; i <= uniqueLocations.length; i++) {
                filterLocation(data, uniqueLocations[i - 1], "#location-".concat(i), "#location-".concat(i, "__buttons"));
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
                buttonOptions = dateButtons.map(function (db) {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
                    key: db
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                    "data-date-src": db,
                    onClick: function onClick(e) {
                      var dateSrc = e.target.getAttribute('data-date-src');
                      selectedDateValue = formatDate(dateSrc);
                      selectedDateData = data.filter(function (fd) {
                        return fd.header === dateSrc;
                      });
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

                var dateLinksData = [];
                dateLinks.map(function (lq) {
                  var filteredDateData = data.filter(function (q) {
                    return q.header === lq;
                  });
                  dateLink = {
                    text: formatDate(lq),
                    link: filteredDateData[0]['options'][0]['options'][0]['options']['apply']
                  };
                  dateLinksData.push(dateLink);
                });
                linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_27__["default"], {
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

    var buttonQuals = [],
        linkRoutes = [],
        routeLink,
        buttonOptions,
        linkOptions,
        locationOptions = [],
        qualNav; // Progress indicator; display selected qualification value

    selectedQualificationData ? qualNav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
      className: "how-to-apply--pgt--js__modal__progress__previous"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
      className: "how-to-apply--pgt--js__modal__progress__wrapper",
      onClick: function onClick() {
        filterQualificationData(entryPoints);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__circle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "fas fa-check icon",
      "aria-label": "Back to choose qualification"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
      className: "how-to-apply--pgt--js__modal__progress__text"
    }, "Qualification"))) : qualNav = null;
    setProgressQualification(qualNav);
    data.map(function (s) {
      // Routes pre-selection prompt text
      setWindowPrompt(promptRoute);
      var dates = s['options'];
      dates.map(function (d) {
        var locations = d['options'];
        locations.map(function (l) {
          var methods = l['options'];
          methods.map(function () {
            // Store each unique location value in an array
            locations.map(function (lo) {
              locationOptions.push(lo.header);
            });
            locationOptions = locationOptions.reduce(function (a, i) {
              a.indexOf(i) === -1 ? a.push(i) : null;
              return a;
            }, []);

            if (data.length > 1) {
              // Route selection required: set progress indicator to route and remove dates/methods
              selectedRouteValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
                className: "how-to-apply--pgt--js__modal__progress__current"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                className: "how-to-apply--pgt--js__modal__progress__wrapper"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                className: "how-to-apply--pgt--js__modal__progress__circle"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                className: "fas fa-circle icon"
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
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
                buttonOptions = buttonQuals.map(function (bq) {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
                    key: bq
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                    onClick: function onClick(e) {
                      selectedRouteValue = e.target.textContent;
                      selectedRouteData = data.filter(function (sr) {
                        return sr.header === selectedRouteValue;
                      });
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

                var routeLinksData = [];
                linkRoutes.map(function (lr) {
                  var filteredRouteData = data.filter(function (q) {
                    return q.header === lr;
                  });
                  routeLink = {
                    text: lr,
                    link: filteredRouteData[0]['options'][0]['options'][0]['options'][0]['options']['apply']
                  };
                  routeLinksData.push(routeLink);
                });
                linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_27__["default"], {
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

    var buttonQuals = [],
        linkQuals = [],
        buttonOptions,
        linkOptions,
        locationOptions = [];

    if (data.length > 1) {
      // Qualification selection required: set progress indicator to qualification and remove routes/dates/methods
      selectedQualificationValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
        className: "how-to-apply--pgt--js__modal__progress__current"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "fas fa-circle icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
        className: "how-to-apply--pgt--js__modal__progress__text"
      }, "Qualification")));
      setProgressQualification(selectedQualificationValue);
    }

    data.length > 1 ? data.map(function (e) {
      var routeNames = e['options'];
      routeNames.map(function (s) {
        var dates = s['options'];
        dates.map(function (d) {
          var locations = d['options'];
          locations.map(function (l) {
            var methods = l['options'];
            methods.map(function () {
              // Store each unique location value in an array
              locations.map(function (lo) {
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
                  buttonOptions = buttonQuals.map(function (bq) {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
                      key: bq
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
                      onClick: function onClick(e) {
                        selectedQualificationValue = e.target.innerText;
                        selectedQualificationData = data.filter(function (qual) {
                          return qual.header === selectedQualificationValue;
                        });
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

                  var methodLinks = [];
                  linkQuals.map(function (lq) {
                    var filteredQualData = data.filter(function (q) {
                      return q.header === lq;
                    });
                    var methodLink = {
                      text: lq,
                      link: filteredQualData[0]['options'][0]['options'][0]['options'][0]['options'][0]['options']['apply']
                    };
                    methodLinks.push(methodLink);
                  });
                  linkOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_buttons_apply__WEBPACK_IMPORTED_MODULE_27__["default"], {
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


  var question = 'qualification',
      qualificationQuestion = question === 'qualification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_26___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", null, windowPrompt), !(selectionHeadingLocationOne || selectionButtonLocationOneDate || selectionLinkLocationOneDate || selectionHeadingLocationTwo || selectionButtonLocationTwoDate || selectionLinkLocationTwoDate) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options"
  }, selectionButtonQualification, selectionLinkQualification, selectionButtonRoute, selectionLinkRoute, selectionButtonDate, selectionLinkDate, selectionLinkMethod) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_26___default.a.Fragment, null, selectionHeadingLocationOne, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"
  }, selectionButtonLocationOneDate, selectionLinkLocationOneDate), selectionHeadingLocationTwo, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("ul", {
    className: "how-to-apply--pgt--js__options how-to-apply--pgt--js__options--multiple-locations"
  }, selectionButtonLocationTwoDate, selectionLinkLocationTwoDate)))),
      alternative = props.element.dataset.otheryear && props.element.dataset.otherurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    className: "how-to-apply--pgt--js__modal__alternative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("a", {
    href: props.element.dataset.otherurl
  }, props.element.dataset.otheryear, " entry is also available.")); // End modal wrapper render
  // Focus trap

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_26__["useState"])({}),
      _useState44 = _slicedToArray(_useState43, 2),
      focusTrap = _useState44[0],
      setFocusTrap = _useState44[1];

  var modalContentRef = null;

  var getModalContent = function getModalContent() {
    return modalContentRef;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_26__["useEffect"])(function () {
    if (!focusTrap.activate) {
      setFocusTrap(focus_trap__WEBPACK_IMPORTED_MODULE_29___default()(getModalContent(), {
        initialFocus: getModalContent().querySelector('.how-to-apply--pgt--js__options button, .how-to-apply--pgt--js__options a'),
        onDeactivate: function onDeactivate() {
          return setModalVisible(false);
        },
        clickOutsideDeactivates: true
      }));
    }

    if (modalVisible) {
      focusTrap.activate && focusTrap.activate();
      Object(_util__WEBPACK_IMPORTED_MODULE_30__["disableBodyScroll"])();
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(_util__WEBPACK_IMPORTED_MODULE_30__["enableBodyScroll"])();
    }
  }, [modalVisible]); // End focus trap
  // Render the 'Apply now' CTA which launches the modal

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_26___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("ul", {
    className: "cta-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("li", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
    className: "primary-cta-arrow--bright",
    onClick: function onClick() {
      setModalVisible(true);
      setFirstStep(true); // Don't show 'Start again' option on initial modal load

      clearSelectionOptions(); // Clear any previously rendered selection buttons/links from the state

      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", null, "Apply now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal",
    "data-open": modalVisible
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content",
    ref: function ref(modalContent) {
      return modalContentRef = modalContent;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
    className: "how-to-apply--pgt--js__close",
    onClick: function onClick() {
      focusTrap.deactivate && focusTrap.deactivate();
      Object(_util__WEBPACK_IMPORTED_MODULE_30__["enableBodyScroll"])();
      setModalVisible(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon",
    "aria-label": "Close"
  })), !firstStep ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__reset" // style={{ display: 'block' }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("button", {
    onClick: function onClick() {
      // Clear options display and render what user would see when modal is first opened
      setFirstStep(true);
      filterQualificationData(entryPoints);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    className: "fas fa-redo"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", null, "Start again"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("ol", {
    className: "how-to-apply--pgt--js__modal__progress"
  }, progressQualification, progressRoute, progressDate, progressMethod, furtherStepsPendingIndicator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("h2", null, "Start in ", props.element.dataset.year)), qualificationQuestion, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
    className: "how-to-apply--pgt--js__modal__content-wrapper"
  }, alternative))));
}

HowToApply.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_28___default.a.array,
  element: prop_types__WEBPACK_IMPORTED_MODULE_28___default.a.object
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
 * @copyright City St George's, University of London 2020
 */

var timeout = 30000;
/**
 * How to apply configuration.
 *
 * @param {string} url The HTA configuration file.
 * @return {Promise} - A promise of  configuration object.
 */

function howToApplyConfig(url) {
  var config = {
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
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























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

var partialMatchFn = function partialMatchFn(m) {
  return function (s) {
    return s.indexOf(m) < 0;
  };
},
    fullMatchFn = function fullMatchFn(m) {
  return function (s) {
    return s !== m;
  };
};
/**
 * Remove a class name from an HTML element.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @param {string} className - A string representing the class to remove.
 * @param {boolean} [removePartials] - If true, remove partially matching classes.
 */


function removeClass(elem, className, removePartials) {
  var matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(function (s) {
    return matchFn(s);
  }).join(' ');
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
  var reducedMotionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : false;
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
  var parameters = {};
  parameterString.substr(1).split('&').forEach(function (parameter) {
    var _parameter$split = parameter.split('='),
        _parameter$split2 = _slicedToArray(_parameter$split, 2),
        k = _parameter$split2[0],
        v = _parameter$split2[1];

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
    var parameters = '?';

    for (var key in parameterObj) {
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
  children.forEach(function (child) {
    return elem.appendChild(child);
  });
}
/**
 * Extract number from string, e.g. return '123' from string 'a1b2c3'.
 *
 * @param {string} string - String
 */

function numberFromString(string) {
  var number = string.replace(/\D/g, '');
  return number;
}
/**
 * Calculates viewport width to determinte if using mobile
 * @param {number} number - width of screen, with default value = 432.
 *
 */

function isMobile() {
  var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 432;
  var viewPortWidth = window.innerWidth;
  var mobileScreen = screen;

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
  var array = []; // iterate backwards ensuring that length is an UInt32

  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
/**
 * Check browser user agent is IE or edge and return version number
 */

function detectIE() {
  var ua = window.navigator.userAgent,
      versionLength = 10,
      msie = ua.indexOf('MSIE '),
      msieVersionOffset = 5;

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + msieVersionOffset, ua.indexOf('.', msie)), versionLength);
  }

  var trident = ua.indexOf('Trident/'),
      tridentVersionOffset = 3;

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + tridentVersionOffset, ua.indexOf('.', rv)), versionLength);
  }

  var edge = ua.indexOf('Edge/'),
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
  var el = document.createElement(type);
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
  var httpOK = 200;
  return axios__WEBPACK_IMPORTED_MODULE_25___default()(config).then(function (response) {
    if (httpOK === response.status) {
      return response.data;
    } else {
      throw "Bad response: ".concat(response.status);
    }
  })["catch"](function (e) {
    if (!axios__WEBPACK_IMPORTED_MODULE_25___default.a.isCancel(e)) {
      gaEvent('jsError', 'JavaScript error', "Line ".concat(e.lineNumber, " \u2013 ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), true);
    }
  });
}
/**
 * Returns a react fragment formatted time
 * @param {Date} date - A date object.
 * @returns {ReactFragment} The formatted time to local time.
 */

function formatTime(timeString, timeZone) {
  var time = new Date(timeString);
  var timeLabel;

  if (timeZone) {
    var timeOffset = time.getTimezoneOffset() / -60;
    timeLabel = timeOffset === 0 ? '(GMT)' : '(BST)';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("time", {
    dateTime: "".concat(time.getHours() ? time.getHours() : '00', ":").concat(time.getMinutes() ? time.getMinutes() : '00')
  }, time.getHours() ? time.getHours() : '00', ":", time.getMinutes() ? time.getMinutes() : '00', " ", timeLabel);
}
/**
 * Returns the correct English suffix for a number.
 *
 * @param  {number} day - The day of the month.
 * @returns {string} The correct suffix.
 */

function daySuffix(day) {
  var eleventh = 11,
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
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("time", {
    dateTime: date.toISOString().split('T')[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("sup", null, daySuffix(date.getUTCDate())), ' ', months[date.getUTCMonth()], " ", date.getUTCFullYear());
}
/**
 * Array slicer
 *
 * @param {array} arr - array to be split up into subarrays
 * @param {number} len - max number items that goes into each subarray
 */

function arraySlicer(arr, len) {
  var newArray = [],
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
  var result = {}; // loop through the object "ob"

  var _loop = function _loop(i) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (_typeof(ob[i]) === 'object' && !Array.isArray(ob[i])) {
      var temp = flattenObj(ob[i]);

      for (var j in temp) {
        if (i === 'parameters') {
          result["".concat(i, "-").concat(j)] = temp[j];
        } else {
          result[j] = temp[j];
        } // Store temp in result

      }
    } else if (Array.isArray(ob[i])) {
      ob[i].forEach(function (val) {
        if (i === 'fixedFacets') {
          result["".concat(i, "-").concat(val.meta)] = val.value;
        } else {
          result["".concat(i, "-").concat(val.name)] = val.value;
        }
      });
    } // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  };

  for (var i in ob) {
    _loop(i);
  }

  return result;
}
/**
 * function that calculates the scrollbar width
 */

function getVerticalScrollbarWidth() {
  // Creating a div element for helping to calculate scrollbar width
  var scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'; // Appending the div to the body to measure scrollbar width

  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Remove the div from the body

  document.body.removeChild(scrollDiv); // adds scrollbar width as variable to root so can be used by CSS styles

  var root = document.documentElement;
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