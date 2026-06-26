import { r as reactExports, j as jsxRuntimeExports, R as React, g as gaEvent, d as disableBodyScroll, e as enableBodyScroll, b as getDefaultExportFromCjs, a as reduceMotion } from "./util-Z6NqVPyg.js";
import { P as PropTypes, r as reactDomExports } from "./index-C9QTewTB.js";
import { s as suggest, a as find, f as finderConfig } from "./funnelback-CRcUgICC.js";
import { F as Finder__Clear } from "./finder__clear-Du7up4Zq.js";
import { F as Finder__Reset, a as Finder__Sort, b as Finder__Tag, c as Finder__Checkbox, u as useHasMounted, g as getNonFBParams, d as getFacetParams, r as replaceHistory } from "./url-params-Spk-53Uo.js";
import { c as createFocusTrap } from "./index-xnwwqUBt.js";
import { F as Finder__Pagination, a as Finder__Results__Card } from "./finder__pagination-WkMddiZI.js";
import { f as formatFBResponse } from "./hyper-link-DjH8jlSg.js";
import { s as scroll } from "./zenscroll-BPHhNzrU.js";
const maximumSuggestions = 5, escapeKey = "Escape", endKey = "End", homeKey = "Home", arrowUp = "ArrowUp", arrowDown = "ArrowDown";
function highlightQueryTerm(suggestion, partialQuery) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "sr-only",
        children: suggestion
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "finder__suggestion",
          children: suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)
        }), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)]
      })]
    })
  });
}
function Finder__Query(props) {
  const [partialQuery, setPartialQuery] = reactExports.useState(props.query.query || "");
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [call, setCall] = reactExports.useState({
    cancel: () => {
    }
  });
  const [inputId] = reactExports.useState("finder--" + props.query.collection);
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false), [activeSuggestionID, setActiveSuggestionID] = reactExports.useState("");
  reactExports.useEffect(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }
  const clearQuery = () => {
    call.cancel();
    setPartialQuery("");
    setSuggestions([]);
    focusInput();
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = "";
    newQuery.sortType = props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const submitForm = (query) => {
    call.cancel();
    setSuggestions([]);
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : "";
    newQuery.sortType = partialQuery ? "" : props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clear = partialQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Clear, {
    clear: () => {
      clearQuery();
    }
  });
  const submitSuggestion = (suggestion) => {
    setShowSuggestions(false);
    setSuggestions([]);
    focusInput();
    submitForm(suggestion);
  };
  const suggestionsList = suggestions && suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? "finder__query__suggestions show" : "finder__query__suggestions hide",
    children: [...new Set(suggestions)].slice(0, maximumSuggestions).map((suggestion, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
      role: "option",
      id: inputId + "--" + i,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "button",
        onBlur: () => {
          setActiveSuggestionID("");
          setShowSuggestions(false);
        },
        onFocus: () => setShowSuggestions(true),
        onMouseDown: () => submitSuggestion(suggestion),
        onClick: () => submitSuggestion(suggestion),
        onKeyDown: (e) => {
          switch (e.key) {
            case escapeKey:
              e.target.parentNode.parentNode.parentNode.querySelector("input").focus();
              setSuggestions([]);
              setActiveSuggestionID("");
              break;
            case arrowUp:
              if (e.target.parentNode.previousElementSibling && e.target.parentNode.previousElementSibling.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.previousElementSibling.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.previousElementSibling.id);
              } else {
                e.preventDefault();
                e.target.parentNode.parentNode.parentNode.querySelector("input").focus();
                setActiveSuggestionID("");
              }
              break;
            case arrowDown:
              e.preventDefault();
              if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.nextElementSibling.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.nextElementSibling.id);
              }
              break;
            case homeKey:
              e.preventDefault();
              if (e.target.parentNode.parentNode.firstChild && e.target.parentNode.parentNode.firstChild.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.parentNode.firstChild.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.firstChild.id);
              }
              break;
            case endKey:
              e.preventDefault();
              if (e.target.parentNode.parentNode.lastChild && e.target.parentNode.parentNode.lastChild.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.parentNode.lastChild.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.lastChild.id);
              }
              break;
          }
        },
        children: highlightQueryTerm(suggestion, partialQuery)
      })
    }, suggestion))
  });
  const input = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "finder__query__input",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "finder__query__icon--wrapper",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "finder__icon fal fa-sharp fa-search icon",
        "aria-hidden": "true"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "sr-only",
      htmlFor: inputId,
      children: `Search ${props.config.summariseAs.plural}`
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      autoComplete: "off",
      id: inputId,
      name: "query",
      placeholder: props.config.placeholder,
      ref: (input2) => {
        textInput = input2;
      },
      type: "text",
      value: partialQuery,
      onKeyDown: (e) => {
        switch (e.key) {
          case escapeKey:
            clearQuery();
            break;
          case arrowDown:
            if (suggestions && suggestions.length > 0) {
              e.preventDefault();
              e.target.parentNode.querySelector(".finder__query__suggestions button").focus();
              setActiveSuggestionID(e.target.parentNode.querySelector(".finder__query__suggestions li").id);
            }
            break;
        }
      },
      onFocus: () => setShowSuggestions(true),
      onBlur: () => setShowSuggestions(false),
      onChange: (e) => {
        setSuggestions([]);
        setPartialQuery(e.target.value);
        call.cancel();
        if (e.target.value) {
          const [suggestionsPromise, newCall] = suggest(props.query.collection, e.target.value, props.config.dxp ? props.config.dxp : false);
          setCall({
            cancel: () => {
              newCall.cancel();
            }
          });
          suggestionsPromise.then((data) => setSuggestions(data)).catch(() => setSuggestions([]));
        } else {
          setSuggestions([]);
        }
      }
    }), suggestionsList, clear]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", {
    className: "finder__query",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [input, /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        type: "submit",
        className: "finder__query__submit",
        onClick: () => submitForm(),
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "fal fa-sharp fa-search finder__query__submit__icon",
          "aria-hidden": "true"
        }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "finder__query__submit__text",
          children: "Find"
        })]
      })]
    })
  });
}
Finder__Query.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object,
  updating: PropTypes.bool
};
function Finder__Select$1(props) {
  const randomNumber = props.mobile ? "mobile" : "desktop", currentValue = props.query.facets[props.facet.meta] || "";
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
  if (props.facet.values.length > hiddenFacets) {
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
          id: `meta${props.facet.meta}all--${randomNumber}`,
          name: `meta_${props.facet.meta}_sand--${randomNumber}`,
          children: props.facet.noSelection
        }), props.facet.values.map((value, i) => {
          const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter((responseFacetValue) => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());
          if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", {
              value: value.data.toLowerCase(),
              children: [value.label, currentValue !== value.data && responseFacetDetails[0] && responseFacetDetails[0].count > 0 ? ` (${responseFacetDetails[0].count})` : ""]
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
Finder__Select$1.propTypes = {
  facet: PropTypes.object,
  query: PropTypes.object,
  responseFacet: PropTypes.arrayOf(PropTypes.object),
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  mobile: PropTypes.bool
};
function Finder__Select(props) {
  const dateDayFormat = 10;
  const currentDate = /* @__PURE__ */ new Date(), currentYear = currentDate.getUTCFullYear(), currentDateMonth = currentDate.getUTCMonth() > 8 ? currentDate.getUTCMonth() + 1 : "0" + (currentDate.getUTCMonth() + 1), currentDateDay = currentDate.getUTCDate(), currentDateString = `${currentYear}${currentDateMonth}${currentDateDay >= dateDayFormat ? currentDateDay : "0" + currentDateDay}`;
  const randomNumber = props.mobile ? "mobile" : "desktop", currentValue = props.query.facets[props.facet.meta] || "";
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
    if (props.query.parameters.events) {
      newQuery.parameters.lt_eventDate = currentDateString;
    } else {
      newQuery.parameters.ge_eventDate = currentDateString;
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (props.facet.values.length > hiddenFacets) {
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
          id: `meta${props.facet.meta}all--${randomNumber}`,
          name: `meta_${props.facet.meta}_sand--${randomNumber}`,
          children: props.facet.noSelection
        }), props.facet.values.map((value, i) => {
          const responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter((responseFacetValue) => responseFacetValue.data.toLowerCase() === value.data.toLowerCase());
          if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", {
              value: value.data.toLowerCase(),
              children: [value.label, currentValue !== value.data && responseFacetDetails[0] && responseFacetDetails[0].count > 0 ? ` (${responseFacetDetails[0].count})` : ""]
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
  mobile: PropTypes.bool
};
function Finder__paramCheckbox$1(props) {
  const stringLength = 16, stringOffset = -4, randomNumber = Math.random().toString(stringLength).slice(stringOffset), pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.fullyMatching, pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.partiallyMatching, toggleChecked = props.facet.meta in props.query.parameters, totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;
  const toggleFacet = () => {
    let newQuery = props.query;
    toggleChecked ? delete newQuery.parameters[props.facet.meta] : newQuery.parameters[props.facet.meta] = props.facet.checkedValue;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (totalText > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "finder__filter finder__checkbox",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("input", {
        type: "checkbox",
        id: `${props.facet.funnelbackName}--${randomNumber}`,
        name: props.facet.meta,
        value: props.facet.checkedValue,
        onChange: () => toggleFacet(),
        checked: toggleChecked
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "finder__checkbox__indicator finder__checkbox__indicator",
        "aria-hidden": "true",
        onClick: () => toggleFacet(),
        children: toggleChecked ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "fa fa-fw fas fa-check icon"
        }) : null
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
        className: "finder__filters__label--always",
        htmlFor: `${props.facet.funnelbackName}--${randomNumber}`,
        children: [props.facet.name, !toggleChecked && totalText && " (" + totalText + ")"]
      })]
    });
  } else {
    return null;
  }
}
Finder__paramCheckbox$1.propTypes = {
  facet: PropTypes.object,
  responseParameter: PropTypes.object,
  query: PropTypes.object,
  pastEventsResponse: PropTypes.object,
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  hasMounted: PropTypes.bool
};
function Finder__paramCheckbox(props) {
  const [isClient, setIsClient] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient || !props.pastEventsResponse || !props.pastEventsResponse.resultPacket || !props.pastEventsResponse.resultPacket.resultsSummary || typeof props.matrixStat === "undefined") {
    return null;
  }
  const dateDayFormat = 10;
  const stringLength = 16, stringOffset = -4, randomNumber = Math.random().toString(stringLength).slice(stringOffset), pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.fullyMatching, pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.partiallyMatching, toggleChecked = "lt_eventDate" in props.query.parameters, totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;
  const currentDate = /* @__PURE__ */ new Date(), currentYear = currentDate.getUTCFullYear(), currentDateMonth = currentDate.getUTCMonth() > 8 ? currentDate.getUTCMonth() + 1 : "0" + (currentDate.getUTCMonth() + 1), currentDateDay = currentDate.getUTCDate(), currentDateString = `${currentYear}${currentDateMonth}${currentDateDay >= dateDayFormat ? currentDateDay : "0" + currentDateDay}`;
  const toggleFacet = () => {
    let newQuery = props.query;
    if (toggleChecked) {
      delete newQuery.parameters.lt_eventDate;
      delete newQuery.parameters.events;
      newQuery.parameters["ge_eventDate"] = currentDateString;
      newQuery.sortType = "adate";
    } else {
      delete newQuery.parameters.ge_eventDate;
      newQuery.parameters["lt_eventDate"] = currentDateString;
      newQuery.parameters["events"] = "past";
      newQuery.sortType = "date";
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (totalText > 0) {
    if (props.matrixStat) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "finder__filter finder__select",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
          htmkFor: "event--time",
          children: "Location"
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("select", {
          name: "event--time",
          id: "event--time",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("option", {
            value: `ge_eventDate!${currentDateString}`,
            children: "Upcoming events"
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
            value: `lt_eventDate!${currentDateString}`,
            children: "Past events"
          })]
        })]
      });
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "finder__filter finder__checkbox",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("input", {
          type: "checkbox",
          id: `${props.facet.funnelbackName}--${randomNumber}`,
          name: props.facet.meta,
          value: props.facet.checkedValue,
          onChange: () => toggleFacet(),
          checked: toggleChecked
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "finder__checkbox__indicator finder__checkbox__indicator",
          "aria-hidden": "true",
          onClick: () => toggleFacet(),
          children: toggleChecked ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "fa fa-fw fas fa-check icon"
          }) : null
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
          className: "finder__filters__label--always",
          htmlFor: `${props.facet.funnelbackName}--${randomNumber}`,
          children: [props.facet.name, !toggleChecked && totalText && " (" + totalText + ")"]
        })]
      });
    }
  } else {
    return null;
  }
}
Finder__paramCheckbox.propTypes = {
  facet: PropTypes.object,
  responseParameter: PropTypes.object,
  query: PropTypes.object,
  pastEventsResponse: PropTypes.object,
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  hasMounted: PropTypes.bool,
  matrixStat: PropTypes.bool
};
function Finder__hiddenInput(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
    type: "hidden",
    id: props.name,
    name: props.name,
    value: props.value
  });
}
Finder__hiddenInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
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
  const totalMatching = props.response && props.response.summary && props.response.summary.fullyMatching;
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
  const sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "wrapper--finder__select--sort--mobile",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Sort, {
      config: props.config,
      query: props.query,
      update: props.update
    }, props.mobile ? "sort-mobile" : "sort-desktop")
  }) : null;
  const submitSSR = props.matrixState ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "finder__filter__submit",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
      type: "submit",
      className: "finder__query__submit finder__submit",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fal fa-sharp fa-search finder__query__submit__icon",
        "aria-hidden": "true"
      }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "finder__query__submit__text",
        children: "Find"
      })]
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
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", {
      children: [!props.hasMounted && props.query.fixedParameters ? props.query.fixedParameters.map((param) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__hiddenInput, {
          name: param.name,
          value: param.value
        }, param.name);
      }) : null, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "wrapper--finder_filters--filters",
        children: [props.config.facetLabels.map((facet) => {
          if (dependencyMet(facet, props.query.facets)) {
            switch (facet.type) {
              case "eventCheckBox":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__paramCheckbox, {
                  facet,
                  query: props.query,
                  update: props.update,
                  responseParameter: props.response.inputParameters,
                  pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response,
                  hasMounted: props.hasMounted,
                  matrixStat: props.matrixState
                }, facet.meta);
              case "paramCheckBox":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__paramCheckbox$1, {
                  facet,
                  query: props.query,
                  update: props.update,
                  responseParameter: props.response.inputParameters,
                  pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response,
                  hasMounted: props.hasMounted,
                  matrixStat: props.matrixState
                }, facet.meta);
              case "eventSelect":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Select, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta),
                  mobile: props.mobile
                }, facet.meta);
              case "select":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Select$1, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name.toLowerCase() === facet.funnelbackName.toLowerCase()) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta),
                  mobile: props.mobile
                }, facet.meta);
              case "checkbox":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Checkbox, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta),
                  mobile: props.mobile
                }, facet.meta);
              case "tag":
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Tag, {
                  facet,
                  query: props.query,
                  responseFacet: props.response && props.response.facets ? props.response.facets.filter((funnelbackFacet) => funnelbackFacet.name === facet.funnelbackName) : [],
                  update: props.update,
                  dependencies: props.config.facetLabels.filter((candidate) => candidate.dependency === facet.meta),
                  mobile: props.mobile
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
        }), clearFiltersDesktop, sort, submitSSR]
      })]
    })]
  });
}
Finder__Filters.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  response: PropTypes.object,
  update: PropTypes.object,
  clear: PropTypes.func,
  mobile: PropTypes.bool,
  hasMounted: PropTypes.bool,
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
  const result = totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural;
  const totalMatchingMessage = totalMatching ? `Show ${totalMatching} ${result}` : "Close";
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
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "wrapper--finder__filters--mobile__filters__content",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Filters, {
          config: props.config,
          query: props.query,
          response: props.response,
          update: props.update,
          clear: props.clear,
          mobile: props.mobile,
          hasMounted: props.hasMounted,
          matrixState: props.matrixState,
          updating: props.updating
        })
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
              children: Object.keys(props.query.facets).length === 0 ? "Close" : totalMatchingMessage
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
  mobile: PropTypes.bool,
  hasMounted: PropTypes.bool,
  matrixState: PropTypes.bool
};
function Finder__Results__BestBet(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--bestbet",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.description
        })]
      })
    })
  });
}
Finder__Results__BestBet.propTypes = {
  details: PropTypes.object
};
function Finder__DidYouMean(props) {
  const didyoumean = props.query.misspelling ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "finder__results__didyoumean",
    children: ["No ", props.summariseAs.plural, " found for “", props.query.misspelling, "”. Searching instead for “", props.query.query, "”."]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "finder__results__didyoumean",
    children: ["Did you mean", " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
      type: "button",
      className: "finder__didyoumean__button",
      onClick: () => {
        const newQuery = props.query;
        newQuery.query = props.response.spell.text.split(/\s/)[0].trim();
        newQuery.startRank = 1;
        newQuery.misspelling = null;
        newQuery.interacted = true;
        newQuery.facets = {};
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      },
      children: ["“", props.response.spell.text.split(/\s/)[0].trim(), "”"]
    }), "?"]
  });
  return didyoumean;
}
Finder__DidYouMean.propTypes = {
  query: PropTypes.object,
  response: PropTypes.object,
  summariseAs: PropTypes.object,
  update: PropTypes.object
};
function Finder__Results__Promo(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--finder-promo promo-area__wrap",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "promo-area layout__left--full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "promo-area__content background--pink90",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "promo-area__heading",
          children: props.heading
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "promo-area__container",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "promo-area__text",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              children: props.body
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "cta-block__cta",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                href: props.linkRef,
                className: "outline-cta-arrow--bright",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  children: props.linkText
                })
              })
            })]
          })
        })]
      })
    })
  });
}
Finder__Results__Promo.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  linkRef: PropTypes.string,
  linkText: PropTypes.string
};
function Finder__Results__Summary(props) {
  const result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural, formatter = new Intl.NumberFormat("en-GB"), sort = props.config.sort.length > 1 && props.config.displaySort ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "wrapper--finder__select--sort--desktop",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Sort, {
      config: props.config,
      query: props.query,
      update: props.update
    })
  }) : null;
  if (props.totalMatching === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "finder__results__summary finder__results__summary--noresults",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
        className: "finder__results__summary__heading",
        children: ["Your search did not match any ", props.summariseAs.plural, "."]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Suggestions:"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: "Make sure that all words are spelled correctly"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: "Try different keywords"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: "Try more general keywords"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: "Try fewer keywords"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: "Try fewer filters"
        }), Object.keys(props.query.facets).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            type: "button",
            onClick: () => {
              props.clear(true);
            },
            children: "Reset filters"
          })
        }), props.query.query && /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            type: "button",
            onClick: () => {
              const newQuery = props.query;
              newQuery.query = "";
              newQuery.sortType = props.config.sort[0].type;
              newQuery.misspelling = null;
              newQuery.startRank = 1;
              newQuery.interacted = true;
              props.update.query(newQuery);
              props.update.results(!props.update.updateState);
            },
            children: "Reset query"
          })
        })]
      })]
    });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "finder__results__summary",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
        "aria-live": "polite",
        className: "finder__results__summary__heading",
        children: [props.query.query || Object.keys(props.query.facets).length > 0 ? "Matching" : "All", " ", result, " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
          children: ["(showing", " ", props.totalMatching > props.numRanks && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              children: formatter.format(props.currStart)
            }), "–", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              children: formatter.format(props.currEnd)
            }), " ", "of", " "]
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            children: formatter.format(props.totalMatching)
          }), " ", result, props.query.query && ` for “${props.query.query}”`, ")"]
        })]
      }), sort]
    });
  }
}
Finder__Results__Summary.propTypes = {
  clear: PropTypes.func,
  config: PropTypes.object,
  currEnd: PropTypes.number,
  currStart: PropTypes.number,
  numRanks: PropTypes.number,
  query: PropTypes.object,
  summariseAs: PropTypes.object,
  totalMatching: PropTypes.number,
  update: PropTypes.object
};
var lib$1 = { exports: {} };
var _default$1 = {};
var lib = { exports: {} };
var _default = {};
var hasRequired_default$1;
function require_default$1() {
  if (hasRequired_default$1) return _default;
  hasRequired_default$1 = 1;
  function getDefaultWhiteList() {
    var whiteList = {};
    whiteList["align-content"] = false;
    whiteList["align-items"] = false;
    whiteList["align-self"] = false;
    whiteList["alignment-adjust"] = false;
    whiteList["alignment-baseline"] = false;
    whiteList["all"] = false;
    whiteList["anchor-point"] = false;
    whiteList["animation"] = false;
    whiteList["animation-delay"] = false;
    whiteList["animation-direction"] = false;
    whiteList["animation-duration"] = false;
    whiteList["animation-fill-mode"] = false;
    whiteList["animation-iteration-count"] = false;
    whiteList["animation-name"] = false;
    whiteList["animation-play-state"] = false;
    whiteList["animation-timing-function"] = false;
    whiteList["azimuth"] = false;
    whiteList["backface-visibility"] = false;
    whiteList["background"] = true;
    whiteList["background-attachment"] = true;
    whiteList["background-clip"] = true;
    whiteList["background-color"] = true;
    whiteList["background-image"] = true;
    whiteList["background-origin"] = true;
    whiteList["background-position"] = true;
    whiteList["background-repeat"] = true;
    whiteList["background-size"] = true;
    whiteList["baseline-shift"] = false;
    whiteList["binding"] = false;
    whiteList["bleed"] = false;
    whiteList["bookmark-label"] = false;
    whiteList["bookmark-level"] = false;
    whiteList["bookmark-state"] = false;
    whiteList["border"] = true;
    whiteList["border-bottom"] = true;
    whiteList["border-bottom-color"] = true;
    whiteList["border-bottom-left-radius"] = true;
    whiteList["border-bottom-right-radius"] = true;
    whiteList["border-bottom-style"] = true;
    whiteList["border-bottom-width"] = true;
    whiteList["border-collapse"] = true;
    whiteList["border-color"] = true;
    whiteList["border-image"] = true;
    whiteList["border-image-outset"] = true;
    whiteList["border-image-repeat"] = true;
    whiteList["border-image-slice"] = true;
    whiteList["border-image-source"] = true;
    whiteList["border-image-width"] = true;
    whiteList["border-left"] = true;
    whiteList["border-left-color"] = true;
    whiteList["border-left-style"] = true;
    whiteList["border-left-width"] = true;
    whiteList["border-radius"] = true;
    whiteList["border-right"] = true;
    whiteList["border-right-color"] = true;
    whiteList["border-right-style"] = true;
    whiteList["border-right-width"] = true;
    whiteList["border-spacing"] = true;
    whiteList["border-style"] = true;
    whiteList["border-top"] = true;
    whiteList["border-top-color"] = true;
    whiteList["border-top-left-radius"] = true;
    whiteList["border-top-right-radius"] = true;
    whiteList["border-top-style"] = true;
    whiteList["border-top-width"] = true;
    whiteList["border-width"] = true;
    whiteList["bottom"] = false;
    whiteList["box-decoration-break"] = true;
    whiteList["box-shadow"] = true;
    whiteList["box-sizing"] = true;
    whiteList["box-snap"] = true;
    whiteList["box-suppress"] = true;
    whiteList["break-after"] = true;
    whiteList["break-before"] = true;
    whiteList["break-inside"] = true;
    whiteList["caption-side"] = false;
    whiteList["chains"] = false;
    whiteList["clear"] = true;
    whiteList["clip"] = false;
    whiteList["clip-path"] = false;
    whiteList["clip-rule"] = false;
    whiteList["color"] = true;
    whiteList["color-interpolation-filters"] = true;
    whiteList["column-count"] = false;
    whiteList["column-fill"] = false;
    whiteList["column-gap"] = false;
    whiteList["column-rule"] = false;
    whiteList["column-rule-color"] = false;
    whiteList["column-rule-style"] = false;
    whiteList["column-rule-width"] = false;
    whiteList["column-span"] = false;
    whiteList["column-width"] = false;
    whiteList["columns"] = false;
    whiteList["contain"] = false;
    whiteList["content"] = false;
    whiteList["counter-increment"] = false;
    whiteList["counter-reset"] = false;
    whiteList["counter-set"] = false;
    whiteList["crop"] = false;
    whiteList["cue"] = false;
    whiteList["cue-after"] = false;
    whiteList["cue-before"] = false;
    whiteList["cursor"] = false;
    whiteList["direction"] = false;
    whiteList["display"] = true;
    whiteList["display-inside"] = true;
    whiteList["display-list"] = true;
    whiteList["display-outside"] = true;
    whiteList["dominant-baseline"] = false;
    whiteList["elevation"] = false;
    whiteList["empty-cells"] = false;
    whiteList["filter"] = false;
    whiteList["flex"] = false;
    whiteList["flex-basis"] = false;
    whiteList["flex-direction"] = false;
    whiteList["flex-flow"] = false;
    whiteList["flex-grow"] = false;
    whiteList["flex-shrink"] = false;
    whiteList["flex-wrap"] = false;
    whiteList["float"] = false;
    whiteList["float-offset"] = false;
    whiteList["flood-color"] = false;
    whiteList["flood-opacity"] = false;
    whiteList["flow-from"] = false;
    whiteList["flow-into"] = false;
    whiteList["font"] = true;
    whiteList["font-family"] = true;
    whiteList["font-feature-settings"] = true;
    whiteList["font-kerning"] = true;
    whiteList["font-language-override"] = true;
    whiteList["font-size"] = true;
    whiteList["font-size-adjust"] = true;
    whiteList["font-stretch"] = true;
    whiteList["font-style"] = true;
    whiteList["font-synthesis"] = true;
    whiteList["font-variant"] = true;
    whiteList["font-variant-alternates"] = true;
    whiteList["font-variant-caps"] = true;
    whiteList["font-variant-east-asian"] = true;
    whiteList["font-variant-ligatures"] = true;
    whiteList["font-variant-numeric"] = true;
    whiteList["font-variant-position"] = true;
    whiteList["font-weight"] = true;
    whiteList["grid"] = false;
    whiteList["grid-area"] = false;
    whiteList["grid-auto-columns"] = false;
    whiteList["grid-auto-flow"] = false;
    whiteList["grid-auto-rows"] = false;
    whiteList["grid-column"] = false;
    whiteList["grid-column-end"] = false;
    whiteList["grid-column-start"] = false;
    whiteList["grid-row"] = false;
    whiteList["grid-row-end"] = false;
    whiteList["grid-row-start"] = false;
    whiteList["grid-template"] = false;
    whiteList["grid-template-areas"] = false;
    whiteList["grid-template-columns"] = false;
    whiteList["grid-template-rows"] = false;
    whiteList["hanging-punctuation"] = false;
    whiteList["height"] = true;
    whiteList["hyphens"] = false;
    whiteList["icon"] = false;
    whiteList["image-orientation"] = false;
    whiteList["image-resolution"] = false;
    whiteList["ime-mode"] = false;
    whiteList["initial-letters"] = false;
    whiteList["inline-box-align"] = false;
    whiteList["justify-content"] = false;
    whiteList["justify-items"] = false;
    whiteList["justify-self"] = false;
    whiteList["left"] = false;
    whiteList["letter-spacing"] = true;
    whiteList["lighting-color"] = true;
    whiteList["line-box-contain"] = false;
    whiteList["line-break"] = false;
    whiteList["line-grid"] = false;
    whiteList["line-height"] = false;
    whiteList["line-snap"] = false;
    whiteList["line-stacking"] = false;
    whiteList["line-stacking-ruby"] = false;
    whiteList["line-stacking-shift"] = false;
    whiteList["line-stacking-strategy"] = false;
    whiteList["list-style"] = true;
    whiteList["list-style-image"] = true;
    whiteList["list-style-position"] = true;
    whiteList["list-style-type"] = true;
    whiteList["margin"] = true;
    whiteList["margin-bottom"] = true;
    whiteList["margin-left"] = true;
    whiteList["margin-right"] = true;
    whiteList["margin-top"] = true;
    whiteList["marker-offset"] = false;
    whiteList["marker-side"] = false;
    whiteList["marks"] = false;
    whiteList["mask"] = false;
    whiteList["mask-box"] = false;
    whiteList["mask-box-outset"] = false;
    whiteList["mask-box-repeat"] = false;
    whiteList["mask-box-slice"] = false;
    whiteList["mask-box-source"] = false;
    whiteList["mask-box-width"] = false;
    whiteList["mask-clip"] = false;
    whiteList["mask-image"] = false;
    whiteList["mask-origin"] = false;
    whiteList["mask-position"] = false;
    whiteList["mask-repeat"] = false;
    whiteList["mask-size"] = false;
    whiteList["mask-source-type"] = false;
    whiteList["mask-type"] = false;
    whiteList["max-height"] = true;
    whiteList["max-lines"] = false;
    whiteList["max-width"] = true;
    whiteList["min-height"] = true;
    whiteList["min-width"] = true;
    whiteList["move-to"] = false;
    whiteList["nav-down"] = false;
    whiteList["nav-index"] = false;
    whiteList["nav-left"] = false;
    whiteList["nav-right"] = false;
    whiteList["nav-up"] = false;
    whiteList["object-fit"] = false;
    whiteList["object-position"] = false;
    whiteList["opacity"] = false;
    whiteList["order"] = false;
    whiteList["orphans"] = false;
    whiteList["outline"] = false;
    whiteList["outline-color"] = false;
    whiteList["outline-offset"] = false;
    whiteList["outline-style"] = false;
    whiteList["outline-width"] = false;
    whiteList["overflow"] = false;
    whiteList["overflow-wrap"] = false;
    whiteList["overflow-x"] = false;
    whiteList["overflow-y"] = false;
    whiteList["padding"] = true;
    whiteList["padding-bottom"] = true;
    whiteList["padding-left"] = true;
    whiteList["padding-right"] = true;
    whiteList["padding-top"] = true;
    whiteList["page"] = false;
    whiteList["page-break-after"] = false;
    whiteList["page-break-before"] = false;
    whiteList["page-break-inside"] = false;
    whiteList["page-policy"] = false;
    whiteList["pause"] = false;
    whiteList["pause-after"] = false;
    whiteList["pause-before"] = false;
    whiteList["perspective"] = false;
    whiteList["perspective-origin"] = false;
    whiteList["pitch"] = false;
    whiteList["pitch-range"] = false;
    whiteList["play-during"] = false;
    whiteList["position"] = false;
    whiteList["presentation-level"] = false;
    whiteList["quotes"] = false;
    whiteList["region-fragment"] = false;
    whiteList["resize"] = false;
    whiteList["rest"] = false;
    whiteList["rest-after"] = false;
    whiteList["rest-before"] = false;
    whiteList["richness"] = false;
    whiteList["right"] = false;
    whiteList["rotation"] = false;
    whiteList["rotation-point"] = false;
    whiteList["ruby-align"] = false;
    whiteList["ruby-merge"] = false;
    whiteList["ruby-position"] = false;
    whiteList["shape-image-threshold"] = false;
    whiteList["shape-outside"] = false;
    whiteList["shape-margin"] = false;
    whiteList["size"] = false;
    whiteList["speak"] = false;
    whiteList["speak-as"] = false;
    whiteList["speak-header"] = false;
    whiteList["speak-numeral"] = false;
    whiteList["speak-punctuation"] = false;
    whiteList["speech-rate"] = false;
    whiteList["stress"] = false;
    whiteList["string-set"] = false;
    whiteList["tab-size"] = false;
    whiteList["table-layout"] = false;
    whiteList["text-align"] = true;
    whiteList["text-align-last"] = true;
    whiteList["text-combine-upright"] = true;
    whiteList["text-decoration"] = true;
    whiteList["text-decoration-color"] = true;
    whiteList["text-decoration-line"] = true;
    whiteList["text-decoration-skip"] = true;
    whiteList["text-decoration-style"] = true;
    whiteList["text-emphasis"] = true;
    whiteList["text-emphasis-color"] = true;
    whiteList["text-emphasis-position"] = true;
    whiteList["text-emphasis-style"] = true;
    whiteList["text-height"] = true;
    whiteList["text-indent"] = true;
    whiteList["text-justify"] = true;
    whiteList["text-orientation"] = true;
    whiteList["text-overflow"] = true;
    whiteList["text-shadow"] = true;
    whiteList["text-space-collapse"] = true;
    whiteList["text-transform"] = true;
    whiteList["text-underline-position"] = true;
    whiteList["text-wrap"] = true;
    whiteList["top"] = false;
    whiteList["transform"] = false;
    whiteList["transform-origin"] = false;
    whiteList["transform-style"] = false;
    whiteList["transition"] = false;
    whiteList["transition-delay"] = false;
    whiteList["transition-duration"] = false;
    whiteList["transition-property"] = false;
    whiteList["transition-timing-function"] = false;
    whiteList["unicode-bidi"] = false;
    whiteList["vertical-align"] = false;
    whiteList["visibility"] = false;
    whiteList["voice-balance"] = false;
    whiteList["voice-duration"] = false;
    whiteList["voice-family"] = false;
    whiteList["voice-pitch"] = false;
    whiteList["voice-range"] = false;
    whiteList["voice-rate"] = false;
    whiteList["voice-stress"] = false;
    whiteList["voice-volume"] = false;
    whiteList["volume"] = false;
    whiteList["white-space"] = false;
    whiteList["widows"] = false;
    whiteList["width"] = true;
    whiteList["will-change"] = false;
    whiteList["word-break"] = true;
    whiteList["word-spacing"] = true;
    whiteList["word-wrap"] = true;
    whiteList["wrap-flow"] = false;
    whiteList["wrap-through"] = false;
    whiteList["writing-mode"] = false;
    whiteList["z-index"] = false;
    return whiteList;
  }
  function onAttr(name, value, options) {
  }
  function onIgnoreAttr(name, value, options) {
  }
  var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
  function safeAttrValue(name, value) {
    if (REGEXP_URL_JAVASCRIPT.test(value)) return "";
    return value;
  }
  _default.whiteList = getDefaultWhiteList();
  _default.getDefaultWhiteList = getDefaultWhiteList;
  _default.onAttr = onAttr;
  _default.onIgnoreAttr = onIgnoreAttr;
  _default.safeAttrValue = safeAttrValue;
  return _default;
}
var util$1;
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util$1;
  hasRequiredUtil$1 = 1;
  util$1 = {
    indexOf: function(arr, item) {
      var i, j;
      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },
    forEach: function(arr, fn, scope) {
      var i, j;
      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function(str) {
      if (String.prototype.trim) {
        return str.trim();
      }
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(str) {
      if (String.prototype.trimRight) {
        return str.trimRight();
      }
      return str.replace(/(\s*$)/g, "");
    }
  };
  return util$1;
}
var parser$1;
var hasRequiredParser$1;
function requireParser$1() {
  if (hasRequiredParser$1) return parser$1;
  hasRequiredParser$1 = 1;
  var _ = requireUtil$1();
  function parseStyle(css2, onAttr) {
    css2 = _.trimRight(css2);
    if (css2[css2.length - 1] !== ";") css2 += ";";
    var cssLength = css2.length;
    var isParenthesisOpen = false;
    var lastPos = 0;
    var i = 0;
    var retCSS = "";
    function addNewAttr() {
      if (!isParenthesisOpen) {
        var source = _.trim(css2.slice(lastPos, i));
        var j2 = source.indexOf(":");
        if (j2 !== -1) {
          var name = _.trim(source.slice(0, j2));
          var value = _.trim(source.slice(j2 + 1));
          if (name) {
            var ret = onAttr(lastPos, retCSS.length, name, value, source);
            if (ret) retCSS += ret + "; ";
          }
        }
      }
      lastPos = i + 1;
    }
    for (; i < cssLength; i++) {
      var c = css2[i];
      if (c === "/" && css2[i + 1] === "*") {
        var j = css2.indexOf("*/", i + 2);
        if (j === -1) break;
        i = j + 1;
        lastPos = i + 1;
        isParenthesisOpen = false;
      } else if (c === "(") {
        isParenthesisOpen = true;
      } else if (c === ")") {
        isParenthesisOpen = false;
      } else if (c === ";") {
        if (isParenthesisOpen) ;
        else {
          addNewAttr();
        }
      } else if (c === "\n") {
        addNewAttr();
      }
    }
    return _.trim(retCSS);
  }
  parser$1 = parseStyle;
  return parser$1;
}
var css;
var hasRequiredCss;
function requireCss() {
  if (hasRequiredCss) return css;
  hasRequiredCss = 1;
  var DEFAULT = require_default$1();
  var parseStyle = requireParser$1();
  requireUtil$1();
  function isNull(obj) {
    return obj === void 0 || obj === null;
  }
  function shallowCopyObject(obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    return ret;
  }
  function FilterCSS(options) {
    options = shallowCopyObject(options || {});
    options.whiteList = options.whiteList || DEFAULT.whiteList;
    options.onAttr = options.onAttr || DEFAULT.onAttr;
    options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
    this.options = options;
  }
  FilterCSS.prototype.process = function(css2) {
    css2 = css2 || "";
    css2 = css2.toString();
    if (!css2) return "";
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onAttr = options.onAttr;
    var onIgnoreAttr = options.onIgnoreAttr;
    var safeAttrValue = options.safeAttrValue;
    var retCSS = parseStyle(css2, function(sourcePosition, position, name, value, source) {
      var check = whiteList[name];
      var isWhite = false;
      if (check === true) isWhite = check;
      else if (typeof check === "function") isWhite = check(value);
      else if (check instanceof RegExp) isWhite = check.test(value);
      if (isWhite !== true) isWhite = false;
      value = safeAttrValue(name, value);
      if (!value) return;
      var opts = {
        position,
        sourcePosition,
        source,
        isWhite
      };
      if (isWhite) {
        var ret = onAttr(name, value, opts);
        if (isNull(ret)) {
          return name + ":" + value;
        } else {
          return ret;
        }
      } else {
        var ret = onIgnoreAttr(name, value, opts);
        if (!isNull(ret)) {
          return ret;
        }
      }
    });
    return retCSS;
  };
  css = FilterCSS;
  return css;
}
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib.exports;
  hasRequiredLib$1 = 1;
  (function(module, exports) {
    var DEFAULT = require_default$1();
    var FilterCSS = requireCss();
    function filterCSS(html, options) {
      var xss2 = new FilterCSS(options);
      return xss2.process(html);
    }
    exports = module.exports = filterCSS;
    exports.FilterCSS = FilterCSS;
    for (var i in DEFAULT) exports[i] = DEFAULT[i];
    if (typeof window !== "undefined") {
      window.filterCSS = module.exports;
    }
  })(lib, lib.exports);
  return lib.exports;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  util = {
    indexOf: function(arr, item) {
      var i, j;
      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },
    forEach: function(arr, fn, scope) {
      var i, j;
      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }
      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function(str) {
      if (String.prototype.trim) {
        return str.trim();
      }
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(str) {
      var reg = /\s|\n|\t/;
      var match = reg.exec(str);
      return match ? match.index : -1;
    }
  };
  return util;
}
var hasRequired_default;
function require_default() {
  if (hasRequired_default) return _default$1;
  hasRequired_default = 1;
  var FilterCSS = requireLib$1().FilterCSS;
  var getDefaultCSSWhiteList = requireLib$1().getDefaultWhiteList;
  var _ = requireUtil();
  function getDefaultWhiteList() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var defaultCSSFilter = new FilterCSS();
  function onTag(tag, html, options) {
  }
  function onIgnoreTag(tag, html, options) {
  }
  function onTagAttr(tag, name, value) {
  }
  function onIgnoreTagAttr(tag, name, value) {
  }
  function escapeHtml(html) {
    return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
  }
  function safeAttrValue(tag, name, value, cssFilter) {
    value = friendlyAttrValue(value);
    if (name === "href" || name === "src") {
      value = _.trim(value);
      if (value === "#") return "#";
      if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
        return "";
      }
    } else if (name === "background") {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    } else if (name === "style") {
      REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
        return "";
      }
      REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      }
      if (cssFilter !== false) {
        cssFilter = cssFilter || defaultCSSFilter;
        value = cssFilter.process(value);
      }
    }
    value = escapeAttrValue(value);
    return value;
  }
  var REGEXP_LT = /</g;
  var REGEXP_GT = />/g;
  var REGEXP_QUOTE = /"/g;
  var REGEXP_QUOTE_2 = /&quot;/g;
  var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
  var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
  var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
  var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
  function escapeQuote(str) {
    return str.replace(REGEXP_QUOTE, "&quot;");
  }
  function unescapeQuote(str) {
    return str.replace(REGEXP_QUOTE_2, '"');
  }
  function escapeHtmlEntities(str) {
    return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
      return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
    });
  }
  function escapeDangerHtml5Entities(str) {
    return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
  }
  function clearNonPrintableCharacter(str) {
    var str2 = "";
    for (var i = 0, len = str.length; i < len; i++) {
      str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
    }
    return _.trim(str2);
  }
  function friendlyAttrValue(str) {
    str = unescapeQuote(str);
    str = escapeHtmlEntities(str);
    str = escapeDangerHtml5Entities(str);
    str = clearNonPrintableCharacter(str);
    return str;
  }
  function escapeAttrValue(str) {
    str = escapeQuote(str);
    str = escapeHtml(str);
    return str;
  }
  function onIgnoreTagStripAll() {
    return "";
  }
  function StripTagBody(tags, next) {
    if (typeof next !== "function") {
      next = function() {
      };
    }
    var isRemoveAllTag = !Array.isArray(tags);
    function isRemoveTag(tag) {
      if (isRemoveAllTag) return true;
      return _.indexOf(tags, tag) !== -1;
    }
    var removeList = [];
    var posStart = false;
    return {
      onIgnoreTag: function(tag, html, options) {
        if (isRemoveTag(tag)) {
          if (options.isClosing) {
            var ret = "[/removed]";
            var end = options.position + ret.length;
            removeList.push([
              posStart !== false ? posStart : options.position,
              end
            ]);
            posStart = false;
            return ret;
          } else {
            if (!posStart) {
              posStart = options.position;
            }
            return "[removed]";
          }
        } else {
          return next(tag, html, options);
        }
      },
      remove: function(html) {
        var rethtml = "";
        var lastPos = 0;
        _.forEach(removeList, function(pos) {
          rethtml += html.slice(lastPos, pos[0]);
          lastPos = pos[1];
        });
        rethtml += html.slice(lastPos);
        return rethtml;
      }
    };
  }
  function stripCommentTag(html) {
    var retHtml = "";
    var lastPos = 0;
    while (lastPos < html.length) {
      var i = html.indexOf("<!--", lastPos);
      if (i === -1) {
        retHtml += html.slice(lastPos);
        break;
      }
      retHtml += html.slice(lastPos, i);
      var j = html.indexOf("-->", i);
      if (j === -1) {
        break;
      }
      lastPos = j + 3;
    }
    return retHtml;
  }
  function stripBlankChar(html) {
    var chars = html.split("");
    chars = chars.filter(function(char) {
      var c = char.charCodeAt(0);
      if (c === 127) return false;
      if (c <= 31) {
        if (c === 10 || c === 13) return true;
        return false;
      }
      return true;
    });
    return chars.join("");
  }
  _default$1.whiteList = getDefaultWhiteList();
  _default$1.getDefaultWhiteList = getDefaultWhiteList;
  _default$1.onTag = onTag;
  _default$1.onIgnoreTag = onIgnoreTag;
  _default$1.onTagAttr = onTagAttr;
  _default$1.onIgnoreTagAttr = onIgnoreTagAttr;
  _default$1.safeAttrValue = safeAttrValue;
  _default$1.escapeHtml = escapeHtml;
  _default$1.escapeQuote = escapeQuote;
  _default$1.unescapeQuote = unescapeQuote;
  _default$1.escapeHtmlEntities = escapeHtmlEntities;
  _default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
  _default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
  _default$1.friendlyAttrValue = friendlyAttrValue;
  _default$1.escapeAttrValue = escapeAttrValue;
  _default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
  _default$1.StripTagBody = StripTagBody;
  _default$1.stripCommentTag = stripCommentTag;
  _default$1.stripBlankChar = stripBlankChar;
  _default$1.attributeWrapSign = '"';
  _default$1.cssFilter = defaultCSSFilter;
  _default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
  return _default$1;
}
var parser = {};
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  var _ = requireUtil();
  function getTagName(html) {
    var i = _.spaceIndex(html);
    var tagName;
    if (i === -1) {
      tagName = html.slice(1, -1);
    } else {
      tagName = html.slice(1, i + 1);
    }
    tagName = _.trim(tagName).toLowerCase();
    if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
    if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
    return tagName;
  }
  function isClosing(html) {
    return html.slice(0, 2) === "</";
  }
  function parseTag(html, onTag, escapeHtml) {
    var rethtml = "";
    var lastPos = 0;
    var tagStart = false;
    var quoteStart = false;
    var currentPos = 0;
    var len = html.length;
    var currentTagName = "";
    var currentHtml = "";
    chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
      var c = html.charAt(currentPos);
      if (tagStart === false) {
        if (c === "<") {
          tagStart = currentPos;
          continue;
        }
      } else {
        if (quoteStart === false) {
          if (c === "<") {
            rethtml += escapeHtml(html.slice(lastPos, currentPos));
            tagStart = currentPos;
            lastPos = currentPos;
            continue;
          }
          if (c === ">" || currentPos === len - 1) {
            rethtml += escapeHtml(html.slice(lastPos, tagStart));
            currentHtml = html.slice(tagStart, currentPos + 1);
            currentTagName = getTagName(currentHtml);
            rethtml += onTag(
              tagStart,
              rethtml.length,
              currentTagName,
              currentHtml,
              isClosing(currentHtml)
            );
            lastPos = currentPos + 1;
            tagStart = false;
            continue;
          }
          if (c === '"' || c === "'") {
            var i = 1;
            var ic = html.charAt(currentPos - i);
            while (ic.trim() === "" || ic === "=") {
              if (ic === "=") {
                quoteStart = c;
                continue chariterator;
              }
              ic = html.charAt(currentPos - ++i);
            }
          }
        } else {
          if (c === quoteStart) {
            quoteStart = false;
            continue;
          }
        }
      }
    }
    if (lastPos < len) {
      rethtml += escapeHtml(html.substr(lastPos));
    }
    return rethtml;
  }
  var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
  function parseAttr(html, onAttr) {
    var lastPos = 0;
    var lastMarkPos = 0;
    var retAttrs = [];
    var tmpName = false;
    var len = html.length;
    function addAttr(name, value) {
      name = _.trim(name);
      name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
      if (name.length < 1) return;
      var ret = onAttr(name, value || "");
      if (ret) retAttrs.push(ret);
    }
    for (var i = 0; i < len; i++) {
      var c = html.charAt(i);
      var v, j;
      if (tmpName === false && c === "=") {
        tmpName = html.slice(lastPos, i);
        lastPos = i + 1;
        lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
        continue;
      }
      if (tmpName !== false) {
        if (i === lastMarkPos) {
          j = html.indexOf(c, i + 1);
          if (j === -1) {
            break;
          } else {
            v = _.trim(html.slice(lastMarkPos + 1, j));
            addAttr(tmpName, v);
            tmpName = false;
            i = j;
            lastPos = i + 1;
            continue;
          }
        }
      }
      if (/\s|\n|\t/.test(c)) {
        html = html.replace(/\s|\n|\t/g, " ");
        if (tmpName === false) {
          j = findNextEqual(html, i);
          if (j === -1) {
            v = _.trim(html.slice(lastPos, i));
            addAttr(v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            i = j - 1;
            continue;
          }
        } else {
          j = findBeforeEqual(html, i - 1);
          if (j === -1) {
            v = _.trim(html.slice(lastPos, i));
            v = stripQuoteWrap(v);
            addAttr(tmpName, v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            continue;
          }
        }
      }
    }
    if (lastPos < html.length) {
      if (tmpName === false) {
        addAttr(html.slice(lastPos));
      } else {
        addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
      }
    }
    return _.trim(retAttrs.join(" "));
  }
  function findNextEqual(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }
  function findNextQuotationMark(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "'" || c === '"') return i;
      return -1;
    }
  }
  function findBeforeEqual(str, i) {
    for (; i > 0; i--) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }
  function isQuoteWrapString(text) {
    if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
      return true;
    } else {
      return false;
    }
  }
  function stripQuoteWrap(text) {
    if (isQuoteWrapString(text)) {
      return text.substr(1, text.length - 2);
    } else {
      return text;
    }
  }
  parser.parseTag = parseTag;
  parser.parseAttr = parseAttr;
  return parser;
}
var xss$1;
var hasRequiredXss;
function requireXss() {
  if (hasRequiredXss) return xss$1;
  hasRequiredXss = 1;
  var FilterCSS = requireLib$1().FilterCSS;
  var DEFAULT = require_default();
  var parser2 = requireParser();
  var parseTag = parser2.parseTag;
  var parseAttr = parser2.parseAttr;
  var _ = requireUtil();
  function isNull(obj) {
    return obj === void 0 || obj === null;
  }
  function getAttrs(html) {
    var i = _.spaceIndex(html);
    if (i === -1) {
      return {
        html: "",
        closing: html[html.length - 2] === "/"
      };
    }
    html = _.trim(html.slice(i + 1, -1));
    var isClosing = html[html.length - 1] === "/";
    if (isClosing) html = _.trim(html.slice(0, -1));
    return {
      html,
      closing: isClosing
    };
  }
  function shallowCopyObject(obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    return ret;
  }
  function keysToLowerCase(obj) {
    var ret = {};
    for (var i in obj) {
      if (Array.isArray(obj[i])) {
        ret[i.toLowerCase()] = obj[i].map(function(item) {
          return item.toLowerCase();
        });
      } else {
        ret[i.toLowerCase()] = obj[i];
      }
    }
    return ret;
  }
  function FilterXSS(options) {
    options = shallowCopyObject(options || {});
    if (options.stripIgnoreTag) {
      if (options.onIgnoreTag) {
        console.error(
          'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
        );
      }
      options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
    }
    if (options.whiteList || options.allowList) {
      options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
    } else {
      options.whiteList = DEFAULT.whiteList;
    }
    this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT.attributeWrapSign;
    options.onTag = options.onTag || DEFAULT.onTag;
    options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
    options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
    options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
    options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
    options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
    this.options = options;
    if (options.css === false) {
      this.cssFilter = false;
    } else {
      options.css = options.css || {};
      this.cssFilter = new FilterCSS(options.css);
    }
  }
  FilterXSS.prototype.process = function(html) {
    html = html || "";
    html = html.toString();
    if (!html) return "";
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onTag = options.onTag;
    var onIgnoreTag = options.onIgnoreTag;
    var onTagAttr = options.onTagAttr;
    var onIgnoreTagAttr = options.onIgnoreTagAttr;
    var safeAttrValue = options.safeAttrValue;
    var escapeHtml = options.escapeHtml;
    var attributeWrapSign = me.attributeWrapSign;
    var cssFilter = me.cssFilter;
    if (options.stripBlankChar) {
      html = DEFAULT.stripBlankChar(html);
    }
    if (!options.allowCommentTag) {
      html = DEFAULT.stripCommentTag(html);
    }
    var stripIgnoreTagBody = false;
    if (options.stripIgnoreTagBody) {
      stripIgnoreTagBody = DEFAULT.StripTagBody(
        options.stripIgnoreTagBody,
        onIgnoreTag
      );
      onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
    }
    var retHtml = parseTag(
      html,
      function(sourcePosition, position, tag, html2, isClosing) {
        var info = {
          sourcePosition,
          position,
          isClosing,
          isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
        };
        var ret = onTag(tag, html2, info);
        if (!isNull(ret)) return ret;
        if (info.isWhite) {
          if (info.isClosing) {
            return "</" + tag + ">";
          }
          var attrs = getAttrs(html2);
          var whiteAttrList = whiteList[tag];
          var attrsHtml = parseAttr(attrs.html, function(name, value) {
            var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
            var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret2)) return ret2;
            if (isWhiteAttr) {
              value = safeAttrValue(tag, name, value, cssFilter);
              if (value) {
                return name + "=" + attributeWrapSign + value + attributeWrapSign;
              } else {
                return name;
              }
            } else {
              ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret2)) return ret2;
              return;
            }
          });
          html2 = "<" + tag;
          if (attrsHtml) html2 += " " + attrsHtml;
          if (attrs.closing) html2 += " /";
          html2 += ">";
          return html2;
        } else {
          ret = onIgnoreTag(tag, html2, info);
          if (!isNull(ret)) return ret;
          return escapeHtml(html2);
        }
      },
      escapeHtml
    );
    if (stripIgnoreTagBody) {
      retHtml = stripIgnoreTagBody.remove(retHtml);
    }
    return retHtml;
  };
  xss$1 = FilterXSS;
  return xss$1;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib$1.exports;
  hasRequiredLib = 1;
  (function(module, exports) {
    var DEFAULT = require_default();
    var parser2 = requireParser();
    var FilterXSS = requireXss();
    function filterXSS(html, options) {
      var xss2 = new FilterXSS(options);
      return xss2.process(html);
    }
    exports = module.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = FilterXSS;
    (function() {
      for (var i in DEFAULT) {
        exports[i] = DEFAULT[i];
      }
      for (var j in parser2) {
        exports[j] = parser2[j];
      }
    })();
    if (typeof window !== "undefined") {
      window.filterXSS = module.exports;
    }
    function isWorkerEnv() {
      return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
    }
    if (isWorkerEnv()) {
      self.filterXSS = module.exports;
    }
  })(lib$1, lib$1.exports);
  return lib$1.exports;
}
var libExports = requireLib();
const xss = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
function Finder__Announcement(props) {
  const clean = xss(props.announcement || "", {
    whiteList: {
      strong: [],
      p: [],
      h2: [],
      h3: [],
      a: ["href"]
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "finder__results__announcement",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      dangerouslySetInnerHTML: {
        __html: clean
      }
    })
  });
}
Finder__Announcement.propTypes = {
  announcement: PropTypes.string
};
function Finder__Results(props) {
  const updating = /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "finder__results__updating",
    "aria-live": "polite",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-spinner fa-pulse icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Updating ", props.summariseAs.plural, "…"]
    })]
  });
  let promoCardConditionMet = false, matchedPromoGroup = [], matchedPromoGroupDetails;
  if (props.promo) {
    let promoConditions = props.promo[0]["conditions"], promoDetails = props.promo[0]["details"], filterFacets = props.query.facets, searchFacets = props.query.query.toLowerCase(), promoCardConditionGroup, queryFacetsAll = {
      ...filterFacets,
      searchFacets
    };
    let queries = Object.values(queryFacetsAll);
    for (const query of queries) {
    }
    queries = queries.filter((item) => item);
    for (const q of queries) {
      matchedPromoGroup = promoConditions.filter((el) => el.school === q || el.level === q || el.related === q || el.subject === q || el.type === q || el.searchQuery1 === q);
    }
    matchedPromoGroup.length > 0 ? (promoCardConditionGroup = matchedPromoGroup[0]["promoGroup"]) && (promoCardConditionMet = true) : promoCardConditionMet = false;
    matchedPromoGroupDetails = promoDetails.filter((el) => el.promoGroup === promoCardConditionGroup);
  }
  const resultsClass = "resultsVariant" in props.config ? `finder__results__list finder__results__list--${props.config.resultsVariant}` : "finder__results__list";
  if (props.response) {
    const summary = /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Summary, {
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
    const announcement = props.config.announcement && /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Announcement, {
      announcement: props.config.announcement
    });
    const didYouMean = (props.query.misspelling || props.response.spell) && /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__DidYouMean, {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    });
    const pagination = props.response.summary.totalMatching > props.response.summary.numRanks && /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Pagination, {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    let results, secondItemOnwards = props.response.results;
    if (promoCardConditionMet && (props.response.bestBets.length > 0 || props.response.results.length > 0)) {
      if (props.query.startRank === 1) {
        const firstItemData = props.response.results[0];
        const secondItemOnwardsData = Array.from(secondItemOnwards.slice(1));
        results = /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", {
          start: props.response.summary.currStart,
          className: resultsClass,
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
            bestBet: false,
            details: firstItemData,
            type: props.type,
            query: props.query
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Promo, {
            heading: matchedPromoGroupDetails[0]["heading"],
            body: matchedPromoGroupDetails[0]["body"],
            linkRef: matchedPromoGroupDetails[0]["linkRef"],
            linkText: matchedPromoGroupDetails[0]["linkText"]
          }), secondItemOnwardsData.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
            bestBet: false,
            details: s,
            type: props.type,
            query: props.query
          }, s.docNum))]
        });
      } else {
        results = /* @__PURE__ */ jsxRuntimeExports.jsx("ol", {
          start: props.response.summary.currStart,
          className: resultsClass,
          children: props.response.results.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
            bestBet: false,
            details: card,
            type: props.type,
            query: props.query
          }, card.docNum))
        });
      }
    }
    if (props.response.results && !promoCardConditionMet) {
      results = props.response.bestBets.length > 0 || props.response.results.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", {
        start: props.response.summary.currStart,
        className: resultsClass,
        children: [props.response.bestBets.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__BestBet, {
          details: card
        }, card.docNum)), props.response.results.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
          bestBet: false,
          details: card,
          type: props.type,
          query: props.query
        }, card.docNum))]
      }) : null;
    }
    const resultsContent = props.updating ? /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
      children: updating
    }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
      children: [didYouMean, announcement, summary, results, pagination]
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "finder__results",
      children: resultsContent
    });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "finder__results",
      children: updating
    });
  }
}
Finder__Results.propTypes = {
  clear: PropTypes.func,
  query: PropTypes.object,
  response: PropTypes.object,
  summariseAs: PropTypes.object,
  type: PropTypes.string,
  update: PropTypes.object,
  updating: PropTypes.bool,
  config: PropTypes.object,
  promo: PropTypes.array,
  pastEventsQuery: PropTypes.object,
  pastEventsResponse: PropTypes.object,
  pastEventsUpdate: PropTypes.object,
  matrixState: PropTypes.object
};
function useLogicWrapper(config, results, matrixQuery, element) {
  const oneSecond = 1e3, scrollDuration = reduceMotion() ? 0 : oneSecond, screenOffsetRatio = 10;
  const hasMounted = useHasMounted();
  const matrixState = !hasMounted && matrixQuery ? true : false;
  const params = matrixState ? matrixQuery : new URLSearchParams(window.location.search), initialResults = results || {};
  const nonFBParams = config.facetLabels.filter((paramFacet) => paramFacet.nonFBParam);
  const initialQuery = {
    collection: config.collection,
    facets: config.facetLabels.length > 0 && params ? getFacetParams(config.facetLabels, params, matrixState) : {},
    parameters: nonFBParams.length > 0 && params ? getNonFBParams(config.facetLabels, params, matrixState) : {},
    fixedFacets: config.fixedFacets,
    fixedParameters: config.fixParameters ? config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: hasMounted && params.get("num_ranks") ? params.get("num_ranks") : config.numRanks,
    query: !matrixState && params.get("query") ? params.get("query") : params && params.query ? params.query : "",
    sortType: !matrixState && params.get("query") ? "" : !matrixState && params.get("sort") ? params.get("sort") : config.sort[0].type,
    startRank: !matrixState && params.get("start_rank") ? params.get("start_rank") : params && params.start_rank ? params.start_rank : 1
  };
  const initialResponse = Object.keys(initialResults).length > 0 ? Object.freeze(results) : Object.freeze({
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
    replaceHistory(query.query, query.startRank, query.facets, query.parameters, query.sortType, config.facetLabels, config.sort[0].type, hasMounted);
    setUpdating(true);
    query.interacted && scroll.center(element.querySelector(".finder__results"), scrollDuration, -window.innerHeight / screenOffsetRatio);
    call.cancel();
    const [request, requestToken] = find(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters);
    setCall({
      cancel: () => {
        requestToken.cancel();
      }
    });
    request.then((data) => {
      setResponse(formatFBResponse(data));
      setUpdating(false);
    }).then(() => {
      query.interacted && scroll.center(element.querySelector(".finder__results h2"), scrollDuration);
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
    newQuery.sortType = resetSort ? config.sort[0].type : newQuery.sortType;
    newQuery.facets = {};
    newQuery.parameters = {};
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    setQuery(newQuery);
    setUpdate(!update);
  };
  return {
    query,
    funnelbackResponse,
    updating,
    updater,
    clear,
    hasMounted,
    matrixState
  };
}
function Finder(props) {
  const {
    query,
    funnelbackResponse,
    updating,
    updater,
    clear,
    hasMounted,
    matrixState
  } = useLogicWrapper(props.config, props.initialResults || {}, props.initialQuery, props.element);
  const queryElement = props.config.noQuery && props.config.noQuery === true ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Query, {
    config: props.config,
    query,
    update: updater,
    updating
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
    className: props.config.facetLabels.length > 0 ? "finder" : "finder finder--nofilters",
    onSubmit: (e) => {
      e.preventDefault();
    },
    children: [queryElement, props.config.facetLabels.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__FiltersMobile, {
        config: props.config,
        query,
        response: funnelbackResponse,
        update: updater,
        updating,
        summariseAs: props.config.summariseAs,
        clear,
        mobile: true,
        hasMounted,
        matrixState
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results, {
      clear,
      config: props.config,
      query,
      response: funnelbackResponse,
      summariseAs: props.config.summariseAs,
      type: props.config.resultCard,
      update: updater,
      updating
    })]
  });
}
Finder.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object,
  initialQuery: PropTypes.object,
  initialResults: PropTypes.object
};
document.addEventListener("DOMContentLoaded", () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const finders = document.querySelectorAll(".wrapper--finder");
    finders && Array.from(finders).forEach((finder) => {
      finderConfig(finder.dataset.config).then((config) => {
        reactDomExports.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(Finder, {
          config,
          element: finder
        }), finder);
      });
    });
  }
});
//# sourceMappingURL=finder.js.map
