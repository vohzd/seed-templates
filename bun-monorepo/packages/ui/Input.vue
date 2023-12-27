<!-- pretty much lifted straight from
https://vuejs.org/guide/components/v-model.html -->

<script setup lang="ts">


defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<style scoped>
input {
  padding: 1em;
}
</style>
