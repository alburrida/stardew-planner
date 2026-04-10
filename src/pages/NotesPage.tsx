import { useState } from 'react'
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from '../api/stardewApi'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import LoadingState from '../components/LoadingState'
import NoteCard from '../components/NoteCard'
import NoteForm from '../components/NoteForm'
import { useFetchState } from '../hooks/useFetchState'
import type { Note } from '../types/stardew'

function NotesPage() {
  const { data, loading, error, refetch } = useFetchState(getNotes)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  async function handleCreateNote(title: string, content: string) {
    await createNote(title, content)
    await refetch()
  }

  async function handleUpdateNote(title: string, content: string) {
    if (!editingNote) return

    await updateNote(editingNote.id, title, content)
    setEditingNote(null)
    await refetch()
  }

  async function handleDeleteNote(id: string) {
    await deleteNote(id)

    if (editingNote?.id === id) {
      setEditingNote(null)
    }

    await refetch()
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Notas</h1>
        <p className="mt-2 text-stone-300">
          Aquí puedes crear, editar y borrar notas personales de tu partida.
        </p>
      </div>

      <NoteForm
        initialNote={editingNote}
        onSubmit={editingNote ? handleUpdateNote : handleCreateNote}
        onCancelEdit={() => setEditingNote(null)}
      />

      {loading && <LoadingState />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && data && data.length === 0 && (
        <EmptyState message="Todavía no has creado ninguna nota." />
      )}

      {!loading && !error && data && data.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          {data.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={setEditingNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default NotesPage