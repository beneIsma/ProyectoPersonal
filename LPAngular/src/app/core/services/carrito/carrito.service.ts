import { Injectable } from '@angular/core';
import {ProductoInterface} from '../../../layouts/main-layout/components/pag-licores/pag-licores';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  cart: ProductoInterface[] = []

  constructor() {
    const datosCarrito = localStorage.getItem("carrito");
    if (datosCarrito) {
      this.cart = JSON.parse(datosCarrito);
    }
  }

  guardarProductosCart() {
    localStorage.setItem('carrito', JSON.stringify(this.cart));
  }

  agregarProducto(producto: ProductoInterface){
    const p = this.cart.find((p => producto.slug === p.slug));
    if(p){
      p.cantidad += 1
    }else {
      this.cart.push({...producto, cantidad: 1});
    }
    this.guardarProductosCart();
  }

  eliminarProducto(slug:string){
    this.cart = this.cart.filter((p => p.slug !== slug))
    this.guardarProductosCart();
  }

  incrementarProducto(slug:string){
    const p = this.cart.find((p) => p.slug === slug);
    if (p) {
      p.cantidad ++
    }
    this.guardarProductosCart();
  }

  decrementarProducto(slug:string){
    const p = this.cart.find((p) => p.slug === slug);
    if (p && p.cantidad > 1) {
      p.cantidad --
    }else {
      this.eliminarProducto(slug);
    }
    this.guardarProductosCart();
  }

  totalCarrito(){
    let total = 0
    this.cart.forEach((p => {
      total += p.precioVenta * p.cantidad;
    }))
    return total;
  }
}
