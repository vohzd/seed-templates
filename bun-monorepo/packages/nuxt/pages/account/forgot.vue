<template>
  <form class="center mtx">
    <h1>Account Check</h1>
    <p>Welcome! Let's check if you already have an account.</p>
    <p>Enter your Email.</p>
    <input v-model="email" type="text" placeholder="Email Address" @keyup.enter.prevent="checkEmail" />
    <k-button class="mt" :disabled="isButtonDisabled" @click.native.prevent="checkEmail">Check Email</k-button>
    <nuxt-link to="/account/forgot" class="medium row mt">Forgot?</nuxt-link>
  </form>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";
import { useApi } from "~/composables/useApi";

const isButtonDisabled = false;
const email = ref("test@example.com");

async function checkEmail() {
  const exists = await useApi(`/account?email=${email.value}`);
  exists.length > 0 ? await navigateTo("/account/login") : await navigateTo("/account/register");
}

// import FormButton from "~/components/form/FormButton.vue";
// import LoadingSpiral from "~/components/misc/LoadingSpiral.vue";

// export default {
//   components: {navigateTo
//     account(){
//       console.log("wacting user");

//       this.determineOutcome();
//     } */
//   },
//   methods: {
//     // ...mapActions([
//     //   "checkAccountExists",
//     //   "createAccount",
//     //   "login",
//     //   "setNotification"
//     // ]),
//     goBack() {
//       console.log("method: goBack");
//       console.log(this.stage);
//       this.stage = 1;
//       // this.stage == 3 ? this.stage = 1 : this.stage = 2;
//       this.isButtonDisabled = false;
//     },
//     async checkEmail() {
//       // dont do anything if invalid email
//       if (!this.isEmailValid()) return;

//       const { data } = await useFetch(`${config.apiUrl}/account`);
//       console.log("done");
//       console.log(data);

//       const config = useAppConfig();
//       console.log(config);
//       console.log(config.test);

//       this.isButtonDisabled = true;
//     },
//     async handleLogin() {
//       console.log("method: handleLogin");
//       // this.stage = 0;

//       try {
//         await this.login({
//           email: this.email,
//           password: this.password,
//         });

//         this.$router.push("/account/dashboard");
//       } catch (e) {
//         console.log("CATCHING ERRO");
//         console.log(e);

//         this.setNotification(e.data);
//         this.stage = 2;
//       }
//     },
//     async handleRegister() {
//       console.log("methid: handleRegister");

//       const account = await this.createAccount({
//         email: this.email,
//         password: this.password,
//       });

//       console.log("**************");
//       console.log("USER HERE");
//       console.log(account);
//       console.log("((((((((()))))))))");

//       this.$router.push("/account/dashboard");
//     },

//     isEmailValid() {
//       // eslint-disable-next-line no-useless-escape
//       const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return re.test(String(this.email).toLowerCase());
//     },
//   },
// };
</script>

<style lang="css"></style>
