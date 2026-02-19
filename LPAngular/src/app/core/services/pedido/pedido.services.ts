import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PedidoServices {
  generarSlugAleatorio() {
    const slug = Math.random().toString(10).substring(7);
    console.log(slug)
    return slug
  }
  tramitarPedido() {
    let slug = this.generarSlugAleatorio()
    return slug
  }
}
