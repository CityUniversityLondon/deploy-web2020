const cacheName = "city-web2020", urlsToCache = [
  "/__data/assets/git_bridge/0005/440879/main/js/main.js",
  "/__data/assets/git_bridge/0005/440879/main/css/main.css",
  "/",
  "/404"
];
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", function(event) {
  if (event.request.method === "GET" && event.request.url.indexOf(window.location.origin) === 0) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        const fetchRequest = event.request.clone();
        return fetch(fetchRequest, {
          credentials: "include"
        }).then(function(response2) {
          if (!response2 || response2.status !== 200 || response2.type !== "basic") {
            return response2;
          }
          const responseToCache = response2.clone();
          caches.open(cacheName).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          return response2;
        });
      })
    );
  }
});
//# sourceMappingURL=sw.js.map
