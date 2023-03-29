import React, { useContext } from 'react';
import NotesContext from '@/hooks/notesContext';

function StickyNotes() {
  const { notes } = useContext<any>(NotesContext);
  return (
    <>
      <div className="text-center">
        <h1 className="py-4 text-roxo-600">Lembretes - {notes.length}</h1>
      </div>
      <div className="mx-2 flex flex-wrap justify-start gap-6">
        {notes.map((notes: any) => (
          <div key={notes.title} className=" w-48  bg-roxo-300">
            <h2 className="py-2 text-center font-bold">{notes.title}</h2>
            <p className="mx-2 h-auto overflow-auto break-all text-justify scrollbar-thin">
              {notes.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StickyNotes;
