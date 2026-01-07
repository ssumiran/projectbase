import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leavetracker } from './leavetracker';

describe('Leavetracker', () => {
  let component: Leavetracker;
  let fixture: ComponentFixture<Leavetracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leavetracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leavetracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
