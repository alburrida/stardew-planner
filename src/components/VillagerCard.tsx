import FavoriteButton from './FavoriteButton'
import type { Villager } from '../types/stardew'

interface VillagerCardProps {
  villager: Villager
}

function VillagerCard({ villager }: VillagerCardProps) {
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
          style={{ color: 'var(--color-villager)' }}
        >
          {villager.name}
        </h2>
        <FavoriteButton itemId={villager.id} type="villager" />
      </div>

      <div className="mt-4 space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Cumpleaños:
          </span>{' '}
          {villager.birthday}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Regalos favoritos:
          </span>{' '}
          {villager.favoriteGifts.join(', ')}
        </p>
      </div>
    </article>
  )
}

export default VillagerCard