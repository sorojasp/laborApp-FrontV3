import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaJuridicaComponent } from './demanda-juridica.component';

describe('DemandaJuridicaComponent', () => {
  let component: DemandaJuridicaComponent;
  let fixture: ComponentFixture<DemandaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
