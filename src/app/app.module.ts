import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingModule } from './pricing/pricing.module';
import { PrivacyModule } from './privacy/privacy.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    AppRoutingModule,
    BlogModule,
    ComingsoonModule,
    ContactModule,
    HomeModule,
    PricingModule,
    PrivacyModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
