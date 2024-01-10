/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/patterns/search/components/inline/search--inline__clear.js":
/*!************************************************************************!*\
  !*** ./src/patterns/search/components/inline/search--inline__clear.js ***!
  \************************************************************************/
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
 * @module patterns/search/components/search--inline__clear
 * @author Web Development
 * @copyright City, University of London 2020
 */




/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function InlineSearch__Clear(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "search--inline__clear",
    type: "button",
    onClick: () => {
      props.clear();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search--inline__clear__text"
  }, "Clear query"));
}
InlineSearch__Clear.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSearch__Clear);

/***/ }),

/***/ "./src/patterns/search/components/inline/search--inline__query.js":
/*!************************************************************************!*\
  !*** ./src/patterns/search/components/inline/search--inline__query.js ***!
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
/* harmony import */ var _search_inline_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search--inline__clear */ "./src/patterns/search/components/inline/search--inline__clear.js");


/**
 * @module patterns/search/components/search--inline__query
 * @author Web Development
 * @copyright City, University of London 2020
 */




const escapeKey = 'Escape';

/**
 * Search input field and autocomplete.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function InlineSearch__Query(props) {
  // save what they're typing
  const [partialQuery, setPartialQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.query.query);
  // ref for the input field, so we can .focus() it
  const stringLength = 16,
    stringOffset = -4,
    [inputId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('search--inline--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }

  // on clear, make a default request for results
  const clearQuery = () => {
    setPartialQuery('');
    focusInput();
    const newQuery = props.query;
    newQuery.query = '';
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const fetchSuggestions = partialQuery => {
    const newQuery = props.query;
    newQuery.query = partialQuery;
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_search_inline_clear__WEBPACK_IMPORTED_MODULE_1__["default"], {
    clear: () => {
      clearQuery();
    }
  });
  const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search--inline__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search--inline__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search--inline__icon fal fa-sharp fa-search icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: props.config.placeholder,
    ref: input => {
      textInput = input;
    },
    type: "text",
    required: true,
    value: partialQuery,
    onKeyDown: e => {
      switch (e.key) {
        case escapeKey:
          clearQuery();
          break;
        default:
          break;
      }
    },
    onChange: e => {
      setPartialQuery(e.target.value);
      fetchSuggestions(e.target.value);
    }
  }), clear);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: "search--inline__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "search--inline__query__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search--inline__query__submit__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fas fa-sharp fa-search search--inline__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search--inline__query__submit__text"
  }, "Search")))));
}
InlineSearch__Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSearch__Query);

/***/ }),

/***/ "./src/patterns/search/components/inline/search--inline__suggestions.js":
/*!******************************************************************************!*\
  !*** ./src/patterns/search/components/inline/search--inline__suggestions.js ***!
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
 * @module patterns/search/components/search--inline__suggestions
 * @author Web Development
 * @copyright City, University of London 2020
 */



function highlightQueryTerm(suggestion, partialQuery) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search--inline__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length))));
}

/**
 * Suggestions.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function InlineSearch__Suggestions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search--inline__suggestions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Suggestions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, props.suggestions.map((suggestion, i) => {
    const urlString = suggestion.replace(/\s+/g, '+'),
      highlighted = highlightQueryTerm(suggestion, props.query.query);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: `/search?query=${urlString}`
    }, highlighted));
  })));
}
InlineSearch__Suggestions.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  suggestions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSearch__Suggestions);

/***/ }),

/***/ "./src/patterns/search/components/inline/search--inline__topresults.js":
/*!*****************************************************************************!*\
  !*** ./src/patterns/search/components/inline/search--inline__topresults.js ***!
  \*****************************************************************************/
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
 * @module patterns/search/components/search--inline__topresults
 * @author Web Development
 * @copyright City, University of London 2020
 */




// FIXME for go live
const siteUrl = 'city.ac.uk';
function genericResult(result, type) {
  const thumbnail = result.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card__thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: result.listMetadata.thumbnail[0],
      alt: ""
    }))),
    label = type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__label"
    }, type),
    external = result.liveUrl.indexOf(siteUrl) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card--search",
    key: result.docNum
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: result.liveUrl,
    className: "card__details card__anchor"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "card__heading"
  }, result.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, result.listMetadata.c && result.listMetadata.c[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__url"
  }, result.liveUrl))));
}

