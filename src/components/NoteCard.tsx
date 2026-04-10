import type { Note } from '../types/stardew'

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: string) => Promise<void>
}

function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <article className="space-y-4 rounded-xl border border-stone-800 bg-stone-900 p-5">
      <div>
        <h2 className="text-xl font-semibold text-emerald-400">{note.title}</h2>
        <p className="mt-1 text-xs text-stone-500">
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>

      <p className="whitespace-pre-line text-sm text-stone-300">
        {note.content}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onEdit(note)}
          className="rounded-md bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:opacity-90"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={() => void onDelete(note.id)}
          className="rounded-md bg-red-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:opacity-90"
        >
          Borrar
        </button>
      </div>
    </article>
  )
}

export default NoteCard