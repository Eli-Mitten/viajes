import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViajeDetalleComponent } from './viaje-detalle/viaje-detalle.component';
import { ViajeLineaDetalleComponent } from './viaje-detalle/viaje-linea-detalle/viaje-linea-detalle.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViajeDetalleComponent,
    ViajeLineaDetalleComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
