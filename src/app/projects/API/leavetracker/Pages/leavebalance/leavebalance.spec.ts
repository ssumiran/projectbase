import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leavebalance } from './leavebalance';

describe('Leavebalance', () => {
  let component: Leavebalance;
  let fixture: ComponentFixture<Leavebalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leavebalance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leavebalance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
