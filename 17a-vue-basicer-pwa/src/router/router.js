import Vue 					          		from "vue";
import VueRouter 			        		from "vue-router";

Vue.use(VueRouter);

import state 											from "../vuex/state.js";

import Home 				        			from "../components/Home/Home.vue";
import Settings 				          from "../components/Settings/Settings.vue";

// define routes
const routes = [
	{ path: "/", component: Home },
	{ path: "/settings", component: Settings}
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: 'history',
	routes
});;
