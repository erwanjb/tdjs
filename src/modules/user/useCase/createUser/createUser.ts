import UserRepo from '../../userRepo';

export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }

    public async getUsers() {
        return await this.userRepo.find();
    }

    public async createUser(email: string, password: string, isAdmin: boolean) {
        return await this.userRepo.insert({email, password, isAdmin});
    }
}