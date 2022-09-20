import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Array<any>;

  constructor() {
    this.cursos = [
      {idcurso: 1, nombre: 'Precalculo', catedratico: 'Profe1', seccion: 'A', horario: '07:00 - 09:00'},
      {idcurso: 2, nombre: 'Calculo 1', catedratico: 'Profe2', seccion: 'B', horario: '09:00 - 11:00'},
      {idcurso: 3, nombre: 'Matemáticas discretas', catedratico: 'Profe3', seccion: 'A', horario: '11:00 - 13:00'},
      {idcurso: 4, nombre: 'Programación 1', catedratico: 'Profe4', seccion: 'B', horario: '14:00 - 16:00'},
      {idcurso: 5, nombre: 'Programación 2', catedratico: 'Profe5', seccion: 'A', horario: '16:00 - 18:00'},
      {idcurso: 6, nombre: 'Programación 3', catedratico: 'Profe6', seccion: 'B', horario: '07:00 - 09:00'},
      {idcurso: 7, nombre: 'Ética', catedratico: 'Profe7', seccion: 'A', horario: '09:00 - 11:00'},
      {idcurso: 8, nombre: 'Lógica de sistemas', catedratico: 'Profe8', seccion: 'B', horario: '11:00 - 13:00'},
      {idcurso: 9, nombre: 'Introducción a sistemas de computación', catedratico: 'Profe9', seccion: 'A', horario: '14:00 - 16:00'},
      {idcurso: 10, nombre: 'Algoritmos', catedratico: 'Profe10', seccion: 'B', horario: '16:00 - 18:00'}
    ];
  }

  getCursos(): Array<CurseModel>{
    return this.cursos;
  }

  getCurso(c: CurseModel): CurseModel{
    for (let curso of this.cursos){
      if (curso == c){
        return curso
      }
    }
  }

  getCursoId(idCurso){
    return this.cursos.find(curso => curso.idcurso == idCurso)
  }

  deleteCurso(idcurso: number){
    this.cursos.splice(this.cursos.findIndex(curso => curso.idcurso == idcurso), 1);
  }

  agregarCurso(curso: CurseModel){
    curso.idcurso = Math.floor(Math.random() * ((30911899999+1) - 30911800000) + 30911800000);
    this.cursos.push(curso)
    return curso;
  }

  editCurso(c: CurseModel){
    this.cursos[this.cursos.findIndex(curso => curso.idcurso == c.idcurso)] = c;
  }

}
