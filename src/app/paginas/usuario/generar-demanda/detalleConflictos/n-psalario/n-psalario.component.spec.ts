import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPsalarioComponent } from './n-psalario.component';

describe('NPsalarioComponent', () => {
  let component: NPsalarioComponent;
  let fixture: ComponentFixture<NPsalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPsalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPsalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
