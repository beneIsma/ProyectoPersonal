import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusquedaPorFiltroService {


  valorInput = signal<string>('')

  getValor(): string {
    return this.valorInput();
  }

  setValor(valor: string): void {
    this.valorInput.set(valor);
  }
}
