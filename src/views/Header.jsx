import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/nav.css";

const Header = () => {
	const getActiveLinkStyle = ({ isActive }) => {
		if (isActive) return { color: "orange" };
	};

	return (
		<header>
			<h1>Mon app</h1>
			<nav>
				<NavLink style={getActiveLinkStyle} to="/">
					Home
				</NavLink>
				<Link to="/html">HTML</Link>
				<Link to="/css">CSS</Link>
				<Link to="/js">JS</Link>
			</nav>
		</header>
	);
};

export default Header;
