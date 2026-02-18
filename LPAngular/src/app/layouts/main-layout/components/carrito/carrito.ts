import {Component, output, signal} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

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
    private router: Router,
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
}
