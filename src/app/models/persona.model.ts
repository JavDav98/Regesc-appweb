class PersonaModel{
    private idPersona: number;
    private nombre: string;
    private apellido: string;
    private email: string;
    private tel: number;
    private direccion: string;
    private nacimiento: any;

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