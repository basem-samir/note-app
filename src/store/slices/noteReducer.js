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
  reducers: {
    createNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        text: action.payload.text,
        category: action.payload.category,
        createdAt: new Date().toLocaleString(),
        deleted: false,
      };
      state.notes.push(newNote);
    },
  },
});

export const { createNote } = noteSlice.actions;
export default noteSlice.reducer;
