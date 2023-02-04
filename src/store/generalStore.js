import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		activeNavLink: false,
	},
	reducers: {
		setActiveNavLink: (state, action) => {
			state.activeNavLink = action.payload;
		},
	},
});

export const { setActiveNavLink } = generalSlice.actions;

export default generalSlice.reducer;
