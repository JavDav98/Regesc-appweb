import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../../Services/estudiante.service";
import {NgForm} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {

  estudiante: any = {idPersona: '', nombre: '', apellido: '', email: '', tel: '', direccion: '', nacimiento: '', fecha: ''};

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
  }

  submit(formStudent: NgForm, student: any){
    if (formStudent.valid){
      let aaaa: number = +student.fecha.toString().slice(0, -6);
      let mm: number = student.fecha.toString().slice(5, -3)-1;
      let dd: number = +student.fecha.toString().slice(-2);
      student.nacimiento = new Date(aaaa,mm,dd);
      this.estudiante.carnet = student.carnet;
      student = this.estudianteService.agregarEstudiante(student);
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
