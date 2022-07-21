import {CardListContainer, CardListSection, List, NotesCreateButton} from './CardList'
import React from 'react'

interface NotesDetails {
  NotesContent:{
    title: string,
    description: string
  };
}

type NotesDetailsList = {
  NotesList: string[];
};

const CardListComponent = ({ NotesList }: NotesDetailsList) => {
  console.log(NotesList)
  return (
    <CardListContainer>
      <>
      {
        NotesList.map((notes) => <CardListSection><List>{notes}</List></CardListSection>)
      }
      </>
      <CardListSection>  
        <NotesCreateButton>Create</NotesCreateButton>
      </CardListSection> 
    </CardListContainer>
  )
}

export default CardListComponent