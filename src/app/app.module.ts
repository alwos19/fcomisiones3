import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComisionesModule } from './comisiones/comisiones.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    ComisionesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
