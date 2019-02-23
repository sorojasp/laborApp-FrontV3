import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionConflictosComponent } from './seleccion-conflictos.component';

describe('SeleccionConflictosComponent', () => {
  let component: SeleccionConflictosComponent;
  let fixture: ComponentFixture<SeleccionConflictosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionConflictosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionConflictosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
