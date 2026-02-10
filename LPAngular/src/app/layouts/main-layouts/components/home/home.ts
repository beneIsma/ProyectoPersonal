import {Component, signal} from '@angular/core';
import {Login} from '../login/login';

@Component({
  selector: 'app-home',
  imports: [
    Login
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    openLogin = signal<boolean>(false);

    toggleLogin = () => {
      this.openLogin.update(state => !state);
    }
}
