This provides a core, based on Web Components, and the others are dumb wrappers around it for Vue/React/Future Framework

## why not use x?

- i wanted to learn
- i wanted a table component with advanced sorting baked in (not keen on the other ones out there)
- i wanted a sliding component with smoth animations (and also to learn)

#### random thoughts

- HMR support in vite/vue isnt' great, you'll have to reset the page (maybe looka t lit etc to see if you get this for free)
- how well does it bundle for prod (ie when you deploy a vue app)
- what happens when you render this in Playwright, then
- nuxt/ssr support is non-existant (you need the window object)

components available (still actually need to be built)

- datapicker
- calendar
- datatable
- moveable (for epitrade)
- file upload
- button
- toast
- progress
- dropdown
- video player / audio player
- image viewer, with some 'magic' clientside feature detection
- etc etc
