import FavoriteButton from './FavoriteButton'
import { SEASON_LABELS } from '../utils/seasons'
import type { Crop } from '../types/stardew'

interface CropCardProps {
  crop: Crop
}

function CropCard({ crop }: CropCardProps) {
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
          style={{ color: 'var(--color-crop)' }}
        >
          {crop.name}
        </h2>
        <FavoriteButton itemId={crop.id} type="crop" />
      </div>

      <div className="mt-4 space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Estación:
          </span>{' '}
          {crop.season.map((season) => SEASON_LABELS[season]).join(', ')}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Días de crecimiento:
          </span>{' '}
          {crop.growthDays}
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Precio de venta:
          </span>{' '}
          {crop.sellPrice}g
        </p>
        <p>
          <span className="font-medium" style={{ color: 'var(--color-text)' }}>
            Regrowth:
          </span>{' '}
          {crop.regrowthDays ? `${crop.regrowthDays} días` : 'No'}
        </p>
      </div>
    </article>
  )
}

export default CropCard