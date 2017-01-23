import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { HeaderComponent }  from './components/header.component';
import { IntroComponent }  from './components/intro.component';
import { AboutComponent }  from './components/about.component';
import { ContactComponent }  from './components/contact.component';
import { CustomersComponent }  from './components/customers.component';
import { IntroProfileCompnent } from './components/intro.profile.component'
import {DataTableModule,SharedModule} from './primeng/primeng';

@NgModule({
  imports:      [ BrowserModule,DataTableModule,SharedModule],
  declarations: [ AppComponent,HeaderComponent,IntroComponent,AboutComponent,ContactComponent,CustomersComponent,IntroProfileCompnent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
