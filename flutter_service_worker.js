'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1a93d8e9a7673d87f7afdf413ef3aaa2",
"assets/assets/audio/option_selected.mp3": "f39fae575424a06b1d1cbbda76c3a52f",
"assets/assets/audio/result_error.mp3": "38245c337ba2d0ead309ceb416b750e7",
"assets/assets/audio/result_success.mp3": "68a9675c88a1b5b181ca99a2b3a59a3f",
"assets/assets/book.json": "892fbdaf1acbfa4ea9af8d42dc09c4e6",
"assets/assets/check-animation.json": "91ada86935d1379465880f771b958835",
"assets/assets/cry-animation.json": "a9a6b7e30c0f00c847c510284013476e",
"assets/assets/fonts/DINRoundPro-Black.eot": "c414db17cef39894d02bc55497f85c5f",
"assets/assets/fonts/DINRoundPro-Black.ttf": "a4266e818fbb49627dfdfc4e6d4369d6",
"assets/assets/fonts/DINRoundPro-Black.woff": "6c69059392a61ad04cd03fe696e4387e",
"assets/assets/fonts/DINRoundPro-Black.woff2": "d5070d8643d2b2d69a9bd5528ca11d9e",
"assets/assets/fonts/DINRoundPro-Bold.eot": "880ebfe197654a279d6ddd37fa68701a",
"assets/assets/fonts/DINRoundPro-Bold.ttf": "83b6c339abcd44863b8954083d8adab9",
"assets/assets/fonts/DINRoundPro-Bold.woff": "f807191f33be2caa2c0e5f4a70c3c621",
"assets/assets/fonts/DINRoundPro-Light.eot": "c6a6d4bb89d967cd40183929a54131e1",
"assets/assets/fonts/DINRoundPro-Light.ttf": "f11dff1e00b464fc08211c672c37b194",
"assets/assets/fonts/DINRoundPro-Light.woff": "76741177e3b65a919ae88ede0d8a5ab4",
"assets/assets/fonts/DINRoundPro-Light.woff2": "dfe8c56912ef12fe305660104dd13749",
"assets/assets/fonts/DINRoundPro-Medi.eot": "f95c1121392165fa6d28e0cf88a9e0c6",
"assets/assets/fonts/DINRoundPro-Medi.ttf": "a6128cfe3e0a95657c198ac972d3f762",
"assets/assets/fonts/DINRoundPro-Medi.woff": "c2a41586596195644a9a292bfb1c3e6b",
"assets/assets/fonts/DINRoundPro-Medi.woff2": "66ace594d91540f625e150b5147425af",
"assets/assets/fonts/DINRoundPro.eot": "0c9e7f82e2850165c2a79dac141bb1ed",
"assets/assets/fonts/DINRoundPro.ttf": "3d3084224db6045a3f2c4d9cd4ce4938",
"assets/assets/fonts/DINRoundPro.woff": "3801b585ae001206739456e19c4e7f05",
"assets/assets/fonts/DINRoundPro.woff2": "e9eda69a85a8bd28ae09c57b3c2437ad",
"assets/assets/icon.webp": "4089173cf48a8176561ff43034966170",
"assets/assets/images/bg-tudy.png": "7d7f53e44b38d074239b82194e43b4f2",
"assets/assets/images/faceook.png": "846bc24ee00fd43a99c8b8f7885672f8",
"assets/assets/images/gmail.png": "ba49e3ddd17700d9c722716aaba14d12",
"assets/assets/images/iconClose.png": "74a818df05a8fe6a2736b187707c8b8c",
"assets/assets/images/iconShare.png": "df7a8a156e329a5590b8cd5c65d2a456",
"assets/assets/images/level-advanced.png": "1b7c8be188a5932e0049574e01b7ff44",
"assets/assets/images/level-basic.png": "3c87179d6fb5d935f734c4f9aa3bf064",
"assets/assets/images/level-intermediate.png": "0e05ace9094f85378945a070d82228e4",
"assets/assets/images/linkedin.png": "d25c2bcb2a246423ce73b22e731c5183",
"assets/assets/images/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/assets/launch.json": "dea5d7bf1691cf8ac70a32de99e6b086",
"assets/assets/like-button.json": "55766ce491b544771891b7e46ba6a39b",
"assets/assets/paisaje.jpg": "84fb0e90a62f860bef6c8ee66aa9e9f5",
"assets/assets/party.json": "733c92d9b07b46851bf54a63a857fbb3",
"assets/assets/question1.txt": "9d3e491aa0913d70857b2fcac57472a9",
"assets/assets/question2-simulacro.txt": "207538f0f1a84659b99bb2549284ee5f",
"assets/assets/question3-simulacro.txt": "baf17c6e344a822555e5bc17fda32f80",
"assets/assets/sad-animation.json": "208fca215dddd3c2b8b2d383482f1633",
"assets/assets/sad.json": "a479898cd7b3b6f3c2453cc312f128f2",
"assets/FontManifest.json": "d04b77f58fc2841b251599a947e18e51",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a4de9287e2be0508c4fc454ee1d352eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_facebook_auth.js": "fb98ee71ad259a073656421dcf0dca82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7b88be1bdab1a408ca42e4f7bf67d0ff",
"/": "7b88be1bdab1a408ca42e4f7bf67d0ff",
"main.dart.js": "1a46a9e6d3505b28e0bcedc1ef43e42b",
"manifest.json": "97fbeb290d61396a8ef1b76464b840a2",
"version.json": "4cb3a72487623fa1e82079bbaadc2edb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
