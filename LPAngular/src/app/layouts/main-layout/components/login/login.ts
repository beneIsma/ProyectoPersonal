import {Component, output, signal} from '@angular/core';
import {Register} from '../register/register';

@Component({
  selector: 'app-login',
  imports: [
    Register
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login {
  openLoginDesdeHome = output()

  openRegistro = signal<boolean>(false)

  mostrarRegistro () {
    this.openRegistro.update(state => !state)
  }

  mostrarLogin () {
    this.openRegistro.update(state => !state)
  }
}
