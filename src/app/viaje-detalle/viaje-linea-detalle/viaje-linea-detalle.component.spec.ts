import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeLineaDetalleComponent } from './viaje-linea-detalle.component';

describe('ViajeLineaDetalleComponent', () => {
  let component: ViajeLineaDetalleComponent;
  let fixture: ComponentFixture<ViajeLineaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeLineaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeLineaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
