import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentRegistrationModule } from './student-registration/student-registration.module';
import {User} from "./student-registration/users/entities/user.entity";
import {Student} from "./student-registration/students/entities/student.entity";

@Module({
  imports: [TypeOrmModule.forRoot(
      {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "georgeuwagbale",
  "password": "realghost16",
  "database": "nestwafprimer",
  "entities": [ User, Student],
  "synchronize": true
}
  ), StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
