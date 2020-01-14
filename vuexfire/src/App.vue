<template>
	<main>
		<h4>firebase app bound via vuex store (with vuexfire)</h4>

		<ul>
          <li v-for="todo in todos" :key="todo['.key']">
            {{ todo.desc }}
            <button @click="removeTodo(todo['.key'])">X</button>
          </li>
        </ul>
        <form @submit.prevent="addTodo">
          <input v-model="newTodo" placeholder="123">
          <button>Add #{{ todos.length }}</button>
        </form>

	</main>
</template>

<script>


import Vue from "vue";
import Vuex from "vuex";
import VuexFire from "vuexfire";
import firebase from "firebase";

Vue.use(Vuex);
Vue.use(VuexFire);

const config = {
	apiKey: "AIzaSyDs2Wp-XarwiFWuUEDptHkUKRmnkteFw4Q",
	authDomain: "vue-firebase-test-1f8a5.firebaseapp.com",
	databaseURL: "https://vue-firebase-test-1f8a5.firebaseio.com",
	storageBucket: "vue-firebase-test-1f8a5.appspot.com",
	messagingSenderId: "424009185518"
};

const fbApp = firebase.initializeApp(config);
const db = fbApp.database();
const todosRef = db.ref("todos");


	export default {
		name: "app",
		computed: Vuex.mapGetters([
			"todos"
		]),
		firebase: {
			todos: todosRef
		},
		data(){
			return {
				newTodo: ""
			}
		},
		methods: {
			removeTodo(key){
				todosRef.child(key).remove()
			},
			addTodo(){
				if (this.newTodo.trim()){
					todosRef.push({
						desc: this.newTodo
					});
					this.newTodo = "";
				}
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
