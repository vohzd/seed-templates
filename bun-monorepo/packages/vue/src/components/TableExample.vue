<script setup lang="ts">
import { KHeader, KRow, KTable } from "@epitrade/ui/webcomponents/Table";

// Event handler function for the button click
const handleButtonClick = (event: Event) => {
  const customEvent = event as CustomEvent;
  alert(customEvent.detail.message);
};
</script>

<template>
  <h2>Table</h2>
  <k-table>
    <k-header>Table Header</k-header>
    <k-row>Row 1</k-row>
    <k-row>Row 2</k-row>
    <k-row>Row 3</k-row>
    <k-row>Row 4</k-row>
    <k-row>Row 5</k-row>
    <k-row>Row 6</k-row>
  </k-table>
</template>

<style></style>
