class CurseModel{
    idCurse: number;
    nombre: string;
    catedratico: string;
    seccion: string;

    constructor(idCurse: number, nombre: string, catedratico: string, seccion: string) {
        this.idCurse = idCurse;
        this.nombre = nombre;
        this.catedratico = catedratico;
        this.seccion = seccion;
    }
}
