import {CurseModel} from "./curse.model";

export interface StudentModel{
    idStudent?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    cursos: Array<CurseModel>[];
}
