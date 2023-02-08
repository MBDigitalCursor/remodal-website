import React, { useEffect, useRef, useState } from "react";
import "./services.css";

function Services() {
	const [isVibrating, setIsVibrating] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVibrating((prevState) => !prevState);
		}, 2000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="services container">
			<div className="services-desc">
				<h2>Responsive website development</h2>
				<h3>Custom website design & individual graphic design</h3>
				<p>
					We are here to craft you unique corporate, e-commerce or personal digital <br /> home to stand out from the pack and tell the story with on-going support. <br /> Enhance your online presence
				</p>
				<button className="services-btn services-in-left-port-btn services-btn-overlay">Let’s build your website</button>
			</div>
			<div className="services-screens">
				<div className={`phone ${isVibrating ? "vibrate-1" : ""}`}></div>
				<div className="tablet"></div>
				<div className="desktop"></div>
				<div className="laptop-screen"></div>
				<div className="laptop-keyboard"></div>
			</div>
		</div>
	);
}

export default Services;
