import {CardListContainer, CardListSection, List} from './CardList'
import React from 'react'

interface NotesDetails {
  NoteList: string[];
  changeSelect: (pos: number) => void
  createNew: () => void
}

const CardListComponent = (props:NotesDetails) => {
  return (
    <CardListContainer>
      <button onClick={() => props.createNew()}>Create</button>
      <>
      {
        props.NoteList.map((notes, key) => <CardListSection key={key} onClick={() => props.changeSelect(Number(key))}><List>{notes}</List></CardListSection>)
      }
      </>
    </CardListContainer>
  )
}

CardListComponent.propTypes = {}

export default CardListComponent