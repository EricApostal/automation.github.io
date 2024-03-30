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
".git/objects/pack/pack-d0e91ac5143cb65f85549dbdbc8e27efbb04178a.pack": "3d0823943c9fca5bd3eb59d7949588ef",
".git/objects/pack/pack-d0e91ac5143cb65f85549dbdbc8e27efbb04178a.rev": "28e304f6786fc9b69abd19831642eb2b",
".git/objects/pack/pack-d0e91ac5143cb65f85549dbdbc8e27efbb04178a.idx": "767a1a168b5bbecee563e952fa9a63c7",
".git/objects/bb/64372337edbfb25c3c01404209bf04371ee199": "178a650e36a6a98b03f9b33110111991",
".git/objects/e0/f61af2f9389053ecfe4eb6c7ff5db205ed1a30": "c443f8b29e2cc6c14b18cccd7d47d522",
".git/objects/c5/fcc0d37cd397f5b1611550ee06dde880e82f12": "3ecb5374268a2902ec14915ae2a9b887",
".git/objects/ea/af8220d998af4645dca334c4f9943210439795": "01897deacc175b3067e71558f3b12944",
".git/objects/7a/c603a8a7c090719a73fe5ab0b0195dd5a7527c": "0766111dd21499172083a8b3fa453e71",
".git/objects/05/a14ce23235ea66efe5e35f58c18cb5a35be0d5": "92e5b4f468745cd3cf9bb9cdb941174d",
".git/objects/3d/4c78e572f72ebe3f32ccecb16bd1a05799b2a9": "8b487d7aec5f1efe40e3b47175057ce1",
".git/objects/08/0d20395074e26350c67aa3907f90b39c29a821": "a5a3bfc290f1acdfbfc5029eafad5b40",
".git/objects/f7/815f7bab19f7b6884de71b42c7fdc29dfbbfda": "bbb78a40daedbcbac7c4f016b79767ac",
".git/objects/f5/2ff47b7b021064ac0930eba0ff0ff3dde80d30": "3e98be1d9a0c15176d1c46877e392312",
".git/objects/a7/5007ff783606874fce1a55683766a508345ac6": "acbe8c457d819824e2b212dcc07c424b",
".git/objects/0a/9b62d3dfc57c890b6e0d5b0a511c8f5a26a2a9": "383df06f3db24ffcfb96b5c7abf58821",
".git/objects/21/6761675eeb4d81d67a5aed586e2a2fe2184db5": "631b084b77f69ac7a155ba89310001c0",
".git/objects/af/96db92cc7bdb947f53476b994e02005bff77a4": "84648cd18bed99c10fa3657ed89f7fc4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/fb/ebf523fa146d02a16c584737468884c0c3ccff": "eb0c2a80ed56d323b17650bc2fc1ca4d",
".git/objects/aa/30f835e6ac21d420dc8e98cceb0bbf3e6f3687": "ee4ec6eace371a66fe78a223f41a10b2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/f1/61932988e7487a7a82e31ba21168f310b76866": "f1232a8802eadde3a0d0e7db9f329d32",
".git/objects/b1/3c10de4c46ce0344751e8ebd7caeacad2c95f8": "a4b3465c4fab96bf450a6f136eef4136",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/0c/c3a0ad9844447a6a7e3ff6227e4b8200561f05": "fe8c7343d96a017075036d08e038a2d4",
".git/objects/ba/e51714d00a8a59d013a6cd8aa4d592791ede75": "63b6a90844becdbdb95855e285112c7f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/45/d921e5c5b8096e07d0646273c02765203a620f": "ee5bad389f52a8670c149f230cd7af77",
".git/objects/53/83c93704ffca23b78fdfbd934928747aa50d51": "2b6ef76bcc572a7c63b9d539ac0d5812",
".git/objects/19/b130eb34288d312cd747894d3f129ced750721": "8c40f342337985b85e42895072122b24",
".git/objects/e2/cb6488381df0f0f42f29b123c28f97bb2f1158": "59049a561a4e38df70c3f026c8ca860b",
".git/objects/d8/4a05f3a6907c9f23a4d51203223d77e9297525": "1fed07a06d456d2f136ba485c1112c1d",
".git/objects/ed/a0746f0f3be681bb3eb07ba8a8d9bcb3ee53b2": "ec1fc1cd0d28e902de77671dcf08e215",
".git/objects/cb/330ccd348bd6447b4b0d63e5149eb7409fede5": "11726d260f64deac47a9083eea52295b",
".git/objects/95/9115d48a214775b1c793c79fa637f4907b54e9": "28af9a22a3cafd98db25bbe5233764ec",
".git/objects/1b/fbaebfad316884ca55d9feb3adbe161d5d3243": "993fe13103052d38db6474290a89c8d3",
".git/objects/e8/21ba6ddc71d9589e5e95ed18a646d8c9ef6b53": "e4d0c2b7742070fe0f8536e825547939",
".git/objects/55/6bfa4e9a929ef63f0836557254aeaa531d3729": "47d9a9945a63880255054c4a60fe8917",
".git/objects/04/2bbafc0edd813732c88ca325e894b5486f89e3": "fd9d35379497faf3ef82ea0c3f96b3d5",
".git/objects/24/faf30b994ef16a5b0029aa09e78a980d2bc4db": "54bf9a4e67d3432944fd9cdcfb5f7770",
".git/objects/29/d3f8961dec43f5d16b35ce83a45143976e1891": "34cdbae4df78988a8479e115eb9a1751",
".git/objects/ff/e84ee1168cd479603f5b4a2fb603e2e8b5cd4b": "6f8f3ec8503a8c43d62c153f4eeabd28",
".git/refs/heads/main": "59fa60be9c2f107e83d742ba93dde0e6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "59fa60be9c2f107e83d742ba93dde0e6",
".git/packed-refs": "425f6a96d8438119ccc1395a0bee9c6b",
".git/logs/refs/remotes/origin/HEAD": "4939f9b8f7f55ee7774316d1d2c1aeb2",
".git/logs/refs/remotes/origin/main": "6dd03fb29954bc8a3715bfc665fde36d",
".git/logs/refs/heads/main": "25ea96fb0008cb2bff754289a769faca",
".git/logs/HEAD": "25ea96fb0008cb2bff754289a769faca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "9aa3af21adab26bf71e32f82d880733b",
".git/FETCH_HEAD": "0f2e39597198009fb28501964c1e6598",
".git/COMMIT_EDITMSG": "da5a54eb250b154378163bf217766527",
".git/index": "fdb3252451bff456ccd68e8d8f07566e",
".git/ORIG_HEAD": "59fa60be9c2f107e83d742ba93dde0e6",
"CNAME": "e8a4e9994c555fac2140db5eaccde902",
"assets/assets/images/background.png": "607e96c63f9416d23cfdc5065ebfdffa",
"assets/assets/images/friends.webp": "698cefa50128e443da5feb1f08df21ab",
"assets/assets/images/title.png": "a9235d84ebbeb37805f73f8a44cb0406",
"assets/assets/images/sodium.webp": "308c2b3b4d858bd0cf67ddaec8b4b1c1",
"assets/assets/images/tweaked_terminal.png": "45a334402c8a6e5387631d46bf18e870",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "7666f9b5a9fbf65b395070656ac61ad0",
"assets/AssetManifest.bin": "487b938a251823083f2c3dd04518e119",
"assets/AssetManifest.bin.json": "a2ff3647205d66ade4968165e7f969f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "d6408e2115e766be27d6bc5256fb065e",
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
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/favicon.png": "7cf84674e4a821dd0d619cc94b7b6744",
"version.json": "536826d89da6f295f4987f1382d743fa",
"flutter_bootstrap.js": "25d6625c3bfcb71528d9a28432e4aa09",
"index.html": "f6532077976e61fb311c73caf3d2d878",
"/": "f6532077976e61fb311c73caf3d2d878",
"main.dart.js": "6d64f47405c29496dafa735ab64bb75f",
"manifest.json": "961863ec9495c950588feedb575c7158",
"favicon.png": "7cf84674e4a821dd0d619cc94b7b6744"};
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
