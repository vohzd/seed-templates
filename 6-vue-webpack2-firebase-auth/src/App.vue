<template>

	<main>

		<h4>firebase app</h4>
		<button v-on:click="signInWithGoogle">{{ isGuest ? "Sign in with Google" : "Go to Guest browsing" }}</button>

		<section class="welcome">
			<h4>{{ getWelcomeMessage }}</h4>
		</section>

	</main>

</template>

<script>
	import firebase from "firebase";
	import instance from "./components/firebaseConfig.js";
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	export default {
		name: "app",
		methods: {
			signInWithGoogle(){
				firebase.auth().signInWithPopup(googleProvider).then((result) => {
					this.username = result.user.displayName;
					this.isGuest = !this.isGuest;
				});
			}
		},
		data () {
			return {
				isGuest: true,
				username: ""
			}
		},
		computed: {
			getWelcomeMessage(){
				return this.isGuest ? "Hi Guest" : `Hi ${this.username}`;
			}
		}
	}

</script>

<style>

body
{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 20px;
}

h1, h2 
{
	font-weight: normal;
}

ul 
{
	list-style-type: none;
	padding: 0;
}

li 
{
	display: inline-block;
	margin: 0 10px;
}

a 
{
	color: #42b983;
}

</style>
