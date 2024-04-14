import { UsersService } from '../users/users.service';
import { User } from 'src/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Student } from 'src/entity/siswa.entity';
import { SiswaService } from 'src/siswa/siswa.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private siswaService;
    constructor(userService: UsersService, jwtService: JwtService, siswaService: SiswaService);
    signIn(username: string, pass: string): Promise<{
        acces_token: string;
    }>;
    registerUser(newUser: Partial<User>): Promise<User>;
    signInStudent(id: number, email: string): Promise<{
        acces_token: string;
    }>;
    registerStudent(newStudent: Partial<Student>): Promise<Student>;
}
