import { Entity, Column, ManyToOne, BaseEntity, JoinColumn, PrimaryColumn } from "typeorm";
import {User} from "./User";
import {Level} from "./Level";
import {Skill} from "./Skill";

@Entity()
export class Progression extends BaseEntity {

    @PrimaryColumn('uuid', { name: 'user_id'})
    userId: number;
    
    @PrimaryColumn('uuid', { name: 'level_id'})
    levelId: number;
    
    @PrimaryColumn('uuid', { name: 'skill_id'})
    skillId: number;

    @ManyToOne(_type => User,  user => user.progressions)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(_type => Level,  level => level.progressions)
    @JoinColumn({ name: 'level_id' })
    level: Level;

    @ManyToOne(_type => Skill,  skill => skill.progressions)
    @JoinColumn({ name: 'skill_id' })
    skill: Skill;

    @Column()
    created_at: Date;
}