import { createContext } from 'react';

interface NotesContextType {
  notes: { title: string; description: string }[];
  setNotes: React.Dispatch<
    React.SetStateAction<{ title: string; description: string }[]>
  >;
}

const NotesContext = createContext<NotesContextType>({
  notes: [],
  setNotes: () => {
    console.log('setNotes function called');
  },
});

export default NotesContext;
