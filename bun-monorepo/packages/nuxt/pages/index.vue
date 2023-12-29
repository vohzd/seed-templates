<template>
  <main class="center">
    <h1>Cool Website</h1>
    <p>Reactive text: {{ test }}</p>
    <p>
      <nuxt-link to="/account">Go to Account</nuxt-link>
    </p>
  </main>
</template>

<script setup lang="ts">
// import { ref } from '#imports';

const test = ref("some string2");
</script>

<style lang="css">
ul {
  margin-left: 16px;
  margin-bottom: 32px;
}

ul li {
  list-style: square;
  margin-bottom: 4px;
  font-size: 15px;
}
</style>
