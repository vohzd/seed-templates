import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	contacts: [
		{
			name: "Ben"
		},
		{
			name: "Steve"
		}
	]
};

export default new Vuex.Store({
	state,
	mutations: {},
	actions: {},
	getters: {
		contacts: function(state){
			return state.contacts;
		}
	}
});
