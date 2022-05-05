import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesBuscarComponent } from './solicitudes-buscar.component';

describe('SolicitudesBuscarComponent', () => {
  let component: SolicitudesBuscarComponent;
  let fixture: ComponentFixture<SolicitudesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
