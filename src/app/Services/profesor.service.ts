import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfesorModel} from "../models/profesor.model";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private profesores: ProfesorModel[];
  private urlService = '/api/profesor';
  private urlPersona = '/api/profesor';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient: HttpClient) {

  }

  getProfesorFindByCarnet(carnet: number): Observable<PersonaModel>{
    let url = `${this.urlPersona}/datos/completos/${carnet}`;
    return this.httpClient.get<PersonaModel>(url);
  }


}
