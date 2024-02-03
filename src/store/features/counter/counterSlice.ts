import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const yourFeatureSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
});

export const { increment } = yourFeatureSlice.actions;

export default yourFeatureSlice.reducer;