/**
 * Suggestions.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function InlineSearch__TopResults(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search--inline__topresults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Top results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, props.results.map(result => {
    switch (result.collection) {
      case 'web2020-residentialhalls':
        return genericResult(result, 'Residential hall');
      case 'web2020-business-impact':
        return genericResult(result, 'Case study');
      case 'web2020-research':
        return genericResult(result, 'Case study');
      case 'web2020-centres':
        return genericResult(result, 'Research centre');
      case 'web2020-courses':
        return genericResult(result, 'Course');
      case 'web2020-events':
        return genericResult(result, 'Event');
      case 'web2020-facilities':
        return genericResult(result, 'Facility');
      case 'web2020-locations':
        return genericResult(result, 'Location');
      case 'web2020-pathways':
        return genericResult(result, 'Career pathway');
      case 'web2020-funding':
        return genericResult(result, 'Funding');
      case 'web2020-news':
        return genericResult(result, 'News');
      case 'web2020-profiles':
        return genericResult(result, 'Profile');
      default:
        return genericResult(result, null);
    }
  })));
}
InlineSearch__TopResults.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  results: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSearch__TopResults);

/***/ }),

/***/ "./src/patterns/search/components/main/query/search__clear.js":
/*!********************************************************************!*\
  !*** ./src/patterns/search/components/main/query/search__clear.js ***!
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
 * @module patterns/search/components/search__clear
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__Clear(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "search__clear",
    type: "button",
    onClick: () => {
      props.clear();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search__clear__text"
  }, "Clear query"));
}
Search__Clear.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__Clear);

/***/ }),

/***/ "./src/patterns/search/components/main/query/search__collection.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/search/components/main/query/search__collection.js ***!
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


/**<
 * @module patterns/search/components/main/query/search__collection
 * @author Web Development
 * @copyright City, University of London 2020
 */



