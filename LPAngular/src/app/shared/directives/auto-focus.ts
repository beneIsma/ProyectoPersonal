import {AfterViewInit, Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocus implements AfterViewInit {

  //OBTENEMOS EL ELEMENTO AL QUE LE PONEMOS AL SELECTOR, EN ELEMENTREF ESTARIAMOS GUARDANDO EL INPUT
  private elementRef = inject(ElementRef<HTMLElement>)
  enabled = input<boolean>(true);
  constructor() { }

  ngAfterViewInit(): void {
    if (!this.enabled) {
      return;
    }
    //ES UNA MICROTAREA, SIMILAR A SETTIMEOUT, LO QUE HACE ES QUE AL PINCHAR EN EL INPUT EN ESTE CASO EN EL DE LOGIN(EMAIL)
    //DIRECTAMENTE SE TE ABRA CON FOCUS EN EL INPUT DE EMAIL.
    queueMicrotask(() => {
      this.elementRef.nativeElement.focus();
    })
  }

}
