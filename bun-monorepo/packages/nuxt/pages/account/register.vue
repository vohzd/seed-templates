<template>
  <main class="center">
    <h1>New Account</h1>
    <p>Hey newbie! Enter a password for your account (6 or more chars).</p>
    <k-form @submit="handleRegister">
      <k-input v-model="email" type="text" placeholder="Email Address" />
      <k-input v-model="password" type="text" placeholder="Password" />
      <k-button class="mt" :disabled="(!isEmailValid(email) && password.length > 0)" type="submit">Register</k-button>
    </k-form>
    <nuxt-link to="/account" class="medium row mt">Back?</nuxt-link>
  </main>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";
import KForm from "@epitrade/ui/Form.vue";
import KInput from "@epitrade/ui/Input.vue";

import { useApi } from "~/composables/useApi";

const api = await useApi("/account");

const { query } = useRoute();
const email = ref(query.email);
const password = ref("1234567");

async function handleRegister(e: SubmitEvent) {
  e.preventDefault();
  const { value } = await api.post({ email, password });

  // todo, redirect new user
  console.log(value);
}
</script>
