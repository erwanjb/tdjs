import { CreateProgression } from './createProgression';
import { Request, Response } from 'express'

export class CreateProgressionController {
    private createProgression: CreateProgression;

    constructor(createProgression: CreateProgression) {
        this.createProgression = createProgression
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createProgression.getProgressions();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        const student = req.body.student;
        const skill = req.body.skill;
        const level = req.body.level;
        if (req.body && student && skill && level) {
            await this.createProgression.createProgression(student, skill, level);
            response = "progression create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}