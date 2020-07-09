<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import { mapActions, mapGetters }					from "vuex";
	export default {
		data(){
			return {
				...mapGetters([
					"googleClientId",
					"googleEndpoint",
					"googleScope"
				])
			}
		},
		created(){
		 window.loadGoogleAPI = this.loadGoogleAPI;
		},
		methods: {
			initGoogleAPI(){
				gapi.client.init({
					discoveryDocs: this.googleEndpoint(),
					clientId: this.googleClientId(),
					scope: this.googleScope()
				}).then(() => {
					// Listen for sign-in state changes.
					gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
					// Handle the initial sign-in state.
					this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
				});
			},
			loadGoogleAPI(){
				gapi.load('client:auth2', this.initGoogleAPI);
			},
			retreiveAllEvents(){
				gapi.client.calendar.events.list({
					'calendarId': 'primary',
					'timeMin': (new Date()).toISOString(),
					'showDeleted': false,
					'singleEvents': true,
					'maxResults': 10,
					'orderBy': 'startTime'
				}).then((response) => {
					console.log(response)
				});
			},
			updateSigninStatus(bool){
				if (bool){
					this.retreiveAllEvents();
				}
			}
		}
	}
</script>

<style lang="css">
	body {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Titillium Web', sans-serif;
		color: #8c829b;
		background: #ffffff;
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
</style>
