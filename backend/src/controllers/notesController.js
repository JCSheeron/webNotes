// Get notes function
export function getAllNotes(req, res) {
  // get notes
  res
    .status(200)
    .send(
      "You have retreived 15 notes via a router and a funciton. Busted a move.",
    );
}

// Create a note function
export function createNote(req, res) {
  // Create a note
  res.status(201).json({ message: "Note created sucessfully!" });
}

// Update a note function
export function updateNote(req, res) {
  // Update a note by id
  res.status(200).json({ message: "Note updated sucessfully!" });
}

// Delete a note function
export function deleteNote(req, res) {
  // Delete a note by id
  res.status(200).json({ message: "Note deleted sucessfully!" });
}
