<template>
  <nav aria-label="breadcrumb" class="center mt">
    <nuxt-link :to="breadcrumb.url" v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
      /{{ breadcrumb.label }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split("/").filter((path) => path);

  const breadcrumbs = pathSegments.map((segment, index) => ({
    label: segment,
    url: `/${pathSegments.slice(0, index + 1).join("/")}`,
  }));

  breadcrumbs.unshift({ label: "home", url: "/" });

  return breadcrumbs;
});
</script>

<style scoped>
a {
  color: grey;
}
.breadcrumb-item {
  text-transform: lowercase;
}
</style>
