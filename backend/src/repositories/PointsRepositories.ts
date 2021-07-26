import { EntityRepository, Repository } from 'typeorm'
import { Point } from '../entities'

@EntityRepository(Point)
export class PointsRepositories extends Repository<Point> {}
