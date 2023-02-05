import React from "react";
import "./heroRectangles.css";

function HeroRectangles() {
	return (
		<div className="hero-right-side">
			<div className="sm-rectangle slide-in-right"></div>
			<div className="lg-rectangle slide-in-top"></div>
			<div className="md-rectangle scale-in-hor-left ">
				<div className="search-bar"></div>
				<div className="red-circle"></div>
				<div className="yellow-circle"></div>
				<div className="green-circle"></div>
			</div>
			<div className="bg-eclipse"></div>
		</div>
	);
}

export default HeroRectangles;
