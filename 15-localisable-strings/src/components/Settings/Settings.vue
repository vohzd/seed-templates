<template lang="html">
  <section class="main-body">
    <h2>{{ languages[sl].s.settings }}</h2>
    <router-link to="/">{{ languages[sl].s.backButton }}</router-link>

    <form class="margin-top">
      <h4>{{ languages[sl].s.languagePrompt }}</h4>
      <select v-model="currentLanguage">
        <option v-for="l in languages" v-bind:value="l.lang">{{ l.lang }}</option>
      </select>
    </form>
  </section>
</template>

<script>
/*
 * VUEX HELPERS
 */
import { mapActions, mapGetters }               from "vuex";

/*
 * OTHER LIBS
 */
import moment                                   from "moment";

export default {
  computed: {
    ...mapGetters([
      "languages",
      "sl"
    ])
  },
  data(){
    return {
      currentLanguage: this.sl
    }
  },
  methods: {
    ...mapActions([
      "setLanguage"
    ])
  },
  mounted(){
    this.currentLanguage = this.sl;
  },
  watch: {
    currentLanguage(){
      this.setLanguage(this.currentLanguage);
    }
  }
}
</script>

<style lang="scss">

</style>
