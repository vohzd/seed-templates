module.exports = {
  head: {
    title: "Toucant Collaborative Music Shoppe",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Toucant Up the Volume - Collaborative Music Shoppe & Upload service" },
      { hid: "identifier-url", name: "identifier-url", content: "https://www.toucant.com" },
      { hid: "title", name: "title", content: "Toucant" },
      { hid: "abstract", name: "abstract", content: "Toucant Up the Volume" },
      { hid: "description", name: "description", content: "Organise" },
      { hid: "keywords", name: "keywords", content: "toucant, gaming, vohzd, side project, music, upload, stream, sharing, collaborate" },
      { hid: "author", name: "author", content: "vohzd" },
      { hid: "language", name: "language", content: "EN" },
      { hid: "robots", name: "robots", content: "All" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  env: {
    bucketName: "mono",
    fileServerEndpoint: "https://files.apps.epitrade.io",
    serverEndpoint: process.env.IS_DEV ? "http://localhost:1337" : "https://mono.apps.epitrade.io"
  },
  loading: { color: '#b56d82' },
  modules: [
    "@nuxtjs/axios"
  ],/*
  plugins: [
    {
      src: "~/plugins/apex.js",
      ssr:  false
    }
  ],*/
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  }
}
