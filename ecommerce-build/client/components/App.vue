<template>
	<div>
		<header-bar></header-bar>
		<nav-bar class="nav-bar fill-height white mobile-nav" v-bind:class="sideBarStyle"></nav-bar>
		<router-view class="fill-height" v-bind:class="mainViewStyle"></router-view>
	</div>
</template>

<script>
/*
 * libs
 */
import { mapActions, mapGetters, mapState }						from "vuex";

/*
 * components
 */
import Header 																				from "./Header.vue";
import Nav 																						from "./Nav.vue";

export default {
	name: "app",
	components: {
		"header-bar": Header,
		"nav-bar": Nav
	},
	computed: {
		sideBarStyle(){
			return {
				smallNavBar: this.sideBarExpanded
			}
		},
		mainViewStyle(){
			return {
				smallViewport: !this.sideBarExpanded
			}
		}
	},
	created(){
		//this.initSideBarState();
	},
	methods: {
	}
}
</script>

<style>
	html {
		margin: 0;
		padding: 0;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #000;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	  background: #fff;
		overflow: hidden;
		font-family: arial;
}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	a {
		color: #e0b49a;
		text-decoration: none;
	}

	a:hover{
		color: #81553b;
	}

	.black {
		background: #110f13;
	}

	.white {
		background: #fcfbff;
	}

	.fill-height {
		height: calc(100vh - 64px);
	}

	.nav-bar {
		float:left;
		width: 128px;
		transition: all 0.1s;
		transition-timing-function: ease-out;
		border-right: 1px solid #e8e5ed;
	}

	.nav-bar li{
		opacity: 1;
		transition: all 1.6s;
		transition-timing-function: ease-in;
		width: 0px;
	}

	.main-view {
		width: calc(100% - 256px);
		float: left;
	}

	.smallNavBar {
		width: 64px;
		transition: all 0.3s;
	}

	.smallNavBar .big-nav-icon {
		padding-left:16px;
		transition: all 0.7s;
	}


	.smallNavBar li{
		display: none;
	}


  .smallViewport .calendar-wrapper {
    float: left;
    width: calc(100% - 129px);
  }
	.router-navigation-link {
		float:left;
		width: calc(100% - 4px);
		outline: none;
		display: inline-block;
		padding-left: 4px;
		padding-top: 8px;
		line-height: 40px;
		vertical-align: middle;
	}
	.router-navigation-link i{
		width: 24px;
		font-size: 24px;
	}
	.router-navigation-link-active{
		background: rgb(216, 202, 237);
		color: #000;
	}

	.sidebar-toggle-position:hover,  .router-navigation-link:hover{
		cursor: pointer;
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
	  background: rgb(16, 14, 15);
	  border: none;
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

	.row {
		width: 100%;
		float: left;
	}


	.col-fill-remainder {
		width: auto;
		float: left;
	}

	.col-sixteenth {
		width: 6.25%;
		float: left;
	}

	.col-eigth {
		width: 12.5%;
		float: left;
	}

	.col-25 {
		width: 25%;
		float: left;
	}

	.col-50 {
		width: 50%;
		float: left;
	}

	.col-75 {
		width: 75%;
		float: left;
	}

	.col-100 {
		width: 100%;
		float: left;
	}

/*
	@media(max-width: 768px){

		.hide-on-mobile {
			display: none;
		}

		.mobile-nav {
			display:none;
		}

    .sticky-form {
      width: 100%;
      position: absolute;
    }

	}
	*/


</style>
