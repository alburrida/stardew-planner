import { useFavorites } from '../context/FavoritesContext'
import type { FavoriteType } from '../types/stardew'

interface FavoriteButtonProps {
  itemId: string
  type: FavoriteType
}

function FavoriteButton({ itemId, type }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()

  const favorite = isFavorite(itemId, type)

  return (
    <button
      type="button"
      onClick={() => void toggleFavorite(itemId, type)}
      className={`rounded-md px-3 py-2 text-sm font-medium transition ${
        favorite
          ? 'bg-yellow-400 text-stone-950 hover:opacity-90'
          : 'bg-stone-800 text-stone-100 hover:bg-stone-700'
      }`}
    >
      {favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    </button>
  )
}

export default FavoriteButton