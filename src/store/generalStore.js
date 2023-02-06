import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		activeNavLink: false,
		showMobileNav: false,
		heroChangingText: "stand out",
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
	},
});

export const { setActiveNavLink, setShowMobileNav, setHeroChangingText } = generalSlice.actions;

export default generalSlice.reducer;
