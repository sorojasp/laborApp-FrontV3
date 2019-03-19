import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPprimaComponent } from './n-pprima.component';

describe('NPprimaComponent', () => {
  let component: NPprimaComponent;
  let fixture: ComponentFixture<NPprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
