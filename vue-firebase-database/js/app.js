var config = {
	apiKey: "AIzaSyDs2Wp-XarwiFWuUEDptHkUKRmnkteFw4Q",
	authDomain: "vue-firebase-test-1f8a5.firebaseapp.com",
	databaseURL: "https://vue-firebase-test-1f8a5.firebaseio.com",
	storageBucket: "vue-firebase-test-1f8a5.appspot.com",
	messagingSenderId: "424009185518"
};
	
var fb = firebase.initializeApp(config);
var db = fb.database();
var todosRef = db.ref("todos");

var app = new Vue({
	el: "#app",
	data: {
		newTodoText: ""
	},
	firebase: {
		todos: todosRef
	},
	methods: {
		submitTodo: function(){
			todosRef.push({
				text: this.newTodoText
			});
			this.newTodoText = "";
		}
	}
});	