self.addEventListener("install", (e) => {
     e.waitUntil(
          caches.open("bible-web-app").then((cache) => cache.addAll([
               "app-icon.png",
               "index.html",
               "bible.css",
               "bible.js",
               "manifest.json"
          ])),
     );
});

self.addEventListener("fetch", (e) => {
     e.respondWith(
          caches.match(e.request).then((response) => response, fetch(e.request))
     );
});
