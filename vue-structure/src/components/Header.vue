<template lang="html" >
 	<header>
		<div class="menu">

			<a class="item">
				<i class="fa fa-home" aria-hidden="true"></i>
				<span>Home</span>
			</a>

			<a class="item">
				<i class="fa fa-address-book" aria-hidden="true"></i>
				<span>Friends</span>
			</a>

		</div>
	</header>
</template>

<script>
	export default {
	}
</script>

<style >
	.menu {
		width: 100%;
		height: 64px;
		float: left;
		background: rgba(0,0,0,0.03);
		line-height: 58px;
	}

	a {
		padding: 20px;
	}

	a:hover {
		cursor: pointer;
		opacity: 0.7;
	}
</style>
