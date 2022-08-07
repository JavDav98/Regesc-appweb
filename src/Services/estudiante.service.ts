import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  estudiantes: Array<StudentModel>;

  constructor() {
    this.estudiantes = [
      {idPersona: 1, nombre: 'Francis Javier de Jesús', apellido: 'Dávila Lemus', email: 'javdav1@gmail.com', tel: 45698725, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1998, 6, 25), carnet: 319018158121},
      {idPersona: 2, nombre: 'Francis ', apellido: 'Dávila Lemus', email: 'javdav@gmail.com2', tel: 95195115, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158122},
      {idPersona: 3, nombre: 'Javier de Jesús', apellido: 'Dávila Lemus', email: 'javdav@3gmail.com', tel: 26326332, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158123},
      {idPersona: 4, nombre: 'Francis de Jesús', apellido: 'Dávila Lemus', email: 'javdav@4gmail.com', tel: 48596213, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158124},
      {idPersona: 5, nombre: 'Francis Javier', apellido: 'Dávila Lemus', email: 'javdav@5gmail.com', tel: 45635789, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158125},
      {idPersona: 6, nombre: 'Javier', apellido: 'Dávila Lemus', email: 'javdav@gmail.com6', tel: 159482637, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158126},
      {idPersona: 7, nombre: 'Jesús', apellido: 'Dávila Lemus', email: 'javdav@gmail.com7', tel: 96348257, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158127},
      {idPersona: 8, nombre: 'Francis Javier de Jesús', apellido: 'Dávila Lemus', email: '8javdav@gmail.com', tel: 49136782, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158128},
      {idPersona: 9, nombre: 'Francis', apellido: 'Dávila Lemus', email: 'javdav@gmail.com9', tel: 86649352, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158129},
      {idPersona: 10, nombre: 'Francis de Jesús', apellido: 'Dávila Lemus', email: 'javdav10@gmail.com', tel: 59956288, direccion: 'Ciudad de Guatemala', nacimiento: new Date(1995, 11, 17), carnet: 319018158120}
    ];
  }

  getEstudiantes(): Array<StudentModel>{
    return this.estudiantes
  }

  getEstudianteId(carnet): StudentModel{
    return this.estudiantes.find(student => student.carnet == carnet)
  }

  agregarEstudiante(s: StudentModel){
    this.estudiantes.push(s);
  }

  editEstudiante(s: StudentModel){
    this.estudiantes[this.estudiantes.findIndex(estudiante => estudiante.carnet == s.carnet)];
  }

}
