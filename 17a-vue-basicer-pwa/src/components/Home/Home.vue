<template lang="html">
  <section class="main-body">
    <h2>{{ languages[sl].s.home }}</h2>
    <article class="description">
      {{ languages[sl].s.appDesc }}
    </article>
    <router-link to="/settings">{{ languages[sl].s.settings }}</router-link>
  </section>
</template>

<script>
import { mapGetters }               from "vuex";
import moment                       from "moment";

export default {
  computed: {
    ...mapGetters([
      "languages",
      "sl"
    ])
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="css">

</style>
