import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {Repository} from "typeorm";
import {Student} from "./entities/student.entity";
import {ModeOfEntry, Gender} from "../studentRegistration.types";

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>,
              @InjectRepository(User) private userRepository: Repository<User> ) {}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto);

    if(createStudentDto.user){
      const newUser = this.userRepository.create(createStudentDto.user);

      const user: User = await this.userRepository.save(newUser);
      newStudent.user = user;
    }

    return this.studentRepository.save(newStudent);
  }

  createStudent() {
    return {"modeOfEntry": ModeOfEntry, "Gender": Gender, "users": User}
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }

  async setUserById(studentId: number, userId: number){
    try {
      return await this.studentRepository.createQueryBuilder().relation(Student, "user").of(studentId).set(userId);
    }catch (error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(studentId: number){
    try{
      return await this.studentRepository.createQueryBuilder().relation(Student, 'user')
          .of(studentId).set(null)
    }catch (error){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error : `There was a problem unsetting user for student: ${error.message}`
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
