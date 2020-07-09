<template lang="html" >
 	<section class="float">

      <span v-if="!isLoggedInToGoogle">
          <button class="nav-item" v-on:click="logGoogleUserIn">Please log in</button>
      </span>

    </section>

	</section>
</template>

<script>

	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters([
        "isLoggedInToGoogle",
			]),
		},
		methods: {
      logGoogleUserIn(){
        this.$store.dispatch("logGoogleUserIn")
      }
		}
	}
</script>

<style>


</style>
