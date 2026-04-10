import FavoriteButton from './FavoriteButton'
import type { Crop } from '../types/stardew'

interface CropCardProps {
  crop: Crop
}

function CropCard({ crop }: CropCardProps) {
  return (
    <article className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-emerald-400">{crop.name}</h2>
        <FavoriteButton itemId={crop.id} type="crop" />
      </div>

      <div className="mt-3 space-y-2 text-sm text-stone-300">
        <p>
          <span className="font-medium text-stone-100">Estación:</span>{' '}
          {crop.season.join(', ')}
        </p>
        <p>
          <span className="font-medium text-stone-100">Días de crecimiento:</span>{' '}
          {crop.growthDays}
        </p>
        <p>
          <span className="font-medium text-stone-100">Precio de venta:</span>{' '}
          {crop.sellPrice}g
        </p>
        <p>
          <span className="font-medium text-stone-100">Regrowth:</span>{' '}
          {crop.regrowthDays ? `${crop.regrowthDays} días` : 'No'}
        </p>
      </div>
    </article>
  )
}

export default CropCard