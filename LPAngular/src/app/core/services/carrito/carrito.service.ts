import {Injectable, signal} from '@angular/core';
import {ProductoInterface} from '../../../layouts/main-layout/components/pag-licores/pag-licores';
import {AlertasServices} from '../../utils/alertas/alertas.services';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  cart = signal<ProductoInterface[]>([])

  constructor(
    private alertasServices: AlertasServices,
  ) {
    const datosCarrito = localStorage.getItem("carrito");
    if (datosCarrito) {
      this.cart.set(JSON.parse(datosCarrito));
    }
  }

  getSize() {
    return this.cart().length;
  }

  guardarProductosCart() {
    localStorage.setItem('carrito', JSON.stringify(this.cart()));
  }
  eliminarLocalStorage(): void {
    localStorage.removeItem('carrito');
    localStorage.clear()
  }
  agregarProducto(producto: ProductoInterface){
    const p = this.cart().find((p => producto.slug === p.slug));
    if(p){
      p.cantidad += 1
    }else {
      this.cart().push({...producto, cantidad: 1});
    }
    this.guardarProductosCart();
    this.alertasServices.mensajeProductoArgregadoAlCarrito("Good",`${producto.nombre} se ha agregado al carrito`);
  }

  eliminarProducto(slug:string){
    this.cart.set(this.cart().filter((p => p.slug !== slug)))
    this.guardarProductosCart();
  }

  incrementarProducto(slug:string){
    const p = this.cart().find((p) => p.slug === slug);
    if (p) {
      p.cantidad ++
    }
    this.guardarProductosCart();
  }

  decrementarProducto(slug:string){
    const p = this.cart().find((p) => p.slug === slug);
    if (p && p.cantidad > 1) {
      p.cantidad --
    }else {
      this.eliminarProducto(slug);
    }
    this.guardarProductosCart();
  }

  totalCarrito(){
    let total = 0
    this.cart().forEach((p => {
      total += p.precioVenta * p.cantidad;
    }))
    return total;
  }
}
