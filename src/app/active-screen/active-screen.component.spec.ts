import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveScreenComponent } from './active-screen.component';

describe('ActiveScreenComponent', () => {
  let component: ActiveScreenComponent;
  let fixture: ComponentFixture<ActiveScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
