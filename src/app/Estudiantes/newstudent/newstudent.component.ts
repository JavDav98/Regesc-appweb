import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../Services/estudiante.service";
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {StudentModel} from "../../models/student.model";

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
      const [year, month, day] = student.fecha.split('-');
      //this.em.nacimiento = new Date(+year, +month - 1, +day);
      this.p.nacimiento = new Date(+year, +month - 1, +day);
      this.p.cui = student.cui;
      this.p.nombre = student.nombre;
      this.p.apellido = student.apellido;
      this.p.email = student.email;
      this.p.telefono = student.telefono;
      this.p.direccion = student.direccion;
      let s: any = {};
      s.usuario = student.usuario;
      s.password = student.password;
      s.personaCui = student.cui;
      this.p.students = [];
      this.p.students.push(s);
      this.p.profesors = [];
      alert(JSON.stringify(this.p))
      this.estudianteService.postNewPersona(this.p).subscribe((result)=>{
        this.estudianteService.postNewStudent(this.p.students[0]).subscribe((s)=>{
          this.showNotification('top','right', 2, 'pe-7s-check',"Estudiante actualizado");
        })
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
