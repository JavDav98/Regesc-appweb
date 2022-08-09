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
      this.estudiante = this.estudianteService.agregarEstudiante(student);
      this.showNotification('top','right', 2, 'pe-7s-check',"Estudiante actualizado");
    }else{
      this.showNotification('top','right', 4, 'pe-7s-close-circle',"Complete todos los campos");
    }
  }

  cleanForm(){
    this.estudiante = {idPersona: '', nombre: '', apellido: '', email: '', tel: '', direccion: '', nacimiento: '', fecha: ''};
  }

  showNotification(from, align, color,ico, mensaje){
    const type = ['','info','success','warning','danger'];

    $.notify({
      icon: ico,
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
