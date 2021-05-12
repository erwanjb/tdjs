import SkillRepo from '../../skillRepo';
import {Category} from '../../../../entities/Category';

export class CreateSkill {
    private skillRepo: SkillRepo;

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async getSkills() {
        return await this.skillRepo.find();
    }

    public async createSkill(category: Category, name: string, description: string) {
        const skill = await this.skillRepo.insert({category, name, description});
        console.log(skill)
        return skill
    }
}