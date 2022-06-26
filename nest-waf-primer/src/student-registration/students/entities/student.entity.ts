import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { ModeOfEntry } from '../../studentRegistration.types';
import { User } from 'src/student-registration/users/entities/user.entity'


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;

    @JoinColumn()
    @OneToOne(type => User, user=> user.student, {cascade: true})
    user: User;
}
