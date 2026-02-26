import {Component, OnInit, signal} from '@angular/core';
import {ProductosService} from '../../../../core/services/productos/productos.service';
import {Layouts} from '../../../layouts';
import {CategoriaLicoresService} from '../../../../core/services/categoriaLicores/categoria-licores.service';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import {AlertasServices} from '../../../../core/utils/alertas/alertas.services';
import {BusquedaPorFiltroService} from '../../../../core/services/busquedaPorFiltro/busqueda-por-filtro.service';
import { effect } from '@angular/core';
import {ProductoInterface} from '../../../../core/interfaces/productos';
import {seccionesLicores} from '../../../../core/interfaces/productos';

@Component({
  selector: 'app-pag-licores',
  imports: [
    Layouts,
    Footer,
  ],
  templateUrl: './pag-licores.html',
  styleUrl: './pag-licores.scss',
})
export class PagLicores implements OnInit {
  constructor(
    private productosService: ProductosService,
    private categoriaLicores: CategoriaLicoresService,
    public carritoService: CarritoService,
    private alertasService: AlertasServices,
    private busquedaService: BusquedaPorFiltroService
  ) {
    /*El effect se ejecuta una vez al inicio
      Y luego cada vez que cambia un signal que esté dentro
    */

    effect(() => {
      const valor = this.busquedaService.valorInput();

      if (!valor) {
        this.productos.set(this.copiaProductos());
        return;
      }

      const filtrados = this.copiaProductos().filter(p =>
        p.nombre.toLowerCase().includes(valor.toLowerCase())
      );

      this.productos.set(filtrados);
    });
  }

  copiaProductos = signal<ProductoInterface[]>([])
  productos = signal<ProductoInterface[]>([])

  seccionLicores = signal<seccionesLicores[]>([])

  ngOnInit() {
    this.alertasService.showLoader()
    setTimeout(() => {
      this.productosService.obtenerProductos().subscribe({
        next: response => {
          console.log(response);
          this.productos.set(response.data)
          this.copiaProductos.set(this.productos())
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
        }
      })

      this.categoriaLicores.getCategorias().subscribe({
        next: response => {
          console.log(response);
          this.seccionLicores.set(response.data)

        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.alertasService.hide()
        }
      })
    }, 1000)
  }

  cambiarEstado(seccion: String) {
    const filtrados = this.copiaProductos().filter((p => p.seccion === seccion))
    this.productos.set(filtrados)
  }

  mostrarTodosLosProductos() {
    this.productos.set(this.copiaProductos())
  }
}
