import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContratoComponent } from './datos-contrato.component';

describe('DatosContratoComponent', () => {
  let component: DatosContratoComponent;
  let fixture: ComponentFixture<DatosContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
