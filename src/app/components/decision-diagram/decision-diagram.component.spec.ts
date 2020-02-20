import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionDiagramComponent } from './decision-diagram.component';

describe('DecisionDiagramComponent', () => {
  let component: DecisionDiagramComponent;
  let fixture: ComponentFixture<DecisionDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
