import { CardViewContainer, CardViewTitleContainer, CardTitle, CardViewDescriptionContainer, CardDescription, CardViewForm} from "./CardView"
import React from 'react'


interface NotesProps {
  NotesDetails:{
    id: string,
    title: string,
    description: string
  };
  updateContent: () => void
}

const CardViewComponent = ({ NotesDetails, updateContent }: NotesProps) => {
  return (
    <CardViewContainer>
      <CardViewForm>
        <CardViewTitleContainer contentEditable={true} suppressContentEditableWarning={true}>
          {
            NotesDetails ?
            <CardTitle type="text" value={NotesDetails.title} placeholder="Note Title"/>
            : <CardTitle type="text" value="Dummy Title" placeholder="Note Title"/>
          }
          
        </CardViewTitleContainer>
        <CardViewDescriptionContainer contentEditable={true} suppressContentEditableWarning={true}>
          {
            NotesDetails ? 
            <CardDescription value={NotesDetails.description} placeholder="Note Description"/>
            : <CardDescription value="Dummy description" placeholder="Note Description"/>
          }
        </CardViewDescriptionContainer>
      </CardViewForm>
      
    </CardViewContainer>
  )
}

export default CardViewComponent