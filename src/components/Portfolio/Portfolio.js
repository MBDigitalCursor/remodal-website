import React from "react";
import Swiper from "../Swiper/Swiper";
import "./portfolio.css";

function Portfolio() {
	return (
		<div className="portfolio container">
			<div className="portfolio-desc">
				<h2>Swipe to see our works</h2>
			</div>
			<Swiper />
		</div>
	);
}

export default Portfolio;
