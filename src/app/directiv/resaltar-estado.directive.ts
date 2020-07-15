import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltarEstado]'
})
export class ResaltarEstadoDirective {

  @Input() estado: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void{
    if (this.estado === 1 ) {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    if (this.estado === 2 ) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    if (this.estado === 3 ) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
    if (this.estado === 4 ) {
      this.el.nativeElement.style.backgroundColor = 'orange';
    }
  }

}
