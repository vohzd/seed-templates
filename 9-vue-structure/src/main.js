// LIBS
import Vue from "vue";
// STORE
import store from "./store/store.js";
// CUSTOM MODULES
import App from "./App.vue";

// INSTANCE
new Vue({
	el: "#app",
	store,
	render: h => h(App)
});
