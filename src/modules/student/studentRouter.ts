import { Router } from 'express'
import { createStudentController } from './useCase/createStudent/index'

const studentRouter: Router = Router();

studentRouter.get('/', (req, res) => createStudentController().execute(req, res))

studentRouter.post('/', (req, res) => createStudentController().create(req, res))

export default studentRouter;