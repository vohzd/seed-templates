
require('../sass/TodoApp.scss');

import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


class TodoApp extends React.Component {

	render(){
		return (
			<div className="app-wrapper">
				<TodoList />
				<TodoForm />
			</div>
		)
	}

}

export default TodoApp;


/*

var HelloSayer = require('./HelloSayer');

class HelloForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'world' };
	}

	render() {
		return (<div className="hello-form">
			<input type="text" onChange={this.onChange.bind(this)} />
			<HelloSayer name={this.state.name} />
		</div>);
	}

	onChange(e) {
		this.setState({ name: e.target.value });
	}
}

export default HelloForm;

*/
