class ProfesorModel extends PersonaModel{
    cursos: Array<CurseModel>;

    constructor(idPersona: number, nombre: string, apellido: string, email: string, tel: number, direccion: string, nacimiento: any, cursos: Array<CurseModel>) {
        super(idPersona, nombre, apellido, email, tel, direccion, nacimiento);
        this.cursos = cursos;

    }
}