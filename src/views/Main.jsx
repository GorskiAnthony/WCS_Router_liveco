import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import HtmlDefinition from "../routes/HtmlDefinition";
import CssDefinition from "../routes/CssDefinition";
import JsDefinition from "../routes/JsDefinition";
import HtmlDetails from "../routes/HtmlDetails";
import "../assets/main.css";

const Main = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/html" element={<HtmlDefinition />} />
				<Route path="/html/:tags" element={<HtmlDetails />} />
				<Route path="/css" element={<CssDefinition />} />
				<Route path="/js" element={<JsDefinition />} />
			</Routes>
		</main>
	);
};

export default Main;
