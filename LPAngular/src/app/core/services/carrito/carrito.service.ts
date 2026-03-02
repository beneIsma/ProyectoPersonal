import {Injectable, signal} from '@angular/core';
import {ProductoInterface} from '../../interfaces/productos';
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
  }
  agregarProducto(producto: ProductoInterface) {
    this.cart.update(cart => {
      const existe = cart.find(p => p.slug === producto.slug);

      if (existe) {
        return cart.map(p => p.slug === producto.slug ? { ...p, cantidad: p.cantidad + 1 } : p);
      } else {
        return [...cart, { ...producto, cantidad: 1 }];
      }
    });

    this.guardarProductosCart();
    this.alertasServices.mensajeProductoArgregadoAlCarrito(
      "Good",
      `${producto.nombre} se ha agregado al carrito`
    );
  }

  eliminarProducto(slug:string){
    this.cart.set(this.cart().filter((p => p.slug !== slug)))
    this.guardarProductosCart();
  }

  incrementarProducto(slug: string) {
    this.cart.update(cart => cart.map(p => p.slug === slug ? { ...p, cantidad: p.cantidad + 1 } : p));
    this.guardarProductosCart();
  }

  decrementarProducto(slug: string) {
    this.cart.update(cart => cart.map(p => p.slug === slug ? { ...p, cantidad: p.cantidad - 1 } : p).filter(p => p.cantidad > 0));
    this.guardarProductosCart();
  }

  totalCarrito(){
    let total = 0
    this.cart().forEach((p => {
      total += p.precioVenta * p.cantidad;
    }))
    return total;
  }

  lengthCarrito(){
    return this.cart().length;
  }
}
