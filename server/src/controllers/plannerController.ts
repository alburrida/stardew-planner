import type { Request, Response } from 'express'
import {
  createPlannerItem,
  deletePlannerItemById,
  getAllPlannerItems,
  updatePlannerItemById,
} from '../services/plannerService'
import type { Season } from '../types/stardew'

const VALID_SEASONS: Season[] = ['spring', 'summer', 'fall', 'winter']

export function findAllPlannerItems(_req: Request, res: Response) {
  const data = getAllPlannerItems()

  res.status(200).json({
    success: true,
    data,
  })
}

export function createPlannerItemHandler(req: Request, res: Response) {
  const { title, season } = req.body as {
    title?: string
    season?: Season
  }

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    res.status(400).json({
      success: false,
      message: 'El título es obligatorio y debe tener al menos 3 caracteres',
    })
    return
  }

  if (!season || !VALID_SEASONS.includes(season)) {
    res.status(400).json({
      success: false,
      message: 'La estación debe ser spring, summer, fall o winter',
    })
    return
  }

  const item = createPlannerItem(title.trim(), season)

  res.status(201).json({
    success: true,
    data: item,
  })
}

export function updatePlannerItemHandler(req: Request, res: Response) {
  const { id } = req.params
  const { title, season, completed } = req.body as {
    title?: string
    season?: Season
    completed?: boolean
  }

  if (typeof id !== 'string') {
    res.status(400).json({
      success: false,
      message: 'El id debe ser un texto válido',
    })
    return
  }

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    res.status(400).json({
      success: false,
      message: 'El título es obligatorio y debe tener al menos 3 caracteres',
    })
    return
  }

  if (!season || !VALID_SEASONS.includes(season)) {
    res.status(400).json({
      success: false,
      message: 'La estación debe ser spring, summer, fall o winter',
    })
    return
  }

  if (typeof completed !== 'boolean') {
    res.status(400).json({
      success: false,
      message: 'completed debe ser true o false',
    })
    return
  }

  const item = updatePlannerItemById(id, title.trim(), season, completed)

  if (!item) {
    res.status(404).json({
      success: false,
      message: 'Elemento del planner no encontrado',
    })
    return
  }

  res.status(200).json({
    success: true,
    data: item,
  })
}

export function deletePlannerItemHandler(req: Request, res: Response) {
  const { id } = req.params

  if (typeof id !== 'string') {
    res.status(400).json({
      success: false,
      message: 'El id debe ser un texto válido',
    })
    return
  }

  const deleted = deletePlannerItemById(id)

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: 'Elemento del planner no encontrado',
    })
    return
  }

  res.status(200).json({
    success: true,
    data: null,
  })
}