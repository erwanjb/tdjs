import { CreateUser } from './createUser';
import { Request, Response } from 'express'

export class CreateUserController {
    private createUser: CreateUser;

    constructor(createUser: CreateUser) {
        this.createUser = createUser
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createUser.getUsers();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        const email = req.body.email;
        const password = req.body.password;
        const isAdmin = req.body.isAdmin;
        if (req.body && email && password) {
            await this.createUser.createUser(email, password, isAdmin);
            response = "user create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}