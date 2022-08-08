class CurseModel{
    idCurse: number;
    nombre: string;
    catedratico: string;
    seccion: string;
    horario: string;
    constructor(nombre: string, catedratico: string, seccion: string, horario: string) {
        this.idCurse = Math.floor(Math.random() * ((30911899999+1) - 30911800000) + 30911800000);
        this.nombre = nombre;
        this.catedratico = catedratico;
        this.seccion = seccion;
        this.horario = horario;
    }

}
