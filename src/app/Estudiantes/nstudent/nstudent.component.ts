import {Component, ElementRef, OnInit} from '@angular/core';
import {RouteInfo} from "../../models/route-info"
import {Location} from "@angular/common";

export const ROUTESTUDENT: RouteInfo[] = [
  { path: '/nstudent/new', title: 'Nuevo Estudiante',  icon:'pe-7s-file', class: '' },
  { path: '/nstudent/edit', title: 'Editar Estudiante',  icon:'pe-7s-file', class: '' },
  { path: '/nstudent/list', title: 'Listar Estudiante',  icon:'pe-7s-file', class: '' },
];
@Component({
  selector: 'app-nstudent',
  templateUrl: './nstudent.component.html',
  styleUrls: ['./nstudent.component.scss']
})
export class NstudentComponent implements OnInit {
  private listTitles: any[];
  location: Location;

  constructor(location: Location,  private element: ElementRef) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTESTUDENT.filter(listTitle => listTitle);
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
    return 'Estudiantes';
  }

}
