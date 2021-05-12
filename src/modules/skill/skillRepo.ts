import { Skill } from '../../entities/Skill'
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Skill)
export default class SkillRepo extends Repository<Skill> {
    
}