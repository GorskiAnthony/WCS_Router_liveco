import React from "react";
import Links from "../components/Links";

const HtmlDefinition = () => {

	const subMenu = [
		{
			name:"Body",
			route:"/html/body"
		},
		{
			name:"Header",
			route:"/html/header"
		},
		{
			name:"Footer",
			route:"/html/footer"
		},
		{
			name:"a",
			route:"/html/a"
		},
		{
			name:"bold",
			route:"/html/bold"
		},
		{
			name:"div",
			route:"/html/div"
		},
		{
			name:"html",
			route:"/html/html"
		},
		{
			name:"section",
			route:"/html/section"
		}
	]

	return (
		<div>
			Html definition
			{
				subMenu.map((item, index) => {
					return <Links key={index} name={item.name} route={item.route} />
				})
			}
		</div>
	);
};

export default HtmlDefinition;
