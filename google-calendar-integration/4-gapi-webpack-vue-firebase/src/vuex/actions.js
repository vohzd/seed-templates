import firebase 			  						from "firebase";
import instance 			  						from "../credentials/firebaseConfig.js";
import getters 				  						from "./getters.js";
import state 				    					  from "./state.js";

import { firebaseAction } 					from "vuexfire";

// firebase stuff
const database 				  						= instance.database();
const googleProvider 								= new firebase.auth.GoogleAuthProvider();

export default {
  bindFirebase: firebaseAction(({ bindFirebaseRef }, payload) => {
    bindFirebaseRef(payload.name , payload.ref);
  }),
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
  logFirebaseUserIn({commit, dispatch}, user){
    // https://firebase.google.com/docs/auth/web/google-signin
    let signedFirebaseCredential = googleProvider.credential(user.getAuthResponse().id_token);
    firebase.auth().signInWithCredential(signedFirebaseCredential).then((res) => {
        dispatch("setFirebaseProfileId", res.uid);
      }).catch((err) => {
        console.log(err);
      });
  },
  logGoogleUserIn(){
    gapi.auth2.getAuthInstance().signIn();
  },
  logGoogleUserOut(){
    gapi.auth2.getAuthInstance().signOut();
  },
  setFirebaseProfileId({commit}, id){
    commit("SET_FIREBASE_PROFILE_ID", id);
  }
};
