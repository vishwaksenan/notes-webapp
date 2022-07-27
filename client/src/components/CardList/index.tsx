import {CardListContainer, CardListSection, List} from './CardList'
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
  return (
    <CardListContainer>
      <>
      {
        NotesList.map((notes) => <CardListSection><List>{notes}</List></CardListSection>)
      }
      </>
    </CardListContainer>
  )
}

export default CardListComponent