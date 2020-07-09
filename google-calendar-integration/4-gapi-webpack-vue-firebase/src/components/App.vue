<template>
	<div>
		<header-nav></header-nav>
		<router-view class="main-viewport"></router-view>
	</div>
</template>

<script>
	/*
	 * libs
	 */
	import { mapGetters }					from "vuex";

	import LoadGoogleAPI 					from "load-google-api";
	import gCalAuthCredentials		from "../credentials/googleCalendarAuth.json";

	import Header 								from "./Header.vue";

	export default {
		data() {
			return {
				googleAPI: new LoadGoogleAPI(gCalAuthCredentials),
				googleAuth: null
			}
		},
		name: "app",
		components: {
			"header-nav": Header,
		},
		computed: {
			...mapGetters([
				"isLoggedInToGoogle",
				"isAsyncInProgress"
			])
		},
		methods: {
			initialiseGoogleAPI(){
				// add a lock variable to the state so i can show a loading page
				this.$store.dispatch("isAsyncInProgress", true);
				// add the gapi.js <script> to the DOM via the 'load-google-api' plugin
				this.googleAPI.loadGoogleAPI().then(() => {
					// once added, initialise the google api with my key's etc (found in googleCalendarAuth.json) further reading: https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparam
					let blar = gapi.load('calendar', 'V3', (ar) => {
						console.log("callback")
						console.log(ar)
					})
					/*
					this.googleAPI.init("calendar", "v3").then((cb) => {

						// save the GoogleAuth instance https://developers.google.com/identity/sign-in/web/reference#gapiauth2getauthinstance
						this.googleAuth = gapi.auth2.getAuthInstance();
						// success! set up first run (bootstrap) when webpage first runs
						this.updateLoggedInInfo(this.googleAuth.isSignedIn.get());
						// set up a listener for sign in state change occuring in the future
						this.googleAuth.isSignedIn.listen(this.updateLoggedInInfo);
						// close the lock
						this.$store.dispatch("isAsyncInProgress", false);
					});
					*/
				});
			},
			updateLoggedInInfo(isLoggedIn){
				if (isLoggedIn){
					this.$store.dispatch("changeGoogleLogInBool", true);
					this.$store.dispatch("changeCurrentUserInfo", gapi.auth2.getAuthInstance().currentUser.get());
					this.$store.dispatch("logFirebaseUserIn", gapi.auth2.getAuthInstance().currentUser.get())
				}
				else {
					this.$store.dispatch("changeGoogleLogInBool", false);
				}
			}
		},
		mounted(){
			this.initialiseGoogleAPI();
		},
		watch: {
			isLoggedInToGoogle(){
				// to redirect after a successful log in
				if (!this.isLoggedInToGoogle){
					this.$router.push("login");
				}
				if (this.isLoggedInToGoogle){
					this.$router.push("profile");
				}
			},
			isAsyncInProgress(){
				// on slower browsers like firefox, to ensure that the user is given feedback that somethings actually happening when the page is first opened
				// firefox will retreive the state, but takes ages
				if (this.isAsyncInProgress){
					this.$router.push("loading")
				}
				else {
					this.$router.push("profile")
				}
			}
		}
	}
</script>

<style >

	html {
		margin: 0;
		padding: 0;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Titillium Web', sans-serif;
		color: #8c829b;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		background: #221d2a;
		font-size: 18px;

	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
		font-weight: normal;
		margin-bottom: 16px;
	}

	a {
		color: #9d7660;
		text-decoration: none;
	}

	a:hover{
		color: #82718e;
	}

	span {
		width: 100%;
		float: left;
	}

	h2 {
		margin-bottom: 32px;
		font-size: 22px;
		font-weight: normal;
	}


	.main-viewport {
		float: left;
		padding: 16px;
		width: 100%;
	}

	.main-content-port {
		padding-top: 16px;
		color: #c8c8c8;
	}

	button, input {
		outline: none;
		background: rgba(85, 85, 96, 0.1);
		border: none;
		padding: 8px;
		font-family: 'Titillium Web', sans-serif;
		font-size: 18px;
		color: #c8c8c8;
		float: left;
		width: calc(100% - 16px);
		margin-bottom: 16px;
	}

	input[type="text"]{
		width: calc(100% - 32px);

	}

	button:hover {
		opacity: 0.8;
		cursor: pointer;
	}

</style>
