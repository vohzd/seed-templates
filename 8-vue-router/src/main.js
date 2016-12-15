import Vue from "vue";
import router from "./router/router.js";
import App from "./components/App.vue";

// CORE INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
	router
})
