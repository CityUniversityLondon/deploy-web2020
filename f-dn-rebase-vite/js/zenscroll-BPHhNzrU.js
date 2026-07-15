import { b as getDefaultExportFromCjs } from "./util-Z6NqVPyg.js";
var zenscroll$1 = { exports: {} };
var zenscroll = zenscroll$1.exports;
var hasRequiredZenscroll;
function requireZenscroll() {
  if (hasRequiredZenscroll) return zenscroll$1.exports;
  hasRequiredZenscroll = 1;
  (function(module) {
    (function(root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        (function install() {
          if (document && document.body) {
            root.zenscroll = factory();
          } else {
            setTimeout(install, 9);
          }
        })();
      }
    })(zenscroll, function() {
      var isNativeSmoothScrollEnabledOn = function(elem) {
        return elem && "getComputedStyle" in window && window.getComputedStyle(elem)["scroll-behavior"] === "smooth";
      };
      if (typeof window === "undefined" || !("document" in window)) {
        return {};
      }
      var makeScroller = function(container, defaultDuration, edgeOffset) {
        defaultDuration = defaultDuration || 999;
        if (!edgeOffset && edgeOffset !== 0) {
          edgeOffset = 9;
        }
        var scrollTimeoutId;
        var setScrollTimeoutId = function(newValue) {
          scrollTimeoutId = newValue;
        };
        var stopScroll = function() {
          clearTimeout(scrollTimeoutId);
          setScrollTimeoutId(0);
        };
        var getTopWithEdgeOffset = function(elem) {
          return Math.max(0, container.getTopOf(elem) - edgeOffset);
        };
        var scrollToY = function(targetY, duration, onDone) {
          stopScroll();
          if (duration === 0 || duration && duration < 0 || isNativeSmoothScrollEnabledOn(container.body)) {
            container.toY(targetY);
            if (onDone) {
              onDone();
            }
          } else {
            var startY = container.getY();
            var distance = Math.max(0, targetY) - startY;
            var startTime = (/* @__PURE__ */ new Date()).getTime();
            duration = duration || Math.min(Math.abs(distance), defaultDuration);
            (function loopScroll() {
              setScrollTimeoutId(setTimeout(function() {
                var p = Math.min(1, ((/* @__PURE__ */ new Date()).getTime() - startTime) / duration);
                var y = Math.max(0, Math.floor(startY + distance * (p < 0.5 ? 2 * p * p : p * (4 - p * 2) - 1)));
                container.toY(y);
                if (p < 1 && container.getHeight() + y < container.body.scrollHeight) {
                  loopScroll();
                } else {
                  setTimeout(stopScroll, 99);
                  if (onDone) {
                    onDone();
                  }
                }
              }, 9));
            })();
          }
        };
        var scrollToElem = function(elem, duration, onDone) {
          scrollToY(getTopWithEdgeOffset(elem), duration, onDone);
        };
        var scrollIntoView = function(elem, duration, onDone) {
          var elemHeight = elem.getBoundingClientRect().height;
          var elemBottom = container.getTopOf(elem) + elemHeight;
          var containerHeight = container.getHeight();
          var y = container.getY();
          var containerBottom = y + containerHeight;
          if (getTopWithEdgeOffset(elem) < y || elemHeight + edgeOffset > containerHeight) {
            scrollToElem(elem, duration, onDone);
          } else if (elemBottom + edgeOffset > containerBottom) {
            scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone);
          } else if (onDone) {
            onDone();
          }
        };
        var scrollToCenterOf = function(elem, duration, offset, onDone) {
          scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight() / 2 + (offset || elem.getBoundingClientRect().height / 2)), duration, onDone);
        };
        var setup = function(newDefaultDuration, newEdgeOffset) {
          if (newDefaultDuration === 0 || newDefaultDuration) {
            defaultDuration = newDefaultDuration;
          }
          if (newEdgeOffset === 0 || newEdgeOffset) {
            edgeOffset = newEdgeOffset;
          }
          return {
            defaultDuration,
            edgeOffset
          };
        };
        return {
          setup,
          to: scrollToElem,
          toY: scrollToY,
          intoView: scrollIntoView,
          center: scrollToCenterOf,
          stop: stopScroll,
          moving: function() {
            return !!scrollTimeoutId;
          },
          getY: container.getY,
          getTopOf: container.getTopOf
        };
      };
      var docElem = document.documentElement;
      var getDocY = function() {
        return window.scrollY || docElem.scrollTop;
      };
      var zenscroll2 = makeScroller({
        body: document.scrollingElement || document.body,
        toY: function(y) {
          window.scrollTo(0, y);
        },
        getY: getDocY,
        getHeight: function() {
          return window.innerHeight || docElem.clientHeight;
        },
        getTopOf: function(elem) {
          return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop;
        }
      });
      zenscroll2.createScroller = function(scrollContainer, defaultDuration, edgeOffset) {
        return makeScroller({
          body: scrollContainer,
          toY: function(y) {
            scrollContainer.scrollTop = y;
          },
          getY: function() {
            return scrollContainer.scrollTop;
          },
          getHeight: function() {
            return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight);
          },
          getTopOf: function(elem) {
            return elem.offsetTop;
          }
        }, defaultDuration, edgeOffset);
      };
      if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {
        var isHistorySupported = "history" in window && "pushState" in history;
        var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history;
        if (isScrollRestorationSupported) {
          history.scrollRestoration = "auto";
        }
        window.addEventListener("load", function() {
          if (isScrollRestorationSupported) {
            setTimeout(function() {
              history.scrollRestoration = "manual";
            }, 9);
            window.addEventListener("popstate", function(event) {
              if (event.state && "zenscrollY" in event.state) {
                zenscroll2.toY(event.state.zenscrollY);
              }
            }, false);
          }
          if (window.location.hash) {
            setTimeout(function() {
              var edgeOffset = zenscroll2.setup().edgeOffset;
              if (edgeOffset) {
                var targetElem = document.getElementById(window.location.href.split("#")[1]);
                if (targetElem) {
                  var targetY = Math.max(0, zenscroll2.getTopOf(targetElem) - edgeOffset);
                  var diff = zenscroll2.getY() - targetY;
                  if (0 <= diff && diff < 9) {
                    window.scrollTo(0, targetY);
                  }
                }
              }
            }, 9);
          }
        }, false);
        var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)");
        window.addEventListener("click", function(event) {
          var anchor = event.target;
          while (anchor && anchor.tagName !== "A") {
            anchor = anchor.parentNode;
          }
          if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }
          if (isScrollRestorationSupported) {
            var historyState = history.state && typeof history.state === "object" ? history.state : {};
            historyState.zenscrollY = zenscroll2.getY();
            try {
              history.replaceState(historyState, "");
            } catch (e) {
            }
          }
          var href = anchor.getAttribute("href") || "";
          if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
            var targetY = 0;
            var targetElem = document.getElementById(href.substring(1));
            if (href !== "#") {
              if (!targetElem) {
                return;
              }
              targetY = zenscroll2.getTopOf(targetElem);
            }
            event.preventDefault();
            var onDone = function() {
              window.location = href;
            };
            var edgeOffset = zenscroll2.setup().edgeOffset;
            if (edgeOffset) {
              targetY = Math.max(0, targetY - edgeOffset);
              if (isHistorySupported) {
                onDone = function() {
                  history.pushState({}, "", href);
                };
              }
            }
            zenscroll2.toY(targetY, null, onDone);
          }
        }, false);
      }
      return zenscroll2;
    });
  })(zenscroll$1);
  return zenscroll$1.exports;
}
var zenscrollExports = requireZenscroll();
const scroll = /* @__PURE__ */ getDefaultExportFromCjs(zenscrollExports);
export {
  scroll as s
};
//# sourceMappingURL=zenscroll-BPHhNzrU.js.map