function Search__Collection(props) {
  const currentValue = props.query.collection || props.config.primary[0].collection;
  const setCollection = value => {
    const newQuery = props.query;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    newQuery.collection = value;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `search__filter search__select ${currentValue !== props.config.primary.collections[0].collection && 'search__select--selected'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "search__collection"
  }, props.config.primary.collections[0].label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "collection",
    id: "search__collection",
    onChange: e => setCollection(e.target.value),
    value: currentValue
  }, props.config.primary.collections.map((collection, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: i,
      value: collection.collection.toLowerCase()
    }, collection.label);
  })));
}
Search__Collection.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__Collection);

/***/ }),

/***/ "./src/patterns/search/components/main/query/search__query.js":
/*!********************************************************************!*\
  !*** ./src/patterns/search/components/main/query/search__query.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _search_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search__clear */ "./src/patterns/search/components/main/query/search__clear.js");
/* harmony import */ var _search_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search__collection */ "./src/patterns/search/components/main/query/search__collection.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


/**
 * @module patterns/search/components/search__query
 * @author Web Development
 * @copyright City, University of London 2020
 */






const maximumSuggestions = 5,
  escapeKey = 'Escape',
  endKey = 'End',
  homeKey = 'Home',
  arrowUp = 'ArrowUp',
  arrowDown = 'ArrowDown';
function highlightQueryTerm(suggestion, partialQuery) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "search__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length))));
}

/**
 * Search input field and autocomplete.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__Query(props) {
  // save what they're typing
  const [partialQuery, setPartialQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.query.query);
  // Funnelback suggestions for the currently typed text
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  // Request token for calls to the Funnelback suggestions service, so we
  // can cancel it
  const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    cancel: () => {}
  });
  // ref for the input field, so we can .focus() it
  const stringLength = 16,
    stringOffset = -4,
    [inputId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('search--' + props.query.collection + '--' + Math.random().toString(stringLength).slice(stringOffset));
  const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    [activeSuggestionID, setActiveSuggestionID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
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
    newQuery.misspelling = null;
    newQuery.query = '';
    newQuery.sortType = '';
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const submitForm = query => {
    call.cancel();
    setSuggestions([]);
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : '';
    newQuery.sortType = '';
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_search_clear__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  const suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? 'search__query__suggestions show' : 'search__query__suggestions hide'
  }, [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    key: suggestion,
    role: "option",
    id: inputId + '--' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
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
  const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "search__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "search__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "search__icon fal fa-sharp fa-search icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: props.primary[0].placeholder,
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
            e.target.parentNode.querySelector('.search__query__suggestions button').focus();
            setActiveSuggestionID(e.target.parentNode.querySelector('.search__query__suggestions li').id);
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
        const [suggestionsPromise, newCall] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_0__.suggest)(props.query.collection, e.target.value);

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
  const collection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_search_collection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: props.config,
    query: props.query,
    update: props.update
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("fieldset", {
    className: "search-form__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "wrapper--search-form__query__fields"
  }, collection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "wrapper--search-form__query__fields__input"
  }, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "submit",
    className: "search__query__submit",
    onClick: () => submitForm()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fal fa-sharp fa-search search__query__submit__icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "search__query__submit__text"
  }, "Search")))));
}
Search__Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  primary: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__Query);

/***/ }),

/***/ "./src/patterns/search/components/main/results/search__bestbets.js":
/*!*************************************************************************!*\
  !*** ./src/patterns/search/components/main/results/search__bestbets.js ***!
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
 * @module patterns/search/components/main/results/search__bestbets
 * @author Web Development
 * @copyright City, University of London 2020
 */



const maximumBestBetsToDisplay = 3;

/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__BestBets(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--search__bestbets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search__bestbets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "search__bestbets__heading sr-only"
  }, "Best bets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "search__bestbets__list"
  }, props.bestbets.slice(0, maximumBestBetsToDisplay).map((bestBet, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card--search card--bestbet",
    key: 'bestBet' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: bestBet.displayUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, bestBet.titleHtml), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, bestBet.descriptionHtml), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__url"
  }, bestBet.displayUrl))))))));
}
Search__BestBets.propTypes = {
  bestbets: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__BestBets);

/***/ }),

/***/ "./src/patterns/search/components/main/results/search__othersites.js":
/*!***************************************************************************!*\
  !*** ./src/patterns/search/components/main/results/search__othersites.js ***!
  \***************************************************************************/
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
 * @module patterns/search/components/main/results/search__othersites
 * @author Web Development
 * @copyright City, University of London 2020
 */




// FIXME for go live
const siteUrl = 'city.ac.uk';
const maximumResultsToDisplay = 0;
function genericResult(result, collection, i) {
  const thumbnail = result.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card__thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: result.listMetadata.thumbnail[0],
      alt: ""
    }))),
    external = result.liveUrl.indexOf(siteUrl) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-sharp external-link icon",
      "aria-label": "(external link)"
    }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card--search",
    key: collection + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: result.liveUrl,
    className: "card__details card__anchor"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "card__heading"
  }, result.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, result.listMetadata.c && result.listMetadata.c[0]))));
}

/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__OtherSites(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper--search__othersites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search__othersites"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "search__othersites__heading"
  }, "Results on other City sites"), props.collections.map((collection, i) => {
    if (!collection.updating && collection.response && collection.response.summary.totalMatching > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search__othersites__site",
        key: 'site' + i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "search__othersites__site__heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: collection.search + '?query=' + props.query.query
      }, collection.label, " (", collection.response.summary.totalMatching, ")"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "fas fa-sharp fa-arrow-right icon",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search__results"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "search__results__list"
      }, collection.response.results.slice(0, maximumResultsToDisplay).map((result, j) => genericResult(result, collection.collection, j)))));
    } else {
      return null;
    }
  }), props.nonpublic.map((collection, i) => {
    if (!collection.updating && collection.response && collection.response.summary.totalMatching > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "search__othersites__site",
        key: 'site' + i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "search__othersites__site__heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: collection.search + '?query=' + props.query.query
      }, collection.label, " (", collection.response.summary.totalMatching, ")"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "far fa-sharp fa-lock-alt icon",
        "aria-label": "Login required"
      })));
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search__othersites__noresults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No results found."))));
}
Search__OtherSites.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  collections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  nonpublic: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__OtherSites);

/***/ }),

/***/ "./src/patterns/search/components/main/results/search__peopletypes.js":
/*!****************************************************************************!*\
  !*** ./src/patterns/search/components/main/results/search__peopletypes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * @module patterns/search/components/main/results/search__peopletypes
 * @author Web Development
 * @copyright City, University of London 2021
 */

/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

let peopleTypes = [{
  type: 'academics',
  path: 'academics',
  fbRef: 'academic'
}, {
  type: 'students',
  path: 'students',
  fbRef: 'student'
}, {
  type: 'research students',
  path: 'research-students',
  fbRef: 'research'
}, {
  type: 'honorary graduates',
  path: 'honorary-graduates',
  fbRef: 'honorary'
}, {
  type: 'past students',
  path: 'past-students',
  fbRef: 'alumni'
}, {
  type: 'professional services staff',
  path: 'professional-services-staff',
  fbRef: 'professional'
}, {
  type: 'international',
  path: 'international',
  fbRef: 'agent'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (peopleTypes);

/***/ }),

/***/ "./src/patterns/search/components/main/results/search__results.js":
/*!************************************************************************!*\
  !*** ./src/patterns/search/components/main/results/search__results.js ***!
  \************************************************************************/
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
/* harmony import */ var _results_search_results_browsepeople__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results/search__results__browsepeople */ "./src/patterns/search/components/main/results/search__results__browsepeople.js");
/* harmony import */ var _finder_components_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../finder/components/cards/finder__results__card */ "./src/patterns/finder/components/cards/finder__results__card.js");
/* harmony import */ var _finder_components_results_finder_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../finder/components/results/finder__pagination */ "./src/patterns/finder/components/results/finder__pagination.js");
/* harmony import */ var _search_peopletypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search__peopletypes */ "./src/patterns/search/components/main/results/search__peopletypes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);



/**
 * @module patterns/search/components/main/results/search__results
 * @author Web Development
 * @copyright City, University of London 2020
 */







const siteUrl = 'city.ac.uk';
const endKey = 'End',
  homeKey = 'Home',
  arrowLeft = 'ArrowLeft',
  arrowUp = 'ArrowUp',
  arrowRight = 'ArrowRight',
  arrowDown = 'ArrowDown';
function genericResult(result, type, i) {
  const label = type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "card__label"
    }, type),
    external = result.liveUrl.indexOf(siteUrl) < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "card--search",
    key: 'all' + i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: result.liveUrl,
    className: "card__details card__anchor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "card__details__text"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "card__heading"
  }, result.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "card__description"
  }, result.listMetadata.c && result.listMetadata.c[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "card__url"
  }, result.liveUrl))));
}

/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__Results(props) {
  const fbLabels = [];
  const peopleCollection = props['finders'].filter(f => {
    return f.label === 'People' && f['response'];
  });

  // Check 'allValues' array exists before capturing labels (prevents error when search is autocorrected)
  if (JSON.stringify(peopleCollection).indexOf('allValues') > -1) {
    let fbLabelsSrc = peopleCollection[0]['response']['facets'][0]['allValues'];
    for (const f of fbLabelsSrc) {
      fbLabels.push(f.data);
    }
  }
  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const updating = results => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "search__results__updating",
      "aria-live": "polite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-spinner fa-pulse icon",
      "aria-hidden": "true"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Updating ", results, "\u2026"));
  };

  /**
   * Respond to cursor key events inside the tabbed section.
   *
   * @param {Event} e - The initiating keydown event.
   */
  function keyEvents(e) {
    switch (e.key) {
      case arrowLeft:
        props.element.querySelector(`.tabs__links li:nth-child(${currentTab !== 0 ? currentTab : 1}) button`).focus();
        currentTab !== 0 && setCurrentTab(currentTab - 1);
        break;
      case arrowRight:
        props.element.querySelector(`.tabs__links li:nth-child(${currentTab !== props.finders.length ? currentTab + 2 : currentTab + 1}) button`).focus();
        currentTab !== props.finders.length && setCurrentTab(currentTab + 1);
        break;
      case arrowUp:
        /**
         * Move focus to the currently selected tab control.
         */
        props.element.querySelector('.tabs__links button[aria-current="true"]').focus();
        break;
      case arrowDown:
        /**
         * Move focus into the tab content.
         */
        props.element.querySelector('.tabs__panel:not([hidden])').focus();
        break;
      case homeKey:
        /**
         * First tab
         */
        setCurrentTab(0);
        break;
      case endKey:
        /**
         * Last tab
         */
        setCurrentTab(props.finders.length);
        break;
      default:
        break;
    }
  }
  const links = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "tabs__links",
    role: "tablist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    key: "tabs__links__primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    role: "tab",
    id: 'link--search443531__tabs__' + props.primary[0].collection,
    title: props.primary[0].label,
    "aria-selected": currentTab === 0,
    "aria-current": currentTab === 0,
    onClick: () => setCurrentTab(0)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.primary[0].label, " (", props.primary[0].updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "fas fa-sharp fa-spinner fa-pulse icon",
    "aria-label": "Updating\u2026"
  }) : props.primary[0].response && props.primary[0].response.summary.totalMatching, ")"))), props.finders.map((finder, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      key: 'tabs__links__finder' + i,
      role: "presentation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      id: 'link--search443531__tabs__' + finder.collection,
      title: finder.label,
      "aria-selected": currentTab === i + 1,
      "aria-current": currentTab === i + 1,
      onClick: () => setCurrentTab(i + 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, finder.label, " (", finder.updating || !finder.response ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-spinner fa-pulse icon",
      "aria-label": "Updating\u2026"
    }) : finder.response.summary.totalMatching, ")")));
  }));

  // if we have more results than will fit on a single page, we need
  // pagination
  const primaryPagination = props.primary[0].response && props.primary[0].response.summary.totalMatching > props.primary[0].response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_finder_components_results_finder_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currStart: props.primary[0].response.summary.currStart,
    numRanks: props.primary[0].response.summary.numRanks,
    query: props.query,
    totalMatching: props.primary[0].response.summary.totalMatching,
    update: props.update
  });
  const spell = props.primary[0] && props.primary[0].response && props.primary[0].response.spell && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Did you mean", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: `search?${props.primary[0].response.spell.url}`
  }, props.primary[0].response.spell.text), "?");
  const panels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "tabs__panel",
    id: 'search443531__tabs__' + props.primary[0].collection,
    "aria-labelledby": 'link--search443531__tabs__' + props.primary[0].collection,
    key: "primary",
    role: "tabpanel",
    tabIndex: "-1",
    hidden: currentTab !== 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "tabs__panel__heading sr-only"
  }, props.primary[0].label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "tabs__panel__body"
  }, props.primary[0].updating ? updating('results') : props.primary[0].response && props.primary[0].response.summary.totalMatching > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "search__results"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "search__results__summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    "aria-live": "polite",
    className: "search__results__summary__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "(showing", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.primary[0].response.summary.currStart), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.primary[0].response.summary.currEnd), ' ', "of", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.primary[0].response.summary.totalMatching), ' ', props.primary[0].response.summary.totalMatching === 0 ? 'results' : props.primary[0].response.summary.totalMatching === 1 ? 'result' : 'results', ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ol", {
    className: "search__results__list",
    start: props.primary[0].response.summary.currStart
  }, props.primary[0].response.results.map((result, i) => {
    switch (result.collection) {
      case 'web2020-residentialhalls':
        return genericResult(result, 'Residential hall', i);
      case 'web2020-business-impact':
        return genericResult(result, 'Case study', i);
      case 'web2020-research':
        return genericResult(result, 'Case study', i);
      case 'web2020-centres':
        return genericResult(result, 'Research centre', i);
      case 'web2020-courses':
        return genericResult(result, 'Course', i);
      case 'web2020-events':
        return genericResult(result, 'Event', i);
      case 'web2020-facilities':
        return genericResult(result, 'Facility', i);
      case 'web2020-locations':
        return genericResult(result, 'Location', i);
      case 'web2020-pathways':
        return genericResult(result, 'Career pathway', i);
      case 'web2020-funding':
        return genericResult(result, 'Funding', i);
      case 'web2020-news':
        return genericResult(result, 'News', i);
      case 'web2020-profiles':
        return genericResult(result, 'Profile', i);
      default:
        return genericResult(result, null, i);
    }
  })), primaryPagination) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "search__results__summary search__results__summary--noresults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "search__results__summary__heading"
  }, "Your search did not match any results."), spell, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Suggestions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Make sure that all words are spelled correctly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Try different keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Try more general keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Try fewer keywords"))))), props.finders.map((finder, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
      className: "tabs__panel",
      id: 'search443531__tabs__' + finder.collection,
      "aria-labelledby": 'link--search443531__tabs__' + finder.collection,
      key: 'finder' + i,
      role: "tabpanel",
      tabIndex: "-1",
      hidden: currentTab !== i + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
      className: "tabs__panel__heading sr-only"
    }, finder.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "tabs__panel__body"
    }, finder.updating || !finder.response ? updating(finder.summariseAs.plural) : finder.response.summary.totalMatching > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "search__results"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "search__results__summary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
      "aria-live": "polite",
      className: "search__results__summary__heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "(showing", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, finder.response && finder.response.summary.currStart), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, finder.response && finder.response.summary.currEnd), ' ', "of", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, finder.response && finder.response.summary.totalMatching), ' ', finder.response && finder.response.summary.totalMatching === 0 ? finder.summariseAs.plural : finder.response && finder.response.summary.totalMatching === 1 ? finder.summariseAs.singular : finder.summariseAs.plural, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ol", {
      className: "search__results__list",
      start: finder.response && finder.response.summary.currStart
    }, finder.response && finder.response.results.map((result, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_finder_components_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      bestBet: false,
      details: result,
      key: finder.collection + i,
      type: finder.resultCard,
      query: props.query
    }))), finder.response && finder.response.summary.totalMatching > finder.response.summary.currEnd && finder.summariseAs.plural !== 'people' && finder.search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "search__results__more"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: finder.search + '?query=' + props.query.query
    }, "Browse more", ' ', finder.summariseAs.plural, ' '), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-arrow-right icon",
      "aria-hidden": "true"
    })), finder.response && finder.response.summary.totalMatching > finder.response.summary.currEnd && finder.summariseAs.plural === 'people' && finder.search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "search__results__browse-more"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Browse more people"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
      className: "cta-block cta-block--inline"
    }, _search_peopletypes__WEBPACK_IMPORTED_MODULE_5__["default"].map((people, i) => {
      if (fbLabels.includes(people.fbRef)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_results_search_results_browsepeople__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          query: finder.response.query,
          path: people.path,
          type: people.type
        });
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "search__summary__noresults"
    }, "No matching ", finder.summariseAs.plural, ".", ' ', finder.search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: finder.search
    }, "Browse", ' ', finder.summariseAs.plural, ' ', "instead"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "fas fa-sharp fa-arrow-right icon",
      "aria-hidden": "true"
    })))));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "tabs wrapper--search__results",
    onKeyDown: e => keyEvents(e)
  }, links, panels);
}
Search__Results.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  finders: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),
  primary: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__Results);

/***/ }),

/***/ "./src/patterns/search/components/main/results/search__results__browsepeople.js":
/*!**************************************************************************************!*\
  !*** ./src/patterns/search/components/main/results/search__results__browsepeople.js ***!
  \**************************************************************************************/
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
 * @module patterns/search/components/main/results/search__results__browsepeople
 * @author Web Development
 * @copyright City, University of London 2021
 */




/**
 * Render browse people.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Search__Results__BrowsePeople(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "outline-cta--bright-square",
    href: 'https://www.city.ac.uk/about/people/' + props.path + '?query=' + props.query
  }, props.type.charAt(0).toUpperCase() + props.type.slice(1)));
}
Search__Results__BrowsePeople.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search__Results__BrowsePeople);

/***/ }),

/***/ "./src/patterns/search/search--inline.js":
/*!***********************************************!*\
  !*** ./src/patterns/search/search--inline.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _components_inline_search_inline_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inline/search--inline__query */ "./src/patterns/search/components/inline/search--inline__query.js");
/* harmony import */ var _components_inline_search_inline_suggestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inline/search--inline__suggestions */ "./src/patterns/search/components/inline/search--inline__suggestions.js");
/* harmony import */ var _components_inline_search_inline_topresults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inline/search--inline__topresults */ "./src/patterns/search/components/inline/search--inline__topresults.js");


/**
 * Inline search form.
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/search/search--inline
 * @author Web Development
 * @copyright City, University of London 2020
 */








let modal = null;
const getmodal = () => modal;

/**
 * Launch the inline search.
 *
 * @param {object} props The JSON configuration file for search.
 * @return {object} The React component to render.
 */
function InlineSearch(props) {
  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [focusTrap, setFocusTrap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const maximumSuggestions = 10;
  const initialQuery = {
    collection: props.config.collection,
    misspelling: null,
    numRanks: props.config.numRanks,
    query: '',
    startRank: 1,
    facets: [],
    fixedFacets: [],
    fixedParameters: []
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
  const initialSuggestions = [];

  // State objects for the Funnelback query and response
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuery);
  const [funnelbackResponse, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialResponse);
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSuggestions);

  // Boolean to indicate when a query is in progress
  const [updating, setUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Boolean to indicate when a query is in progress
  const [suggestionsUpdating, setSuggestionsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

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

  // Request token from the Funnelback request object, so we can cancel if
  // another request is triggered by the user
  const [suggestionsCall, setSuggestionsCall] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cancel: () => {}
  });

  // Retrieve Funnelback results
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // indicate a request is in progress
    setUpdating(true);
    setSuggestionsUpdating(true);

    /**
     * cancel any requests already in progress
     *
     * async requests can return out of order
     */
    call.cancel();
    suggestionsCall.cancel();

    // make new, asynchronous requests to Funnelback
    const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.find)(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets);
    const [suggestionsRequest, suggestionsRequestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_1__.suggest)(query.collection, query.query);

    // save the requestTokens
    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    });
    setSuggestionsCall({
      cancel: () => {
        suggestionsRequestToken.cancel();
      }
    });

    // when the response from Funnelback arrives,
    // update the results and display them
    request.then(data => {
      setResponse(data);
      setUpdating(false);
    }).catch(() => {
      setResponse(initialResponse);
    });
    suggestionsRequest.then(data => {
      if (data) {
        setSuggestions(data);
        setSuggestionsUpdating(false);
      }
    }).catch(() => {
      setSuggestions(initialSuggestions);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  // update props so child components can update the query
  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  const updateIndicator = what => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: `search--inline__results__updating search--inline__results__updating--${what.replace(/ /g, '')}`,
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fas fa-sharp fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Updating ", what, "\u2026"));

  // trap tab focus when the filters are open
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!focusTrap.activate) {
      setFocusTrap((0,focus_trap__WEBPACK_IMPORTED_MODULE_5__.createFocusTrap)(getmodal(), {
        initialFocus: getmodal().querySelector('input'),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }
    if (display) {
      focusTrap.activate && focusTrap.activate();
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
    }
  }, [display, focusTrap]);
  const iconClass = `global-header__search__icon far fa-sharp fa-fw ${display ? 'fa-xmark' : 'fa-search'}`,
    ariaLabel = `${display ? 'Close search' : 'Open search'}`,
    veil = display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "veil--search",
      "data-on": "true"
    }),
    toggleButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "global-header__search__button",
      type: "button",
      id: "search",
      "aria-expanded": display,
      "aria-label": ariaLabel,
      onClick: () => {
        setDisplay(!display);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "global-header__search__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "global-header__search__text"
    }, display ? 'Close' : 'Search'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: iconClass,
      "aria-hidden": "true"
    }))),
    modalToggleButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "global-header__search__button",
      type: "button",
      id: "modal-search",
      "aria-expanded": display,
      onClick: () => {
        setDisplay(!display);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "global-header__search__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "global-header__search__text"
    }, display ? 'Close' : 'Search'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: iconClass,
      "aria-hidden": "true"
    }))),
    inputField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_inline_search_inline_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: props.config,
      query: query,
      update: updater,
      updating: updating
    }),
    suggestionsList = suggestionsUpdating ? updateIndicator('suggestions') : suggestions && suggestions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_inline_search_inline_suggestions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      query: query,
      suggestions: suggestions.slice(0, maximumSuggestions)
    }) : null,
    topResults = updating ? updateIndicator('top results') : funnelbackResponse && funnelbackResponse.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_inline_search_inline_topresults__WEBPACK_IMPORTED_MODULE_4__["default"], {
      query: query,
      results: funnelbackResponse.results
    }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, toggleButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "global-header__search__modal",
    ref: modalRef => modal = modalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "global-header__search__modal__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-logo header-logo--city"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-logo__responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://city.ac.uk",
    rel: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "logo",
    src: "https://www.city.ac.uk/__data/assets/file/0006/442248/city-university-london-responsive-white.svg",
    width: "180",
    alt: "City, University of London"
  })))), modalToggleButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "global-header__search__modal__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "What are you looking for?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "/search",
    method: "get"
  }, inputField), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "global-header__search__modal__body__results"
  }, suggestionsList, topResults))), veil);
}
InlineSearch.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineSearch);

/***/ }),

/***/ "./src/patterns/search/search.js":
/*!***************************************!*\
  !*** ./src/patterns/search/search.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finder_funnelback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../finder/funnelback */ "./src/patterns/finder/funnelback.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _components_main_results_search_bestbets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/results/search__bestbets */ "./src/patterns/search/components/main/results/search__bestbets.js");
/* harmony import */ var _components_main_results_search_othersites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/results/search__othersites */ "./src/patterns/search/components/main/results/search__othersites.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_main_query_search_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/query/search__query */ "./src/patterns/search/components/main/query/search__query.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_main_results_search_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/results/search__results */ "./src/patterns/search/components/main/results/search__results.js");


/**
 * Search form.
 *
 * Don't run this via patterns.js, it's a separate compilation.
 *
 * @module patterns/search/search
 * @author Web Development
 * @copyright City, University of London 2020
 */










const oneSecond = 1000,
  scrollDuration = (0,_util__WEBPACK_IMPORTED_MODULE_1__.reduceMotion)() ? 0 : oneSecond,
  screenOffsetRatio = 10;

/**
 * Preserve the search state in the URL parameters.
 *
 * @param {string} currQuery The search query.
 * @param {integer} currStartRank The start rank.
 * @param {object[]} currFacets A map of facet meta labels to their values.
 * @param {*} facetLabels Array of facet definitions.
 */
function replaceHistory(currQuery, currStartRank, currCollection, defaultCollection) {
  if (window) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== '' ? params.set('query', currQuery) : params.delete('query');
    currStartRank !== 1 ? params.set('start_rank', currStartRank) : params.delete('start_rank');
    currCollection !== defaultCollection ? params.set('collection', currCollection) : params.delete('collection');
    const hasParams = params.toString().length ? '?' : '';
    window.history.replaceState({}, '', `${window.location.pathname}${hasParams}${params.toString()}`);
  }
}

/**
 * Launch search.
 *
 * @param {object} props The JSON configuration file for search.
 * @return {object} The React component to render.
 */
function Search(props) {
  const params = new URLSearchParams(window.location.search);

  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/
  const initialQuery = {
    collection: params.get('collection') || props.config.primary.collections[0].collection,
    interacted: false,
    misspelling: null,
    numRanks: params.get('num_ranks') || props.config.primary.numRanks,
    query: params.get('query') || '',
    sortType: '',
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
  const initialResponses = {
    primary: props.config.primary.collections.map(collection => {
      return {
        label: collection.label,
        collection: collection.collection,
        placeholder: collection.placeholder,
        response: initialResponse,
        search: collection.search,
        updating: false,
        call: {
          cancel: () => {}
        }
      };
    }),
    finders: props.config.finders.map(finder => {
      return {
        label: finder.label,
        summariseAs: finder.summariseAs,
        resultCard: finder.resultCard,
        search: finder.search,
        collection: finder.collection,
        response: initialResponse,
        updating: false,
        call: {
          cancel: () => {}
        }
      };
    }),
    nonpublic: props.config.nonpublic.map(collection => {
      return {
        label: collection.label,
        collection: collection.collection,
        response: initialResponse,
        search: collection.search,
        updating: false,
        call: {
          cancel: () => {}
        }
      };
    })
  };

  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);

  // State objects for the Funnelback query and response
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialQuery);
  const [fbResponses, setFbResponses] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialResponses);

  // useEffect doesn't deep inspect objects, so we need an additional, plain
  // state variable to indicate that the query state has changed and the
  // component should render
  // the value isn't important, it's just easy to toggle a bool back and forth
  const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);

  // Retrieve Funnelback results
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    // preserve the state
    replaceHistory(query.query, query.startRank, query.collection, props.config.primary.collections[0].collection);
    if (query.query.length > 0) {
      query.interacted && props.element.querySelector('.search__results') && zenscroll__WEBPACK_IMPORTED_MODULE_6___default().center(props.element.querySelector('.search__results'), scrollDuration, -window.innerHeight / screenOffsetRatio);
      props.config.primary.collections.forEach((collection, i) => {
        fbResponses.primary[i].call.cancel();
        const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_0__.find)(collection.collection, [], [], query.query, '', query.startRank, query.numRanks, []),
          newResponses = fbResponses;
        newResponses.primary[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.primary[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then(data => {
          const responses = fbResponses;
          responses.primary[i].response = data;
          responses.primary[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        }).catch(() => {
          const responses = fbResponses;
          responses.primary[i].response = initialResponse;
          responses.primary[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        });
      });
      props.config.finders.forEach((finder, i) => {
        fbResponses.finders[i].call.cancel();
        const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_0__.find)(finder.collection, [], [], query.query, '', 1, finder.numRanks, []),
          newResponses = fbResponses;
        newResponses.finders[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.finders[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then(data => {
          const responses = fbResponses;
          responses.finders[i].response = data;
          responses.finders[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        }).then(() => {
          props.element.querySelector('.tabs__links') && query.interacted && zenscroll__WEBPACK_IMPORTED_MODULE_6___default().center(props.element.querySelector('.tabs__links'), scrollDuration);
        }).catch(() => {
          const responses = fbResponses;
          responses.finders[i].response = initialResponse;
          responses.finders[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        });
      });
      props.config.nonpublic.forEach((nonpublic, i) => {
        fbResponses.nonpublic[i].call.cancel();
        const [request, requestToken] = (0,_finder_funnelback__WEBPACK_IMPORTED_MODULE_0__.find)(nonpublic.collection, [], [], query.query, '', 1, 0, []),
          newResponses = fbResponses;
        newResponses.nonpublic[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.nonpublic[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then(data => {
          const responses = fbResponses;
          responses.nonpublic[i].response = data;
          responses.nonpublic[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        }).catch(() => {
          const responses = fbResponses;
          responses.nonpublic[i].response = initialResponse;
          responses.nonpublic[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        });
      });
    } else {
      setFbResponses(initialResponses);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  // update props so child components can update the query
  const updater = {
    query: newQuery => setQuery(newQuery),
    results: newUpdate => setUpdate(newUpdate),
    updateState: update
  };
  const queryElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_main_query_search_query__WEBPACK_IMPORTED_MODULE_4__["default"], {
    config: props.config,
    query: query,
    update: updater,
    primary: fbResponses.primary.filter(collection => collection.collection === query.collection),
    updating: fbResponses.primary[0].updating
  });
  const otherSites = query.query && !fbResponses.primary[0].updating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_main_results_search_othersites__WEBPACK_IMPORTED_MODULE_3__["default"], {
    query: query,
    collections: fbResponses.primary.filter(collection => collection.collection !== query.collection),
    nonpublic: fbResponses.nonpublic
  });
  const bestBets = query.query && !fbResponses.primary[0].updating && fbResponses.primary[0].response && fbResponses.primary[0].response.bestBets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_main_results_search_bestbets__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bestbets: fbResponses.primary[0].response.bestBets
  });
  const results = query.query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_main_results_search_results__WEBPACK_IMPORTED_MODULE_7__["default"], {
    config: props.config,
    query: query,
    update: updater,
    primary: fbResponses.primary.filter(collection => collection.collection === query.collection),
    finders: fbResponses.finders,
    element: props.element
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("form", {
    className: "search-form",
    onSubmit: e => {
      e.preventDefault();
    }
  }, queryElement, bestBets, results, otherSites);
}
Search.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _patterns_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/search/search */ "./src/patterns/search/search.js");
/* harmony import */ var _patterns_search_search_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/search/search--inline */ "./src/patterns/search/search--inline.js");
/* harmony import */ var _patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/finder/funnelback */ "./src/patterns/finder/funnelback.js");


/**
 * Search entry
 *
 * @author Web Development
 * @copyright City, University of London 2020
 */






document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const search = document.querySelector('.wrapper--search'),
      inlineSearch = document.querySelector('.global-header__search');
    inlineSearch && (0,_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_4__.finderConfig)(inlineSearch.dataset.config).then(config => {
      (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patterns_search_search_inline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        config: config,
        element: inlineSearch
      }), inlineSearch);
    });
    search && (0,_patterns_finder_funnelback__WEBPACK_IMPORTED_MODULE_4__.finderConfig)(search.dataset.config).then(config => {
      (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patterns_search_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: config,
        element: search
      }), search);
    });
  }
});

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
/******/ 			"search": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["react","vendor-dependencies","axios","vendor-direct","core"], () => (__webpack_require__("./src/search.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=search.js.map