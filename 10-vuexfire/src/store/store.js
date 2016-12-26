// LIBS
import Vue from "vue";
import Vuex from "vuex";
import VuexFire from "vuexfire";

// BIND
Vue.use(Vuex);
Vue.use(VuexFire);

export default new Vuex.Store({
  state : {
	 todos: null
  },
  mutations: VuexFire.mutations,
  getters: {
	todos: state => state.todos
  }
})
