import SkillRepo from '../../skillRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillController } from './createSkillController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createSkill = () => {
    const skillRepo =  getCustomRepository(SkillRepo);
    return new CreateSkill(skillRepo)
}

export const createSkillController = () => {
    return new CreateSkillController(createSkill())
}