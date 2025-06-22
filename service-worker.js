const CACHE_NAME = 'yuvraj-site-cache-v1';
const urlsToCache = [
  '/Yuvraj/',
  '/Yuvraj/index.html',
  '/Yuvraj/profile.ico',
  '/Yuvraj/profile-192x192.png',
  '/Yuvraj/image.webp',
  '/Yuvraj/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
