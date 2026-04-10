import { useCallback, useMemo } from 'react'
import { getCrops, getFish, getVillagers } from '../api/stardewApi'
import CropCard from '../components/CropCard'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import FishCard from '../components/FishCard'
import LoadingState from '../components/LoadingState'
import VillagerCard from '../components/VillagerCard'
import { useFavorites } from '../context/FavoritesContext'
import { useFetchState } from '../hooks/useFetchState'

function FavoritesPage() {
  const {
    favorites,
    loading: favoritesLoading,
    error: favoritesError,
    refetchFavorites,
  } = useFavorites()

  const cropsState = useFetchState(getCrops)
  const fishState = useFetchState(getFish)
  const villagersState = useFetchState(getVillagers)

  const loading =
    favoritesLoading ||
    cropsState.loading ||
    fishState.loading ||
    villagersState.loading

  const error =
    favoritesError ||
    cropsState.error ||
    fishState.error ||
    villagersState.error

  const handleRetry = useCallback(async () => {
    await Promise.all([
      refetchFavorites(),
      cropsState.refetch(),
      fishState.refetch(),
      villagersState.refetch(),
    ])
  }, [
    refetchFavorites,
    cropsState,
    fishState,
    villagersState,
  ])

  const favoriteItems = useMemo(() => {
    const crops = cropsState.data
    const fish = fishState.data
    const villagers = villagersState.data

    if (!crops || !fish || !villagers) {
      return []
    }

    return favorites
      .map((favorite) => {
        if (favorite.type === 'crop') {
          const item = crops.find((crop) => crop.id === favorite.itemId)
          return item ? { type: 'crop' as const, item } : null
        }

        if (favorite.type === 'fish') {
          const item = fish.find((fishItem) => fishItem.id === favorite.itemId)
          return item ? { type: 'fish' as const, item } : null
        }

        const item = villagers.find(
          (villager) => villager.id === favorite.itemId,
        )

        return item ? { type: 'villager' as const, item } : null
      })
      .filter(
        (
          item,
        ): item is
          | { type: 'crop'; item: typeof crops[number] }
          | { type: 'fish'; item: typeof fish[number] }
          | { type: 'villager'; item: typeof villagers[number] } => item !== null,
      )
  }, [favorites, cropsState.data, fishState.data, villagersState.data])

  if (loading) {
    return (
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Favoritos</h1>
          <p className="mt-2 text-stone-300">Tus elementos guardados.</p>
        </div>

        <LoadingState />
      </section>
    )
  }

  if (error) {
    return (
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Favoritos</h1>
          <p className="mt-2 text-stone-300">Tus elementos guardados.</p>
        </div>

        <ErrorMessage message={error} onRetry={() => void handleRetry()} />
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Favoritos</h1>
        <p className="mt-2 text-stone-300">
          Aquí se muestran cultivos, peces y aldeanos guardados por el usuario.
        </p>
      </div>

      {favoriteItems.length === 0 ? (
        <EmptyState message="Todavía no has añadido elementos a favoritos." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {favoriteItems.map((favorite) => {
            if (favorite.type === 'crop') {
              return <CropCard key={favorite.item.id} crop={favorite.item} />
            }

            if (favorite.type === 'fish') {
              return <FishCard key={favorite.item.id} fish={favorite.item} />
            }

            return (
              <VillagerCard
                key={favorite.item.id}
                villager={favorite.item}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default FavoritesPage