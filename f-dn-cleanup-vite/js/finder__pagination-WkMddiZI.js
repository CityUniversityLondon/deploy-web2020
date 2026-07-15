import { j as jsxRuntimeExports, u as uppercaseFirstLetterLowercaseRest, R as React, w as formatTime, x as formatReactDate, r as reactExports, t as toBool } from "./util-Z6NqVPyg.js";
import { P as PropTypes } from "./index-C9QTewTB.js";
import { h as hyperLink } from "./hyper-link-DjH8jlSg.js";
function Finder__Results__Accommodation(props) {
  const mph = 60, calculateTime = (minutes) => Math.floor(minutes / mph) > 0 ? Math.floor(minutes / mph) + " hour " + minutes % mph : minutes, thumbnail = props.details.listMetadata.thumbnail[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }), level = props.details.listMetadata.level && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "sr-only",
      children: "Level:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: uppercaseFirstLetterLowercaseRest(props.details.listMetadata.level.join("|")).split("|").join(" or ")
    })]
  }), features = Object.keys(props.details.listMetadata).filter((meta) => ["accessible", "catered", "ensuite"].includes(meta) && props.details.listMetadata[meta][0] === "Yes").map((meta) => meta.replace(/ensuite/, "en suite")).sort().join(", "), type = props.details.listMetadata.type && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "sr-only",
      children: "Type:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [props.details.listMetadata.type.length > 2 ? uppercaseFirstLetterLowercaseRest(props.details.listMetadata.type.join("|")).split("|").slice(0, -1).join(", ") + " or " + uppercaseFirstLetterLowercaseRest(props.details.listMetadata.type.join("|")).split("|").slice(-1) : uppercaseFirstLetterLowercaseRest(props.details.listMetadata.type.join("|")).split("|").join(" or "), features && " (" + features + ")"]
    })]
  }), price = props.details.listMetadata.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-pound-sign icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "sr-only",
      children: "Price:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [props.details.listMetadata.price[0], " (", props.details.listMetadata.deposit[0], " deposit)"]
    })]
  }), transport = props.details.listMetadata.transport && /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [" ", "(", calculateTime(props.details.listMetadata.transport[0]), " ", "minutes by public transport)"]
  }), location = props.details.listMetadata.location && props.details.listMetadata.location[0] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "sr-only",
      children: "Distance to"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: `card__details__location card__details__location-${props.details.listMetadata.location[0].trim().replace(" ", "-").toLowerCase()}`,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fas fa-fw fa-location-dot icon",
        "aria-hidden": "true"
      }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: props.details.listMetadata.location[0]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "sr-only",
        children: " campus"
      })]
    })]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: "sr-only",
    children: "Distance to Northampton Square campus:"
  }), distance = props.details.listMetadata.walk && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-walking icon",
      "aria-hidden": "true"
    }), " ", location, /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [calculateTime(props.details.listMetadata.walk[0]), " minutes walk to campus", transport]
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--accommodation",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: [thumbnail, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), distance, type, price, level]
      })]
    })
  });
}
Finder__Results__Accommodation.propTypes = {
  details: PropTypes.object
};
function Finder__Results__CaseStudy(props) {
  const subtitle = props.details.listMetadata.status ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: props.details.listMetadata.status[0]
  }) : props.details.listMetadata.type && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: props.details.listMetadata.type[0]
  }), school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and ")
    })]
  }), department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and ")
    })]
  }), centre = props.details.listMetadata.centre && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Research centre:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.centre.length > 2 ? props.details.listMetadata.centre.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.centre.slice(-1) : props.details.listMetadata.centre.join(", and ")
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--casestudy",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), subtitle, /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), school, department, centre]
      })
    })
  });
}
Finder__Results__CaseStudy.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Centre(props) {
  const school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and ")
    })]
  }), department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and ")
    })]
  }), subject = props.details.listMetadata.related && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: props.details.listMetadata.related.length > 2 ? uppercaseFirstLetterLowercaseRest(props.details.listMetadata.related.join("|")).split("|").slice(0, -1).join(", ") + " and " + uppercaseFirstLetterLowercaseRest(props.details.listMetadata.related.join("|")).split("|").slice(-1) : uppercaseFirstLetterLowercaseRest(props.details.listMetadata.related.join("|")).split("|").join(" and ")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--centre",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), subject, /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), school, department]
      })
    })
  });
}
Finder__Results__Centre.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object
};
function Finder__Results__Contact(props) {
  const department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", props.details.listMetadata.department[0]]
  }), school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", props.details.listMetadata.school[0]]
  }), jobtitle = props.details.listMetadata.jobtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: props.details.listMetadata.jobtitle[0]
  }), email = props.details.listMetadata.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-envelope icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Email:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: "mailto:" + props.details.listMetadata.email[0],
      children: props.details.listMetadata.email[0]
    })]
  }), altemail = props.details.listMetadata.altemail && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fad fa-user icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Executive Assistant:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: "mailto:" + props.details.listMetadata.altemail[0],
      children: props.details.listMetadata.altemail[0]
    })]
  }), telephone = props.details.listMetadata.telephone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-phone fa-rotate-90 icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Telephone:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: "tel:" + props.details.listMetadata.telephone[0],
      children: props.details.listMetadata.friendlytelephone[0]
    })]
  }), room = props.details.listMetadata.room && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-door-open icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Room:"
    }), " ", props.details.listMetadata.room[0]]
  }), enquiry = props.details.listMetadata.enquiryurl && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-edit icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Enquiries:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.listMetadata.enquiryurl[0],
      children: props.details.listMetadata.enquirylabel[0]
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--contact",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), jobtitle, school, department, room, email, telephone, enquiry, altemail]
      })
    })
  });
}
Finder__Results__Contact.propTypes = {
  details: PropTypes.object
};
const formatLabel = (label, value) => {
  if (value) {
    return label;
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
      children: label.split(value).reduce((prev, current, i) => {
        if (!i) {
          return [current];
        }
        return prev.concat(/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "highlightText",
          children: value
        }, value + current), current);
      }, [])
    });
  }
};
const externalSiteUrl = ["www.citystgeorges.ac.uk"];
function Finder__Results__Course(props) {
  const subtitle = props.details.listMetadata.type && props.details.listMetadata.type[0] || props.details.listMetadata.level && props.details.listMetadata.level[0] || null, award = props.details.listMetadata.qualification && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Award", props.details.listMetadata.qualification.length > 1 && "s", ":"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.qualification.join(", ")
    })]
  }), duration = props.details.listMetadata.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fal fa-fw fa-clock icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Duration:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.duration[0]
    })]
  }), method = props.details.listMetadata.method && props.details.listMetadata.level[0] !== "Short courses and professional development" && (props.query.facets && props.query.facets.method || props.query.query.indexOf(props.details.listMetadata.method[0]) >= 0 || props.details.listMetadata.method[0].indexOf("Online") >= 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fa-solid fa-book-open-reader icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Method", props.details.listMetadata.method.length > 1 && "s", " of study:"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: uppercaseFirstLetterLowercaseRest(
        Array.from(new Set(props.details.listMetadata.method)).join("|")
        // Remove any duplicates & format
      ).split("|").join(", ")
    })]
  }), location = String(props.details.listMetadata.location).toLowerCase() !== "tooting" ? props.details.listMetadata.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Location:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.location.join("|") === "Online|Online" ? "Online" : props.details.listMetadata.location.join(", ")
    })]
  }) : null, school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.map((e, i) => i === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
        children: e.replace("and", "&")
      }, i) : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
        children: ["| ", e]
      }, i))
    })]
  }), stGeorgesLabel = String(props.details.listMetadata.location).toLowerCase() === "tooting" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card__label card--course__label--stgeorges",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "fas fa-fw fa-map-marker-alt icon",
        "aria-hidden": "true"
      }), " ", "Tooting Campus"]
    })
  }) : null, clearing = props.details.listMetadata.clearing && ["Yes", "yes"].includes(props.details.listMetadata.clearing[0]) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card__label card--course__label--clearing",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "card__label card--course__label--clearing",
      children: "Clearing"
    })
  }), external = !externalSiteUrl.some((s) => props.details.indexUrl.indexOf(s) >= 0) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [" ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })]
  }) : null, courseCode = props.details.listMetadata.code && (["Undergraduate degree", "Foundation course", "Postgraduate taught degree"].some((s) => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.code) >= 0) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Course code", props.details.listMetadata.code.length > 1 && "s", ":"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.code.join("/")
    })]
  }) : null, entryYears = props.details.listMetadata.entryyears && (["Undergraduate degree"].some((s) => props.details.listMetadata.level.indexOf(s) >= 0) || props.query.query.indexOf(props.details.listMetadata.entryyears) >= 0) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Year", props.details.listMetadata.entryyears.length > 1 && "s", " ", "of entry:"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.entryyears.join("/")
    })]
  }) : null, description = props.details.listMetadata.c && props.details.listMetadata.c[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__description",
    children: props.query.query ? formatLabel(props.details.listMetadata.c[0], props.query.query) : props.details.listMetadata.c[0]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--course",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "wrapper--card__label__details",
        children: [clearing, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "card__details__text",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
            className: "card__heading",
            children: [props.query.query ? formatLabel(props.details.title, props.query.query) : props.details.title, external]
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "card__type",
            children: props.query.query ? formatLabel(subtitle, props.query.query) : subtitle && subtitle
          }), description, stGeorgesLabel, school, award, duration, courseCode, entryYears, method, location]
        })]
      })
    })
  });
}
Finder__Results__Course.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object
};
function formatShortDate(dateString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], date = new Date(dateString), month = months[date.getUTCMonth()];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card--event__label--shortdate",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: date.getUTCDate()
    }), " ", month]
  });
}
function compareDates(startDate, endDate, showTime) {
  const sDate = new Date(startDate), eDate = new Date(endDate), noTimeSDate = new Date(sDate.setUTCHours(0, 0, 0)), noTimeEDate = new Date(eDate.setUTCHours(0, 0, 0)), time = showTime ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [", ", formatTime(startDate), " - ", formatTime(endDate, true)]
  }) : null;
  return noTimeSDate.getTime() === noTimeEDate.getTime() ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__type true",
    children: [formatReactDate(sDate), time]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__type false",
    children: [formatReactDate(sDate), " - ", formatReactDate(eDate), time]
  });
}
function Finder__Results__Event(props) {
  const shortDate = props.details.listMetadata.d && formatShortDate(props.details.listMetadata.d[0]), location = props.details.listMetadata.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw icon fa-map-marker-alt",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Location:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.location.join(", ")
    })]
  }), audience = props.details.listMetadata.audience && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw icon fa-users",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Audience:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: Array.from(new Set(props.details.listMetadata.audience)).map((str) => {
        let capitalized = `${str[0].toUpperCase()}${str.slice(1)}`;
        return capitalized.replace(/-/g, " ");
      }).join("|").split("|").join("; ")
    })]
  }), thumbnail = props.details.listMetadata.thumbnail && /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }), eventStartDate = props.details.listMetadata.d && props.details.listMetadata.d[0], eventEndDate = props.details.listMetadata.d && props.details.listMetadata.d[1], eventLabel = compareDates(eventStartDate, eventEndDate, parseInt(props.details.listMetadata.displayTime && props.details.listMetadata.displayTime[0]));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--event card--landscape",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: [thumbnail, shortDate, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title.replace(/&amp;/g, "&")
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), eventLabel, location, audience]
      })]
    })
  });
}
Finder__Results__Event.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Funding(props) {
  const school = props.details.listMetadata.school && props.query.facets && props.query.facets.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", or " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", or ")
    })]
  }), hardship = props.details.listMetadata.hardship && props.details.listMetadata.hardship[0] === "1" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card--funding__label--hardship",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      children: "Hardship funding"
    })
  }), programme = props.details.listMetadata.programme && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Programme", props.details.listMetadata.programme.length > 2 ? "s" : null, ":"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.programme.length > 2 ? uppercaseFirstLetterLowercaseRest(props.details.listMetadata.programme.join("|")).split("|").slice(0, -1).join(", ") + " or " + uppercaseFirstLetterLowercaseRest(props.details.listMetadata.programme.join("|")).split("|").slice(-1) : uppercaseFirstLetterLowercaseRest(props.details.listMetadata.programme.join("|")).split("|").join(" or ")
    })]
  }), level = props.details.listMetadata.level && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Programme level:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.level.length > 2 ? uppercaseFirstLetterLowercaseRest(props.details.listMetadata.level.join("|")).split("|").slice(0, -1).join(", ") + " or " + uppercaseFirstLetterLowercaseRest(props.details.listMetadata.level.join("|")).split("|").slice(-1) : uppercaseFirstLetterLowercaseRest(props.details.listMetadata.level.join("|")).split("|").join(" or ")
    })]
  }), feestatus = props.details.listMetadata.feestatus && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Fee status:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.feestatus.length > 2 ? props.details.listMetadata.feestatus.slice(0, -1).join(", ") + " or " + props.details.listMetadata.feestatus.slice(-1) : props.details.listMetadata.feestatus.join(" or ")
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--funding",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: [hardship, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title.replace("&amp;", "&")
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__type",
          children: props.details.listMetadata.type[0]
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), level, programme, feestatus, school]
      })]
    })
  });
}
Finder__Results__Funding.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object
};
function Finder__Results__Generic(props) {
  const school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and ")
    })]
  }), department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and ")
    })]
  }), title = props.details.title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
    className: "card__heading",
    children: props.details.title.indexOf("School") >= 0 ? props.details.title.replace("&amp;", "&") : props.details.title
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--generic",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [title, /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), school, department]
      })
    })
  });
}
Finder__Results__Generic.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Module(props) {
  const location = props.details.listMetadata.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Location:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.location[0]
    })]
  }), title = props.details.listMetadata.code ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "card--module__code",
      children: props.details.listMetadata.code[0]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.title
    })]
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.title
    })
  }), school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and ")
    })]
  }), term = props.details.listMetadata.term && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Semester:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.term.length > 2 ? "All year" : props.details.listMetadata.term.join(" or ")
    })]
  }), topic = props.details.listMetadata.related && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: props.details.listMetadata.related.sort().map((topic2, i) => i > 0 ? topic2.toLowerCase() : topic2).join(", ")
  }), specification = props.details.listMetadata.specification && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-file-pdf icon",
      "aria-label": "PDF"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href: props.details.listMetadata.specification[0],
      children: "Download module specification"
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--module",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: title
        }), topic, /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), term, school, location, specification]
      })
    })
  });
}
Finder__Results__Module.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object
};
function Finder__ToolTip(props) {
  const toggleLabel = () => setShow(!show);
  const [show, setShow] = reactExports.useState(false);
  const {
    thumbnailSourceName,
    thumbnailSourceUrl,
    thumbnailAuthorName,
    thumbnailAuthorUrl,
    thumbnailLicenseType,
    thumbnailLicenseUrl,
    displayToolTip
  } = props;
  const labelAuthor = thumbnailAuthorUrl && thumbnailAuthorName ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    href: thumbnailAuthorUrl,
    children: thumbnailAuthorName
  }) : thumbnailAuthorName ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    children: thumbnailAuthorName
  }) : null, labelSource = thumbnailSourceUrl && thumbnailSourceName ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    href: thumbnailSourceUrl,
    children: thumbnailSourceName
  }) : thumbnailSourceName ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    children: thumbnailSourceName
  }) : null, labelLicense = thumbnailLicenseUrl && thumbnailLicenseType ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    href: thumbnailLicenseUrl,
    children: thumbnailLicenseType
  }) : thumbnailLicenseType ? thumbnailLicenseType : null;
  if (displayToolTip && (thumbnailAuthorName || thumbnailSourceName)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", {
      className: "wrapper--tooltip__label",
      "data-open": show,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        className: "tooltip tooltip--image-credit",
        type: "button",
        "aria-expanded": show,
        onClick: toggleLabel,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: `tooltip__icon icon fa-sharp fa-light fa-subtitles ${show ? "fa-xmark" : "fa-subtitles"}`
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "sr-only",
          children: "Show image credit"
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", {
        className: "tooltip__label",
        children: [labelAuthor, " ", labelSource && "/ ", " ", labelSource, " ", labelLicense]
      })]
    });
  } else {
    return null;
  }
}
Finder__ToolTip.propTypes = {
  thumbnailSourceName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbnailSourceUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbnailAuthorName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbnailAuthorUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbnailLicenseType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbnailLicenseUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  displayToolTip: PropTypes.bool
};
function Finder__Results__News(props) {
  const thumbnailSourceName = props.details.listMetadata.thumbnailSourceName && props.details.listMetadata.thumbnailSourceName[0] || false, thumbnailSourceUrl = props.details.listMetadata.thumbnailSourceUrl && props.details.listMetadata.thumbnailSourceUrl[0] || false, thumbnailAuthorName = props.details.listMetadata.thumbnailAuthorName && props.details.listMetadata.thumbnailAuthorName[0] || false, thumbnailAuthorUrl = props.details.listMetadata.thumbnailAuthorUrl && props.details.listMetadata.thumbnailAuthorUrl[0] || false, thumbnailLicenceType = props.details.listMetadata.thumbnailLicenceType && props.details.listMetadata.thumbnailLicenceType[0] || false, thumbnailLicenceUrl = props.details.listMetadata.thumbnailLicenceUrl && props.details.listMetadata.thumbnailLicenceUrl[0] || false, displayToolTip = props.details.listMetadata.thumbnailToolTip && toBool(props.details.listMetadata.thumbnailToolTip[0]);
  const formattedDate = props.details.listMetadata.d && formatReactDate(new Date(props.details.listMetadata.d[0])), dateString = props.details.listMetadata.d && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "card__type",
    children: formattedDate
  }), hashtags = props.details.listMetadata.hashtagtext && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fad fa-fw fa-hashtag icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Hashtag", props.details.listMetadata.hashtagtext.length > 1 && "s", ":"]
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.hashtagtext.join(", ")
    })]
  }), thumbnail = props.details.listMetadata.thumbnailTiny && props.details.listMetadata.thumbnailTiny[0] && props.details.listMetadata.thumbnailMax && props.details.listMetadata.thumbnailMax[0] && props.details.listMetadata.thumbnailMobile && props.details.listMetadata.thumbnailMobile[0] ? /* @__PURE__ */ jsxRuntimeExports.jsxs("picture", {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("source", {
      srcSet: props.details.listMetadata.thumbnailTiny[0],
      media: "(max-width: 375px)"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("source", {
      srcSet: props.details.listMetadata.thumbnailMax[0],
      media: "(min-width: 3840px)"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
      src: props.details.listMetadata.thumbnailMobile[0],
      alt: props.details.title
    })]
  }) : props.details.listMetadata.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
    src: props.details.listMetadata.thumbnail[0],
    alt: "",
    className: "card__thumbnail"
  }) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
    className: "card card--news",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Finder__ToolTip, {
      thumbnailSourceName,
      thumbnailSourceUrl,
      thumbnailAuthorName,
      thumbnailAuthorUrl,
      thumbnailLicenceType,
      thumbnailLicenceUrl,
      displayToolTip
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: props.details.liveUrl,
      className: "card__anchor card__details",
      children: [thumbnail, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [dateString, /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), hashtags]
      })]
    })]
  });
}
Finder__Results__News.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Profile(props) {
  const school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", props.details.listMetadata.school[0].replace("and", "&")]
  }), department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", props.details.listMetadata.department[0]]
  }), headshot = props.details.listMetadata.thumbnail && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "card__thumbnail",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "Photo of " + props.details.title
    })
  }), EDIAmbassadors = props.details.listMetadata.ediAmbassador && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-people-roof icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "EDI Ambassador"
    })]
  }), thumbnailExist = props.details.listMetadata.thumbnail && "card--profile--thumbnailAvailable", country = props.query.facets && props.query.facets.country && props.details.listMetadata.country && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fad fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Country:"
    }), " ", props.details.listMetadata.country.length > 2 ? props.details.listMetadata.country.slice(0, -1).join(", ") + " and " + props.details.listMetadata.country.slice(-1) : props.details.listMetadata.country.join(" and ")]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--profile",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
      href: props.details.liveUrl,
      className: `card__anchor card__details ${thumbnailExist}`,
      children: [headshot, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card__heading",
          children: props.details.title
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__type",
          children: props.details.listMetadata.jobtitle && props.details.listMetadata.jobtitle[0]
        }), school, department, country, EDIAmbassadors]
      })]
    })
  });
}
Finder__Results__Profile.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object
};
function Finder__Results__Research(props) {
  const school = props.details.listMetadata.school && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "School:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + " and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(" and ")
    })]
  }), department = props.details.listMetadata.department && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Department:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + " and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(" and ")
    })]
  }), centre = props.details.listMetadata.researchCentre && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.researchCentre.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Research centres: "
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Research centre: "
    })]
  }), academic = props.details.listMetadata.academic && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-chalkboard-teacher icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.academic.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Academics: "
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Academic: "
    })]
  }), student = props.details.listMetadata.student && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "fas fa-fw fa-users icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.student.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Students: "
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Student: "
    })]
  }), degree = props.details.listMetadata.relatedDegree && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-diploma icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.relatedDegree.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Related degrees: "
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Related degree: "
    })]
  }), status = props.details.listMetadata.status && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-hourglass icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Status:"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: [props.details.listMetadata.status[0], " "]
    }), props.details.listMetadata.status[0] === "Completed project" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-check-circle icon",
      "aria-hidden": "true"
    }) : null]
  }), site = props.details.listMetadata.site && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    className: "card__tag",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "far fa-fw fa-globe icon",
      "aria-hidden": "true"
    }), " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        href: props.details.listMetadata.site,
        children: "View case study site"
      })
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "card card--research",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "card__details",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "card__details__text",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
          className: "card--research__title-link",
          children: props.details.title
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "card__description",
          children: props.details.listMetadata.c && props.details.listMetadata.c[0]
        }), school, department, centre, degree, academic, student, status, site]
      })
    })
  });
}
Finder__Results__Research.propTypes = {
  details: PropTypes.object
};
function Finder__Results__Card(props) {
  switch (props.type) {
    case "accommodation":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Accommodation, {
        details: props.details
      });
    case "casestudy":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__CaseStudy, {
        details: props.details
      });
    case "centre":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Centre, {
        details: props.details,
        query: props.query
      });
    case "contact":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Contact, {
        details: props.details,
        query: props.query
      });
    case "course":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Course, {
        details: props.details,
        query: props.query
      });
    case "event":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Event, {
        details: props.details
      });
    case "funding":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Funding, {
        details: props.details,
        query: props.query
      });
    case "module":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Module, {
        details: props.details,
        query: props.query
      });
    case "news":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__News, {
        details: props.details
      });
    case "profile":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Profile, {
        details: props.details,
        query: props.query
      });
    case "research":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Research, {
        details: props.details,
        query: props.query
      });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Finder__Results__Generic, {
        details: props.details
      });
  }
}
Finder__Results__Card.propTypes = {
  details: PropTypes.object,
  query: PropTypes.object,
  type: PropTypes.string
};
function Finder__Pagination(props) {
  const numberOfPages = Math.ceil(props.totalMatching / props.numRanks), currentPage = Math.ceil(props.currStart / props.numRanks), pages = [];
  const changePage = (pageNumber) => {
    const newStartRank = 1 + (pageNumber - 1) * props.numRanks, newQuery = props.query;
    newQuery.startRank = newStartRank;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  pages.push(currentPage === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: "pagination__controls__button--prev",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Previous page"
    })
  }, "previousPage") : /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    className: "pagination__controls__button--prev",
    onClick: (e) => {
      e.preventDefault();
      changePage(currentPage - 1);
    },
    href: hyperLink(props.query, null, currentPage - 1, props.numRanks),
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
      children: ["Previous page ", currentPage]
    })
  }, "prev"));
  for (let page = 1; page <= numberOfPages; page++) {
    let className;
    switch (page - numberOfPages) {
      case 0:
        className = "pagination__controls__element pagination__controls__button pagination__controls__button--last";
        break;
      case -1:
        className = "pagination__controls__element pagination__controls__button pagination__controls__button--penultimate";
        break;
      default:
        className = "pagination__controls__element pagination__controls__button";
    }
    pages.push(/* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      "aria-current": page === currentPage ? "page" : null,
      "aria-expanded": page === currentPage ? true : false,
      "aria-label": `Open page ${page}`,
      className,
      "data-page": page,
      "data-proximity": Math.abs(page - currentPage),
      disabled: page === currentPage ? true : false,
      onClick: (e) => {
        e.preventDefault();
        changePage(page);
      },
      href: hyperLink(props.query, null, page, props.numRanks),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: page
      })
    }, page));
    if (page === 1) {
      pages.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          children: "…"
        })
      }, "firstEllipsis"));
    } else if (page === numberOfPages - 1) {
      pages.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          children: "…"
        })
      }, "lastEllipsis"));
    }
  }
  pages.push(currentPage === numberOfPages ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: "pagination__controls__button--next",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Next page"
    })
  }, "nextPage") : /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    className: "pagination__controls__button--next",
    disabled: currentPage === numberOfPages ? true : false,
    onClick: (e) => {
      e.preventDefault();
      changePage(currentPage + 1);
    },
    href: hyperLink(props.query, null, currentPage + 1, props.numRanks),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: "Next page"
    })
  }, "next"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "pagination__wrapper",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
      className: "pagination__controls",
      "data-pagecount": numberOfPages,
      children: pages
    })
  });
}
Finder__Pagination.propTypes = {
  currStart: PropTypes.number,
  query: PropTypes.object,
  numRanks: PropTypes.number,
  totalMatching: PropTypes.number,
  update: PropTypes.object
};
export {
  Finder__Pagination as F,
  Finder__Results__Card as a
};
//# sourceMappingURL=finder__pagination-WkMddiZI.js.map
