<script setup lang="ts">
// import KButton from "@epitrade/ui/webcomponents/Button";
import KButton from "@epitrade/ui/webcomponents/Button";

// Event handler function for the button click
const handleButtonClick = (event: Event) => {
  const customEvent = event as CustomEvent;
  alert(customEvent.detail.message);
};
</script>

<template>
  <h2>Buttons</h2>
  <k-button></k-button>
  <k-button>Text Passed In</k-button>
  <k-button @button-click="handleButtonClick">Event Handler</k-button>
</template>

<style></style>
