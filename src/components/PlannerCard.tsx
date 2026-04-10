import { SEASON_LABELS } from '../utils/seasons'
import type { PlannerItem } from '../types/stardew'

interface PlannerCardProps {
  item: PlannerItem
  onEdit: (item: PlannerItem) => void
  onDelete: (id: string) => Promise<void>
  onToggleCompleted: (item: PlannerItem) => Promise<void>
}

function PlannerCard({
  item,
  onEdit,
  onDelete,
  onToggleCompleted,
}: PlannerCardProps) {
  return (
    <article
      className="space-y-4 rounded-2xl border p-5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2
            className={`text-xl font-semibold ${item.completed ? 'line-through' : ''}`}
            style={{
              color: item.completed ? 'var(--color-text-muted)' : 'var(--color-crop)',
            }}
          >
            {item.title}
          </h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Estación: {SEASON_LABELS[item.season]}
          </p>
        </div>

        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            backgroundColor: item.completed ? 'var(--color-crop)' : 'var(--color-bg-secondary)',
            color: 'var(--color-bg)',
          }}
        >
          {item.completed ? 'Completada' : 'Pendiente'}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => void onToggleCompleted(item)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: 'var(--color-fish)', color: 'var(--color-bg)' }}
        >
          {item.completed ? 'Marcar pendiente' : 'Marcar completada'}
        </button>

        <button
          type="button"
          onClick={() => onEdit(item)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: 'var(--color-villager)', color: 'var(--color-bg)' }}
        >
          Editar
        </button>

        <button
          type="button"
          onClick={() => void onDelete(item.id)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ backgroundColor: 'var(--color-danger)', color: 'var(--color-bg)' }}
        >
          Borrar
        </button>
      </div>
    </article>
  )
}

export default PlannerCard