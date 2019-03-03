import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPcesantiasComponent } from './n-pcesantias.component';

describe('NPcesantiasComponent', () => {
  let component: NPcesantiasComponent;
  let fixture: ComponentFixture<NPcesantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPcesantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPcesantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
