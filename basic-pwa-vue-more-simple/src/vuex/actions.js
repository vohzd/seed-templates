import getters 				  						from "./getters.js";
import state 				    					  from "./state.js";

export default {
  setLanguage({ commit }, sl){
    commit("CHANGE_LANGUAGE", sl);
  }
};
