import {Component, OnInit, signal} from '@angular/core';
import {Login} from './main-layout/components/login/login';
import {PanelCategoriasService} from '../core/services/panelCategorias/panel-categorias.service';

@Component({
  selector: 'app-layouts',
  imports: [
    Login,
  ],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss',
  standalone: true
})
export class Layouts implements OnInit {
  openLogin = signal<boolean>(false);

  toggleLogin = () => {
    this.openLogin.update(state => !state);
  }

  constructor(
    private panelCategorias: PanelCategoriasService
  ) {
  }
  categorias = signal<CategoriaInterface[]>([])

  ngOnInit() {
    this.panelCategorias.obtenerCategorias().subscribe({
      next: response => {
        console.log(response);
        this.categorias.set(response.data)
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }

}

interface CategoriaInterface {
  nombre: string;
}
