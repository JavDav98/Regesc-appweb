import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentModel} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: CurseModel[];
  private urlService = '/api/curso';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<CurseModel[]>{
    let url: string = `${this.urlService}/all`
    return this.httpClient.get<CurseModel[]>(url);
  }

  getCurso(idcurso: number): Observable<CurseModel>{
    let url: string = `${this.urlService}/find/by/idcurso/${idcurso}`
    return this.httpClient.get<CurseModel>(url);
  }

}
