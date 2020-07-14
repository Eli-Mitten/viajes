import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') background: string;
  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', this.background || 'yellow');
    // */ no lo declarammos en el constructor porque no tiene los datos necesarios
   }

  ngOnInit(): void{
    // this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
    // this.el.nativeElement.style.color = this.color || 'white';

    // this.renderer.setStyle(this.el.nativeElement, 'background-color', this.background || 'yellow');
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color || 'white');
  }
  @HostListener('mouseenter')
  elRatonEntra(): void{
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.background || 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color || 'white');

    const span = HTMLSpanElement = this.renderer.createElement('span');
    span.textContent = 'Estoy dentro del elemento co na la directiva';

    const container = this.el.nativeElement.querySelector('div');
    if ( container ){
      this.renderer.appendChild(container, span);
    }
  }

  @HostListener('mouseleave')
  elRatonSale(): void{
    this.renderer.setStyle(this.el.nativeElement, 'background-color', null );
    this.renderer.setStyle(this.el.nativeElement, 'color', null) ;

    const span = this.el.nativeElement.querySelector('div')?.querySelector('div > span');
    if (span) {
      this.renderer.removeChild(this.el.nativeElement.querySelector('div'), span);
    }
  }

}
