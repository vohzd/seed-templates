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
				googleAPI: new LoadGoogleAPI(gCalAuthCredentials)
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
			updateLoggedInInfo(isLoggedIn){
				if (isLoggedIn){
					this.$store.dispatch("changeGoogleLogInBool", true);
					this.$store.dispatch("changeCurrentUserInfo", gapi.auth2.getAuthInstance().currentUser.get())
				}
				else {
					console.log("ow about here?");
					this.$store.dispatch("changeGoogleLogInBool", false);
				}
			}
		},
		mounted(){
			// add the gapi.js <script> to the DOM via the 'load-google-api' plugin
			// is an async promise
			this.$store.dispatch("isAsyncInProgress", true);
			this.googleAPI.loadGoogleAPI().then(() => {
				this.googleAPI.init().then(() => {
					// set up first run (bootstrap) when webpage first runs
					this.updateLoggedInInfo(gapi.auth2.getAuthInstance().isSignedIn.get());
					// set up a listener for someone signing in in the future
					gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateLoggedInInfo);
					this.$store.dispatch("isAsyncInProgress", false);
				});
			});
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
	}

	.main-content-port {
		padding-top: 16px;
		color: #c8c8c8;
	}

	button {
		outline: none;
		background: rgba(85, 85, 96, 0.1);
		border: none;
		padding: 8px;
		font-family: 'Titillium Web', sans-serif;
		font-size: 18px;
		color: #c8c8c8;
		min-width: 110px;
	}

	button:hover {
		opacity: 0.8;
		cursor: pointer;
	}

</style>
