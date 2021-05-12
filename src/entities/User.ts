import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import {Progresssion} from './Progression';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(_type => Progresssion, progression => progression.user) // note: we will create author property in the Photo class below
    progressions: Progresssion[];
}