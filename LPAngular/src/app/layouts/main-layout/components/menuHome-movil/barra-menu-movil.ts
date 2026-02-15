import {Component, output} from '@angular/core';

@Component({
  selector: 'app-menuHome-movil',
  imports: [],
  templateUrl: './barra-menu-movil.html',
  styleUrl: './barra-menu-movil.scss',
})
export class BarraMenuMovil {
  openBarraDesdeMainLayout = output()
}
