import mongoose from 'mongoose';

// create a schema for a note
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

// create model from schema
const Note = mongoose.model('Note', noteSchema);

export default Note;
