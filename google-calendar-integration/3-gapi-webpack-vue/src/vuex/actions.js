import getters 				  						from "./getters.js";
import state 				    					  from "./state.js";

export default {
  changeCurrentUserInfo({commit}, user){
    commit("SET_GIVEN_NAME", user.getBasicProfile().getName());
    commit("SET_IMAGE_URL", user.getBasicProfile().getImageUrl());
    commit("SET_EMAIL", user.getBasicProfile().getEmail());
  },
  changeGoogleLogInBool({commit}, bool){
    commit("CHANGE_GOOGLE_LOG_IN_BOOL", bool);
  },
  isAsyncInProgress({commit}, bool){
    commit("SET_ASYNC", bool);
  },
  logGoogleUserIn(){
    gapi.auth2.getAuthInstance().signIn();
  },
  logGoogleUserOut(){
    gapi.auth2.getAuthInstance().signOut();
  }
};
