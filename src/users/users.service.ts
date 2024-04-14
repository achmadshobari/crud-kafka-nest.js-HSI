import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async getUserByEmail(email: string):Promise<User |null>{
      return await this.userRepository.findOne({
      where:[{email}],
      });
    } 

    async createUser(userData :Partial<User>): Promise<User>{
      const user= this.userRepository.create(userData);
      return await this.userRepository.save(user);
    } 

}