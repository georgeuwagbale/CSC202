import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { Student } from "./entities/student.entity";
import { ModeOfEntry, Gender } from "../studentRegistration.types";
export declare class StudentsService {
    private studentRepository;
    private userRepository;
    constructor(studentRepository: Repository<Student>, userRepository: Repository<User>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    createStudent(): {
        modeOfEntry: typeof ModeOfEntry;
        Gender: typeof Gender;
        users: typeof User;
    };
    findAll(): Promise<Student[]>;
    findOne(id: number): string;
    update(id: number, updateStudentDto: UpdateStudentDto): string;
    remove(id: number): string;
    setUserById(studentId: number, userId: number): Promise<void>;
    unsetUserById(studentId: number): Promise<void>;
}
