import UserRepo from '../../userRepo';

export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async getUsers() {
        return await this.userRepo.find();
    }

    public async createUser(firstName: string, lastName: string) {
        return await this.userRepo.insert({firstName, lastName});
    }
}