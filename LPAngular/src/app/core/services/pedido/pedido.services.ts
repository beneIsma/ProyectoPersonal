import {Injectable, signal} from '@angular/core';
import {ModeloPedido} from '../../interfaces/modeloPedido';
import {ProductoInterface} from '../../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class PedidoServices {

  pedidos = signal<ModeloPedido[]>([])

  constructor() {
    const pedidos = localStorage.getItem('pedidos')
    if (pedidos) {
      this.pedidos.set(JSON.parse(pedidos));
    }
  }

  guardarPedidosEnLocalStorage() {
    localStorage.setItem('pedidos', JSON.stringify(this.pedidos()))
  }

  crearPedido(productos: ProductoInterface[]) {
    const slug = Math.random().toString(10).substring(7);
    const total = productos.reduce((cont,p) => cont += p.precioVenta * p.cantidad,0)
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 3)

    const pedido: ModeloPedido = {
      slug: slug,
      fechaCompra: new Date().toLocaleDateString(),
      entregaEstimada: fecha.toLocaleDateString(),
      precioTotal: total,
      productos: productos,
    }
    this.pedidos.update(pedidos => [...pedidos, pedido]);

    this.guardarPedidosEnLocalStorage();

    return pedido
  }

  getPedido() {
    return this.pedidos();
  }
}
