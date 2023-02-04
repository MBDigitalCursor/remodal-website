import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
	name: "generalSlice",
	initialState: {
		testState: "",
	},
	reducers: {
		setTestState: (state, action) => {
			state.testState = action.payload;
		},
	},
});

export const { setTestState } = generalSlice.actions;

export default generalSlice.reducer;
