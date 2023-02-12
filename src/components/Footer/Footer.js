import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "./Switch/Switch";
import axios from "axios";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GoMarkGithub } from "react-icons/go";
import { setFormDescErrorMsg, setFormEmailErrorMsg, setFormNameErrorMsg, setFormNumberErrorMsg, setShowCalendar, setShowFormSuccess, setShowSendButton } from "../../store/generalStore";
import DateTimePicker from "./DateTimePicker/DateTimePicker";
function Footer() {
	const { showSendButton, formDescErrorMsg, formNumberErrorMsg, formEmailErrorMsg, formNameErrorMsg, showCalendar, showFormSuccess } = useSelector((state) => state.generalSlice);
	const [value, setValue] = useState(false);
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
				dispatch(setShowFormSuccess(true));
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

	useEffect(() => {
		setTimeout(() => {
			dispatch(setShowFormSuccess(false));
		}, 5000);
	}, [showFormSuccess, dispatch]);

	useEffect(() => {
		if (showCalendar) dispatch(setShowSendButton(false));
	}, [showCalendar, dispatch]);

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
				<div className="contacts-form-container">
					<div className="contacts-form">
						<div className="switch-container">
							<Switch
								onColor="#D9D9D9"
								isOn={value}
								handleToggle={() => {
									setValue(!value);
									dispatch(setShowCalendar(!showCalendar));
								}}
							/>
						</div>
						{showCalendar ? (
							<div className="date-time-wrapper">
								<DateTimePicker />
							</div>
						) : (
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
						)}
					</div>
					{!showCalendar && (
						<div>
							{showFormSuccess ? (
								<button className="send-form-button send-form-btn-overlay send-form-left-port-btn form-success">Form sent</button>
							) : (
								<button
									className={`${showSendButton ? "send-form-button send-form-btn-overlay send-form-left-port-btn" : "hide-send-button"}`}
									onClick={handleSubmit}
								>
									Send
								</button>
							)}
						</div>
					)}
				</div>
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
