import { Component } from '@angular/core';
import {Layouts} from '../../../layouts';
import {Footer} from '../../../footer/footer';
import {CarritoService} from '../../../../core/services/carrito/carrito.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [
    Layouts,
    Footer,
    NgIf
  ],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {

  constructor(public carritoService: CarritoService) {
    this.carritoService.guardarProductosCart()
  }
}
