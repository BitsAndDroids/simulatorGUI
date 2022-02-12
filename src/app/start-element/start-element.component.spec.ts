import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartElementComponent } from './start-element.component';

describe('StartElementComponent', () => {
  let component: StartElementComponent;
  let fixture: ComponentFixture<StartElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
