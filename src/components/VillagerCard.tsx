import FavoriteButton from './FavoriteButton'
import type { Villager } from '../types/stardew'

interface VillagerCardProps {
  villager: Villager
}

function VillagerCard({ villager }: VillagerCardProps) {
  return (
    <article className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-amber-300">{villager.name}</h2>
        <FavoriteButton itemId={villager.id} type="villager" />
      </div>

      <div className="mt-3 space-y-2 text-sm text-stone-300">
        <p>
          <span className="font-medium text-stone-100">Cumpleaños:</span>{' '}
          {villager.birthday}
        </p>
        <p>
          <span className="font-medium text-stone-100">Regalos favoritos:</span>{' '}
          {villager.favoriteGifts.join(', ')}
        </p>
      </div>
    </article>
  )
}

export default VillagerCard