<template>
  <main class="center mtx">
    <h1>New Account</h1>
    <p>Hey newbie! Enter a password for your account (6 or more chars).</p>
    <k-form @submit="handleRegister">
      <k-input v-model="email" type="text" placeholder="Email Address" />
      <k-input v-model="password" type="text" placeholder="Password" />
      <k-button class="mt" :disabled="(!isEmailValid(email) && password.length > 0)" type="submit">Check
        Email</k-button>
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

const email = ref("test@example4.com");
const password = ref("");

async function handleRegister(e: SubmitEvent) {
  e.preventDefault();

  // could this look better?
  // const { value: exists } = await useApi(`/account`).post({ blah: "some-value" })
  // const { value } = await useApi(`/account`, { method: "POST", body: { email, password } });
  // console.log("completed....");
  // console.log(value);
  // exists ? await navigateTo("/account/login") : await navigateTo("/account/register");

  const { value } = await api.post({ email, password });

  console.log("COPLETED!!!");
  console.log(value);
}
</script>
