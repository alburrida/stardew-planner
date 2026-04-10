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
      <div
        className="rounded-3xl border p-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-surface))',
          borderColor: 'var(--color-border)',
        }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-wide"
          style={{ color: 'var(--color-villager)' }}
        >
          Comunidad
        </p>
        <h1 className="mt-2 text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
          Aldeanos
        </h1>
        <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
          Revisa cumpleaños y regalos favoritos de cada aldeano.
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

      {!loading && !error && (
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Resultados: {filteredVillagers.length}
        </p>
      )}

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