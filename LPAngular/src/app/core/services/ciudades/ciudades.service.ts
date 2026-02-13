import { Injectable } from '@angular/core';
import {environmentProd} from '../../../../environments/environments.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CiudadesService {
  private url = environmentProd.url

  constructor(private http: HttpClient) { }

  get():Observable<any> {
    return this.http.get<any>(`${this.url}/ciudades/`)
  }
}
