importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "blc",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b3037e43df305280da59.js",
    "revision": "cc98c277e8d3156a4797a8a4ed616b62"
  },
  {
    "url": "/_nuxt/app.d02d98ff414af4f19af4a75d13d92ff3.css",
    "revision": "d02d98ff414af4f19af4a75d13d92ff3"
  },
  {
    "url": "/_nuxt/layouts_default.d7c6ebab44a3737b0e38.js",
    "revision": "47be346ecaae6c83d19350c021cc845a"
  },
  {
    "url": "/_nuxt/manifest.43b1ac4db7cb4f1a9361.js",
    "revision": "570fb8bce1c137978bc443bad01f06a3"
  },
  {
    "url": "/_nuxt/pages_about.afd922584a7beb914714.js",
    "revision": "d769ebbefdf5f92f3795c963c06f6d68"
  },
  {
    "url": "/_nuxt/pages_admin_index.29eb2060f475adf2a1d1.js",
    "revision": "5599bc22d4cf1b1ed6063a1c96928bcf"
  },
  {
    "url": "/_nuxt/pages_admin_items.84f4c3cf5e5a919539c7.js",
    "revision": "a106d2c251a6aa89ad8bd8b63aaacfed"
  },
  {
    "url": "/_nuxt/pages_admin_settings.813ecb14491f381bf509.js",
    "revision": "5a8f2293de4a2f0b40f8f107dddddf60"
  },
  {
    "url": "/_nuxt/pages_admin.5c891b42e909e9b50d13.js",
    "revision": "cc4e95c011711c9e22ac0cb0677690a9"
  },
  {
    "url": "/_nuxt/pages_index.e24a93fee0b69f7dea34.js",
    "revision": "63fa1ac0c404a072738cc82650f68200"
  },
  {
    "url": "/_nuxt/pages_login.56a55351ce73f1b062b2.js",
    "revision": "ed88a77080cbd3e289cebf49f3ca6df7"
  },
  {
    "url": "/_nuxt/vendor.2bcc8649a3ff954f9159.js",
    "revision": "1039b7c276ddccbec0f3b81bacc4cc30"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

