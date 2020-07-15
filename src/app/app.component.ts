import { Component } from '@angular/core';
import { Viaje, ViajeEstado } from './models/viaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  viajes: Viaje[] = [];
  duracionTotal: number = null;
  tiposDeViajes = [];

  constructor() {

    this.viajes.push({
      nombreDelViaje: 'Safari por Kenia',
      tipoViaje: 'Safari',
      destinoViaje: 'Kenia',
      duracionViaje: 10,
      visible: true,
      estado: ViajeEstado.Abierto
    });

    this.viajes.push({
      nombreDelViaje: 'Subida al Everes',
      tipoViaje: 'Aventura',
      destinoViaje: 'Nepal',
      duracionViaje: 22,
      visible: true,
      estado: ViajeEstado.Cancelado
    });

    // const viaje = new Viaje();
    // this.viajes.push(viaje);

    // const viaje2 = new Viaje({
    //   this.nombreDelViaje = 'Lisboa'
    // })

    this.viajes.push({
      nombreDelViaje: 'Crucero por el Mediterraneo',
      tipoViaje: 'Crucero',
      destinoViaje: 'Europa',
      duracionViaje: 15,
      visible: true,
      estado: ViajeEstado.Cerrado
    });

    this.tiposDeViajes = this.viajes.map(x => x.tipoViaje);
  }

  // tslint:disable-next-line: typedef
  btnViajesClicked(): void {
    alert(`La aplicacion tiene un total de ${this.viajes.length} viajes`);
  }

  alertViajeDuracion(duracion: number): void {
    console.log('Entra en el alert de alertViajeDuracion');
    alert(duracion);
    this.duracionTotal += duracion;
    sessionStorage.setItem('duracionTotal', `${this.duracionTotal}`);
  }

  mostrarInfo(mensaje: string): void{
    alert(mensaje);
  }

  verDuracionTotal(): void{
    const d = sessionStorage.getItem('duracionTotal');
    alert(`La duracion total de viajes seleccionados ${d}`);
  }

  visiblidadViaje(viaje: Viaje): void {
    viaje.visible = !viaje.visible;
  }
}
