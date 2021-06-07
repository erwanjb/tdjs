import { Entity, Column, ManyToOne, BaseEntity, JoinColumn, PrimaryColumn } from "typeorm";
import {Student} from "./Student";
import {Level} from "./Level";
import {Skill} from "./Skill";

@Entity()
export class Progression extends BaseEntity {

    @PrimaryColumn('uuid', { name: 'student_id'})
    studentId: number;
    
    @PrimaryColumn('uuid', { name: 'level_id'})
    levelId: number;
    
    @PrimaryColumn('uuid', { name: 'skill_id'})
    skillId: number;

    @ManyToOne(_type => Student,  student => student.progressions)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @ManyToOne(_type => Level,  level => level.progressions)
    @JoinColumn({ name: 'level_id' })
    level: Level;

    @ManyToOne(_type => Skill,  skill => skill.progressions)
    @JoinColumn({ name: 'skill_id' })
    skill: Skill;

    @Column()
    created_at: Date;
}