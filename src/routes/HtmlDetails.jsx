import React from "react";
import { useParams } from "react-router-dom";

const HtmlDetails = () => {
	const { tags } = useParams();
	return (
		<div>Concernant le {tags}, la définition se trouve dans la doc 😁 </div>
	);
};

export default HtmlDetails;
