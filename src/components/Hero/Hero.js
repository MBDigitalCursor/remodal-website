import React from "react";

import ChangingWord from "./ChangingWord";
import "./hero.css";

function Hero() {
	return (
		<div className="hero container">
			<div className="hero-title">
				<div className="slide-in-left-hero-title">
					<ChangingWord />
					<h3>From idea to responsive product</h3>
				</div>
				<button className="hero-btn hero-btn-overlay scale-in-left">Get in touch</button>
			</div>
		</div>
	);
}

export default Hero;
