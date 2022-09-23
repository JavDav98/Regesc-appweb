import { Component, OnInit, ElementRef } from '@angular/core';
import {CursosService} from "../../Services/cursos.service";
import {ProfesorService} from "../../Services/profesor.service";

@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.scss']
})


export class ListarcursoComponent implements OnInit {
  public cursos: Array<any>;
  public encabezado: string[] = ['ID', 'Nombre', 'Catedratico', 'Sección', 'Horario'];

  constructor(private cursosService: CursosService,
              private profesorService: ProfesorService) { }

  ngOnInit() {
    this.cursosService.getCursos().subscribe((result)=>{
      this.cursos = this.findProfesor(result);
    })
  }

  findProfesor(cml: any[]): any[]{
    for (let c of cml){
      this.profesorService.getProfesorFindByCarnet(c.matriculaprofesors[0].profesorCarnetprofesor)
          .subscribe((result)=>{
            c.nombreCatedratico = `${result.nombre} ${result.apellido}`
      })
    }
    return cml
  }

}
