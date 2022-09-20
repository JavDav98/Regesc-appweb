import {Component, OnInit} from '@angular/core';
import {EstudianteService} from "../../../Services/estudiante.service";
import {Router} from "@angular/router";
import {StudentModel} from "../../models/student.model";
import {formatDate} from "@angular/common";

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
      this.parsePersonaStudent(result);
    })
  }

  ngOnInit(): void {
    console.log('RESULTADO pms fuera del observable' + JSON.stringify(this.pms))
  }

  parsePersonaStudent(pms: PersonaModel[]){
    let s: StudentModel;
    for (let p of pms){
      if(p.studentList.length > 0){
        //alert(p.nacimiento)
        //const [day, month, year] = p.nacimiento.toString().split('-');
        const [year, month, day] = p.nacimiento.toString().split('-');
        p.nacimiento = new Date(+year, +month - 1, +day);
        s = p;
        s.carnetstudent = s.studentList[0].carnetstudent;
        s.usuario = s.studentList[0].usuario;
        s.password = s.studentList[0].password;
        this.estudiantes.push(s);
      }
    }

  }

}
