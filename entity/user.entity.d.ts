import { Role } from "src/enums/role.enum";
export declare class User {
    id: number;
    nama: string;
    email: string;
    umur: number;
    tanggal_lahir: string;
    status: boolean;
    password: string;
    roles: Role[];
}
