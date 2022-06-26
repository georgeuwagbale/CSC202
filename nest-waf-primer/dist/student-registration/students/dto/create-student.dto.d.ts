import { ModeOfEntry } from "../../studentRegistration.types";
import { CreateUserDto } from "../../users/dto/create-user.dto";
export declare class CreateStudentDto {
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
    readonly user: CreateUserDto;
}
