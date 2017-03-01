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
	import { mapGetters }					from "vuex";

	export default {
		name: "app",
	}
</script>

<style>
	html {
		margin: 0;
		padding: 0;
	}

	body {
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	a {
		color: #886d5d;
		text-decoration: none;
	}

	a:hover{
		color: #81553b;
	}

	::-webkit-scrollbar {
	  width: 9px;
	  height: 9px;
	}
	::-webkit-scrollbar-button {
	  width: 0px;
	  height: 0px;
	}
	::-webkit-scrollbar-thumb {
	  background: rgb(16, 13, 19);
	  border: 0px none #ffffff;
	  border-radius: 50px;
	}
	::-webkit-scrollbar-thumb:hover {
	  background: rgb(16, 13, 20);
	}
	::-webkit-scrollbar-thumb:active {
	  background: rgb(16, 13, 20);
	}
	::-webkit-scrollbar-track {
	  background: rgba(0,0,0,0.25);
	  border: 0px none #ffffff;
	  border-radius: 16px;

	}
	::-webkit-scrollbar-track:hover {
	  background: rgba(0,0,0,0.2);
	}
	::-webkit-scrollbar-track:active {
	  background: rgba(0,0,0,0.35);
	}
	::-webkit-scrollbar-corner {
	  background: transparent;
	}

</style>
