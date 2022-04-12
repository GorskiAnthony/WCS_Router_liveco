import React from "react";
import { Link } from "react-router-dom";

const HtmlDefinition = () => {
	return (
		<div>
			Html definition
			<Link to="/html/body">Body</Link>
			<Link to="/html/header">Header</Link>
			<Link to="/html/footer">Footer</Link>
		</div>
	);
};

export default HtmlDefinition;
