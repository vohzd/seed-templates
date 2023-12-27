<script setup lang="ts">
// const { disabled } = defineProps(["disabled"]);
</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
}


/*
button {
  padding: 12px;
  border: 0;
  outline: 0;
  font-family: "firacode";
  font-weight: normal;
  background: linear-gradient(var(--button) 0%, var(--button-lighter) 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  text-align: left;
  width: auto;
  font-size: 16px;
  color: var(--dark-text);
  transition: 0.5s all;
}

button:hover:not(:disabled) {
  cursor: pointer;
  opacity: 0.5;
}

button::-moz-focus-inner {
  border: 0;
}

button[disabled] {
  opacity: 0.4;
}

button[disabled]:hover {
  cursor: not-allowed;
}*/
</style>
