import { useContext } from 'react';
import NotesContext from '@/hooks/notesContext';

interface NotesProps {
  title: string;
  description: string;
}

function StickyNotes() {
  const { notes, setNotes } = useContext<{
    notes: NotesProps[];
    setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
  }>(NotesContext);

  const handleDeleteNote = (title: string) => {
    const updatedNotes = notes.filter(
      (note: NotesProps) => note.title !== title,
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <>
      <div className="text-center">
        <h1 className="py-4 text-roxo-600">Lembretes - {notes.length}</h1>
      </div>
      <div className="mx-2 flex flex-wrap justify-start gap-6">
        {notes.map((note: NotesProps) => (
          <div key={note.title} className="relative w-48 bg-roxo-300">
            <h2 className="py-2 text-center font-bold">{note.title}</h2>
            <p className="mx-2 h-24 overflow-auto break-all text-justify scrollbar-thin">
              {note.description}
            </p>
            <button
              className="absolute top-0 right-0 m-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 bg-opacity-40 font-bold text-white"
              onClick={() => handleDeleteNote(note.title)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default StickyNotes;
