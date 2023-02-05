import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		activeNavLink: false,
		showMobileNav: false,
	},
	reducers: {
		setActiveNavLink: (state, action) => {
			state.activeNavLink = action.payload;
		},
		setShowMobileNav: (state, action) => {
			state.showMobileNav = action.payload;
		},
	},
});

export const { setActiveNavLink, setShowMobileNav } = generalSlice.actions;

export default generalSlice.reducer;
