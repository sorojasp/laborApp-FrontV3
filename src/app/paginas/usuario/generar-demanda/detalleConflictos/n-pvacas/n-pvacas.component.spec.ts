import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPvacasComponent } from './n-pvacas.component';

describe('NPvacasComponent', () => {
  let component: NPvacasComponent;
  let fixture: ComponentFixture<NPvacasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPvacasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPvacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
