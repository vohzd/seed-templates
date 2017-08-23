import Vue 					          	from "vue";
import VueRouter 			        	from "vue-router";

Vue.use(VueRouter);

import state 										from "../vuex/state.js";

import Map 				        			from "../components/Map/Map.vue";
import About 				          	from "../components/About/About.vue";

// define routes
const routes = [
	{ path: "/", component: Map },
	{ path: "/about", component: About}
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: 'history',
	routes
});;
