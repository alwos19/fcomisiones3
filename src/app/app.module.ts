import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ComisionesService } from './solicitudes/services/comisiones/comisiones.service';
import { PermisosService } from './solicitudes/services/permisos/permisos.service';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudesModule

  ],

  exports:[

  ],
  providers: [ ComisionesService, PermisosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
