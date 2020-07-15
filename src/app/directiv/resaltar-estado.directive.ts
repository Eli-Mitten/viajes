import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ViajeEstado } from '../models/viaje';

@Directive({
  selector: '[appResaltarEstado]'
})
export class ResaltarEstadoDirective implements OnInit{

  @Input() estado: ViajeEstado;

  ViajeEstado = ViajeEstado;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  // ngOnInit(): void{
  //   if (this.estado === ViajeEstado.Abierto ) {
  //     this.renderer.setStyle(this.el.nativeElement, 'background-color' , 'green');
  //   }
  //   else if (this.estado === ViajeEstado.Cancelado ) {
  //     this.renderer.setStyle(this.el.nativeElement, 'background-color' , 'yellow');
  //   }
  //   else if (this.estado === ViajeEstado.Cerrado ) {
  //     this.renderer.setStyle(this.el.nativeElement, 'background-color' , 'red');
  //   }
  //   else if (this.estado === ViajeEstado.Postpuesto ) {
  //     this.renderer.setStyle(this.el.nativeElement, 'background-color' , 'orange');
  //   }
  // }

  ngOnInit(): void {
    // busco el elemento del don donde quiero añadir el icon
    const span: HTMLSpanElement = this.el.nativeElement.querySelector('p > span:last-child');

    // creo un elemento icon
    const icon = this.renderer.createElement('i');

    // Le añado clases y estilos al elemento ICON
    this.renderer.addClass(icon, 'fa');
    this.renderer.addClass(icon, this.dameIconoSegunEstadoViaje(this.estado));
    this.renderer.setStyle(icon, 'margin-left', '10px');

    // Añado el elemento ICON al contenedor que busque en el  paso 1
    this.renderer.appendChild(span, icon)


// Podríamos hacer la logica dentro del onInit pero la pasamos a la funcion de abajo.

    // switch(this.estado) {
    //   case ViajeEstado.Abierto:
    //     this.renderer.addClass(span, 'fa-lock-open');
    //     break;
    //   case ViajeEstado.Cerrado:
    //     this.renderer.addClass(span, 'fa-lock');
    //     break;
    // case ViajeEstado.Cancelado:
    //     this.renderer.addClass(span, 'fa-clock');
    //     break;
    // case ViajeEstado.Cerrado:
    //     this.renderer.addClass(span, 'fa-lock-open');
    //     break;
    // }
  }

dameIconoSegunEstadoViaje(estado: ViajeEstado): string{
  switch(estado) {
    case ViajeEstado.Abierto:
        return  'fa-lock-open';
    case ViajeEstado.Cerrado:
        return 'fa-lock';
    case ViajeEstado.Cancelado:
        return'fa-clock';
    case ViajeEstado.Cerrado:
         return 'fa-lock-open';
    default:
      return '';
  }
}

}
