<template>
  <main class="center">
    <h1>dashboard</h1>

    <p>
      Bacon ipsum dolor amet prosciutto frankfurter swine porchetta rump shank tongue salami capicola spare ribs hamburger
      tri-tip alcatra. Bacon landjaeger ham hock andouille strip
      steak biltong. Picanha leberkas meatloaf filet mignon sausage pancetta salami pork shoulder pig ribeye ground round.
      Spare ribs short loin frankfurter ball tip strip steak jowl
      chicken tenderloin. Pastrami shankle buffalo, turkey beef ham swine ball tip tenderloin. Prosciutto sirloin chuck
      tenderloin andouille pork.
    </p>

    <h2>Websites</h2>
    <ul>
      <li>None....</li>
      <li><input v-model="subdomain" /><k-button @click.native.prevent="handleCreateWebsite">Create me</k-button></li>
    </ul>
  </main>
</template>
<script lang="ts" setup>
import KButton from "@epitrade/ui/Button.vue";

definePageMeta({
  middleware: ["account-guard"],
});

const subdomain = ref("");

const handleCreateWebsite = async () => {
  console.log("boo");

  console.log(subdomain.value);

};
</script>
