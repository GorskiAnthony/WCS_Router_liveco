import React from "react";
import photo from "../assets/images/img.png"

const Home = () => {
	return (
		<div>Page d'accueil
			<img src={photo} style={{ height: "150px", width: "auto"}} alt="photo"/>
		</div>
	);
};

export default Home;
