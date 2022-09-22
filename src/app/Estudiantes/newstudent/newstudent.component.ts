import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../Services/estudiante.service";
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

declare var $:any;

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {
  estudiante: any = {};
  p: any = {};
  s: any = {};

  constructor(private estudianteService: EstudianteService, private rout: Router) { }

  ngOnInit() {

  }

  submit(formStudent: NgForm, student: any){
    if (formStudent.valid){
      /*let aaaa: number = +student.fecha.toString().slice(0, -6);
      let mm: number = student.fecha.toString().slice(5, -3)-1;
      let dd: number = +student.fecha.toString().slice(-2);
      */
      this.p.nacimiento = student.fecha;
      this.p.cui = student.cui;
      this.p.nombre = student.nombre;
      this.p.apellido = student.apellido;
      this.p.email = student.email;
      this.p.telefono = student.telefono;
      this.p.direccion = student.direccion;
      this.p.studentList = [];
      this.p.profesorList = [];
      alert(JSON.stringify(this.p))
      this.estudianteService.postNewPersona(this.p).subscribe((result)=>{
        this.showNotification('top','right', 2, 'pe-7s-check',"Estudiante actualizado");
      })
      //this.estudiante = this.estudianteService.agregarEstudiante(student);
    }else{
      this.showNotification('top','right', 4, 'pe-7s-close-circle',"Complete todos los campos");
    }
  }

  cleanForm(){
    this.estudiante = {};
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
