import $ from "jquery";
import stuff from "./components/stuff.js";

console.log("entry.js sez: hello");
console.log("imported stuff sez: ", stuff);

console.log("****************");
console.log("fetching /stuff");

fetch("http://localhost:1337/stuff")
	.then((response) => response.json())
	.then((json) => console.log(json));