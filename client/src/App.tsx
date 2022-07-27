import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardListComponent from './components/CardList';
import CardViewComponent from './components/CardView';
import Axios from 'axios';
import axios from 'axios';

interface NotesDetails {
  title: string,
  description: string
}

// const createNewNote = async (url:string) => {
//   const newNote = {
//     title:'Title',
//     desciption:'Description'
//   }
//   await axios.post(url, newNote);
//   fetchNotes(url);
// }

// const updateNote = async (url:string, noteID: string, noteTitle: string, noteDescription: string) => {
//   const updatedNote = {
//     id: noteID,
//     title: noteTitle,
//     desciption:noteDescription,
//   }
//   await axios.post(url, updatedNote);
//   fetchNotes(url);
// }

// const deleteNote = async (url:string, noteID: string) => {
//   await axios.post(url, noteID);
//   fetchNotes(url);
// }

function App() {
  const [notes, setNotes] = useState<NotesDetails[]>([]);
  const [notesTitle, setNotesTitle] = useState<string[]>([]);
  const [selectedPos, setSelectedPos] = useState<number>(0);

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
        const data = res.data;
        let notesData : NotesDetails[] = [];
        let notesTitle : string[] = [];
        for (let i = 0; i < data.length; i++) {
          const notes:NotesDetails = {
            title: data[i].title,
            description: data[i].description,
          }
          notesData.push(notes)
          notesTitle.push(data[i].title);
        }
        console.log(notesData);
        setNotes(notesData);
        setNotesTitle(notesTitle);
      }
    )
  }

  useEffect(() => {
    const url:string = "http://localhost:3000/"
    fetchNotes(url);
    return () => {}
  }, [])
  
  return (
    <div className="App">
      <div className="core-object">
        <CardListComponent NotesList={notesTitle}/>
        <CardViewComponent NotesDetails={notes[selectedPos]}/>
      </div>
      <div className="settings-button-container">
        <button onClick={() => fetchNotes('http://localhost:3000/')}>Fetch</button>
        <button onClick={() => fetchNotes('http://localhost:3000/')}>Create</button>
        <button onClick={() => fetchNotes('http://localhost:3000/')}>Delete</button>
        <button onClick={() => fetchNotes('http://localhost:3000/')}>Update</button>
      </div>
      
    </div>
  );
}

export default App;
