import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import HeroRectangles from "./components/HeroRectangles/HeroRectangles";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import "./styles/reset.css";
import "./styles/variables.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<HeroRectangles />
			<About />
		</div>
	);
}

export default App;
