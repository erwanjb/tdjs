import { CreateStudent } from './createStudent';
import { Request, Response } from 'express'

export class CreateStudentController {
    private createStudent: CreateStudent;

    constructor(createStudent: CreateStudent) {
        this.createStudent = createStudent
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createStudent.getStudents();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const user = req.body.user;
        if (req.body && firstName && lastName && user) {
            await this.createStudent.createStudent(firstName, lastName, user);
            response = "user create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}