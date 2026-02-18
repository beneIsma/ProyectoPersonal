import {Injectable, input} from '@angular/core';
import Swal from 'sweetalert2';
import {CarritoService} from '../../services/carrito/carrito.service';
@Injectable({
  providedIn: 'root',
})
export class AlertasServices {

  constructor() {
  }
  //Mostrar
  showLoader(title: string = "Cargando...", description: string = "Espere unos segundos", inputValue: string = "hola"):void {
    Swal.fire({
      title: title,
      text: description,
      inputValue: inputValue,
      position: "top",
      icon: "warning",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  mensajeFaltaLogin(
    title: string,
    description: string,
    imageUrl: string,
    imageHeight:number = 100,
  ) {
  Swal.fire({
    imageUrl:imageUrl,
    imageHeight:imageHeight,
    imageAlt: "Imagen error",
    title:title,
    text:description,
  })
  }

  mensajeProductoArgregadoAlCarrito(
    title:string,
    description:string,
  ) {
    Swal.fire({
      position: "top-end",
      title: title,
      customClass: {
        popup: 'ventanaAddProducto'
      },
      backdrop: false,
      color: '#fff',
      text: description,
      showConfirmButton: false,
      timer: 1000
    });
  }

  mensajeNormal(
    title: string,
    description: string,
    icon: "warning" | "info" | "error" | "success"): void {
    Swal.fire({
      title: title,
      text: description,
      icon: icon,
    })
  }

  //Confirmar
  confirm(
    title: string,
    description: string,
    confirmText: string = "¿Está seguro?",
    cancelText: string = "Cancelar",
    icon: "warning" | "info" | "error" | "success"): void {}

  //Alertas
  alert(
    title: string,
    description: string,
    icon: "warning" | "info" | "error" | "success"): void {
    Swal.fire({
      title: title,
      text: description,
      icon: icon,
      showConfirmButton: true,
      allowOutsideClick: true,
      confirmButtonText: "Cerrar notificación"
    })
  }

  //Esconder
  hide() {
    if (Swal.isVisible()) {
      Swal.close();
    }
  }
}

