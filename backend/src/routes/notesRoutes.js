import express from 'express';
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = express.Router();

// /api/notes endpoints

// notes endpoints
router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

// healthcheck
//router.get('/', healthCheck);

export default router;
