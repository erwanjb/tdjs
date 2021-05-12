import { User } from '../../entities/User'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(User)
export default class UserRepo extends Repository<User> {
    
}