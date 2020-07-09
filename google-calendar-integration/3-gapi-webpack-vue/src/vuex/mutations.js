import state from "./state.js";

export default {
  CHANGE_GOOGLE_LOG_IN_BOOL(state, bool){
    state.isLoggedInToGoogle = bool;
  },
  SET_ASYNC(state, bool){
    state.isAsyncInProgress = bool;
  },
  SET_EMAIL(state, email){
    state.emailAddress = email;
  },
  SET_GIVEN_NAME(state, name){
    state.givenName = name;
  },
  SET_IMAGE_URL(state, url){
    state.profileImgUrl = url;
  },

};
