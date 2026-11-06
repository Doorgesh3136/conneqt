/* Conneqt service worker. Repeat visits and tab changes stop depending on the network.
   Pages: network first, so a published update always arrives. Images, fonts, libraries: cache first.
   CSS and JS carry ?v= in index.html: bump it (and V below) on each publish.
   To switch this off everywhere, replace this file with one that calls self.registration.unregister(). */
var V = 'cq-17';
var CORE = ['index.html', 'assets/css/style.css?v=17', 'assets/js/main.js?v=17', 'assets/vendor/gsap.min.js', 'assets/vendor/ScrollTrigger.min.js', 'assets/vendor/lenis.min.js', 'assets/fonts/fonts.css?v=17', 'assets/img/old-hero.webp'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(CORE); }).catch(function () {}));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// the page sends the full list once it has loaded: fetched one at a time, in the background
self.addEventListener('message', function (e) {
  var list = e.data && e.data.cache;
  if (!list) return;
  e.waitUntil(caches.open(V).then(function (c) {
    return list.reduce(function (p, u) {
      return p.then(function () {
        return c.match(u).then(function (hit) {
          return hit || fetch(u).then(function (res) { if (res.ok) return c.put(u, res); }).catch(function () {});
        });
      });
    }, Promise.resolve());
  }));
});

function store(key, res) {
  if (res && res.ok && res.type === 'basic') {
    var copy = res.clone();
    caches.open(V).then(function (c) { c.put(key, copy); });
  }
  return res;
}

self.addEventListener('fetch', function (e) {
  var r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;

  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(function (res) { return store('index.html', res); }).catch(function () { return caches.match('index.html'); }));
    return;
  }

  if (/\/assets\/(img|fonts|vendor)\//.test(u.pathname)) {
    e.respondWith(caches.match(r).then(function (hit) {
      return hit || fetch(r).then(function (res) { return store(r, res); });
    }));
    return;
  }

  // css and js: answer from cache at once, refresh it behind the scenes
  e.respondWith(caches.match(r).then(function (hit) {
    var net = fetch(r).then(function (res) { return store(r, res); }).catch(function () { return hit; });
    return hit || net;
  }));
});
