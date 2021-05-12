import { Router } from 'express'
import { createSkillController } from './useCase/createSkill'

const skillRouter: Router = Router();

skillRouter.get('/', (req, res) => createSkillController().execute(req, res))

skillRouter.post('/', (req, res) => createSkillController().create(req, res))

export default skillRouter;