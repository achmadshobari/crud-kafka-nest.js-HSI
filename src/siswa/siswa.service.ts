import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/siswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiswaService {
    
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ){}

    async getStudentByEmail(email: string):Promise<Student |null>{
      return await this.studentRepository.findOne({
      where:[{email}],
      });
    } 

    async createStudent(studentData :Partial<Student>): Promise<Student>{
      const student= this.studentRepository.create(studentData);
      return await this.studentRepository.save(student);
    } 

}
