import { Category } from '../../entities/Category'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Category)
export default class CategoryRepo extends Repository<Category> {
    
}