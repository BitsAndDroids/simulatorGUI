import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGraphComponent } from './landing-graph.component';

describe('LandingGraphComponent', () => {
  let component: LandingGraphComponent;
  let fixture: ComponentFixture<LandingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
