import CategoryRepo from '../../categoryRepo';

export class CreateCategory {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async getCategories() {
        return await this.categoryRepo.find();
    }

    public async createCategory(name: string) {
        const category = await this.categoryRepo.insert({name});
        console.log(category)
        return category;
    }
}