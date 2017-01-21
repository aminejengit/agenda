import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { HeaderComponent }  from './components/header.component';
import { IntroComponent }  from './components/intro.component';
import { AboutComponent }  from './components/about.component';
import { ContactComponent }  from './components/contact.component';
import { CustomersComponent }  from './components/customers.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HeaderComponent,IntroComponent,AboutComponent,ContactComponent,CustomersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
