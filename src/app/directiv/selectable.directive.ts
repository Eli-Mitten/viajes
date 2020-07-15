import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';
​
@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {
​
  @Input() appSelectable: string[] = [];
  @Output() selectableChanged = new EventEmitter<string>(false);
​
  readonly CSS_CLASS_SELECTOR = 'custom-selectable';
​
  constructor(private el: ElementRef, private rendered: Renderer2) { }
​
  @HostListener('click', ['$event'])
  onClick(event: Event): void {

    const cont = this.estaElSelectorYaEnElDom();
​
    if (cont) {
        this.rendered.removeChild(this.el.nativeElement.parentNode, cont);
    } else {
​
      // 1 Creamos contendor + clase identitaria
      const div: HTMLDivElement = this.rendered.createElement('div');
      this.rendered.addClass(div, this.CSS_CLASS_SELECTOR);
​
      // 2 Creamos elemento UL
      const ul: HTMLUListElement = this.rendered.createElement('ul');
​
      // 3 por cada valor de Datos
      // - Creamos LI + contenido
      // - Añadimos evento sobre li para establecer valor seleccionado en input y eliminar DIV
      this.appSelectable.forEach(opcion => {
        const li: HTMLLIElement = this.rendered.createElement('li');
        li.textContent = opcion;
        li.addEventListener('click', () => {
          this.el.nativeElement.value = opcion;
          this.rendered.removeChild(this.el.nativeElement.parentNode, div);
        });
        ul.appendChild(li);
      });
​
      // 4 Añadimos ul al contenedor e insertamos contenedor antes del input
      div.appendChild(ul);
      this.rendered.insertBefore(this.el.nativeElement.parentNode, div, this.el.nativeElement);
    }
  }
​
​
  private estaElSelectorYaEnElDom(): HTMLElement{
    return this.el.nativeElement.parentNode.querySelector('.' + this.CSS_CLASS_SELECTOR);
  }
​
}
