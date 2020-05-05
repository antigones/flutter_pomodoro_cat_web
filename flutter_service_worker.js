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
"assets/LICENSE": "db46e85de418d4f61482d677755ce9ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2e8285eb99afc369c41d60a1cc302008",
"/": "2e8285eb99afc369c41d60a1cc302008",
"main.dart.js": "ffc8021ce66ea73e25237d7687728b4b",
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
