import { Router } from 'express'
import { findAllFish } from '../controllers/fishController'

const router = Router()

router.get('/', findAllFish)

export default router