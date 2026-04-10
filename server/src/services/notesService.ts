import { notes } from '../data/notes'
import type { Note } from '../types/stardew'

export function getAllNotes() {
  return notes
}

export function createNote(title: string, content: string): Note {
  const note: Note = {
    id: crypto.randomUUID(),
    title,
    content,
    createdAt: new Date().toISOString(),
  }

  notes.unshift(note)
  return note
}

export function updateNoteById(
  id: string,
  title: string,
  content: string,
): Note | null {
  const note = notes.find((item) => item.id === id)

  if (!note) {
    return null
  }

  note.title = title
  note.content = content

  return note
}

export function deleteNoteById(id: string): boolean {
  const index = notes.findIndex((note) => note.id === id)

  if (index === -1) {
    return false
  }

  notes.splice(index, 1)
  return true
}