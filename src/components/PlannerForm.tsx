import { useEffect, useState } from 'react'
import { SEASONS, SEASON_LABELS } from '../utils/seasons'
import type { PlannerItem, Season } from '../types/stardew'

interface PlannerFormProps {
  initialItem?: PlannerItem | null
  onSubmit: (
    title: string,
    season: Season,
    completed: boolean,
  ) => Promise<void>
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
          Tarea
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition focus:border-emerald-500"
          placeholder="Ej. Plantar arándanos"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-200">
          Estación
        </label>
        <select
          value={season}
          onChange={(event) => setSeason(event.target.value as Season)}
          className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition focus:border-emerald-500"
        >
          {SEASONS.map((seasonOption) => (
            <option key={seasonOption} value={seasonOption}>
              {SEASON_LABELS[seasonOption]}
            </option>
          ))}
        </select>
      </div>

      {initialItem && (
        <label className="flex items-center gap-3 text-sm text-stone-200">
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
            : initialItem
              ? 'Guardar cambios'
              : 'Crear tarea'}
        </button>

        {initialItem && onCancelEdit && (
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

export default PlannerForm