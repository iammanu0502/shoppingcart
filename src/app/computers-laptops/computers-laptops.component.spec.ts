import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersLaptopsComponent } from './computers-laptops.component';

describe('ComputersLaptopsComponent', () => {
  let component: ComputersLaptopsComponent;
  let fixture: ComponentFixture<ComputersLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputersLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
