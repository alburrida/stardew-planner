import FavoriteButton from './FavoriteButton'
import type { Fish } from '../types/stardew'

interface FishCardProps {
  fish: Fish
}

function FishCard({ fish }: FishCardProps) {
  return (
    <article className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-sky-400">{fish.name}</h2>
        <FavoriteButton itemId={fish.id} type="fish" />
      </div>

      <div className="mt-3 space-y-2 text-sm text-stone-300">
        <p>
          <span className="font-medium text-stone-100">Estación:</span>{' '}
          {fish.season.join(', ')}
        </p>
        <p>
          <span className="font-medium text-stone-100">Lugar:</span>{' '}
          {fish.location}
        </p>
        <p>
          <span className="font-medium text-stone-100">Horario:</span>{' '}
          {fish.time}
        </p>
        <p>
          <span className="font-medium text-stone-100">Clima:</span>{' '}
          {fish.weather ?? 'Cualquiera'}
        </p>
      </div>
    </article>
  )
}

export default FishCard