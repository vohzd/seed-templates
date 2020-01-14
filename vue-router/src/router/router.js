import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home.vue";
import About from "../components/About.vue";

// define routes
const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: About }
];

// initialise & export Instance
export default new VueRouter({
	mode: "history",
	routes
});
