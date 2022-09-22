import { Component, OnInit } from '@angular/core';
import {CursosService} from "../../Services/cursos.service";
import {NgForm} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-newcurse',
  templateUrl: './newcurse.component.html',
  styleUrls: ['./newcurse.component.scss']
})
export class NewcurseComponent implements OnInit {
  curso: any = {idCurse: '', nombre: '', catedratico: '', seccion: '', horario: ''};

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
  }


  submit(formCurse: NgForm, curse: any){
    /*if (formCurse.valid){
      this.curso = this.cursosService.agregarCurso(curse);
      this.showNotification('top','right', 2, 'pe-7s-check',"Curso Creado");
    }else{
      this.showNotification('top','right', 4, 'pe-7s-close-circle',"Complete todos los campos");
    }*/
  }

  cleanForm(){
    this.curso = {idCurse: '', nombre: '', catedratico: '', seccion: '', horario: ''};
  }

  showNotification(from, align, color, ico, mensaje){
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
