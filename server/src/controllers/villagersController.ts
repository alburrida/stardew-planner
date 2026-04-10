import type { Request, Response } from 'express'
import { getAllVillagers } from '../services/villagersService'

export function findAllVillagers(_req: Request, res: Response) {
  const data = getAllVillagers()

  res.status(200).json({
    success: true,
    data,
  })
}