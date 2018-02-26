import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyBDuOYw7jJ0_usWrztMhnHRzaBzaRHcGog",
  authDomain: "badluckcollective-455dc.firebaseapp.com",
  databaseURL: "https://badluckcollective-455dc.firebaseio.com",
  projectId: "badluckcollective-455dc",
  storageBucket: "badluckcollective-455dc.appspot.com",
  messagingSenderId: "72566349632"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
