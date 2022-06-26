import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    createForm(): {
        modeOfEntry: typeof import("../studentRegistration.types").ModeOfEntry;
        Gender: typeof import("../studentRegistration.types").Gender;
        users: typeof import("../users/entities/user.entity").User;
    };
    create(createStudentDto: CreateStudentDto): Promise<import("./entities/student.entity").Student>;
    findAll(): Promise<import("./entities/student.entity").Student[]>;
    findOne(id: string): string;
    update(id: string, updateStudentDto: UpdateStudentDto): string;
    remove(id: string): string;
    setUserById(studentId: number, userId: number): Promise<void>;
    unsetUserById(studentId: number): Promise<void>;
}
