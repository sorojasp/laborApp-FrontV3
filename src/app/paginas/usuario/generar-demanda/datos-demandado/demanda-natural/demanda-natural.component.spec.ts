import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaNaturalComponent } from './demanda-natural.component';

describe('DemandaNaturalComponent', () => {
  let component: DemandaNaturalComponent;
  let fixture: ComponentFixture<DemandaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
