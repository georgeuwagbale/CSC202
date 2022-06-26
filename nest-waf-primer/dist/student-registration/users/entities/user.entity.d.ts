import { Student } from "../../students/entities/student.entity";
export declare class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    nationality: string;
    address: string;
    isActive: boolean;
    student: Student;
}
