import React, { useRef } from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";
import { setFormDescErrorMsg, setFormEmailErrorMsg, setFormNameErrorMsg, setFormNumberErrorMsg, setShowSendButton } from "../../store/generalStore";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
	const { showSendButton, formDescErrorMsg, formNumberErrorMsg, formEmailErrorMsg, formNameErrorMsg } = useSelector((state) => state.generalSlice);
	const dispatch = useDispatch();
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

		if (!isValidEmail) return dispatch(setFormEmailErrorMsg("Enter a valid email address."));
		if (!isValidNumber) return dispatch(setFormNumberErrorMsg("Enter a valid phone number."));
		if (!isValidName) return dispatch(setFormNameErrorMsg("Enter a valid name."));
		if (dataToSend.description.length > 200 || dataToSend.description.length < 3) return dispatch(setFormDescErrorMsg("Message length incorrect."));

		axios.post("https://formspree.io/f/xoqrzvdp", dataToSend).then((res) => {
			if (res.status === 200) {
				dispatch(setShowSendButton(false));
				dispatch(setFormEmailErrorMsg(null));
				dispatch(setFormNumberErrorMsg(null));
				dispatch(setFormNameErrorMsg(null));
				dispatch(setFormDescErrorMsg(null));
			}
		});

		nameRef.current.value = "";
		emailRef.current.value = "";
		phoneRef.current.value = "";
		descRef.current.value = "";
	};

	const handleShowSend = () => {
		if (nameRef.current.value !== "" && emailRef.current.value !== "" && phoneRef.current.value !== "" && descRef.current.value !== "") {
			dispatch(setShowSendButton(true));
		} else {
			dispatch(setShowSendButton(false));
		}
	};

	return (
		<div className="contacts container">
			<div className="contacts-container">
				<div className="contacts-contacts">
					<h2 className="text-flicker-in-glow">Contact us</h2>
					<div className="email-phone">
						<div>
							<GoMail className="contacts-icon" />
							<a href="/">contact@remodal.lt</a>
						</div>
						<div>
							<BsFillTelephoneFill className="contacts-icon" />
							<a href="/">+370 620 69 420</a>
						</div>
					</div>
					<div className="contacts-location">
						<img
							src={require("../../assets/img/map.png")}
							alt=""
						/>
						<p>Vilnius, Lithuania</p>
					</div>
				</div>
				<div className="contacts-form">
					<div className="form-buttons">
						<label className="switch btn-color-mode-switch">
							<input
								type="checkbox"
								name="color_mode"
								id="color_mode"
								value="1"
							/>
							<label
								htmlFor="color_mode"
								data-on="Schedule a call"
								data-off="Fill in form"
								className="btn-color-mode-switch-inner"
							></label>
						</label>
					</div>
					<form onSubmit={(e) => handleSubmit(e)}>
						{formNameErrorMsg ? (
							<label
								className="formError"
								htmlFor="First name"
							>
								{formNameErrorMsg}
							</label>
						) : (
							<label htmlFor="First name">First name</label>
						)}
						<input
							autoComplete="off"
							onChange={() => {
								handleShowSend();
								dispatch(setFormNameErrorMsg(null));
							}}
							ref={nameRef}
							type="text"
							name="First name"
						/>
						{formEmailErrorMsg ? (
							<label
								className="formError"
								htmlFor="Email"
							>
								{formEmailErrorMsg}
							</label>
						) : (
							<label htmlFor="Email">E-mail address</label>
						)}
						<input
							autoComplete="off"
							onChange={() => {
								handleShowSend();
								dispatch(setFormEmailErrorMsg(null));
							}}
							ref={emailRef}
							type="text"
							name="Email"
						/>
						{formNumberErrorMsg ? (
							<label
								className="formError"
								htmlFor="Phone number"
							>
								{formNumberErrorMsg}
							</label>
						) : (
							<label htmlFor="Phone number">Phone number</label>
						)}
						<input
							autoComplete="off"
							onChange={() => {
								handleShowSend();
								dispatch(setFormNumberErrorMsg(null));
							}}
							ref={phoneRef}
							type="text"
							name="Phone number"
							placeholder="+3706*******"
						/>
						{formDescErrorMsg ? (
							<label
								className="formError"
								htmlFor="Description"
							>
								{formDescErrorMsg}
							</label>
						) : (
							<label htmlFor="Description">Brief description</label>
						)}
						<input
							autoComplete="off"
							onChange={() => {
								handleShowSend();
								dispatch(setFormDescErrorMsg(null));
							}}
							ref={descRef}
							type="text"
							name="Description"
						/>
					</form>
				</div>{" "}
				{showSendButton && (
					<button
						className="send-form-button send-form-btn-overlay send-form-left-port-btn"
						onClick={handleSubmit}
					>
						Send
					</button>
				)}
			</div>
			<div className="contacts-hr">
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
