interface ProfesorModel extends PersonaModel{
    cursos: Array<CurseModel>;
}

class ProfesorModel implements ProfesorModel {
    apellido: string;
    cursos: Array<CurseModel>;
    direccion: string;
    email: string;
    idPersona: number;
    nacimiento: Date;
    nombre: string;
    tel: number;

    constructor(apellido: string, cursos: Array<CurseModel>, direccion: string, email: string, idPersona: number, nacimiento: Date, nombre: string, tel: number) {
        this.apellido = apellido;
        this.cursos = cursos;
        this.direccion = direccion;
        this.email = email;
        this.idPersona = idPersona;
        this.nacimiento = nacimiento;
        this.nombre = nombre;
        this.tel = tel;
    }
}