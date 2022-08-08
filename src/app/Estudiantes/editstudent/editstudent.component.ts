import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { formatDate } from '@angular/common';
import {EstudianteService} from "../../../Services/estudiante.service";

declare var $:any;

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  estudiante: any;

  constructor(private rutaActiva: ActivatedRoute,
              private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    const idS = this.rutaActiva.snapshot.paramMap.get('id');
    this.estudiante = this.estudianteService.getEstudianteId(idS);
    this.estudiante.fecha = formatDate(this.estudiante.nacimiento, 'yyyy-MM-dd', 'es-GT');
  }

  submit(formStudent: any, student: any){
    if (formStudent.valid){
      console.log(formStudent.value.toString());
      let aaaa: number = +student.fecha.toString().slice(0, -6);
      let mm: number = student.fecha.toString().slice(5, -3)-1;
      let dd: number = +student.fecha.toString().slice(-2);
      console.log(`Año ${aaaa}, Mes ${mm}, Dia ${dd}`);
      student.nacimiento = new Date(aaaa,mm,dd);
      this.estudianteService.editEstudiante(student);
      this.showNotification('top','right', 2, "Estudiante actualizado");
    }else{
      this.showNotification('top','right', 4, "Complete todos los campos");
    }
  }

  showNotification(from, align, color, mensaje){
    const type = ['','info','success','warning','danger'];

    $.notify({
      icon: "pe-7s-check",
      message: mensaje
    },{
      type: type[color],
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }
}
