var cacheName = 'shell-content';
var filesToCache = [
    'css/style.css',
    'js.js',
    'icon/icon.svg'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('serviceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
