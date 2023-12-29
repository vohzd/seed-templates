<template>
  <aside>
    <p>hi, i am the toast container</p>
    <p>{{ errorState.statusCode }}</p>
    <p>{{ errorState.data }}</p>
  </aside>
</template>

<script setup lang="ts">
console.log("todo, actually consume this...");
const errorState = useErrorState();

console.log("errorState");
console.log(errorState);
</script>

<style scoped>
aside {
  position: fixed;
  bottom: 0;
  padding: 1em;
}
</style>
