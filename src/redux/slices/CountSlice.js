import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      console.log(state, action.payload);
      return state + action.payload;
    },
    decrement: (state, action) => {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
