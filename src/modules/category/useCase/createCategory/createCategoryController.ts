import { CreateCategory } from './createCategory';
import 
{ Request, Response } from 'express'
export class CreateCategoryController {
    private createCategory: CreateCategory;

    constructor(createCategory: CreateCategory) {
        this.createCategory = createCategory
    }

    public async execute(_: Request, res: Response) {
        const categories = await this.createCategory.getCategories();

        res.status(200).json(categories);
    }

    public async create(req: Request, res: Response) {
        let response: string;
        if (req.body && req.body.name) {
            await this.createCategory.createCategory(req.body.name);
            response = "category create"
        } else {
            response = "Not created"
        }
         res.status(201).json(response)
    }
}