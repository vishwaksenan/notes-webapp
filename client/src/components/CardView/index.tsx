import { CardViewContainer, CardViewTitleContainer, CardTitle, CardViewDescriptionContainer, CardDescription} from "./CardView"
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
      <CardViewTitleContainer contentEditable={true} suppressContentEditableWarning={true}>
        {
          NotesDetails ?
          <CardTitle>{NotesDetails.title}</CardTitle>
          : <CardTitle>Dummy Title</CardTitle>
        }
        
      </CardViewTitleContainer>
      <CardViewDescriptionContainer contentEditable={true} suppressContentEditableWarning={true}>
        {
          NotesDetails ? 
          <CardDescription>{NotesDetails.description}</CardDescription>
          : <CardDescription>Dummy Description</CardDescription>
        }
      </CardViewDescriptionContainer>
    </CardViewContainer>
  )
}

export default CardViewComponent