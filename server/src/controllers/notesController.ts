import type { Request, Response } from 'express'
import {
  createNote,
  deleteNoteById,
  getAllNotes,
  updateNoteById,
} from '../services/notesService'

export function findAllNotes(_req: Request, res: Response) {
  const data = getAllNotes()

  res.status(200).json({
    success: true,
    data,
  })
}

export function createNoteHandler(req: Request, res: Response) {
  const { title, content } = req.body as {
    title?: string
    content?: string
  }

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    res.status(400).json({
      success: false,
      message: 'El título es obligatorio y debe tener al menos 3 caracteres',
    })
    return
  }

  if (!content || typeof content !== 'string' || content.trim().length < 5) {
    res.status(400).json({
      success: false,
      message: 'El contenido es obligatorio y debe tener al menos 5 caracteres',
    })
    return
  }

  const note = createNote(title.trim(), content.trim())

  res.status(201).json({
    success: true,
    data: note,
  })
}

export function updateNoteHandler(req: Request, res: Response) {
  const { id } = req.params
  const { title, content } = req.body as {
    title?: string
    content?: string
  }

  if (typeof id !== 'string') {
    res.status(400).json({
      success: false,
      message: 'El id debe ser un texto válido',
    })
    return
  }

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    res.status(400).json({
      success: false,
      message: 'El título es obligatorio y debe tener al menos 3 caracteres',
    })
    return
  }

  if (!content || typeof content !== 'string' || content.trim().length < 5) {
    res.status(400).json({
      success: false,
      message: 'El contenido es obligatorio y debe tener al menos 5 caracteres',
    })
    return
  }

  const note = updateNoteById(id, title.trim(), content.trim())

  if (!note) {
    res.status(404).json({
      success: false,
      message: 'Nota no encontrada',
    })
    return
  }

  res.status(200).json({
    success: true,
    data: note,
  })
}

export function deleteNoteHandler(req: Request, res: Response) {
  const { id } = req.params

  if (typeof id !== 'string') {
    res.status(400).json({
      success: false,
      message: 'El id debe ser un texto válido',
    })
    return
  }

  const deleted = deleteNoteById(id)

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: 'Nota no encontrada',
    })
    return
  }

  res.status(200).json({
    success: true,
    data: null,
  })
}