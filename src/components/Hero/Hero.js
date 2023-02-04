import React from "react";
import "./hero.css";

function Hero() {
	return (
		<div className="hero container">
			<div className="hero-title">
				<h1>
					Make your <br /> web home stand out
				</h1>
				<h3>From idea to responsive product</h3>
				<button>Get in touch</button>
			</div>
			<div className="hero-right-side"></div>
		</div>
	);
}

export default Hero;
