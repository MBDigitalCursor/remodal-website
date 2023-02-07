<<<<<<< HEAD
=======
import { Contacts } from "@mui/icons-material";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
>>>>>>> 4a84f13cf50576d6f98a534fc79e2ad45a43747c
import About from "./components/About/About";
import AboutFingers from "./components/AboutFingers/AboutFingers";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroRectangles from "./components/HeroRectangles/HeroRectangles";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
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
	}, []);

	return (
		<div className='App'>
			<Nav />
			<HeroRectangles />
			<Hero />
			<AboutFingers />
			<About />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
