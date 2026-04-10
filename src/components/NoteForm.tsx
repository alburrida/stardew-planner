import { useEffect, useState } from 'react'
import type { Note } from '../types/stardew'

interface NoteFormProps {
  initialNote?: Note | null
  onSubmit: (title: string, content: string) => Promise<void>
  onCancelEdit?: () => void
}

function NoteForm({ initialNote, onSubmit, onCancelEdit }: NoteFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setTitle(initialNote?.title ?? '')
    setContent(initialNote?.content ?? '')
    setError(null)
  }, [initialNote])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (title.trim().length < 3) {
      setError('El título debe tener al menos 3 caracteres')
      return
    }

    if (content.trim().length < 5) {
      setError('El contenido debe tener al menos 5 caracteres')
      return
    }

    try {
      setSubmitting(true)
      setError(null)

      await onSubmit(title.trim(), content.trim())

      if (!initialNote) {
        setTitle('')
        setContent('')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Ha ocurrido un error inesperado')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-stone-800 bg-stone-900 p-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200">
          Título
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition focus:border-emerald-500"
          placeholder="Ej. Cultivos para verano"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200">
          Contenido
        </label>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={5}
          className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition focus:border-emerald-500"
          placeholder="Escribe aquí tu nota..."
        />
      </div>

      {error && (
        <p className="rounded-md border border-red-900 bg-red-950/40 px-3 py-2 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-emerald-500 px-4 py-2 font-medium text-stone-950 transition hover:opacity-90 disabled:opacity-60"
        >
          {submitting
            ? 'Guardando...'
            : initialNote
              ? 'Guardar cambios'
              : 'Crear nota'}
        </button>

        {initialNote && onCancelEdit && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-md bg-stone-700 px-4 py-2 font-medium text-stone-100 transition hover:bg-stone-600"
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  )
}

export default NoteForm