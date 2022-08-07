import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import CardListComponent from './components/CardList';
import CardViewComponent from './components/CardView';
import axios from 'axios';

interface NotesDetails {
  _id: string,
  title: string,
  description: string
}

interface NewNoteType {
  title: string,
  description: string
}

function App() {
  const [notes, setNotes] = useState<NotesDetails[]>([]);
  const [notesTitle, setNotesTitle] = useState<string[]>([]);
  const [selectedPos, setSelectedPos] = useState<number>(0);

  const ref = useRef();

  const createNewNote = async () => {
    const newNote: NewNoteType = {
      title:'Title',
      description:'Description',
    }
    await axios.post('/api/noteInsert', newNote);
    fetchNotes('/api/', selectedPos);
  }

  const fetchNotes = async (url:string, posNumber: number = 0) => {
    axios.get(
      url,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
      ).then((res) => {
        
        const data: NotesDetails[] = res.data;
        let notesTitle : string[] = [];
        for (let i = 0; i < data.length; i++) {
          notesTitle.push(data[i].title);
        }
        setNotes(data);
        setNotesTitle(notesTitle);
        setPosValueFromChild(posNumber)
      }
    )
  }

  const setPosValueFromChild = (posValue:number) => {
    setSelectedPos(posValue)
  }

  useEffect(() => {
    const url:string = "/api/"
    fetchNotes(url);
    return () => {}
  }, [])
  
  return (
    <div className="App">
      <div className="core-object">
        <CardListComponent NoteList={notesTitle} changeSelect={setPosValueFromChild} createNew={createNewNote}/>
        <CardViewComponent NotesDetails = {notes[selectedPos]} fetchContent={fetchNotes} NotesPos={selectedPos}/>
      </div>
      
    </div>
  );
}

export default App;
