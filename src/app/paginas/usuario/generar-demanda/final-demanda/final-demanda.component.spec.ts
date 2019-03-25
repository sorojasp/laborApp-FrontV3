import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDemandaComponent } from './final-demanda.component';

describe('FinalDemandaComponent', () => {
  let component: FinalDemandaComponent;
  let fixture: ComponentFixture<FinalDemandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDemandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
