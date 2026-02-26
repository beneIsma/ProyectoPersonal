import {Component, OnInit, signal} from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {PedidoServices} from '../../../../core/services/pedido/pedido.services';
import {DatosUsuarioService} from '../../../../core/services/datos-usuario/datos-usuario.service';
import {ModeloPedido} from '../../../../core/interfaces/modeloPedido';

@Component({
  selector: 'app-pedido',
  imports: [
    Layouts,
    Footer,
  ],
  templateUrl: './pedido.html',
  styleUrl: './pedido.scss',
})
export class Pedido implements OnInit {

  constructor(
    protected pedidoService:PedidoServices,
    protected datosUsuarioService: DatosUsuarioService,
  ) {
    this.pedidoService.guardarPedidosEnLocalStorage()
  }

  pedidos = signal<ModeloPedido[]>([])
  pedidoAbierto = signal<string | null>(null)

  toggleDetallesPedido(slug: string) {
    this.pedidoAbierto.set(this.pedidoAbierto() === slug ? null : slug);
  }


  ngOnInit() {
    this.pedidos.set(this.pedidoService.getPedido())
  }
}
