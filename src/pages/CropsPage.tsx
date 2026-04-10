import { useMemo, useState } from 'react'
import { getCrops } from '../api/stardewApi'
import CropCard from '../components/CropCard'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import LoadingState from '../components/LoadingState'
import SearchBar from '../components/SearchBar'
import SeasonFilter from '../components/SeasonFilter'
import { useFetchState } from '../hooks/useFetchState'
import type { Season } from '../types/stardew'

function CropsPage() {
  const { data, loading, error, refetch } = useFetchState(getCrops)
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState<Season | ''>('')

  const filteredCrops = useMemo(() => {
    if (!data) return []

    const normalizedSearch = search.trim().toLowerCase()

    return data.filter((crop) => {
      const matchesSearch = crop.name.toLowerCase().includes(normalizedSearch)
      const matchesSeason = season === '' || crop.season.includes(season)

      return matchesSearch && matchesSeason
    })
  }, [data, search, season])

  return (
    <section className="space-y-6">
      <div
        className="rounded-3xl border p-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-surface))',
          borderColor: 'var(--color-border)',
        }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-wide"
          style={{ color: 'var(--color-crop)' }}
        >
          Colección
        </p>
        <h1 className="mt-2 text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
          Cultivos
        </h1>
        <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
          Consulta cultivos, estaciones, crecimiento y precio de venta.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar cultivo por nombre..."
        />
        <SeasonFilter value={season} onChange={setSeason} />
      </div>

      {!loading && !error && (
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Resultados: {filteredCrops.length}
        </p>
      )}

      {loading && <LoadingState />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filteredCrops.length === 0 && (
        <EmptyState message="No se han encontrado cultivos con esos filtros." />
      )}

      {!loading && !error && filteredCrops.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredCrops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CropsPage