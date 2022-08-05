import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: CurseModel[];

  /*
    new CurseModel(1, 'Precalculo', 'Profe1', 'A'),
    new CurseModel(2, 'Calculo 1', 'Profe2', 'B'),
    new CurseModel(3, 'Matemáticas discretas', 'Profe3', 'A'),
    new CurseModel(4, 'Programación 1', 'Profe4', 'B'),
    new CurseModel(5, 'Programación 2', 'Profe5', 'A'),
    new CurseModel(6, 'Programación 3', 'Profe6', 'B'),
    new CurseModel(7, 'Ética', 'Profe7', 'A'),
    new CurseModel(8, 'Lógica de sistemas', 'Profe8', 'B'),
    new CurseModel(9, 'Introducción a sistemas de computación', 'Profe9', 'A'),
    new CurseModel(10, 'Algoritmos', 'Profe10', 'B')
  */

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
/*
  agregarCurso(curso: CurseModel){
    this.cursos.push(curso)
  }*/
}
