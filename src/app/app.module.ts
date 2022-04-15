import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { TrendGifsComponent } from './trend-gifs/trend-gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    Header3Component,
    TrendGifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
