import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Array<CurseModel>;

  constructor() {
    this.cursos = [
      {idCurse: 1, nombre: 'Precalculo', catedratico: 'Profe1', seccion: 'A'},
      {idCurse: 2, nombre: 'Calculo 1', catedratico: 'Profe2', seccion: 'B'},
      {idCurse: 3, nombre: 'Matemáticas discretas', catedratico: 'Profe3', seccion: 'A'},
      {idCurse: 4, nombre: 'Programación 1', catedratico: 'Profe4', seccion: 'B'},
      {idCurse: 5, nombre: 'Programación 2', catedratico: 'Profe5', seccion: 'A'},
      {idCurse: 6, nombre: 'Programación 3', catedratico: 'Profe6', seccion: 'B'},
      {idCurse: 7, nombre: 'Ética', catedratico: 'Profe7', seccion: 'A'},
      {idCurse: 8, nombre: 'Lógica de sistemas', catedratico: 'Profe8', seccion: 'B'},
      {idCurse: 9, nombre: 'Introducción a sistemas de computación', catedratico: 'Profe9', seccion: 'A'},
      {idCurse: 10, nombre: 'Algoritmos', catedratico: 'Profe10', seccion: 'B'}
    ]
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
    return this.cursos.find(curso => curso.idCurse == idCurso)
  }

  agregarCurso(curso: CurseModel){
    this.cursos.push(curso)
  }
}
