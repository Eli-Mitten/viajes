import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViajeDetalleComponent } from './viaje-detalle/viaje-detalle.component';
import { ViajeLineaDetalleComponent } from './viaje-detalle/viaje-linea-detalle/viaje-linea-detalle.component';
import { HighlightDirective } from './highlight.directive';
import { ResaltarEstadoDirective } from './directiv/resaltar-estado.directive';
import { SelectableDirective } from './directiv/selectable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViajeDetalleComponent,
    ViajeLineaDetalleComponent,
    HighlightDirective,
    ResaltarEstadoDirective,
    SelectableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
