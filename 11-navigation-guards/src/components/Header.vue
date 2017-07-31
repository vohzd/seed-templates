<template lang="html" >
 	<header class="toolbar">

    <nav class="navigation-links">

      <router-link class="router-link" to="/profile">
        <div class="nav-item">Profile</div>
      </router-link>

      <router-link class="router-link" to="/calendar">
        <div class="nav-item">Calendar</div>
      </router-link>

      <router-link class="router-link" to="/todo">
        <div class="nav-item">Todo</div>
      </router-link>

    </nav>

    <section class="anchored-right">
      <div class="sign-in-status">

        <span v-if="isLoggedInToGoogle">
          <a href="#">
            <div class="nav-item circle" v-on:click="logGoogleUserOut">Out</div>
          </a>
        </span>

        <span v-if="!isLoggedInToGoogle">
          <a href="#">
            <div class="nav-item circle" v-on:click="logGoogleUserIn">In</div>
          </a>
        </span>

      </div>
    </section>

	</header>
</template>

<script>

	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters([
        "isLoggedInToGoogle",
				"profile",
			]),
		},
		mounted(){
		},
		methods: {
      logGoogleUserIn(){
        this.$store.dispatch("logGoogleUserIn")
      },
      logGoogleUserOut(){
        this.$store.dispatch("logGoogleUserOut")
      },
		}
	}
</script>

<style>

	.toolbar {
		width: 100%;
		background: #342e3c;
		color: #6f3a1f;
		height: 64px;
		float: left;
		border-bottom: 3px solid #3c314b;
	}

  .anchored-right {
    float: right;
    padding-right: 16px;
  }

  nav {
    padding-left: 16px;
    float: left;
  }

  .navigation-links a {
    padding-right: 74px;
  }

  .nav-item {
    height: 64px;
    font-size: 18px;
    line-height: 64px;
  }

  .circle {
    background: rgba(157, 118, 96, 0.12);
    padding: 12px;
    line-height: 33px;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    font-size: 17px;
    margin-top: 4px;
    text-align: center;
  }

  nav a {
    float: left;
  }

</style>
