import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingS2Component } from './pricing-s2.component';

describe('PricingS2Component', () => {
  let component: PricingS2Component;
  let fixture: ComponentFixture<PricingS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
