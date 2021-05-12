import ProgressionRepo from '../../progressionRepo'
import { CreateProgression } from './createProgression'
import { CreateProgressionController } from './createProgressionController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createProgression = () => {
    const progressionRepo =  getCustomRepository(ProgressionRepo);
    return new CreateProgression(progressionRepo)
}

export const createProgressionController = () => {
    return new CreateProgressionController(createProgression())
}