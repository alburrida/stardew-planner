import { useEffect, useState } from 'react'
import { SEASONS, SEASON_LABELS } from '../utils/seasons'
import type { PlannerItem, Season } from '../types/stardew'

interface PlannerFormProps {
  initialItem?: PlannerItem | null
  onSubmit: (title: string, season: Season, completed: boolean) => Promise<void>
  onCancelEdit?: () => void
}

function PlannerForm({
  initialItem,
  onSubmit,
  onCancelEdit,
}: PlannerFormProps) {
  const [title, setTitle] = useState('')
  const [season, setSeason] = useState<Season>('spring')
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setTitle(initialItem?.title ?? '')
    setSeason(initialItem?.season ?? 'spring')
    setCompleted(initialItem?.completed ?? false)
    setError(null)
  }, [initialItem])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (title.trim().length < 3) {
      setError('El título debe tener al menos 3 caracteres')
      return
    }

    try {
      setSubmitting(true)
      setError(null)
      await onSubmit(title.trim(), season, completed)

      if (!initialItem) {
        setTitle('')
        setSeason('spring')
        setCompleted(false)
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
          Tarea
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ej. Plantar arándanos"
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
          Estación
        </label>
        <select
          value={season}
          onChange={(event) => setSeason(event.target.value as Season)}
          className="w-full rounded-lg border px-3 py-2 outline-none transition"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          {SEASONS.map((seasonOption) => (
            <option key={seasonOption} value={seasonOption}>
              {SEASON_LABELS[seasonOption]}
            </option>
          ))}
        </select>
      </div>

      {initialItem && (
        <label className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text)' }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
            className="h-4 w-4"
          />
          Marcada como completada
        </label>
      )}

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
          {submitting ? 'Guardando...' : initialItem ? 'Guardar cambios' : 'Crear tarea'}
        </button>

        {initialItem && onCancelEdit && (
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

export default PlannerForm