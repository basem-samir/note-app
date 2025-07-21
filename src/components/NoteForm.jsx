import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../store/slices/noteReducer";

export default function NoteForm() {
  // state
  const [textNote, setTextNote] = useState("");
  const [category, setCategory] = useState("");

  // get categoris from redux
  const categories = useSelector((state) => state.notes.categories);

  // dispatch create note function from redux
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (textNote.trim().length > 0) {
      dispatch(createNote({ text: textNote, category }));
      setTextNote("");
      setCategory("");
    } else {
      alert("please fill text note");
    }
  };

  return (
    <div className="note-form space-y-4">
      <h2 className="text-lg font-semibold mb-2">new note:</h2>
      <input
        className="w-full border rounded p-2"
        name="note"
        type="text"
        value={textNote}
        placeholder="new note"
        onChange={(e) => {
          setTextNote(e.target.value);
        }}
        onKeyDown={(e) => {
          e.code === "Enter" && handleSubmit();
        }}
      />
      <select
        className="w-full border rounded p-2"
        name="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">select category</option>
        {categories.map((cattegory) => (
          <option value={cattegory} key={cattegory}>
            {cattegory}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        create
      </button>
    </div>
  );
}
