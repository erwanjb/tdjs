import LevelRepo from '../../levelRepo'
import { CreateLevel } from './createLevel'
import { CreateLevelController } from './createLevelController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createLevel = () => {
    const levelRepo =  getCustomRepository(LevelRepo);
    return new CreateLevel(levelRepo)
}

export const createLevelController = () => {
    return new CreateLevelController(createLevel())
}