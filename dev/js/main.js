/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component-list.js":
/*!*******************************!*\
  !*** ./src/component-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cookie-notice/cookie-notice */ "./src/components/cookie-notice/cookie-notice.js");
/* harmony import */ var _components_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cms-editor-warning/cms-editor-warning */ "./src/components/cms-editor-warning/cms-editor-warning.js");
/* harmony import */ var _components_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/global-nav/global-nav */ "./src/components/global-nav/global-nav.js");
/* harmony import */ var _components_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_2__);





/* harmony default export */ __webpack_exports__["default"] = ([_components_cms_editor_warning_cms_editor_warning__WEBPACK_IMPORTED_MODULE_1___default.a, _components_cookie_notice_cookie_notice__WEBPACK_IMPORTED_MODULE_0___default.a, _components_global_nav_global_nav__WEBPACK_IMPORTED_MODULE_2___default.a]);

/***/ }),

/***/ "./src/components/cms-editor-warning/cms-editor-warning.js":
/*!*****************************************************************!*\
  !*** ./src/components/cms-editor-warning/cms-editor-warning.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// const warningClass = 'cms-editor-warning',
//     removerClass = 'cms-editor-warning-remover';
// function removeCMSEditorWarnings() {
//     Array.from(document.getElementsByClassName(warningClass)).forEach()
// }


/***/ }),

/***/ "./src/components/cookie-notice/cookie-notice.js":
/*!*******************************************************!*\
  !*** ./src/components/cookie-notice/cookie-notice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./src/components/global-nav/global-nav.js":
/*!*************************************************!*\
  !*** ./src/components/global-nav/global-nav.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-list */ "./src/component-list.js");




function tryCatch(f) {
  try {
    f();
  } catch (e) {
    if (console && console.error) {
      console.error(e);
    }
  }
}

function launchPattern(pattern) {
  if (typeof pattern === 'function') {
    tryCatch(pattern);
  } else if (pattern.className) {
    var className = pattern.className,
        launch = pattern.launch;
    Array.from(document.getElementsByClassName(className)).filter(function (element) {
      return !element.className.indexOf(className + '-no-js');
    }).forEach(function (element) {
      return tryCatch(function () {
        return launch(element);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByTagName('html').forEach(this.className = 'js');
  _component_list__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(launchPattern);
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map