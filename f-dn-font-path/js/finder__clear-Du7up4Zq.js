import { j as jsxRuntimeExports } from "./util-Z6NqVPyg.js";
import { P as PropTypes } from "./index-C9QTewTB.js";
function Finder__Clear(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
    className: "finder__clear",
    type: "button",
    onClick: () => {
      props.clear(props.resetSort);
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fa-sharp fa-solid fa-xmark icon "
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "finder__clear__text",
      children: "Clear query"
    })]
  });
}
Finder__Clear.propTypes = {
  clear: PropTypes.func,
  resetSort: PropTypes.bool
};
export {
  Finder__Clear as F
};
//# sourceMappingURL=finder__clear-Du7up4Zq.js.map
