import { j as jsxRuntimeExports, r as reactExports, R as React } from "./util-Z6NqVPyg.js";
import { P as PropTypes } from "./index-C9QTewTB.js";
import { h as hyperLink } from "./hyper-link-DjH8jlSg.js";
function Finder__Checkbox(props) {
  const randomNumber = props.mobile ? "mobile" : "desktop", toggleChecked = props.facet.meta in props.query.facets, responseFacetValue = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter((value) => value.data.toLowerCase() === props.facet.checkedValue.toLowerCase());
  if (responseFacetValue && responseFacetValue[0] && responseFacetValue[0].count > 0) {
    const toggleFacet = () => {
      const newQuery = props.query;
      props.dependencies.map((facet) => {
        delete newQuery.facets[facet.meta];
      });
      toggleChecked ? delete newQuery.facets[props.facet.meta] : newQuery.facets[props.facet.meta] = props.facet.checkedValue;
      newQuery.startRank = 1;
      newQuery.misspelling = null;
      newQuery.interacted = true;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "finder__filter finder__checkbox",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("input", {
        type: "checkbox",
        id: `meta_${props.facet.meta}_sand--${randomNumber}`,
        name: `meta_${props.facet.meta}_sand`,
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
        htmlFor: `meta_${props.facet.meta}_sand--${randomNumber}`,
        children: [props.facet.name, !toggleChecked && responseFacetValue && " (" + responseFacetValue[0].count + ")"]
      })]
    });
  } else {
    return null;
  }
}
Finder__Checkbox.propTypes = {
  facet: PropTypes.object,
  query: PropTypes.object,
  responseFacet: PropTypes.arrayOf(PropTypes.object),
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  mobile: PropTypes.bool
};
function useHasMounted() {
  const [hasMounted, setHasMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
function Finder__Tag(props) {
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  const allFacets = props.facet.values.reduce((acc, data) => {
    return [...acc, data];
  }, []);
  const responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce((acc, data) => {
    return [...acc, data.data];
  }, []) : [];
  const hiddenFacets = allFacets.map((facet) => facet.data).filter((facet) => responseFacets.indexOf(facet.toLowerCase()) < 0).length;
  const deleteFacet = () => {
    const newQuery = props.query;
    props.dependencies.map((facet) => {
      delete newQuery.facets[facet.meta];
    });
    delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const labelText = props.query.facets[props.facet.meta] && props.facet.values.length >= hiddenFacets && /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fa-sharp fa-solid fa-xmark icon",
      "aria-hidden": "true"
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      className: "finder__tag__text",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "sr-only",
        children: "Remove filter for "
      }), props.facet.name, ":", " ", props.facet.values.filter((value) => value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase())[0].label]
    })]
  });
  const ssrHiddenField = props.matrixState && props.query.facets[props.facet.meta] ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
    type: "hidden",
    name: `meta_${props.facet.meta}_sand`,
    value: props.query.facets[props.facet.meta]
  }) : null;
  if (props.facet.values.length >= hiddenFacets && props.query.facets[props.facet.meta]) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "finder__filter finder__tag",
      children: [ssrHiddenField, props.matrixState && props.query.facets[props.facet.meta] ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        href: hyperLink(props.query, props.facet),
        children: labelText
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        onClick: () => deleteFacet(),
        type: "button",
        children: labelText
      })]
    });
  } else {
    return null;
  }
}
Finder__Tag.propTypes = {
  facet: PropTypes.object,
  query: PropTypes.object,
  responseFacet: PropTypes.arrayOf(PropTypes.object),
  update: PropTypes.object,
  dependencies: PropTypes.arrayOf(PropTypes.object),
  matrixState: PropTypes.bool
};
function Finder__Reset(props) {
  if (props.matrixState) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: "?",
      className: "finder__reset",
      type: "button",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fa-sharp fa-solid fa-xmark icon"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "finder__reset__text",
        children: "Reset"
      })]
    });
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
      className: "finder__reset",
      type: "button",
      onClick: () => {
        props.clear(props.resetSort);
      },
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fa-sharp fa-solid fa-xmark icon"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "finder__reset__text",
        children: "Reset"
      })]
    });
  }
}
Finder__Reset.propTypes = {
  clear: PropTypes.func,
  resetSort: PropTypes.bool,
  matrixState: PropTypes.bool
};
function Finder__Sort(props) {
  const stringLength = 16, stringOffset = -4, randomNumber = Math.random().toString(stringLength).slice(stringOffset);
  const setSort = (type) => {
    const newQuery = props.query;
    newQuery.sortType = type;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  const validSorts = props.config.sort.filter((sortType) => sortType.type === "" ? props.query.query !== "" || Object.keys(props.query.facets).length > 0 || props.query.sortType === "" ? true : false : true);
  return validSorts.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `finder__select--sort finder__select${props.query.sortType !== props.config.sort[0].type ? " finder__select--selected" : ""}`,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
      className: "finder__select__overline",
      htmlFor: `sort--${randomNumber}`,
      children: "Sort by"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("select", {
      name: "sort",
      id: `sort--${randomNumber}`,
      onChange: (e) => setSort(e.target.value),
      value: props.query.sortType,
      children: validSorts.map((sortType, i) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: sortType.type,
          children: sortType.label
        }, i);
      })
    })]
  }) : null;
}
Finder__Sort.propTypes = {
  config: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.object
};
function replaceHistory(currQuery, currStartRank, currFacets, currParameters, currSort, facetLabels, defaultSort, hasMounted) {
  if (hasMounted) {
    const params = new URLSearchParams(window.location.search);
    currQuery !== "" ? params.set("query", currQuery) : params.delete("query");
    currStartRank !== 1 ? params.set("start_rank", currStartRank) : params.delete("start_rank");
    currSort !== defaultSort && currSort !== "" ? params.set("sort", currSort) : params.delete("sort");
    facetLabels.forEach((facet) => {
      if (currFacets[facet.meta]) {
        params.set(`meta_${facet.meta}_sand`, currFacets[facet.meta]);
      } else {
        params.delete(`meta_${facet.meta}_sand`);
      }
    });
    facetLabels.forEach((facet) => {
      if (currParameters[facet.meta]) {
        params.set(facet.meta, currParameters[facet.meta]);
      } else {
        params.delete(facet.meta);
      }
    });
    const hasParams = params.toString().length ? "?" : "";
    window.history.replaceState({}, "", `${window.location.pathname}${hasParams}${params.toString()}`);
  }
}
function getNonFBParams(facets, params, matrixState) {
  if (matrixState) {
    return facets.map((facet) => {
      const keys = Object.keys(params);
      const param = {};
      if (keys.indexOf(facet.meta) !== -1) {
        param[facet.meta] = params[facet.meta];
      }
      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  } else {
    return facets.filter((facet) => facet.nonFBParam).map((facet) => {
      const param = {};
      if (params.get(facet.meta)) {
        param[facet.meta] = params.get(facet.meta);
      }
      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  }
}
function getFacetParams(facets, params, matrixState) {
  if (matrixState) {
    return facets.map((facet) => {
      const keys = Object.keys(params);
      const param = {};
      if (keys.indexOf(`meta_${facet.meta}_sand`) !== -1) {
        param[facet.meta] = params[`meta_${facet.meta}_sand`];
      }
      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  } else {
    return facets.map((facet) => {
      const param = {};
      if (params.get(`meta_${facet.meta}_sand`)) {
        param[facet.meta] = params.get(`meta_${facet.meta}_sand`);
      }
      return param;
    }).reduce((facetParams, facet) => Object.assign(facetParams, facet));
  }
}
export {
  Finder__Reset as F,
  Finder__Sort as a,
  Finder__Tag as b,
  Finder__Checkbox as c,
  getFacetParams as d,
  getNonFBParams as g,
  replaceHistory as r,
  useHasMounted as u
};
//# sourceMappingURL=url-params-Spk-53Uo.js.map
