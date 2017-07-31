import Vue 										from "vue";
import Vuex 									from "vuex";

import { firebaseMutations }  from "vuexfire";
import firebase 							from "firebase";

import state 									from "./state.js";
import myMutations 						from "./mutations.js";
import actions 								from "./actions.js";
import getters 								from "./getters.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations: {
		...myMutations,
		...firebaseMutations
	},
	actions,
	getters
});
