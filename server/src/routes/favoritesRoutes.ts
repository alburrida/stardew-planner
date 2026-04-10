import { Router } from 'express'
import {
  createFavoriteHandler,
  deleteFavoriteHandler,
  findAllFavorites,
} from '../controllers/favoritesController'

const router = Router()

router.get('/', findAllFavorites)
router.post('/', createFavoriteHandler)
router.delete('/:id', deleteFavoriteHandler)

export default router