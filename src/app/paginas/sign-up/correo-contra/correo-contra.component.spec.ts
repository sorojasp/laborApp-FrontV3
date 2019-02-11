import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoContraComponent } from './correo-contra.component';

describe('CorreoContraComponent', () => {
  let component: CorreoContraComponent;
  let fixture: ComponentFixture<CorreoContraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreoContraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
