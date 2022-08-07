import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CursosService} from "../../../Services/cursos.service";
import {EstudianteService} from "../../../Services/estudiante.service";

declare var $:any;

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  estudiante: StudentModel;

  constructor(private rutaActiva: ActivatedRoute,
              private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    const idS = this.rutaActiva.snapshot.paramMap.get('id');
    this.estudiante = this.estudianteService.getEstudianteId(idS);
    console.log(this.formatoFecha(this.estudiante.nacimiento));
  }

  submit(formStudent: any, student: StudentModel){
    if (formStudent.valid){
      let aaaa: number = +formStudent.value.nacimiento.toString().slice(0, -6);
      let mm: number = formStudent.value.nacimiento.toString().slice(6, -3)-1;
      let dd: number = +formStudent.value.nacimiento.toString().slice(-2);
      student.nacimiento = new Date(aaaa,mm,dd);
      console.log(student.nacimiento);
      //this.estudianteService.editEstudiante(student);
      //this.showNotification('top','right', 2, "Estudiante actualizado");
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

  formatoFecha(date: Date): string{
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
  }
}
