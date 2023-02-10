import { Contacts } from "@mui/icons-material";
import { sliderClasses } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import About from "./components/About/About";
import AboutFingers from "./components/AboutFingers/AboutFingers";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroRectangles from "./components/HeroRectangles/HeroRectangles";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import { setHeroChangingText } from "./store/generalStore";
import "./styles/App.css";
import "./styles/reset.css";
import "./styles/variables.css";

function App() {
	const dispatch = useDispatch();

	const intervalRef = useRef();

	useEffect(() => {
		const wordsAndAnimations = [
			{
				word: "stand tall",
				animation: "bounce-in-right",
			},
			{
				word: "be more",
				animation: "slide-in-elliptic-top-fwd",
			},
			{
				word: "perform",
				animation: "bounce-in-right",
			},
			{
				word: "respond",
				animation: "slide-in-elliptic-top-fwd",
			},
		];
		let i = 0;
		intervalRef.current = setInterval(() => {
			dispatch(setHeroChangingText(wordsAndAnimations[i % wordsAndAnimations.length]));
			i++;
		}, 4000);

		return () => {
			clearInterval(intervalRef.current);
		};
	});

	return (
		<>
			<Nav />
			<div className="App">
				<HeroRectangles />
				<Hero />
				<AboutFingers />
				<About />
				<Services />
				<Portfolio />
				<Footer />
			</div>
		</>
	);
}

export default App;
