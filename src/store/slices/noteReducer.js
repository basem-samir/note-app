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
    deleteNote: (state, action) => {
      const deletedNote = state.notes.find(
        (note) => note.id === action.payload
      );
      if (deletedNote) {
        deletedNote.deleted = true;
      }
    },
    createCategory: (state, action) => {
      const newCategory = action.payload.trim().toLowerCase();
      if (!newCategory) {
        alert("Category name cannot be empty");
        return;
      }

      const isFound = state.categories.find(
        (category) => category.toLowerCase() === newCategory
      );

      if (isFound) {
        alert("This category already exists");
      } else {
        state.categories.push(action.payload.trim());
      }
    },
    changeFilters: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { createNote, deleteNote, createCategory, changeFilters } =
  noteSlice.actions;
export default noteSlice.reducer;
