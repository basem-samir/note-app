import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../store/slices/noteReducer";

export default function CategoryForm() {
  // state for new category
  const [category, setCategory] = useState("");
  const categories = useSelector((state) => state.notes.categories);
  console.log(categories);

  // dicpatch new category from redux
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (category.trim()) {
      dispatch(createCategory(category));
      setCategory("");
    } else {
      alert("Please enter a category name");
    }
  };

  return (
    <div className="category-form space-y-4">
      <h2 className="text-lg font-semibold mb-2">new category:</h2>
      <input
        className="w-full border rounded p-2"
        name="category"
        type="text"
        value={category}
        placeholder="new category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        onKeyDown={(e) => {
          e.code === "Enter" && handleSubmit();
        }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        create
      </button>
    </div>
  );
}
