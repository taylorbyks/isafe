import { Request, Response } from 'express'
import { ListPointsService } from '../service'

export class ListPointsController {
  async handle(request: Request, response: Response) {
    const listPointsService = new ListPointsService()

    const point = await listPointsService.execute()

    return response.json(point)
  }
}