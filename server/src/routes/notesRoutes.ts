import { Router } from 'express'
import {
  createNoteHandler,
  deleteNoteHandler,
  findAllNotes,
  updateNoteHandler,
} from '../controllers/notesController'

const router = Router()

router.get('/', findAllNotes)
router.post('/', createNoteHandler)
router.put('/:id', updateNoteHandler)
router.delete('/:id', deleteNoteHandler)

export default router