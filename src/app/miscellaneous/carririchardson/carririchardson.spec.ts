import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carririchardson } from './carririchardson';

describe('Carririchardson', () => {
  let component: Carririchardson;
  let fixture: ComponentFixture<Carririchardson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carririchardson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carririchardson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
