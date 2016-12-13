// LIBS
import Vue from "vue";

// CUSTOM MODULES
import App from "./App.vue";

// INSTANCE
new Vue({
	el: "#app",
	component: {
		app: App
	},
	render: h => h(App)
});
