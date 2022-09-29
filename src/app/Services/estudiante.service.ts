import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {StudentModel} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  private estudiantes: StudentModel[];
  private urlService = '/api/estudiante';
  private urlPersona = '/api/persona';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient: HttpClient) {
  }

  putEditPersona(p: PersonaModel): Observable<PersonaModel>{
    let url: string = `${this.urlPersona}/update`;
    let headers: any = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put<PersonaModel>(url, JSON.stringify(p), {headers: headers});
  }

  postNewPersona(p: PersonaModel): Observable<PersonaModel> {
    let headers: any = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(`${this.urlPersona}/new`, JSON.stringify(p), {headers: headers});
  }

  postNewStudent(p: StudentModel): Observable<StudentModel> {
    let headers: any = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(`${this.urlService}/new`, JSON.stringify(p), {headers: headers});
  }

  getEstudiantes(): Observable<any>{
    let url: string = `${this.urlService}/all`
    return this.httpClient.get(url);
  }

  getEstudiantesDatos(): Observable<PersonaModel[]>{
    let url: string = `${this.urlPersona}/all`
    return this.httpClient.get<PersonaModel[]>(url);
  }

  getEstudiantesDatosInd(cui: number): Observable<PersonaModel>{
    let url: string = `${this.urlPersona}/find/by/cui/${cui}`;
    return this.httpClient.get<PersonaModel>(url);
  }

  getEstudianteCarnet(carnet: number): Observable<StudentModel>{
    let url: string = `${this.urlService}/find/by/carnet/${carnet}`;
    alert(url)
    return this.httpClient.get(url);
  }

  deleteStudent(carnet: number): Observable<StudentModel>{
    let url: string = `${this.urlService}/delete/${carnet}`;
    alert(url)
    return this.httpClient.delete<StudentModel>(url);
  }

  /*postNewStudent(s: StudentModel): Observable<StudentModel>{
    return
  }*/


/*
  deleteStudent(carnet: number){
    this.estudiantes.splice(this.estudiantes.findIndex(estudiante => estudiante.carnet == carnet), 1);
  }

  agregarEstudiante(s: StudentModel){
    s.carnet = Math.floor(Math.random() * ((31901899999+1) - 31901800000) + 31901800000);
    this.estudiantes.push(s);
    return s;
  }

  editEstudiante(s: StudentModel){
    this.estudiantes[this.estudiantes.findIndex(estudiante => estudiante.carnet == s.carnet)];

  }*/

}
