<template lang="html">
  <section>
    <h4>Home</h4>
    <button type="button" v-on:click="signIn">Sign in</button>
    <button type="button" v-on:click="signOut">Sign out</button>
  </section>
</template>

<script>
import { mapActions, mapGetters }               from "vuex";
import moment                                   from "moment";

export default {
  data(){
    return {
    }
  },
  methods: {
    signIn(){
      console.log("signing in..")
      console.log(gapi)
      gapi.auth2.getAuthInstance().signIn();
    },
    signOut(){
      console.log("signing out..")
      gapi.auth2.getAuthInstance().signOut();
    }
  }
}
</script>

<style lang="css">

</style>
