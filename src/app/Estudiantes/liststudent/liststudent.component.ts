import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../Services/estudiante.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.scss']
})

export class ListstudentComponent implements OnInit {
  public pms: PersonaModel[];
  public estudiantes: any[] = [];
  public encabezado: string[] = ['Carnet', 'Nombre', 'Apellido', 'Email', 'Telefono', 'Dirección', 'Fecha de nacimiento'];

  constructor(private estudianteService: EstudianteService, private rout: Router) {
    this.estudianteService.getEstudiantesDatos().subscribe((result)=>{
      this.pms = result;
      this.parseStudentDataCompleteList(result);
    })
  }

  ngOnInit(): void {
  }

  parseStudentDataCompleteList(pms: PersonaModel[]){
    let s: any;
    for (let p of pms) {
      if (p.students.length > 0) {
        s = Object.assign(p, p.students[0]);
        this.estudiantes.push(s);
      }
    }

  }

}
