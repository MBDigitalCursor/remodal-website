import React from "react";
import { useSelector } from "react-redux";
import "./hero.css";

function ChangingWord() {
	const { heroChangingText } = useSelector((state) => state.generalSlice);

	return (
		<h1>
			Make your <br /> web home <span className={heroChangingText.animation}>{heroChangingText.word}</span>
		</h1>
	);
}

export default ChangingWord;
