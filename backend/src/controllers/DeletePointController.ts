import { Request, Response } from 'express'
import { DeletePointService } from '../service'

export class DeletePointController {
  async handle(request: Request, response: Response) {
    try {
      const { uuid } = request.body

      const deletePointService = new DeletePointService()

      await deletePointService.execute(uuid)

      return response.status(204).json({})
    } catch (error) {
      return response.status(400).json({ error: error.message})
    }
  }
}
