import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StickyNotes from './components/StickyNotes/StickyNotes';
import NotesContext from './hooks/notesContext';
import { Auth } from './components/Auth/auth';

interface NotesProps {
  title: string;
  description: string;
}

interface AppProps {
  db: firebase.firestore.Firestore;
}

function App({ db }: AppProps) {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  useEffect(() => {
    db.collection('notes').onSnapshot((snapshot) => {
      const updatedNotes = snapshot.docs.map((doc) => doc.data() as NotesProps);
      setNotes(updatedNotes);
    });
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes, db }}>
      <Header />
      <Auth />
      <Hero />
      <StickyNotes />
    </NotesContext.Provider>
  );
}

export default App;
