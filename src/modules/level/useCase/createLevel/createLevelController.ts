import { CreateLevel } from './createLevel';
import { Request, Response } from 'express'

export class CreateLevelController {
    private createLevel: CreateLevel;

    constructor(createLevel: CreateLevel) {
        this.createLevel = createLevel
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createLevel.getLevels();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        if (req.body && req.body.value) {
            await this.createLevel.createLevel(parseInt(req.body.value));
            response = "level create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}