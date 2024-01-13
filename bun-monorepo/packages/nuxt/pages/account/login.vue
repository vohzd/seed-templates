<template>
  <main class="center">
    <h1>You have an account</h1>
    <p>Welcome back, commander!</p>

    <k-form @submit="handleLogin">
      <k-input v-model="email" placeholder="Email" />
      <k-input v-model="password" placeholder="Password" />
      <k-button :disabled="password.length === 0" type="submit">Login</k-button>
    </k-form>

  </main>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";
import KForm from "@epitrade/ui/Form.vue";
import KInput from "@epitrade/ui/Input.vue";

import { useApi } from "~/composables/useApi";

type LoginResponse = {
  code?: number
  message?: string
}

const api = await useApi("/account/login");

const { query } = useRoute();
const email = ref(query.email);
const password = ref("1234567");

async function handleLogin(e: SubmitEvent) {
  e.preventDefault();

  const response = await api.post({ email, password });

  console.log("logging in...");
  console.log(response);


  if (response) {
    await navigateTo("/account/dashboard");
  }
}
</script>
