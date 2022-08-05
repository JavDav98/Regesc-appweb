import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {RouteInfo} from "../../models/route-info"

export const ROUTESCURSE: RouteInfo[] = [
  { path: '/ncurso/new', title: 'Nuevo Curso',  icon:'pe-7s-file', class: '' },
  { path: '/ncurso/edit', title: 'Editar Curso',  icon:'pe-7s-file', class: '' },
  { path: '/ncurso/list', title: 'Listar Cursos',  icon:'pe-7s-file', class: '' },
];

@Component({
  selector: 'app-ncurso',
  templateUrl: './ncurso.component.html',
  styleUrls: ['./ncurso.component.scss']
})

export class NcursoComponent implements OnInit {
  private listTitles: any[];
  location: Location;

  constructor(location: Location,  private element: ElementRef) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTESCURSE.filter(listTitle => listTitle);
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
        return this.listTitles[item].title;
      }
    }
    return 'Editar Curso';
  }

}
