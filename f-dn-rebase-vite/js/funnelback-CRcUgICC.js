import { c as axiosRequest, z as axios } from "./util-Z6NqVPyg.js";
const baseUrl = "https://city-search.funnelback.squiz.cloud/s", findRootUrl = "/search.json", suggestRootUrl = "/suggest.json", maximumSuggestions = 100, timeout = 3e4;
function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, parameters) {
  const fixedParams = {};
  fixedParameters.forEach((param) => {
    fixedParams[`${param.name}`] = param.value;
  });
  const params = {}, paramsKeys = Object.keys(parameters);
  paramsKeys.forEach((key) => params[key] = parameters[key]);
  const fixedFacetParams = {};
  fixedFacets.forEach((facet) => {
    fixedFacetParams[`meta_${facet.meta}_sand`] = facet.value;
  });
  const facetParams = {}, facetKeys = Object.keys(facets);
  facetKeys.forEach((key) => facetParams[`meta_${key}_sand`] = facets[key]);
  const CancelToken = axios.CancelToken, call = CancelToken.source(), config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    url: findRootUrl,
    timeout,
    params: {
      ...fixedParams,
      ...fixedFacetParams,
      ...facetParams,
      ...params,
      collection,
      num_ranks: numRank,
      query,
      sort: sortType || "",
      start_rank: startRank
    }
  };
  return [axiosRequest(config), call];
}
function suggest(collection, partialQuery) {
  const CancelToken = axios.CancelToken, call = CancelToken.source(), config = {
    baseURL: baseUrl,
    cancelToken: call.token,
    url: suggestRootUrl,
    timeout,
    params: {
      collection,
      partial_query: partialQuery,
      show: maximumSuggestions
    }
  };
  return [axiosRequest(config), call];
}
function finderConfig(url) {
  const config = {
    timeout,
    url
  };
  return axiosRequest(config);
}
export {
  find as a,
  finderConfig as f,
  suggest as s
};
//# sourceMappingURL=funnelback-CRcUgICC.js.map
