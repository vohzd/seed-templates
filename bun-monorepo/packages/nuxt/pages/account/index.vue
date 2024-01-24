<template>
  <main class="center">
    <h1>Account Check</h1>
    <p>Welcome! Let's check if you already have an account.</p>
    <p>Enter your Email.</p>
    <k-form @submit="checkEmail">
      <k-input v-model="email" placeholder="Email Address" />
      <k-button class="mt" :disabled="!isEmailValid(email)" type="submit">Check Email</k-button>
    </k-form>
    <nuxt-link to="/account/forgot" class="mtx">Forgot?</nuxt-link>
  </main>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";
import KForm from "@epitrade/ui/Form.vue";
import KInput from "@epitrade/ui/Input.vue";

import { useApi } from "~/composables/useApi";

const api = await useApi("/account");
const email = ref("test@example7.com");

async function checkEmail(e: SubmitEvent) {
  e.preventDefault();
  const { value: exists } = await api.get({ email: toRaw(email) });
  exists ? await navigateTo(`/account/login?email=${String(email.value)}`) : await navigateTo(`/account/register?email=${String(email.value)}`);
}
</script>
