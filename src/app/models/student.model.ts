class StudentModel extends PersonaModel{
    cursosasignados: Array<AsignacionModel>;

    constructor(idPersona: number, nombre: string, apellido: string, email: string, tel: number, direccion: string, nacimiento: any, cursosasignados: Array<AsignacionModel>) {
       super(idPersona, nombre, apellido, email, tel, direccion, nacimiento);
       this.cursosasignados = cursosasignados;

    }

}
