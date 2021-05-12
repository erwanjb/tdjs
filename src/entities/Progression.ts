import { Entity, Column, ManyToOne, BaseEntity } from "typeorm";
import {User} from "./User";
import {Level} from "./Level";
import {Skill} from "./Skill";

@Entity()
export class Progresssion extends BaseEntity {

    @ManyToOne(_type => User,  user => user.progressions, {primary: true})
    user: User;

    @ManyToOne(_type => Level,  level => level.progressions, {primary: true})
    level: Level;

    @ManyToOne(_type => Skill,  skill => skill.progressions, {primary: true})
    skill: Skill;

    @Column()
    created_at: Date;
}