import Vue 									from "vue";
import VueRouter 						from "vue-router";

Vue.use(VueRouter);

import ContactsView 				from "../components/Contacts/ContactsView.vue";

// define routes
const routes = [
	{ path: "/", redirect: "/contacts" },
	{ path: "/contacts", component: ContactsView }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	routes
});
