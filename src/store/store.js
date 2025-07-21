import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteReducer";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});
