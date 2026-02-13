import {Component, output, signal} from '@angular/core';
import {Register} from '../register/register';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SessionStorageService} from '../../../../../core/services/sessionStorage/session-storage.service';
import {AuthServiceService} from '../../../../../core/services/auth-service/auth-service.service';
import {AuthCookieService} from '../../../../../core/services/auth-cookie/auth-cookie.service';

type datosEnvioAlBack = {"email": string, "password": string};


@Component({
  selector: 'app-login',
  imports: [
    Register,
    ReactiveFormsModule
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

  formLogin:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: AuthCookieService,
    private sessionStorage: SessionStorageService,
    private authService: AuthServiceService,
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['isma@gmail.com', [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ['123456789', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }

  iniciarLogin() {
    console.log(this.formLogin.value)
    if (this.formLogin.invalid) {
      alert("No se ha enviado el formulario")
      return ;
    }
    const datosEnvio: datosEnvioAlBack = {
      email:this.formLogin.value.email,
      password:this.formLogin.value.password
    }
    this.authService.login(datosEnvio).subscribe({
      next: request => {
        console.log("h");
        console.log(request);
        console.log("h")

        this.cookieService.set('token_usuario', request.data.token)
        console.log(request.data.token)
        this.cookieService.set('tokenRefresh_usuario', request.data.refreshToken);

        const data: any = {
          email: request.data.email,
          nombre: request.data.nombre,
          rol:request.data.rol,
        }
        this.sessionStorage.set('data', data);

        this.openLoginDesdeHome.emit();
        alert("Iniciando sesión")
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }
}
