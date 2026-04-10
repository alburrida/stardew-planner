import FavoriteButton from './FavoriteButton'
import { SEASON_LABELS } from '../utils/seasons'
import type { Fish } from '../types/stardew'

interface FishCardProps {
  fish: Fish
}

function FishCard({ fish }: FishCardProps) {
  return (
    <article
      className="rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h2
          className="text-xl font-semibold"
          style={{ color: 'var(--color-fish)' }}
        >
          {fish.name}
        </h2>
        <FavoriteButton itemId={fish.id} type="fish" />
      </div>

      <div className="mt-4 space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Estación:
          </span>{' '}
          {fish.season.map((season) => SEASON_LABELS[season]).join(', ')}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Lugar:
          </span>{' '}
          {fish.location}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Horario:
          </span>{' '}
          {fish.time}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Clima:
          </span>{' '}
          {fish.weather ?? 'Cualquiera'}
        </p>
      </div>
    </article>
  )
}

export default FishCard