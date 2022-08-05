class AsignacionModel{
    curso: CurseModel;
    alumno: StudentModel;
    nota1: number;
    nota2: number;
    nota3: number;
    notafinal: number;


    constructor(curso: CurseModel, alumno: StudentModel, nota1: number, nota2: number, nota3: number) {
        this.curso = curso;
        this.alumno = alumno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.notafinal = nota1 + nota2 + nota3;
    }
}