import NotesContext from '@/hooks/notesContext';
import React, { useContext, useState } from 'react';

interface NewStickyModalProps {
  onClose: () => void;
}

interface FormDataProps {
  title: string;
  description: string;
}

function NewStickyModal({ onClose }: NewStickyModalProps) {
  const [stickyTitle, setStickyTitle] = useState('');
  const [stickyNote, setStickyNote] = useState('');
  const { notes, setNotes } = useContext(NotesContext);

  const formData: FormDataProps = {
    title: stickyTitle,
    description: stickyNote,
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotes([...notes, formData]);
    onClose();
  }

  return (
    <div className="fixed inset-0 left-0 z-50 h-screen w-full bg-gray-700 bg-opacity-80 pt-24 pb-6 duration-500 ease-in-out">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="px-4 py-5 sm:px-6">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="note"
            >
              Title
            </label>
            <input
              className="border font-bold"
              type="text"
              placeholder="Title"
              onChange={(event) => setStickyTitle(event.target.value)}
              name="title"
            />
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-4">
              <label className="mb-2 block font-bold text-gray-700">Note</label>
              <textarea
                className="focus:shadow-outline w-full resize-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                rows={3}
                onChange={(event) => setStickyNote(event.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white focus:outline-none hover:bg-blue-700"
              >
                Save
              </button>
              <button
                type="button"
                className="focus:shadow-outline ml-4 rounded bg-gray-500 py-2 px-4 font-bold text-white focus:outline-none hover:bg-gray-700"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewStickyModal;
