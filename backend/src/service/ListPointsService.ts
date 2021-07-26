import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { PointsRepositories } from '../repositories'

export class ListPointsService {
  async execute() {
    const pointsRepositories = getCustomRepository(PointsRepositories)

    let point = await pointsRepositories.find()

    return classToPlain(point)
  }
}