import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeroChangingText } from "../../store/generalStore";
import "./hero.css";

function Hero() {
	const dispatch = useDispatch();
	const { heroChangingText } = useSelector((state) => state.generalSlice);
	const intervalRef = useRef(null);

	useEffect(() => {
		const words = ["stand tall", "be more", "perform", "respond"];
		let i = 0;
		intervalRef.current = setInterval(() => {
			dispatch(setHeroChangingText(words[i % words.length]));
			i++;
		}, 2000);

		return () => {
			clearInterval(intervalRef.current);
		};
	});

	return (
		<div className="hero container">
			<div className="hero-title">
				<div className="slide-in-left-hero-title">
					<h1>
						Make your <br /> web home {heroChangingText}
					</h1>
					<h3>From idea to responsive product</h3>
				</div>
				<button className="hero-btn scale-in-left ">Get in touch</button>
			</div>
		</div>
	);
}

export default Hero;
