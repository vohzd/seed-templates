<template lang="html">
	<nav>
		<!-- navigatable views -->
		<ul>
			<router-link class="router-navigation-link" to="/home">
				<li>Home</li>
			</router-link>
			<router-link class="router-navigation-link" to="/account">
				<li>Account</li>
			</router-link>
		</ul>

		<!-- interface to toogle between shown/minimised mod
		<div class="sidebar-toggle-position">
			<i class="fa fa-toggle-on" aria-hidden="true" v-if="!sideBarExpanded" @click="toggleSidebar"></i>
			<i class="fa fa-toggle-off" aria-hidden="true" v-if="sideBarExpanded" @click="toggleSidebar"></i>
		</div>
		e -->

	</nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
	computed: {
		...mapState([
			"sideBarExpanded"
		])
	},
	methods: {
		toggleSidebar(){
			this.$store.dispatch("toggleSideBarState");
		}
	}
}
</script>

<style lang="css">


	ul {
		width: 100%;
		float:left;
		display: block;
	}
	li {
		list-style-type: none;
		display:inline-block;
	}

	li i {
		display: block;
	}

	.sidebar-toggle-position {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 8px;
		font-size: 32px;
	}





</style>
