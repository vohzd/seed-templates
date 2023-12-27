<template>
  <form class="center mtx">
    <h2>You have an account</h2>
    <p>Welcome back, commander!</p>
    <p>Enter your Password.</p>
    <form onsubmit="handleLogin" class="row">
      <input v-model="password" type="password" placeholder="Password" />
      <k-button :disabled="isButtonDisabled" @click.native.prevent="handleLogin">Login</k-button>
    </form>

  </form>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";
import { useApi } from "~/composables/useApi";

const api = await useApi("/account/login");
const isButtonDisabled = false;
const email = ref("test@example4.com");
const password = ref("");

async function handleLogin() {
  const { value } = await api.post({ email, password });

  console.log("logging in...");
  console.log(value);
  console.log("finished logg");

  if (value) {
    await navigateTo("/account/dashboard");
  }
}
</script>
