import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaverequest } from './leaverequest';

describe('Leaverequest', () => {
  let component: Leaverequest;
  let fixture: ComponentFixture<Leaverequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leaverequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leaverequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
