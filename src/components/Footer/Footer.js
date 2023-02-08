import React, { useRef, useState } from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";

function Footer() {
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const descRef = useRef();

	const handleSubmit = () => {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const phonePattern = /^\+\d{1,15}$/;
		const firstNamePattern = /^[a-zA-Z]+$/;

		const dataToSend = {
			firstName: nameRef.current.value,
			email: emailRef.current.value,
			phoneNumber: phoneRef.current.value,
			description: descRef.current.value,
		};

		const isValidEmail = regex.test(dataToSend.email);
		const isValidNumber = phonePattern.test(dataToSend.phoneNumber);
		const isValidName = firstNamePattern.test(dataToSend.firstName);

		if (!isValidEmail) return console.log("Email bad");
		if (!isValidNumber) return console.log("Number bad");
		if (!isValidName) return console.log("Name bad");
		if (dataToSend.description.length > 200) return console.log("Too much symbols");

		console.log("dataToSend ===", dataToSend);

		nameRef.current.value = "";
		emailRef.current.value = "";
		phoneRef.current.value = "";
		descRef.current.value = "";
	};

	return (
		<div className='footer container'>
			<div className='contact-container'>
				<div className='footer-contacts'>
					<h2 className='text-flicker-in-glow'>Contact us</h2>
					<div className='email-phone'>
						<div>
							<GoMail className='footer-icon' />
							<a href='/'>contact@remodal.lt</a>
						</div>
						<div>
							<BsFillTelephoneFill className='footer-icon' />
							<a href='/'>+370 620 69 420</a>
						</div>
					</div>
					<div className='footer-location'>
						<img
							src={require("../../assets/img/map.png")}
							alt=''
						/>
						<p>Vilnius, Lithuania</p>
					</div>
				</div>
				<div className='footer-form'>
					<div className='form-buttons'>
						<label className='switch btn-color-mode-switch'>
							<input
								type='checkbox'
								name='color_mode'
								id='color_mode'
								value='1'
							/>
							<label
								htmlFor='color_mode'
								data-on='Schedule a call'
								data-off='Fill in form'
								className='btn-color-mode-switch-inner'
							></label>
						</label>
					</div>
					<form onSubmit={(e) => handleSubmit(e)}>
						<label htmlFor='First name'>First name</label>
						<input
							ref={nameRef}
							type='text'
							name='First name'
						/>
						<label htmlFor='Email'>E-mail address</label>
						<input
							ref={emailRef}
							type='text'
							name='Email'
						/>
						<label htmlFor='Phone number'>Phone number</label>
						<input
							ref={phoneRef}
							type='text'
							name='Phone number'
						/>
						<label htmlFor='Description'>Brief description</label>
						<input
							ref={descRef}
							type='text'
							name='Description'
						/>
					</form>
				</div>
				<button
					className='send-form-button send-form-btn-overlay send-form-left-port-btn'
					onClick={handleSubmit}
				>
					Send
				</button>
			</div>
			<div className='footer-hr'>
				<p>
					Responsive web development for businesses and personalities <br /> Individual design approach made simple
				</p>
				<a href='/'>
					<GoMarkGithub />
				</a>
			</div>
		</div>
	);
}

export default Footer;
