import type { Season } from '../types/stardew'
import { SEASONS, SEASON_LABELS } from '../utils/seasons'

interface SeasonFilterProps {
  value: Season | ''
  onChange: (value: Season | '') => void
}

function SeasonFilter({ value, onChange }: SeasonFilterProps) {
  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <label className="mb-2 block text-sm font-medium text-stone-200">
        Filtrar por estación
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value as Season | '')}
        className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition focus:border-emerald-500"
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