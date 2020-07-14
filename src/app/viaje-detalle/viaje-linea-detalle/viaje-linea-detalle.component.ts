import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viaje-linea-detalle',
  templateUrl: './viaje-linea-detalle.component.html',
  styleUrls: ['./viaje-linea-detalle.component.scss']
})
export class ViajeLineaDetalleComponent implements OnInit {

  @Input() clave: string;
  @Input() valor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
