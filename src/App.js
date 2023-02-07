import { Contacts } from "@mui/icons-material";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroRectangles from "./components/HeroRectangles/HeroRectangles";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import "./styles/App.css";
import "./styles/reset.css";
import "./styles/variables.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<HeroRectangles />
			<Hero />
			<About />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
