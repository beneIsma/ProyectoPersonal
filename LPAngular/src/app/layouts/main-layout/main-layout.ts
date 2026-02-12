import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Login} from './components/login/login';

@Component({
  selector: 'app-main-layout',
  imports: [
    Login
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  openLogin = signal<boolean>(false);

  toggleLogin = () => {
    this.openLogin.update(state => !state);
  }
}
