import React from "react";
import "../assets/nav.css";
import Links from "../components/Links";

const Header = () => {

	const links = [
		{
			name: "Home",
			route: "/"
		},
		{
			name: "HTML",
			route: "/html"
		},
		{
			name: "CSS",
			route: "/css"
		},
		{
			name: "JS",
			route: "/js"
		}
	];


	return (
		<header>
			<h1>Mon app</h1>
			<nav>
				{
					links.map((link, key) => {
						return (
							<Links key={key} name={link.name} route={link.route} />
						)
					})
				}
			</nav>
		</header>
	);
};

export default Header;
