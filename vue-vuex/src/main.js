// LIBS
import Vue from "vue";

// VUEX STORE
import store from "./store/store.js";

// MAIN MODULE
import App from "./App.vue"

// CORE INSTANCE
new Vue({
	el: "#app",
	store,
	render: h => h(App)
})
