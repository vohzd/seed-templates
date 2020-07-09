<template>
	<div>
		<h2>It works!!!!</h2>
		<h4>Blank bansheee</h4>
		<button type="button" name="button" v-on:click="handleLogIn" v-if="!isLoggedIn">Log In</button>
		<button type="button" name="button" v-on:click="handleLogOut" v-if="isLoggedIn">Log Out</button>
		<section class="calendar-output">
			
			<ul>
				<li v-for="item in currentEvents">
					
					{{ item.summary }}

				</li>
			</ul>

		</section>
	</div>
</template>

<script>
	/*
	 * libs
	 */
	export default {
		name: "app",
		data() {
			return {
				isLoggedIn: false,
				clientId: "676741884803-9b6bmc8ikuomao1mao397ott9sb73et3.apps.googleusercontent.com",
				apiEndpoint: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
				scopes: "https://www.googleapis.com/auth/calendar.readonly",
				currentEvents: null
			}
		},
		methods: {
			clearEvents(){
				this.currentEvents = null;
			},
			initialiseGoogleClient(){
				gapi.client.init({
					discoveryDocs: this.apiEndpoint,
					clientId: this.clientId,
					scope: this.scopes
				}).then(() => {
					// listen for someone signing in!
					gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateLoggedInStatus);
					// bootstrap an initial sign-in state
					this.updateLoggedInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
				})
			},
			listEvents(){
				gapi.client.calendar.events.list({
			          'calendarId': 'primary',
			          'timeMin': (new Date()).toISOString(),
			          'showDeleted': false, 
			          'singleEvents': true,
			          'maxResults': 10,
			          'orderBy': 'startTime'
			        }).then((response) => {
			        	this.currentEvents = response.result.items;
					});
			},
			handleLogIn(){
				gapi.auth2.getAuthInstance().signIn();
				this.listEvents();
			},
			handleLogOut(){
				gapi.auth2.getAuthInstance().signOut();
				this.clearEvents();
			},
			updateLoggedInStatus(isLoggedIn){
				if (isLoggedIn){
					this.isLoggedIn = true;
					this.handleLogIn()
				}		
				else {
					this.isLoggedIn = false;
				}
			}
		},
		mounted(){
			// initialise the google api
			gapi.load("client:auth2", this.initialiseGoogleClient);
		}
	}
</script>

<style lang="scss">

  $background: #ffffff;
  $fontColour: #3c3838;

  body {
    background: $background;
    color: $fontColour;
  }

  h2 {
    letter-spacing: 12px;
  }

</style>
