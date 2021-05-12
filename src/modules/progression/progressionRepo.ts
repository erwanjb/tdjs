import { Progresssion } from '../../entities/Progression'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Progresssion)
export default class ProgressionRepo extends Repository<Progresssion> {
    
}