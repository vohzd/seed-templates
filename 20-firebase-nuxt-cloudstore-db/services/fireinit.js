import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//import  firebase from "firebase";

var config = {
  apiKey: "AIzaSyDEsuX5GoFfNhvigGm1uwrjuAUP31bXBZQ",
  authDomain: "cloudstore-c514a.firebaseapp.com",
  databaseURL: "https://cloudstore-c514a.firebaseio.com",
  projectId: "cloudstore-c514a",
  storageBucket: "cloudstore-c514a.appspot.com",
  messagingSenderId: "456301917718"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.firestore();
export default firebase;
/*
firebase.firestore().enablePersistence().then(() => {
  db = firebase.firestore()
  export default firebase;
});
*/
