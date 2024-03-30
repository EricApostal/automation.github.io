'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/pack/pack-b916decf37dfb66fc2e122e2b12f84107456fc5b.pack": "51db5bb62a1e866a50cfe186cf41a6e0",
".git/objects/pack/pack-b916decf37dfb66fc2e122e2b12f84107456fc5b.rev": "4a00628d9c0bee7dbc507397b0a3ab75",
".git/objects/pack/pack-b916decf37dfb66fc2e122e2b12f84107456fc5b.idx": "e87fcbea0adbbcf0e1470580abc48af7",
".git/objects/1d/6bc9bc77b26beb9e11b4543db3ab136f7892f4": "442c69bb4d7adb52bbc82dc862041597",
".git/objects/28/a73dac2140769d27a1126d96064a8c04932edc": "80f256b34b0430b41a1cfde903cd6db2",
".git/objects/5c/c87520d24c5828ca8bd57ab2a2165ef762c1c6": "9adba64a77d707a1cc9defad4ec1a0a5",
".git/objects/03/8e5383ff5101272766bd1b64b8e662b1683859": "7ee39e76fc4447004c77ca937eadce83",
".git/objects/b2/e32cd182ce9cb7697f80b8750a725725da145c": "5e8e932ca3eac773509e3469ddc5f1eb",
".git/objects/89/2c6580e4d405cef733fedaf5bcb72d2e269d30": "fa27efe51c667ff0aacd0c2d5f8a7ef8",
".git/objects/fd/72d244d1aaeaf1258891c24318e74536f9040c": "c26e67fb088f30b0f2319cd6cc81c89a",
".git/objects/1b/556f692bb9df5f7104bff199e89122518f670f": "1cfd890fb2eb9f50a3a188eaddc6494d",
".git/objects/c5/5f2d49ec67a51045adca0dd90e3e7f6cbfa881": "10ac8ad252a0d81773d60af848ba37ca",
".git/refs/heads/main": "634ff8cdd3ee1e326727320b930057e9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "634ff8cdd3ee1e326727320b930057e9",
".git/packed-refs": "08b4f5282017750e13e586130ba39a56",
".git/logs/refs/remotes/origin/HEAD": "8a64467454c9f206996ed328c4d9e23f",
".git/logs/refs/remotes/origin/main": "75e818d8c43afd0778de3430f7a4586a",
".git/logs/refs/heads/main": "e3a0bcfd5934e532316040a7505fbea4",
".git/logs/HEAD": "e3a0bcfd5934e532316040a7505fbea4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "9aa3af21adab26bf71e32f82d880733b",
".git/FETCH_HEAD": "dba509ea4eac08acd156c67316843617",
".git/COMMIT_EDITMSG": "40ab054e4355f6ce094278fdc7a52649",
".git/index": "dc4fc88bdf1524d7295e3521e11fee7a",
".git/ORIG_HEAD": "634ff8cdd3ee1e326727320b930057e9",
"CNAME": "e8a4e9994c555fac2140db5eaccde902",
"assets/AssetManifest.bin": "487b938a251823083f2c3dd04518e119",
"assets/AssetManifest.bin.json": "a2ff3647205d66ade4968165e7f969f9",
"assets/AssetManifest.json": "7666f9b5a9fbf65b395070656ac61ad0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "d6408e2115e766be27d6bc5256fb065e",
"assets/assets/images/background.png": "607e96c63f9416d23cfdc5065ebfdffa",
"assets/assets/images/friends.webp": "698cefa50128e443da5feb1f08df21ab",
"assets/assets/images/sodium.webp": "308c2b3b4d858bd0cf67ddaec8b4b1c1",
"assets/assets/images/title.png": "a9235d84ebbeb37805f73f8a44cb0406",
"assets/assets/images/tweaked_terminal.png": "45a334402c8a6e5387631d46bf18e870",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "b4c4529c4f7586076b3587637d200b9e",
"canvaskit/canvaskit.wasm": "ac36137ca53567c23066f405af5f1a53",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "4b5e1acda51607d334a6b6db297743d6",
"canvaskit/chromium/canvaskit.wasm": "55e281dfa26e2671b5bf35bfa44ae7bf",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "46a56eafac6c9138bb705c6f4fc6dbba",
"canvaskit/skwasm.wasm": "e9abf7c8fc9872c7505a2be1f8e3e4f8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7cf84674e4a821dd0d619cc94b7b6744",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "02a54d62ec2fbf19a85f86ff4985558a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/favicon.png": "7cf84674e4a821dd0d619cc94b7b6744",
"index.html": "2870e97b76e2b73a224882fccc497d96",
"/": "2870e97b76e2b73a224882fccc497d96",
"main.dart.js": "3c6e7a64660675b92c26378fd114e67e",
"manifest.json": "961863ec9495c950588feedb575c7158",
"version.json": "536826d89da6f295f4987f1382d743fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
