/* empty css       */
import { a as reduceMotion, t as toBool, f as removeClass, s as screenWidth, h as appendAll, v as verticallyInWindow, i as createHTMLElement, k as detectIE, l as toArray, m as isMobile, g as gaEvent, n as checkIntersectionObserver, o as isVisible, e as enableBodyScroll, d as disableBodyScroll, p as parametersToObject, q as objectToParameters } from "./util-Z6NqVPyg.js";
import { s as scroll } from "./zenscroll-BPHhNzrU.js";
import { c as createFocusTrap } from "./index-xnwwqUBt.js";
const aria = {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  activeDescendant: "aria-activedescendant",
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  atomic: "aria-atomic",
  /** Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. */
  autoComplete: "aria-autocomplete",
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  busy: "aria-busy",
  /** Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. */
  checked: "aria-checked",
  /** Defines the total number of columns in a table, grid, or treegrid. */
  colCount: "aria-colcount",
  /** Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. */
  colIndex: "aria-colindex",
  /** Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. */
  colSpan: "aria-colspan",
  /** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
  controls: "aria-controls",
  /** Indicates the element that represents the current item within a container or set of related elements. */
  current: "aria-current",
  /** Identifies the element (or elements) that describes the object. */
  describedBy: "aria-describedby",
  /** Identifies the element that provides a detailed, extended description for the object. */
  details: "aria-details",
  /** Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. */
  disabled: "aria-disabled",
  /** [Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target. */
  dropEffect: "aria-dropeffect",
  /** Identifies the element that provides an error message for the object. */
  errorMessage: "aria-errormessage",
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  expanded: "aria-expanded",
  /** Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. */
  flowTo: "aria-flowto",
  /** [Deprecated in ARIA 1.1] Indicates an element's "grabbed" state in a drag-and-drop operation. */
  grabbed: "aria-grabbed",
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  hasPopup: "aria-haspopup",
  /** Indicates whether the element is exposed to an accessibility API. */
  hidden: "aria-hidden",
  /** Indicates the entered value does not conform to the format expected by the application. */
  invalid: "aria-invalid",
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  keyShortcuts: "aria-keyshortcuts",
  /** Defines a string value that labels the current element. */
  label: "aria-label",
  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: "aria-labelledby",
  /** Defines the hierarchical level of an element within a structure. */
  level: "aria-level",
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  live: "aria-live",
  /** Indicates whether an element is modal when displayed. */
  modal: "aria-modal",
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  multiLine: "aria-multiline",
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  multiSelectable: "aria-multiselectable",
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  orientation: "aria-orientation",
  /** Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. */
  owns: "aria-owns",
  /** Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. */
  placeholder: "aria-placeholder",
  /** Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  posInset: "aria-posinset",
  /** Indicates the current "pressed" state of toggle buttons. */
  pressed: "aria-pressed",
  /** Indicates that the element is not editable, but is otherwise operable. */
  readOnly: "aria-readonly",
  /** Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. */
  relevant: "aria-relevant",
  /** Indicates that user input is required on the element before a form may be submitted. */
  required: "aria-required",
  /** Defines a human-readable, author-localized description for the role of an element. */
  roleDescription: "aria-roledescription",
  /** Defines the total number of rows in a table, grid, or treegrid. */
  rowCount: "aria-rowcount",
  /** Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. */
  rowIndex: "aria-rowindex",
  /** Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. */
  rowSpan: "aria-rowspan",
  /** Indicates the current "selected" state of various widgets. */
  selected: "aria-selected",
  /** Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  setSize: "aria-setsize",
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  sort: "aria-sort",
  /** Defines the maximum allowed value for a range widget. */
  valueMax: "aria-valuemax",
  /** Defines the minimum allowed value for a range widget. */
  valueMin: "aria-valuemin",
  /** Defines the current value for a range widget. */
  valueNow: "aria-valuenow",
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  valueText: "aria-valuetext"
};
const aria$1 = Object.freeze(aria);
const className$A = "accordion", headingClassName = className$A + "__heading", headingTextClassName = headingClassName + "__text", headingIconClassName = headingClassName + "__indicator far fa-sharp", bodyClassName$1 = className$A + "__body", oneSecond$7 = 1e3, tenthOfASecond$1 = 100, scrollDuration$6 = reduceMotion() ? 0 : oneSecond$7;
function setSection(heading, open) {
  heading.dataset.open = open;
  heading.firstElementChild.setAttribute(aria$1.expanded, open);
}
function calculateAccordionBodyHeight(heading) {
  const section = heading.nextElementSibling;
  setSection(heading, true);
  section.dataset.closed = "false";
  const height = section.offsetHeight + "px";
  setSection(heading, false);
  section.dataset.closed = "true";
  return height;
}
function setupTransition(element, initialHeight) {
  element.style.height = initialHeight;
  element.dataset.closed = "false";
  return true;
}
function cleanupTransition(section) {
  const open = toBool(section.previousElementSibling.dataset.open);
  section.style.height = null;
  section.dataset.closed = open ? "false" : "true";
}
function buttonClick(button, headings, toggleOpen) {
  const heading = button.parentNode, accordionSection = heading.nextElementSibling;
  accordionSection.addEventListener("transitionend", () => cleanupTransition(accordionSection), {
    capture: true,
    once: true
  });
  if (toBool(button.getAttribute(aria$1.expanded))) {
    setupTransition(accordionSection, accordionSection.offsetHeight + "px");
    setTimeout(() => {
      accordionSection.style.height = "0px";
    }, tenthOfASecond$1);
    setSection(heading, false);
    history.pushState({}, null, location.href.split("#")[0]);
  } else {
    const sectionHeight = calculateAccordionBodyHeight(heading);
    setupTransition(accordionSection, "0px");
    setTimeout(() => {
      accordionSection.style.height = sectionHeight;
    }, tenthOfASecond$1);
    if (toggleOpen) {
      const sections = Array.from(heading.parentNode.parentNode.querySelectorAll(`#${heading.parentElement.id} > .${bodyClassName$1}`));
      headings.forEach((heading2) => setSection(heading2, false));
      sections.filter((section) => section.id !== accordionSection.id).forEach((section) => {
        section.dataset.closed = "true";
      });
    }
    setSection(heading, true);
    if (!(verticallyInWindow(heading) && verticallyInWindow(accordionSection))) {
      scroll.to(heading, scrollDuration$6);
    }
    window.location.hash = event.currentTarget.parentElement.id;
  }
}
function buttonFromHeading(heading) {
  const button = document.createElement("button"), wrapper = document.createElement("div"), textSpan = document.createElement("span"), iconSpan = document.createElement("span");
  textSpan.className = headingTextClassName;
  iconSpan.className = headingIconClassName;
  iconSpan.setAttribute(aria$1.hidden, true);
  button.setAttribute("type", "button");
  textSpan.appendChild(document.createTextNode(heading.textContent));
  appendAll(wrapper, [textSpan, iconSpan]);
  button.appendChild(wrapper);
  return button;
}
function launchAccordion(accordion2) {
  const viewportWidth = window.innerWidth;
  const toggleOpen = toBool(accordion2.dataset.toggleopen), defaultOpen = toBool(accordion2.dataset.defaultopen), allowSingle = toBool(accordion2.dataset.allowsingle), headings = Array.from(accordion2.parentNode.querySelectorAll(`#${accordion2.id} > .${headingClassName}`)), body = Array.from(accordion2.parentNode.querySelectorAll(`#${accordion2.id} > .${bodyClassName$1}`));
  if (!(allowSingle || headings.length > 1)) {
    removeClass(accordion2, className$A);
    return;
  }
  if (accordion2.parentElement.className === "tabs--accordion" && viewportWidth <= screenWidth("tablet")) {
    body.forEach((elem) => {
      const iframe = elem.querySelector("iframe");
      if (iframe) {
        iframe.scrolling = "auto";
        iframe.style.height = "70vh";
      }
    });
  }
  headings.forEach((heading) => {
    const content = heading.nextElementSibling, button = buttonFromHeading(heading);
    content.setAttribute(aria$1.labelledBy, heading.id);
    content.setAttribute("role", "region");
    heading.replaceChild(button, heading.firstChild);
    setSection(heading, false);
    heading.nextElementSibling.dataset.closed = "true";
    button.addEventListener("click", () => buttonClick(button, headings, toggleOpen), true);
  });
  if (defaultOpen && true) {
    setSection(headings[0], true);
    headings[0].nextElementSibling.dataset.closed = "false";
  }
  if (window.location.hash) {
    let urlHash = window.location.hash;
    let heading = accordion2.querySelector("" + urlHash);
    if (heading) {
      window.onload = function() {
        setSection(heading, true);
        heading.nextElementSibling.dataset.closed = "false";
        scroll.to(heading, scrollDuration$6);
      };
    }
    if (accordion2.parentElement.className === "tabs--accordion" && accordion2.parentElement.querySelector("" + urlHash) && viewportWidth <= screenWidth("tablet")) {
      let hashConvert = urlHash.replace("tabs", "accordion").replace("link", "header");
      window.onload = function() {
        heading = accordion2.parentElement.querySelector("" + hashConvert);
        setSection(heading, true);
        heading.nextElementSibling.dataset.closed = "false";
        scroll.to(heading, scrollDuration$6);
      };
    }
  }
}
const accordion = {
  launchFn: launchAccordion,
  launchQuery: `.${className$A}`
};
const className$z = "add-class";
function handleIntersect$1(elements) {
  for (const element of elements) {
    if (element.intersectionRatio > 0) {
      element.target.classList.add("in-view");
      if (element.target.dataset.addClassSibling) {
        let siblings = element.target.parentNode.querySelectorAll("[data-add-class-sibling]");
        for (const sibling of siblings) {
          sibling.classList.add("in-view");
        }
      }
    }
  }
}
function launchAddClass(addClass2) {
  ["load", "scroll"].forEach((event2) => window.addEventListener(event2, new IntersectionObserver(handleIntersect$1).observe(addClass2), false));
}
const addClass = {
  launchFn: launchAddClass,
  launchQuery: `.${className$z}`
};
const className$y = "back-to-top", viewPortHeight = window.innerHeight;
const scrollPos = 2;
function initBacktoTop(backToTop2) {
  const backToTopAnchor = backToTop2.querySelectorAll("a")[0];
  window.addEventListener("load", function() {
    backToTop2.querySelector(".back-to-top__button__arrow").appendChild(createHTMLElement("span", [{
      label: "content",
      val: "top"
    }, {
      label: "class",
      val: "back-to-top__button__arrow__label"
    }]));
    backToTop2.setAttribute("hidden", "true");
    window.addEventListener("scroll", () => {
      updateProgress(backToTopAnchor);
      showAnchor(backToTop2);
    }, false);
  });
}
function showAnchor(backToTop2) {
  const positionOnScreen = window.pageYOffset;
  if (positionOnScreen > viewPortHeight * scrollPos) {
    backToTop2.dataset.docked = "false";
    backToTop2.removeAttribute("hidden");
  } else if (positionOnScreen < 200) {
    backToTop2.setAttribute("hidden", "true");
    backToTop2.dataset.docked = "false";
  }
}
function updateProgress(backToTopAnchor) {
  const progressPath = backToTopAnchor.querySelector("path"), pathLength = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  const scroll2 = window.pageYOffset, height = document.documentElement.scrollHeight - window.innerHeight, progress = pathLength - scroll2 * pathLength / height;
  progressPath.style.strokeDashoffset = progress;
}
const backToTop = {
  launchFn: initBacktoTop,
  launchQuery: `.${className$y}`
};
class Carousel {
  constructor(elem, options) {
    this.elem = elem;
    this.config = options ? options : {};
    try {
      this.ie = detectIE();
    } catch (e) {
      console.error("Error detecting IE in Carousel:", e);
      this.ie = false;
    }
    this.i = 0;
    this.x0 = null;
    this.locked = false;
    this.sliderTranslateCoOr = 0;
  }
  /**
   * Set the number indicators Number
   *
   * @param {number} carousel index - current carousel index
   * @param {HTMLelement} indicator html - pass HTML containing the indicator
   */
  numIndicator(index, e) {
    e.querySelector(".swiper-indicator__active-slider").innerText = index + 1;
  }
  /**
   *
   * Set active slider
   *
   * @param {number} carousel index - current carousel index
   * @param {HTMLelement} sliders html - pass HTML containing the sliders
   */
  activeSlider(index, sliders) {
    let a = toArray(sliders.querySelectorAll(".swiper-slide"));
    a.forEach((e) => {
      e.classList.remove("active");
      e.querySelectorAll("a").forEach((a2) => a2.tabIndex = -1);
      e.setAttribute("aria-hidden", "true");
    });
    a[index].classList.toggle("active");
    a[index].querySelectorAll("a").forEach((a2) => a2.tabIndex = 0);
    a[index].setAttribute("aria-hidden", "false");
  }
  /**
   *
   * Toggle next button
   *
   * @param {number} carousel index - current carousel index
   * @param {number} length of sliders -
   * @param {event} user event - interaction event perform by user
   */
  toogleNextBtn(index, length, e) {
    let nextBtn = this.checkEventType(e);
    if (index + 1 === length) {
      nextBtn.querySelector(".swiper-button-next button").disabled = true;
      nextBtn.querySelector(".swiper-button-prev button").disabled = false;
    } else if (this.i + 1 < length) {
      nextBtn.querySelector(".swiper-button-next button").disabled = false;
      nextBtn.querySelector(".swiper-button-prev button").disabled = false;
    }
    this.activeSlider(index, nextBtn);
    if (!this.config.hidNumInd) {
      this.numIndicator(index, nextBtn);
    }
  }
  /**
   *
   * Toggle previous button
   *
   * @param {number} carousel index - current carousel index
   * @param {number} length of sliders -
   * @param {event} user event - interaction event perform by user
   */
  tooglePrevBtn(index, length, e) {
    let prevBtn = this.checkEventType(e);
    if (index + 1 === 1) {
      prevBtn.querySelector(".swiper-button-prev button").disabled = true;
      prevBtn.querySelector(".swiper-button-next button").disabled = false;
    } else if (this.i + 1 > 1) {
      prevBtn.querySelector(".swiper-button-prev button").disabled = false;
      prevBtn.querySelector(".swiper-button-next button").disabled = false;
    }
    this.activeSlider(index, prevBtn);
    if (!this.config.hidNumInd) {
      this.numIndicator(index, prevBtn);
    }
  }
  /**
   *
   * Move slide either forwards or backwards
   *
   * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
   * @param {boolean} boolean for either next or pervious - boolean to check if next or previous is called
   */
  moveSlide(e, t) {
    const sl = this.checkEventType(e).querySelector(".swiper-wrapper");
    if (sl.classList.contains("smooth")) {
      sl.classList.toggle("smooth");
    }
    if (!this.ie) {
      if (this.config.defaultCarousel && e.target.tagName === "INPUT") {
        sl.style.setProperty("--i", this.i);
      } else {
        t ? sl.style.setProperty("--i", this.i !== 0 ? this.i += 1 : this.i = 1) : sl.style.setProperty("--i", this.i !== 0 ? this.i -= 1 : this.i = 1);
      }
      sl.classList.toggle("smooth");
      t ? this.toogleNextBtn(this.i, sl.children.length, e) : this.tooglePrevBtn(this.i, sl.children.length, e);
    } else {
      let sliderWidthIndex = this.totalSliderWidth(e) / sl.children.length * this.i, sliderWidth = this.totalSliderWidth(e) / sl.children.length;
      t ? this.sliderTranslateCoOr -= sliderWidth : this.sliderTranslateCoOr += sliderWidth;
      sl.classList.toggle("smooth");
      if (this.config.defaultCarousel && e.target.tagName === "INPUT") {
        this.sliderTranslateCoOr = -sliderWidthIndex;
        sl.style.setProperty("transform", "translate(-" + sliderWidthIndex + "px)");
        sl.style.setProperty("--i", this.i);
      } else {
        sl.style.setProperty("transform", "translate(" + this.sliderTranslateCoOr + "px)");
        t ? this.i !== 0 ? this.i += 1 : this.i = 1 : this.i !== 0 ? this.i -= 1 : this.i = 1;
      }
      t ? this.toogleNextBtn(this.i, sl.children.length, e) : this.tooglePrevBtn(this.i, sl.children.length, e);
    }
    if (this.config.defaultCarousel) {
      this.activeThumbnail(this.i, e);
    }
  }
  /**
   *
   * Next slide
   *
   * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
   */
  next(e) {
    e.preventDefault();
    this.moveSlide(e, true);
  }
  /**
   *
   * Prvious slide
   *
   * @param {event} user event - interaction event perform by user from onClick on btn or thumbnail
   */
  previous(e) {
    e.preventDefault();
    this.moveSlide(e, false);
  }
  /**
   *
   * Return touch points of either touch or mouse
   *
   * @param {event} user event - event on silder from either mouse or touch events
   * @returns {event | object} - either return the event back or the object of touch events
   */
  unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }
  /**
   *
   * Start of slider move Set mousedown value to global and toggle smooth class for css transition on mouse down or touch start
   *
   * @param {event} user event - user action either mosuedown or touch start
   */
  lock(e) {
    this.x0 = this.unify(e).clientX;
    e.target.classList.toggle("smooth", !(this.locked = true));
  }
  /**
   *
   * Moving the slider - moving the slider trigger by mouse move or touch move
   *
   * @param {event} user event - mousetouch or touchmove
   */
  drag(e) {
    if (this.i !== e.target.children.length - 1 && this.i !== 0) {
      if (this.locked) {
        e.target.style.setProperty("--tx", `${Math.round(this.unify(e).clientX - this.x0)}px`);
      }
    }
  }
  /**
   *
   * Move slider
   *
   * @param {event} user event - mouseup or touchend
   */
  move(e) {
    if (this.locked) {
      let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx), tx = getComputedStyle(e.target).getPropertyValue("--tx"), p = parseInt(tx.replace(/\D/g, ""));
      if ((this.i > 0 || s < 0) && (this.i < e.target.children.length - 1 || s > 0) && (p > 100 || this.i === 0 || this.i === e.target.children.length - 1)) {
        if (!this.ie) {
          e.target.style.setProperty("--i", this.i -= s);
          e.target.style.setProperty("--tx", "0px");
          e.target.classList.toggle("smooth", !(this.locked = false));
          this.x0 = null;
          if (s === -1) {
            this.toogleNextBtn(this.i, e.target.children.length, e);
          } else {
            this.tooglePrevBtn(this.i, e.target.children.length, e);
          }
        } else {
          this.animateSlider(e, s);
          s === -1 ? this.toogleNextBtn(this.i, e.target.children.length, e) : this.tooglePrevBtn(this.i, e.target.children.length, e);
        }
        if (this.config.defaultCarousel) {
          this.activeThumbnail(this.i, e);
        }
      }
    }
  }
  /**
   *
   * Stop drag when mouse or touch move outside the slider element
   *
   * @param {event} user event - mouseup or touchend
   */
  stopDrag(e) {
    e.target.style.setProperty("--tx", "0px");
    e.stopPropagation();
    e.target.classList.toggle("smooth", !(this.locked = false));
  }
  /**
   *
   * Check event type and passing the correct parent node
   *
   * @param {event} user event - either mouse, touch, click events and thumbnail click events
   * @returns {HTMLSliderElement} -
   */
  checkEventType(e) {
    if (e.target.parentElement.classList.contains("galleria-thumbnail")) {
      return e.target.parentElement.parentElement.parentElement.parentElement;
    } else {
      switch (e.type) {
        case "mouseup":
          return e.target.parentElement.parentElement;
        case "touchend":
          return e.target.parentElement.parentElement;
        default:
          return e.target.parentElement.parentElement.parentElement;
      }
    }
  }
  /**
   *
   * For edge browsers calculate silders total width
   *
   * @param {event} user event -
   * @returns {number} - total width of slider
   */
  //edge fall back cannot use CSS var inside a cal()
  totalSliderWidth(e) {
    const sliders = toArray(this.checkEventType(e).querySelectorAll(".swiper-slide"));
    let totalWidth = 0;
    sliders.forEach((s) => {
      let style = window.getComputedStyle ? getComputedStyle(s, null) : s.currentStyle;
      totalWidth += s.offsetWidth + parseInt(style.marginRight) || 0;
    });
    return totalWidth;
  }
  /**
   *
   * Animate slider by setting translate value
   *
   * @param {event} user event -
   * @param {number}  - number either negative or a positive number
   */
  animateSlider(e, lr) {
    let sliderWidth = this.totalSliderWidth(e) / e.target.children.length;
    lr === -1 ? this.sliderTranslateCoOr -= sliderWidth : this.sliderTranslateCoOr += sliderWidth;
    e.target.style.setProperty("transform", "translate(" + this.sliderTranslateCoOr + "px)");
    e.target.classList.toggle("smooth");
    this.i -= lr;
  }
  /**
   *
   * Adds and setups carousel controls
   * e.g.
   *
   *  <div class="swiper-viewport">
   *      <div class="swiper-container">
   *
   *          <ul class="swiper-wrapper">
   *              <li class="swiper-slide">
   *                  <div class="swiper-slide__image-wrapper">
   *                      <picture>
   *                          <img src="https://web2020.city.ac.uk/documentation/patterns/carousel/_DP57645_1920x1080.jpg" alt="Image">
   *                      </picture>
   *                  </div>
   *                  <div class="swiper-slide__text">
   *                      <p>We are a leading provider of healthcare .....</p>
   *                  </div>
   *              </li>
   *              <li class="swiper-slide">
   *                  <div class="swiper-slide__image-wrapper">
   *                      <img class="lazy" src="https://web2020.city.ac.uk/documentation/patterns/carousel/_DP57645_1920x1080.jpg" alt="Image">
   *                  </div>
   *                  <div class="swiper-slide__text">
   *                      <p>We are a leading provider of healthcare .....</p>
   *                  </div>
   *              </li>
   *          </ul>
   *
   *      </div>
   *  </div>
   *
   *@param {HTMLElement} elem - The element to carousel.
   *@param {Object} object - Object containing setting to setup defualt carousel. if using full width carousel
   * then do not pass in object unless you want to hide the number indicators.
   * To intialise the defualt carousel pass this object
   * {
   *  defaultCarousel: true,
   *  hidNumInd: true,
   *  }
   *
   */
  init() {
    const lazyImages = [].slice.call(this.elem.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
      let lazyImageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, i) {
          if (i === 0) {
            entry.target.querySelector("img").classList.remove("lazy");
          }
          if (entry.isIntersecting) {
            let lazyImage = entry.target.parentNode.parentNode.nextSibling.firstElementChild.querySelector("img");
            let sourceSet = entry.target.parentNode.parentNode.nextSibling.firstElementChild.querySelectorAll("source");
            sourceSet.forEach((item) => {
              item.srcset = item.dataset.srcset;
            });
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(entry.target);
          }
        });
      });
      lazyImages.forEach(function(lazyImage, i, a) {
        if (i !== a.length - 1) {
          lazyImageObserver.observe(lazyImage.parentNode);
        } else {
          lazyImage.classList.remove("lazy");
        }
      });
    } else {
      lazyImages.forEach((e) => {
        if (e.dataset.src) {
          e.src = e.dataset.src;
        }
        e.classList.remove("lazy");
      });
    }
    const _C = this.elem.querySelector(".swiper-wrapper"), numInd = document.createElement("div"), numIndActiveSl = document.createElement("span"), numIndSeparator = document.createElement("span"), numbIndSlLength = document.createElement("span"), buttonsWrap = document.createElement("div"), prevBtnWrap = document.createElement("div"), nextBtnWrap = document.createElement("div"), nextBtn = document.createElement("BUTTON"), prevBtn = document.createElement("BUTTON");
    buttonsWrap.className = "swiper-buttons-wrap";
    prevBtnWrap.className = "swiper-button-prev";
    nextBtnWrap.className = "swiper-button-next";
    nextBtn.name = "nextButton";
    nextBtn.type = "button";
    nextBtn.className = "fas fa-arrow-right swiper-slider-arrow arrow-right--btn-next";
    nextBtn.setAttribute("aria-label", "Next slider");
    nextBtn.addEventListener("click", this.next.bind(this), false);
    prevBtn.name = "prevButton";
    prevBtn.type = "button";
    prevBtn.className = "fas fa-arrow-left swiper-slider-arrow arrow-left--btn-prev";
    prevBtn.setAttribute("aria-label", "Previous slider");
    prevBtn.addEventListener("click", this.previous.bind(this), false);
    prevBtn.disabled = true;
    nextBtnWrap.appendChild(nextBtn);
    prevBtnWrap.appendChild(prevBtn);
    buttonsWrap.appendChild(prevBtnWrap);
    buttonsWrap.appendChild(nextBtnWrap);
    if (!this.config.hidNumInd) {
      numInd.className = "swiper-indicator";
      numIndActiveSl.className = "swiper-indicator__active-slider";
      numbIndSlLength.className = "swiper-indicator__slider-length";
      numIndActiveSl.innerText = this.i + 1;
      numbIndSlLength.innerText = _C.children.length;
      numIndSeparator.innerText = " /";
      numInd.appendChild(numIndActiveSl);
      numInd.appendChild(numIndSeparator);
      numInd.appendChild(numbIndSlLength);
      this.elem.appendChild(numInd);
    }
    this.elem.appendChild(buttonsWrap);
    this.config.sliderLength = _C.children.length;
    if (this.config.defaultCarousel) {
      this.elem.querySelector(".galleria-thumbnails-list").style.setProperty("--thumbnails", this.config.sliderLength);
    }
    _C.style.setProperty("--n", this.config.sliderLength);
    _C.addEventListener("mousedown", this.lock.bind(this), false);
    _C.addEventListener("touchstart", this.lock.bind(this), false);
    _C.addEventListener("mousemove", this.drag.bind(this), false);
    _C.addEventListener("touchmove", this.drag.bind(this), false);
    _C.addEventListener("mouseup", this.move.bind(this), false);
    _C.addEventListener("touchend", this.move.bind(this), false);
    _C.addEventListener("mouseout", this.stopDrag.bind(this), false);
    _C.firstElementChild.classList.toggle("active");
    this.activeSlider(this.i, _C);
  }
}
const className$x = "swiper-container";
function init$2(elem) {
  const c = new Carousel(elem);
  c.init();
}
const carousel = {
  launchFn: init$2,
  launchQuery: `.${className$x}`
};
const className$w = "chart--bar--horizontal";
let collectionMaxValue;
function setCollectionMaxValue(chartCollection) {
  let charts = chartCollection.querySelectorAll(".chart--bar--horizontal__collection"), singleBarTotals = [];
  for (const chart of charts) {
    let singleBarTotal = chart.querySelector("[data-bar-total]");
    singleBarTotal = parseInt(singleBarTotal.dataset.barTotal);
    singleBarTotals.push(singleBarTotal);
  }
  collectionMaxValue = Math.max(...singleBarTotals);
}
function buildBars(chartCollection) {
  let charts = chartCollection.querySelectorAll(".chart--bar--horizontal__collection"), segmentWidths = [], chartCollectionUnits = chartCollection.dataset.units;
  for (const chart of charts) {
    let singleBarTotalEls = chart.querySelector("[data-bar-total]"), singleBarSegmentEls = chart.querySelector("[data-bar-segment]"), singleBarTotal = parseInt(singleBarTotalEls.dataset.barTotal), singleBarSegment = parseInt(singleBarSegmentEls.dataset.barSegment);
    let barWidth = Math.round(singleBarTotal / collectionMaxValue * 100), segmentWidth = Math.round(singleBarSegment / singleBarTotal * 100);
    chart.setAttribute("data-bar-width", `${barWidth}`);
    let relativeWidth = Math.round(segmentWidth * barWidth / 100);
    singleBarSegmentEls.setAttribute("data-relative-width", `${relativeWidth}`);
    let segments = chart.querySelectorAll("[data-bar-segment]");
    for (const segment of segments) {
      let segmentRelativeWidths = parseInt(segment.dataset.relativeWidth);
      segmentWidths.push(segmentRelativeWidths);
    }
    singleBarSegmentEls.setAttribute("data-segment-width", `${segmentWidth}`);
  }
  let largestSegmentWidth = Math.max(...segmentWidths), widestSegment = chartCollection.querySelector(`[data-relative-width="${largestSegmentWidth}"]`), widestSegmentLabel = widestSegment.querySelectorAll("span");
  widestSegmentLabel[0].append(` ${chartCollectionUnits}`);
}
function launchChart(chartCollection) {
  setCollectionMaxValue(chartCollection);
  buildBars(chartCollection);
}
const chartBarHorizontal = {
  launchFn: launchChart,
  launchQuery: `.${className$w}`
};
const className$v = "cms-editor", warningClass = className$v + "-warning", buttonClass = warningClass + "-remover", wrapperClass = "wrapper--" + buttonClass;
function createButton() {
  const button = document.createElement("button");
  button.className = buttonClass;
  button.setAttribute("type", "button");
  button.appendChild(document.createTextNode("Remove CMS editor warnings"));
  return button;
}
function launchRemover(elem) {
  const warnings = Array.from(elem.querySelectorAll(`.${warningClass}`));
  if (warnings.length) {
    const button = createButton(), wrapper = document.createElement("div");
    button.addEventListener("click", () => {
      warnings.forEach((w) => w.parentNode.removeChild(w));
      button.parentNode.removeChild(button);
      removeClass(elem, className$v);
    }, true);
    wrapper.className = wrapperClass;
    wrapper.appendChild(button);
    document.querySelector("body").insertBefore(wrapper, document.querySelector(".global-footer"));
  }
}
const cmsEditorWarning = {
  launchFn: launchRemover,
  launchQuery: `.${className$v}`
};
const className$u = "content-fade-in";
function contentFadeIn(contentFadein) {
  const viewPortHeight2 = window.innerHeight;
  if (!isMobile()) {
    contentFadein.classList.add("content-fade-in--start");
    window.addEventListener("scroll", function() {
      const elemOffset = contentFadein.offsetTop;
      const screenPos = window.pageYOffset;
      if (screenPos > elemOffset - viewPortHeight2 + 10 && !contentFadein.className.includes("content-fade-in--complete")) {
        contentFadein.classList.add("content-fade-in--complete");
      }
    });
  }
}
const contentFadeIn$1 = {
  launchFn: contentFadeIn,
  launchQuery: `.${className$u}`
};
const className$t = "content-separator-container";
function contentSeparator(contentSeparatorContainer) {
  const viewPortHeight2 = window.innerHeight;
  let el = insertElement(contentSeparatorContainer);
  if (!isMobile()) {
    el.classList.add("content-separator--transition-start");
    window.addEventListener("scroll", function() {
      const elemOffset = el.offsetTop;
      const screenPos = window.pageYOffset;
      if (screenPos > elemOffset - viewPortHeight2 + 20 && !el.className.includes("content-separator--transition-complete")) {
        el.classList.add("content-separator--transition-complete");
      }
    });
  }
}
function insertElement(contentSeparatorContainer) {
  let el = document.createElement("div");
  el.setAttribute("class", "content-separator");
  contentSeparatorContainer.prepend(el);
  return el;
}
const contentSeparator$1 = {
  launchFn: contentSeparator,
  launchQuery: `.${className$t}`
};
const className$s = "content-slide-up";
function contentSlideUp(contentSlideup) {
  const viewPortHeight2 = window.innerHeight;
  if (!isMobile()) {
    contentSlideup.classList.add("content-slideup--start");
    window.addEventListener("scroll", function() {
      const screenPos = window.pageYOffset;
      const elemOffsetTop = contentSlideup.offsetTop;
      const parentElemHeight = contentSlideup.parentElement.offsetHeight - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue("padding-bottom")) - parseInt(window.getComputedStyle(contentSlideup.parentElement, null).getPropertyValue("padding-top"));
      if (screenPos > elemOffsetTop - viewPortHeight2 - parentElemHeight * 70 / 100 && !contentSlideup.className.includes("content-slideup--end")) {
        contentSlideup.classList.add("content-slideup--end");
      }
    });
  }
}
const contentSlideUp$1 = {
  launchFn: contentSlideUp,
  launchQuery: `.${className$s}`
};
const className$r = "dropdown-filter";
let dataGroupElement = "";
let showAll = "";
function prepareDropdown(element) {
  const listItems = element.querySelectorAll("ul.data-group > li"), firstItemVisible = element.dataset.firstItemShow;
  showAll = element.dataset.displayAll;
  hideListItems(listItems, firstItemVisible, showAll);
  insertSelect(listItems, element, firstItemVisible);
  const select = element.querySelector(".dropdown-filter__select");
  select.addEventListener("change", selectChange);
}
function hideListItems(items, firstItemVisible, showAll2) {
  if (firstItemVisible === "true" && showAll2 === "false") {
    let itemsArray = Array.from(items);
    itemsArray[0].setAttribute("data-hidden", "false");
    for (var i = 1; i < itemsArray.length; i++) {
      itemsArray[i].setAttribute("data-hidden", "true");
    }
  } else if (firstItemVisible === "false" && showAll2 === "false") {
    items.forEach(function(item) {
      item.setAttribute("data-hidden", "true");
    });
  } else if (showAll2 === "true") {
    items.forEach(function(item) {
      item.setAttribute("data-hidden", "false");
    });
  }
  firstItemVisible = "false";
}
function insertSelect(items, parentElement, firstItemVisible) {
  dataGroupElement = parentElement.querySelector("ul.data-group");
  const selectBox = document.createElement("select"), selectWrapper = parentElement.querySelector(".wrapper--dropdown-filter__select"), labelFor = parentElement.dataset.labelFor, labelValue = parentElement.dataset.labelValue, labelEl = document.createElement("label");
  labelEl.textContent = labelValue;
  labelEl.setAttribute("for", labelFor);
  parentElement.dataset.labelShow === "false" ? labelEl.className = "sr-only" : null;
  selectBox.className = "dropdown-filter__select";
  selectBox.setAttribute("id", labelFor);
  selectBox.setAttribute("name", labelFor);
  selectWrapper.append(labelEl, selectBox);
  if (parentElement.dataset.displayAll === "false") {
    let noSelection = document.createElement("option");
    noSelection.text = parentElement.getAttribute("data-text");
    noSelection.setAttribute("value", "no-selection");
    selectBox.appendChild(noSelection);
  }
  let defaultItemOverride, lastItemOverride;
  if (parentElement.dataset.alphabetical === "true") {
    items = Array.from(items).sort((a, b) => a.dataset.value < b.dataset.value ? -1 : a.dataset.value > b.dataset.value ? 1 : 0);
  } else {
    items = [...items];
  }
  for (const item of items) {
    dataGroupElement.append(item);
  }
  for (const item of items) {
    item.dataset.first === "true" ? defaultItemOverride = item : null;
    item.dataset.last === "true" ? lastItemOverride = item : null;
  }
  const itemsLength = items.length;
  if (parentElement.dataset.displayAll === "true") {
    let showAllOption = document.createElement("li");
    showAllOption.dataset.name = `All ${parentElement.dataset.units}`;
    showAllOption.dataset.value = "show-all";
    items.splice(0, 0, showAllOption);
  }
  let defaultItemOverridePosition = items.indexOf(defaultItemOverride);
  if (lastItemOverride) {
    let lastPositionOriginal = items.indexOf(lastItemOverride);
    items.splice(lastPositionOriginal, 1);
    items.splice(itemsLength, 0, lastItemOverride);
  }
  Array.from(items).forEach((item) => {
    const dataValue = item.dataset.value, dataName = item.dataset.name, option = document.createElement("option");
    option.value = dataValue;
    option.text = dataName;
    selectBox.appendChild(option);
  });
  if (firstItemVisible === "true" && showAll === "false") {
    const options = parentElement.querySelectorAll("option");
    if (defaultItemOverride) {
      if (lastItemOverride) {
        if (parentElement.dataset.alphabetical === "true") {
          options[defaultItemOverridePosition].setAttribute("selected", "selected");
        } else {
          options[defaultItemOverridePosition + 1].setAttribute("selected", "selected");
        }
      } else {
        options[defaultItemOverridePosition + 1].setAttribute("selected", "selected");
      }
    }
  }
}
function selectChange(e) {
  const dropdownFilter2 = e.target.closest(".dropdown-filter"), dataGroup = dropdownFilter2.querySelector(".data-group");
  const listItems = dataGroup.querySelectorAll("ul.data-group > li");
  for (const listItem of listItems) {
    listItem.removeAttribute("data-hidden");
  }
  showAll = "false";
  hideListItems(listItems, showAll);
  const targetListItem = dataGroup.querySelector("li.data-group__item[data-value=" + e.target.value + "]");
  const otherListItems = dataGroup.querySelectorAll("li.data-group__item:not([data-value=" + e.target.value + "])");
  if (e.target.value !== "show-all" && e.srcElement.selectedIndex !== 0) {
    targetListItem.removeAttribute("data-hidden");
    for (const o of otherListItems) {
      o.setAttribute("data-hidden", "true");
    }
  } else if (e.target.value !== "show-all" && e.srcElement.selectedIndex === 0) {
    for (const o of otherListItems) {
      o.setAttribute("data-hidden", "true");
    }
    return;
  }
}
const dropdownFilter = {
  launchFn: prepareDropdown,
  launchQuery: `.${className$r}`
};
const oneSecond$6 = 1e3, tenthOfASecond = 100, scrollDuration$5 = reduceMotion() ? 0 : oneSecond$6;
const className$q = "wrapper--event__info--formassembly";
function calculateFormBodyHeight(form) {
  form.dataset.open = true;
  const height = form.offsetHeight + "px";
  form.dataset.open = false;
  return height;
}
function toggleForm(form, button, buttonText, closeButtonText) {
  const opening = !toBool(form.dataset.open), doneTarget = opening ? form.querySelector(".event__formassembly__form__heading") : button;
  if (opening) {
    const formHeight = calculateFormBodyHeight(form);
    form.addEventListener("transitionend", function openForm() {
      form.removeEventListener("transitionend", openForm, true);
      form.style = null;
      if (!verticallyInWindow(doneTarget)) {
        scroll.to(doneTarget, scrollDuration$5);
      }
    }, true);
    form.style.height = "0px";
    form.dataset.open = true;
    setTimeout(() => {
      form.style.height = formHeight;
    }, tenthOfASecond);
    button.querySelector("span").innerText = closeButtonText;
    button.setAttribute(aria$1.expanded, true);
    form.focus();
  } else {
    form.style.height = form.offsetHeight + "px";
    form.addEventListener("transitionend", function closeForm() {
      form.removeEventListener("transitionend", closeForm, true);
      form.style = null;
      form.dataset.open = false;
      if (!verticallyInWindow(doneTarget)) {
        scroll.to(doneTarget, scrollDuration$5);
      }
    }, true);
    setTimeout(() => {
      form.style.height = "0px";
    }, tenthOfASecond);
    button.querySelector("span").innerText = buttonText;
    button.setAttribute(aria$1.expanded, false);
    button.focus();
  }
}
function launchFormAssemblyForm(eventInfo) {
  const link = eventInfo.querySelector(".event__formassembly__button"), form = eventInfo.querySelector(".event__formassembly__form"), formActual = eventInfo.querySelector(".event__formassembly__form > .formassembly-form"), buttonText = link.innerText, button = document.createElement("button"), buttonSpan = document.createElement("span"), closeButtonText = "Close registration form", closeButton = document.createElement("button"), closeButtonSpan = document.createElement("span"), closeButtonIcon = document.createElement("span"), closeButtonEnd = document.createElement("button"), closeButtonEndSpan = document.createElement("span"), closeButtonEndIcon = document.createElement("span"), heading = eventInfo.querySelector(".event__formassembly__form__heading"), wrapperHeading = document.createElement("div");
  buttonSpan.appendChild(document.createTextNode(buttonText));
  button.setAttribute("type", "button");
  button.className = "event__formassembly__button";
  button.appendChild(buttonSpan);
  button.setAttribute(aria$1.expanded, false);
  button.setAttribute(aria$1.owns, "event__formassembly__form");
  closeButtonSpan.appendChild(document.createTextNode(closeButtonText));
  closeButtonSpan.className = "event__formassembly__form__close-button__text";
  closeButtonIcon.className = "fa-sharp fa-solid fa-xmark icon";
  closeButton.setAttribute("type", "button");
  closeButton.className = "event__formassembly__form__close-button";
  closeButton.appendChild(closeButtonIcon);
  closeButton.appendChild(closeButtonSpan);
  closeButtonEndSpan.appendChild(document.createTextNode(closeButtonText));
  closeButtonEndSpan.className = "event__formassembly__form__close-button__text";
  closeButtonEndIcon.className = "fa-sharp fa-solid fa-xmark icon";
  closeButtonEnd.setAttribute("type", "button");
  closeButtonEnd.className = "event__formassembly__form__close-button";
  closeButtonEnd.appendChild(closeButtonEndIcon);
  closeButtonEnd.appendChild(closeButtonEndSpan);
  button.addEventListener("click", () => toggleForm(form, button, buttonText, closeButtonText), true);
  closeButton.addEventListener("click", () => toggleForm(form, button, buttonText, closeButtonText), true);
  closeButtonEnd.addEventListener("click", () => toggleForm(form, button, buttonText, closeButtonText), true);
  form.setAttribute("tabindex", -1);
  form.dataset.open = false;
  wrapperHeading.className = "wrapper--event__formassembly__form__heading";
  wrapperHeading.appendChild(heading);
  wrapperHeading.appendChild(closeButton);
  form.insertBefore(wrapperHeading, formActual);
  form.appendChild(closeButtonEnd);
  link.parentNode.replaceChild(button, link);
}
const eventForm = {
  launchFn: launchFormAssemblyForm,
  launchQuery: `.${className$q}`
};
const className$p = "feedback", feedbackPage = "/feedback";
function sendFeedback(action, value) {
  gaEvent("pageFeedback", "Page feedback", action, window.location.toString(), value, true);
}
function handleNo(container) {
  sendFeedback("Not useful", 0);
  const message = document.createElement("p"), messagePrefix = document.createTextNode("We’re sorry to hear that, please consider "), linkText = document.createTextNode("sending us some feedback"), link = document.createElement("a"), messageSuffix = document.createTextNode(" so we can make it better.");
  container.childNodes.forEach((elem) => container.removeChild(elem));
  link.href = feedbackPage;
  link.appendChild(linkText);
  appendAll(message, [messagePrefix, link, messageSuffix]);
  message.setAttribute(aria$1.live, "polite");
  container.appendChild(message);
}
function handleYes(container) {
  sendFeedback("Useful", 1);
  const message = document.createElement("p"), messageText = document.createTextNode("Thanks! Your feedback will be used to improve our website.");
  container.childNodes.forEach((elem) => container.removeChild(elem));
  message.appendChild(messageText);
  message.setAttribute(aria$1.live, "polite");
  container.appendChild(message);
}
function launchFeedback(elem) {
  const questionText = document.createTextNode("Is this page useful?"), directFeedbackWrapper = document.createElement("div"), directFeedbackForm = document.createElement("form"), directFeedbackFieldset = document.createElement("fieldset"), questionLegend = document.createElement("legend"), buttonWrapper = document.createElement("div"), yesButton = document.createElement("button"), noButton = document.createElement("button");
  yesButton.setAttribute("type", "button");
  yesButton.appendChild(document.createTextNode("Yes"));
  yesButton.addEventListener("click", () => handleYes(directFeedbackWrapper), true);
  noButton.setAttribute("type", "button");
  noButton.appendChild(document.createTextNode("No"));
  noButton.addEventListener("click", () => handleNo(directFeedbackWrapper), true);
  buttonWrapper.className = "feedback__direct__buttons";
  questionLegend.appendChild(questionText);
  appendAll(buttonWrapper, [yesButton, noButton]);
  appendAll(directFeedbackFieldset, [questionLegend, buttonWrapper]);
  directFeedbackForm.appendChild(directFeedbackFieldset);
  directFeedbackWrapper.appendChild(directFeedbackForm);
  directFeedbackWrapper.className = className$p + "__direct";
  elem.insertBefore(directFeedbackWrapper, elem.firstElementChild);
}
const feedback = {
  launchFn: launchFeedback,
  launchQuery: `.${className$p}`
};
const className$o = "campus-map";
function createMap$1(mapContainer) {
  let dataSrc2 = "/feed/locations/city-buildings/_nocache", latlng = new google.maps.LatLng("51.527761", "-0.103283"), mapOptions = {
    zoom: 17,
    key: "AIzaSyBvg6r1x2ZRKPAsceVaKPlg6tO20QiBDpo",
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true
  }, map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions), searchBox = document.getElementById("map-search"), infoWindow = new google.maps.InfoWindow({
    maxWidth: 400
  }), cityLayers = {
    // array to hold each google marker object - for each University location
    bigMarkersArray: [],
    //arrray to hold building google marker objects - they never got removed from map
    bigBuildingsArray: [],
    buildingsObj: {},
    buildings: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    libraries: {
      toggler: document.getElementById("toggle-libraries"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    accommodation: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    lectureTheatres: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    studentCentre: {
      toggler: document.getElementById("toggle-studentCentre"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    sports: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    computerLabs: {
      toggler: document.getElementById("toggle-computerLabs"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    }
  };
  function clearOverlays(markersArray) {
    let i;
    if (markersArray) {
      for (i in markersArray) {
        if (Object.prototype.hasOwnProperty.call(markersArray, i) && typeof markersArray[i] !== "function") {
          markersArray[i].setMap(null);
        }
      }
    }
  }
  let marker;
  function hashChange(id) {
    if (id === "" || id === "498711") {
      id = "498711";
    }
    if (id !== "498711") {
      initialMapOverlay.setMap(null);
    }
    for (let building in cityLayers.buildingsObj) {
      if (id === building) {
        let found = cityLayers.buildingsObj[building];
        if (marker) {
          marker.setMap(null);
        }
        marker = found;
        clearOverlays(cityLayers.bigMarkersArray);
        marker.setVisible(true);
        infoWindow.setContent(marker.infoHtml);
        infoWindow.open(map, marker);
        map.panTo(marker.position);
        marker.setMap(map);
      }
    }
  }
  function updateHash(caller) {
    let callerId = "";
    if (!caller) {
      return;
    }
    if (typeof caller === "string") {
      callerId = caller;
    } else if (Object.prototype.hasOwnProperty.call(caller, "id")) {
      callerId = caller.id;
    } else {
      callerId = 0;
    }
    location.hash = callerId;
    hashChange(callerId);
  }
  function createMarker(markerConfig) {
    let listId = document.getElementById(markerConfig.category), listItem, marker2, anchor, html = "";
    if (markerConfig.urlCustom) {
      html = '<div id="info-window" style="min-height: 60px;"><h3><a href="' + markerConfig.urlCustom + '">' + markerConfig.name + "</a></h3>";
    } else {
      if (markerConfig.linkHref.length !== 0) {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + "</h3>";
      } else {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + "</h3>";
      }
    }
    function minutesFormat() {
      if (parseInt(markerConfig.walkingDistance) > 1) {
        return " minutes";
      } else {
        return " minute";
      }
    }
    markerConfig.buildingPrefix ? html += "<p>Rooms beginning: " + markerConfig.buildingPrefix + "</p>" : null;
    html += "<p>";
    markerConfig.roomNumber ? html += "Room " + markerConfig.roomNumber + "</br>" : null;
    markerConfig.floor ? html += "Floor " + markerConfig.floor + "</br>" : null;
    markerConfig.building ? html += markerConfig.building + "</br>" : null;
    markerConfig.buildingAdditionalInfo ? html += markerConfig.buildingAdditionalInfo + "</br>" : null;
    markerConfig.street1 ? html += markerConfig.street1 + "</br>" : null;
    markerConfig.street2 ? html += markerConfig.street2 + "</br>" : null;
    markerConfig.city ? html += markerConfig.city + "</br>" : null;
    markerConfig.postcode ? html += markerConfig.postcode + "</br>" : null;
    html += "</p>";
    html += "<p>";
    markerConfig.campus ? html += markerConfig.campus + "</br>" : null;
    html += "</p>";
    markerConfig.supports ? html += "<p>" + markerConfig.supports + "</p>" : null;
    markerConfig.walkingDistance ? html += "<p>Walking distance to campus: </br>" + markerConfig.walkingDistance + minutesFormat(markerConfig.walkingDistance) + "</p>" : null;
    markerConfig.entrance ? html += "<p>" + markerConfig.entrance + "</p>" : null;
    markerConfig.accessibility ? html += "<p>" + markerConfig.accessibility + "</p>" : null;
    if (markerConfig.openingHours.length > 0) {
      let daySlot = [];
      let timeSlot = [];
      markerConfig.openingHours.forEach(function(item) {
        let string = item.trim();
        let day = string.slice(0, "3");
        let hours = string.slice("3");
        let match;
        for (let i = 0; i < timeSlot.length; i++) {
          if (hours === timeSlot[i]) {
            daySlot[i] += ", " + day;
            match = 1;
          }
        }
        if (match !== 1) {
          daySlot.push(day);
          timeSlot.push(hours);
        }
      });
      html += "<p>Opening hours: </br>";
      for (let i = 0; i < timeSlot.length; i++) {
        html += timeSlot[i] + " (" + daySlot[i] + ")</br>";
      }
      html += "</p>";
    }
    html += "<p>";
    markerConfig.tel ? html += "Tel: " + markerConfig.tel + "</br>" : null;
    markerConfig.email ? html += "Email: " + markerConfig.email + "</br>" : null;
    html += "</p>";
    marker2 = new google.maps.Marker({
      map: markerConfig.map,
      position: markerConfig.point,
      icon: markerConfig.icon,
      animation: google.maps.Animation.DROP
    });
    marker2.set("id", markerConfig.id);
    marker2.set("infoHtml", html);
    google.maps.event.addListener(marker2, "click", function() {
      return updateHash(marker2);
    });
    listItem = createHTMLElement("li", [{
      label: "id",
      val: "building-" + markerConfig.id
    }, {
      label: "class",
      val: "building"
    }]);
    anchor = createHTMLElement("a", [{
      label: "html",
      val: "<span>" + markerConfig.name + "</span>"
    }, {
      label: "href",
      val: "#"
    }]);
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      updateHash(e.target.parentElement.parentElement.getAttribute("id").replace("building-", ""));
      toggleLocationPanel("true");
      closeAccordions();
      clearSearchString();
      return false;
    });
    listId ? listId.appendChild(listItem).appendChild(anchor) : null;
    return marker2;
  }
  function parseXml(xml) {
    let items = xml.getElementsByTagName("item");
    let index = 0, $self, marker2, markerConfig = {}, searchTags = [], searchIds = {};
    Array.from(items).forEach(function(item) {
      $self = item;
      markerConfig.openingHours = [];
      markerConfig.index = index + 1;
      markerConfig.id = $self.getElementsByTagName("guid")[0].textContent;
      markerConfig.name = $self.getElementsByTagName("title")[0].textContent;
      markerConfig.linkHref = $self.getElementsByTagName("link")[0].textContent;
      markerConfig.urlCustom = $self.getElementsByTagName("urlCustom")[0].textContent;
      markerConfig.icon = "/?a=537733";
      markerConfig.category = $self.getElementsByTagName("category")[0].textContent;
      markerConfig.buildingPrefix = $self.getElementsByTagName("roomPrefix")[0].textContent;
      markerConfig.roomNumber = $self.getElementsByTagName("roomNumber")[0].textContent;
      markerConfig.entrance = $self.getElementsByTagName("entrance")[0].textContent;
      markerConfig.floor = $self.getElementsByTagName("floor")[0].textContent;
      markerConfig.building = $self.getElementsByTagName("building")[0].textContent;
      markerConfig.buildingAdditionalInfo = $self.getElementsByTagName("buildingAdditionalInfo")[0].textContent;
      markerConfig.campus = $self.getElementsByTagName("campus")[0].textContent;
      markerConfig.street1 = $self.getElementsByTagName("street1")[0].textContent;
      markerConfig.street2 = $self.getElementsByTagName("street2")[0].textContent;
      markerConfig.city = $self.getElementsByTagName("city")[0].textContent;
      markerConfig.postcode = $self.getElementsByTagName("postcode")[0].textContent;
      markerConfig.country = $self.getElementsByTagName("country")[0].textContent;
      markerConfig.tel = $self.getElementsByTagName("tel")[0].textContent;
      markerConfig.email = $self.getElementsByTagName("email")[0].textContent;
      markerConfig.accessibility = $self.getElementsByTagName("accessibility")[0].textContent;
      markerConfig.walkingDistance = $self.getElementsByTagName("walkingDistance")[0].textContent;
      markerConfig.supports = $self.getElementsByTagName("supports")[0].textContent;
      markerConfig.geoLat = $self.getElementsByTagName("geoLat")[0].textContent;
      markerConfig.geoLong = $self.getElementsByTagName("geoLong")[0].textContent;
      $self.getElementsByTagName("ohMon")[0].textContent ? markerConfig.openingHours.push("Mon" + $self.getElementsByTagName("ohMon")[0].textContent) : null;
      $self.getElementsByTagName("ohTue")[0].textContent ? markerConfig.openingHours.push("Tue" + $self.getElementsByTagName("ohTue")[0].textContent) : null;
      $self.getElementsByTagName("ohWed")[0].textContent ? markerConfig.openingHours.push("Wed" + $self.getElementsByTagName("ohWed")[0].textContent) : null;
      $self.getElementsByTagName("ohThu")[0].textContent ? markerConfig.openingHours.push("Thu" + $self.getElementsByTagName("ohThu")[0].textContent) : null;
      $self.getElementsByTagName("ohFri")[0].textContent ? markerConfig.openingHours.push("Fri" + $self.getElementsByTagName("ohFri")[0].textContent) : null;
      $self.getElementsByTagName("ohSat")[0].textContent ? markerConfig.openingHours.push("Sat" + $self.getElementsByTagName("ohSat")[0].textContent) : null;
      $self.getElementsByTagName("ohSun")[0].textContent ? markerConfig.openingHours.push("Sun" + $self.getElementsByTagName("ohSun")[0].textContent) : null;
      markerConfig.point = new google.maps.LatLng(parseFloat(markerConfig.geoLat), parseFloat(markerConfig.geoLong));
      marker2 = createMarker(markerConfig);
      if (markerConfig.category !== "buildings") {
        cityLayers.bigMarkersArray.push(marker2);
      } else {
        cityLayers.bigBuildingsArray.push(marker2);
      }
      cityLayers.buildingsObj[marker2.id] = marker2;
      searchTags.push(createHTMLElement("a", [{
        label: "content",
        val: markerConfig.name
      }, {
        label: "data-id",
        val: markerConfig.id
      }]));
      searchIds[markerConfig.name] = markerConfig.id;
      if (cityLayers[markerConfig.category]) {
        cityLayers[markerConfig.category].markersArray.push(marker2);
      }
    });
    function searchBoxInit() {
      searchBox.addEventListener("keyup", function(e) {
        if (e.keyCode === parseInt("40")) {
          searchItemFocus(e.keyCode);
        } else {
          clearsSearchSuggestions();
          searchSuggestions();
        }
      });
      function searchSuggestions() {
        clearsSearchSuggestions();
        let searchString = searchBox.value;
        if (searchString.length > 0) {
          let createListWrapper = createHTMLElement("div", [{
            label: "class",
            val: "query__suggestions__wrapper"
          }]);
          let createList = createHTMLElement("ul", [{
            label: "id",
            val: "query__suggestions"
          }, {
            label: "data-show",
            val: false
          }, {
            label: "data-focus",
            val: -1
          }]);
          searchBox.parentElement.appendChild(createListWrapper).appendChild(createList);
          let list = document.getElementById("query__suggestions");
          let clearSearchButton = createHTMLElement("button", [{
            label: "class",
            val: "campus-map__controls__search__clear"
          }, {
            label: "html",
            val: '<span class="fa-sharp fa-solid fa-xmark icon "></span><span class="campus-map__controls__search__clear__text">Clear query</span>'
          }]);
          clearSearchButton.addEventListener("click", function() {
            clearSearchString();
          });
          searchBox.parentElement.appendChild(clearSearchButton);
          let maxNumberSuggestions = 10;
          let counter = 0;
          Array.from(searchTags).forEach(function(tag) {
            if (tag.textContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
              if (counter < maxNumberSuggestions) {
                let item = createHTMLElement("li", []);
                let anchor = createHTMLElement("a", [{
                  label: "tabindex",
                  val: -1
                }, {
                  label: "data-id",
                  val: tag.getAttribute("data-id")
                }, {
                  label: "content",
                  val: tag.textContent
                }]);
                anchor.addEventListener("click", function() {
                  searchQueryIdFind(tag.getAttribute("data-id"), tag.textContent);
                  searchBox.value = tag.textContent;
                  updateHash(tag.getAttribute("data-id"));
                });
                anchor.addEventListener("keyup", function(e) {
                  e.preventDefault();
                  searchItemFocus(e.keyCode);
                });
                list.appendChild(item).appendChild(anchor);
                counter += 1;
              }
              list.setAttribute("data-show", true);
            }
          });
        } else {
          clearSearchString();
        }
      }
      searchBox.addEventListener("focusin", function() {
        toggleLocationPanel("true");
        closeAccordions();
        searchSuggestions();
      });
      function searchQueryIdFind(id) {
        document.getElementById("query__suggestions").setAttribute("data-show", false);
        hashChange(id);
      }
      function searchItemFocus(keyCode) {
        let collectionNum = document.getElementById("query__suggestions").querySelectorAll("li").length;
        if (keyCode === parseInt("40")) {
          let focusState = parseInt(document.getElementById("query__suggestions").getAttribute("data-focus"));
          if (focusState + 1 !== collectionNum) {
            document.getElementById("query__suggestions").querySelectorAll("a")[focusState + 1].focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", focusState + 1);
          }
        } else if (keyCode === parseInt("38")) {
          let focusState = parseInt(document.getElementById("query__suggestions").getAttribute("data-focus"));
          if (focusState - 1 !== -1) {
            document.getElementById("query__suggestions").querySelectorAll("a")[focusState - 1].focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", focusState - 1);
          } else {
            searchBox.focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", -1);
          }
        }
      }
    }
    searchBoxInit();
    google.maps.event.addListener(infoWindow, "closeclick", function() {
      updateHash(infoWindow);
    });
    mapContainer.classList.remove("loading");
    Array.from(mapContainer.querySelectorAll(".loading-fa-icon")).forEach(function(i) {
      i.remove();
    });
    window.addEventListener("hashchange", hashChange);
    hashChange(location.hash.replace("#", ""));
  }
  function loadXml() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === parseInt("4") && xhttp.status === parseInt("200")) {
        parseXml(xhttp.responseXML);
      }
    };
    xhttp.open("GET", dataSrc2, true);
    xhttp.send(null);
  }
  function init2() {
    mapContainer.classList.add("loading");
    mapContainer.appendChild(createHTMLElement("i", [{
      label: "class",
      val: "fa fa-refresh fa-spin loading-fa-icon"
    }]));
    loadXml();
  }
  function toggleLocationPanel(status) {
    if (status === "false") {
      mapContainer.querySelector(".campus-map__controls__locations__heading").setAttribute("data-show", true);
      mapContainer.querySelector(".campus-map__controls__locations").setAttribute("data-show", true);
      mapContainer.querySelector(".campus-map__controls__locations").focus();
      if (document.getElementById("query__suggestions")) {
        document.getElementById("query__suggestions").setAttribute("data-show", false);
      }
    } else {
      mapContainer.querySelector(".campus-map__controls__locations__heading").setAttribute("data-show", false);
      mapContainer.querySelector(".campus-map__controls__locations").setAttribute("data-show", false);
    }
  }
  mapContainer.querySelector(".campus-map__controls__locations__heading").addEventListener("click", function() {
    let status = this.getAttribute("data-show");
    toggleLocationPanel(status);
  });
  function closeAccordions(exception) {
    Array.from(mapContainer.getElementsByClassName("accordion--location")).forEach((el) => {
      if (el.getAttribute("id") !== exception) {
        el.querySelector(".accordion__heading").setAttribute("data-open", "false");
        el.querySelector(".accordion__heading button").setAttribute("aria-expanded", "false");
        el.querySelector(".accordion__body").setAttribute("data-closed", "true");
      }
    });
  }
  Array.from(mapContainer.getElementsByClassName("accordion--location")).forEach((el) => {
    el.addEventListener("click", function() {
      closeAccordions(el.getAttribute("id"));
    });
  });
  document.addEventListener("click", function(evt) {
    var mapControls = document.getElementById("map-controls"), targetElement = evt.target;
    do {
      if (targetElement === mapControls) {
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);
    toggleLocationPanel("true");
    closeAccordions();
    clearsSearchSuggestions();
  });
  function clearSearchString() {
    searchBox.value = "";
    let clearSearch = document.querySelector(".campus-map__controls__search__clear");
    clearSearch ? clearSearch.remove() : null;
  }
  function clearsSearchSuggestions() {
    let listWrapper = searchBox.parentElement.querySelector(".query__suggestions__wrapper");
    let clearSearchButton = document.querySelector(".campus-map__controls__search__clear");
    listWrapper ? searchBox.parentElement.querySelector(".query__suggestions__wrapper").remove() : null;
    clearSearchButton ? clearSearchButton.remove() : null;
  }
  var cityCampus = [{
    lat: 51.527261,
    lng: -0.107649
  }, {
    lat: 51.527333,
    lng: -0.106411
  }, {
    lat: 51.527737,
    lng: -0.104968
  }, {
    lat: 51.527824,
    lng: -0.104421
  }, {
    lat: 51.528418,
    lng: -0.101159
  }, {
    lat: 51.52784,
    lng: -0.100794
  }, {
    lat: 51.52784,
    lng: -0.100794
  }, {
    lat: 51.52759,
    lng: -0.101888
  }, {
    lat: 51.52768,
    lng: -0.102484
  }, {
    lat: 51.527624,
    lng: -0.102693
  }, {
    lat: 51.5272,
    lng: -0.103048
  }, {
    lat: 51.526903,
    lng: -0.104104
  }, {
    lat: 51.52771,
    lng: -0.104635
  }, {
    lat: 51.526669,
    lng: -0.105284
  }, {
    lat: 51.52725,
    lng: -0.106421
  }, {
    lat: 51.526689,
    lng: -0.107671
  }];
  var initialMapOverlay = new google.maps.Polygon({
    map,
    paths: cityCampus,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    geodesic: true
  });
  init2();
}
const findUs = {
  launchFn: createMap$1,
  launchQuery: `.${className$o}`
};
const className$n = "campus-map-v25";
let lat, lng;
let campusId;
let campusOverlay;
let campusZoom;
let dataSrc;
let campusLocConfig = {
  498711: {
    // clerkenwell
    lat: "51.527761",
    lng: "-0.103283",
    campusZoom: 17,
    dataSrc: "/feed/locations/campus-map-locations-v25-clerkenwell/_nocache",
    overlay: [{
      lat: 51.527261,
      lng: -0.107649
    }, {
      lat: 51.527333,
      lng: -0.106411
    }, {
      lat: 51.527737,
      lng: -0.104968
    }, {
      lat: 51.527824,
      lng: -0.104421
    }, {
      lat: 51.528418,
      lng: -0.101159
    }, {
      lat: 51.52784,
      lng: -0.100794
    }, {
      lat: 51.52784,
      lng: -0.100794
    }, {
      lat: 51.52759,
      lng: -0.101888
    }, {
      lat: 51.52768,
      lng: -0.102484
    }, {
      lat: 51.527624,
      lng: -0.102693
    }, {
      lat: 51.5272,
      lng: -0.103048
    }, {
      lat: 51.526903,
      lng: -0.104104
    }, {
      lat: 51.52771,
      lng: -0.104635
    }, {
      lat: 51.526669,
      lng: -0.105284
    }, {
      lat: 51.52725,
      lng: -0.106421
    }, {
      lat: 51.526689,
      lng: -0.107671
    }]
  },
  763053: {
    // finsbury
    lat: "51.5208744",
    lng: "-0.0852537",
    campusZoom: 17,
    dataSrc: "/feed/locations/campus-map-locations-v25-finsbury/_nocache",
    overlay: [[{
      lat: 51.520858774620955,
      lng: -0.08556863723688905
    }, {
      lat: 51.52083653205823,
      lng: -0.08531154647877388
    }, {
      lat: 51.520778361337925,
      lng: -0.08532529531463161
    }, {
      lat: 51.52075440778178,
      lng: -0.0851438198842833
    }, {
      lat: 51.520585883979244,
      lng: -0.08521118813542727
    }, {
      lat: 51.52059786108497,
      lng: -0.08538028971282675
    }, {
      lat: 51.52048665235475,
      lng: -0.08540641209058407
    }, {
      lat: 51.52049092985349,
      lng: -0.08547652721697489
    }, {
      lat: 51.52044901271319,
      lng: -0.08548890077010746
    }, {
      lat: 51.5204592785169,
      lng: -0.08565662701426627
    }], [{
      lat: 51.52226476474981,
      lng: -0.09015529755665408
    }, {
      lat: 51.52224363127885,
      lng: -0.08992989274911023
    }, {
      lat: 51.52185123063815,
      lng: -0.08993395734466093
    }, {
      lat: 51.52186711537125,
      lng: -0.09021479068592209
    }, {
      lat: 51.52193065682891,
      lng: -0.09020628113292894
    }, {
      lat: 51.521966603858395,
      lng: -0.09080856634806456
    }, {
      lat: 51.521966603858395,
      lng: -0.09080856634806456
    }, {
      lat: 51.52219047244918,
      lng: -0.09079029525013968
    }, {
      lat: 51.522260598763985,
      lng: -0.09022127815580626
    }]]
  },
  795583: {
    // tooting
    lat: "51.4262478",
    lng: "-0.177115",
    campusZoom: 16,
    dataSrc: "/feed/locations/campus-map-locations-v25-tooting/_nocache",
    overlay: [{
      lat: 51.42871771131454,
      lng: -0.17409794550102456
    }, {
      lat: 51.427333969551015,
      lng: -0.17154881456144014
    }, {
      lat: 51.42719674940197,
      lng: -0.17154883345598806
    }, {
      lat: 51.42652213570394,
      lng: -0.17261262254587703
    }, {
      lat: 51.425973297007815,
      lng: -0.17363968682340267
    }, {
      lat: 51.42566453304997,
      lng: -0.1731445558491159
    }, {
      lat: 51.424075098238916,
      lng: -0.1740433018916375
    }, {
      lat: 51.42472694955013,
      lng: -0.17646397027100444
    }, {
      lat: 51.42497852622366,
      lng: -0.1772525339184661
    }, {
      lat: 51.42565319025514,
      lng: -0.1784445684661768
    }, {
      lat: 51.426545111724465,
      lng: -0.17923317817964338
    }, {
      lat: 51.42771148002197,
      lng: -0.17639052473001537
    }, {
      lat: 51.428054534331324,
      lng: -0.17688569618860447
    }, {
      lat: 51.428260360024545,
      lng: -0.1764455280204006
    }, {
      lat: 51.42773434010492,
      lng: -0.17571194556875333
    }]
  }
};
let locationCounter = {
  building: 0,
  "student-service": 0,
  library: 0,
  "lecture-theatre": 0,
  "residential-hall": 0
};
let showSearch = false;
function createMap(mapContainer) {
  const getCampus = mapContainer.getAttribute("data-campus");
  campusId = getCampus ? getCampus : "498711";
  lat = campusLocConfig[campusId]["lat"];
  lng = campusLocConfig[campusId]["lng"];
  campusOverlay = campusLocConfig[campusId]["overlay"];
  campusZoom = campusLocConfig[campusId]["campusZoom"];
  dataSrc = campusLocConfig[campusId]["dataSrc"];
  let latlng = new google.maps.LatLng(lat, lng), mapOptions = {
    zoom: campusZoom,
    key: "AIzaSyBvg6r1x2ZRKPAsceVaKPlg6tO20QiBDpo",
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true
  }, map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions), searchBox = document.getElementById("map-search"), infoWindow = new google.maps.InfoWindow({
    maxWidth: 400
  }), cityLayers = {
    // array to hold each google marker object - for each University location
    bigMarkersArray: [],
    //arrray to hold building google marker objects - they never got removed from map
    bigBuildingsArray: [],
    buildingsObj: {},
    buildings: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    libraries: {
      toggler: document.getElementById("toggle-libraries"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    accommodation: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    lectureTheatres: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    studentCentre: {
      toggler: document.getElementById("toggle-studentCentre"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    sports: {
      toggler: null,
      markersArray: [],
      zoomLevel: 17,
      list: ""
    },
    computerLabs: {
      toggler: document.getElementById("toggle-computerLabs"),
      markersArray: [],
      zoomLevel: 17,
      list: ""
    }
  };
  function clearOverlays(markersArray) {
    let i;
    if (markersArray) {
      for (i in markersArray) {
        if (Object.prototype.hasOwnProperty.call(markersArray, i) && typeof markersArray[i] !== "function") {
          markersArray[i].setMap(null);
        }
      }
    }
  }
  let marker;
  function hashChange(id) {
    if (id === "") {
      id = campusId;
    }
    for (let building in cityLayers.buildingsObj) {
      if (id === building) {
        let found = cityLayers.buildingsObj[building];
        if (marker) {
          marker.setMap(null);
        }
        marker = found;
        clearOverlays(cityLayers.bigMarkersArray);
        marker.setVisible(true);
        infoWindow.setContent(marker.infoHtml);
        infoWindow.open(map, marker);
        map.panTo(marker.position);
        marker.setMap(map);
        if (id in campusLocConfig) {
          setTimeout(() => {
            showOverlay(campusLocConfig[id]["overlay"]);
          }, "100");
        } else {
          initialMapOverlay.setMap(null);
        }
        break;
      } else {
        initialMapOverlay.setMap(null);
      }
    }
  }
  function updateHash(caller) {
    let callerId = "";
    if (!caller) {
      return;
    }
    if (typeof caller === "string") {
      callerId = caller;
    } else if (Object.prototype.hasOwnProperty.call(caller, "id")) {
      callerId = caller.id;
    } else {
      callerId = 0;
    }
    location.hash = callerId;
    hashChange(callerId);
  }
  function createMarker(markerConfig) {
    let listId = document.getElementById(markerConfig.category), listItem, marker2, anchor, html = "";
    if (markerConfig.urlCustom) {
      html = '<div id="info-window" style="min-height: 60px;"><h3><a href="' + markerConfig.urlCustom + '">' + markerConfig.name + "</a></h3>";
    } else {
      if (markerConfig.linkHref.length !== 0) {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + "</h3>";
      } else {
        html = '<div id="info-window" style="min-height: 60px;"><h3>' + markerConfig.name + "</h3>";
      }
    }
    function minutesFormat() {
      if (parseInt(markerConfig.walkingDistance) > 1) {
        return " minutes";
      } else {
        return " minute";
      }
    }
    markerConfig.buildingPrefix ? html += "<p>Rooms beginning: " + markerConfig.buildingPrefix + "</p>" : null;
    html += "<p>";
    markerConfig.roomNumber ? html += "Room " + markerConfig.roomNumber + "</br>" : null;
    markerConfig.floor ? html += "Floor " + markerConfig.floor + "</br>" : null;
    markerConfig.building ? html += markerConfig.building + "</br>" : null;
    markerConfig.buildingAdditionalInfo ? html += markerConfig.buildingAdditionalInfo + "</br>" : null;
    markerConfig.street1 ? html += markerConfig.street1 + "</br>" : null;
    markerConfig.street2 ? html += markerConfig.street2 + "</br>" : null;
    markerConfig.city ? html += markerConfig.city + "</br>" : null;
    markerConfig.postcode ? html += markerConfig.postcode + "</br>" : null;
    html += "</p>";
    html += "<p>";
    markerConfig.campus ? html += markerConfig.campus + "</br>" : null;
    html += "</p>";
    markerConfig.supports ? html += "<p>" + markerConfig.supports + "</p>" : null;
    markerConfig.walkingDistance ? html += "<p>Walking distance to campus: </br>" + markerConfig.walkingDistance + minutesFormat(markerConfig.walkingDistance) + "</p>" : null;
    markerConfig.entrance ? html += "<p>" + markerConfig.entrance + "</p>" : null;
    markerConfig.accessibility ? html += "<p>" + markerConfig.accessibility + "</p>" : null;
    if (markerConfig.openingHours.length > 0) {
      let daySlot = [];
      let timeSlot = [];
      markerConfig.openingHours.forEach(function(item) {
        let string = item.trim();
        let day = string.slice(0, "3");
        let hours = string.slice("3");
        let match;
        for (let i = 0; i < timeSlot.length; i++) {
          if (hours === timeSlot[i]) {
            daySlot[i] += ", " + day;
            match = 1;
          }
        }
        if (match !== 1) {
          daySlot.push(day);
          timeSlot.push(hours);
        }
      });
      html += "<p>Opening hours: </br>";
      for (let i = 0; i < timeSlot.length; i++) {
        html += timeSlot[i] + " (" + daySlot[i] + ")</br>";
      }
      html += "</p>";
    }
    html += "<p>";
    markerConfig.tel ? html += "Tel: " + markerConfig.tel + "</br>" : null;
    markerConfig.email ? html += "Email: " + markerConfig.email + "</br>" : null;
    html += "</p>";
    marker2 = new google.maps.Marker({
      map: markerConfig.map,
      position: markerConfig.point,
      icon: markerConfig.icon,
      animation: google.maps.Animation.DROP
    });
    marker2.set("id", markerConfig.id);
    marker2.set("infoHtml", html);
    google.maps.event.addListener(marker2, "click", function() {
      return updateHash(marker2);
    });
    listItem = createHTMLElement("li", [{
      label: "id",
      val: "building-" + markerConfig.id
    }, {
      label: "class",
      val: "building"
    }]);
    anchor = createHTMLElement("a", [{
      label: "html",
      val: "<span>" + markerConfig.name + "</span>"
    }, {
      label: "href",
      val: "#"
    }]);
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      updateHash(e.target.parentElement.parentElement.getAttribute("id").replace("building-", ""));
      toggleLocationPanel("true");
      closeAccordions();
      clearSearchString();
      return false;
    });
    listId ? listId.appendChild(listItem).appendChild(anchor) : null;
    if (markerConfig.category in locationCounter) {
      locationCounter[markerConfig.category] += 1;
    }
    return marker2;
  }
  function parseXml(xml) {
    let items = xml.getElementsByTagName("item");
    let index = 0, $self, marker2, markerConfig = {}, searchTags = [], searchIds = {};
    Array.from(items).forEach(function(item) {
      $self = item;
      markerConfig.openingHours = [];
      markerConfig.index = index + 1;
      markerConfig.id = $self.getElementsByTagName("guid")[0].textContent;
      markerConfig.name = $self.getElementsByTagName("title")[0].textContent;
      markerConfig.linkHref = $self.getElementsByTagName("link")[0].textContent;
      markerConfig.urlCustom = $self.getElementsByTagName("urlCustom")[0].textContent;
      markerConfig.icon = "/?a=537733";
      markerConfig.category = $self.getElementsByTagName("category")[0].textContent;
      markerConfig.buildingPrefix = $self.getElementsByTagName("roomPrefix")[0].textContent;
      markerConfig.roomNumber = $self.getElementsByTagName("roomNumber")[0].textContent;
      markerConfig.entrance = $self.getElementsByTagName("entrance")[0].textContent;
      markerConfig.floor = $self.getElementsByTagName("floor")[0].textContent;
      markerConfig.building = $self.getElementsByTagName("building")[0].textContent;
      markerConfig.buildingAdditionalInfo = $self.getElementsByTagName("buildingAdditionalInfo")[0].textContent;
      markerConfig.campus = $self.getElementsByTagName("campus")[0].textContent;
      markerConfig.street1 = $self.getElementsByTagName("street1")[0].textContent;
      markerConfig.street2 = $self.getElementsByTagName("street2")[0].textContent;
      markerConfig.city = $self.getElementsByTagName("city")[0].textContent;
      markerConfig.postcode = $self.getElementsByTagName("postcode")[0].textContent;
      markerConfig.country = $self.getElementsByTagName("country")[0].textContent;
      markerConfig.tel = $self.getElementsByTagName("tel")[0].textContent;
      markerConfig.email = $self.getElementsByTagName("email")[0].textContent;
      markerConfig.accessibility = $self.getElementsByTagName("accessibility")[0].textContent;
      markerConfig.walkingDistance = $self.getElementsByTagName("walkingDistance")[0].textContent;
      markerConfig.supports = $self.getElementsByTagName("supports")[0].textContent;
      markerConfig.geoLat = $self.getElementsByTagName("geoLat")[0].textContent;
      markerConfig.geoLong = $self.getElementsByTagName("geoLong")[0].textContent;
      $self.getElementsByTagName("ohMon")[0].textContent ? markerConfig.openingHours.push("Mon" + $self.getElementsByTagName("ohMon")[0].textContent) : null;
      $self.getElementsByTagName("ohTue")[0].textContent ? markerConfig.openingHours.push("Tue" + $self.getElementsByTagName("ohTue")[0].textContent) : null;
      $self.getElementsByTagName("ohWed")[0].textContent ? markerConfig.openingHours.push("Wed" + $self.getElementsByTagName("ohWed")[0].textContent) : null;
      $self.getElementsByTagName("ohThu")[0].textContent ? markerConfig.openingHours.push("Thu" + $self.getElementsByTagName("ohThu")[0].textContent) : null;
      $self.getElementsByTagName("ohFri")[0].textContent ? markerConfig.openingHours.push("Fri" + $self.getElementsByTagName("ohFri")[0].textContent) : null;
      $self.getElementsByTagName("ohSat")[0].textContent ? markerConfig.openingHours.push("Sat" + $self.getElementsByTagName("ohSat")[0].textContent) : null;
      $self.getElementsByTagName("ohSun")[0].textContent ? markerConfig.openingHours.push("Sun" + $self.getElementsByTagName("ohSun")[0].textContent) : null;
      markerConfig.point = new google.maps.LatLng(parseFloat(markerConfig.geoLat), parseFloat(markerConfig.geoLong));
      marker2 = createMarker(markerConfig);
      if (markerConfig.category !== "buildings") {
        cityLayers.bigMarkersArray.push(marker2);
      } else {
        cityLayers.bigBuildingsArray.push(marker2);
      }
      cityLayers.buildingsObj[marker2.id] = marker2;
      searchTags.push(createHTMLElement("a", [{
        label: "content",
        val: markerConfig.name
      }, {
        label: "data-id",
        val: markerConfig.id
      }]));
      searchIds[markerConfig.name] = markerConfig.id;
      if (cityLayers[markerConfig.category]) {
        cityLayers[markerConfig.category].markersArray.push(marker2);
      }
    });
    function searchBoxInit() {
      searchBox.addEventListener("keyup", function(e) {
        if (e.keyCode === parseInt("40")) {
          searchItemFocus(e.keyCode);
        } else {
          clearsSearchSuggestions();
          searchSuggestions();
        }
      });
      function searchSuggestions() {
        clearsSearchSuggestions();
        let searchString = searchBox.value;
        if (searchString.length > 0) {
          let createListWrapper = createHTMLElement("div", [{
            label: "class",
            val: "query__suggestions__wrapper"
          }]);
          let createList = createHTMLElement("ul", [{
            label: "id",
            val: "query__suggestions"
          }, {
            label: "data-show",
            val: false
          }, {
            label: "data-focus",
            val: -1
          }]);
          searchBox.parentElement.appendChild(createListWrapper).appendChild(createList);
          let list = document.getElementById("query__suggestions");
          let clearSearchButton = createHTMLElement("button", [{
            label: "class",
            val: "campus-map-v25__controls__search__clear"
          }, {
            label: "html",
            val: '<span class="fa-sharp fa-solid fa-xmark icon "></span><span class="campus-map-v25__controls__search__clear__text">Clear query</span>'
          }]);
          clearSearchButton.addEventListener("click", function() {
            clearSearchString();
          });
          searchBox.parentElement.appendChild(clearSearchButton);
          let maxNumberSuggestions = 10;
          let counter = 0;
          Array.from(searchTags).forEach(function(tag) {
            if (tag.textContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
              if (counter < maxNumberSuggestions) {
                let item = createHTMLElement("li", []);
                let anchor = createHTMLElement("a", [{
                  label: "tabindex",
                  val: -1
                }, {
                  label: "data-id",
                  val: tag.getAttribute("data-id")
                }, {
                  label: "content",
                  val: tag.textContent
                }]);
                anchor.addEventListener("click", function() {
                  searchQueryIdFind(tag.getAttribute("data-id"), tag.textContent);
                  searchBox.value = tag.textContent;
                  updateHash(tag.getAttribute("data-id"));
                });
                anchor.addEventListener("keyup", function(e) {
                  e.preventDefault();
                  searchItemFocus(e.keyCode);
                });
                list.appendChild(item).appendChild(anchor);
                counter += 1;
              }
              list.setAttribute("data-show", true);
            }
          });
        } else {
          clearSearchString();
        }
      }
      searchBox.addEventListener("focusin", function() {
        toggleLocationPanel("true");
        closeAccordions();
        searchSuggestions();
      });
      function searchQueryIdFind(id) {
        document.getElementById("query__suggestions").setAttribute("data-show", false);
        hashChange(id);
      }
      function searchItemFocus(keyCode) {
        let collectionNum = document.getElementById("query__suggestions").querySelectorAll("li").length;
        if (keyCode === parseInt("40")) {
          let focusState = parseInt(document.getElementById("query__suggestions").getAttribute("data-focus"));
          if (focusState + 1 !== collectionNum) {
            document.getElementById("query__suggestions").querySelectorAll("a")[focusState + 1].focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", focusState + 1);
          }
        } else if (keyCode === parseInt("38")) {
          let focusState = parseInt(document.getElementById("query__suggestions").getAttribute("data-focus"));
          if (focusState - 1 !== -1) {
            document.getElementById("query__suggestions").querySelectorAll("a")[focusState - 1].focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", focusState - 1);
          } else {
            searchBox.focus();
            document.getElementById("query__suggestions").setAttribute("data-focus", -1);
          }
        }
      }
    }
    searchBoxInit();
    google.maps.event.addListener(infoWindow, "closeclick", function() {
      updateHash(infoWindow);
    });
    mapContainer.classList.remove("loading");
    Array.from(mapContainer.querySelectorAll(".loading-fa-icon")).forEach(function(i) {
      i.remove();
    });
    window.addEventListener("hashchange", hashChange);
    hashChange(location.hash.replace("#", ""));
    for (let key in locationCounter) {
      if (locationCounter[key] > 0) {
        document.getElementById("accordion-" + key).style.display = "block";
        showSearch = true;
      }
    }
    if (showSearch === true) {
      document.getElementById("map-controls").style.display = "block";
    }
  }
  function loadXml() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === parseInt("4") && xhttp.status === parseInt("200")) {
        parseXml(xhttp.responseXML);
      }
    };
    xhttp.open("GET", dataSrc, true);
    xhttp.send(null);
  }
  function init2() {
    mapContainer.classList.add("loading");
    mapContainer.appendChild(createHTMLElement("i", [{
      label: "class",
      val: "fa fa-refresh fa-spin loading-fa-icon"
    }]));
    loadXml();
  }
  function toggleLocationPanel(status) {
    if (status === "false") {
      mapContainer.querySelector(".campus-map-v25__controls__locations__heading").setAttribute("data-show", true);
      mapContainer.querySelector(".campus-map-v25__controls__locations").setAttribute("data-show", true);
      mapContainer.querySelector(".campus-map-v25__controls__locations").focus();
      if (document.getElementById("query__suggestions")) {
        document.getElementById("query__suggestions").setAttribute("data-show", false);
      }
    } else {
      mapContainer.querySelector(".campus-map-v25__controls__locations__heading").setAttribute("data-show", false);
      mapContainer.querySelector(".campus-map-v25__controls__locations").setAttribute("data-show", false);
    }
  }
  mapContainer.querySelector(".campus-map-v25__controls__locations__heading").addEventListener("click", function() {
    let status = this.getAttribute("data-show");
    toggleLocationPanel(status);
  });
  function closeAccordions(exception) {
    Array.from(mapContainer.getElementsByClassName("accordion--location")).forEach((el) => {
      if (el.getAttribute("id") !== exception) {
        el.querySelector(".accordion__heading").setAttribute("data-open", "false");
        el.querySelector(".accordion__heading button").setAttribute("aria-expanded", "false");
        el.querySelector(".accordion__body").setAttribute("data-closed", "true");
      }
    });
  }
  Array.from(mapContainer.getElementsByClassName("accordion--location")).forEach((el) => {
    el.addEventListener("click", function() {
      closeAccordions(el.getAttribute("id"));
    });
  });
  document.addEventListener("click", function(evt) {
    var mapControls = document.getElementById("map-controls"), targetElement = evt.target;
    do {
      if (targetElement === mapControls) {
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);
    toggleLocationPanel("true");
    closeAccordions();
    clearsSearchSuggestions();
  });
  function clearSearchString() {
    searchBox.value = "";
    let clearSearch = document.querySelector(".campus-map-v25__controls__search__clear");
    clearSearch ? clearSearch.remove() : null;
  }
  function clearsSearchSuggestions() {
    let listWrapper = searchBox.parentElement.querySelector(".query__suggestions__wrapper");
    let clearSearchButton = document.querySelector(".campus-map-v25__controls__search__clear");
    listWrapper ? searchBox.parentElement.querySelector(".query__suggestions__wrapper").remove() : null;
    clearSearchButton ? clearSearchButton.remove() : null;
  }
  var initialMapOverlay = new google.maps.Polygon({
    map,
    paths: campusOverlay,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    geodesic: true
  });
  function showOverlay(newCampusOverlay) {
    initialMapOverlay.setMap(null);
    initialMapOverlay = new google.maps.Polygon({
      map,
      paths: newCampusOverlay,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
      geodesic: true
    });
  }
  init2();
}
const findUsV25 = {
  launchFn: createMap,
  launchQuery: `.${className$n}`
};
const keyCodeTab = 9, keyCodeEnter = 13;
class Defaultcarousel extends Carousel {
  constructor(elem, options) {
    super(elem, options);
  }
  inital() {
    super.init();
    let self = this;
    let thumbnails = [].slice.call(this.elem.querySelector(".galleria-thumbnails-list").querySelectorAll("li"));
    let options = {
      rootMargin: "0px",
      threshold: [0, 1]
    }, edge = document.documentElement.classList.contains("edge");
    let edgeThumbnailsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio === 1) {
          entry.target.setAttribute("aria-hidden", "false");
        } else {
          entry.target.setAttribute("aria-hidden", "true");
        }
      });
    }, options);
    let thumbnailsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("aria-hidden", "false");
        } else if (!entry.isIntersecting) {
          entry.target.setAttribute("aria-hidden", "true");
        }
      });
    });
    thumbnails.forEach(function(e, i) {
      if (i === 0) {
        e.classList.add("active");
      }
      e.addEventListener("click", function(t) {
        self.onClickThunbnail(t, i);
      }, false);
      e.addEventListener("keyup", function(e2) {
        switch (e2.keyCode) {
          case keyCodeEnter:
            self.onClickThunbnail(e2, i);
            break;
          case keyCodeTab:
            self.translateThumbnails(i, e2);
            break;
        }
      }, false);
      e.setAttribute("aria-hidden", "false");
      if (checkIntersectionObserver && !edge) {
        thumbnailsObserver.observe(e);
      } else if (checkIntersectionObserver && edge) {
        edgeThumbnailsObserver.observe(e);
      }
    });
  }
  /**
   *
   * Exported function for defualt caousel to preform when thumbnail it cliked on
   * move slider forward or backwards
   *
   * @param {event} user event - onlcik event on thumbnail
   * @param {number} thumbnail index -
   */
  onClickThunbnail(thumbnail, thumbindex) {
    if (thumbindex > this.i) {
      this.i = thumbindex;
      this.next(thumbnail);
    } else if (thumbindex < this.i) {
      this.i = thumbindex;
      this.previous(thumbnail);
    }
    this.activeThumbnail(thumbindex, thumbnail);
  }
  /**
   *
   * Set click on thumbnail to be active
   *
   * @param {number} thumbnail index -
   * @param {event} user event - onlcik event on thumbnail
   */
  activeThumbnail(thumbindex, e) {
    let thumbnail = this.checkEventType(e), currentThumbnailSpan = document.createElement("span"), listThumbnail = thumbnail.querySelector(".galleria-thumbnails-list").getElementsByTagName("li");
    currentThumbnailSpan.innerText = "Current thumbnail";
    currentThumbnailSpan.className = "galleria-thumbnail__current-thumbnail";
    for (const li of listThumbnail) {
      li.classList.remove("active");
      if (li.querySelector(".galleria-thumbnail__current-thumbnail")) {
        li.querySelector(".galleria-thumbnail__current-thumbnail").remove();
      }
    }
    listThumbnail[thumbindex].classList.add("active");
    listThumbnail[thumbindex].appendChild(currentThumbnailSpan);
    this.translateThumbnails(thumbindex, e);
  }
  /**
   *
   * Move thumbnail
   *
   * @param {number} thumbnail index -
   * @param {event} user event - onlcik event on thumbnail
   */
  translateThumbnails(thumbindex, e) {
    let thumbnailLi = this.checkEventType(e).querySelector(".galleria-thumbnails-list"), thumbnailLength = thumbnailLi.getElementsByTagName("li").length, translate = 0;
    if (thumbindex !== 0 && thumbnailLength > 4) {
      let galleria = thumbnailLi.getElementsByTagName("li");
      Array.from(galleria).forEach((e2, i) => {
        if (i < thumbindex - 1) {
          let style = window.getComputedStyle ? getComputedStyle(e2, null) : e2.currentStyle;
          let width = parseInt(style.width) + parseInt(style.marginRight);
          translate += width;
        }
      });
      if (thumbindex >= 2) {
        thumbnailLi.style.setProperty("transform", "translate(-" + translate + "px)");
      } else {
        thumbnailLi.style.setProperty("transform", "translate(0px)");
      }
    }
  }
}
const className$m = "carousel-gallery";
function carouselGallery(elem) {
  let dc = new Defaultcarousel(elem, {
    defaultCarousel: true,
    hidNumInd: true
  });
  dc.inital();
}
const gallery = {
  launchFn: carouselGallery,
  launchQuery: `.${className$m}`
};
const className$l = "image-expand";
function imageExpand(image) {
  if (!isMobile()) {
    const viewPortHeight2 = window.innerHeight;
    image.classList.add("image-expand--start");
    window.addEventListener("scroll", function() {
      const elemOffset = image.offsetTop;
      const screenPos = window.pageYOffset;
      if (screenPos > elemOffset - viewPortHeight2 + 100 && !image.className.includes("image-expand--complete")) {
        image.classList.add("image-expand--complete");
      }
    });
  }
}
const imageExpand$1 = {
  launchFn: imageExpand,
  launchQuery: `.${className$l}`
};
const className$k = "key-information--lifelong-learning", loadMoreBatch = 3, arrowLeft$2 = "ArrowLeft", arrowRight$2 = "ArrowRight", oneSecond$5 = 1e3, scrollDuration$4 = reduceMotion() ? 0 : oneSecond$5, scrollTo = true;
function prepareStartDates(startDates) {
  startDates.forEach((startDate, i) => {
    startDate.setAttribute("tabindex", -1);
    startDate.setAttribute(aria$1.label, `Start date ${i + 1} of ${startDates.length}`);
    if (i < 1) {
      startDate.dataset.sliderposition = 0;
      startDate.dataset.loadmorevisible = true;
      startDate.dataset.hidden = false;
    } else if (i < loadMoreBatch) {
      startDate.dataset.sliderposition = 1;
      startDate.dataset.loadmorevisible = true;
      startDate.dataset.hidden = true;
    } else {
      startDate.dataset.sliderposition = 1;
      startDate.dataset.loadmorevisible = false;
      startDate.dataset.hidden = true;
    }
  });
}
function updateButtonState$1(keyInformation2) {
  const nextButton = keyInformation2.querySelector(`.${className$k}__controls__next`), prevButton = keyInformation2.querySelector(`.${className$k}__controls__prev`), loadMoreButton = keyInformation2.querySelector(`.${className$k}__controls__loadmore`);
  keyInformation2.querySelector('[data-sliderposition="-1"]') ? prevButton.removeAttribute("disabled") : prevButton.setAttribute("disabled", true);
  keyInformation2.querySelector('[data-sliderposition="1"]') ? nextButton.removeAttribute("disabled") : nextButton.setAttribute("disabled", true);
  if (loadMoreButton && !keyInformation2.querySelector('[data-loadmorevisible="false"]')) {
    loadMoreButton.parentNode.removeChild(loadMoreButton);
  }
}
function handleNextPrevClick$1(keyInformation2, direction) {
  const startDates = Array.from(keyInformation2.querySelectorAll(`.${className$k}__dates > li`)), current = keyInformation2.querySelector('[data-sliderposition="0"]'), currentPage2 = keyInformation2.querySelector(`.${className$k}__indicator__current`), nextButton = keyInformation2.querySelector(`.${className$k}__controls__next`), prevButton = keyInformation2.querySelector(`.${className$k}__controls__prev`);
  if (direction === 1) {
    const next = current.nextElementSibling;
    if (next) {
      nextButton.setAttribute("disabled", true);
      prevButton.setAttribute("disabled", true);
      next.addEventListener("transitionend", function focusNext() {
        next.removeEventListener("transitionend", focusNext, true);
        next.focus();
        updateButtonState$1(keyInformation2);
      }, true);
      current.addEventListener("transitionend", function hideCurrent() {
        current.removeEventListener("transitionend", hideCurrent, true);
        current.dataset.hidden = true;
      }, true);
      current.dataset.sliderposition = -1;
      next.dataset.hidden = false;
      next.dataset.sliderposition = 0;
      next.dataset.loadmorevisible = true;
      currentPage2.innerText = startDates.indexOf(next) + 1;
    }
  } else {
    const previous = current.previousElementSibling;
    if (previous) {
      nextButton.setAttribute("disabled", true);
      prevButton.setAttribute("disabled", true);
      previous.addEventListener("transitionend", function focusPrevious() {
        previous.removeEventListener("transitionend", focusPrevious, true);
        previous.focus();
        updateButtonState$1(keyInformation2);
      }, true);
      current.addEventListener("transitionend", function hideCurrent() {
        current.removeEventListener("transitionend", hideCurrent, true);
        current.dataset.hidden = true;
      }, true);
      current.dataset.sliderposition = 1;
      previous.dataset.hidden = false;
      previous.dataset.sliderposition = 0;
      currentPage2.innerText = startDates.indexOf(previous) + 1;
    }
  }
}
function handleLoadMoreClick(startDateList) {
  const hiddenDates = Array.from(startDateList.querySelectorAll(`.${className$k}__dates > [data-loadmorevisible="false"]`)), loadMoreButton = startDateList.querySelector(`.${className$k}__controls__loadmore`);
  if (loadMoreBatch >= hiddenDates.length) {
    loadMoreButton.parentNode.removeChild(loadMoreButton);
    const registerInterestWrapper = document.createElement("div"), registerInterest = document.createElement("div"), registerInterestPromptText = document.createElement("strong"), registerInterestPromptParagraph = document.createElement("p"), registerInterestCtaBlock = document.createElement("ul"), registerInterestCta = document.createElement("li"), registerInterestCtaAnchor = document.createElement("a"), registerInterestCtaSpan = document.createElement("span");
    registerInterestWrapper.className = "wrapper--key-information--lifelong-learning__register-interest", registerInterestWrapper.setAttribute("data-desktop-only", "yes"), registerInterest.className = "key-information--lifelong-learning__register-interest", registerInterestCtaBlock.className = "cta-block key-information--lifelong-learning__register-interest", registerInterestCta.className = "cta-block__cta", registerInterestCtaAnchor.setAttribute("href", "https://forms.student-crm.com/Forms/view/04e49433-ebf1-4fae-8122-e768c03d5b2c"), registerInterestCtaAnchor.className = "outline-cta--bright", registerInterestCtaSpan.appendChild(document.createTextNode("Register your interest")), registerInterestPromptText.appendChild(document.createTextNode("Want to find out more?")), registerInterestPromptParagraph.appendChild(registerInterestPromptText), registerInterest.appendChild(registerInterestPromptParagraph), registerInterest.appendChild(registerInterestCtaBlock), registerInterestCtaBlock.appendChild(registerInterestCta), registerInterestCta.appendChild(registerInterestCtaAnchor), registerInterestCtaAnchor.appendChild(registerInterestCtaSpan), registerInterestWrapper.appendChild(registerInterest);
    startDateList.after(registerInterestWrapper);
  }
  hiddenDates.slice(0, loadMoreBatch).forEach((date) => {
    date.dataset.loadmorevisible = true;
  });
  const firstElement = hiddenDates.shift();
  if (firstElement && scrollTo && !verticallyInWindow(firstElement)) {
    scroll.to(firstElement, scrollDuration$4);
  }
  firstElement && firstElement.focus();
}
function init$1(keyInformation2) {
  const courses = keyInformation2.querySelectorAll(`.${className$k}-group`);
  courses.forEach((course) => {
    launchKeyInformation(course);
  });
}
function launchKeyInformation(startDateList) {
  const startDates = Array.from(startDateList.querySelectorAll(":scope .key-information--lifelong-learning__dates > li"));
  if (startDates.length < 2) {
    return;
  } else {
    startDateList.classList.add(`${className$k}__dates--controllable`);
    startDateList.setAttribute("role", "presentation");
  }
  const controlsWrapper = document.createElement("nav"), nextButton = document.createElement("button"), nextButtonSpan = document.createElement("span"), prevButton = document.createElement("button"), prevButtonSpan = document.createElement("span"), indicator = document.createElement("div"), currentPage2 = document.createElement("span"), totalPages = document.createElement("span"), divider = document.createElement("span"), dividerVisible = document.createElement("span"), dividerScreenReader = document.createElement("span"), loadMoreButton = document.createElement("button"), loadMoreButtonSpan = document.createElement("span");
  nextButtonSpan.appendChild(document.createTextNode("Next start date"));
  nextButton.appendChild(nextButtonSpan);
  nextButton.setAttribute("type", "button");
  nextButton.className = className$k + "__controls__next";
  nextButton.addEventListener("click", () => handleNextPrevClick$1(startDateList, 1), true);
  prevButtonSpan.appendChild(document.createTextNode("Previous start date"));
  prevButton.appendChild(prevButtonSpan);
  prevButton.setAttribute("type", "button");
  prevButton.setAttribute("disabled", "true");
  prevButton.className = className$k + "__controls__prev";
  prevButton.addEventListener("click", () => handleNextPrevClick$1(startDateList, -1), true);
  startDateList.addEventListener("keydown", (e) => {
    switch (e.key) {
      case arrowLeft$2:
        prevButton.click();
        break;
      case arrowRight$2:
        nextButton.click();
        break;
    }
  }, true);
  if (startDates.length > loadMoreBatch) {
    loadMoreButtonSpan.appendChild(document.createTextNode("Load more start dates"));
    loadMoreButton.appendChild(loadMoreButtonSpan);
    loadMoreButton.setAttribute("type", "button");
    loadMoreButton.className = className$k + "__controls__loadmore";
    loadMoreButton.addEventListener("click", () => handleLoadMoreClick(startDateList), true);
  }
  currentPage2.appendChild(document.createTextNode(1));
  currentPage2.className = className$k + "__indicator__current";
  dividerVisible.appendChild(document.createTextNode("/"));
  dividerVisible.className = className$k + "__indicator__divider--visible";
  dividerVisible.setAttribute(aria$1.hidden, "true");
  dividerScreenReader.appendChild(document.createTextNode(" of "));
  dividerScreenReader.className = className$k + "__indicator__divider--sr";
  divider.appendChild(dividerVisible);
  divider.appendChild(dividerScreenReader);
  divider.className = className$k + "__indicator__divider";
  totalPages.appendChild(document.createTextNode(startDates.length));
  totalPages.className = className$k + "__indicator__total";
  indicator.appendChild(currentPage2);
  indicator.appendChild(divider);
  indicator.appendChild(totalPages);
  indicator.className = className$k + "__indicator";
  controlsWrapper.appendChild(indicator);
  controlsWrapper.appendChild(prevButton);
  controlsWrapper.appendChild(nextButton);
  if (startDates.length > loadMoreBatch) {
    controlsWrapper.appendChild(loadMoreButton);
  }
  controlsWrapper.className = className$k + "__controls";
  controlsWrapper.setAttribute(aria$1.label, "Course start dates navigation");
  prepareStartDates(startDates);
  startDateList.appendChild(controlsWrapper);
}
const keyInformation = {
  launchFn: init$1,
  launchQuery: `.${className$k}`
};
const className$j = "link-finder";
function prependIcon(anchor, className2) {
  let node = document.createElement("span");
  node.className = "fas " + className2 + "  link-decorator";
  node.setAttribute(aria$1.hidden, true);
  anchor.parentNode.insertBefore(node, anchor);
}
function insertIcon(anchor, className2) {
  let ctaText = anchor.textContent;
  anchor.textContent = "";
  anchor.setAttribute("data-theme", "color");
  let spanNodeIcon = document.createElement("span");
  spanNodeIcon.className = "link-decorator fas " + className2;
  let spanNodeText = document.createElement("span");
  let spanNodeTextContent = document.createTextNode(ctaText);
  spanNodeText.appendChild(spanNodeTextContent);
  anchor.appendChild(spanNodeIcon);
  anchor.appendChild(spanNodeText);
}
function findExternalLink(anchor) {
  if (anchor.origin !== window.location.origin && anchor.querySelectorAll("img").length < 1 && anchor.querySelectorAll(".fa-external-link").length < 1 && !anchor.parentElement.className.includes("cta-like-anchor") && anchor.className !== "social-icon" && !anchor.className.includes("cta") && !anchor.parentElement.className.includes("cta-block") && !anchor.parentElement.className.includes("sc-content") && !anchor.parentElement.className.includes("card") && anchor.href.indexOf("mailto:") !== 0 && anchor.href.indexOf("tel:") !== 0 && anchor.href.indexOf("javascript:") !== 0 && anchor.origin) {
    let node = document.createElement("span");
    node.className = "far fa-sharp fa-external-link inline-external-link";
    node.setAttribute(aria$1.label, "(external link)");
    anchor.appendChild(node);
  }
}
function findDocumentLinks(anchor) {
  const fileTypes = {
    pdf: "pdf",
    docx: "word",
    doc: "word",
    xlsx: "excel",
    xls: "excel"
  };
  for (let key in fileTypes) {
    if (anchor.href.indexOf("." + key) !== -1) {
      let anchorText = anchor.textContent;
      anchorText += " [" + key.toUpperCase() + "]";
      anchor.textContent = null;
      anchor.textContent = anchorText;
      if (anchor.parentElement.className.includes("cta-block")) {
        insertIcon(anchor, "fa-file-" + fileTypes[key]);
      } else {
        prependIcon(anchor, "fa-file-" + fileTypes[key]);
        break;
      }
    }
  }
}
function findLinks(e) {
  const anchors = e.querySelectorAll("a");
  anchors.forEach(function(anchor) {
    findDocumentLinks(anchor);
    findExternalLink(anchor);
  });
}
const linkFinder = {
  launchFn: findLinks,
  launchQuery: `.${className$j}`
};
const oneSecond$4 = 1e3, scrollDuration$3 = reduceMotion() ? 0 : oneSecond$4;
function setNavigationItemButtonDetails(button, open, rootClass) {
  const navigationItem = button.closest("li"), sectionText = navigationItem.dataset.title + " section", buttonClassName2 = rootClass + "__button", buttonTextClassName2 = buttonClassName2 + "__text", textSpan = button.querySelector(`.${buttonTextClassName2}`), text = open ? "Close " : "Open ";
  open && Array.from(button.closest("ul").querySelectorAll("button")).forEach((button2) => setNavigationItemButtonDetails(button2, false, rootClass));
  navigationItem.dataset.open = open;
  button.setAttribute(aria$1.expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
function toggleSubNavigation(button, rootClass) {
  const expanded = button.getAttribute(aria$1.expanded);
  if (expanded === "true") {
    button.parentNode.parentNode.classList.remove("menu-animation__slideOpen");
    button.parentNode.parentNode.classList.add("menu-animation__slideClose");
    setTimeout(() => {
      button.parentNode.parentNode.classList.remove("menu-animation__slideClose");
    }, 1e3);
  } else {
    button.parentNode.parentNode.classList.remove("menu-animation__slideClose");
    button.parentNode.parentNode.classList.add("menu-animation__slideOpen");
  }
  toBool(expanded) ? setNavigationItemButtonDetails(button, false, rootClass) : setNavigationItemButtonDetails(button, true, rootClass);
  scroll.intoView(button.closest("li"), scrollDuration$3);
}
function prepareSubNavigation(navigationItem, rootClass) {
  const navigationItemBtn = document.createElement("button"), iconSpan = document.createElement("span"), textSpan = document.createElement("span"), controlsClassName2 = rootClass + "__controls", buttonClassName2 = rootClass + "__button", buttonTextClassName2 = buttonClassName2 + "__text", buttonIconClassName = buttonClassName2 + "__icon", currentClassName2 = rootClass + "__current", hierarchyClassName2 = rootClass + "__hierarchy", controlsWrapper = navigationItem.querySelector(`.${controlsClassName2}`);
  navigationItemBtn.setAttribute("type", "button");
  iconSpan.setAttribute(aria$1.hidden, "true");
  iconSpan.className = `${buttonIconClassName} fal fa-sharp fa-fw`;
  textSpan.className = `${buttonTextClassName2}`;
  appendAll(navigationItemBtn, [iconSpan, textSpan]);
  controlsWrapper.appendChild(navigationItemBtn);
  if (navigationItem.className.indexOf(currentClassName2) >= 0 || navigationItem.className.indexOf(hierarchyClassName2) >= 0) {
    setNavigationItemButtonDetails(navigationItemBtn, true, rootClass);
  } else {
    setNavigationItemButtonDetails(navigationItemBtn, false, rootClass);
  }
}
function prepareNavigation(navigation, rootClass) {
  Array.from(navigation.querySelectorAll("li")).forEach((navigationItem) => {
    const subNavigation = navigationItem.querySelector("ul");
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
function prepareSideNavigation(navigation, rootClass) {
  const controlsClassName2 = rootClass + "__controls";
  Array.from(navigation.querySelectorAll("li")).forEach((navigationItem) => {
    const link = navigationItem.querySelector("a"), subNavigation = navigationItem.querySelector("ul"), linkText = "Visit " + navigationItem.dataset.title, textWrapper = document.createElement("span"), controlsWrapper = document.createElement("div");
    controlsWrapper.className = controlsClassName2;
    textWrapper.appendChild(link.firstChild.cloneNode(true));
    link.replaceChild(textWrapper, link.firstChild);
    link.title = linkText;
    navigationItem.replaceChild(controlsWrapper, link);
    controlsWrapper.appendChild(link);
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
function listenForNavigationToggles(subNavigation, rootClass) {
  Array.from(subNavigation.querySelectorAll("button")).forEach((button) => button.addEventListener("click", () => toggleSubNavigation(button, rootClass), true));
}
const className$i = "menu", hierarchyClassName = className$i + "__hierarchy", currentClassName = className$i + "__current", veilClassName$1 = className$i + "__veil", contentClassName$1 = className$i + "__content", contentHeaderClassName = contentClassName$1 + "__header", currentPage = contentHeaderClassName + "--current", controlsClassName$1 = className$i + "__controls", buttonDisplayClassName = className$i + "__display__button", buttonClassName$2 = className$i + "__button", level1ClassName = className$i + "__level1", buttonTextClassName = buttonClassName$2 + "__text";
function menuSetter(menu2, button) {
  const setMenu = (open) => {
    const buttonText = button.querySelector(`.${buttonTextClassName}`);
    menu2.dataset.open = open;
    buttonText.innerText = open ? "Close" : "Menu";
    button.setAttribute(aria$1.expanded, open);
  };
  return setMenu;
}
function toggleMenu$1(button, setMenu, trap2, veil) {
  const expanded = button.getAttribute(aria$1.expanded);
  if (toBool(expanded)) {
    trap2.deactivate();
    veil.dataset.on = "false";
    setMenu(false);
  } else {
    setMenu(true);
    veil.dataset.on = "true";
    trap2.activate();
  }
}
function createMenuToggle(label, button, setMenu, veil) {
  const buttonWrapper = document.createElement("div"), menu2 = label.closest(`.${className$i}`);
  button.className = "menu__display__button__button";
  buttonWrapper.className = "menu__display__button__button__wrapper";
  button.setAttribute("type", "button");
  button.setAttribute(aria$1.hasPopup, "menu");
  button.setAttribute(aria$1.label, "Toggle menu");
  Array.from(label.childNodes).forEach((child) => buttonWrapper.appendChild(child));
  button.appendChild(buttonWrapper);
  const trap2 = createFocusTrap(menu2, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: () => {
      const open = Array.from(menu2.querySelectorAll([`.${contentHeaderClassName} span`, `.${currentClassName} > .${controlsClassName$1} > a`, `.${hierarchyClassName} > .${controlsClassName$1} > a`, `.${level1ClassName} > ul > li:first-of-type > .${controlsClassName$1} > a`, `.${currentPage} > a`].join(","))).filter((elem) => isVisible(elem));
      return open[open.length - 1];
    },
    onDeactivate: () => toggleMenu$1(button, setMenu, trap2, veil),
    clickOutsideDeactivates: true
  });
  button.addEventListener("click", () => toggleMenu$1(button, setMenu, trap2, veil), true);
}
function launchMenu(menu2) {
  const label = menu2.querySelector(`.${buttonDisplayClassName}`), button = document.createElement("button"), veil = document.createElement("div"), setMenu = menuSetter(menu2, button);
  veil.className = veilClassName$1;
  veil.setAttribute(aria$1.hidden, "true");
  document.querySelector("body").insertBefore(veil, document.querySelector("main"));
  createMenuToggle(label, button, setMenu, veil);
  label.appendChild(button);
  setMenu(false);
  prepareNavigation(menu2.querySelector(`.${level1ClassName}`), className$i);
  listenForNavigationToggles(menu2.querySelector(`.${level1ClassName}`), className$i);
}
const menu = {
  launchFn: launchMenu,
  launchQuery: `.${className$i}`
};
const className$h = "modal", bodyClassName = className$h + "__body", escapeKey$1 = "Escape", oneSecond$3 = 1e3, scrollDuration$2 = reduceMotion() ? 0 : oneSecond$3;
let trap;
function launchModal(modal2) {
  let dialogArray = [];
  const dialogTopic = modal2.getAttribute("data-topic");
  Array.from(modal2.children).forEach((list) => {
    if (!list.dataset.modalcontent || list.dataset.modalcontent === "true") {
      const wrapper = document.createElement("div"), listButton = document.createElement("button"), listButtonSpan = document.createElement("span"), listBody = Array.from(list.childNodes), listHeader = list.firstElementChild, listLabel = list.getAttribute("data-label"), customHeader = list.getAttribute("data-header"), format = list.getAttribute("data-keepformat"), header = document.createElement("div"), dialogIndex = dialogArray.length;
      let title, keepFormat = toBool(format), shortName = list.getAttribute("data-shortname"), label = listLabel || false;
      listButton.classList.add("modal__button");
      listButton.setAttribute("type", "button");
      listButton.setAttribute(aria$1.label, "Open dialog");
      listButtonSpan.classList.add("inline-text");
      listButton.appendChild(listButtonSpan);
      list.appendChild(wrapper);
      appendAll(wrapper, listBody);
      wrapper.classList.add(`${bodyClassName}`);
      if (customHeader) {
        title = customHeader;
      } else {
        title = listHeader.innerText;
      }
      if (shortName === null) {
        shortName = listHeader.innerText;
      }
      if (keepFormat) {
        list.insertBefore(listHeader, wrapper);
        listHeader.addEventListener("click", function() {
          createDialog(modal2, dialogIndex, dialogArray);
        });
      } else {
        listButtonSpan.textContent = listHeader.textContent;
        header.appendChild(listHeader);
        list.insertBefore(listButton, wrapper);
        listButton.addEventListener("click", function() {
          createDialog(modal2, dialogIndex, dialogArray);
        });
      }
      dialogArray.push({
        title,
        body: wrapper.innerHTML,
        topic: dialogTopic,
        shortname: shortName,
        label
      });
    }
  });
}
function createDialog(parent, position, dialogArray) {
  const item = dialogArray[position];
  if (!item) return;
  const slider2 = toBool(parent.getAttribute("data-slider")), type = parent.dataset.type;
  const closeBtn = createHTMLElement("button", [{
    label: "class",
    val: "dialog__close fa-sharp fa-solid fa-xmark icon"
  }, {
    label: "aria-label",
    val: "Close modal"
  }]);
  const dialog = createHTMLElement("div", [{
    label: "class",
    val: "dialog"
  }, {
    label: "data-position",
    val: `${position}`
  }, {
    label: "data-type",
    val: `${type}`
  }]);
  const bodyWrapper = createHTMLElement("div", [{
    label: "class",
    val: "dialog__content"
  }]);
  const wrapperWrapper = createHTMLElement("div", [{
    label: "class",
    val: "dialog__inner"
  }, {
    label: "role",
    val: "role"
  }]);
  const dialogStrapline = createHTMLElement("p", [{
    label: "class",
    val: "dialog__strapline"
  }]);
  const dialogTitle = createHTMLElement("p", [{
    label: "class",
    val: "dialog__heading"
  }]);
  const dialogBody = createHTMLElement("div", [{
    label: "class",
    val: "dialog__body-copy"
  }]);
  const dialogLabel = createHTMLElement("p", [{
    label: "class",
    val: "dialog__label"
  }]);
  dialogTitle.innerText = dialogArray[position].title;
  dialogBody.innerHTML = dialogArray[position].body;
  dialogStrapline.innerHTML = dialogArray[position].topic;
  dialogArray[position].label ? dialogLabel.innerHTML = dialogArray[position].label : null;
  bodyWrapper.appendChild(closeBtn);
  bodyWrapper.appendChild(dialogStrapline);
  bodyWrapper.appendChild(dialogTitle);
  bodyWrapper.appendChild(dialogLabel);
  bodyWrapper.appendChild(dialogBody);
  wrapperWrapper.appendChild(bodyWrapper);
  dialog.appendChild(wrapperWrapper);
  const main = document.querySelector("main");
  main.appendChild(dialog);
  dialog.addEventListener("keydown", (e) => {
    if (e.key === escapeKey$1) {
      e.preventDefault();
      enableBodyScroll();
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  dialog.addEventListener("click", (e) => {
    if (e.target.classList.contains("dialog")) {
      e.preventDefault();
      e.stopPropagation();
      enableBodyScroll();
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDialog(dialog, parent);
    enableBodyScroll();
    trap.deactivate();
  });
  trapFocus(dialog);
  disableBodyScroll();
  if (slider2 && dialogArray.length > 1) {
    createControl(dialog, dialogArray);
  }
}
function createControl(dialog, dialogArray) {
  let position = parseInt(dialog.getAttribute("data-position"));
  const buttonWrapper = createHTMLElement("div", [{
    label: "class",
    val: "dialog__slider-control"
  }]);
  let buttonPrev = controlButton(dialogArray, position, "left");
  let buttonNext = controlButton(dialogArray, position, "right");
  buttonNext.addEventListener("click", (e) => {
    e.preventDefault();
    let pos = buttonNext.getAttribute("data-nextState");
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonPrev.addEventListener("click", (e) => {
    e.preventDefault();
    let pos = buttonPrev.getAttribute("data-nextState");
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonWrapper.appendChild(buttonPrev);
  buttonWrapper.appendChild(buttonNext);
  const dialogContent = dialog.querySelector(".dialog__content");
  dialogContent.appendChild(buttonWrapper);
}
function addDialogEvent(dialog, dialogArray, nextState) {
  nextState = parseInt(nextState);
  dialog.querySelector(".dialog__heading").innerText = dialogArray[nextState].title;
  dialogArray[nextState].label ? dialog.querySelector(".dialog__label").innerHTML = dialogArray[nextState].label : dialog.querySelector(".dialog__label") ? dialog.querySelector(".dialog__label").innerHTML = "" : null;
  dialog.querySelector(".dialog__body-copy").innerHTML = dialogArray[nextState].body;
  if (nextState === 0) {
    dialog.querySelectorAll("button")[1].setAttribute("data-nextstate", `${dialogArray.length - 1}`);
    dialog.querySelectorAll(".dialog__underline-transition")[0].innerText = dialogArray[dialogArray.length - 1].shortname;
    dialog.querySelectorAll(".dialog__underline-transition")[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll("button")[2].setAttribute("data-nextstate", `${nextState + 1}`);
  } else if (nextState === dialogArray.length - 1) {
    dialog.querySelectorAll(".dialog__underline-transition")[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll("button")[1].setAttribute("data-nextstate", `${nextState - 1}`);
    dialog.querySelectorAll(".dialog__underline-transition")[1].innerText = dialogArray[0].shortname;
    dialog.querySelectorAll("button")[2].setAttribute("data-nextstate", "0");
  } else {
    dialog.querySelectorAll(".dialog__underline-transition")[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll("button")[1].setAttribute("data-nextstate", `${nextState - 1}`);
    dialog.querySelectorAll(".dialog__underline-transition")[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll("button")[2].setAttribute("data-nextstate", `${nextState + 1}`);
  }
}
function controlButton(dialogArray, position, direction) {
  const button = document.createElement("button");
  const buttonLabel = document.createElement("span");
  buttonLabel.classList.add("dialog__underline-transition");
  let nextState = checkNextState(dialogArray, position, direction);
  button.setAttribute("data-nextstate", `${nextState}`);
  if (dialogArray[nextState].shortname) {
    buttonLabel.innerText = dialogArray[nextState].shortname;
  } else {
    buttonLabel.innerText = dialogArray[nextState].title;
  }
  const buttonIcon = createHTMLElement("span", [{
    label: "class",
    val: `icon far fa-sharp fa-long-arrow-${direction}`
  }]);
  if (direction === "left") {
    buttonIcon.setAttribute(aria$1.label, "previous item");
  } else {
    buttonIcon.setAttribute(aria$1.label, "next item");
  }
  const buttonLabelWrapper = document.createElement("div");
  buttonLabelWrapper.appendChild(buttonLabel);
  button.appendChild(buttonIcon);
  button.appendChild(buttonLabelWrapper);
  return button;
}
function checkNextState(dialogArray, position, direction) {
  const pos = parseInt(`${position}`);
  let nextState;
  if (pos === 0) {
    if (direction === "left") {
      nextState = dialogArray.length - 1;
    } else {
      nextState = pos + 1;
    }
  } else if (pos === dialogArray.length - 1) {
    if (direction === "left") {
      nextState = pos - 1;
    } else {
      nextState = 0;
    }
  } else {
    if (direction === "left") {
      nextState = pos - 1;
    } else {
      nextState = pos + 1;
    }
  }
  return nextState;
}
function closeDialog(dialog, modal2) {
  const parent = dialog.parentNode;
  parent.removeChild(dialog);
  if (!verticallyInWindow(modal2)) {
    scroll.to(modal2, scrollDuration$2);
  }
}
function trapFocus(modal2) {
  let modalInner = modal2.querySelector(".dialog__inner");
  trap = createFocusTrap(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}
const modal = {
  launchFn: launchModal,
  launchQuery: `.${className$h}`
};
const className$g = "mouseover-gallery";
function launchMouseoverGallery(mouseoverGallery2) {
  const mediaElementsWrap = mouseoverGallery2.querySelector(".wrap--research__media"), mediaElements = mediaElementsWrap.querySelectorAll(".media__container"), pictureElements = mediaElementsWrap.querySelectorAll("picture"), mediaBaseElement = mediaElementsWrap.querySelector(".base"), links = mouseoverGallery2.querySelectorAll("a"), resetMediaDelay = 200;
  let allImages, resetMediaTimeout = null;
  mediaElements.length === pictureElements.length ? allImages = true : allImages = false;
  if (allImages) {
    for (const link of links) {
      link.addEventListener("mouseenter", () => {
        clearTimeout(resetMediaTimeout);
        mediaBaseElement.classList.replace("in", "out");
        mediaElements.forEach((media) => {
          if (media.dataset.id === link.dataset.id) {
            media.classList.replace("out", "in");
          } else {
            media.classList.replace("in", "out");
          }
        });
      });
      link.addEventListener("mouseleave", () => {
        const mediaElem = mouseoverGallery2.querySelector(`[data-id='${link.dataset.id}']`);
        resetMediaTimeout = setTimeout(() => {
          mediaElem.classList.replace("in", "out");
          mediaBaseElement.classList.replace("out", "in");
        }, resetMediaDelay);
      });
    }
  }
}
const mouseoverGallery = {
  launchFn: launchMouseoverGallery,
  launchQuery: `.${className$g}`
};
function actionOnScroll(element, action, repeat = false, options = {
  threshold: [0, 0.1, 1]
}) {
  if (element && typeof element !== "undefined" && element !== null) {
    let actionOnScrollAction = function(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeof action === "string") {
            element.classList.add(action);
          } else if (typeof action === "function") {
            action(element);
          }
          if (repeat === false) {
            observer.unobserve(element);
          }
        }
      });
    };
    let observer = new IntersectionObserver(actionOnScrollAction, options);
    observer.observe(element);
  }
}
const className$f = "animate-number", DURATION = 1500;
function findNumberContainer(widget) {
  const nested = widget.querySelector(".animate--number__number");
  return typeof nested !== "undefined" && nested !== null ? nested : widget;
}
function initNumberAnimation(widget) {
  const startStr = widget.dataset.animationNumberStart || "0";
  const start = parseFloat(startStr);
  const numberContainer = findNumberContainer(widget);
  const numberStr = numberContainer.innerHTML.trim().replace(/,/g, "");
  if (numberStr.match(/^-?[0-9,]+(\.[0-9,]+])?/)) {
    widget.dataset.animationNumberValue = parseFloat(numberStr);
    widget.dataset.animationNumberFloat = !!numberStr.match(/\./);
    widget.dataset.animationNumberStart = start;
    numberContainer.innerHTML = startStr;
    widget.classList.add("animate--number--init");
    return true;
  } else {
    return false;
  }
}
function runNumberAnimation(widget) {
  const numberContainer = findNumberContainer(widget);
  const isFloat = widget.dataset.animationNumberFloat;
  const value = parseInt(widget.dataset.animationNumberValue);
  const format = widget.dataset.animationNumberFormat;
  if (value !== 0) {
    let first = true;
    let startTime = 0;
    let startValue = parseInt(widget.dataset.animationNumberStart);
    let lastValue = 0;
    const runAnimation = (timestamp) => {
      if (first) {
        startTime = timestamp;
        first = false;
      }
      const progress = (timestamp - startTime) / DURATION, finish = progress >= 1, animationSpeed = finish ? 1 : 1 - Math.pow(1 - progress, 4);
      let currentValue = isFloat ? animationSpeed * (value - startValue + startValue).toFixed(1) : null;
      isFloat ? currentValue = Math.floor(currentValue) : null;
      if (lastValue !== currentValue) {
        lastValue = currentValue;
        numberContainer.innerHTML = format === "true" ? currentValue.toLocaleString("en-GB") : currentValue;
      }
      if (finish) {
        widget.classList.add("animate--number--complete");
        numberContainer.innerHTML = parseInt(widget.dataset.animationNumberValue) >= 1e3 && format === "true" ? parseInt(widget.dataset.animationNumberValue).toLocaleString() : widget.dataset.animationNumberValue;
      } else {
        window.requestAnimationFrame(runAnimation);
      }
    };
    window.requestAnimationFrame(runAnimation);
  }
}
function init(elm) {
  const lazyNumbers = [].slice.call(elm.querySelectorAll(".animate--number"));
  if (checkIntersectionObserver()) {
    lazyNumbers.forEach(function(lazyUnit) {
      initNumberAnimation(lazyUnit);
      actionOnScroll(lazyUnit, runNumberAnimation);
    });
  }
}
const numberAnimation = {
  launchFn: init,
  launchQuery: `.${className$f}`
};
const className$e = "pagination", pageClassName = "page", wrapperClassName = className$e + "__wrapper", controlsClassName = className$e + "__controls", controlsElementClassName = controlsClassName + "__element", ellipsisClassName = controlsClassName + "__ellipsis", buttonClassName$1 = controlsClassName + "__button", summaryClassName = className$e + "__summary", nextPrevRegEx = /pagination__controls__button--(next|prev)/, maximumButtonsToDisplay = 6, oneSecond$2 = 1e3, scrollDuration$1 = reduceMotion() ? 0 : oneSecond$2, minimumPagesRequiringEllipsis = 2;
function createToggleNextPrev(next, prev, pageCount) {
  const toggleNextPrev = (pageNumber) => {
    pageCount === pageNumber ? next.setAttribute("disabled", "true") : next.removeAttribute("disabled");
    1 === pageNumber ? prev.setAttribute("disabled", "true") : prev.removeAttribute("disabled");
  };
  return toggleNextPrev;
}
function setProximity(pageCount, controls, pageNumber) {
  if (pageCount > maximumButtonsToDisplay) {
    controls.forEach(function(button) {
      if (!button.className.match(nextPrevRegEx)) {
        const buttonNumber = Number.parseInt(button.dataset.page);
        button.dataset.proximity = buttonNumber - pageNumber;
      }
    });
  }
}
function toggleButton$1(button, selected) {
  button.setAttribute(aria$1.expanded, selected);
  selected ? button.setAttribute("disabled", "true") : button.removeAttribute("disabled");
  selected ? button.setAttribute(aria$1.current, "page") : button.removeAttribute(aria$1.current);
}
function closeAll(pages, controls) {
  pages.forEach((page) => page.dataset.open = false);
  controls.forEach(function(button) {
    if (!button.className.match(nextPrevRegEx)) {
      toggleButton$1(button, false);
    }
  });
}
function createOpenPage(pages, controls, toggleNextPrev) {
  const openPage = (pageNumber, focus, scrollTo2) => {
    const pagesArray = Array.from(pages.querySelectorAll(`.${pageClassName}`)), controlsArray = Array.from(controls.querySelectorAll("button"));
    closeAll(pagesArray, controlsArray);
    const page = pages.querySelector(`.${pageClassName}:nth-of-type(${pageNumber})`), button = controls.querySelector(`[data-page="${pageNumber}"]`);
    setProximity(pagesArray.length, controlsArray, pageNumber);
    toggleNextPrev(pageNumber);
    page.dataset.open = true;
    toggleButton$1(button, true);
    focus && page.focus();
    scrollTo2 && scroll.to(page, scrollDuration$1);
  };
  return openPage;
}
function createNextPrevOpenPage(controls, newPageFn, openPage) {
  const nextPrevOpenPage = () => {
    const currentPage2 = Number.parseInt(controls.querySelector(`[${aria$1.expanded}="true"]`).dataset.page);
    openPage(newPageFn(currentPage2), true, false);
  };
  return nextPrevOpenPage;
}
function setSummaryText(summary, pageCount, itemCount) {
  let summaryText = `${pageCount} pages)`;
  if (itemCount && Number.parseInt(itemCount)) {
    summaryText = `(${itemCount} items on ` + summaryText;
  } else {
    summaryText = "(" + summaryText;
  }
  summary.appendChild(document.createTextNode(summaryText));
}
function prepareNextPrev(next, prev, controls, pageCount, openPage) {
  [{
    button: next,
    class: buttonClassName$1 + "--next",
    text: "Next page",
    newPageFn: (pageNumber) => pageNumber < pageCount && pageNumber + 1
  }, {
    button: prev,
    class: buttonClassName$1 + "--prev",
    text: "Previous page",
    newPageFn: (pageNumber) => pageNumber > 1 && pageNumber - 1
  }].forEach((button) => {
    const btn = button.button, btnSpan = document.createElement("span");
    btn.className = button.class;
    btn.setAttribute("type", "button");
    btnSpan.appendChild(document.createTextNode(button.text));
    btn.appendChild(btnSpan);
    btn.addEventListener("click", createNextPrevOpenPage(controls, button.newPageFn, openPage), true);
  });
}
function createPageButton(pageNumber, totalPages) {
  const button = document.createElement("button"), buttonSpan = document.createElement("span");
  buttonSpan.appendChild(document.createTextNode(pageNumber));
  button.dataset.page = pageNumber;
  button.setAttribute("type", "button");
  button.setAttribute(aria$1.label, `Open page ${pageNumber}`);
  if (totalPages - pageNumber === 1) {
    button.className = `${controlsElementClassName} ${buttonClassName$1} ${buttonClassName$1}--penultimate`;
  } else if (totalPages === pageNumber) {
    button.className = `${controlsElementClassName} ${buttonClassName$1} ${buttonClassName$1}--last`;
  } else {
    button.className = `${controlsElementClassName} ${buttonClassName$1}`;
  }
  button.appendChild(buttonSpan);
  return button;
}
function addPagination(elem, itemCount) {
  const wrapper = document.createElement("div"), pages = Array.from(elem.querySelectorAll(`.${pageClassName}`)), controls = document.createElement("nav"), next = document.createElement("button"), prev = document.createElement("button"), pageButtons = [], summary = document.createElement("p"), toggleNextPrev = createToggleNextPrev(next, prev, pages.length), openPage = createOpenPage(elem, controls, toggleNextPrev), ellipsisFirst = document.createElement("span"), ellipsisFirstInner = document.createElement("span"), ellipsisLast = document.createElement("span"), ellipsisLastInner = document.createElement("span");
  if (!pages.length > 1) {
    removeClass(elem, className$e);
    return;
  }
  ellipsisFirst.className = `${controlsElementClassName} ${ellipsisClassName} ${ellipsisClassName}--first`;
  ellipsisFirstInner.innerText = "…";
  ellipsisFirst.appendChild(ellipsisFirstInner);
  ellipsisLast.className = `${controlsElementClassName} ${ellipsisClassName} ${ellipsisClassName}--last`;
  ellipsisLastInner.innerText = "…";
  ellipsisLast.appendChild(ellipsisLastInner);
  prepareNextPrev(next, prev, controls, pages.length, openPage);
  pageButtons.push(prev);
  for (let pageNumber = 1; pageNumber <= pages.length; pageNumber++) {
    const pageButton = createPageButton(pageNumber, pages.length);
    pageButton.addEventListener("click", () => openPage(pageNumber, true, false));
    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === pages.length) {
      pageButtons.push(ellipsisLast);
    }
    pageButtons.push(pageButton);
    if (pages.length > minimumPagesRequiringEllipsis && pageNumber === 1) {
      pageButtons.push(ellipsisFirst);
    }
  }
  pageButtons.push(next);
  wrapper.className = wrapperClassName;
  controls.className = controlsClassName;
  controls.dataset.pagecount = pages.length;
  controls.setAttribute(aria$1.label, "Pagination");
  summary.className = summaryClassName;
  setSummaryText(summary, pages.length, itemCount);
  elem.parentNode.replaceChild(wrapper, elem);
  wrapper.appendChild(elem);
  pageButtons.forEach((pageButton) => controls.appendChild(pageButton));
  openPage(1, false, false);
  wrapper.appendChild(controls);
  wrapper.appendChild(summary);
}
const pagination = {
  launchFn: addPagination,
  launchQuery: `.${className$e}`
};
const className$d = "paginated-list", minimumPage = 1, defaultPage = 8, maximumPage = 12;
function setPageSize(pageSizeSetting) {
  if (pageSizeSetting < minimumPage) {
    return minimumPage;
  } else if (pageSizeSetting > maximumPage) {
    return maximumPage;
  } else {
    return pageSizeSetting;
  }
}
function launchPaginatedList(list) {
  if (!(list.tagName === "UL" || list.tagName === "OL")) {
    removeClass(list, className$d);
    return;
  }
  const pageSizeSetting = Number.parseInt(list.dataset.pagesize) ? Number.parseInt(list.dataset.pagesize) : defaultPage, listItems = Array.from(list.children), pageSize = setPageSize(pageSizeSetting);
  if (listItems.length <= pageSize) {
    removeClass(list, className$d);
    return;
  }
  const pages = [], reversed = list.tagName === "OL" && list.hasAttribute("reversed") ? true : false, start = list.tagName === "OL" && list.hasAttribute("start") ? Number.parseInt(list.hasAttribute("start")) : reversed ? listItems.length : 1;
  list.setAttribute("role", "presentation");
  let pageNumber = 0, pageItems = listItems.slice(0, pageSize);
  while (pageItems.length > 0) {
    const page = document.createElement("li"), newList = list.tagName === "UL" ? document.createElement("ul") : document.createElement("ol");
    if (list.tagName === "OL") {
      if (!reversed) {
        newList.setAttribute("start", pageSize * pageNumber + start);
      } else {
        newList.setAttribute("start", start - pageSize * pageNumber);
        newList.setAttribute("reversed", "true");
      }
    }
    pageItems.forEach((listItem) => newList.appendChild(listItem));
    page.appendChild(newList);
    page.className = pageClassName;
    page.setAttribute("tabindex", -1);
    page.setAttribute(aria$1.label, `Page ${pageNumber + 1}`);
    pages.push(page);
    ++pageNumber;
    pageItems = listItems.slice(pageSize * pageNumber, pageSize * pageNumber + pageSize);
  }
  pages.forEach((page) => list.appendChild(page));
  addPagination(list, listItems.length);
}
const paginatedList = {
  launchFn: launchPaginatedList,
  launchQuery: `.${className$d}`
};
const className$c = "navigation", classNameSpecific$1 = className$c + "--primary", topLevelClassName = classNameSpecific$1 + "__section-text", buttonClassName = className$c + "__button", openCloseTextClassName = buttonClassName + "__open-close", navigationTextClassName = buttonClassName + "__navigation", headerClassName = classNameSpecific$1 + "__menu__header", veilClassName = className$c + "__veil", openText$1 = "Open", closeText$1 = "Close", navigationText = "navigation section", tabKey = "Tab", escapeKey = "Escape";
function createCloseAll(navigation, veil) {
  return () => {
    const buttons = Array.from(navigation.querySelectorAll(".navigation--primary__level1 > .navigation__button"));
    buttons.forEach((button) => {
      const open = button.getAttribute(aria$1.expanded);
      if (open === "true") {
        button.classList.remove("menu-animation__slideOpen");
        button.classList.add("menu-animation__slideClose");
      }
      button.setAttribute(aria$1.expanded, "false");
      button.querySelector(`.${openCloseTextClassName}`).replaceChild(document.createTextNode(openText$1), button.querySelector(`.${openCloseTextClassName}`).firstChild);
    });
    veil.dataset.on = "false";
  };
}
function createSectionToggle(button, closeAll2, veil) {
  return () => {
    const open = !toBool(button.getAttribute(aria$1.expanded));
    closeAll2();
    if (open) {
      button.closest(`.${classNameSpecific$1}`).dataset.open = "true";
      button.classList.remove("menu-animation__slideClose");
      button.classList.add("menu-animation__slideOpen");
      veil.dataset.on = "true";
      button.setAttribute(aria$1.expanded, open);
      button.querySelector(`.${openCloseTextClassName}`).replaceChild(document.createTextNode(closeText$1), button.querySelector(`.${openCloseTextClassName}`).firstChild);
    }
  };
}
function prepareTopLevel(navigation, veil, closeAll2) {
  const topLevels = Array.from(navigation.querySelectorAll(`.${topLevelClassName}`));
  topLevels.forEach((el) => {
    const listItem = el.parentNode, button = document.createElement("button"), buttonDiv = document.createElement("div"), srOpenCloseSpan = document.createElement("span"), srNavigationSpan = document.createElement("span"), toggleSection = createSectionToggle(button, closeAll2, veil);
    el.removeAttribute("tabindex");
    button.setAttribute(aria$1.expanded, "false");
    button.setAttribute(aria$1.owns, el.nextElementSibling.id);
    button.setAttribute("type", "button");
    button.id = el.nextElementSibling.id + "-button";
    button.className = buttonClassName;
    srOpenCloseSpan.className = openCloseTextClassName;
    srOpenCloseSpan.appendChild(document.createTextNode(openText$1));
    srNavigationSpan.className = navigationTextClassName;
    srNavigationSpan.appendChild(document.createTextNode(navigationText));
    button.addEventListener("click", () => toggleSection(), true);
    appendAll(buttonDiv, [srOpenCloseSpan, document.createTextNode(" "), el, document.createTextNode(" "), srNavigationSpan]);
    button.append(buttonDiv);
    listItem.prepend(button);
  });
}
function setupTabPrevious(navigation, closeAll2, veil) {
  const firstButton = navigation.querySelector(".navigation--primary__level1:first-of-type > .navigation__button"), restButtons = Array.from(navigation.querySelectorAll(".navigation--primary__level1:not(:first-of-type) > .navigation__button"));
  firstButton.addEventListener("keydown", (e) => {
    if (toBool(firstButton.getAttribute(aria$1.expanded)) && tabKey === e.key && e.shiftKey) {
      closeAll2();
    }
  });
  restButtons.forEach((thisSectionButton) => {
    const previousSection = thisSectionButton.parentElement.previousElementSibling, previousSectionButton = previousSection.querySelector("button"), lastNavigationAnchor = previousSection.querySelector(".navigation__level2 > li:last-of-type > a") ? previousSection.querySelector(".navigation__level2 > li:last-of-type > a") : previousSection.querySelector(".navigation__level2 > li:last-of-type").previousElementSibling.querySelector("a"), togglePreviousSection = createSectionToggle(previousSectionButton, closeAll2, veil);
    thisSectionButton.addEventListener("keydown", (e) => {
      if (toBool(thisSectionButton.getAttribute(aria$1.expanded)) && tabKey === e.key && e.shiftKey) {
        e.preventDefault();
        togglePreviousSection();
        lastNavigationAnchor.focus();
      }
    }, true);
  });
}
function setupTabNext(navigation, closeAll2, veil) {
  const closeButton = navigation.querySelector(".navigation--primary__level1:last-of-type .wrapper--navigation--primary__menu__close button"), restSectionsCloseButtons = Array.from(navigation.querySelectorAll(".navigation--primary__level1:not(:last-of-type) .wrapper--navigation--primary__menu__close button"));
  closeButton.addEventListener("keydown", (e) => {
    if (toBool(closeButton.closest(".navigation--primary__level1").querySelector("button").getAttribute(aria$1.expanded)) && tabKey === e.key && !e.shiftKey) {
      closeAll2();
    }
  });
  restSectionsCloseButtons.forEach((closeButton2) => {
    const nextSectionButton = closeButton2.closest(".navigation--primary__level1").nextElementSibling.querySelector("button"), toggleNextSection = createSectionToggle(nextSectionButton, closeAll2, veil);
    closeButton2.addEventListener("keydown", (e) => {
      if (tabKey === e.key && !e.shiftKey) {
        e.preventDefault();
        toggleNextSection();
        nextSectionButton.closest(".navigation--primary__level1").querySelector(`.${headerClassName} a`).focus();
      }
    }, true);
  });
}
function prepareLowerLevels(navigation) {
  Array.from(navigation.querySelectorAll(".navigation__level2 li")).forEach((navigationItem) => {
    const link = navigationItem.querySelector("a"), textWrapper = document.createElement("span");
    textWrapper.appendChild(link.firstChild.cloneNode(true));
    link.replaceChild(textWrapper, link.firstChild);
  });
}
function prepareHeaders(navigation) {
  Array.from(navigation.querySelectorAll(".navigation--primary__level1")).forEach((headertop) => {
    Array.from(headertop.querySelectorAll(`.${headerClassName}`)).forEach((header) => {
      const link = header.querySelector("a"), textWrapper = document.createElement("span");
      if (!link) {
        const currentPageWrapper = document.createElement("span"), linkText = header.firstChild.wholeText.trim() + " overview";
        textWrapper.appendChild(document.createTextNode(linkText));
        currentPageWrapper.appendChild(textWrapper);
        header.replaceChild(currentPageWrapper, header.firstChild);
      } else {
        textWrapper.innerText = headertop.getAttribute("data-title") + " overview";
        link.replaceChild(textWrapper, link.firstChild);
      }
    });
  });
}
function addCloseButtons(navigation, closeAll2) {
  Array.from(navigation.querySelectorAll(".navigation--primary__menu__content")).forEach((menu2) => {
    const header = menu2.querySelector(`.${headerClassName}`), closeButtonWrapper = document.createElement("div"), closeButton = document.createElement("button"), closeButtonDiv = document.createElement("div"), closeButtonText = document.createElement("span"), closeButtonIcon = document.createElement("span"), text = "Close " + header.innerText.trim() + " menu";
    closeButtonText.appendChild(document.createTextNode(text));
    closeButtonText.className = "navigation--primary__menu__close__text";
    closeButtonIcon.setAttribute(aria$1.hidden, "true");
    closeButtonIcon.className = "fa-sharp fa-solid fa-xmark icon navigation--primary__menu__close__icon";
    closeButtonWrapper.className = "wrapper--navigation--primary__menu__close";
    closeButton.className = "navigation--primary__menu__close";
    appendAll(closeButtonDiv, [closeButtonText, closeButtonIcon]);
    closeButton.appendChild(closeButtonDiv);
    closeButton.setAttribute("type", "button");
    closeButton.title = text;
    closeButton.addEventListener("click", () => closeAll2(), true);
    closeButtonWrapper.appendChild(closeButton);
    menu2.appendChild(closeButtonWrapper);
  });
}
function launchPrimaryNavigation(navigation) {
  const veil = document.createElement("div"), closeAll2 = createCloseAll(navigation, veil);
  veil.className = veilClassName;
  veil.setAttribute(aria$1.hidden, "true");
  document.querySelector("body").insertBefore(veil, document.querySelector("main"));
  prepareTopLevel(navigation, veil, closeAll2);
  prepareLowerLevels(navigation);
  prepareHeaders(navigation);
  addCloseButtons(navigation, closeAll2);
  setupTabPrevious(navigation, closeAll2, veil);
  setupTabNext(navigation, closeAll2, veil);
  navigation.addEventListener("keydown", (e) => {
    if (navigation.querySelector(`.${buttonClassName}[aria-expanded='true']`) && escapeKey === e.key) {
      e.preventDefault();
      closeAll2();
    }
  }, true);
  window.addEventListener("click", (e) => {
    if (navigation.querySelector(`.${buttonClassName}[aria-expanded='true']`) && !e.target.closest(`.${classNameSpecific$1}`)) {
      closeAll2();
    }
  }, true);
}
const primaryNavigation = {
  launchFn: launchPrimaryNavigation,
  launchQuery: `.${classNameSpecific$1}`
};
const className$b = "cta-block__cta--no-modal";
function launchResearchApplyCta(cta) {
  let applyAnchor = cta.querySelector(".cta-block__cta__path"), applyAnchorHref = applyAnchor.getAttribute("href"), applyCta = cta.querySelector(".research-apply-link");
  applyCta.setAttribute("href", applyAnchorHref);
  applyAnchor.remove();
}
const researchApplyCta = {
  launchFn: launchResearchApplyCta,
  launchQuery: `.${className$b}`
};
const className$a = "navigation", classNameSpecific = className$a + "--secondary";
function launchSecondaryNavigation(navigation) {
  prepareSideNavigation(navigation, className$a);
  listenForNavigationToggles(navigation, className$a);
}
const secondaryNavigation = {
  launchFn: launchSecondaryNavigation,
  launchQuery: `.${classNameSpecific}`
};
function toggleMenu(el, button) {
  const container = el.closest(".dd-menu__container");
  container.querySelectorAll(".dd-menu--open").forEach((item) => {
    if (item !== el) {
      closeMenu(item);
    }
  });
  const isOpen = el.classList.toggle("dd-menu--open");
  button.setAttribute("aria-expanded", isOpen);
  const srText = button.querySelector(".dd-menu__toggle-state");
  if (srText) {
    srText.textContent = isOpen ? "Close " : "Open ";
  }
}
function closeMenu(el) {
  if (!el) return;
  const button = el.querySelector(".dd-menu__toggle");
  if (!button) return;
  el.classList.remove("dd-menu--open");
  button.setAttribute("aria-expanded", "false");
}
function handleOutsideInteraction(event2, el) {
  if (!el.contains(event2.target)) {
    closeMenu(el);
  }
}
function handleKeyboardNavigation(event2, button, submenu) {
  if (event2.key === "Enter" || event2.key === " ") {
    event2.preventDefault();
    button.click();
  } else if (event2.key === "ArrowDown") {
    event2.preventDefault();
    const firstLink = submenu.querySelector("a");
    if (firstLink) firstLink.focus();
  } else if (event2.key === "Escape") {
    closeMenu(button.closest(".dd-menu"));
    button.focus();
  }
}
function handleSubmenuNavigation(event2, submenu, button) {
  const focusableItems = Array.from(submenu.querySelectorAll("a"));
  const currentIndex = focusableItems.indexOf(document.activeElement);
  if (event2.key === "ArrowDown") {
    event2.preventDefault();
    focusableItems[(currentIndex + 1) % focusableItems.length].focus();
  } else if (event2.key === "ArrowUp") {
    event2.preventDefault();
    focusableItems[(currentIndex - 1 + focusableItems.length) % focusableItems.length].focus();
  } else if (event2.key === "Escape") {
    closeMenu(submenu.closest(".dd-menu"));
    button.focus();
  }
}
function launch(el) {
  const button = el.querySelector(".dd-menu__toggle");
  const submenu = el.querySelector(".dd-menu__sub");
  if (!button || !submenu) return;
  button.addEventListener("click", (event2) => {
    toggleMenu(el, button);
    event2.stopPropagation();
  });
  document.addEventListener("click", (event2) => handleOutsideInteraction(event2, el));
  document.addEventListener("focusin", (event2) => handleOutsideInteraction(event2, el));
  button.addEventListener("keydown", (event2) => handleKeyboardNavigation(event2, button, submenu));
  submenu.addEventListener("keydown", (event2) => handleSubmenuNavigation(event2, submenu, button));
}
const className$9 = "dd-menu";
const dropdownMenu = {
  launchFn: launch,
  launchQuery: `.${className$9}`
};
const className$8 = "show-more", oneSecond$1 = 1e3, scrollDuration = reduceMotion() ? 0 : oneSecond$1;
function toggleShowMore(showMore2) {
  const firstHeadingElement = showMore2.querySelector(".show-more__heading, h2, h3, h4, h5, h6"), contentElement = showMore2.querySelector(".show-more__content"), showMoreAnchorLinkText = showMore2.querySelector(".show-more__link-text"), hiddenElement = toBool(contentElement.dataset.hidden);
  if (hiddenElement) {
    showMore2.dataset.open = true;
    contentElement.dataset.hidden = false;
    showMoreAnchorLinkText.textContent = "Show less";
  } else {
    showMore2.dataset.open = false;
    contentElement.dataset.hidden = true;
    showMoreAnchorLinkText.textContent = "Show more";
  }
  if (firstHeadingElement && !verticallyInWindow(firstHeadingElement)) {
    scroll.to(firstHeadingElement, scrollDuration);
  }
}
function createShowMoreButton(showMoreElement) {
  const showMoreButtonDiv = document.createElement("div"), showMoreButtonSpan = document.createElement("span"), showMoreButton = document.createElement("button"), icon = document.createElement("span"), showMoreText = document.createElement("span"), dataTitle = showMoreElement.getAttribute("data-title"), srTextElement = document.createElement("span");
  showMoreButtonDiv.classList.add("show-more__button__container");
  showMoreButtonSpan.classList.add("show-more__button");
  showMoreButtonDiv.appendChild(showMoreButtonSpan);
  showMoreButton.setAttribute("type", "button");
  showMoreButton.addEventListener("click", () => toggleShowMore(showMoreElement));
  showMoreButtonSpan.appendChild(showMoreButton);
  icon.classList.add("icon");
  icon.classList.add("fal");
  icon.setAttribute(aria$1.hidden, true);
  showMoreText.classList.add("show-more__link-text");
  showMoreText.appendChild(document.createTextNode("Show more"));
  srTextElement.appendChild(document.createTextNode("about " + dataTitle));
  srTextElement.classList.add("sr-only");
  showMoreButton.appendChild(icon);
  showMoreButton.appendChild(showMoreText);
  showMoreButton.appendChild(srTextElement);
  showMoreElement.appendChild(showMoreButtonDiv);
}
function showMore(showMoreElement) {
  const showMoreTextElements = showMoreElement.querySelectorAll(".show-more__content");
  showMoreTextElements.forEach((element) => {
    element.dataset.hidden = true;
  });
  createShowMoreButton(showMoreElement);
}
const showMore$1 = {
  launchFn: showMore,
  launchQuery: `.${className$8}`
};
const className$7 = "slider", defaultStyle = "arrows", defaultCardsPerRow = 1, arrowLeft$1 = "ArrowLeft", arrowRight$1 = "ArrowRight";
function addSwipeEvents(slider2, controlsWrapper) {
  slider2.addEventListener("mousedown", function(e) {
    lock(e, slider2);
  });
  slider2.addEventListener("touchstart", function(e) {
    lock(e, slider2);
  });
  slider2.addEventListener("mouseup", function(e) {
    move(e, slider2, controlsWrapper);
  });
  slider2.addEventListener("touchend", function(e) {
    move(e, slider2, controlsWrapper);
  });
}
function responsiveOptimisation(slides, slider2, controls, direction) {
  const responsiveNum = 2;
  let i;
  let d;
  let currentSlide;
  for (i = 0; i < slides.length; i += responsiveNum) {
    let liElement = document.createElement("li");
    let ulElement = document.createElement("ul");
    liElement.appendChild(ulElement);
    for (d = 0; d < responsiveNum; d++) {
      if (slides[i + d]) {
        ulElement.appendChild(slides[i + d]);
        let sliderposition = slides[i + d].getAttribute("data-sliderposition");
        if (sliderposition === "0") {
          currentSlide = i + d;
        }
        slides[i + d].classList.remove("slide");
        slides[i + d].removeAttribute("data-sliderposition");
      }
    }
    slider2.appendChild(liElement);
  }
  slides = Array.from(slider2.children);
  prepareSlides(slides, Math.floor((currentSlide + direction) / 2));
  slider2.setAttribute("data-optimised", "true");
  if (controls) {
    slides[Math.floor((currentSlide + direction) / 2)].focus();
    controls.querySelector(".slider__indicator__total").innerText = slides.length;
    controls.querySelector(".slider__indicator__current").innerText = Math.floor((currentSlide + direction) / 2) + 1;
    updateButtonState(slider2, controls);
  }
  slider2.setAttribute("data-count", slides.length);
  return slides;
}
function reverseOptimisation(slider2, controls, direction) {
  let slides = Array.from(slider2.children);
  let i;
  let currentSlide;
  let adjustment = 0;
  for (i = 0; i < slides.length; i++) {
    let sliderposition = slides[i].getAttribute("data-sliderposition");
    if (sliderposition === "0") {
      currentSlide = i;
    }
    const slidesChildren = Array.from(slides[i].querySelector("ul").children);
    slidesChildren.forEach((slide) => {
      slider2.appendChild(slide);
    });
    slides[i].remove();
  }
  slides = Array.from(slider2.children);
  if (currentSlide * 2 + (Math.round(direction / 2) + direction) >= slides.length) {
    adjustment = -1;
  }
  prepareSlides(slides, currentSlide * 2 + Math.round(direction / 2) + direction + adjustment);
  slider2.setAttribute("data-optimised", "false");
  slides[currentSlide * 2 + (Math.round(direction / 2) + direction) + adjustment].focus();
  controls.querySelector(".slider__indicator__total").innerText = slides.length;
  controls.querySelector(".slider__indicator__current").innerText = currentSlide * 2 + (Math.round(direction / 2) + direction + 1) + adjustment;
  slider2.setAttribute("data-count", slides.length);
  updateButtonState(slider2, controls);
  return slides;
}
function updateButtonState(slider2, controls) {
  const nextButton = controls.querySelector(`.${className$7}__controls__next`), prevButton = controls.querySelector(`.${className$7}__controls__prev`);
  slider2.querySelector('[data-sliderposition="-1"]') ? prevButton.removeAttribute("disabled") : prevButton.setAttribute("disabled", true);
  slider2.querySelector('[data-sliderposition="1"]') ? nextButton.removeAttribute("disabled") : nextButton.setAttribute("disabled", true);
  slider2.removeAttribute("disabled");
  const responsive = slider2.getAttribute("data-style");
  let slides = Array.from(slider2.children);
  responsive && slides.length === 1 ? nextButton.removeAttribute("disabled") : null;
}
function handleNextPrevClick(slider2, controls, direction) {
  let slides = Array.from(slider2.children);
  const responsive = slider2.getAttribute("data-style");
  const optimised = slider2.getAttribute("data-optimised");
  let screenSize = window.innerWidth;
  if (responsive === "responsive" && screenSize < 768 && optimised === "true") {
    reverseOptimisation(slider2, controls, direction);
    return;
  } else if (responsive === "responsive" && screenSize >= 768 && optimised !== "true") {
    responsiveOptimisation(slides, slider2, controls, direction);
    return;
  }
  const current = slider2.querySelector('[data-sliderposition="0"]'), currentPage2 = controls.querySelector(`.${className$7}__indicator__current`), nextButton = controls.querySelector(`.${className$7}__controls__next`), prevButton = controls.querySelector(`.${className$7}__controls__prev`);
  if (direction === 1) {
    const next = current.nextElementSibling;
    if (next) {
      nextButton.setAttribute("disabled", true);
      prevButton.setAttribute("disabled", true);
      next.addEventListener("transitionend", function focusNext() {
        next.removeEventListener("transitionend", focusNext, true);
        next.focus();
        updateButtonState(slider2, controls);
      }, true);
      current.addEventListener("transitionend", function hideCurrent() {
        current.removeEventListener("transitionend", hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true);
      current.dataset.sliderposition = -1;
      current.dataset.smallposition = -1;
      next.dataset.hidden = false;
      next.dataset.smallhidden = false;
      next.dataset.sliderposition = 0;
      next.dataset.smallposition = 0;
      currentPage2.innerText = slides.indexOf(next) + 1;
    }
  } else {
    const previous = current.previousElementSibling;
    if (previous) {
      nextButton.setAttribute("disabled", true);
      prevButton.setAttribute("disabled", true);
      previous.addEventListener("transitionend", function focusPrevious() {
        previous.removeEventListener("transitionend", focusPrevious, true);
        previous.focus();
        updateButtonState(slider2, controls);
      }, true);
      current.addEventListener("transitionend", function hideCurrent() {
        current.removeEventListener("transitionend", hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true);
      current.dataset.sliderposition = 1;
      current.dataset.smallposition = 1;
      previous.dataset.hidden = false;
      previous.dataset.smallhidden = false;
      previous.dataset.sliderposition = 0;
      previous.dataset.smallposition = 0;
      currentPage2.innerText = slides.indexOf(previous) + 1;
    }
  }
}
function prepareSlides(slides, current) {
  slides.forEach((slide, i) => {
    slide.setAttribute("tabindex", -1);
    slide.setAttribute(aria$1.label, `Slide ${i + 1} of ${slides.length}`);
    slide.classList.add("slide");
    if (i === current) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else if (i > current) {
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = "true";
      slide.dataset.smallhidden = "true";
    } else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true;
    }
  });
  return slides;
}
function launchArrow(slider2) {
  let slides = Array.from(slider2.children);
  const controlsWrapper = document.createElement("nav"), nextButton = document.createElement("button"), nextButtonSpan = document.createElement("span"), prevButton = document.createElement("button"), prevButtonSpan = document.createElement("span"), indicator = document.createElement("div"), currentPage2 = document.createElement("span"), totalPages = document.createElement("span"), divider = document.createElement("span"), dividerVisible = document.createElement("span"), dividerScreenReader = document.createElement("span");
  if (1 >= slides.length) {
    removeClass(slider2, className$7);
    return;
  }
  const responsive = slider2.getAttribute("data-style");
  let screenSize = window.innerWidth;
  if (responsive === "responsive" && screenSize >= 768) {
    responsiveOptimisation(slides, slider2);
    slides = Array.from(slider2.children);
  }
  prepareSlides(slides, 0);
  nextButtonSpan.appendChild(document.createTextNode("Next slide"));
  nextButton.appendChild(nextButtonSpan);
  nextButton.setAttribute("type", "button");
  nextButton.className = className$7 + "__controls__next";
  nextButton.addEventListener("click", () => handleNextPrevClick(slider2, controlsWrapper, 1), true);
  prevButtonSpan.appendChild(document.createTextNode("Previous slide"));
  prevButton.appendChild(prevButtonSpan);
  prevButton.setAttribute("type", "button");
  prevButton.setAttribute("disabled", "true");
  prevButton.className = className$7 + "__controls__prev";
  prevButton.addEventListener("click", () => handleNextPrevClick(slider2, controlsWrapper, -1), true);
  slider2.addEventListener("keydown", (e) => {
    switch (e.key) {
      case arrowLeft$1:
        prevButton.click();
        break;
      case arrowRight$1:
        nextButton.click();
        break;
    }
  }, true);
  currentPage2.appendChild(document.createTextNode(1));
  currentPage2.className = className$7 + "__indicator__current";
  dividerVisible.appendChild(document.createTextNode("/"));
  dividerVisible.className = className$7 + "__indicator__divider--visible";
  dividerVisible.setAttribute(aria$1.hidden, "true");
  dividerScreenReader.appendChild(document.createTextNode(" of "));
  dividerScreenReader.className = className$7 + "__indicator__divider--sr";
  divider.appendChild(dividerVisible);
  divider.appendChild(dividerScreenReader);
  divider.className = className$7 + "__indicator__divider";
  totalPages.className = className$7 + "__indicator__total";
  totalPages.appendChild(document.createTextNode(slides.length));
  indicator.appendChild(currentPage2);
  indicator.appendChild(divider);
  indicator.appendChild(totalPages);
  indicator.className = className$7 + "__indicator";
  controlsWrapper.appendChild(indicator);
  controlsWrapper.appendChild(prevButton);
  controlsWrapper.appendChild(nextButton);
  controlsWrapper.className = className$7 + "__controls";
  controlsWrapper.setAttribute(aria$1.label, "Slider navigation");
  slider2.nextElementSibling ? slider2.parentElement.insertBefore(controlsWrapper, slider2.nextElementSibling) : slider2.parentElement.appendChild(controlsWrapper);
  addSwipeEvents(slider2, controlsWrapper);
}
function launchDot(slider2) {
  const slides = Array.from(slider2.children), controlsWrapper = document.createElement("nav");
  if (1 >= slides.length) {
    removeClass(slider2, className$7);
    return;
  }
  slides.forEach((slide, i) => {
    slide.setAttribute("tabindex", -1);
    slide.setAttribute(aria$1.label, `Slide ${i + 1} of ${slides.length}`);
    slide.classList.add("slide");
    if (i === 0) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else {
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = "true";
      slide.dataset.smallhidden = "true";
    }
    let dot = createHTMLElement("button", [{
      label: "data-page",
      val: i
    }, {
      label: "aria-label",
      val: `Open slide ${i + 1}`
    }, {
      label: "type",
      val: "button"
    }]);
    if (i === 0) {
      dot.setAttribute(aria$1.current, "slide");
      dot.setAttribute(aria$1.expanded, "true");
      dot.setAttribute("disabled", "true");
    } else {
      dot.setAttribute(aria$1.expanded, "false");
    }
    dot.addEventListener("click", () => handleDotClick(slider2, controlsWrapper, i), true);
    controlsWrapper.appendChild(dot);
  });
  slider2.addEventListener("keydown", (e) => {
    const current = slider2.querySelector('[data-sliderposition="0"]');
    const next = current.nextElementSibling;
    const previous = current.previousElementSibling;
    const pos = slides.indexOf(current);
    const buttons = Array.from(controlsWrapper.children);
    switch (e.key) {
      case arrowLeft$1:
        if (previous) {
          buttons[pos - 1].click();
        }
        break;
      case arrowRight$1:
        if (next) {
          buttons[pos + 1].click();
        }
        break;
    }
  }, true);
  controlsWrapper.className = className$7 + "__controls";
  controlsWrapper.setAttribute(aria$1.label, "Slider navigation");
  slider2.nextElementSibling ? slider2.parentElement.insertBefore(controlsWrapper, slider2.nextElementSibling) : slider2.parentElement.appendChild(controlsWrapper);
  addSwipeEvents(slider2, controlsWrapper);
}
function handleDotClick(slider2, controlsWrapper, selection) {
  const slides = Array.from(slider2.children), dotButtons = Array.from(controlsWrapper.children);
  dotButtons.forEach((dot) => {
    dot.setAttribute("disabled", true);
  });
  slides.forEach((slide, i) => {
    if (i === selection) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
      slide.addEventListener("transitionend", function focusNext() {
        slide.removeEventListener("transitionend", focusNext, true);
        slide.focus();
        updateDotButtonState(i, dotButtons, slider2);
      }, true);
    } else if (i > selection) {
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = true;
    } else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true;
    }
  });
}
function updateDotButtonState(active, dotButtons, slider2) {
  dotButtons.forEach((dot, i) => {
    if (i === active) {
      dot.setAttribute("disabled", true);
      dot.setAttribute("aria-expanded", true);
    } else {
      dot.removeAttribute("disabled");
      dot.setAttribute("aria-expanded", false);
    }
  });
  slider2.removeAttribute("disabled");
}
let x0;
function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}
function lock(e, slider2) {
  const locked = slider2.getAttribute("disabled");
  if (!locked) {
    x0 = unify(e).clientX;
  }
}
function move(e, slider2, controlsWrapper) {
  const locked = slider2.getAttribute("disabled");
  let currentSlide = slider2.querySelector("li[data-hidden=false]");
  const sliderType = slider2.getAttribute("data-style");
  function getElementIndex(element) {
    return [...element.parentNode.children].indexOf(element);
  }
  if (!locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
    if (s === -1 && currentSlide.nextElementSibling && dx < -25) {
      slider2.setAttribute("disabled", true);
      sliderType === "arrows" || sliderType === "responsive" ? handleNextPrevClick(slider2, controlsWrapper, 1) : handleDotClick(slider2, controlsWrapper, getElementIndex(currentSlide) + 1);
    } else if (s === 1 && currentSlide.previousElementSibling && dx > 25) {
      slider2.setAttribute("disabled", true);
      sliderType === "arrows" || sliderType === "responsive" ? handleNextPrevClick(slider2, controlsWrapper, -1) : handleDotClick(slider2, controlsWrapper, getElementIndex(currentSlide) - 1);
    }
  }
}
function launchSlider(slider2) {
  let style = slider2.dataset.style || defaultStyle, cardsPerRow = parseInt(slider2.dataset.cardsperrow) || defaultCardsPerRow;
  if (cardsPerRow > 1 && style === "arrows" && slider2.dataset.small === "false") {
    style = "responsive";
    cardsPerRow = 1;
    slider2.dataset.style = style;
    slider2.dataset.cardsperrow = cardsPerRow;
  }
  switch (style) {
    case "arrows":
      launchArrow(slider2);
      break;
    case "responsive":
      launchArrow(slider2);
      break;
    case "dots":
      launchDot(slider2);
      break;
    default:
      launchArrow(slider2);
  }
}
const slider = {
  launchFn: launchSlider,
  launchQuery: `.${className$7}`
};
const className$6 = "animate-svg";
function initSvgPathAnimation(animateSvg) {
  const viewPortHeight2 = window.innerHeight;
  window.addEventListener("DOMContentLoaded", () => {
    var paths = animateSvg.querySelectorAll(".animate--svg-path");
    paths.forEach((path) => {
      let length = path.getTotalLength() + "px";
      path.classList.add("animate--svg-path--jsinit");
      path.style.strokeDashoffset = length;
      path.style.strokeDasharray = `${length}, ${length}`;
    });
    window.addEventListener("scroll", function() {
      const elemOffset = animateSvg.offsetTop;
      const screenPos = window.pageYOffset;
      if (screenPos > elemOffset - viewPortHeight2 + 30) {
        paths.forEach(function(path) {
          !path.classList.contains("animate--svg-path--jsrun") ? path.classList.add("animate--svg-path--jsrun") : null;
          setTimeout(() => {
            path.style.strokeDashoffset = 0;
          }, 100);
        });
      }
    });
  });
}
const svgPathAnimation = {
  launchFn: initSvgPathAnimation,
  launchQuery: `.${className$6}`
};
const className$5 = "tabs", panelClassName$1 = className$5 + "__panel", contentClassName = panelClassName$1 + "__content", linksClassName$1 = className$5 + "__links", endKey = "End", homeKey = "Home", arrowLeft = "ArrowLeft", arrowUp = "ArrowUp", arrowRight = "ArrowRight", arrowDown = "ArrowDown", oneSecond = 1e3;
reduceMotion() ? 0 : oneSecond;
function toggleButton(button, selected) {
  button.setAttribute(aria$1.selected, selected);
  if (selected) {
    button.setAttribute(aria$1.current, true);
  } else {
    button.removeAttribute(aria$1.current);
  }
}
function selectTab(newTab) {
  const tabs2 = newTab.closest(`.${className$5}`), controls = tabs2.querySelector(`.${linksClassName$1}`), linkItems = Array.from(controls.querySelectorAll("li")), panels = Array.from(tabs2.childNodes).filter((node) => node.className && node.className === panelClassName$1);
  linkItems.forEach((linkItem) => {
    toggleButton(linkItem.firstElementChild, false);
  });
  panels.forEach((panel) => panel.setAttribute("hidden", "true"));
  toggleButton(newTab, true);
  tabs2.querySelector(newTab.dataset.hash).removeAttribute("hidden");
  newTab.focus();
  window.location.hash = newTab.id;
}
function selectTabEvent(e, newTab) {
  e.preventDefault();
  selectTab(newTab);
}
function keyEvents(e, tabs2) {
  const currentTab = tabs2.querySelector(`[${aria$1.selected}="true"]`), currentTabLI = currentTab.parentNode;
  let newTab = null;
  switch (e.key) {
    case arrowLeft:
      currentTabLI.previousElementSibling ? newTab = currentTabLI.previousElementSibling.firstElementChild : newTab = tabs2.querySelector("li:last-of-type a");
      break;
    case arrowRight:
      currentTabLI.nextElementSibling ? newTab = currentTabLI.nextElementSibling.firstElementChild : newTab = tabs2.querySelector("li:first-of-type a");
      break;
    case arrowDown:
      tabs2.querySelector(currentTab.dataset.hash).focus();
      break;
    case arrowUp:
      currentTab.focus();
      break;
    case homeKey:
      newTab = tabs2.querySelector("li:first-of-type a");
      break;
    case endKey:
      newTab = tabs2.querySelector("li:last-of-type a");
      break;
  }
  newTab && selectTabEvent(e, newTab);
}
function prepareLinks(linkItems) {
  linkItems.forEach((linkItem) => {
    const link = linkItem.firstElementChild, button = document.createElement("button");
    linkItem.setAttribute("role", "presentation");
    button.setAttribute("role", "tab");
    button.appendChild(link.firstElementChild);
    button.dataset.hash = link.hash;
    button.id = link.id;
    linkItem.replaceChild(button, link);
    toggleButton(button, false);
    button.addEventListener("click", (e) => selectTabEvent(e, button), true);
  });
}
function preparePanels(panels) {
  panels.forEach((panel) => {
    const wrapper = document.createElement("div"), panelElements = Array.from(panel.children);
    wrapper.className = contentClassName;
    panelElements.forEach((element) => wrapper.appendChild(element));
    panel.appendChild(wrapper);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", -1);
    panel.setAttribute("hidden", "true");
  });
}
function launchTabs(tabs2) {
  const controls = tabs2.querySelector(`.${linksClassName$1}`), linkItems = Array.from(controls.querySelectorAll("li")), panels = Array.from(tabs2.childNodes).filter((node) => node.className && node.className === panelClassName$1);
  if (linkItems.length === 1) {
    removeClass(tabs2, className$5);
    return;
  }
  controls.setAttribute("role", "tablist");
  preparePanels(panels);
  prepareLinks(linkItems);
  toggleButton(linkItems[0].firstElementChild, true);
  panels[0].removeAttribute("hidden");
  tabs2.addEventListener("keydown", (e) => keyEvents(e, tabs2), true);
  if (window.location.hash) {
    let urlHash = window.location.hash;
    let button = tabs2.querySelector("" + urlHash);
    if (button) {
      let isTabAccordion;
      let viewportWidth = window.innerWidth;
      tabs2.parentElement.className == "tabs--accordion" ? isTabAccordion = true : isTabAccordion = false;
      if (isTabAccordion && screenWidth("tablet") < viewportWidth) {
        window.onload = function() {
          selectTab(button);
        };
      } else if (!isTabAccordion) {
        window.onload = function() {
          selectTab(button);
        };
      }
    }
  }
}
const tabs = {
  launchFn: launchTabs,
  launchQuery: `.${className$5}`
};
const className$4 = "picture[data-authorname], picture[data-sourcename]", openText = "Show image credit", closeText = "Hide image credit";
function walkDOMCheckClassName(node) {
  const cardsType = ["card--pathway", "card--news"];
  const checkClassName = cardsType.some((e) => node.parentElement.classList.contains(e));
  if (node.tagName === "BODY") {
    return null;
  }
  if (checkClassName) {
    return node.parentElement;
  }
  if (node.parentElement) {
    return walkDOMCheckClassName(node.parentElement);
  }
  return null;
}
function toggleImageCredit(wrapper) {
  const button = wrapper.querySelector("button"), buttonText = button.querySelector(".sr-only"), label = wrapper.querySelector(".tooltip__label"), icon = button.querySelector(".tooltip__icon");
  if (toBool(wrapper.dataset.open)) {
    wrapper.dataset.open = false;
    button.setAttribute(aria$1.expanded, "false");
    buttonText.innerText = openText;
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-subtitles");
    button.focus();
  } else {
    wrapper.dataset.open = true;
    button.setAttribute(aria$1.expanded, "true");
    buttonText.innerText = closeText;
    icon.classList.remove("fa-subtitles");
    icon.classList.add("fa-xmark");
    label.focus();
  }
}
function createLabel(text, url) {
  if (url) {
    const element = document.createElement("a");
    element.href = url;
    element.appendChild(document.createTextNode(text));
    return element;
  } else {
    const element = document.createElement("span");
    element.appendChild(document.createTextNode(text));
    return element;
  }
}
function launchImageCredit(picture) {
  const display = toBool(picture.dataset.tooltipdisplay), authorText = picture.dataset.authorname, sourceText = picture.dataset.sourcename, sourceUrl = picture.dataset.sourceurl, licenceText = picture.dataset.licencetype;
  if (!display || !(authorText || sourceText)) {
    return;
  }
  const wrapper = document.createElement("figure"), button = document.createElement("button"), spanIcon = document.createElement("span"), spanText = document.createElement("span"), label = document.createElement("figcaption"), author = authorText ? createLabel(authorText) : null, source = sourceText ? createLabel(sourceText, sourceUrl) : null, licence = licenceText ? createLabel(licenceText) : null;
  wrapper.className = "wrapper--tooltip__label";
  wrapper.dataset.open = false;
  button.className = "tooltip tooltip--image-credit";
  button.setAttribute("type", "button");
  button.setAttribute(aria$1.expanded, false);
  button.addEventListener("click", () => toggleImageCredit(wrapper), true);
  spanIcon.className = "tooltip__icon icon fa-sharp fa-light fa-subtitles";
  spanIcon.setAttribute(aria$1.hidden, true);
  spanText.className = "sr-only";
  spanText.appendChild(document.createTextNode(openText));
  button.appendChild(spanIcon);
  button.appendChild(spanText);
  label.className = "tooltip__label";
  label.setAttribute("tabindex", -1);
  author && label.appendChild(author);
  author && source && label.appendChild(document.createTextNode(", "));
  source && label.appendChild(source);
  source && licence && label.appendChild(document.createTextNode(" | "));
  licence ? licence.className = "tooltip__label__licence" : null;
  licence && label.appendChild(licence);
  wrapper.appendChild(button);
  wrapper.appendChild(label);
  let cardType = walkDOMCheckClassName(picture);
  if (cardType) {
    (author || source) && cardType.querySelector("a").parentElement.prepend(wrapper);
  } else {
    (author || source) && picture.appendChild(wrapper);
    picture.querySelector("img").classList.add("tooltip__overlay");
  }
}
const tooltipImageCredit = {
  launchFn: launchImageCredit,
  launchQuery: `${className$4}`
};
const className$3 = "copy-link";
function copyIconToClipboard(elem) {
  const copy = elem;
  copy.parentNode.parentNode.style.position = "relative";
  copy.addEventListener("mouseover", (e) => {
    let t = document.createElement("div");
    let link = document.createElement("span");
    let url = window.location.href;
    t.className = "tooltip";
    link.className = "link-copy";
    let textlink = document.createTextNode(url);
    let textnode = document.createTextNode("Copy link");
    t.appendChild(textnode);
    link.appendChild(textlink);
    t.appendChild(link);
    e.target.parentElement.parentElement.appendChild(t);
    e.target.parentElement.parentElement.classList.add("copyLink");
  });
  copy.addEventListener("click", (e) => {
    e.preventDefault();
    let text = e.target.parentElement.parentElement.querySelector(".link-copy");
    let range = document.createRange();
    range.selectNode(text);
    window.getSelection().addRange(range);
    try {
      let successful = document.execCommand("copy");
      let msg = successful ? "successful" : "unsuccessful";
      e.target.parentElement.parentElement.querySelector(".tooltip").textContent = "Link Copied";
      e.target.parentElement.parentElement.querySelector(".tooltip").classList.add(msg);
    } catch (err) {
      throw new Error(e);
    }
    window.getSelection().removeAllRanges();
  });
  copy.addEventListener("mouseout", (e) => {
    e.target.parentElement.parentElement.querySelector(".tooltip").remove();
  });
}
const tooltipSocialShare = {
  launchFn: copyIconToClipboard,
  launchQuery: `.${className$3}`
};
const className$2 = "home-banner--promo";
let prevRatio = 0;
let transitionElemnt;
function takeOver(box) {
  transitionElemnt = box;
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(transitionElemnt);
}
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 60;
  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}
function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.intersectionRatio === 0 ? transitionElemnt.querySelector(".banner-transition-ele").style.position = "absolute" : transitionElemnt.querySelector(".banner-transition-ele").style.position = "fixed";
    } else {
      entry.intersectionRatio === 0 ? transitionElemnt.querySelector(".banner-transition-ele").style.position = "absolute" : transitionElemnt.querySelector(".banner-transition-ele").style.position = "fixed";
    }
    prevRatio = entry.intersectionRatio;
  });
}
const bannerPromo = {
  launchFn: takeOver,
  launchQuery: `.${className$2}`
};
const className$1 = "home-banner__video";
function setAutoPlay(video) {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > screenWidth("mobile")) {
    video.autoplay = true;
    video.play();
  }
}
function createControlButton(video) {
  const urlPlayButton = video.dataset.playButton;
  const urlPauseButton = video.dataset.pauseButton;
  const elButtonWrap = document.createElement("div");
  const elButtonPlay = document.createElement("button");
  const elImgPlay = document.createElement("img");
  const elImgPause = document.createElement("img");
  elImgPlay.src = urlPlayButton;
  elImgPlay.classList.add("button__img--play");
  elImgPlay.setAttribute("alt", "");
  elImgPause.src = urlPauseButton;
  elImgPause.classList.add("button__img--pause");
  elImgPause.setAttribute("alt", "");
  elButtonWrap.classList.add("banner__video__button__wrap");
  elButtonPlay.setAttribute("aria-label", "pause background video");
  elButtonPlay.classList.add("banner__video__button");
  elButtonPlay.appendChild(elImgPlay);
  elButtonPlay.appendChild(elImgPause);
  elButtonWrap.appendChild(elButtonPlay);
  video.insertAdjacentElement("afterend", elButtonWrap);
  togglePlay(video, elButtonPlay);
  elButtonPlay.addEventListener("click", () => {
    if (video.paused || video.ended) {
      video.play().finally(() => togglePlay(video, elButtonPlay));
    } else {
      video.pause();
      togglePlay(video, elButtonPlay);
    }
  });
  const resync = () => togglePlay(video, elButtonPlay);
  video.addEventListener("play", resync);
  video.addEventListener("playing", resync);
  video.addEventListener("pause", resync);
  video.addEventListener("ended", resync);
}
function isActuallyPlaying(v) {
  return !v.paused && !v.ended && v.readyState >= 2;
}
function togglePlay(video, button) {
  if (isActuallyPlaying(video)) {
    button.classList.remove("play");
    button.setAttribute("aria-label", "pause background video");
  } else {
    button.classList.add("play");
    button.setAttribute("aria-label", "play background video");
  }
}
function initBannerVideo(e) {
  setAutoPlay(e);
  createControlButton(e);
}
const initBannerVideo$1 = {
  launchFn: initBannerVideo,
  launchQuery: `.${className$1}`
};
const patterns = [
  accordion,
  addClass,
  chartBarHorizontal,
  cmsEditorWarning,
  feedback,
  menu,
  primaryNavigation,
  secondaryNavigation,
  dropdownMenu,
  paginatedList,
  pagination,
  tabs,
  linkFinder,
  contentSeparator$1,
  imageExpand$1,
  contentFadeIn$1,
  contentSlideUp$1,
  eventForm,
  modal,
  slider,
  carousel,
  keyInformation,
  numberAnimation,
  showMore$1,
  gallery,
  svgPathAnimation,
  backToTop,
  dropdownFilter,
  findUs,
  findUsV25,
  tooltipImageCredit,
  tooltipSocialShare,
  researchApplyCta,
  // video,
  mouseoverGallery,
  initBannerVideo$1,
  bannerPromo
];
function devcorate(elem, param, value) {
  Array.from(elem.querySelectorAll("a")).forEach((anchor) => {
    if (anchor.origin === window.location.origin) {
      const parameters = anchor.search ? parametersToObject(anchor.search) : {};
      parameters[param] = value;
      anchor.href = `${anchor.origin}${anchor.pathname}${objectToParameters(parameters)}${anchor.hash}`;
    }
  });
}
const className = "tabs", panelClassName = className + "__panel", linksClassName = className + "__links";
function accordionize(tabs2) {
  const wrapper = document.createElement("div"), accordion2 = document.createElement("div");
  wrapper.className = "tabs--accordion";
  accordion2.className = "accordion";
  accordion2.id = `accordion${tabs2.dataset.assetid}`;
  accordion2.dataset.allowsingle = "false";
  accordion2.dataset.defaultopen = "true";
  accordion2.dataset.level = tabs2.dataset.level;
  accordion2.dataset.tabs = tabs2.dataset.tabs;
  accordion2.dataset.toggleopen = "true";
  Array.from(tabs2.parentNode.querySelectorAll(`#${tabs2.id} > .${panelClassName}`)).forEach((panel) => {
    const heading = panel.querySelector(`.${panelClassName}__heading`), body = panel.querySelector(`.${panelClassName}__body`), accordionHeading = document.createElement(`h${accordion2.dataset.level}`), accordionSection = document.createElement("div"), accordionWrapper = document.createElement("div");
    accordionHeading.className = "accordion__heading";
    accordionHeading.id = `accordion${tabs2.dataset.assetid}-header${panel.dataset.assetid}`;
    accordionHeading.dataset.tabid = panel.getAttribute(aria$1.labelledBy);
    const accordionHeadingNode = heading.childNodes[0].nodeType;
    accordionHeadingNode === 3 ? accordionHeading.innerText = heading.childNodes[0].nodeValue.trim() : accordionHeading.innerText = heading.childNodes[1].nodeValue.trim();
    accordionSection.className = "accordion__body";
    accordionSection.id = `accordion${tabs2.dataset.assetid}-body${panel.dataset.assetid}`;
    accordionWrapper.className = "wrapper--accordion__body__content";
    accordionWrapper.innerHTML = body.innerHTML;
    accordionSection.appendChild(accordionWrapper);
    appendAll(accordion2, [accordionHeading, accordionSection]);
  });
  tabs2.parentNode.insertBefore(wrapper, tabs2);
  wrapper.appendChild(tabs2);
  wrapper.appendChild(accordion2);
  return accordion2;
}
function prepareAccordionTabs(tabs2) {
  const controls = tabs2.querySelector(`.${linksClassName}`), linkItems = Array.from(controls.querySelectorAll("li")), numberOfTabs = Number.parseInt(tabs2.dataset.mobiletabs);
  if (linkItems.length > numberOfTabs && (!tabs2.dataset.neveraccordion || !tabs2.dataset.neveraccordion === "true")) {
    return accordionize(tabs2);
  } else {
    return null;
  }
}
const edgeVersion = 12;
function tryCatch(f) {
  try {
    return f();
  } catch (e) {
    gaEvent("jsError", "JavaScript error", `Line ${e.lineNumber} – ${e.message}`, `Pattern launch ${e.fileName} (${window.location})`, true);
  }
}
function launchPattern(pattern) {
  if (typeof pattern === "function") {
    tryCatch(pattern);
  } else if (pattern.launchQuery) {
    const {
      launchFn,
      launchQuery
    } = pattern;
    Array.from(document.querySelectorAll(launchQuery)).filter((elem) => elem.className.indexOf(`${launchQuery}-no-js`)).forEach((elem) => tryCatch(() => launchFn(elem)));
  }
}
function accordionizeTabs(root) {
  Array.from(root.querySelectorAll(".tabs")).filter((elem) => elem.className.indexOf(".tabs-no-js")).forEach((elem) => {
    const potential = tryCatch(() => prepareAccordionTabs(elem));
    potential && accordionizeTabs(potential);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    Array.from(document.getElementsByTagName("html")).forEach((html) => {
      let ie = detectIE();
      removeClass(html, "no-js");
      if (ie >= edgeVersion) {
        html.className = (html.className + " js edge").trim();
      } else {
        html.className = (html.className + " js").trim();
      }
    });
    accordionizeTabs(document);
    patterns.forEach(launchPattern);
    const parameters = parametersToObject(location.search);
    parameters["test"] && devcorate(document.querySelector("body"), "test", parameters["test"]);
    parameters["prod"] && devcorate(document.querySelector("body"), "prod", parameters["prod"]);
  }
}, false);
//# sourceMappingURL=main.js.map
