import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { SolicitudesRoutingModule } from './solicitudes.routes';



@NgModule({
  declarations: [
    SolicitudesTableComponent,
  ],
  imports: [

    SolicitudesRoutingModule,
    CommonModule,



  ],
  exports:[
    SolicitudesTableComponent,
  ]
})
export class SolicitudesModule { }
