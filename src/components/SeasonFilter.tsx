import type { Season } from '../types/stardew'
import { SEASONS, SEASON_LABELS } from '../utils/seasons'

interface SeasonFilterProps {
  value: Season | ''
  onChange: (value: Season | '') => void
}

function SeasonFilter({ value, onChange }: SeasonFilterProps) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: 'var(--color-text)' }}
      >
        Filtrar por estación
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value as Season | '')}
        className="w-full rounded-lg border px-3 py-2 outline-none transition"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text)',
        }}
      >
        <option value="">Todas</option>

        {SEASONS.map((season) => (
          <option key={season} value={season}>
            {SEASON_LABELS[season]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SeasonFilter