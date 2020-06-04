'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "99a117e6993f5a8b39c89237aeb3983c",
"assets/assets/Arimo-Regular.ttf": "9fe23bf225eecfcdb736e063b08a6123",
"assets/assets/cat-relax-about.png": "67a9fb94b0518bb551f7d9d3bb7a1807",
"assets/assets/cat-relax-long.png": "a9a8793b1dcce2daae9a2752cd46d671",
"assets/assets/cat-relax.png": "d259d4c525fdecea42d7a938dae59fb5",
"assets/assets/cat-work.png": "b92c5bf83f6ba9c808c44b4760c24e41",
"assets/assets/goes-without-saying.mp3": "8d94a74cf08c98b8a4be2d10107ab656",
"assets/assets/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/FontManifest.json": "a588f11588c15e5d69c762ee7671a585",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f055eab0ac9d51d3df871145e910ca73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "4daebebff15d7fb0302b954bc22736f6",
"icons/Icon-192.png": "4d24f664e9b52c4fc3cf4b62a82bf8ba",
"icons/Icon-512.png": "e6c2c2034d2223ee4b17e4d05da5c193",
"index.html": "2e8285eb99afc369c41d60a1cc302008",
"/": "2e8285eb99afc369c41d60a1cc302008",
"main.dart.js": "a28779254c4023d3b100cc6b907c3525",
"manifest.json": "7af2fee3bcf987f44ff84b827d37d923"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
