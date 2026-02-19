import {Component, output, signal} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {PedidoServices} from '../../../../core/services/pedido/pedido.services';
import {AlertasServices} from '../../../../core/utils/alertas/alertas.services';

@Component({
  selector: 'app-carrito',
  imports: [
    Layouts,
    Footer,
  ],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
  standalone: true,
})
export class Carrito {


  constructor(
    protected carritoService: CarritoService,
    protected pedidoService: PedidoServices,
    private router: Router,
    private alertasServices: AlertasServices,
  ) {
    this.carritoService.guardarProductosCart()
  }

  vaciarCarrito() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Esta seguro?",
      text: "No vas a poder revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminalo!",
      cancelButtonText: "No, cancelalo!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.cart.set([])
        this.carritoService.eliminarLocalStorage()
        swalWithBootstrapButtons.fire({
          title: "Borrado!",
          text: "Tu carrito se ha vaciado.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Tu carrito sigue a salvo",
          icon: "error"
        });
      }
    });
  }

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
