import { Router } from 'express'
import { createCategoryController } from './useCase/createCategory'

const categoryRouter: Router = Router();

categoryRouter.get('/', (req, res) => createCategoryController().execute(req, res))

categoryRouter.post('/', (req, res) => createCategoryController().create(req, res))

export default categoryRouter;