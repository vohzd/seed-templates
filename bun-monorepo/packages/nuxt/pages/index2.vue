<template>
  <main class="center">
    <div class="two-grid relative">
      <div class="main-image">
        <NuxtImg src="/hourglass.jpg" />
      </div>
      <div class="mtx">
        <h1 class="mtx">Lightning Fast eCommerce</h1>
        <p>Build your own eCommerce store in less than 1hr</p>
        <ul>
          <li>Templates rigid and uneditable?</li>
          <li>20 additional plugins needed?</li>
          <li>Hidden costs and features?</li>
        </ul>
        <p>Build your dream eCommerce FAST with Epitrade!</p>
        <code>Status: <span class="orange-tag">Closed Alpha</span> <small>(accepting small number of clients)</small></code>
        <div class="row mtx">
          <nuxt-link to="/account"><k-button>Start</k-button></nuxt-link>
        </div>
      </div>

      <div class="two-grid mbx mtx">
        <div class="">
          <div class="pad">
            <h3 class="text-center row mbx mtx">WTF is this?</h3>
            <p>Epitrade is an ecommerce platform + cms tailored to small businesses.</p>
            <p>It allows you to customise and build your site as YOU see it.</p>
            <p>Sell Digital-only products? No problem!</p>
            <p>Built on the absolute best technology available to make it blazing fast.</p>
            <p>Suitable for;</p>
            <ul class="mt">
              <li>Small Businesses [x]</li>
              <li>Musicians [x]</li>
              <li>Writers &amp; Artists [x]</li>
            </ul>
          </div>
        </div>

        <div class="parallax-bg">
          <div class="relative">
            <div class="row mb relative pricing-table">
              <div class="border-radius grey-bg pad">
                <h3 class="text-center row mbx mtx">GIVE ME ACCESS</h3>
                <p class="text-center row">We're invite-only currently, however that could change in the future.</p>
                <div class="row text-center">
                  <!-- <nuxt-link to="/request"><form-button :is-disabled="false" :is-fancy="true"
                      button-text="Request Access"></form-button></nuxt-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import KButton from "@epitrade/ui/Button.vue";

// import { mapGetters } from "vuex";
// import FormButton from "~/components/form/FormButton.vue";

// export default {
//   components: {
//     FormButton,
//   },
//   computed: {
//     ...mapGetters(["account"]),
//     buttonText() {
//       return !this.account ? "Request Access" : "GO TO ACCOUNT";
//     },
//   },
// };
</script>

<style lang="css">
ul {
  margin-left: 16px;
  margin-bottom: 32px;
}

ul li {
  list-style: square;
  margin-bottom: 4px;
  font-size: 15px;
}

.pricing-table h4 {
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 32px;
  color: var(--button);
}

/*

  .parallax-bg {
    background-image: url("~assets/img/homepage-bg.jpg");
    height: 520px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(4px);
    overflow: hidden;
  }*/

.parallax-bg {
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--light-text);
  background-image: url("assets/backgrounds/curls.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  overflow: hidden;
  transition: 0.4s all;
  border-radius: 3px;
  position: relative;
}

.parallax-content {
  position: absolute;
  top: 0;
  color: white;
}

.hexagon {
  position: absolute;
  z-index: 1;
  clip-path: polygon(50% 0%, 100% 25%, 100% 74%, 50% 100%, 0% 75%, 0% 25%);
  width: 40%;
  height: 40%;
  overflow: hidden;
}

@media (max-width: 1400px) {
  .two-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .two-grid>div {
    margin-bottom: 32px;
  }

  h1,
  h2 {
    width: auto;
    background: none;
    white-space: wrap;
    font-size: 24px;
    line-height: 64px;
    padding: 0px;
    margin: 0 0 16px 0;
  }
}

@media (max-width: 800px) {
  .main-image {
    display: none;
  }
}
</style>
