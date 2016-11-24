import React from "react";

class Main extends React.Component {

	render(){

		// do a test on the server
		fetch("http://localhost:1337/stuff")
			.then((response) => response.json())
			.then((json) => console.log(json));

		return (
			<div className="main-wrapper">I am the main component!</div>
		)
	};
}

export default Main;