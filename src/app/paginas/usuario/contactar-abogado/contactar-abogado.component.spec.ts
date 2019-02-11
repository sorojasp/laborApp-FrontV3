import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarAbogadoComponent } from './contactar-abogado.component';

describe('ContactarAbogadoComponent', () => {
  let component: ContactarAbogadoComponent;
  let fixture: ComponentFixture<ContactarAbogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactarAbogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactarAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
