import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./slices/CountSlice";

export const store = configureStore({
  reducer: {
    count: CountReducer,
  },
});
