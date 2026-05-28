<script setup lang="ts">
// import KButton from "@epitrade/ui/webcomponents/Button";
import KButton from "@epitrade/ui/webcomponents/Button";
import KTable from "@epitrade/ui/webcomponents/Table";

// Event handler function for the button click
const handleButtonClick = (event: Event) => {
  const customEvent = event as CustomEvent;
  alert(customEvent.detail.message);
};
</script>

<template>
  <h2>Form</h2>
  <k-form>
    <h2>Text INSIDE the form</h2>
    <k-input placeholder="blarg" />
    <k-button>Submit Button</k-button>
  </k-form>
</template>

<style></style>
