import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespidoComponent } from './despido.component';

describe('DespidoComponent', () => {
  let component: DespidoComponent;
  let fixture: ComponentFixture<DespidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
