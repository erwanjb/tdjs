import { Router } from 'express'
import { createUserController } from './useCase/createUser'

const userRouter: Router = Router();

userRouter.get('/', (req, res) => createUserController().execute(req, res))

userRouter.post('/', (req, res) => createUserController().create(req, res))

export default userRouter;