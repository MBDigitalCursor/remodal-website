import React from "react";
import "./portfolio.css";

import SwiperComponent from "./Swiper";

function Portfolio() {
	const porfolioProjects = [
		{
			img: "https://images.unsplash.com/photo-1598707630720-eb08ef27bc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Pirate's Quest",
			description: "An epic clicker adventure game",
			button: "Try the game",
			link: "http://www.google.com",
		},
		{
			img: "https://images.unsplash.com/photo-1529792083865-d23889753466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Statybior website",
			description: "Never ending projects, leaking pipes, thin walls, Never ending projects, leaking pipes, thin walls, Never ending project",
			button: "Visit website",
			link: "http://www.google.com",
		},
		{
			img: "https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			title: "Zoo Market",
			description: "Dog food, dog food, cat food, cat shit, fish & chips",
			button: "Visit website",
			link: "http://www.google.com",
		},
	];

	return (
		<div className="portfolio container">
			<div className="portfolio-desc">
				<div className="portfolio-title">
					<h2>Our works</h2>
					<h3>Juggling artistic concepts with product mindset</h3>
				</div>
				<button className="portfolio-btn port-btn-overlay scale-in-left-port-btn">Get in touch</button>
			</div>
			<SwiperComponent projects={porfolioProjects}></SwiperComponent>
		</div>
	);
}

export default Portfolio;
