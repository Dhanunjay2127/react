import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  let user = await fetch("https://randomuser.me/api/");
  return user.json();
});

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

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("HERE", action.payload.results[0]);
      state.user = action.payload.results[0];
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.err = action.payload.error;
    });
  },
});

export const { increment, decrement } = countSlice.actions;
export const counterReduce = countSlice.reducer;
export const userReducer = userSlice.reducer;
