import { SiJavascript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiHtml5, SiCss3, SiFigma, SiAdobeillustrator, SiTailwindcss, SiMaterialui } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import "./services.css";

function Services() {
	const [isVibrating, setIsVibrating] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVibrating((prevState) => !prevState);
		}, 2000);
		return () => clearInterval(intervalId);
	}, []);
	const links = ["About", "Services", "Portfolio", "Contacts"];

	const handleClickScroll = (i) => {
		const sectionScrollTo = links[i].toLowerCase();
		const element = document.querySelector(`.${sectionScrollTo}`);
		if (element) {
			const targetY = element.getBoundingClientRect().top + window.pageYOffset;
			const easing = (t) => (t < 0.4 ? 1 * t * t * t : (t - 0.5) * (2 * t - 2) * (2 * t - 2) + 1);
			const start = performance.now();
			const duration = 1500;

			window.requestAnimationFrame(function step(timestamp) {
				const time = timestamp - start;
				const percent = Math.min(time / duration, 1);
				const diff = targetY - window.pageYOffset;
				const easingDiff = diff * easing(percent);

				window.scrollTo(0, window.pageYOffset + easingDiff);

				if (time < duration) {
					window.requestAnimationFrame(step);
				}
			});
		}
	};

	return (
		<div className="services container">
			<div className="services-desc">
				<h2>Responsive website development</h2>
				<h3>Custom website design & individual graphic design</h3>
				<p>
					We are here to craft you unique corporate, e-commerce or personal digital <br /> home to stand out from the pack and tell the story with on-going support. <br /> Enhance your online presence
				</p>
				<button
					onClick={() => handleClickScroll(3)}
					className="services-btn services-in-left-port-btn services-btn-overlay"
				>
					Let’s build
				</button>
				<div className="tools-container">
					<h2 className="tools-h2">Development tools and technologies</h2>
					<div className="tools-icons-container">
						<SiHtml5 />
						<SiJavascript />
						<SiReact />
						<SiRedux />
						<SiNodedotjs />
						<SiExpress />
						<SiCss3 />
						<FaSass />
						<SiTailwindcss />
						<SiMaterialui />
						<SiFigma />
						<SiAdobeillustrator />
					</div>
				</div>
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
