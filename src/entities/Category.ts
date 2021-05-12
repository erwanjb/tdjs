import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Skill } from './Skill';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(_type => Skill, skill => skill.category) // note: we will create author property in the Photo class below
    skills: Skill[];
}