import  CategoryRepo from '../../categoryRepo'
import { CreateCategory } from './createCategory'
import { CreateCategoryController } from './createCategoryController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createCategory = () => {
    const categoryRepo =  getCustomRepository(CategoryRepo);
    return new CreateCategory(categoryRepo)
}

export const createCategoryController = () => {
    return new CreateCategoryController(createCategory())
}