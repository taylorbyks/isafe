import { getCustomRepository } from 'typeorm'
import { PointsRepositories } from '../repositories/PointsRepositories'

interface IUserRequest {
  latitude: Number,
  longitude: Number
}

export class CreatePointService {
  async execute({ latitude, longitude }: IUserRequest) {
    const pointsRepository = getCustomRepository(PointsRepositories)

    const point = pointsRepository.create({
      latitude,
      longitude
    })

    await pointsRepository.save(point)

    return point
  }
}
