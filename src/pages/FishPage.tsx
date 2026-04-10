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

      const matchesSeason =
        season === '' || fish.season.includes(season)

      return matchesSearch && matchesSeason
    })
  }, [data, search, season])

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Peces</h1>
        <p className="mt-2 text-stone-300">
          Listado de peces con ubicación, horario y clima.
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