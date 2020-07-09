
// LIBS
import Vue 								from "vue";
import { sync }						from "vuex-router-sync";

// STORE
import store 							from "./vuex/store.js";

// ROUTER
import router 						from "./router/router.js";

// Combine
sync(store, router);

// CORE
import App 								from "./components/App.vue";

// INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store,
});
