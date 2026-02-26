export interface ProductoInterface {
  nombre:string,
  slug:string,
  categoria:string,
  seccion:string,
  precio:number,
  precioVenta:number,
  proveedor:string,
  marca:string,
  imagen:string,
  descripcion:string,
  cantidad: number;
}

export interface seccionesLicores {
  categoria:string;
  nombre:string;
  imagen:string;
}
