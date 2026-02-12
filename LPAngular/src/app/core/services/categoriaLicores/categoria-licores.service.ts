import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environmentProd} from '../../../../environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoriaLicoresService {
  private url = environmentProd.url

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${this.url}/secciones/`);
  }
}
