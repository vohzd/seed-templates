import Vue 					          	from "vue";
import VueRouter 			        	from "vue-router";

Vue.use(VueRouter);

import state 										from "../vuex/state.js";

import Calendar 				        from "../components/Calendar/Calendar.vue";
import Profile 				          from "../components/Profile/Profile.vue";
import Loading 				          from "../components/Loading.vue";
import Login 				          	from "../components/Login.vue";

// navigation guards
const requireAuth = (to, from, next) => {
	if (!state.isLoggedInToGoogle){
		next("/login")
	}
	else {
		next()
	}
}

// define routes
const routes = [
	{ path: "/", redirect: "/profile" },
	{ path: "/calendar", component: Calendar, beforeEnter: requireAuth},
	{ path: "/profile", component: Profile, beforeEnter: requireAuth },
	{ path: "/loading", component: Loading} ,
	{ path: "/login", component: Login}
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: 'history',
	routes
});;
