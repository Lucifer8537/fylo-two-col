import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';
import { ProductiveComponent } from './productive/productive.component';
import { EarlyAccessComponent } from './early-access/early-access.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EmailComponent, ProductiveComponent, EarlyAccessComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
