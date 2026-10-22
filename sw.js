// Offline support: the app's own files are served from this device's cache, refreshed in the background when online
// (an update shows up the next time the app is opened). Names and check-ins are never cached here; they live in the
// page's localStorage on this device only.
const CACHE = 'entry-check-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'vendor/zxing-library-0.21.3.min.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys()
  .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const fresh = fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  });
  e.waitUntil(fresh.catch(() => {}));
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fresh));
});
