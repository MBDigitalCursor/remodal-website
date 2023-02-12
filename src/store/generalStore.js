import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		activeNavLink: false,
		showMobileNav: false,
		heroChangingText: {
			word: "stand out",
			animation: "bounce-in-right",
		},
		showSendButton: false,
		formNameErrorMsg: null,
		formEmailErrorMsg: null,
		formNumberErrorMsg: null,
		formDescErrorMsg: null,
		showCalendar: false,
		showFormSuccess: false,
		callFormNameErrorMsg: null,
		callFormNumberErrorMsg: null,
		callDateAndTime: null,
	},
	reducers: {
		setActiveNavLink: (state, action) => {
			state.activeNavLink = action.payload;
		},
		setShowMobileNav: (state, action) => {
			state.showMobileNav = action.payload;
		},
		setHeroChangingText: (state, action) => {
			state.heroChangingText = action.payload;
		},
		setShowSendButton: (state, action) => {
			state.showSendButton = action.payload;
		},
		setFormNameErrorMsg: (state, action) => {
			state.formNameErrorMsg = action.payload;
		},
		setFormEmailErrorMsg: (state, action) => {
			state.formEmailErrorMsg = action.payload;
		},
		setFormNumberErrorMsg: (state, action) => {
			state.formNumberErrorMsg = action.payload;
		},
		setFormDescErrorMsg: (state, action) => {
			state.formDescErrorMsg = action.payload;
		},
		setShowCalendar: (state, action) => {
			state.showCalendar = action.payload;
		},
		setShowFormSuccess: (state, action) => {
			state.showFormSuccess = action.payload;
		},
		setCallFormNameErrorMsg: (state, action) => {
			state.callFormNameErrorMsg = action.payload;
		},
		setCallFormNumberErrorMsg: (state, action) => {
			state.callFormNumberErrorMsg = action.payload;
		},

		setCallDateAndTime: (state, action) => {
			state.callDateAndTime = action.payload;
		},
	},
});

export const { setActiveNavLink, setShowMobileNav, setHeroChangingText, setShowSendButton, setFormErrorMsg, setFormNameErrorMsg, setFormEmailErrorMsg, setFormNumberErrorMsg, setFormDescErrorMsg, setShowCalendar, setShowFormSuccess, setCallFormNameErrorMsg, setCallFormNumberErrorMsg, setCallDateAndTime } = generalSlice.actions;

export default generalSlice.reducer;
