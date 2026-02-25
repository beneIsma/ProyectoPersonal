import {Component, output} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import {PedidoServices} from '../../../../core/services/pedido/pedido.services';
import {Router} from '@angular/router';
import {AlertasServices} from '../../../../core/utils/alertas/alertas.services';

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
      protected pedidoService: PedidoServices,
      protected router: Router,
      private alertasServices: AlertasServices,
    ) {
    }
    openPasarelaDePagoDesdeCarrito = output();

  tramitarPedido() {
    if (this.carritoService.cart().length >= 1) {
      this.pedidoService.crearPedido(this.carritoService.cart())
      this.carritoService.cart.set([])
      this.router.navigate(['/pedido']);
    }else {
      this.alertasServices.mensajeNormal("Lo siento","No puedes comprar si no has seleccionado productos a tu carrito","info")

    }
  }
}
