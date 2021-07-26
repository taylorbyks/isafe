import { Request, Response } from 'express'
import { CreatePointService } from '../service'

export class CreatePointController {
  async handle(request: Request, response: Response) {
    try {
      const { latitude, longitude } = request.body

      const createPointService = new CreatePointService()

      const point = await createPointService.execute({ latitude, longitude })

      return response.json(point)
    } catch (error) {
      return response.status(400).json({ error: error.message})
    }
  }
}
