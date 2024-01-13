<template>
  <aside>
    <p>{{ errorState.statusCode }}</p>
    <p>{{ errorState.data }}</p>
  </aside>
</template>

<script setup lang="ts">
console.log("todo, actually consume this...");
const errorState = useErrorState();

</script>

<style scoped>
aside {
  position: fixed;
  bottom: 0;
  padding: 1em;
}
</style>
