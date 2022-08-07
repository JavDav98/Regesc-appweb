class CurseModel{
    idCurse: number;
    nombre: string;
    catedratico: string;
    seccion: string;
    horario: string;
    constructor(idCurse: number, nombre: string, catedratico: string, seccion: string, horario: string) {
        this.idCurse = idCurse;
        this.nombre = nombre;
        this.catedratico = catedratico;
        this.seccion = seccion;
        this.horario = horario;
    }

}
