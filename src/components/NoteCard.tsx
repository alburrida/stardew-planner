import type { Note } from '../types/stardew'

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: string) => Promise<void>
}

function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <article
      className="space-y-4 rounded-2xl border p-5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div>
        <h2 className="text-xl font-semibold" style={{ color: 'var(--color-villager)' }}>
          {note.title}
        </h2>
        <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>

      <p className="whitespace-pre-line text-sm" style={{ color: 'var(--color-text)' }}>
        {note.content}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onEdit(note)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: 'var(--color-villager)', color: 'var(--color-bg)' }}
        >
          Editar
        </button>

        <button
          type="button"
          onClick={() => void onDelete(note.id)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: 'var(--color-danger)', color: 'var(--color-bg)' }}
        >
          Borrar
        </button>
      </div>
    </article>
  )
}

export default NoteCard