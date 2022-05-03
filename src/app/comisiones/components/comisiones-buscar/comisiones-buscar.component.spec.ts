import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesBuscarComponent } from './comisiones-buscar.component';

describe('ComisionesBuscarComponent', () => {
  let component: ComisionesBuscarComponent;
  let fixture: ComponentFixture<ComisionesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComisionesBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
