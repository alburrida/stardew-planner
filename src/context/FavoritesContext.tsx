import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from '../api/stardewApi'
import type { Favorite, FavoriteType } from '../types/stardew'

interface FavoritesContextValue {
  favorites: Favorite[]
  loading: boolean
  error: string | null
  isFavorite: (itemId: string, type: FavoriteType) => boolean
  toggleFavorite: (itemId: string, type: FavoriteType) => Promise<void>
  refetchFavorites: () => Promise<void>
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined)

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetchFavorites = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await getFavorites()
      setFavorites(data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Error inesperado al cargar favoritos')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refetchFavorites()
  }, [refetchFavorites])

  const isFavorite = useCallback(
    (itemId: string, type: FavoriteType) => {
      return favorites.some((favorite) => {
        return favorite.itemId === itemId && favorite.type === type
      })
    },
    [favorites],
  )

  const toggleFavorite = useCallback(
    async (itemId: string, type: FavoriteType) => {
      const existingFavorite = favorites.find((favorite) => {
        return favorite.itemId === itemId && favorite.type === type
      })

      try {
        setError(null)

        if (existingFavorite) {
          await deleteFavorite(existingFavorite.id)
          setFavorites((prev) => {
            return prev.filter((favorite) => favorite.id !== existingFavorite.id)
          })
        } else {
          const newFavorite = await createFavorite(itemId, type)
          setFavorites((prev) => [...prev, newFavorite])
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error inesperado al actualizar favoritos')
        }
      }
    },
    [favorites],
  )

  const value = useMemo<FavoritesContextValue>(() => {
    return {
      favorites,
      loading,
      error,
      isFavorite,
      toggleFavorite,
      refetchFavorites,
    }
  }, [favorites, loading, error, isFavorite, toggleFavorite, refetchFavorites])

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider')
  }

  return context
}