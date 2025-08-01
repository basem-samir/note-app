import NotesList from "./NotesList";
import FilterNotes from "./FilterNotes";

export default function MainContent() {
  return (
    <div className="py-10 px-5  overflow-auto max-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Notes</h1>
      <FilterNotes />
      <NotesList />
    </div>
  );
}
