import { getCustomRepository } from 'typeorm'
import { PointsRepositories } from '../repositories'

interface IUserRequest {
  latitude: String
  longitude: String
}

export class CreatePointService {
  async execute({ latitude, longitude }: IUserRequest) {
    const pointsRepository = getCustomRepository(PointsRepositories)

    const point = pointsRepository.create({
      latitude,
      longitude,
    })

    await pointsRepository.save(point)

    return point
  }
}
