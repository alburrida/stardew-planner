import { Router } from 'express'
import { findAllVillagers } from '../controllers/villagersController'

const router = Router()

router.get('/', findAllVillagers)

export default router