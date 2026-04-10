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
      setError(err instanceof Error ? err.message : 'Ha ocurrido un error inesperado')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border p-5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div>
        <label className="mb-2 block text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          Título
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ej. Cultivos para verano"
          className="w-full rounded-lg border px-3 py-2 outline-none transition"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          Contenido
        </label>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={5}
          placeholder="Escribe aquí tu nota..."
          className="w-full rounded-lg border px-3 py-2 outline-none transition"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        />
      </div>

      {error && (
        <p
          className="rounded-lg border px-3 py-2 text-sm"
          style={{
            backgroundColor: 'rgba(217, 123, 102, 0.15)',
            borderColor: 'var(--color-danger)',
            color: 'var(--color-danger)',
          }}
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg px-4 py-2 font-medium transition hover:opacity-90 disabled:opacity-60"
          style={{
            backgroundColor: 'var(--color-crop)',
            color: 'var(--color-bg)',
          }}
        >
          {submitting ? 'Guardando...' : initialNote ? 'Guardar cambios' : 'Crear nota'}
        </button>

        {initialNote && onCancelEdit && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-lg px-4 py-2 font-medium transition hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
          >
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  )
}

export default NoteForm