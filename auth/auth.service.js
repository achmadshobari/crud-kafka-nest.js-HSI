"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const siswa_service_1 = require("../siswa/siswa.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, siswaService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.siswaService = siswaService;
    }
    async signIn(username, pass) {
        const user = await this.userService.getUserByEmail(username);
        if (user?.password !== pass) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };
        return {
            acces_token: await this.jwtService.signAsync(payload),
        };
    }
    async registerUser(newUser) {
        const user = this.userService.createUser(newUser);
        return user;
    }
    async signInStudent(id, email) {
        const student = await this.siswaService.getStudentByEmail(email);
        if (student?.email !== email) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: student.id, email: student.email };
        return {
            acces_token: await this.jwtService.signAsync(payload),
        };
    }
    async registerStudent(newStudent) {
        const student = this.siswaService.createStudent(newStudent);
        return student;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        siswa_service_1.SiswaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map