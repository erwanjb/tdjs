import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import {Progresssion} from './Progression';

@Entity()
export class Level extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    value: number;

    @OneToMany(_type => Progresssion, progression => progression.level) // note: we will create author property in the Photo class below
    progressions: Progresssion[];
}