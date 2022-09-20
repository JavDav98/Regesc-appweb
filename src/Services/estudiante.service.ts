import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {StudentModel} from "../app/models/student.model";

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  private estudiantes: StudentModel[];
  private urlService = 'http://localhost:8585/estudiante';
  private urlPersona = 'http://localhost:8585/persona';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient: HttpClient) {
  }

  putEditPersona(p: PersonaModel): Observable<PersonaModel>{
    let url: string = `${this.urlService}/update`;
    let headers: any = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.put<PersonaModel>(url, JSON.stringify(p), {headers: headers});
  }

  getEstudiantes(): Observable<any>{
    let url: string = `${this.urlService}/all`
    return this.httpClient.get(url);
  }

  getPersonas(): Observable<PersonaModel[]>{
    let url: string = `${this.urlPersona}/all`
    return this.httpClient.get<PersonaModel[]>(url);
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
