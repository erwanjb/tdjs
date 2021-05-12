import LevelRepo from '../../levelRepo';

export class CreateLevel {
    private levelRepo: LevelRepo;

    constructor(levelRepo: LevelRepo) {
        this.levelRepo = levelRepo
    }

    public async getLevels() {
        return await this.levelRepo.find();
    }

    public async createLevel(value: number) {
        return await this.levelRepo.insert({value});
    }
}