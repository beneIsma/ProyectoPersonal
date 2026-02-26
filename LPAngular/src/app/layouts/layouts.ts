import {Component, OnInit, signal} from '@angular/core';
import {Login} from './main-layout/components/admin/login/login';
import {PanelCategoriasService} from '../core/services/panelCategorias/panel-categorias.service';
import {RouterLink} from '@angular/router';
import {MenuProductosMovil} from './main-layout/components/menu-productos-movil/menu-productos-movil';
import {FormsModule} from '@angular/forms';
import {BusquedaPorFiltroService} from '../core/services/busquedaPorFiltro/busqueda-por-filtro.service';
import {CategoriaInterface} from '../core/interfaces/categoriaInterface';
import {CajaNotis} from './main-layout/components/caja-notis/caja-notis';
import {ClicOutside} from '../shared/directives/clic-outside';

@Component({
  selector: 'app-layouts',
  imports: [
    Login,
    RouterLink,
    MenuProductosMovil,
    FormsModule,
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
    protected busquedaService: BusquedaPorFiltroService
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

  valorInput: string = '';
  mandarValor(valor: any) {
    this.busquedaService.setValor(valor)
  }
}
