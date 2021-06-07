import ProgressionRepo from '../../progressionRepo';
import {User} from '../../../../entities/User';
import {Skill} from '../../../../entities/Skill';
import {Level} from '../../../../entities/Level';

export class CreateProgression {
    private progressionRepo: ProgressionRepo;

    constructor(progressionRepo: ProgressionRepo) {
        this.progressionRepo = progressionRepo
    }

    public async getProgressions() {
        return await this.progressionRepo.find();
    }

    public async createProgression(student: User, skill: Skill, level: Level) {
        return await this.progressionRepo.insert({student, skill, level, created_at: new Date(Date.now())});
    }
}