import {Component, OnInit, output, signal} from '@angular/core';
import {PanelCategoriasService} from '../../../../core/services/panelCategorias/panel-categorias.service';
import {Login} from '../admin/login/login';
import {CategoriaInterface} from '../../../../core/interfaces/menu-productos-movil/categoriasProductos';

@Component({
  selector: 'app-menu-productos-movil',
  imports: [
    Login
  ],
  templateUrl: './menu-productos-movil.html',
  styleUrl: './menu-productos-movil.scss',
})
export class MenuProductosMovil implements OnInit {

  openBarraDesdeLayout = output()
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
