import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardListComponent from './components/CardList';
import CardViewComponent from './components/CardView';
import Axios from 'axios';
import axios from 'axios';

interface NotesDetails {
  id: string,
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
    fetchNotes('http://localhost:3000/');
  }

  const updateNote = async () => {
    // const current_doc = ref.current
    
    // const updatedNote = {
    //   id: notes[selectedPos].id,
    //   title: noteTitle,
    //   desciption:noteDescription,
    // }
    // await axios.post('http://localhost:3000/noteUpdate', updatedNote);
    // fetchNotes('http://localhost:3000/');
  }

  const fetchNotes = async (url:string) => {
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
      }
    )
  }

  const setPosValueFromChild = (posValue:number) => {
    setSelectedPos(posValue)
  }

  useEffect(() => {
    console.log(ref.current)
    const url:string = "http://localhost:3000/"
    fetchNotes(url);
    return () => {}
  }, [])
  
  return (
    <div className="App">
      <div className="core-object">
        <CardListComponent NoteList={notesTitle} changeSelect={setPosValueFromChild}/>
        <CardViewComponent NotesDetails = {notes[selectedPos]} updateContent={updateNote}/>
      </div>
      <div className="settings-button-container">
        <button onClick={() => createNewNote()}>Create</button>
        <button onClick={() => updateNote()}>Delete</button>
        <button onClick={() => updateNote()}>Update</button>
      </div>
      
    </div>
  );
}

export default App;
