import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomApeGeneComponent } from './nom-ape-gene.component';

describe('NomApeGeneComponent', () => {
  let component: NomApeGeneComponent;
  let fixture: ComponentFixture<NomApeGeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomApeGeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomApeGeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
