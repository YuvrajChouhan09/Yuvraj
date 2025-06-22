// service-worker.js

const CACHE_NAME = 'yuvraj-site-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './profile.ico',
  './manifest.json',
  './image.webp', // your Open Graph image
  './style.css',  // only if you use a separate CSS file
  './script.js'   // only if you use a separate JS file
];

// Install: cache files
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching site assets');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch: respond with cached assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[Service Worker] Removing old cache:', key);
          return caches.delete(key);
        })
      );
    })
  );
});
