import React from "react";
import "./aboutFingers.css";
import redfinger1 from "../../assets/img/redfinger1.png";
import redfinger2 from "../../assets/img/redfinger2.png";
import redfinger3 from "../../assets/img/redfinger3.png";
import redfinger4 from "../../assets/img/redfinger4.png";

function AboutFingers() {
	return (
		<div className="about-finger-container">
			<div className="finger1 slide-in-right-red1">
				<img
					src={redfinger1}
					alt="red color streak"
				/>
			</div>
			<div className="finger2 slide-in-right-red2">
				<img
					src={redfinger2}
					alt="red color streak"
				/>
			</div>
			<div className="finger3 slide-in-right-red3 ">
				<img
					src={redfinger3}
					alt="red color streak"
				/>
			</div>
			<div className="finger4 slide-in-right-red4">
				<img
					src={redfinger4}
					alt="red color streak"
				/>
			</div>
		</div>
	);
}

export default AboutFingers;
