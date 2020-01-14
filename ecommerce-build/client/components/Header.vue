<template lang="html" >
 	<header class="toolbar">
		<section class="site-logo">
		</section>
		<section class="site-name">
			<span class="colour-1">Vend</span>
		</section>
		<section class="user-management right">
      <!--
      <div class="settings">
        <i class="fa fa-cog" aria-hidden="true" v-if="!isShowingMobileMenu" v-on:click="goToSettings"></i>
      </div>
			<span class="username" v-on:click="toggleSignIn">{{ getShortDisplayName }}</span>
			<img v-bind:src="getAvatarUrl" class="fill-height-toolbar-icon"  v-on:click="toggleSignIn" />-->
		</section>


	</header>
</template>

<script>

	import { mapGetters, mapState } from "vuex";

	export default {
		data(){
			return {
				isShowingMobileMenu: false
			}
		},
		computed: {
		},
		methods: {
		}
	}
</script>

<style>
	.toolbar {
		width: 100%;
		background: #ecdbeb;
		color: #6f3a1f;
		height: 32px;
		float: left;
		border-bottom: 1px solid #e4cfe3;
	}

	.right {
		float: right;
	}

	.fill-height-toolbar-icon {
		float:left;
		height: 64px;
	}

	.username, .site-name, .site-logo, .active-statistics {
		float: left;
		vertical-align: middle;
		line-height: 32px;
	}

	.site-logo {
    padding-left: 8px;
    padding-right: 8px;
    opacity: 0.7;
	}

  .site-logo img {
    height: 24px;
    padding-top: 8px;
  }

	.mobile-menu-invoker {
		font-size: 3em;
	}

	.active-statistics {
		margin-left: 64px;
	}

	.stat-number {
		font-size: 1.8em;
	}

	.stat-label {
		color: rgba(255,255,255,0.4);
		font-size: 0.8em;
	}

	.active-statistics figure {
		padding: 0;
		margin: 0;
	}

	.username {
		padding-right: 10px;
	}

	.colour-2 {
		margin-left: -3px;
		color: #886d5d;
	}

	.user-management *:hover {
		opacity: 0.7;
		cursor: pointer;
	}

  .mobile-menu {
    display: none;
  }

  .settings {
    font-size: 26px;
    float: left;
    padding-right: 16px;
    line-height: 32px;
  }

</style>
