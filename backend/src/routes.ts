import { Router } from 'express'
import {
  CreatePointController,
  ListPointsController
} from './controllers'

export const router = Router()

const createPointController = new CreatePointController()
const listPointsController = new ListPointsController()

router.post('/points', createPointController.handle)
router.get('/points', listPointsController.handle)