import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../../Services/estudiante.service";

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.scss']
})

export class ListstudentComponent implements OnInit {
  public estudiantes: Array<StudentModel>;
  public encabezado: string[] = ['Carnet', 'Nombre', 'Apellido', 'Email', 'Telefono', 'Dirección', 'Fecha de nacimiento'];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.estudiantes = this.estudianteService.getEstudiantes();
  }


  formatoFecha(date: Date): string{
    return date.getDate()+"/"+(date.getMonth())+"/"+date.getFullYear();
  }

}
