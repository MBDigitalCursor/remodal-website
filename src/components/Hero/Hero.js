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
	}, []);

	return (
		<div className="hero container">
			<div className="hero-title ">
				<h1 className="slide-in-left-hero-title">
					Make your <br /> web home {heroChangingText}
				</h1>
				<h3 className="slide-in-left-hero-title">From idea to responsive product</h3>
				<button className="hero-btn ">Get in touch</button>
			</div>
		</div>
	);
}

export default Hero;
