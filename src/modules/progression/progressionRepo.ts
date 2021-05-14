import { Progression } from '../../entities/Progression'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Progression)
export default class ProgressionRepo extends Repository<Progression> {
    
}