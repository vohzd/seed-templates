<template>
  <button :disabled="isDisabled" :class=" { 'disabled-button': isDisabled } " class="relative">
    <span v-if="!isLoading">{{ buttonText }}</span>
    <span v-else><loading-component></loading-component></span>
  </button>
</template>

<script>
import LoadingComponent from "~/components/misc/Loading.vue";

export default {
  components: {
    LoadingComponent
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
      default: "Update"
    }
  }
}
</script>

<style lang="css">
</style>
