<template>
	<div>
		<h2>It works!</h2>
		<router-view></router-view>
	</div>
</template>

<script>
	/*
	 * libs
	 */
	import { mapGetters }	from "vuex";

	export default {
		name: "app",
	}
</script>

<style lang="scss">

  $background: #817a7a;
  $fontColour: #3c3838;

  body {
    background: $background;
    color: $fontColour;
  }

  h2 {
    letter-spacing: 12px;
  }

</style>
