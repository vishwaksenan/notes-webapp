import mongoose from 'mongoose';

export interface NotesType {
  title: string;
  description: string;
}

export const notesSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
});

const Notes = mongoose.model<NotesType>('Notes', notesSchema);
export default Notes;