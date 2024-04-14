import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { Student } from 'src/entity/siswa.entity';
import { SiswaService } from 'src/siswa/siswa.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService:JwtService,
        private siswaService:SiswaService,
        ){}

    async signIn(
        username: string, 
        pass:string
        ):Promise<{acces_token: string}>{
        const user= await this.userService.getUserByEmail(username);
        if (user?.password !==pass){
            throw new UnauthorizedException();
            
        }
        const payload = {sub:user.id, email:user.email};
        return {
            acces_token: await this.jwtService.signAsync(payload),
        };
    }
    
    async registerUser(newUser: Partial<User>):  Promise<User>{
        const user= this.userService.createUser(newUser);
        return user;
    }

    async signInStudent(
        id: number, 
        email:string
        ):Promise<{acces_token: string}>{
        const student= await this.siswaService.getStudentByEmail(email);
        if (student?.email !==email){
            throw new UnauthorizedException();
        }
        const payload = {sub:student.id, email:student.email};
        return {
            acces_token: await this.jwtService.signAsync(payload),
        };
    }
    
    async registerStudent(newStudent: Partial<Student>):  Promise<Student>{
        const student= this.siswaService.createStudent(newStudent);
        return student;
    }
  
}
