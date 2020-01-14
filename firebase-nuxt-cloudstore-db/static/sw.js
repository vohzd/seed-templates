importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "blc",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.3c629c0811fc3875f22b.js",
    "revision": "63117204f23804a964109ee1633b9191"
  },
  {
    "url": "/_nuxt/app.d02d98ff414af4f19af4a75d13d92ff3.css",
    "revision": "d02d98ff414af4f19af4a75d13d92ff3"
  },
  {
    "url": "/_nuxt/layouts_default.969880aa0f836e40117d.js",
    "revision": "f954b43eb763280bd2da2ef8554a2a03"
  },
  {
    "url": "/_nuxt/manifest.f8a3dfdc15ea4a105c14.js",
    "revision": "84a824a80a964b7c7457c9f64839cb9d"
  },
  {
    "url": "/_nuxt/pages_about.311bf586b36a6eb9fff4.js",
    "revision": "222fa75b402d8d5445086481bfaa52d6"
  },
  {
    "url": "/_nuxt/pages_admin_index.21c60cb99c2428497f8d.js",
    "revision": "9a7c3e1e733a5c684c6bf26ee91d1fa5"
  },
  {
    "url": "/_nuxt/pages_admin_items.3c75c6ce8b5434f267b0.js",
    "revision": "cf718779e0539c56bd96a36f98c37226"
  },
  {
    "url": "/_nuxt/pages_admin_settings.3123169f925146af7549.js",
    "revision": "1cfc888fdf1c3aacb0ea3896d30d901e"
  },
  {
    "url": "/_nuxt/pages_admin.18f359aa7d143ebd5d28.js",
    "revision": "76799c98e727832bb29b61979e26fa8f"
  },
  {
    "url": "/_nuxt/pages_index.2c797c521a735c75d8f9.js",
    "revision": "e8a56d3d5821235e03c249ae9a8225b3"
  },
  {
    "url": "/_nuxt/pages_login.90ba4bff94c78981769c.js",
    "revision": "ee9ae228fca80bb8310c2a672150b16e"
  },
  {
    "url": "/_nuxt/vendor.d197fa78df27135c9143.js",
    "revision": "ea9f2b3f121675aa6979992d2c96f09f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

