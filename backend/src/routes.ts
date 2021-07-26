import { Router } from 'express'
import {
  CreatePointController,
  ListPointsController,
  DeletePointController
} from './controllers'

export const router = Router()

const createPointController = new CreatePointController()
const listPointsController = new ListPointsController()
const deletePointsController = new DeletePointController()

router.post('/points', createPointController.handle)
router.get('/points', listPointsController.handle)
router.delete('/points', deletePointsController.handle)