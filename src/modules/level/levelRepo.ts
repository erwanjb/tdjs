import { Level } from '../../entities/Level'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Level)
export default class LevelRepo extends Repository<Level> {
    
}