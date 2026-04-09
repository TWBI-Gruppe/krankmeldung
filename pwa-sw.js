// Service Worker – minimale Version für PWA-Installierbarkeit
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
