import {Component, output} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';

@Component({
  selector: 'app-pasarela-de-pago',
  imports: [
  ],
  templateUrl: './pasarela-de-pago.html',
  styleUrl: './pasarela-de-pago.scss',
})
export class PasarelaDePago {

    constructor(
      protected carritoService: CarritoService,
    ) {
    }
    openPasarelaDePagoDesdeCarrito = output();
}
