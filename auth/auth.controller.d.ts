import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        acces_token: string;
    }>;
    register(user: Record<string, any>): Promise<import("../entity/user.entity").User>;
    getProfile(): Promise<string>;
    signIns(signInDto: Record<string, any>): any;
    registers(student: Record<string, any>): Promise<import("../entity/siswa.entity").Student>;
}
