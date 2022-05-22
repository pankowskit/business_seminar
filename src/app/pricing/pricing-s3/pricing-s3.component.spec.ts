import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingS3Component } from './pricing-s3.component';

describe('PricingS3Component', () => {
  let component: PricingS3Component;
  let fixture: ComponentFixture<PricingS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
