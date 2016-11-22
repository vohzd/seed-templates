import React from "react";

class TodoForm extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			formValue: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	render(){
		return(
			<div>
				<input type="text" placeholder="add new todo"  onChange={this.handleChange} />
				<input type="button" value="submit" onClick={this.handleSubmit} />
			</div>
		)
	}

	handleChange(event){
		this.setState({
			formValue: event.target.value
		});
	}

	handleSubmit(){
		console.log(this.state);
	}
}

export default TodoForm;