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
      className="rounded-lg px-3 py-2 text-xs font-semibold transition hover:opacity-90"
      style={{
        backgroundColor: favorite ? 'var(--color-villager)' : 'var(--color-bg-secondary)',
        color: favorite ? 'var(--color-bg)' : 'var(--color-text)',
        border: '1px solid var(--color-border)',
      }}
    >
      {favorite ? 'En favoritos' : 'Favorito'}
    </button>
  )
}

export default FavoriteButton