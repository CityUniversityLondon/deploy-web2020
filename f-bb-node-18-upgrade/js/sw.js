/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./service-worker/sw.js ***!
  \******************************/


/**
 * Service worker
 *
 * @author Web Development
 * @copyright City, University of London 2018
 */
const cacheName = 'city-web2020',
  urlsToCache = ['/__data/assets/git_bridge/0005/440879/main/js/main.js', '/__data/assets/git_bridge/0005/440879/main/css/main.css', '/', '/404'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(urlsToCache);
  }));
});
self.addEventListener('fetch', function (event) {
  // only cache same sub-domain
  if (event.request.method === 'GET' && event.request.url.indexOf(window.location.origin) === 0) {
    event.respondWith(caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest, {
        credentials: 'include'
      }).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(cacheName).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    }));
  }
});
/******/ })()
;
//# sourceMappingURL=sw.js.map