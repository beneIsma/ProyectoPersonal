import {Component, OnInit, signal} from '@angular/core';
import {Login} from './main-layout/components/admin/login/login';
import {PanelCategoriasService} from '../core/services/panelCategorias/panel-categorias.service';
import {RouterLink} from '@angular/router';
import {MenuProductosMovil} from './main-layout/components/menu-productos-movil/menu-productos-movil';

@Component({
  selector: 'app-layouts',
  imports: [
    Login,
    RouterLink,
    MenuProductosMovil,
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

  openBarra = signal<boolean>(false);
  toggleBarra = () => {
    this.openBarra.update(state => !state);
  }

  constructor(
    private panelCategorias: PanelCategoriasService,
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
      complete: () => {
      }
    })
  }
}


interface CategoriaInterface {
  nombre: string;
}
