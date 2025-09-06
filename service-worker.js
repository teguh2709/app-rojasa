self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cbp-cache').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});