const CACHE_NAME = 'my-website-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/console.html',
  '/FAQ.html',
  '/games.html',
  '/peripherals.html',
  '/up.html',
  '/styles/main.css',
  '/script/game-store.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});