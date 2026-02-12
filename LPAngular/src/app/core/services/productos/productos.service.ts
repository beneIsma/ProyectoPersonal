import { Injectable } from '@angular/core';
import {environmentProd} from '../../../../environments/environments.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

    private url = environmentProd.url;

    constructor(private http: HttpClient) { }

    obtenerProductos(): Observable<any> {
      return this.http.get<any>(`${this.url}/productos/`);
    }
}
