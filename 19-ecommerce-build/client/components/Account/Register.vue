<template lang="html">
  <section>
    <h1>Make a pact</h1>
    <form>
      <input type="text" placeholder="email" v-model="email"/>
      <input type="text" placeholder="password" v-model="password"/>
      <input type="text" placeholder="name" v-model="name"/>
      <input type="text" placeholder="company name" v-model="companyName"/>
      <button type="button" name="button" v-on:click="register">Go</button>
    </form>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data(){
    return {
      email: null,
      password: null,
      name: null,
      companyName: null
    }
  },
  methods: {
    ...mapActions([
      "registerNewUser"
    ]),
    register(){
      this.registerNewUser({
        table: "users",
        name: this.name,
        email: this.email,
        password: this.password,
        companyName: this.companyName
      })
    }
  }
}
</script>

<style lang="css">
</style>
