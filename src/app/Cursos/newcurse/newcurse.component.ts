import { Component, OnInit } from '@angular/core';
import {CursosService} from "../../../Services/cursos.service";
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
    if (formCurse.valid){
      let c: CurseModel;
      this.curso.idCurse = c.idCurse;
      this.curso = this.cursosService.agregarCurso(this.curso);
      this.showNotification('top','right', 2, 'pe-7s-check',"Estudiante actualizado");
    }else{
      this.showNotification('top','right', 4, 'pe-7s-close-circle',"Complete todos los campos");
    }
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
