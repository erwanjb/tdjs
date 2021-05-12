import { Router } from 'express'
import { createLevelController } from './useCase/createLevel'

const levelRouter: Router = Router();

levelRouter.get('/', (req, res) => createLevelController().execute(req, res))

levelRouter.post('/', (req, res) => createLevelController().create(req, res))

export default levelRouter;