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
exports.ClassStudent = void 0;
const typeorm_1 = require("typeorm");
const siswa_entity_1 = require("./siswa.entity");
let ClassStudent = class ClassStudent {
};
exports.ClassStudent = ClassStudent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClassStudent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClassStudent.prototype, "className", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => siswa_entity_1.Student, (student) => student.kelas),
    __metadata("design:type", Array)
], ClassStudent.prototype, "students", void 0);
exports.ClassStudent = ClassStudent = __decorate([
    (0, typeorm_1.Entity)()
], ClassStudent);
//# sourceMappingURL=kelas.entity.js.map