import {ProductoInterface} from './productos';

export interface ModeloPedido {
  slug:string;
  fechaCompra:string;
  entregaEstimada:string;
  precioTotal:number;
  productos: ProductoInterface[]
  detalleAbierto?: boolean;
}
