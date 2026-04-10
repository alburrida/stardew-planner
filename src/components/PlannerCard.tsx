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
    <article className="space-y-4 rounded-xl border border-stone-800 bg-stone-900 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2
            className={`text-xl font-semibold ${
              item.completed ? 'text-stone-500 line-through' : 'text-emerald-400'
            }`}
          >
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-stone-400">
            Estación: {SEASON_LABELS[item.season]}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            item.completed
              ? 'bg-emerald-500 text-stone-950'
              : 'bg-stone-700 text-stone-100'
          }`}
        >
          {item.completed ? 'Completada' : 'Pendiente'}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => void onToggleCompleted(item)}
          className="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:opacity-90"
        >
          {item.completed ? 'Marcar pendiente' : 'Marcar completada'}
        </button>

        <button
          type="button"
          onClick={() => onEdit(item)}
          className="rounded-md bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:opacity-90"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={() => void onDelete(item.id)}
          className="rounded-md bg-red-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:opacity-90"
        >
          Borrar
        </button>
      </div>
    </article>
  )
}

export default PlannerCard