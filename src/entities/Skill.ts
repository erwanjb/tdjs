import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity, JoinColumn  } from "typeorm";
import {Category} from "./Category";
import {Progression} from './Progression';

@Entity()
export class Skill extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ name: 'category_id' })
    categoryId: number;

    @ManyToOne(_type => Category, category => category.skills)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @OneToMany(_type => Progression, progression => progression.skill) // note: we will create author property in the Photo class below
    progressions: Progression[];
}