import { r as reactExports, j as jsxRuntimeExports, R as React } from "./util-Z6NqVPyg.js";
import { P as PropTypes, r as reactDomExports } from "./index-C9QTewTB.js";
import { s as suggest, f as finderConfig } from "./funnelback-CRcUgICC.js";
import { F as Finder__Clear } from "./finder__clear-Du7up4Zq.js";
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
          className: "search-box__suggestion",
          children: suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)
        }), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)]
      })]
    })
  });
}
function Query(props) {
  const [partialQuery, setPartialQuery] = reactExports.useState("");
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [call, setCall] = reactExports.useState({
    cancel: () => {
    }
  });
  const [inputId] = reactExports.useState("search-box--" + props.query.collection);
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false), [activeSuggestionID, setActiveSuggestionID] = reactExports.useState("");
  reactExports.useEffect(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }
  const submitForm = (query) => {
    call.cancel();
    const newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : "";
    newQuery.sortType = partialQuery ? "" : props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clearQuery = () => {
    call.cancel();
    setPartialQuery("");
    setSuggestions([]);
    focusInput();
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
    className: showSuggestions ? "search-box__query__suggestions show" : "search-box__query__suggestions hide",
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
    className: "search-box__query__input",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "sr-only",
      htmlFor: inputId,
      children: "Search"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      autoComplete: "off",
      id: inputId,
      name: "query",
      placeholder: "Enter course title or keyword",
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
              e.target.parentNode.querySelector(".search-box__query__suggestions button").focus();
              setActiveSuggestionID(e.target.parentNode.querySelector(".search-box__query__suggestions li").id);
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
    className: "search-box__query",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [input, /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        type: "submit",
        className: "search-box__query__submit",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "fal fa-sharp fa-search search-box__query__submit__icon",
          "aria-hidden": "true"
        }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "sr-only search-box__query__submit__text",
          children: "Find"
        })]
      })]
    })
  });
}
Query.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object,
  updating: PropTypes.bool
};
function Select(props) {
  const currentValue = props.query.facets[props.facet.meta] || "";
  const setFacet = (value) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `search-box__filter search-box__select ${currentValue && "search-box__select--selected"}`,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "sr-only",
      htmlFor: `f±${props.facet.facetName}|${props.facet.meta}[]`,
      children: props.facet.name
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("select", {
      name: `f±${props.facet.facetName}|${props.facet.meta}[]`,
      id: `f±${props.facet.facetName}|${props.facet.meta}[]`,
      onChange: (e) => setFacet(e.target.value),
      value: currentValue,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("option", {
        value: "",
        id: `f±${props.facet.facetName}|${props.facet.meta}all`,
        name: `f±${props.facet.facetName}|${props.facet.meta}_all`,
        children: props.facet.noSelection
      }), props.facet.values.map((value, i) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: value.data.toLowerCase(),
          children: value.label
        }, i);
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-sharp fa-chevron-down icon"
    })]
  });
}
Select.propTypes = {
  facet: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object
};
function SearchBox(props) {
  const initialQuery = {
    collection: props.config.collection,
    facets: {},
    fixedFacets: props.config.fixedFacets,
    fixedParameters: props.config.fixParameters ? props.config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: props.config.numRanks,
    query: "",
    sortType: "",
    startRank: 1
  };
  const [query, setQuery] = reactExports.useState(initialQuery);
  const [updating] = reactExports.useState(true);
  const [update, setUpdate] = reactExports.useState(false);
  const updater = {
    query: (newQuery) => setQuery(newQuery),
    results: (newUpdate) => setUpdate(newUpdate),
    updateState: update
  };
  const level = props.config.facetLabels.filter((facet) => facet.meta === "level");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
    action: "https://www.citystgeorges.ac.uk/prospective-students/courses",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
      children: "Search for a course"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Select, {
      facet: level[0],
      query,
      update: updater
    }, level[0].meta), /* @__PURE__ */ jsxRuntimeExports.jsx(Query, {
      config: props.config,
      query,
      update: updater,
      updating
    })]
  });
}
SearchBox.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object
};
document.addEventListener("DOMContentLoaded", () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const searchBox = document.querySelector("#search-box");
    searchBox && finderConfig(searchBox.dataset.config).then((config) => {
      reactDomExports.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(SearchBox, {
        element: searchBox,
        config
      }), searchBox);
    });
  }
});
//# sourceMappingURL=browser-search-box.js.map
