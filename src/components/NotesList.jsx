import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../store/slices/noteReducer";

export default function NotesList() {
  // get notes from redux
  const notes = useSelector((state) => state.notes.notes);
  console.log(notes);

  // dispatch delete note
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="space-y-4 mt-6">
      {notes
        .filter((note) => !note.deleted)
        .map((note) => (
          <div
            key={note.id}
            className="note bg-white p-4 rounded-xl shadow-md flex flex-col gap-3"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800 break-words">
                {note.text}
              </h3>

              <div className="flex gap-2">
                <button className="text-xl">✒️</button>

                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-xl"
                >
                  ❌
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span className="text-[#555] text-sm rounded">
                {note.category}
              </span>

              <span className="text-[#555] text-sm rounded">
                {note.createdAt}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
