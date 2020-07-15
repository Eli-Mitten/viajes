import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje, ViajeEstado } from '../models/viaje';

@Component({
  selector: 'app-viaje-detalle',
  templateUrl: './viaje-detalle.component.html',
  styleUrls: ['./viaje-detalle.component.scss']
})
export class ViajeDetalleComponent implements OnInit {

  // @Input() nombreDelViaje: string;
  // @Input() tipoViaje: string;
  // @Input() destinoViaje: string;
  // @Input() duracionViaje: number;

  ViajeEstado = ViajeEstado;

  @Input() viaje: Viaje;


  @Output() monstrarViaje = new EventEmitter<string>(false);
  @Output() mostrarDuracion = new EventEmitter<number>(false); // mostrarDuracion usada en padre

  opciones = ['Categoría Prime', 'Categoría Economica', 'Categoría media', 'Categoría Superior'];
  constructor() {
  }

  ngOnInit(): void {
  }

  monstrarViajeClick(): void {
    console.warn('montrarViajeClick clickeado');
    this.monstrarViaje.emit(`Esto es el titulo: ${this.viaje.nombreDelViaje} `);
  }

  mostrarDuracionDobleClick(): void {
    console.log('La duración pasa al alert es: ', this.viaje.duracionViaje);
    this.mostrarDuracion.emit(this.viaje.duracionViaje);
  }

  ocultarViaje(): void {
    this.viaje.visible = !this.viaje.visible;
  }

  textChanged(text: string): void {
    console.log(text);
    this.viaje.tipoViaje = text;
  }
}
