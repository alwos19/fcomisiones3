import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEvalucionPropuestaComponent } from './f-evalucion-propuesta.component';

describe('FEvalucionPropuestaComponent', () => {
  let component: FEvalucionPropuestaComponent;
  let fixture: ComponentFixture<FEvalucionPropuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEvalucionPropuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEvalucionPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
