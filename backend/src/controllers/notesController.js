import Note from '../models/Note.js';

// Get all notes function
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // sort by created date in desc order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res
      .status(500)
      .json({ message: 'Internal server error during getAllNotes.' });
  }
}

// Get a note by id function
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note)
      return res
        .status(404)
        .json({ message: 'Note with that id not found! Nothing to return.' });

    res.status(200).json(note);
  } catch (error) {
    console.error('Error in getNoteById controller', error);
    res
      .status(500)
      .json({ message: 'Internal server error during getNotebyId.' });
  }
}

// Create a note function
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content }); // key and value are the same for both. Same as title:title, content:content

    const savedNote = await note.save();
    res
      .status(201)
      .json({ message: 'Note created successfully' }, { savedNote });
  } catch (error) {
    console.error('Error in createNote controller', error);
    res
      .status(500)
      .json({ message: 'Internal server error during createNote' });
  }
}

// Update a note function
export async function updateNote(req, res) {
  // Update a note by id
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );

    if (!updatedNote)
      return res
        .status(404)
        .json({ message: 'Note with that id not found! Nothing updated.' });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error in updateNote controller', error);
    res
      .status(500)
      .json({ message: 'Internal server error during updateNote' });
  }
}

// Delete a note function
export async function deleteNote(req, res) {
  // Delete a note by id
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res
        .status(404)
        .json({ message: 'Note with that id not found! Nothing deleted.' });

    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    console.error('Error in deleteNote controller', error);
    res
      .status(500)
      .json({ message: 'Internal server error during deleteNote' });
  }
}
