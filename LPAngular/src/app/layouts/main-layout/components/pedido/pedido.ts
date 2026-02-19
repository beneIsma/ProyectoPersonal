import {Component, signal} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {PedidoServices} from '../../../../core/services/pedido/pedido.services';

@Component({
  selector: 'app-pedido',
  imports: [
    Layouts,
    Footer
  ],
  templateUrl: './pedido.html',
  styleUrl: './pedido.scss',
})
export class Pedido {

  constructor(
    protected pedidoService:PedidoServices,
  ) {
  }
  pedidos = signal<ModeloPedido[]>([])

  generarPedido() {
    // @ts-ignore
    this.pedidos.set(this.pedidoService.generarSlugAleatorio())
  }
}


export interface ModeloPedido {
  slug:string;
  fechaCompra:string;
  detallesPedido:string;
  entregaEstimada:string;
  precioTotal:number;
}
