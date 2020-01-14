import Vue 					          from "vue";
import VueRouter 			        from "vue-router";

Vue.use(VueRouter);

import Account 								from "../components/Account/Account.vue";
import Home 				      		from "../components/Home/Home.vue";
import Register 							from "../components/Account/Register.vue";
import Login 									from "../components/Account/Login.vue";

// define routes
const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/account", component: Account },
	{ path: "/account/login", component: Login },
	{ path: "/account/register", component: Register }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	mode: "history",
	routes
});
