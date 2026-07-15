import { j as jsxRuntimeExports, r as reactExports, R as React, a as reduceMotion } from "./util-Z6NqVPyg.js";
import { P as PropTypes, r as reactDomExports } from "./index-C9QTewTB.js";
import { s as suggest, a as find, f as finderConfig } from "./funnelback-CRcUgICC.js";
import { f as formatFBResponse } from "./hyper-link-DjH8jlSg.js";
import { s as scroll } from "./zenscroll-BPHhNzrU.js";
import { F as Finder__Pagination, a as Finder__Results__Card } from "./finder__pagination-WkMddiZI.js";
import { c as createFocusTrap } from "./index-xnwwqUBt.js";
const maximumBestBetsToDisplay = 3;
function Search__BestBets(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "wrapper--search__bestbets",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "search__bestbets",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "search__bestbets__heading sr-only",
        children: "Best bets"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
        className: "search__bestbets__list",
        children: props.bestbets.slice(0, maximumBestBetsToDisplay).map((bestBet, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          className: "card--search card--bestbet",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
            href: bestBet.displayUrl,
            className: "card__anchor card__details",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "card__details__text",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                className: "card__heading",
                children: bestBet.titleHtml
              }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "card__description",
                children: bestBet.descriptionHtml
              }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "card__url",
                children: bestBet.displayUrl
              })]
            })
          })
        }, "bestBet" + i))
      })]
    })
  });
}
Search__BestBets.propTypes = {
  bestbets: PropTypes.arrayOf(PropTypes.object)
};
const siteUrl$2 = "city.ac.uk";
const maximumResultsToDisplay = 0;
function genericResult$2(result, collection, i) {
  const thumbnail = result.listMetadata.thumbnail && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card__thumbnail",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("picture", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        src: result.listMetadata.thumbnail[0],
        alt: ""
      })
    })
  }), external = result.liveUrl.indexOf(siteUrl$2) < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [" ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-sharp external-link icon",
      "aria-label": "(external link)"
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card--search",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: result.liveUrl,
      className: "card__details card__anchor",
      children: [thumbnail, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h4", {
          className: "card__heading",
          children: [result.title, external]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: result.listMetadata.c && result.listMetadata.c[0]
        })]
      })]
    })
  }, collection + i);
}
function Search__OtherSites(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "wrapper--search__othersites",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "search__othersites",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "search__othersites__heading",
        children: "Results on other City St George's sites"
      }), props.collections.map((collection, i) => {
        if (!collection.updating && collection.response && collection.response.summary.totalMatching > 0) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "search__othersites__site",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
              className: "search__othersites__site__heading",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                href: collection.search + "?query=" + props.query.query,
                children: [collection.label, " (", collection.response.summary.totalMatching, ")"]
              }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: "fas fa-sharp fa-arrow-right icon",
                "aria-hidden": "true"
              })]
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "search__results",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
                className: "search__results__list",
                children: collection.response.results.slice(0, maximumResultsToDisplay).map((result, j) => genericResult$2(result, collection.collection, j))
              })
            })]
          }, "site" + i);
        } else {
          return null;
        }
      }), props.nonpublic.map((collection, i) => {
        if (!collection.updating && collection.response && collection.response.summary.totalMatching > 0) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "search__othersites__site",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
              className: "search__othersites__site__heading",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                href: collection.search + "?query=" + props.query.query,
                children: [collection.label, " (", collection.response.summary.totalMatching, ")"]
              }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: "far fa-sharp fa-lock-alt icon",
                "aria-label": "Login required"
              })]
            })
          }, "site" + i);
        } else {
          return null;
        }
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "search__othersites__noresults",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          children: "No results found."
        })
      })]
    })
  });
}
Search__OtherSites.propTypes = {
  query: PropTypes.object,
  collections: PropTypes.arrayOf(PropTypes.object),
  nonpublic: PropTypes.arrayOf(PropTypes.object)
};
function Search__Clear(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
    className: "search__clear",
    type: "button",
    onClick: () => {
      props.clear();
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fa-sharp fa-solid fa-xmark icon"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "search__clear__text",
      children: "Clear query"
    })]
  });
}
Search__Clear.propTypes = {
  clear: PropTypes.func
};
function Search__Collection(props) {
  const currentValue = props.query.collection || props.config.primary[0].collection;
  const setCollection = (value) => {
    const newQuery = props.query;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    newQuery.collection = value;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `search__filter search__select ${currentValue !== props.config.primary.collections[0].collection && "search__select--selected"}`,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      htmlFor: "search__collection",
      children: props.config.primary.collections[0].label
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("select", {
      name: "collection",
      id: "search__collection",
      onChange: (e) => setCollection(e.target.value),
      value: currentValue,
      children: props.config.primary.collections.map((collection, i) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: collection.collection.toLowerCase(),
          children: collection.label
        }, i);
      })
    })]
  });
}
Search__Collection.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object
};
const maximumSuggestions = 5, escapeKey$1 = "Escape", endKey$1 = "End", homeKey$1 = "Home", arrowUp$1 = "ArrowUp", arrowDown$1 = "ArrowDown";
function highlightQueryTerm$1(suggestion, partialQuery) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "sr-only",
        children: suggestion
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "search__suggestion",
          children: suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)
        }), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)]
      })]
    })
  });
}
function Search__Query(props) {
  const [partialQuery, setPartialQuery] = reactExports.useState(props.query.query);
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [call, setCall] = reactExports.useState({
    cancel: () => {
    }
  });
  const stringLength = 16, stringOffset = -4, [inputId] = reactExports.useState("search--" + props.query.collection + "--" + Math.random().toString(stringLength).slice(stringOffset));
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
    newQuery.sortType = "";
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
    newQuery.sortType = "";
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clear = partialQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(Search__Clear, {
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
    className: showSuggestions ? "search__query__suggestions show" : "search__query__suggestions hide",
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
            case escapeKey$1:
              e.target.parentNode.parentNode.parentNode.querySelector("input").focus();
              setSuggestions([]);
              setActiveSuggestionID("");
              break;
            case arrowUp$1:
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
            case arrowDown$1:
              e.preventDefault();
              if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.nextElementSibling.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.nextElementSibling.id);
              }
              break;
            case homeKey$1:
              e.preventDefault();
              if (e.target.parentNode.parentNode.firstChild && e.target.parentNode.parentNode.firstChild.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.parentNode.firstChild.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.firstChild.id);
              }
              break;
            case endKey$1:
              e.preventDefault();
              if (e.target.parentNode.parentNode.lastChild && e.target.parentNode.parentNode.lastChild.querySelector("button")) {
                e.preventDefault();
                e.target.parentNode.parentNode.lastChild.querySelector("button").focus();
                setActiveSuggestionID(e.target.parentNode.lastChild.id);
              }
              break;
          }
        },
        children: highlightQueryTerm$1(suggestion, partialQuery)
      })
    }, suggestion))
  });
  const input = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "search__query__input",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "search__query__icon--wrapper",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "search__icon fal fa-sharp fa-search icon",
        "aria-hidden": "true"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "sr-only",
      htmlFor: inputId,
      children: "Search"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      autoComplete: "off",
      id: inputId,
      name: "query",
      placeholder: props.primary[0].placeholder,
      ref: (input2) => {
        textInput = input2;
      },
      type: "text",
      value: partialQuery,
      onKeyDown: (e) => {
        switch (e.key) {
          case escapeKey$1:
            clearQuery();
            break;
          case arrowDown$1:
            if (suggestions && suggestions.length > 0) {
              e.preventDefault();
              e.target.parentNode.querySelector(".search__query__suggestions button").focus();
              setActiveSuggestionID(e.target.parentNode.querySelector(".search__query__suggestions li").id);
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
  const collection = /* @__PURE__ */ jsxRuntimeExports.jsx(Search__Collection, {
    config: props.config,
    query: props.query,
    update: props.update
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", {
    className: "search-form__query",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "wrapper--search-form__query__fields",
      children: [collection, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "wrapper--search-form__query__fields__input",
        children: [input, /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
          type: "submit",
          className: "search__query__submit",
          onClick: () => submitForm(),
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "fal fa-sharp fa-search search__query__submit__icon",
            "aria-hidden": "true"
          }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "search__query__submit__text",
            children: "Search"
          })]
        })]
      })]
    })
  });
}
Search__Query.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object,
  primary: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool
};
function Search__Results__BrowsePeople(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "cta-block__cta",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      className: "outline-cta--bright-square",
      href: "https://www.citystgeorges.ac.uk/about/people/" + props.path + "?query=" + props.query,
      children: props.type.charAt(0).toUpperCase() + props.type.slice(1)
    })
  });
}
Search__Results__BrowsePeople.propTypes = {
  query: PropTypes.string,
  type: PropTypes.string,
  path: PropTypes.string
};
let peopleTypes = [{
  type: "academics",
  path: "academics",
  fbRef: "academic"
}, {
  type: "students",
  path: "students",
  fbRef: "student"
}, {
  type: "research students",
  path: "research-students",
  fbRef: "research"
}, {
  type: "honorary graduates",
  path: "honorary-graduates",
  fbRef: "honorary"
}, {
  type: "past students",
  path: "past-students",
  fbRef: "alumni"
}, {
  type: "professional services staff",
  path: "professional-services-staff",
  fbRef: "professional"
}, {
  type: "international",
  path: "international",
  fbRef: "agent"
}];
const siteUrl$1 = "citystgeorges.ac.uk";
const endKey = "End", homeKey = "Home", arrowLeft = "ArrowLeft", arrowUp = "ArrowUp", arrowRight = "ArrowRight", arrowDown = "ArrowDown";
function genericResult$1(result, type, i) {
  const label = type && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__label",
    children: type
  }), external = result.liveUrl.indexOf(siteUrl$1) < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [" ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "ee fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card--search",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: result.liveUrl,
      className: "card__details card__anchor",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
          className: "card__heading",
          children: [result.title, external]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: result.listMetadata.c && result.listMetadata.c[0]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__url",
          children: result.liveUrl
        })]
      })
    })
  }, "all" + i);
}
function Search__Results(props) {
  const fbLabels = [];
  const peopleCollection = props["finders"].filter((f) => {
    return f.label === "People" && f["response"];
  });
  if (JSON.stringify(peopleCollection).indexOf("allValues") > -1) {
    let fbLabelsSrc = peopleCollection[0]["response"]["facets"][0]["allValues"];
    for (const f of fbLabelsSrc) {
      fbLabels.push(f.data);
    }
  }
  const [currentTab, setCurrentTab] = reactExports.useState(0);
  const updating = (results) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
      className: "search__results__updating",
      "aria-live": "polite",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fas fa-sharp fa-spinner fa-pulse icon",
        "aria-hidden": "true"
      }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        children: ["Updating ", results, "…"]
      })]
    });
  };
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
        props.element.querySelector('.tabs__links button[aria-current="true"]').focus();
        break;
      case arrowDown:
        props.element.querySelector(".tabs__panel:not([hidden])").focus();
        break;
      case homeKey:
        setCurrentTab(0);
        break;
      case endKey:
        setCurrentTab(props.finders.length);
        break;
    }
  }
  const links = /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
    className: "tabs__links",
    role: "tablist",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("li", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        role: "tab",
        id: "link--search443531__tabs__" + props.primary[0].collection,
        title: props.primary[0].label,
        "aria-selected": currentTab === 0,
        "aria-current": currentTab === 0,
        onClick: () => setCurrentTab(0),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
          children: [props.primary[0].label, " (", props.primary[0].updating ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "fas fa-sharp fa-spinner fa-pulse icon",
            "aria-label": "Updating…"
          }) : props.primary[0].response && props.primary[0].response.summary.totalMatching, ")"]
        })
      })
    }, "tabs__links__primary"), props.finders.map((finder, i) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
        role: "presentation",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
          id: "link--search443531__tabs__" + finder.collection,
          title: finder.label,
          "aria-selected": currentTab === i + 1,
          "aria-current": currentTab === i + 1,
          onClick: () => setCurrentTab(i + 1),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
            children: [finder.label, " (", finder.updating || !finder.response ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              className: "fas fa-sharp fa-spinner fa-pulse icon",
              "aria-label": "Updating…"
            }) : finder.response.summary.totalMatching, ")"]
          })
        })
      }, "tabs__links__finder" + i);
    })]
  });
  const primaryPagination = props.primary[0].response && props.primary[0].response.summary.totalMatching > props.primary[0].response.summary.numRanks && /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Pagination, {
    currStart: props.primary[0].response.summary.currStart,
    numRanks: props.primary[0].response.summary.numRanks,
    query: props.query,
    totalMatching: props.primary[0].response.summary.totalMatching,
    update: props.update
  });
  const spell = props.primary[0] && props.primary[0].response && props.primary[0].response.spell && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    children: ["Did you mean", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: `search?${props.primary[0].response.spell.url}`,
      children: props.primary[0].response.spell.text
    }), "?"]
  });
  const panels = /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
      className: "tabs__panel",
      id: "search443531__tabs__" + props.primary[0].collection,
      "aria-labelledby": "link--search443531__tabs__" + props.primary[0].collection,
      role: "tabpanel",
      tabIndex: "-1",
      hidden: currentTab !== 0,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "tabs__panel__heading sr-only",
        children: props.primary[0].label
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "tabs__panel__body",
        children: props.primary[0].updating ? updating("results") : props.primary[0].response && props.primary[0].response.summary.totalMatching > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "search__results",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "search__results__summary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
              "aria-live": "polite",
              className: "search__results__summary__heading",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                children: ["(showing", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  children: props.primary[0].response.summary.currStart
                }), "–", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  children: props.primary[0].response.summary.currEnd
                }), " ", "of", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  children: props.primary[0].response.summary.totalMatching
                }), " ", props.primary[0].response.summary.totalMatching === 0 ? "results" : props.primary[0].response.summary.totalMatching === 1 ? "result" : "results", ")"]
              })
            })
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("ol", {
            className: "search__results__list",
            start: props.primary[0].response.summary.currStart,
            children: props.primary[0].response.results.map((result, i) => {
              switch (result.collection) {
                case "web2020-residentialhalls":
                  return genericResult$1(result, "Residential hall", i);
                case "web2020-business-impact":
                  return genericResult$1(result, "Case study", i);
                case "web2020-research":
                  return genericResult$1(result, "Case study", i);
                case "web2020-centres":
                  return genericResult$1(result, "Research centre", i);
                case "web2020-courses":
                  return genericResult$1(result, "Course", i);
                case "web2020-events":
                  return genericResult$1(result, "Event", i);
                case "web2020-facilities":
                  return genericResult$1(result, "Facility", i);
                case "web2020-locations":
                  return genericResult$1(result, "Location", i);
                case "web2020-pathways":
                  return genericResult$1(result, "Career pathway", i);
                case "web2020-funding":
                  return genericResult$1(result, "Funding", i);
                case "web2020-news":
                  return genericResult$1(result, "News", i);
                case "web2020-profiles":
                  return genericResult$1(result, "Profile", i);
                default:
                  return genericResult$1(result, null, i);
              }
            })
          }), primaryPagination]
        }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "search__results__summary search__results__summary--noresults",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
            className: "search__results__summary__heading",
            children: "Your search did not match any results."
          }), spell, /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
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
            })]
          })]
        })
      })]
    }, "primary"), props.finders.map((finder, i) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        className: "tabs__panel",
        id: "search443531__tabs__" + finder.collection,
        "aria-labelledby": "link--search443531__tabs__" + finder.collection,
        role: "tabpanel",
        tabIndex: "-1",
        hidden: currentTab !== i + 1,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          className: "tabs__panel__heading sr-only",
          children: finder.label
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "tabs__panel__body",
          children: finder.updating || !finder.response ? updating(finder.summariseAs.plural) : finder.response.summary.totalMatching > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "search__results",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "search__results__summary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                "aria-live": "polite",
                className: "search__results__summary__heading",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                  children: ["(showing", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    children: finder.response && finder.response.summary.currStart
                  }), "–", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    children: finder.response && finder.response.summary.currEnd
                  }), " ", "of", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    children: finder.response && finder.response.summary.totalMatching
                  }), " ", finder.response && finder.response.summary.totalMatching === 0 ? finder.summariseAs.plural : finder.response && finder.response.summary.totalMatching === 1 ? finder.summariseAs.singular : finder.summariseAs.plural, ")"]
                })
              })
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("ol", {
              className: "search__results__list",
              start: finder.response && finder.response.summary.currStart,
              children: finder.response && finder.response.results.map((result, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Card, {
                bestBet: false,
                details: result,
                type: finder.resultCard,
                query: props.query
              }, finder.collection + i2))
            }), finder.response && finder.response.summary.totalMatching > finder.response.summary.currEnd && finder.summariseAs.plural !== "people" && finder.search && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
              className: "search__results__more",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                href: finder.search + "?query=" + props.query.query,
                children: ["Browse more", " ", finder.summariseAs.plural, " "]
              }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: "fas fa-sharp fa-arrow-right icon",
                "aria-hidden": "true"
              })]
            }), finder.response && finder.response.summary.totalMatching > finder.response.summary.currEnd && finder.summariseAs.plural === "people" && finder.search && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "search__results__browse-more",
                children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                  children: "Browse more people"
                }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
                  className: "cta-block cta-block--inline",
                  children: peopleTypes.map((people, i2) => {
                    if (fbLabels.includes(people.fbRef)) {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(Search__Results__BrowsePeople, {
                        query: finder.response.query,
                        path: people.path,
                        type: people.type
                      }, i2);
                    }
                  })
                })]
              })
            })]
          }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
            className: "search__summary__noresults",
            children: ["No matching ", finder.summariseAs.plural, ".", " ", finder.search && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                href: finder.search,
                children: ["Browse", " ", finder.summariseAs.plural, " ", "instead"]
              }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: "fas fa-sharp fa-arrow-right icon",
                "aria-hidden": "true"
              })]
            })]
          })
        })]
      }, "finder" + i);
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "tabs wrapper--search__results",
    onKeyDown: (e) => keyEvents(e),
    children: [links, panels]
  });
}
Search__Results.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object,
  finders: PropTypes.arrayOf(PropTypes.object),
  primary: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.object,
  update: PropTypes.object
};
const oneSecond = 1e3, scrollDuration = reduceMotion() ? 0 : oneSecond, screenOffsetRatio = 10;
function replaceHistory(currQuery, currStartRank, currCollection, defaultCollection) {
  if (window) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== "" ? params.set("query", currQuery) : params.delete("query");
    currStartRank !== 1 ? params.set("start_rank", currStartRank) : params.delete("start_rank");
    currCollection !== defaultCollection ? params.set("collection", currCollection) : params.delete("collection");
    const hasParams = params.toString().length ? "?" : "";
    window.history.replaceState({}, "", `${window.location.pathname}${hasParams}${params.toString()}`);
  }
}
function Search(props) {
  const params = new URLSearchParams(window.location.search);
  const initialQuery = {
    collection: params.get("collection") || props.config.primary.collections[0].collection,
    interacted: false,
    misspelling: null,
    numRanks: params.get("num_ranks") || props.config.primary.numRanks,
    query: params.get("query") || "",
    sortType: "",
    startRank: params.get("start_rank") || 1
  };
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
    primary: props.config.primary.collections.map((collection) => {
      return {
        label: collection.label,
        collection: collection.collection,
        placeholder: collection.placeholder,
        response: initialResponse,
        search: collection.search,
        updating: false,
        call: {
          cancel: () => {
          }
        }
      };
    }),
    finders: props.config.finders.map((finder) => {
      return {
        label: finder.label,
        summariseAs: finder.summariseAs,
        resultCard: finder.resultCard,
        search: finder.search,
        collection: finder.collection,
        response: initialResponse,
        updating: false,
        call: {
          cancel: () => {
          }
        }
      };
    }),
    nonpublic: props.config.nonpublic.map((collection) => {
      return {
        label: collection.label,
        collection: collection.collection,
        response: initialResponse,
        search: collection.search,
        updating: false,
        call: {
          cancel: () => {
          }
        }
      };
    })
  };
  const [response, setResponse] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState(initialQuery);
  const [fbResponses, setFbResponses] = reactExports.useState(initialResponses);
  const [update, setUpdate] = reactExports.useState(false);
  reactExports.useEffect(() => {
    replaceHistory(query.query, query.startRank, query.collection, props.config.primary.collections[0].collection);
    if (query.query.length > 0) {
      query.interacted && props.element.querySelector(".search__results") && scroll.center(props.element.querySelector(".search__results"), scrollDuration, -window.innerHeight / screenOffsetRatio);
      props.config.primary.collections.forEach((collection, i) => {
        fbResponses.primary[i].call.cancel();
        const [request, requestToken] = find(collection.collection, [], [], query.query, "", query.startRank, query.numRanks, [], []), newResponses = fbResponses;
        newResponses.primary[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.primary[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then((data) => {
          const responses = fbResponses;
          responses.primary[i].response = formatFBResponse(data);
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
        const [request, requestToken] = find(finder.collection, [], [], query.query, "", 1, finder.numRanks, [], []), newResponses = fbResponses;
        newResponses.finders[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.finders[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then((data) => {
          const responses = fbResponses;
          responses.finders[i].response = formatFBResponse(data);
          responses.finders[i].updating = false;
          setFbResponses(responses);
          setResponse(Math.random());
        }).then(() => {
          props.element.querySelector(".tabs__links") && query.interacted && scroll.center(props.element.querySelector(".tabs__links"), scrollDuration);
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
        const [request, requestToken] = find(nonpublic.collection, [], [], query.query, "", 1, 0, [], []), newResponses = fbResponses;
        newResponses.nonpublic[i].call = {
          cancel: () => {
            requestToken.cancel();
          }
        };
        newResponses.nonpublic[i].updating = true;
        setFbResponses(newResponses);
        setResponse(Math.random());
        request.then((data) => {
          const responses = fbResponses;
          responses.nonpublic[i].response = formatFBResponse(data);
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
  }, [update]);
  const updater = {
    query: (newQuery) => setQuery(newQuery),
    results: (newUpdate) => setUpdate(newUpdate),
    updateState: update
  };
  const queryElement = /* @__PURE__ */ jsxRuntimeExports.jsx(Search__Query, {
    config: props.config,
    query,
    update: updater,
    primary: fbResponses.primary.filter((collection) => collection.collection === query.collection),
    updating: fbResponses.primary[0].updating
  });
  const otherSites = query.query && !fbResponses.primary[0].updating && /* @__PURE__ */ jsxRuntimeExports.jsx(Search__OtherSites, {
    query,
    collections: fbResponses.primary.filter((collection) => collection.collection !== query.collection),
    nonpublic: fbResponses.nonpublic
  });
  const bestBets = query.query && !fbResponses.primary[0].updating && fbResponses.primary[0].response && fbResponses.primary[0].response.bestBets && /* @__PURE__ */ jsxRuntimeExports.jsx(Search__BestBets, {
    bestbets: fbResponses.primary[0].response.bestBets
  });
  const results = query.query && /* @__PURE__ */ jsxRuntimeExports.jsx(Search__Results, {
    config: props.config,
    query,
    update: updater,
    primary: fbResponses.primary.filter((collection) => collection.collection === query.collection),
    finders: fbResponses.finders,
    element: props.element
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
    className: "search-form",
    onSubmit: (e) => {
      e.preventDefault();
    },
    children: [queryElement, bestBets, results, otherSites]
  });
}
Search.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object
};
function InlineSearch__Clear(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
    className: "search--inline__clear",
    type: "button",
    onClick: () => {
      props.clear();
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fa-sharp fa-solid fa-xmark icon "
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "search--inline__clear__text",
      children: "Clear query"
    })]
  });
}
InlineSearch__Clear.propTypes = {
  clear: PropTypes.func
};
const escapeKey = "Escape";
function InlineSearch__Query(props) {
  const [partialQuery, setPartialQuery] = reactExports.useState(props.query.query);
  const stringLength = 16, stringOffset = -4, [inputId] = reactExports.useState("search--inline--" + props.query.collection + "--" + Math.random().toString(stringLength).slice(stringOffset));
  reactExports.useEffect(() => {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  let textInput = null;
  function focusInput() {
    textInput.focus();
  }
  const clearQuery = () => {
    setPartialQuery("");
    focusInput();
    const newQuery = props.query;
    newQuery.query = "";
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const fetchSuggestions = (partialQuery2) => {
    const newQuery = props.query;
    newQuery.query = partialQuery2;
    newQuery.startRank = 1;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const clear = partialQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(InlineSearch__Clear, {
    clear: () => {
      clearQuery();
    }
  });
  const input = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "search--inline__query__input",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "search--inline__query__icon--wrapper",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "search--inline__icon fal fa-sharp fa-search icon",
        "aria-hidden": "true"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "sr-only",
      htmlFor: inputId,
      children: "Search"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      autoComplete: "off",
      id: inputId,
      name: "query",
      placeholder: props.config.placeholder,
      ref: (input2) => {
        textInput = input2;
      },
      type: "text",
      required: true,
      value: partialQuery,
      onKeyDown: (e) => {
        switch (e.key) {
          case escapeKey:
            clearQuery();
            break;
        }
      },
      onChange: (e) => {
        setPartialQuery(e.target.value);
        fetchSuggestions(e.target.value);
      }
    }), clear]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", {
    className: "search--inline__query",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [input, /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "submit",
        className: "search--inline__query__submit",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
          className: "search--inline__query__submit__content",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "fas fa-sharp fa-search search--inline__query__submit__icon",
            "aria-hidden": "true"
          }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "search--inline__query__submit__text",
            children: "Search"
          })]
        })
      })]
    })
  });
}
InlineSearch__Query.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object,
  updating: PropTypes.bool
};
function highlightQueryTerm(suggestion, partialQuery) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "sr-only",
        children: suggestion
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "search--inline__suggestion",
          children: suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), partialQuery.length)
        }), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)]
      })]
    })
  });
}
function InlineSearch__Suggestions(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "search--inline__suggestions",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Suggestions"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
      children: props.suggestions.map((suggestion, i) => {
        const urlString = suggestion.replace(/\s+/g, "+"), highlighted = highlightQueryTerm(suggestion, props.query.query);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
            href: `/search?query=${urlString}`,
            children: highlighted
          })
        }, i);
      })
    })]
  });
}
InlineSearch__Suggestions.propTypes = {
  query: PropTypes.object,
  suggestions: PropTypes.arrayOf(PropTypes.string)
};
const siteUrl = "citystgeorges.ac.uk";
function genericResult(result, type) {
  const thumbnail = result.listMetadata.thumbnail && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card__thumbnail",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("picture", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        src: result.listMetadata.thumbnail[0],
        alt: ""
      })
    })
  }), label = type && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__label",
    children: type
  }), external = result.liveUrl.indexOf(siteUrl) < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [" ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card--search",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: result.liveUrl,
      className: "card__details card__anchor",
      children: [thumbnail, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", {
          className: "card__heading",
          children: [result.title, external]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: result.listMetadata.c && result.listMetadata.c[0]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__url",
          children: result.liveUrl
        })]
      })]
    })
  }, result.docNum);
}
function InlineSearch__TopResults(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "search--inline__topresults",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
      children: "Top results"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
      children: props.results.map((result) => {
        switch (result.collection) {
          case "web2020-residentialhalls":
            return genericResult(result, "Residential hall");
          case "web2020-business-impact":
            return genericResult(result, "Case study");
          case "web2020-research":
            return genericResult(result, "Case study");
          case "web2020-centres":
            return genericResult(result, "Research centre");
          case "web2020-courses":
            return genericResult(result, "Course");
          case "web2020-events":
            return genericResult(result, "Event");
          case "web2020-facilities":
            return genericResult(result, "Facility");
          case "web2020-locations":
            return genericResult(result, "Location");
          case "web2020-pathways":
            return genericResult(result, "Career pathway");
          case "web2020-funding":
            return genericResult(result, "Funding");
          case "web2020-news":
            return genericResult(result, "News");
          case "web2020-profiles":
            return genericResult(result, "Profile");
          default:
            return genericResult(result, null);
        }
      })
    })]
  });
}
InlineSearch__TopResults.propTypes = {
  query: PropTypes.object,
  results: PropTypes.arrayOf(PropTypes.object)
};
let modal = null;
const getmodal = () => modal;
function InlineSearch(props) {
  const [display, setDisplay] = reactExports.useState(false);
  const [focusTrap] = reactExports.useState({});
  const openButtonRef = reactExports.useRef(null);
  const modalButtonRef = reactExports.useRef(null);
  const lastTriggerRef = reactExports.useRef(null);
  const focusSearchInput = () => {
    const modal2 = getmodal();
    const input = modal2 ? modal2.querySelector('input[name="query"], input') : null;
    if (input) {
      input.focus({
        preventScroll: true
      });
    }
  };
  const closeModal = () => {
    if (focusTrap && typeof focusTrap.deactivate === "function") {
      try {
        focusTrap.deactivate({
          returnFocus: false
        });
      } catch (err) {
        focusTrap.deactivate();
      }
    }
    const target = lastTriggerRef.current || openButtonRef.current || modalButtonRef.current;
    if (target && typeof target.focus === "function") {
      target.focus();
    }
    const el = document.activeElement;
    if (el && typeof el.blur === "function") {
      el.blur();
    }
    setDisplay(false);
  };
  const maximumSuggestions2 = 10;
  const initialQuery = {
    collection: props.config.collection,
    misspelling: null,
    numRanks: props.config.numRanks,
    query: "",
    startRank: 1,
    facets: [],
    fixedFacets: [],
    fixedParameters: [],
    parameters: []
  };
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
  const [query, setQuery] = reactExports.useState(initialQuery);
  const [funnelbackResponse, setResponse] = reactExports.useState(initialResponse);
  const [suggestions, setSuggestions] = reactExports.useState(initialSuggestions);
  const [updating, setUpdating] = reactExports.useState(false);
  const [suggestionsUpdating, setSuggestionsUpdating] = reactExports.useState(false);
  const [call, setCall] = reactExports.useState({
    cancel: () => {
    }
  });
  const [update, setUpdate] = reactExports.useState(false);
  const [suggestionsCall, setSuggestionsCall] = reactExports.useState({
    cancel: () => {
    }
  });
  reactExports.useEffect(() => {
    setUpdating(true);
    setSuggestionsUpdating(true);
    call.cancel();
    suggestionsCall.cancel();
    const [request, requestToken] = find(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters);
    const [suggestionsRequest, suggestionsRequestToken] = suggest(query.collection, query.query);
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
    request.then((data) => {
      setResponse(formatFBResponse(data));
      setUpdating(false);
    }).catch(() => {
      setResponse(initialResponse);
      setUpdating(false);
    });
    suggestionsRequest.then((data) => {
      if (data) {
        setSuggestions(data);
        setSuggestionsUpdating(false);
      }
    }).catch(() => {
      setSuggestions(initialSuggestions);
    });
  }, [update]);
  const updater = {
    query: (newQuery) => setQuery(newQuery),
    results: (newUpdate) => setUpdate(newUpdate),
    updateState: update
  };
  const updateIndicator = (what) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: `search--inline__results__updating search--inline__results__updating--${what.replace(/ /g, "")}`,
    "aria-live": "polite",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-sharp fa-spinner fa-pulse icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Updating ", what, "…"]
    })]
  });
  reactExports.useEffect(() => {
    if (!focusTrap.activate) {
      createFocusTrap(getmodal(), {
        initialFocus: false,
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        onDeactivate: () => closeModal()
      });
    }
    if (display) {
      focusTrap.activate && focusTrap.activate();
    } else {
      focusTrap.deactivate && focusTrap.deactivate();
    }
  }, [display, focusTrap]);
  const iconClass = `global-header__search__icon far fa-sharp fa-fw ${display ? "fa-xmark" : "fa-search"}`, ariaLabel = `${display ? "Close search" : "Open search"}`, veil = display && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "veil--search",
    "data-on": "true"
  }), toggleButton = /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    ref: openButtonRef,
    className: "global-header__search__button",
    type: "button",
    id: "search",
    "aria-expanded": display,
    "aria-label": ariaLabel,
    onClick: (e) => {
      lastTriggerRef.current = e.currentTarget;
      if (display) {
        closeModal();
        return;
      }
      setDisplay(true);
      focusSearchInput();
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "global-header__search__wrapper",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "global-header__search__text",
        children: display ? "Close" : "Search"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: iconClass,
        "aria-hidden": "true"
      })]
    })
  }), modalToggleButton = /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    ref: modalButtonRef,
    className: "global-header__search__button",
    type: "button",
    id: "modal-search",
    "aria-expanded": display,
    onClick: (e) => {
      lastTriggerRef.current = e.currentTarget;
      if (display) {
        closeModal();
        return;
      }
      setDisplay(true);
      focusSearchInput();
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "global-header__search__wrapper",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "global-header__search__text",
        children: display ? "Close" : "Search"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: iconClass,
        "aria-hidden": "true"
      })]
    })
  }), inputField = /* @__PURE__ */ jsxRuntimeExports.jsx(InlineSearch__Query, {
    config: props.config,
    query,
    update: updater,
    updating
  }), suggestionsList = suggestionsUpdating ? updateIndicator("suggestions") : suggestions && suggestions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(InlineSearch__Suggestions, {
    query,
    suggestions: suggestions.slice(0, maximumSuggestions2)
  }) : null, topResults = updating ? updateIndicator("top results") : funnelbackResponse && funnelbackResponse.results.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(InlineSearch__TopResults, {
    query,
    results: funnelbackResponse.results
  }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [toggleButton, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "global-header__search__modal",
      ref: (modalRef) => modal = modalRef,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "global-header__search__modal__header",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "header-logo header-logo--city",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "header-logo__responsive",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "https://www.citystgeorges.ac.uk",
              rel: "home",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                className: "logo",
                src: "https://www.citystgeorges.ac.uk/__data/assets/file/0007/860452/city-st-georges-white-responsive-logo.svg",
                width: "180",
                alt: "City St George's, University of London"
              })
            })
          })
        }), modalToggleButton]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "global-header__search__modal__body",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          children: "What are you looking for?"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("form", {
          action: "/search",
          method: "get",
          children: inputField
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "global-header__search__modal__body__results",
          children: [suggestionsList, topResults]
        })]
      })]
    }), veil]
  });
}
InlineSearch.propTypes = {
  config: PropTypes.object,
  element: PropTypes.object
};
document.addEventListener("DOMContentLoaded", () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    const search = document.querySelector(".wrapper--search"), inlineSearch = document.querySelector(".global-header__search");
    inlineSearch && finderConfig(inlineSearch.dataset.config).then((config) => {
      reactDomExports.render(/* @__PURE__ */ jsxRuntimeExports.jsx(InlineSearch, {
        config,
        element: inlineSearch
      }), inlineSearch);
    });
    search && finderConfig(search.dataset.config).then((config) => {
      reactDomExports.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Search, {
        config,
        element: search
      }), search);
    });
  }
});
//# sourceMappingURL=search.js.map
