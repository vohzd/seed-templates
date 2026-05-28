<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <RouterView class="ml" />
  </div>
</template>

<style scoped>
nav {
  background: rgb(225, 225, 225);
  flex-direction: column;
  height: 100%;
  position: fixed;
  width: 128px;
  text-align: center;
}

nav a {
  color: black;
  text-decoration: none;
  display: block;
}

nav a:hover {
  color: rgb(186, 188, 208);
  text-decoration: underline;
}

.layout {
  display: grid;
  grid-template-columns: 128px 9fr;
}

main {
  padding: 0 2%;
}
</style>
