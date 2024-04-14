import { Student } from 'src/entity/siswa.entity';
import { Repository } from 'typeorm';
export declare class SiswaService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    getStudentByEmail(email: string): Promise<Student | null>;
    createStudent(studentData: Partial<Student>): Promise<Student>;
}
