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
	},
});

export const { setActiveNavLink, setShowMobileNav, setHeroChangingText, setShowSendButton, setFormErrorMsg, setFormNameErrorMsg, setFormEmailErrorMsg, setFormNumberErrorMsg, setFormDescErrorMsg } = generalSlice.actions;

export default generalSlice.reducer;
