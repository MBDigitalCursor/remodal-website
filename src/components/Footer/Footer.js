import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
	return (
		<div className="footer container">
			<div className="contact-container">
				<div className="footer-contacts">
					<h2>Contact us</h2>
					<div className="email-phone">
						<div>
							<GoMail className="footer-icon" />
							<a href="/">contact@remodal.lt</a>
						</div>
						<div>
							<BsFillTelephoneFill className="footer-icon" />
							<a href="/">+370 620 69 420</a>
						</div>
					</div>
					<div className="footer-location">
						<img
							src={require("../../assets/img/map.png")}
							alt=""
						/>
						<p>Vilnius, Lithuania</p>
					</div>
				</div>
				<div className="footer-form">
					<div className="form-buttons">
						<button>Fill in a form</button>
						<button>Schedule a call</button>
					</div>
					<form action="">
						<label htmlFor="name">First name</label>
						<input type="text" />
						<label htmlFor="name">E-mail address</label>
						<input type="text" />
						<label htmlFor="name">Phone number</label>
						<input type="text" />
						<label htmlFor="name">Brief description</label>
						<input type="text" />
					</form>
				</div>
			</div>
			<div className="footer-hr">
				<p>
					Responsive web development for businesses and personalities <br /> Individual design approach made simple
				</p>
				<a href="/">
					<GoMarkGithub />
				</a>
			</div>
		</div>
	);
}

export default Footer;
