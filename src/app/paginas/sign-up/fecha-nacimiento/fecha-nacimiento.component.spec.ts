import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaNacimientoComponent } from './fecha-nacimiento.component';

describe('FechaNacimientoComponent', () => {
  let component: FechaNacimientoComponent;
  let fixture: ComponentFixture<FechaNacimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaNacimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
