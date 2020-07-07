module.exports = {
  head: {
    title: "archon",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "archon" },
      { hid: "identifier-url", name: "identifier-url", content: "https://archon.vohzd.com" },
      { hid: "title", name: "title", content: "archon" },
      { hid: "abstract", name: "abstract", content: "archon" },
      { hid: "description", name: "description", content: "archon" },
      { hid: "keywords", name: "keywords", content: "archon, vohzd, " },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#b56d82' },
  env: {
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT ? process.env.SERVER_ENDPOINT : "http://localhost:1337"
  },
  build: {
    optimizeCSS: true
  },
  modules: [
    "@nuxtjs/axios"
  ],
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
}
