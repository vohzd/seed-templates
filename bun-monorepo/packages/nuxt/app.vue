<template>
  <NuxtLayout>
    <!-- loading indicator bugged for now-->
    <!-- https://github.com/nuxt/nuxt/pull/24010 -->
    <!-- <NuxtLoadingIndicator /> -->
    <Breadcrumb />
    <NuxtPage />
    <Toast />
  </NuxtLayout>
</template>

<script>
import("./assets/main.css");
</script>
