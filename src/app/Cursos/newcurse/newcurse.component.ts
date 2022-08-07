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
  curso: any;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
  }


  submit(formCurse: NgForm, curse: CurseModel){
   /* if (formCurse.valid){
      this.cursosService.editCurso(curse);
      this.showNotification('top','right', 2, "Curso actualizado");
    }else{
      this.showNotification('top','right', 4, "Complete todos los campos");
    }*/
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
