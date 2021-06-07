import StudentRepo from '../../studentRepo'
import { CreateStudent } from './createStudent'
import { CreateStudentController } from './createStudentController'
import {getCustomRepository} from "typeorm";


//Je construit mon repo avec les entités dont j'ai besoin

export const createStudent = () => {
    const studentRepo =  getCustomRepository(StudentRepo);
    return new CreateStudent(studentRepo)
}

export const createStudentController = () => {
    return new CreateStudentController(createStudent())
}