import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesTableComponent } from './components/solicitudes-table/solicitudes-table.component';
import { SolicitudesRoutingModule } from './solicitudes.routes';
import { VercomisionesComponent } from './page/comisiones/vercomisiones/vercomisiones.component';



@NgModule({
  declarations: [
    SolicitudesTableComponent,
    VercomisionesComponent,
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
