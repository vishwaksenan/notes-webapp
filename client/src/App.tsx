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
      <div className="notes-title">
        <div className='note-card-container'>
          <div className="note-card">
            <p>Title 1</p>
          </div>
          <div className="note-card">
            <p>Title 2</p>
          </div>
          <div className="note-card">
            <p>Title 3</p>
          </div>
        </div>
        <div>
          <button>Create a new</button>
        </div>
      </div>
      <div className="notes-view">
        <div className="note-title-view" contentEditable={true}>
          <p>Title 1</p>
        </div>
        <div className="note-description" contentEditable={true}>
          <p>Description 1</p>
        </div>
        <div className="button-section">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
      <CardListComponent />
      <CardViewComponent />
    </div>
  );
}

export default App;
