import CategoryForm from "./CategoryForm";
import NoteForm from "./NoteForm";

export default function Sidebar() {
  return (
    <div className="space-y-8">
      <NoteForm />
      <CategoryForm />
    </div>
  );
}
