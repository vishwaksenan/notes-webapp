import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardListComponent from './components/CardList';
import CardViewComponent from './components/CardView';

function App() {
  const notesTitle = ['Title 1', 'Title 2', 'Title 3']
  const notes = [{
      title:'Title 1',
      description: 'Description 1'
    },
    {
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      title: 'Title 2',
      description: 'Description 2'
    }
  ]
  return (
    <div className="App">
      <CardListComponent NotesList={notesTitle}/>
      <CardViewComponent NotesDetails={notes[1]}/>
    </div>
  );
}

export default App;
