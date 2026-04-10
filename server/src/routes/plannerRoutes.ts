import { Router } from 'express'
import {
  createPlannerItemHandler,
  deletePlannerItemHandler,
  findAllPlannerItems,
  updatePlannerItemHandler,
} from '../controllers/plannerController'

const router = Router()

router.get('/', findAllPlannerItems)
router.post('/', createPlannerItemHandler)
router.put('/:id', updatePlannerItemHandler)
router.delete('/:id', deletePlannerItemHandler)

export default router