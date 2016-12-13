<template>

	<main>

		<header-bar></header-bar>
		<main-view>
			<contacts-editor />
			<contacts-list />
		</main-view>
		<footer-bar></footer-bar>

	</main>

</template>

<script>

	import Header from "./components/Header.vue";
	import Main from "./components/Main.vue";
	import ContactsEditor from "./components/ContactsEditor.vue";
	import ContactsList from "./components/ContactsList.vue";
	import Footer from "./components/Footer.vue";

	export default {
		name: "app",
		components: {
			"header-bar": Header,
			"main-view": Main,
			"contacts-editor": ContactsEditor,
			"contacts-list": ContactsList,
			"footer-bar": Footer
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
