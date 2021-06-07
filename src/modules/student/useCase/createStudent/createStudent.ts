import StudentRepo from '../../studentRepo';
import {User} from '../../../../entities/User';

export class CreateStudent {
    private studentRepo: StudentRepo;

    constructor(studentRepo: StudentRepo) {
        this.studentRepo = studentRepo
    }

    public async getStudents() {
        return await this.studentRepo.find();
    }

    public async createStudent(firstName: string, lastName: string, user: User) {
        return await this.studentRepo.insert({firstName, lastName, user});
    }
}