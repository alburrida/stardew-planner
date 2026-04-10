import { useMemo, useState } from 'react'
import { getFish } from '../api/stardewApi'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import FishCard from '../components/FishCard'
import LoadingState from '../components/LoadingState'
import SearchBar from '../components/SearchBar'
import SeasonFilter from '../components/SeasonFilter'
import { useFetchState } from '../hooks/useFetchState'
import type { Season } from '../types/stardew'

function FishPage() {
  const { data, loading, error, refetch } = useFetchState(getFish)
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState<Season | ''>('')

  const filteredFish = useMemo(() => {
    if (!data) return []

    const normalizedSearch = search.trim().toLowerCase()

    return data.filter((fish) => {
      const matchesSearch =
        fish.name.toLowerCase().includes(normalizedSearch) ||
        fish.location.toLowerCase().includes(normalizedSearch)

      const matchesSeason = season === '' || fish.season.includes(season)

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
          style={{ color: 'var(--color-fish)' }}
        >
          Colección
        </p>
        <h1 className="mt-2 text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
          Peces
        </h1>
        <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
          Filtra por estación, ubicación y horario para encontrar cada pez.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar pez por nombre o ubicación..."
        />
        <SeasonFilter value={season} onChange={setSeason} />
      </div>

      {!loading && !error && (
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Resultados: {filteredFish.length}
        </p>
      )}

      {loading && <LoadingState />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filteredFish.length === 0 && (
        <EmptyState message="No se han encontrado peces con esos filtros." />
      )}

      {!loading && !error && filteredFish.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredFish.map((fish) => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FishPage