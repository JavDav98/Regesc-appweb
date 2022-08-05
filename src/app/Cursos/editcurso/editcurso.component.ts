import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CursosService} from "../../../Services/cursos.service";

@Component({
  selector: 'app-editcurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.scss']
})
export class EditcursoComponent implements OnInit {
  curso: CurseModel;

  constructor(private rutaActiva: ActivatedRoute,
              private cursosService: CursosService) { }

  ngOnInit(): void {
    const idC = this.rutaActiva.snapshot.paramMap.get('id');
    console.log(this.cursosService.getCursoId(idC));
    this.curso = this.cursosService.getCursoId(idC);
  }

}
