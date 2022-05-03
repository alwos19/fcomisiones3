import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesTablaComponent } from './comisiones-tabla.component';

describe('ComisionesTablaComponent', () => {
  let component: ComisionesTablaComponent;
  let fixture: ComponentFixture<ComisionesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComisionesTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
