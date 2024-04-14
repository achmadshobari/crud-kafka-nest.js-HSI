import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getUserByEmail(email: string): Promise<User | null>;
    createUser(userData: Partial<User>): Promise<User>;
}
