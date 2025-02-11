import { configureStore } from "@reduxjs/toolkit";
import { counterReduce, userReducer } from "./slices/CountSlice";

export const store = configureStore({
  reducer: {
    count: counterReduce,
    user: userReducer,
  },
});
