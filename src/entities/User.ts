import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity } from "typeorm";
import {Student} from './Student';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isAdmin: boolean;

    @Column({nullable: true})
    lastLogin: Date;

    @OneToOne(_type => Student, student => student.user)
    student: Student
}