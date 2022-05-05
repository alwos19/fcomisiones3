import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { SolicitudesBuscarComponent } from './components/solicitudes-buscar/solicitudes-buscar.component';
import { SolicitudesRoutingModule } from './solicitudes.routes';



@NgModule({
  declarations: [
    SolicitudesTableComponent,
    SolicitudesBuscarComponent
  ],
  imports: [

    SolicitudesRoutingModule,
    CommonModule,



  ],
  exports:[
    SolicitudesTableComponent,
    SolicitudesBuscarComponent
  ]
})
export class SolicitudesModule { }
