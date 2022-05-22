import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingS1Component } from './pricing-s1.component';

describe('PricingS1Component', () => {
  let component: PricingS1Component;
  let fixture: ComponentFixture<PricingS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
