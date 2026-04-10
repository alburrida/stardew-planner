import type { Request, Response } from 'express'
import { getAllCrops } from '../services/cropsService'

export function findAllCrops(_req: Request, res: Response) {
  const data = getAllCrops()

  res.status(200).json({
    success: true,
    data,
  })
}