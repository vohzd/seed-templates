<template lang="html">
  <main class="center">
    <site-logo></site-logo>
    <section class="row mbx">
      <input placeholder="Enter URL" v-model="url"/>
      <button class="mt text-center" @click="handleForm">LET RIP</button>
    </section>
  </main>
</template>

<script>


import SiteLogo from "~/components/logo/SiteLogo.vue";

export default {
  components: {
    SiteLogo
  },
  data(){
    return {
      url: null
    }
  },
  methods: {
  }
}
</script>

<style lang="css">

</style>
