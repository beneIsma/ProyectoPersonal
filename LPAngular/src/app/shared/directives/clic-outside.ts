import {Directive, ElementRef, HostListener, inject, output} from '@angular/core';

@Directive({
  selector: '[appClicOutside]',
  standalone: true,
})
export class ClicOutside {

  private elementRef = inject(ElementRef<HTMLElement>);

  clickFuera = output() //SI SE PRESIONA FUERA DEL ELEMENTO ÉSTE SE CIERRA EMITIENDO UNA SEÑAL
  constructor() { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    //COMPROBAMOS SI EL ELEMENTO FUE CLICADO O NO, DE LO CONTRARIO EMITIMOS UNA SEÑAL Y SALIMOS.
    const clickInside = this.elementRef.nativeElement.contains(event.target as Node)

    if (!clickInside) {
      this.clickFuera.emit()
    }
  }
}
