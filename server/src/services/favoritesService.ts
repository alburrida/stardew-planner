import { favorites } from '../data/favorites'
import type { Favorite, FavoriteType } from '../types/stardew'

export function getAllFavorites() {
  return favorites
}

export function findFavoriteByItem(itemId: string, type: FavoriteType) {
  return favorites.find((favorite) => {
    return favorite.itemId === itemId && favorite.type === type
  })
}

export function createFavorite(itemId: string, type: FavoriteType): Favorite {
  const favorite: Favorite = {
    id: crypto.randomUUID(),
    itemId,
    type,
  }

  favorites.push(favorite)

  return favorite
}

export function deleteFavoriteById(id: string): boolean {
  const index = favorites.findIndex((favorite) => favorite.id === id)

  if (index === -1) {
    return false
  }

  favorites.splice(index, 1)
  return true
}