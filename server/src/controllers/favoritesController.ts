import type { Request, Response } from 'express'
import {
  createFavorite,
  deleteFavoriteById,
  findFavoriteByItem,
  getAllFavorites,
} from '../services/favoritesService'
import type { FavoriteType } from '../types/stardew'

const VALID_TYPES: FavoriteType[] = ['crop', 'fish', 'villager']

export function findAllFavorites(_req: Request, res: Response) {
  const data = getAllFavorites()

  res.status(200).json({
    success: true,
    data,
  })
}

export function createFavoriteHandler(req: Request, res: Response) {
  const { itemId, type } = req.body as {
    itemId?: string
    type?: FavoriteType
  }

  if (!itemId || typeof itemId !== 'string') {
    res.status(400).json({
      success: false,
      message: 'itemId es obligatorio y debe ser un texto',
    })
    return
  }

  if (!type || !VALID_TYPES.includes(type)) {
    res.status(400).json({
      success: false,
      message: 'type debe ser crop, fish o villager',
    })
    return
  }

  const existingFavorite = findFavoriteByItem(itemId, type)

  if (existingFavorite) {
    res.status(400).json({
      success: false,
      message: 'Ese elemento ya está en favoritos',
    })
    return
  }

  const favorite = createFavorite(itemId, type)

  res.status(201).json({
    success: true,
    data: favorite,
  })
}

export function deleteFavoriteHandler(req: Request, res: Response) {
  const { id } = req.params

  if (typeof id !== 'string') {
    res.status(400).json({
      success: false,
      message: 'El id debe ser un texto válido',
    })
    return
  }

  const deleted = deleteFavoriteById(id)

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: 'Favorito no encontrado',
    })
    return
  }

  res.status(200).json({
    success: true,
    data: null,
  })
}