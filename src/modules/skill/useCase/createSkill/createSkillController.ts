import { CreateSkill } from './createSkill';
import { Request, Response } from 'express'

export class CreateSkillController {
    private createSkill: CreateSkill;

    constructor(createSkill: CreateSkill) {
        this.createSkill = createSkill
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createSkill.getSkills();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        const category = req.body.category;
        const name = req.body.name;
        const description = req.body.description;
        if (req.body && category && name && description) {
            await this.createSkill.createSkill(category, name, description);
            response = "skill create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}