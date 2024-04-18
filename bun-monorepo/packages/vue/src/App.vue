<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView class="ml" />
</template>

<style scoped>
nav {
  position: absolute;
  left: 0;
  top: 0;
  background: grey;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 5%;
  text-align: center;
}

.ml {
  margin-left: 5%;
}
</style>
