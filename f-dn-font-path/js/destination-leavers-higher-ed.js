import { j as jsxRuntimeExports, g as gaEvent, r as reactExports, d as disableBodyScroll, e as enableBodyScroll, R as React, a as reduceMotion } from "./util-Z6NqVPyg.js";
import { P as PropTypes, r as reactDomExports } from "./index-C9QTewTB.js";
import { a as find, f as finderConfig } from "./funnelback-CRcUgICC.js";
import { f as formatFBResponse } from "./hyper-link-DjH8jlSg.js";
import { F as Finder__Reset, a as Finder__Sort, b as Finder__Tag, c as Finder__Checkbox, u as useHasMounted, g as getNonFBParams, d as getFacetParams, r as replaceHistory } from "./url-params-Spk-53Uo.js";
import { c as createFocusTrap } from "./index-xnwwqUBt.js";
import { s as scroll } from "./zenscroll-BPHhNzrU.js";
function Finder__Select(props) {
  const stringLength = 16, stringOffset = -4, randomNumber = Math.random().toString(stringLength).slice(stringOffset), currentValue = props.query.facets[props.facet.meta] || "";
  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []);
  const responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : [];
  const hiddenFacets = allFacets.map((facet) => facet.data).filter((facet) => responseFacets.indexOf(facet.toLowerCase()) < 0).length;
  const setFacet = (value) => {
    const newQuery = props.query;
    props.dependencies.map((facet) => {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: `finder__filter finder__select ${currentValue && "finder__select--selected"}`,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
        htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`,
        children: props.facet.name
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("select", {
        name: `meta_${props.facet.meta}_sand`,
        id: `meta_${props.facet.meta}_sand--${randomNumber}`,
        onChange: (e) => setFacet(e.target.value),
        value: currentValue,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "",
          id: `meta${props.facet.meta}all`,
          name: `meta_${props.facet.meta}_sand--${randomNumber}`,
          children: props.facet.noSelection
        }), props.facet.values.map((value, i) => {
          const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter((responseFacetValue) => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());
          if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
              value: value.data.toLowerCase(),
              children: value.label
            }, i);
          } else {
            return null;
          }
        })]
      })]
    });
  } else {
    return null;
  }
}
Finder__Select.propTypes = {
  facet: PropTypes.object,
  query: PropTypes.object,
  responseFacet: PropTypes.arrayOf(PropTypes.object),
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  matrixState: PropTypes.bool
};
function dependencyMet(facet, facetMap) {
  const setFacets = Object.keys(facetMap);
  if (!facet.dependency) {
    return true;
  }
  if (setFacets.indexOf(facet.dependency) >= 0 && facetMap[facet.dependency] !== "") {
    return true;
  }
  return false;
}
function Finder__Filters(props) {
  const clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "finder__filters__reset finder__filters__reset--desktop",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Reset, {
      clear: props.clear,
      resetSort: false,
      matrixState: props.matrixState
    })
  }) : null, clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Reset, {
    clear: props.clear,
    resetSort: true,
    matrixState: props.matrixState
  }) : null;
  const sort = props.config.sort.length > 1 && props.config.displaySort ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "wrapper--finder__select--sort--mobile",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Sort, {
      config: props.config,
      query: props.query,
      update: props.update
    })
  }) : null;
  const submit = props.matrixState ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "finder__filters__submit finder__filters__reset--desktop",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      type: "submit",
      className: "finder__query__submit"
    })
  }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "finder__filters",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
      className: "finder__filters__heading",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        className: "finder__filters__heading__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "far fa-sharp fa-sliders-h icon",
          "aria-hidden": "true"
        }), " ", `Filter ${props.config.summariseAs.plural}`]
      }), clearFiltersMobile]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "wrapper--finder_filters--filters",
        children: [props.config.facetLabels.map((facet) => {
          if (dependencyMet(facet, props.query.facets) || props.matrixState) {
            switch (facet.type) {
              case "select":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Select, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta),
                  matrixState: props.matrixState
                }, facet.meta);
              case "checkbox":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Checkbox, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta)
                }, facet.meta);
              case "tag":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Tag, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta)
                }, facet.meta);
              default:
                gaEvent("jsError", "JavaScript error", "finder__filters()", "Unknown filter type in finder__filters.js", true);
            }
          } else {
            return null;
          }
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "finder__filters__nofilters",
          children: "No filters are valid for the current query."
        }), clearFiltersDesktop, sort, submit]
      })
    })]
  });
}
Finder__Filters.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  response: PropTypes.object,
  update: PropTypes.object,
  clear: PropTypes.func,
  matrixState: PropTypes.bool,
  updating: PropTypes.bool
};
let filters = null;
const getFilters = () => filters;
function Finder__FiltersMobile(props) {
  const [display, setDisplay] = reactExports.useState(false);
  const [focusTrap, setFocusTrap] = reactExports.useState({});
  reactExports.useEffect(() => {
    if (!focusTrap.activate) {
      setFocusTrap(createFocusTrap(getFilters(), {
        initialFocus: getFilters().querySelector(".wrapper--finder__filters--mobile__apply"),
        onDeactivate: () => setDisplay(false),
        clickOutsideDeactivates: true
      }));
    }
    if (display) {
      focusTrap.activate && focusTrap.activate();
      disableBodyScroll();
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
      enableBodyScroll();
    }
  }, [display, focusTrap]);
  const totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  const totalMatchingMessage = totalMatching ? "Show Graduate Outcomes" : "Close";
  const filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
    children: ["Filters", " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      className: "wrapper--finder__filters--mobile__toggle__count",
      children: ["(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")"]
    })]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    children: "Filter"
  }) : Object.keys(props.query.facets).length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
    children: ["Filters", " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      className: "wrapper--finder__filters--mobile__toggle__count",
      children: ["(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")"]
    })]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    children: "Filter"
  });
  const toggle = display ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    className: "wrapper--finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: () => setDisplay(!display),
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType ? true : false,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "far fa-sharp fa-sliders-h icon",
        "aria-hidden": "true"
      }), " ", filtersCount]
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "wrapper--finder__filters",
    "data-open": display,
    ref: (mobilefilters) => filters = mobilefilters,
    children: [toggle, /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "wrapper--finder__filters--mobile__filters",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "wrapper--finder__filters--mobile__filters__content",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Filters, {
          config: props.config,
          query: props.query,
          response: props.response,
          update: props.update,
          clear: props.clear,
          matrixState: props.matrixState,
          updating: props.updating
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          className: "wrapper--finder__filters--mobile__filters__content--text",
          children: ["If you do not see the course you are interested in, please contact the", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
            href: "/prospective-students/career-development/careers-team",
            children: "careers department"
          }), " ", "at City for full details"]
        })]
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "wrapper--finder__filters--mobile__apply",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        type: "button",
        "aria-expanded": display,
        onClick: () => setDisplay(!display),
        disabled: props.updating,
        children: [Object.keys(props.query.facets).length === 0 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "far fa-chevron-left icon"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          "aria-live": "polite",
          children: props.updating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              className: "fas fa-spinner fa-pulse icon",
              "aria-hidden": "true"
            }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
              className: "wrapper--finder__filters--mobile__apply__text",
              children: ["Updating ", props.summariseAs.plural, "…"]
            })]
          }) : /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              className: "wrapper--finder__filters--mobile__apply__text",
              children: !props.query.facets.t ? "Close" : totalMatchingMessage
            })
          })
        })]
      })
    })]
  });
}
Finder__FiltersMobile.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  response: PropTypes.object,
  update: PropTypes.object,
  clear: PropTypes.func,
  updating: PropTypes.bool,
  summariseAs: PropTypes.object,
  matrixState: PropTypes.bool
};
function Finder__Chart(props) {
  const data = props.data && props.data.filter((row) => !!(row[0] && row[1])).map((row) => [row[0], parseFloat(row[1]) || 0]);
  let firstSegmentFull = false, secondSegmentFull = false;
  if (data[0][1] === 100) {
    firstSegmentFull = true;
  }
  if (props.chartsLength === 2) {
    if (data[1][1] === 100) {
      secondSegmentFull = true;
    }
  }
  let sum = data.reduce(function(acc, row) {
    return acc + row[1];
  }, 0);
  let strokeWidth = 32;
  let arcAcc = 0;
  let valueElements = data.map(function(row, i) {
    let value = Math.min(1, row[1] / sum);
    let arc = 2 * Math.PI * value;
    let largeAngle = arc > Math.PI ? 1 : 0;
    let sweep = 1;
    let key = `${props.title}${row[0].replace(/\s+/g, "")}${row[1]}${props.chartId}`;
    let x0 = 100 * Math.sin(arcAcc);
    let y0 = -100 * Math.cos(arcAcc);
    arcAcc += arc;
    let x1 = 100 * Math.sin(arcAcc);
    let y1 = -100 * Math.cos(arcAcc);
    let d = `M ${x0} ${y0} A 100 100  0 ${largeAngle} ${sweep} ${x1} ${y1}`;
    if (!(firstSegmentFull || secondSegmentFull) && i < 7) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d,
        fill: "none"
      }, key);
    } else if (firstSegmentFull) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          strokeWidth: "32",
          className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
          d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
          fill: "none"
        }, key), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          strokeWidth: "32",
          className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
          d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
          fill: "none"
        }, key)]
      });
    } else if (secondSegmentFull) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          strokeWidth: "32",
          className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
          d: "M -0.6283143965558805 -99.99802608561372 A 100 100  0 0 1 -2.4492127076447545e-14 -100",
          fill: "none"
        }, key), /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
          strokeWidth: "32",
          className: "chart--piechart__value animate--svg-path animate--svg-path--jsinit animate--svg-path--jsrun",
          d: "M 0 -100 A 100 100  0 1 1 -0.6283143965558805 -99.99802608561372",
          fill: "none"
        }, key)]
      });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
        strokeWidth,
        className: "chart--piechart__value animate--svg-path",
        d,
        fill: "none",
        stroke: "url(#striped)"
      }, key);
    }
  });
  let legend = data.map(function(e, i) {
    let val = Math.round((e[1] + Number.EPSILON) * 100) / 100;
    let text = `${e[0]}: ${Math.round((100 * val / sum + Number.EPSILON) * 100) / 100}%`;
    let randomNum = `legend-${props.title}${e[0].replace(/\s+/g, "")}${e[1]}${props.chartId}`;
    if (i === 7) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "chart__legend__item",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "chart__legend__item__icon",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
            height: "23",
            width: "23",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
              cx: "12",
              cy: "10",
              r: "9",
              stroke: "black",
              strokeWidth: "1",
              fill: "url(#striped)"
            })
          })
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "chart__legend__item__label",
          children: text
        })]
      }, randomNum);
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "chart__legend__item",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "fa fa-circle chart__legend__item__icon",
          "aria-hidden": "true"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "chart__legend__item__label",
          children: text
        })]
      }, randomNum);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "chart",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      className: "chart__title",
      children: props.title
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "chart__columns",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "chart--piechart animate animate-svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "chart--pie-chart__svg-wrapper",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 200 200",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", {
              transform: "translate(100,100) scale(0.8620689655172413)",
              children: valueElements
            })
          })
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "chart__legend",
        children: legend
      })]
    })]
  });
}
Finder__Chart.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  chartsLength: PropTypes.number,
  chartId: PropTypes.number
};
function Company__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "company-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Company names"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "company-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
Company__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function Institutions__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "institutions-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Institutions of further study"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "institutions-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
Institutions__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function Jobs__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "jobs-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Jobs titles"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "jobs-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
Jobs__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function Salary__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "salary-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Salary"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "salary-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
Salary__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function PositiveOutcome__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "jobs-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Positive outcome"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "jobs-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
PositiveOutcome__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function GradLevel__Container(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "jobs-wrapper",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Graduate level employment"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "jobs-list",
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    })]
  });
}
GradLevel__Container.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
};
function Finder__Results__Generic(props) {
  const company = props.details.listMetadata.companys ? /* @__PURE__ */ jsxRuntimeExports.jsx(Company__Container, {
    text: props.details.listMetadata.companys[0]
  }) : null, institutions = props.details.listMetadata.institutions ? /* @__PURE__ */ jsxRuntimeExports.jsx(Institutions__Container, {
    text: props.details.listMetadata.institutions[0]
  }) : null, jobT = props.details.listMetadata.jobT ? /* @__PURE__ */ jsxRuntimeExports.jsx(Jobs__Container, {
    text: props.details.listMetadata.jobT[0]
  }) : null, salary = props.details.listMetadata.salary ? /* @__PURE__ */ jsxRuntimeExports.jsx(Salary__Container, {
    text: props.details.listMetadata.salary[0]
  }) : null, gradLevel = props.details.listMetadata.gradLevel ? /* @__PURE__ */ jsxRuntimeExports.jsx(GradLevel__Container, {
    text: props.details.listMetadata.gradLevel[0]
  }) : null, positiveOutcome = props.details.listMetadata.positiveOutcome ? /* @__PURE__ */ jsxRuntimeExports.jsx(PositiveOutcome__Container, {
    text: props.details.listMetadata.positiveOutcome[0]
  }) : null;
  const charts = props.details.listMetadata.chart ? props.details.listMetadata.chart.map((d) => JSON.parse(d)) : null;
  let count = 0;
  props.details.listMetadata.companys && count++;
  props.details.listMetadata.institutions && count++;
  props.details.listMetadata.jobT && count++;
  props.details.listMetadata.salary && count++;
  props.details.listMetadata.gradLevel && count++;
  props.details.listMetadata.positiveOutcome && count++;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "destination-leaver",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "card__details__text",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
        className: "card__heading",
        children: ["Showing data for ", props.details.title]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className: "card__description",
        children: props.details.listMetadata.c && props.details.listMetadata.c[0]
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "chart-row chart-row--columns",
      children: charts ? charts.map((c, i) => {
        let k = `${c[0].title}${i}${c[0].id}`;
        let chartsLength = charts.length;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Chart, {
          data: c[0].chart,
          title: c[0].title,
          id: c[0].id,
          chartsLength,
          chartId: parseInt(c[0].id)
        }, k);
      }) : null
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "destination-leaver-content",
      "data-length": count,
      children: [salary, company, institutions, jobT, gradLevel, positiveOutcome]
    })]
  });
}
Finder__Results__Generic.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Card(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Generic, {
    details: props.details
  });
}
Finder__Results__Card.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object,
  type: PropTypes.string
};
function Finder__Results(props) {
  const resultsClass = "resultsVariant" in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : "finder__results__list";
  if (props.response && props.query.facets.level && props.query.facets.t) {
    const results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      start: props.response.summary.currStart,
      className: resultsClass,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
        bestBet: false,
        details: props.response.results[0],
        type: props.type,
        query: props.query
      }, props.response.results[0].docNum)
    }) : null;
    const resultsContent = /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
      children: results
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "finder__results",
      children: resultsContent
    });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "finder__results"
    });
  }
}
Finder__Results.propTypes = {
  query: PropTypes.object,
  response: PropTypes.object,
  type: PropTypes.string,
  config: PropTypes.object,
  matrixState: PropTypes.bool
};
const oneSecond = 1e3, scrollDuration = reduceMotion() ? 0 : oneSecond, screenOffsetRatio = 10;
function DestinationLeaversHE(props) {
  const hasMounted = useHasMounted();
  const matrixState = !hasMounted && props.initialQuery;
  const params = matrixState ? props.initialQuery : new URLSearchParams(window.location.search), initialResults = props.initialResults || {};
  const nonFBParams = props.config.facetLabels.filter((paramFacet) => paramFacet.nonFBParam);
  const initialQuery = {
    collection: props.config.collection,
    dxp: props.config.dxp ? props.config.dxp : false,
    facets: props.config.facetLabels.length > 0 && params ? getFacetParams(props.config.facetLabels, params, matrixState) : {},
    parameters: nonFBParams.length > 0 && params ? getNonFBParams(props.config.facetLabels, params, matrixState) : {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: hasMounted && params.get("num_ranks") ? params.get("num_ranks") : props.config.numRanks,
    query: !matrixState && params.get("query") ? params.get("query") : params && params.query ? params.query : "",
    sortType: !matrixState && params.get("query") ? "" : !matrixState && params.get("sort") ? params.get("sort") : params && params.sort && typeof params.sort !== "function" ? params.sort : props.config.sort,
    startRank: !matrixState && params.get("start_rank") ? params.get("start_rank") : params && params.start_rank ? params.start_rank : 1
  };
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
  });
  const [query, setQuery] = reactExports.useState(initialQuery);
  const [funnelbackResponse, setResponse] = reactExports.useState(initialResponse);
  const [updating, setUpdating] = reactExports.useState(Object.keys(initialResults).length > 0 ? false : true);
  const [call, setCall] = reactExports.useState({
    cancel: () => {
    }
  });
  const [update, setUpdate] = reactExports.useState(false);
  reactExports.useEffect(() => {
    replaceHistory(query.query, query.startRank, query.facets, query.parameters, query.sortType, props.config.facetLabels, props.config.sort[0].type, hasMounted);
    setUpdating(true);
    query.interacted && scroll.center(props.element.querySelector(".finder__results"), scrollDuration, -window.innerHeight / screenOffsetRatio);
    call.cancel();
    const [request, requestToken] = find(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters, props.config.dxp ? props.config.dxp : false);
    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    });
    request.then((data) => {
      setResponse(formatFBResponse(data));
      setUpdating(false);
      if (data.spell && data.summary.totalMatching === 0) {
        const newQueryText = data.spell.text.split(/\|/)[0].trim(), newQuery = query;
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
  }, [update]);
  const updater = {
    query: (newQuery) => setQuery(newQuery),
    results: (newUpdate) => setUpdate(newUpdate),
    updateState: update
  };
  const clear = (resetSort) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
    className: props.config.facetLabels.length > 0 ? "finder" : "finder finder--nofilters",
    onSubmit: (e) => {
      e.preventDefault();
    },
    children: [props.config.facetLabels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__FiltersMobile, {
        config: props.config,
        query,
        response: funnelbackResponse,
        update: updater,
        updating,
        summariseAs: props.config.summariseAs,
        clear,
        matrixState
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "wrapper--destination-leavers-HE__info-text",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
        children: ["If you do not see the course you are interested in, please contact the", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "/prospective-students/career-development/careers-team",
          children: "careers department"
        }), " ", "at City for full details"]
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results, {
      clear,
      config: props.config,
      query,
      response: funnelbackResponse,
      summariseAs: props.config.summariseAs,
      type: props.config.resultCard,
      update: updater,
      updating,
      matrixState
    })]
  });
}
DestinationLeaversHE.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object,
  initialQuery: PropTypes.object,
  initialResults: PropTypes.object
};
document.addEventListener("DOMContentLoaded", () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const destinations = document.querySelectorAll(".wrapper--destination-leavers-HE");
    destinations && Array.from(destinations).forEach((destination) => {
      finderConfig(destination.dataset.config).then((config) => {
        reactDomExports.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(DestinationLeaversHE, {
          config,
          element: destination
        }), destination);
      });
    });
  }
});
//# sourceMappingURL=destination-leavers-higher-ed.js.map
