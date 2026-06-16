// Service worker minimale per Casa Vista Mare - Prenotazioni
// Serve SOLO a rendere installabile la PWA.
// NON mette nulla in cache: ogni richiesta va sempre alla rete,
// cosi' i prezzi e i dati sono sempre aggiornati.

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  // Passa sempre tutto alla rete, niente cache
  e.respondWith(fetch(e.request));
});
