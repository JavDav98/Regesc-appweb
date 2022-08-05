import { Component, OnInit, ElementRef } from '@angular/core';
import {CursosService} from "../../../Services/cursos.service";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-listarcurso',
  templateUrl: './listarcurso.component.html',
  styleUrls: ['./listarcurso.component.scss']
})

export class ListarcursoComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  public cursos: Array<CurseModel>;
  public headerRow: [ 'ID', 'Nombre', 'Catedratico', 'Sección'];

  constructor(private cusrosService: CursosService) {
    this.cursos = this.cusrosService.getCursos();
  }

  ngOnInit() {
    console.log(this.cursos);
    this.tableData1 = {
      headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
      dataRows: [
        ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
    };
  }

}
