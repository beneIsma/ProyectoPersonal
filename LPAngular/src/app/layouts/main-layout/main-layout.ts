import {Component, signal} from '@angular/core';
import {Login} from './components/admin/login/login';
import {BarraMenuMovil} from './components/menuHome-movil/barra-menu-movil';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    Login,
    BarraMenuMovil,
    NgClass,
    RouterLink
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  openLogin = signal<boolean>(false);

  toggleLogin = () => {
    this.openLogin.update(state => !state);
  }
  openBarra = signal<boolean>(false);
  toggleBarra = () => {
    this.openBarra.update(state => !state);
  }
}
