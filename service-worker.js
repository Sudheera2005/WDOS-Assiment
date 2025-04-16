const CACHE_NAME = 'my-website-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/console.html',
  '/FAQ.html',
  '/games.html',
  '/peripherals.html',
  '/order.html',
  '/pay.html',
  '/up.html',
  '/product.html',
  '/styles/main.css',
  '/styles/order.css',
  '/script/order.js',
  '/script/product.js',
  '/script/pay.js',
  '/script/game-store.js',
  '/products.json',
  '/favicons/icons/icon-192x192.png',
  '/favicons/icons/icon-512x512.png'
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
