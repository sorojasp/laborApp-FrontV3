import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDemandadoComponent } from './datos-demandado.component';

describe('DatosDemandadoComponent', () => {
  let component: DatosDemandadoComponent;
  let fixture: ComponentFixture<DatosDemandadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDemandadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDemandadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
