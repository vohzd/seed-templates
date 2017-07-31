<template lang="html">
  <section class="float">
    <section class="main-content-port">

      <span v-if="isLoggedInToGoogle">
        <section class="profile-messages">
          <h2>User basic profile</h2>
          <span class="welcome-message">
            <div class="col">
              <img class="rounded-profile-pic" v-bind:src="profileImgUrl" alt="" width="90px">
            </div>
            <div class="col">
              <div class="row name">{{ givenName }}</div>
              <div class="row email-address">{{ emailAddress }}</div>
              <button type="button" name="button" v-on:click="logGoogleUserOut">Sign out</button>
            </div>

          </span>
        </section>
      </span>

      <span v-if="!isLoggedInToGoogle">
        <button type="button" name="button" v-on:click="logGoogleUserIn" >Not logged in. Sign in with Google.</button>
      </span>

    </section>
  </section>
</template>

<script>

import { mapGetters }               from "vuex";

export default {
	components: {
	},
	computed: {
    ...mapGetters([
      "isLoggedInToGoogle",
      "emailAddress",
      "givenName",
      "profileImgUrl"
    ])
	},
  methods: {
    logGoogleUserIn(){
      this.$store.dispatch("logGoogleUserIn");
    },
    logGoogleUserOut(){
      this.$store.dispatch("logGoogleUserOut");
      this.$router.push("/login");
    },
  }
}
</script>

<style lang="css">

  .welcome-message {
    width:100%
  }

  .rounded-profile-pic {
    border-radius: 50%;
    margin-right: 32px;
    float: left;
  }

  .welcome-message .name{
    line-height: 40px;
    float: left;
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 0px;
  }

  .welcome-message .email-address{
    float: left;
    font-size: 13px;
  }

  .col {
    float: left;
  }

  .row {
    width: 100%;
    margin-bottom: 40px;
  }
</style>
