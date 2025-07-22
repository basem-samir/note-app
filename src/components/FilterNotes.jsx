import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../store/slices/noteReducer";

export default function FilterNotes() {
  const categories = useSelector((state) => state.notes.categories);
  const currentFilter = useSelector((state) => state.notes.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(changeFilters(e.target.value));
  };

  return (
    <select
      value={currentFilter}
      onChange={handleChangeFilter}
      className="p-2 border rounded"
    >
      <option value="all">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      <option value="deleted">deleted</option>
    </select>
  );
}
