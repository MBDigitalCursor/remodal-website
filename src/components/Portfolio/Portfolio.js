import React from "react";
import Swiper from "../Swiper/Swiper";
import "./portfolio.css";

function Portfolio() {
	return (
		<div className="portfolio container">
			<div className="portfolio-desc">
				<div className="portfolio-title">
					<h2>Our works</h2>
					<h3>Juggling artistic concepts with product mindset</h3>
				</div>
				<button className="portfolio-btn port-btn-overlay scale-in-left-port-btn">Get in touch</button>
			</div>
			<Swiper />
		</div>
	);
}

export default Portfolio;
