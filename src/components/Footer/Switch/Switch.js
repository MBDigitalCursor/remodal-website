import React from "react";
import "./switch.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
	return (
		<label
			style={{ background: isOn && onColor }}
			className="react-switch"
		>
			<input
				checked={isOn}
				onChange={handleToggle}
				className="react-switch-checkbox"
				type="checkbox"
			/>
			<div className="react-switch-button" />
			<div className="react-switch-labels">
				<span style={{ color: isOn ? "#1D1C1C" : "#ffffff" }}>Fill in form</span>
				<span style={{ color: isOn ? "#ffffff" : "#1D1C1C" }}>Schedule call</span>
			</div>
		</label>
	);
};

export default Switch;
