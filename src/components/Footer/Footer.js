import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
	return (
		<div className="footer container">
			<div className="footer-contacts">
				<h2>Contact us</h2>
				<div className="email-phone">
					<a href="/">
						<GoMail />
						contact@remodal.lt
					</a>
					<a href="/">
						<BsFillTelephoneFill />
						+370 620 69 420
					</a>
				</div>
				<a href="/">
					<GoMarkGithub />
				</a>
			</div>
			<div className="footer-location">
				<img
					src={require("../../assets/img/map.png")}
					alt=""
				/>
				<p>Vilnius, Lithuania</p>
			</div>
		</div>
	);
}

export default Footer;
