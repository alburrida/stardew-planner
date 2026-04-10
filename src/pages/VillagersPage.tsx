import { useMemo, useState } from 'react'
import { getVillagers } from '../api/stardewApi'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import LoadingState from '../components/LoadingState'
import SearchBar from '../components/SearchBar'
import SeasonFilter from '../components/SeasonFilter'
import VillagerCard from '../components/VillagerCard'
import { useFetchState } from '../hooks/useFetchState'
import type { Season } from '../types/stardew'
import { getBirthdaySeason } from '../utils/villagers'

function VillagersPage() {
  const { data, loading, error, refetch } = useFetchState(getVillagers)
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState<Season | ''>('')

  const filteredVillagers = useMemo(() => {
    if (!data) return []

    const normalizedSearch = search.trim().toLowerCase()

    return data.filter((villager) => {
      const matchesSearch =
        villager.name.toLowerCase().includes(normalizedSearch) ||
        villager.favoriteGifts.some((gift) =>
          gift.toLowerCase().includes(normalizedSearch),
        )

      const villagerSeason = getBirthdaySeason(villager.birthday)
      const matchesSeason = season === '' || villagerSeason === season

      return matchesSearch && matchesSeason
    })
  }, [data, search, season])

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Aldeanos</h1>
        <p className="mt-2 text-stone-300">
          Listado de aldeanos con cumpleaños y regalos favoritos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar aldeano o regalo favorito..."
        />
        <SeasonFilter value={season} onChange={setSeason} />
      </div>

      {loading && <LoadingState />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filteredVillagers.length === 0 && (
        <EmptyState message="No se han encontrado aldeanos con esos filtros." />
      )}

      {!loading && !error && filteredVillagers.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredVillagers.map((villager) => (
            <VillagerCard key={villager.id} villager={villager} />
          ))}
        </div>
      )}
    </section>
  )
}

export default VillagersPage