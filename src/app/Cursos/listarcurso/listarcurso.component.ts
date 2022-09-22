import { Component, OnInit, ElementRef } from '@angular/core';
import {CursosService} from "../../Services/cursos.service";

@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.scss']
})


export class ListarcursoComponent implements OnInit {
  public cursos: Array<CurseModel>;
  public encabezado: string[] = ['ID', 'Nombre', 'Catedratico', 'Sección', 'Horario'];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
   // this.cursos = this.cursosService.getCursos();
  }
}
