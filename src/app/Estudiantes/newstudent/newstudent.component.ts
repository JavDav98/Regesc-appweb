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

  submit(formStudent: NgForm){
    let student: StudentModel;
    if (formStudent.valid){
      console.log(formStudent.value)
      console.log(JSON.stringify(formStudent.value));
      let aaaa: number = +formStudent.value.fecha.slice(0, -6);
      let mm: number = formStudent.value.fecha.slice(5, -3)-1;
      let dd: number = +formStudent.value.fecha.slice(-2);
      console.log(`Año ${aaaa}, Mes ${mm}, Dia ${dd}`);
      student = new StudentModel(
          formStudent.value.idPersona+0,
          formStudent.value.nombre,
          formStudent.value.apellido,
          formStudent.value.email,
          formStudent.value.tel+0,
          formStudent.value.direccion,
          new Date(aaaa,mm,dd),
          formStudent.value.carnet
      );
      console.log(student)
      /*student.nacimiento = new Date(aaaa,mm,dd);
      this.estudianteService.editEstudiante(student);
      this.showNotification('top','right', 2, "Estudiante actualizado");*/
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
