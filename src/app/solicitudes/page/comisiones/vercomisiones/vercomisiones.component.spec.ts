import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercomisionesComponent } from './vercomisiones.component';

describe('VercomisionesComponent', () => {
  let component: VercomisionesComponent;
  let fixture: ComponentFixture<VercomisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercomisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercomisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
