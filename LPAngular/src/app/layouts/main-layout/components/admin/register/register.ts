import {Component, OnInit, output, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthServiceService} from '../../../../../core/services/auth-service/auth-service.service';
import {CiudadesService} from '../../../../../core/services/ciudades/ciudades.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.scss',
  imports: [
    ReactiveFormsModule,
    NgClass
  ]
})
export class Register implements OnInit {
  volverAlLogin = output()

  cambiarForm = signal<boolean>(false)
  cambiarEstadoForm () {
    this.cambiarForm.update(state => !state)
  }

  formRegistro: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private ciudadesService: CiudadesService,
  ) {
    this.formRegistro = this.formBuilder.group({
      "nombre": ['', [Validators.required, Validators.maxLength(20)]],
      "apellidos": ['', [Validators.required, Validators.maxLength(50)]],
      "ci": ['', [Validators.required, Validators.maxLength(10)]],
      "direccion": ['', [Validators.required, Validators.maxLength(100)]],
      "ciudad": ['', [Validators.required, Validators.maxLength(100)]],
      "email": ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      "password1": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      "password2": ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      "telefono": ['', [Validators.required, Validators.maxLength(12)]],
      "edad": ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    })
  }
  usuarios = []

  registrarUsuario() {

    if (this.formRegistro.invalid) {
      alert("No se ha podido enviar el formulario, revise los campos")
      console.log(this.formRegistro.errors);
      return ;
    }else {
      // @ts-ignore
      this.usuarios.push(this.formRegistro.value);
      console.log(this.formRegistro.value);
    }
    this.authService.registro(this.formRegistro.value).subscribe({
      next: request => {
        console.log(request.data);
        alert("Cuenta creada correctamente")
        this.formRegistro.reset();
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }

  ciudades = signal<{ciudad: string, slug: string}[]>([])
  ngOnInit() {
    this.ciudadesService.get().subscribe({
      next: request => {
        console.log(request.data);
        this.ciudades.set(request.data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }
}
