import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductosService} from '../../../../core/services/productos/productos.service';
import {Layouts} from '../../../layouts';
import {CategoriaLicoresService} from '../../../../core/services/categoriaLicores/categoria-licores.service';
import {Footer} from '../../../footer/footer';

@Component({
  selector: 'app-pag-licores',
  imports: [
    Layouts,
    Footer
  ],
  templateUrl: './pag-licores.html',
  styleUrl: './pag-licores.scss',
})
export class PagLicores implements OnInit {
  constructor(
    private productosService: ProductosService,
    private categoriaLicores: CategoriaLicoresService
  ) {}

  productos = signal<ProductoInterface[]>([])
  seccionLicores = signal<seccionesLicores[]>([])

  ngOnInit() {

    this.productosService.obtenerProductos().subscribe({
      next: response => {
        console.log(response);
        this.productos.set(response.data)
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })

    this.categoriaLicores.getCategorias().subscribe({
      next: response => {
        console.log(response);
        this.seccionLicores.set(response.data)
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }
}

interface ProductoInterface {
  nombre:string,
  slug:string,
  categoria:string ,
  precioCompra:number,
  precioVenta:number,
  proveedor:string,
  marca:string,
  imagen:string,
  descripcion:string,
}

interface seccionesLicores {
  categoria:string;
  nombre:string;
  imagen:string;
}
