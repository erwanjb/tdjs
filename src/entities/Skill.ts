import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity  } from "typeorm";
import {Category} from "./Category";
import {Progresssion} from './Progression';

@Entity()
export class Skill extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(_type => Category, category => category.skills)
    category: Category;

    @OneToMany(_type => Progresssion, progression => progression.skill) // note: we will create author property in the Photo class below
    progressions: Progresssion[];
}