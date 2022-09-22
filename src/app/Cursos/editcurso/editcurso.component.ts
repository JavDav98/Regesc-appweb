import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CursosService} from "../../Services/cursos.service";

declare var $:any;

@Component({
  selector: 'app-editcurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.scss']
})
export class EditcursoComponent implements OnInit {
  curso: any;

  constructor(private rutaActiva: ActivatedRoute,
              private cursosService: CursosService) { }

  ngOnInit(): void {
    const idC = this.rutaActiva.snapshot.paramMap.get('id');
    //this.curso = this.cursosService.getCursoId(idC);
  }

  submit(formCurse: any, curse: CurseModel){
    if (formCurse.valid){
      //this.cursosService.editCurso(curse);
      this.showNotification('top','right', 2, "Curso actualizado");
    }else{
      this.showNotification('top','right', 4, "Complete todos los campos");
    }
  }

  delete(curs: CurseModel){
    //this.cursosService.deleteCurso(curs.idCurse);
    //this.curso = {idCurse: undefined, nombre: '', catedratico: '', seccion: '', horario: ''};
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
