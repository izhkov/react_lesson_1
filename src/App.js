// Декларативный
import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

// Императивный
let currentYear = new Date().getFullYear();

function App() {
	const element = createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				className: "App-logo",
				src: `${logo}`,
				alt: "logo",
			}),
			createElement("p", null, "Edit src/App.js and save to reload."),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", null, `${currentYear}`)
		)
	);

	return <>{element}</>;
}

export default App;
