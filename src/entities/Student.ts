import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import {Progression} from './Progression';
import {User} from './User';

@Entity()
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ name: 'user_id' })
    userId: string

    @OneToMany(_type => Progression, progression => progression.student) // note: we will create author property in the Photo class below
    progressions: Progression[];

    @OneToOne(_type => User, user => user.student)
    @JoinColumn({ name: 'user_id' })
    user: User
}