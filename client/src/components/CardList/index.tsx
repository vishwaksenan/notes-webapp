import {CardListContainer, CardListSection, List} from './CardList'
import React from 'react'

interface NotesDetails {
  NotesContent:{
    title: string,
    description: string
  };
}

type NotesList = string[];

const CardListComponent = (NotesListProp: NotesList) => {
  return (
    <CardListContainer>
      <>
      {
        NotesListProp.map((key, notes) => <CardListSection key={key}><List>{notes}</List></CardListSection>)
      }
      </>
    </CardListContainer>
  )
}

CardListComponent.propTypes = {}

export default CardListComponent