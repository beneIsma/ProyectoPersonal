import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  volverAlLogin = output()

  cambiarForm = signal<boolean>(false)
  cambiarEstadoForm () {
    this.cambiarForm.update(state => !state)
  }
}
