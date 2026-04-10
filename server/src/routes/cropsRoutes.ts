import { Router } from 'express'
import { findAllCrops } from '../controllers/cropsController'

const router = Router()

router.get('/', findAllCrops)

export default router