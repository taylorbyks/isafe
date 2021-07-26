import { getCustomRepository } from 'typeorm'
import { PointsRepositories } from '../repositories'

export class DeletePointService {
  async execute(uuid: string) {
    const pointsRepositories = getCustomRepository(PointsRepositories)

    let point = await pointsRepositories.findOne(uuid)

    if (!point) {
      throw new Error('Not Found')
    }

    await pointsRepositories.remove(point)

    return point
  }
}
