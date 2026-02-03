import Note from '../models/Note.js';

// Get notes function
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error during getAllNotes.' });
  }
}

// Create a note function
export function createNote(req, res) {
  // Create a note
  res.status(201).json({ message: 'Note created successfully!' });
}

// Update a note function
export function updateNote(req, res) {
  // Update a note by id
  res.status(200).json({ message: 'Note updated successfully!' });
}

// Delete a note function
export function deleteNote(req, res) {
  // Delete a note by id
  res.status(200).json({ message: 'Note deleted successfully!' });
}
