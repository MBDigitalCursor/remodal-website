import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import "./styles/reset.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
		</div>
	);
}

export default App;
