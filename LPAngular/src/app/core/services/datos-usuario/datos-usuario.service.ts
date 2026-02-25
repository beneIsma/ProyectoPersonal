import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosUsuarioService {

  email: string = '';

  guardarEmail(email: string) {
    this.email = email;
    return email
  }

  getEmail() {
    return this.email
  }

}
