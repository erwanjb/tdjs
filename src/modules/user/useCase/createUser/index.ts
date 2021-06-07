import UserRepo from '../../userRepo'
import { CreateUser } from './createUser'
import { CreateUserController } from './createUserController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createUser = () => {
    const userRepo =  getCustomRepository(UserRepo);
    return new CreateUser(userRepo)
}

export const createUserController = () => {
    return new CreateUserController(createUser())
}