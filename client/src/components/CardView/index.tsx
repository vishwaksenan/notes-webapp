import { CardViewContainer, CardViewTitleContainer, CardTitle, CardViewDescriptionContainer, CardDescription, CardViewForm} from "./CardView"
import React, { useState, useEffect } from 'react'
import axios from "axios";

interface NotesProps {
  NotesDetails:{
    _id: string,
    title: string,
    description: string,
  };
  fetchContent: (url:string,posNumber: number) => void;
  NotesPos: number
}

interface UpdateNoteType {
  id: string,
  title: string,
  description: string,
}

const CardViewComponent = ({ NotesDetails, fetchContent, NotesPos }: NotesProps) => {

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [pos, setPos] = useState<number>(0);
  const [noteid, setId] = useState<string>("")

  useEffect(() => {
    NotesDetails ? setTitle(NotesDetails.title): setTitle("Title not found")
    NotesDetails ? setDescription(NotesDetails.description): setDescription("Description not found")
    NotesDetails ? setId(NotesDetails._id): setId("ID not found")
    NotesPos ? setPos(NotesPos): setPos(0)
  }, [NotesDetails])
  

  const updateNote = async (event:any) => {
    event.preventDefault();
    const topic = document.getElementById("title") as HTMLInputElement
    const desc = document.getElementById("description") as HTMLInputElement
    if(topic && desc){
      if(!topic.value){
        alert('Topic cannot be empty')
        return
      }
      if(!desc.value){
        alert('Description cannot be empty')
        return
      }
      const updatenote: UpdateNoteType = {
        id: noteid,
        title: topic.value,
        description: desc.value
      }
      await axios.post('/api/noteUpdate', updatenote)
      fetchContent('/api/', pos)
    }
  }

  const deleteNote = async (event: any) => {
    event.preventDefault();
    const deleteNote = {
      id: noteid
    }
    await axios.post('/api/noteDelete', deleteNote);
    (pos > 0) ? fetchContent('/api/', pos - 1): fetchContent('/api/', pos)
  }

  return (
    <CardViewContainer>
      <CardViewForm>
        <CardViewTitleContainer>
          <CardTitle type="text" value={title} placeholder="Note Title" id="title" onChange={e => setTitle(e.target.value)}/>
        </CardViewTitleContainer>
        <CardViewDescriptionContainer>
          <CardDescription value={description} placeholder="Note Description" id="description" onChange={e => setDescription(e.target.value)}/>
        </CardViewDescriptionContainer>
        <button name="update" type="submit" onClick={(e:any) => updateNote(e)}>Update</button>
        <button name="delete" onClick={(e:any) => deleteNote(e)}>Delete</button>
      </CardViewForm>
    </CardViewContainer>
  )
}

export default CardViewComponent