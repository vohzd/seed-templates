<template>
	<main>
		<h4>router app</h4>
		<router-link to="home">Go home</router-link>
		<router-link to="about">Go to About</router-link>
		<router-view></router-view>
	</main>
</template>

<script>
	import Vue from "vue";
	import VueRouter from "vue-router";

	// WRAP
	Vue.use(VueRouter);

	// define templates -- these can be imported
	const Home = { template: "<h4>Home</h4>" };
	const About = { template: "<h5>About</h5>" };

	// define routes
	const routes = [
		{ path: "/home", component: Home },
		{ path: "/about", component: About }
	];

	// initialise Instance
	const router = new VueRouter({
		routes
	});

	export {
		router
	}

</script>

<style>

body
{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 20px;
}

h1, h2
{
	font-weight: normal;
}

ul
{
	list-style-type: none;
	padding: 0;
}

li
{
	display: inline-block;
	margin: 0 10px;
}

a
{
	color: #42b983;
}

</style>
