import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaSolicitudesComponent } from './components/tabla-solicitudes/tabla-solicitudes.component';
import { HomeRoutingModule } from './home.routes';



@NgModule({
  declarations: [
    TablaSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
