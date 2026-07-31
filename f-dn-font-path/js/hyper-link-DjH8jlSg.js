import { y as flattenObj } from "./util-Z6NqVPyg.js";
function formatFBResponse(json) {
  const details = {};
  details.query = json.question.originalQuery;
  details.inputParameters = json.question.inputParameters;
  details.spell = json.response.resultPacket.spell;
  details.summary = json.response.resultPacket.resultsSummary;
  details.bestBets = json.response.curator.exhibits;
  details.results = json.response.resultPacket.results;
  details.facets = json.response.facets;
  details.extraSearches = json.extraSearches;
  return details;
}
function remove(obj, key) {
  for (let k in obj) {
    if (k === key) {
      delete obj[k];
    } else if (typeof obj[k] === "object") {
      remove(obj[k], key);
    }
  }
}
function hyperLink(query, facet, pageNumber, numberRank) {
  const newStartRank = pageNumber && 1 + (pageNumber - 1) * numberRank;
  let newQuery = JSON.parse(JSON.stringify(query));
  facet && facet.type === "tag" && remove(newQuery, facet.meta);
  const flattenQuery = flattenObj(newQuery);
  return "?" + Object.entries(flattenQuery).filter((key) => {
    let param = Object.values(key);
    if (param[1] === "") {
      return false;
    } else {
      switch (param[0]) {
        case "interacted":
          return false;
        case "num_rank":
          return false;
        case "start_rank":
          return false;
        default:
          return true;
      }
    }
  }).map((key) => {
    let param = Object.values(key);
    if (/fixedParameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(16)) + "=" + encodeURIComponent(param[1]);
    } else if (/fixedFacets/.test(param[0])) {
      return encodeURIComponent(`meta_${param[0].substring(12)}_sand`) + "=" + encodeURIComponent(param[1]);
    } else if (/parameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(11)) + "=" + encodeURIComponent(param[1]);
    }
    switch (param[0]) {
      case "collection":
        return encodeURIComponent(param[0]) + "=" + encodeURIComponent(param[1]);
      case "query":
        return encodeURIComponent(param[0]) + "=" + encodeURIComponent(param[1]);
      case "sortType":
        return encodeURIComponent("sort") + "=" + encodeURIComponent(param[1]);
      case "startRank":
        return encodeURIComponent("start_rank") + "=" + encodeURIComponent(facet ? param[1] : newStartRank);
      case "numRanks":
        return encodeURIComponent("num_rank") + "=" + encodeURIComponent(param[1]);
      default:
        return encodeURIComponent(`meta_${param[0]}_sand`) + "=" + encodeURIComponent(param[1]);
    }
  }).join("&");
}
export {
  formatFBResponse as f,
  hyperLink as h
};
//# sourceMappingURL=hyper-link-DjH8jlSg.js.map
