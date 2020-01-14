<template lang="html">
  <section>
    <h1>Idiots that were stupid enough to sign up</h1>
    <div v-for="account in accounts">
      {{ account.name }}
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      accounts: [
        { name: "idiot1" },
        { name: "idiot2" }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
