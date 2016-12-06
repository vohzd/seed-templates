import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDs2Wp-XarwiFWuUEDptHkUKRmnkteFw4Q",
	authDomain: "vue-firebase-test-1f8a5.firebaseapp.com",
	databaseURL: "https://vue-firebase-test-1f8a5.firebaseio.com",
	storageBucket: "vue-firebase-test-1f8a5.appspot.com",
	messagingSenderId: "424009185518"
};

export default firebase.initializeApp(config);