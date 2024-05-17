// Define the cache name
const CACHE_NAME = 'local-cache';

// List of URLs to cache
const urlsToCache = [
    RegExp("/*")
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Cache all URLs
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache first strategy
                return response || fetch(event.request);
            })
    );
});