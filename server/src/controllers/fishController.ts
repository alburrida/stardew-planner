import type { Request, Response } from 'express'
import { getAllFish } from '../services/fishService'

export function findAllFish(_req: Request, res: Response) {
  const data = getAllFish()

  res.status(200).json({
    success: true,
    data,
  })
}