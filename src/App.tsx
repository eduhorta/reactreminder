import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StickyNotes from './components/StickyNotes/StickyNotes';
import NotesContext from './hooks/notesContext';
import Auth from './components/Auth/auth';

interface NotesProps {
  title: string;
  description: string;
}

function App() {
  const [notes, setNotes] = useState<NotesProps[]>(() => {
    const savedData = localStorage.getItem('notes');
    return savedData ? JSON.parse(savedData) : [];
  });

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <Header />
      <Auth />
      <Hero />
      <StickyNotes />
    </NotesContext.Provider>
  );
}

export default App;
