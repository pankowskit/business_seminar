import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing/pricing.component';
import { PricingS1Component } from './pricing-s1/pricing-s1.component';
import { PricingS2Component } from './pricing-s2/pricing-s2.component';
import { PricingS3Component } from './pricing-s3/pricing-s3.component';


@NgModule({
  declarations: [
    PricingComponent,
    PricingS1Component,
    PricingS2Component,
    PricingS3Component
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
