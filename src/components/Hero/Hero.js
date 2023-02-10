import React from "react";

import ChangingWord from "./ChangingWord";
import "./hero.css";

function Hero() {
	const links = ["About", "Services", "Portfolio", "Contacts"];

	const handleClickScroll = (i) => {
		const sectionScrollTo = links[i].toLowerCase();
		const element = document.querySelector(`.${sectionScrollTo}`);
		if (element) {
			const targetY = element.getBoundingClientRect().top + window.pageYOffset;
			const easing = (t) => (t < 0.4 ? 1 * t * t * t : (t - 0.5) * (2 * t - 2) * (2 * t - 2) + 1);
			const start = performance.now();
			const duration = 1500;

			window.requestAnimationFrame(function step(timestamp) {
				const time = timestamp - start;
				const percent = Math.min(time / duration, 1);
				const diff = targetY - window.pageYOffset;
				const easingDiff = diff * easing(percent);

				window.scrollTo(0, window.pageYOffset + easingDiff);

				if (time < duration) {
					window.requestAnimationFrame(step);
				}
			});
		}
	};

	return (
		<div className="hero container">
			<div className="hero-title">
				<div className="slide-in-left-hero-title">
					<ChangingWord />
					<h3>From idea to responsive product</h3>
				</div>
				<button
					onClick={() => handleClickScroll(3)}
					className="hero-btn hero-btn-overlay scale-in-left"
				>
					Get in touch
				</button>
			</div>
		</div>
	);
}

export default Hero;
