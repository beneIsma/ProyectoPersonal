import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductosService} from '../../../../core/services/productos/productos.service';
import {Layouts} from '../../../layouts';
import {CategoriaLicoresService} from '../../../../core/services/categoriaLicores/categoria-licores.service';
import {Footer} from '../../../footer/footer';
import {NgClass} from '@angular/common';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import {AlertasServices} from '../../../../core/utils/alertas/alertas.services';

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
    public  carritoService:CarritoService,
    private alertasService: AlertasServices
  ) {}

  productos = signal<ProductoInterface[]>([])
  seccionLicores = signal<seccionesLicores[]>([])

  ngOnInit() {
    this.alertasService.showLoader()
    setTimeout(() => {
      this.productosService.obtenerProductos().subscribe({
        next: response => {
          console.log(response);
          this.productos.set(response.data)
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
}

export interface ProductoInterface {
  nombre:string,
  slug:string,
  categoria:string ,
  precio:number,
  precioVenta:number,
  proveedor:string,
  marca:string,
  imagen:string,
  descripcion:string,
  cantidad: number;
}

interface seccionesLicores {
  categoria:string;
  nombre:string;
  imagen:string;
}


