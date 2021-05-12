import { Router } from 'express'
import { createProgressionController } from './useCase/createProgression'

const progressionRouter: Router = Router();

progressionRouter.get('/', (req, res) => createProgressionController().execute(req, res))

progressionRouter.post('/', (req, res) => createProgressionController().create(req, res))

export default progressionRouter;