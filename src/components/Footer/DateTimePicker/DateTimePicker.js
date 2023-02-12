import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import "./dateTimePicker.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCallDateAndTime, setCallFormNameErrorMsg, setCallFormNumberErrorMsg, setShowFormSuccess, setShowSendButton } from "../../../store/generalStore";
import { useRef } from "react";
import { format } from "date-fns";

function DateTimePicker() {
	const { callFormNameErrorMsg, callFormNumberErrorMsg, showFormSuccess, showSendButton, callDateAndTime } = useSelector((state) => state.generalSlice);
	const callNameRef = useRef();
	const phoneNumberRef = useRef();
	const themeRef = useRef();
	const dispatch = useDispatch();

	const handleBookCall = () => {
		const phonePattern = /^\+\d{1,15}$/;
		const firstNamePattern = /^[a-zA-Z]+$/;

		console.log("callDateAndTime ===", callDateAndTime);
		const callObj = {
			callDateAndTime: callDateAndTime,
			callName: callNameRef.current.value,
			callPhoneNumber: phoneNumberRef.current.value,
			callTheme: themeRef.current.value,
		};

		const isValidNumber = phonePattern.test(callObj.callPhoneNumber);
		const isValidName = firstNamePattern.test(callObj.callName);
		if (!isValidNumber) return dispatch(setCallFormNumberErrorMsg("Enter a valid phone number."));
		if (!isValidName) return dispatch(setCallFormNameErrorMsg("Enter a valid name."));

		if (isValidName && isValidNumber) {
			console.log("callObj ===", callObj);
			// axios.post("https://formspree.io/f/xoqrzvdp", callObj).then((res) => {
			// 	if (res.status === 200) {
			// 		dispatch(setShowFormSuccess(true));
			// 	}
			// });
		}

		callNameRef.current.value = "";
		phoneNumberRef.current.value = "";
		themeRef.current.value = "";
	};

	const handleShowSend = () => {
		if (callNameRef.current.value !== "" && phoneNumberRef.current.value !== "") {
			dispatch(setShowSendButton(true));
		} else {
			dispatch(setShowSendButton(false));
		}
	};

	return (
		<div className="call-form-container">
			<form onSubmit={(e) => handleBookCall(e)}>
				<div className="date-time-inputs">
					{callFormNameErrorMsg ? (
						<label
							className="formError"
							htmlFor="First name"
						>
							{callFormNameErrorMsg}
						</label>
					) : (
						<label htmlFor="First name">First name</label>
					)}
					<input
						autoComplete="off"
						onChange={() => {
							handleShowSend();
							dispatch(setCallFormNameErrorMsg(null));
						}}
						ref={callNameRef}
						type="text"
						name="First name"
					/>
					{callFormNumberErrorMsg ? (
						<label
							className="formError"
							htmlFor="Phone number"
						>
							{callFormNumberErrorMsg}
						</label>
					) : (
						<label htmlFor="Phone number">Phone number</label>
					)}
					<input
						autoComplete="off"
						onChange={() => {
							handleShowSend();
							dispatch(setCallFormNumberErrorMsg(null));
						}}
						ref={phoneNumberRef}
						type="text"
						name="Phone number"
						placeholder="+3706*******"
					/>

					<label htmlFor="Description">Let's talk about</label>

					<input
						autoComplete="off"
						onChange={() => {
							handleShowSend();
						}}
						ref={themeRef}
						type="text"
						name="Description"
					/>
				</div>
				<Datetime
					onChange={(e) => {
						const date = format(new Date(e._d), "yyyy-MM-dd-hh-aa-mm");
						dispatch(setCallDateAndTime(date));
					}}
					className="date-time"
					timeFormat={true}
					open={true}
				/>
			</form>

			{showFormSuccess ? (
				<button className="send-form-button send-form-btn-overlay send-form-left-port-btn form-success">Form sent</button>
			) : (
				<button
					className={`${showSendButton ? "send-form-button send-form-btn-overlay send-form-left-port-btn" : "hide-send-button"}`}
					onClick={handleBookCall}
				>
					Send
				</button>
			)}
		</div>
	);
}

export default DateTimePicker;
