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

// const deleteNote = async (url:string, noteID: string) => {
//   await axios.post(url, noteID);
//   fetchNotes(url);
// }

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
    await axios.post('http://localhost:3000/noteInsert', newNote);
    fetchNotes('http://localhost:3000/', selectedPos);
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
    const url:string = "http://localhost:3000/"
    fetchNotes(url);
    return () => {}
  }, [])
  
  return (
    <div className="App">
      <div className="core-object">
        <CardListComponent NoteList={notesTitle} changeSelect={setPosValueFromChild}/>
        <CardViewComponent NotesDetails = {notes[selectedPos]} fetchContent={fetchNotes} NotesPos={selectedPos}/>
      </div>
      <div className="settings-button-container">
        <button onClick={() => createNewNote()}>Create</button>
      </div>
      
    </div>
  );
}

export default App;
