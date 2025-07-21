import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
    categories: [
      "traveling",
      "personal",
      "living",
      "home",
      "work",
      "sports",
      "foods",
      "education",
    ],
    filter: "all",
    searchQuery: "",
  },
  reducers: {},
});

export const {} = noteSlice.actions;
export default noteSlice.reducer;
