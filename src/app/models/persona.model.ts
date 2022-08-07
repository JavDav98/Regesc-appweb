class PersonaModel{
    idPersona: number;
    nombre: string;
    apellido: string;
    email: string;
    tel: number;
    direccion: string;
    nacimiento = new Date();

    constructor(idPersona: number, nombre: string, apellido: string, email: string, tel: number, direccion: string, nacimiento: any) {
        this.idPersona = idPersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tel = tel;
        this.direccion = direccion;
        this.nacimiento = nacimiento;
    }
}