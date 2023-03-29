import { createContext } from 'react';

interface NotesContextProps {
  notes: NotesProps[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

interface NotesProps {
  title: string;
  description: string;
}

const NotesContext = createContext<NotesContextProps>({
  notes: [],
  setNotes: () => {},
});

export default NotesContext;
