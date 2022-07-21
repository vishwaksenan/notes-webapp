import { CardViewContainer, CardViewTitleContainer, CardTitle, CardViewDescriptionContainer, CardDescription, CardViewSettingsContainer, CardUpdate, CardDelete } from "./CardView"
import React from 'react'


interface NotesProps {
  NotesDetails:{
    title: string,
    description: string
  };
}

const CardViewComponent = ({ NotesDetails }: NotesProps) => {
  return (
    <CardViewContainer>
      <CardViewTitleContainer contentEditable={true}>
        <CardTitle>{NotesDetails.title}</CardTitle>
      </CardViewTitleContainer>
      <CardViewDescriptionContainer contentEditable={true}>
        <CardDescription>{NotesDetails.description}</CardDescription>
      </CardViewDescriptionContainer>
      <CardViewSettingsContainer>
        <CardUpdate>Update</CardUpdate>
        <CardDelete>Delete</CardDelete>
      </CardViewSettingsContainer>
    </CardViewContainer>
  )
}

export default CardViewComponent