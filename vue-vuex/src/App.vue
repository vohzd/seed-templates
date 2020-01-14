<template>
	<main>
		<h4>firebase app</h4>
		<button v-on:click="incrementCounter">{{ count }}</button>
	</main>
</template>

<script>

	export default {
		name: "app",
		methods: {
			incrementCounter(){
				this.$store.commit("increment");
			}
		},
		data () {
			return {
				isGuest: true
			}
		},
		computed: {
			count(){
				return this.$store.state.count;
			}
		}
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
